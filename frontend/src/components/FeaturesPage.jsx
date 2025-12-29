import './FeaturesPage.css';

function FeaturesPage() {
    return (
        <div className="features-page-container">
            <div className="features-hero">
                <h1>Powerful Features for Data Analysis</h1>
                <p>Everything you need to transform your data into actionable insights</p>
            </div>

            <div className="features-content">
                {/* Data Processing */}
                <section className="feature-section">
                    <div className="feature-header">
                        <span className="feature-icon">🧹</span>
                        <h2>Automated Data Cleaning</h2>
                    </div>
                    <div className="feature-details">
                        <div className="feature-item">
                            <h3>✓ Duplicate Removal</h3>
                            <p>Automatically detects and removes duplicate rows from your dataset</p>
                        </div>
                        <div className="feature-item">
                            <h3>✓ Missing Value Handling</h3>
                            <p>Intelligently fills missing values using median for numeric and mode for categorical data</p>
                        </div>
                        <div className="feature-item">
                            <h3>✓ Type Detection</h3>
                            <p>Auto-detects column types: numeric, categorical, and datetime</p>
                        </div>
                        <div className="feature-item">
                            <h3>✓ Smart Column Dropping</h3>
                            <p>Removes columns with more than 50% missing data</p>
                        </div>
                    </div>
                </section>

                {/* Interactive Charts */}
                <section className="feature-section">
                    <div className="feature-header">
                        <span className="feature-icon">📊</span>
                        <h2>Interactive Visualizations</h2>
                    </div>
                    <div className="feature-details">
                        <div className="feature-item">
                            <h3>📈 Line Charts</h3>
                            <p>Trend analysis with datetime support and index-based plotting</p>
                        </div>
                        <div className="feature-item">
                            <h3>📊 Histograms</h3>
                            <p>Distribution analysis with mean and median reference lines</p>
                        </div>
                        <div className="feature-item">
                            <h3>📦 Box Plots</h3>
                            <p>Outlier detection with quartile visualization</p>
                        </div>
                        <div className="feature-item">
                            <h3>📊 Bar Charts</h3>
                            <p>Category frequency analysis for categorical data</p>
                        </div>
                        <div className="feature-item">
                            <h3>🥧 Pie Charts</h3>
                            <p>Proportion breakdown for top categories</p>
                        </div>
                        <div className="feature-item">
                            <h3>🔍 Interactive Features</h3>
                            <p>Zoom, pan, hover tooltips, and download as PNG/SVG</p>
                        </div>
                    </div>
                </section>

                {/* Statistical Analysis */}
                <section className="feature-section">
                    <div className="feature-header">
                        <span className="feature-icon">📈</span>
                        <h2>Comprehensive Statistics</h2>
                    </div>
                    <div className="feature-details">
                        <div className="feature-item">
                            <h3>📊 Descriptive Statistics</h3>
                            <p>Mean, median, mode, standard deviation, min/max, quartiles</p>
                        </div>
                        <div className="feature-item">
                            <h3>🔗 Correlation Analysis</h3>
                            <p>Correlation matrix with top 5 strongest correlations highlighted</p>
                        </div>
                        <div className="feature-item">
                            <h3>📋 Category Distributions</h3>
                            <p>Unique values, most common values, and frequency counts</p>
                        </div>
                        <div className="feature-item">
                            <h3>📊 Data Overview</h3>
                            <p>Row/column counts, data types distribution, and quality metrics</p>
                        </div>
                    </div>
                </section>

                {/* AI Insights */}
                <section className="feature-section">
                    <div className="feature-header">
                        <span className="feature-icon">🤖</span>
                        <h2>AI-Powered Insights</h2>
                    </div>
                    <div className="feature-details">
                        <div className="feature-item">
                            <h3>📈 Trend Detection</h3>
                            <p>Automatically identifies upward/downward trends in your data</p>
                        </div>
                        <div className="feature-item">
                            <h3>⚠️ Anomaly Detection</h3>
                            <p>Highlights unusual patterns and outliers</p>
                        </div>
                        <div className="feature-item">
                            <h3>🔗 Correlation Highlights</h3>
                            <p>Identifies strong positive and negative relationships</p>
                        </div>
                        <div className="feature-item">
                            <h3>🎯 Dominance Analysis</h3>
                            <p>Detects when a single category dominates the dataset</p>
                        </div>
                        <div className="feature-item">
                            <h3>📊 Variability Detection</h3>
                            <p>Identifies highly variable numeric columns</p>
                        </div>
                    </div>
                </section>

                {/* Dataset Comparison */}
                <section className="feature-section">
                    <div className="feature-header">
                        <span className="feature-icon">🔄</span>
                        <h2>Dataset Comparison</h2>
                    </div>
                    <div className="feature-details">
                        <div className="feature-item">
                            <h3>📋 Column Overlap Analysis</h3>
                            <p>Identifies common columns and unique columns in each dataset</p>
                        </div>
                        <div className="feature-item">
                            <h3>📊 Statistical Differences</h3>
                            <p>Compares row counts, column counts, and data types</p>
                        </div>
                        <div className="feature-item">
                            <h3>🧹 Data Quality Comparison</h3>
                            <p>Compares duplicates removed and missing values filled</p>
                        </div>
                        <div className="feature-item">
                            <h3>📈 Similarity Percentage</h3>
                            <p>Calculates overall similarity based on column overlap</p>
                        </div>
                    </div>
                </section>

                {/* Export & Reporting */}
                <section className="feature-section">
                    <div className="feature-header">
                        <span className="feature-icon">📄</span>
                        <h2>Export & Reporting</h2>
                    </div>
                    <div className="feature-details">
                        <div className="feature-item">
                            <h3>📄 PDF Reports</h3>
                            <p>Download professional analysis reports with all insights</p>
                        </div>
                        <div className="feature-item">
                            <h3>📊 Chart Export</h3>
                            <p>Download individual charts as PNG or SVG files</p>
                        </div>
                        <div className="feature-item">
                            <h3>📋 Complete Analysis</h3>
                            <p>Reports include cleaning summary, statistics, charts, and insights</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default FeaturesPage;
