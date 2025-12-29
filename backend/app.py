from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import pandas as pd
import os
from io import BytesIO
from werkzeug.utils import secure_filename

from modules.data_cleaner import DataCleaner
from modules.stats_engine import StatsEngine
from modules.chart_generator import ChartGenerator
from modules.insight_engine import InsightEngine
from modules.dynamic_chart_generator import DynamicChartGenerator

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# Configuration
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'csv', 'xlsx', 'xls'}
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = MAX_FILE_SIZE

# Ensure upload folder exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


def allowed_file(filename):
    """Check if file extension is allowed."""
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint."""
    return jsonify({'status': 'healthy', 'message': 'InsightFlow API is running'}), 200


@app.route('/api/upload', methods=['POST'])
def upload_file():
    """
    Handle file upload and return preview.
    
    Returns:
        JSON with file info and data preview
    """
    try:
        # Check if file is present
        if 'file' not in request.files:
            return jsonify({'error': 'No file provided'}), 400
        
        file = request.files['file']
        
        if file.filename == '':
            return jsonify({'error': 'No file selected'}), 400
        
        if not allowed_file(file.filename):
            return jsonify({'error': 'Invalid file type. Please upload CSV or Excel file'}), 400
        
        # Save file
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        # Read file based on extension
        file_ext = filename.rsplit('.', 1)[1].lower()
        if file_ext == 'csv':
            df = pd.read_csv(filepath)
        else:
            df = pd.read_excel(filepath)
        
        # Basic validation
        if df.empty:
            return jsonify({'error': 'File is empty'}), 400
        
        # Return preview
        preview = {
            'filename': filename,
            'rows': len(df),
            'columns': len(df.columns),
            'column_names': list(df.columns),
            'preview': df.head(10).to_dict(orient='records'),
            'filepath': filepath
        }
        
        return jsonify(preview), 200
    
    except Exception as e:
        return jsonify({'error': f'Error processing file: {str(e)}'}), 500


@app.route('/api/analyze', methods=['POST'])
def analyze_data():
    """
    Analyze uploaded data and return comprehensive results.
    
    Expected JSON body:
        {
            "filepath": "path/to/uploaded/file.csv"
        }
    
    Returns:
        JSON with cleaned data, statistics, charts, and insights
    """
    try:
        data = request.get_json()
        filepath = data.get('filepath')
        
        if not filepath or not os.path.exists(filepath):
            return jsonify({'error': 'Invalid file path'}), 400
        
        # Read file
        file_ext = filepath.rsplit('.', 1)[1].lower()
        if file_ext == 'csv':
            df = pd.read_csv(filepath)
        else:
            df = pd.read_excel(filepath)
        
        # Step 1: Clean data
        cleaner = DataCleaner(df)
        cleaned_df, cleaning_report = cleaner.clean()
        
        # Step 2: Calculate statistics
        stats_engine = StatsEngine(cleaned_df, cleaning_report['column_types'])
        stats = stats_engine.calculate_all()
        
        # Step 3: Generate charts
        chart_generator = ChartGenerator(cleaned_df, cleaning_report['column_types'])
        charts = chart_generator.generate_all()
        
        # Step 4: Generate insights
        insight_engine = InsightEngine(cleaned_df, cleaning_report['column_types'], stats)
        insights = insight_engine.generate_insights()
        
        # Step 5: Get cleaned data preview
        preview = cleaner.get_preview(rows=10)
        
        # Compile results
        results = {
            'cleaning_report': cleaning_report,
            'preview': preview,
            'statistics': stats,
            'charts': charts,
            'insights': insights
        }
        
        return jsonify(results), 200
    
    except Exception as e:
        return jsonify({'error': f'Error analyzing data: {str(e)}'}), 500


@app.route('/api/generate-chart', methods=['POST'])
def generate_chart():
    """
    Generate a chart for a specific column.
    
    Expected JSON body:
        {
            "filepath": "path/to/uploaded/file.csv",
            "column_name": "Sales",
            "chart_type": "trend" | "bar" | "histogram"
        }
    
    Returns:
        JSON with chart image
    """
    try:
        data = request.get_json()
        filepath = data.get('filepath')
        column_name = data.get('column_name')
        chart_type = data.get('chart_type', 'trend')
        
        print(f"DEBUG: Received filepath: {filepath}")
        print(f"DEBUG: Column name: {column_name}")
        print(f"DEBUG: Chart type: {chart_type}")
        
        if not filepath:
            return jsonify({'error': 'Filepath is required'}), 400
        
        # Convert to absolute path if relative
        if not os.path.isabs(filepath):
            filepath = os.path.abspath(filepath)
            print(f"DEBUG: Converted to absolute path: {filepath}")
            
        if not os.path.exists(filepath):
            return jsonify({'error': f'File not found: {filepath}'}), 400
        
        if not column_name:
            return jsonify({'error': 'Column name is required'}), 400
        
        # Read file
        file_ext = filepath.rsplit('.', 1)[1].lower()
        if file_ext == 'csv':
            df = pd.read_csv(filepath)
        else:
            df = pd.read_excel(filepath)
        
        # Clean data first
        cleaner = DataCleaner(df)
        cleaned_df, cleaning_report = cleaner.clean()
        
        # Generate chart
        chart_gen = DynamicChartGenerator(cleaned_df, cleaning_report['column_types'])
        
        print(f"DEBUG: Column type for '{column_name}': {cleaning_report['column_types'].get(column_name)}")
        
        chart = None
        if chart_type == 'trend':
            chart = chart_gen.generate_trend_chart(column_name)
        elif chart_type == 'bar':
            chart = chart_gen.generate_bar_chart(column_name)
        elif chart_type == 'histogram':
            chart = chart_gen.generate_histogram(column_name)
        else:
            return jsonify({'error': 'Invalid chart type'}), 400
        
        print(f"DEBUG: Chart generated: {chart is not None}")
        
        if not chart:
            col_type = cleaning_report['column_types'].get(column_name, 'unknown')
            return jsonify({
                'error': f'Cannot generate {chart_type} chart for column "{column_name}" (type: {col_type}). Try a different chart type.'
            }), 400
        
        return jsonify({
            'chart': chart,
            'column_name': column_name,
            'chart_type': chart_type
        }), 200
    
    except Exception as e:
        return jsonify({'error': f'Error generating chart: {str(e)}'}), 500


@app.route('/api/generate-plotly-chart', methods=['POST'])
def generate_plotly_chart():
    """
    Generate an interactive Plotly chart for a specific column.
    
    Expected JSON body:
        {
            "filepath": "path/to/uploaded/file.csv",
            "column_name": "Sales",
            "chart_type": "line" | "bar" | "histogram" | "scatter" | "box" | "pie"
        }
    
    Returns:
        JSON with Plotly chart configuration
    """
    try:
        from modules.plotly_chart_generator import PlotlyChartGenerator
        
        data = request.get_json()
        filepath = data.get('filepath')
        column_name = data.get('column_name')
        chart_type = data.get('chart_type', 'line')
        
        print(f"DEBUG: Plotly chart - filepath: {filepath}, column: {column_name}, type: {chart_type}")
        
        if not filepath:
            return jsonify({'error': 'Filepath is required'}), 400
        
        # Convert to absolute path if relative
        if not os.path.isabs(filepath):
            filepath = os.path.abspath(filepath)
            
        if not os.path.exists(filepath):
            return jsonify({'error': f'File not found: {filepath}'}), 400
        
        if not column_name:
            return jsonify({'error': 'Column name is required'}), 400
        
        # Read file
        file_ext = filepath.rsplit('.', 1)[1].lower()
        if file_ext == 'csv':
            df = pd.read_csv(filepath)
        else:
            df = pd.read_excel(filepath)
        
        # Clean data first
        cleaner = DataCleaner(df)
        cleaned_df, cleaning_report = cleaner.clean()
        
        # Generate Plotly chart
        chart_gen = PlotlyChartGenerator(cleaned_df, cleaning_report['column_types'])
        
        chart_config = None
        if chart_type == 'line':
            chart_config = chart_gen.generate_line_chart(column_name)
        elif chart_type == 'bar':
            chart_config = chart_gen.generate_bar_chart(column_name)
        elif chart_type == 'histogram':
            chart_config = chart_gen.generate_histogram(column_name)
        elif chart_type == 'box':
            chart_config = chart_gen.generate_box_plot(column_name)
        elif chart_type == 'pie':
            chart_config = chart_gen.generate_pie_chart(column_name)
        else:
            return jsonify({'error': 'Invalid chart type'}), 400
        
        if not chart_config:
            col_type = cleaning_report['column_types'].get(column_name, 'unknown')
            return jsonify({
                'error': f'Cannot generate {chart_type} chart for column "{column_name}" (type: {col_type}). Try a different chart type.'
            }), 400
        
        return jsonify({
            'chart': chart_config,
            'column_name': column_name,
            'chart_type': chart_type
        }), 200
    
    except Exception as e:
        import traceback
        print(f"Plotly chart generation error: {str(e)}")
        print(f"Traceback: {traceback.format_exc()}")
        return jsonify({'error': f'Error generating chart: {str(e)}'}), 500


@app.route('/api/download-cleaned-data', methods=['POST'])
def download_cleaned_data():
    """
    Download the cleaned dataset as CSV.
    
    Expected JSON body:
        {
            "filepath": "path/to/uploaded/file.csv"
        }
    
    Returns:
        CSV file download
    """
    try:
        data = request.get_json()
        filepath = data.get('filepath')
        
        if not filepath:
            return jsonify({'error': 'Filepath is required'}), 400
        
        # Convert to absolute path if relative
        if not os.path.isabs(filepath):
            filepath = os.path.abspath(filepath)
            
        if not os.path.exists(filepath):
            return jsonify({'error': f'File not found: {filepath}'}), 400
        
        # Read file
        file_ext = filepath.rsplit('.', 1)[1].lower()
        if file_ext == 'csv':
            df = pd.read_csv(filepath)
        else:
            df = pd.read_excel(filepath)
        
        # Clean data
        cleaner = DataCleaner(df)
        cleaned_df, cleaning_report = cleaner.clean()
        
        # Convert to CSV
        csv_data = cleaned_df.to_csv(index=False)
        
        # Create response with file download
        response = make_response(csv_data)
        response.headers['Content-Type'] = 'text/csv'
        response.headers['Content-Disposition'] = f'attachment; filename=cleaned_{os.path.basename(filepath)}'
        
        return response
    
    except Exception as e:
        import traceback
        print(f"Download cleaned data error: {str(e)}")
        print(f"Traceback: {traceback.format_exc()}")
        return jsonify({'error': f'Error downloading cleaned data: {str(e)}'}), 500


@app.route('/api/export-pdf', methods=['POST'])
def export_pdf():
    """
    Generate and download PDF report.
    
    Expected JSON body:
        {
            "filepath": "path/to/uploaded/file.csv",
            "analysis_results": { ... }
        }
    
    Returns:
        PDF file download
    """
    try:
        from modules.pdf_generator import PDFReportGenerator
        from flask import send_file
        
        data = request.get_json()
        filepath = data.get('filepath')
        analysis_results = data.get('analysis_results')
        
        if not filepath or not analysis_results:
            return jsonify({'error': 'Missing required data'}), 400
        
        # Get filename
        filename = os.path.basename(filepath)
        
        # Generate PDF
        pdf_gen = PDFReportGenerator(filename)
        pdf_data = pdf_gen.generate(analysis_results)
        
        # Create response
        pdf_buffer = BytesIO(pdf_data)
        pdf_buffer.seek(0)
        
        return send_file(
            pdf_buffer,
            mimetype='application/pdf',
            as_attachment=True,
            download_name=f'InsightFlow_Report_{filename.rsplit(".", 1)[0]}.pdf'
        )
    
    except Exception as e:
        print(f"PDF generation error: {str(e)}")
        return jsonify({'error': f'Error generating PDF: {str(e)}'}), 500


@app.route('/api/delete', methods=['POST'])
def delete_file():
    """Delete uploaded file."""
    try:
        data = request.get_json()
        filepath = data.get('filepath')
        
        if filepath and os.path.exists(filepath):
            os.remove(filepath)
            return jsonify({'message': 'File deleted successfully'}), 200
        
        return jsonify({'error': 'File not found'}), 404
    
    except Exception as e:
        return jsonify({'error': f'Error deleting file: {str(e)}'}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5001)
