import axios from 'axios';

// Use environment variable for production, fallback to localhost for development
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001/api';

export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};

export const analyzeData = async (filepath) => {
    const response = await axios.post(`${API_BASE_URL}/analyze`, {
        filepath,
    });

    return response.data;
};

export const deleteFile = async (filepath) => {
    const response = await axios.post(`${API_BASE_URL}/delete`, {
        filepath,
    });

    return response.data;
};

export const generateChart = async (filepath, columnName, chartType = 'trend') => {
    const response = await axios.post(`${API_BASE_URL}/generate-chart`, {
        filepath,
        column_name: columnName,
        chart_type: chartType,
    });

    return response.data;
};

export const generatePlotlyChart = async (filepath, columnName, chartType = 'line') => {
    const response = await axios.post(`${API_BASE_URL}/generate-plotly-chart`, {
        filepath,
        column_name: columnName,
        chart_type: chartType,
    });

    return response.data;
};

export const exportPDF = async (filepath, analysisResults) => {
    const response = await axios.post(`${API_BASE_URL}/export-pdf`, {
        filepath,
        analysis_results: analysisResults,
    }, {
        responseType: 'blob', // Important for file download
    });

    return response.data;
};

export const downloadCleanedData = async (filepath) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/download-cleaned-data`,
            { filepath },
            { responseType: 'blob' }  // Important for file download
        );

        // Create download link
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `cleaned_${filepath.split('/').pop()}`);
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);

        return true;
    } catch (error) {
        console.error('Error downloading cleaned data:', error);
        throw error;
    }
};

export const healthCheck = async () => {
    const response = await axios.get(`${API_BASE_URL}/health`);
    return response.data;
};
