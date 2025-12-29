# 🚀 Render Deployment Guide for InsightFlow

## Overview
InsightFlow is a full-stack application that requires **TWO separate deployments** on Render:
1. **Backend** (Flask/Python) → Web Service
2. **Frontend** (React/Vite) → Static Site

---

## 📋 Prerequisites
- [x] GitHub repository pushed: `Laksh-Devloper/InsightFlow---Data-to-Actionable-Insights`
- [x] Render account connected to GitHub
- [x] `gunicorn` added to `backend/requirements.txt` ✅

---

## 🔧 Part 1: Deploy Backend (Web Service)

### Step 1: Create Web Service
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository: `Laksh-Devloper/InsightFlow---Data-to-Actionable-Insights`

### Step 2: Configure Backend Service

| Setting | Value |
|---------|-------|
| **Name** | `insightflow-backend` |
| **Branch** | `main` |
| **Root Directory** | `backend` |
| **Runtime** | `Python 3` |
| **Build Command** | `chmod +x build.sh && ./build.sh` |
| **Start Command** | `gunicorn app:app` |
| **Instance Type** | Free (or paid for better performance) |

### Step 3: Environment Variables (Optional)
If your backend needs any environment variables, add them here:
- Click **"Advanced"** → **"Add Environment Variable"**
- Example: `FLASK_ENV=production`

### Step 4: Deploy Backend
1. Click **"Create Web Service"**
2. Wait for deployment to complete (5-10 minutes)
3. **Copy the backend URL** (e.g., `https://insightflow-backend.onrender.com`)

---

## 🎨 Part 2: Deploy Frontend (Static Site)

### Step 1: Create Static Site
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Static Site"**
3. Connect your GitHub repository: `Laksh-Devloper/InsightFlow---Data-to-Actionable-Insights`

### Step 2: Configure Frontend Static Site

| Setting | Value |
|---------|-------|
| **Name** | `insightflow` (or `InsightFlow---Data-to-Actionable-Insights`) |
| **Branch** | `main` |
| **Root Directory** | `frontend` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

### Step 3: Add Environment Variable
**CRITICAL:** You must tell the frontend where the backend is!

1. Click **"Advanced"** → **"Add Environment Variable"**
2. Add:
   - **Name**: `VITE_API_BASE_URL`
   - **Value**: `https://insightflow-backend.onrender.com/api` (use YOUR backend URL from Part 1)

### Step 4: Deploy Frontend
1. Click **"Create Static Site"**
2. Wait for deployment to complete (3-5 minutes)
3. Your app will be live at: `https://insightflow.onrender.com`

---

## ✅ Verification

### Test Backend
Visit: `https://insightflow-backend.onrender.com/api/health`

Expected response:
```json
{
  "status": "healthy",
  "message": "InsightFlow API is running"
}
```

### Test Frontend
1. Visit: `https://insightflow.onrender.com`
2. Upload a CSV file
3. Click "Analyze"
4. Verify charts and insights appear

---

## 🔄 Updating Your Deployment

### Auto-Deploy (Recommended)
Render automatically redeploys when you push to GitHub:
```bash
git add .
git commit -m "Update feature"
git push origin main
```

### Manual Deploy
1. Go to Render Dashboard
2. Select your service
3. Click **"Manual Deploy"** → **"Deploy latest commit"**

---

## 🐛 Troubleshooting

### Backend Issues

**Problem**: Backend won't start
- **Check**: Build logs in Render dashboard
- **Common fix**: Ensure all dependencies in `requirements.txt`
- **Check**: `gunicorn` is installed

**Problem**: 500 Internal Server Error
- **Check**: Backend logs in Render dashboard
- **Fix**: Add error logging to `app.py`

### Frontend Issues

**Problem**: Frontend can't connect to backend
- **Check**: `VITE_API_BASE_URL` environment variable is set correctly
- **Check**: Backend URL includes `/api` at the end
- **Check**: CORS is enabled in Flask backend

**Problem**: Build fails
- **Check**: `package.json` has correct dependencies
- **Check**: Build command is `npm install && npm run build`

**Problem**: Blank page after deployment
- **Check**: Browser console for errors
- **Check**: Publish directory is `dist` (not `build`)

---

## 💰 Cost Considerations

### Free Tier Limitations
- **Backend**: Spins down after 15 minutes of inactivity (cold starts)
- **Frontend**: Always on, no limitations
- **Storage**: Limited to 1GB

### Upgrade Options
- **Starter Plan** ($7/month): No spin-down, faster performance
- **Standard Plan** ($25/month): More resources, better for production

---

## 🔒 Security Best Practices

1. **Environment Variables**: Never commit API keys or secrets
2. **CORS**: Configure allowed origins in Flask
3. **HTTPS**: Render provides free SSL certificates
4. **File Upload Limits**: Set max file size in backend

---

## 📊 Monitoring

### Render Dashboard
- View logs in real-time
- Monitor CPU/Memory usage
- Check deployment history

### Health Checks
- Backend: `/api/health` endpoint
- Set up uptime monitoring (e.g., UptimeRobot)

---

## 🎯 Quick Reference

### Backend URL Structure
```
https://insightflow-backend.onrender.com/api/upload
https://insightflow-backend.onrender.com/api/analyze
https://insightflow-backend.onrender.com/api/health
```

### Frontend Environment Variables
```env
VITE_API_BASE_URL=https://insightflow-backend.onrender.com/api
```

### Local Development
```bash
# Backend
cd backend
source venv/bin/activate
python app.py

# Frontend
cd frontend
npm run dev
```

---

## 📝 Summary

**What you just deployed:**
1. ✅ Backend API on Render Web Service
2. ✅ Frontend React app on Render Static Site
3. ✅ Connected them via environment variables
4. ✅ Auto-deploy enabled via GitHub

**Your live URLs:**
- Frontend: `https://insightflow.onrender.com`
- Backend: `https://insightflow-backend.onrender.com`

---

**🎉 Congratulations! Your InsightFlow app is now live!**

For issues, check:
1. Render Dashboard logs
2. Browser console (F12)
3. Backend `/api/health` endpoint
