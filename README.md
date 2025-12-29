# InsightFlow 📊

**Transform Data into Wisdom**

InsightFlow is a full-stack intelligent data analysis platform that converts raw datasets into actionable insights through automated cleaning, interactive visualizations, and AI-powered analysis.

[![Python](https://img.shields.io/badge/Python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![React](https://img.shields.io/badge/React-18-61DAFB.svg)](https://reactjs.org/)
[![Flask](https://img.shields.io/badge/Flask-3.0-000000.svg)](https://flask.palletsprojects.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

InsightFlow Demo
https://insightflow-data-to-actionable-insights-3.onrender.com/

---

## ✨ Features

### 🎯 Core Features
- **📤 Smart File Upload** - Drag-and-drop CSV/Excel files with instant validation
- **🧹 Automated Data Cleaning** - Handles missing values, duplicates, and type detection
- **📊 Comprehensive Statistics** - Mean, median, correlations, distributions, and more
- **📈 Interactive Visualizations** - 5 chart types powered by Plotly (zoom, pan, hover)
- **💡 AI-Powered Insights** - Automated trend detection and narrative generation
- **📄 PDF Export** - Download professional analysis reports

### 🚀 Advanced Features
- **🔍 Custom Column Analysis** - Generate charts for any column on demand
- **📊 Dataset Comparison** - Compare two datasets with similarity metrics
- **🎨 Modern UI/UX** - Dark theme, glassmorphism, smooth animations
- **⚡ Real-time Feedback** - Toast notifications for all actions
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile

---

## 🎥 Demo

### Workflow
1. **Upload** → Drag & drop your CSV/Excel file
2. **Analyze** → Click "Analyze" button to process data
3. **Explore** → View statistics, charts, and insights
4. **Compare** → Optionally compare with another dataset
5. **Export** → Download PDF report

### Key Capabilities
- ✅ Automatic data cleaning (duplicates, missing values)
- ✅ 5 interactive chart types (line, histogram, box, bar, pie)
- ✅ Statistical analysis (mean, median, correlations)
- ✅ AI-generated insights (trends, anomalies, patterns)
- ✅ Dataset comparison (column overlap, statistical differences)
- ✅ Professional PDF reports

---

## 🛠️ Tech Stack

### Backend
- **Python 3.10+** - Core language
- **Flask 3.0** - REST API framework
- **Pandas** - Data processing and analysis
- **NumPy** - Numerical operations
- **Plotly** - Interactive chart generation
- **Matplotlib** - Static visualizations
- **ReportLab** - PDF generation
- **scikit-learn** - Advanced analytics

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Plotly.js** - Interactive charts
- **React-Toastify** - Toast notifications
- **Axios** - HTTP client
- **Modern CSS** - Glassmorphism, animations

---

## 📦 Installation

### Prerequisites
- Python 3.10 or higher
- Node.js 16 or higher
- npm or yarn

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/insightflow.git
cd insightflow
```

### 2. Backend Setup
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

---

## 🚀 Running the Application

### Start Backend Server
```bash
cd backend
source venv/bin/activate
python app.py
```
Backend runs on `http://localhost:5001`

### Start Frontend Development Server
```bash
cd frontend
npm run dev
```
Frontend runs on `http://localhost:5173`

### Access Application
Open your browser and navigate to `http://localhost:5173`

---

## 📊 Usage Guide

### Single Dataset Analysis
1. Upload a CSV or Excel file
2. Click **"Analyze"** button
3. View comprehensive analysis:
   - Data preview with cleaning report
   - Statistical summaries
   - 3 default charts (bar, line, pie)
   - AI-generated insights
4. Use **"Interactive Visualizations"** to create custom charts
5. Click **"Export PDF"** to download report

### Dataset Comparison
1. Upload first dataset
2. Click **"Compare Datasets"** button
3. Upload second dataset
4. Click **"Compare Both"** button
5. View comparison analysis:
   - Column overlap (common, unique)
   - Statistical differences
   - Data quality comparison
   - Similarity percentage

---

## 📁 Project Structure

```
insightflow/
├── backend/
│   ├── app.py                          # Flask API server
│   ├── requirements.txt                # Python dependencies
│   ├── modules/
│   │   ├── data_cleaner.py            # Data cleaning logic
│   │   ├── stats_engine.py            # Statistics calculations
│   │   ├── chart_generator.py         # Matplotlib charts
│   │   ├── plotly_chart_generator.py  # Interactive Plotly charts
│   │   ├── insight_engine.py          # AI insight generation
│   │   ├── dynamic_chart_generator.py # Custom column charts
│   │   └── pdf_generator.py           # PDF report creation
│   └── uploads/                        # Temporary file storage
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx                    # Main application
│   │   ├── components/
│   │   │   ├── FileUpload.jsx         # File upload component
│   │   │   ├── DataPreview.jsx        # Data preview table
│   │   │   ├── Statistics.jsx         # Statistics display
│   │   │   ├── Charts.jsx             # Chart display
│   │   │   ├── Insights.jsx           # Insights panel
│   │   │   ├── ColumnSelector.jsx     # Custom chart creator
│   │   │   ├── InteractiveChart.jsx   # Plotly chart wrapper
│   │   │   └── DatasetComparison.jsx  # Comparison view
│   │   ├── api/
│   │   │   └── client.js              # API client
│   │   └── index.css                  # Global styles
│   └── package.json
│
└── sample_data/
    └── diabetes.csv                    # Sample dataset
```

---

## 🎨 Features in Detail

### 📊 Interactive Charts
- **Line Chart** - Trend analysis with datetime support
- **Histogram** - Distribution with mean/median lines
- **Box Plot** - Outlier detection and quartiles
- **Bar Chart** - Category frequency analysis
- **Pie Chart** - Proportion breakdown

All charts support:
- ✅ Zoom and pan
- ✅ Hover tooltips
- ✅ Download as PNG/SVG
- ✅ Responsive sizing
- ✅ Dark theme

### 🧹 Data Cleaning
- Removes duplicate rows
- Handles missing values:
  - Numeric: Filled with median
  - Categorical: Filled with mode or 'Unknown'
- Drops columns with >50% missing data
- Auto-detects column types (numeric, categorical, datetime)

### 📈 Statistical Analysis
- **Numeric columns**: Mean, median, mode, std dev, min/max, quartiles
- **Categorical columns**: Unique values, most common, frequency
- **Correlations**: Correlation matrix with top 5 strongest correlations
- **Overview**: Row/column counts, data types distribution

### 💡 AI Insights
- Trend detection (upward/downward patterns)
- Anomaly identification
- Correlation highlights
- Data quality assessment
- Dominance analysis (categorical)
- Variability detection (numeric)

### 📊 Dataset Comparison
- Column overlap analysis (common, unique to each)
- Statistical differences (rows, columns, types)
- Data quality comparison
- Similarity percentage
- Visual comparison cards

---

## 🧪 Testing

Try with the included sample dataset:
```bash
# Upload sample_data/diabetes.csv through the UI
```

Or use your own CSV/Excel files with:
- Numeric columns (for statistics and trends)
- Categorical columns (for distributions)
- Datetime columns (for time series)

---

## 🚀 Deployment

### Backend (Render/Railway/Heroku)
1. Create `Procfile`:
   ```
   web: cd backend && gunicorn app:app
   ```
2. Add `gunicorn` to `requirements.txt`
3. Deploy to your platform

### Frontend (Vercel/Netlify)
1. Build production bundle:
   ```bash
   cd frontend
   npm run build
   ```
2. Deploy `dist/` folder
3. Update API base URL in `src/api/client.js`

---

## 📝 API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/health` | GET | Health check |
| `/api/upload` | POST | Upload file |
| `/api/analyze` | POST | Analyze dataset |
| `/api/generate-chart` | POST | Generate static chart |
| `/api/generate-plotly-chart` | POST | Generate interactive chart |
| `/api/export-pdf` | POST | Export PDF report |
| `/api/delete` | POST | Delete uploaded file |

---

## 🎯 Use Cases

- **Business Analytics** - Quick insights from sales/marketing data
- **Academic Research** - Statistical analysis for research projects
- **Data Exploration** - Understand new datasets quickly
- **Report Generation** - Create professional PDF reports
- **Data Comparison** - Compare datasets for consistency
- **Learning Tool** - Understand data analysis workflows

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- Portfolio: [your-portfolio.com](https://your-portfolio.com)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- GitHub: [@yourusername](https://github.com/yourusername)

---

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by data analysis tools like Jupyter, Tableau, and Power BI
- Designed for simplicity and user experience

---

## 📊 Screenshots

### Main Dashboard
<img width="1470" height="802" alt="image" src="https://github.com/user-attachments/assets/27c972d0-03d1-4368-ab64-b0c4a3d0015d" />


### Interactive Charts
<img width="1470" height="802" alt="image" src="https://github.com/user-attachments/assets/37dd3312-9147-476a-9b3a-76c14940c9e6" />


### Dataset Comparison
<img width="1470" height="802" alt="image" src="https://github.com/user-attachments/assets/d8fe27ed-fc90-469e-8f8a-d8314d520ad0" />


---

**InsightFlow** - Because every dataset has a story to tell 📊✨

*Transform your data into wisdom in seconds!*
