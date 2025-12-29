# InsightFlow - Development Workflow

## 🎯 Quick Start

### 1. Start Backend
```bash
cd backend
source venv/bin/activate
python app.py
```
Runs on `http://localhost:5001`

### 2. Start Frontend
```bash
cd frontend
npm run dev
```
Runs on `http://localhost:5173`

---

## 📋 Current Features

### ✅ Implemented
- File upload (CSV, Excel)
- Automated data cleaning
- Statistical analysis
- Interactive Plotly charts (5 types)
- Custom column visualization
- Dataset comparison
- PDF export
- Toast notifications
- Modern UI with animations

### 🎨 Chart Types
1. **Line Chart** - Trends over time/sequence
2. **Histogram** - Distribution with mean/median
3. **Box Plot** - Outliers and quartiles
4. **Bar Chart** - Category frequencies
5. **Pie Chart** - Proportions

---

## 🔄 User Workflow

```
Upload File → Click "Analyze" → View Results → Export PDF
                    ↓
              Click "Compare" → Upload 2nd File → View Comparison
```

---

## 🛠️ Development Commands

### Backend
```bash
# Install dependencies
pip install -r requirements.txt

# Run server
python app.py

# Add new dependency
pip install package_name
pip freeze > requirements.txt
```

### Frontend
```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Key Files

### Backend
- `app.py` - Main Flask server
- `modules/data_cleaner.py` - Data cleaning
- `modules/plotly_chart_generator.py` - Interactive charts
- `modules/pdf_generator.py` - PDF reports
- `modules/insight_engine.py` - AI insights

### Frontend
- `src/App.jsx` - Main application
- `src/components/DatasetComparison.jsx` - Comparison view
- `src/components/InteractiveChart.jsx` - Plotly charts
- `src/api/client.js` - API calls

---

## 🚀 Deployment Checklist

- [ ] Update API base URL in `frontend/src/api/client.js`
- [ ] Build frontend: `npm run build`
- [ ] Test production build locally
- [ ] Deploy backend (Render/Railway)
- [ ] Deploy frontend (Vercel/Netlify)
- [ ] Update README with live demo link
- [ ] Add screenshots to README

---

## 📝 Git Workflow

```bash
# Initial commit
git init
git add .
git commit -m "Initial commit: InsightFlow v1.0"

# Push to GitHub
git remote add origin https://github.com/yourusername/insightflow.git
git branch -M main
git push -u origin main
```

---

## 🎯 Project Status: PRODUCTION READY ✅

All core features implemented and tested!
