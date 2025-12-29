import './HomePage.css';

function HomePage({ onGetStarted }) {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-icon">✨</span>
                        <span>Transform Data into Wisdom</span>
                    </div>

                    <h1 className="hero-title">
                        Intelligent Data Analysis
                        <span className="gradient-text"> Made Simple</span>
                    </h1>

                    <p className="hero-description">
                        Upload your CSV or Excel files and get instant insights with automated cleaning,
                        interactive visualizations, and AI-powered analysis. No coding required.
                    </p>

                    <div className="hero-actions">
                        <button className="btn-hero-primary" onClick={onGetStarted}>
                            <span>Get Started Free</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-value">5+</div>
                            <div className="stat-label">Chart Types</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-value">100%</div>
                            <div className="stat-label">Automated</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-value">Instant</div>
                            <div className="stat-label">Insights</div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="visual-card card-1">
                        <div className="card-header">
                            <div className="card-icon">📊</div>
                            <div className="card-title">Data Preview</div>
                        </div>
                        <div className="card-content">
                            <div className="data-row"></div>
                            <div className="data-row"></div>
                            <div className="data-row"></div>
                        </div>
                    </div>

                    <div className="visual-card card-2">
                        <div className="card-header">
                            <div className="card-icon">📈</div>
                            <div className="card-title">Statistics</div>
                        </div>
                        <div className="card-content">
                            <div className="stat-bar" style={{ width: '80%' }}></div>
                            <div className="stat-bar" style={{ width: '60%' }}></div>
                            <div className="stat-bar" style={{ width: '90%' }}></div>
                        </div>
                    </div>

                    <div className="visual-card card-3">
                        <div className="card-header">
                            <div className="card-icon">💡</div>
                            <div className="card-title">Insights</div>
                        </div>
                        <div className="card-content">
                            <div className="insight-line"></div>
                            <div className="insight-line"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="section-header">
                    <h2 className="section-title">Powerful Features</h2>
                    <p className="section-description">
                        Everything you need to analyze your data in one place
                    </p>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🧹</div>
                        <h3 className="feature-title">Auto Data Cleaning</h3>
                        <p className="feature-description">
                            Automatically handles missing values, duplicates, and type detection
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">📊</div>
                        <h3 className="feature-title">Interactive Charts</h3>
                        <p className="feature-description">
                            5 chart types with zoom, pan, and hover tooltips powered by Plotly
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">🤖</div>
                        <h3 className="feature-title">AI Insights</h3>
                        <p className="feature-description">
                            Automated trend detection, anomalies, and narrative generation
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">📈</div>
                        <h3 className="feature-title">Statistical Analysis</h3>
                        <p className="feature-description">
                            Comprehensive statistics including correlations and distributions
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">🔄</div>
                        <h3 className="feature-title">Dataset Comparison</h3>
                        <p className="feature-description">
                            Compare two datasets with similarity metrics and differences
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">📄</div>
                        <h3 className="feature-title">PDF Export</h3>
                        <p className="feature-description">
                            Download professional analysis reports with all insights
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works-section">
                <div className="section-header">
                    <h2 className="section-title">How It Works</h2>
                    <p className="section-description">
                        Get insights in 3 simple steps
                    </p>
                </div>

                <div className="steps-container">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h3 className="step-title">Upload Your Data</h3>
                            <p className="step-description">
                                Drag and drop your CSV or Excel file
                            </p>
                        </div>
                    </div>

                    <div className="step-arrow">→</div>

                    <div className="step-card">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h3 className="step-title">Analyze</h3>
                            <p className="step-description">
                                Click analyze and let AI do the work
                            </p>
                        </div>
                    </div>

                    <div className="step-arrow">→</div>

                    <div className="step-card">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h3 className="step-title">Get Insights</h3>
                            <p className="step-description">
                                View charts, stats, and export reports
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2 className="cta-title">Ready to Transform Your Data?</h2>
                    <p className="cta-description">
                        Start analyzing your datasets in seconds. No credit card required.
                    </p>
                    <button className="btn-cta" onClick={onGetStarted}>
                        Get Started Now
                    </button>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
