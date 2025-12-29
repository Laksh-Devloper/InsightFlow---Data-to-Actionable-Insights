# 🚀 QUICK REFERENCE: Render Deployment Settings

## ⚠️ IMPORTANT: You Need TWO Deployments!

Your InsightFlow app has a backend (Flask) and frontend (React).
You CANNOT deploy it as just a Static Site.

---

## 📋 STEP 1: Deploy Backend First (Web Service)

### Go to: Render Dashboard → New → **Web Service**

| Field | Value to Enter |
|-------|----------------|
| **Repository** | `Laksh-Devloper/InsightFlow---Data-to-Actionable-Insights` |
| **Name** | `insightflow-backend` |
| **Branch** | `main` |
| **Root Directory** | `backend` |
| **Runtime** | `Python 3` |
| **Build Command** | `chmod +x build.sh && ./build.sh` |
| **Start Command** | `gunicorn app:app` |
| **Instance Type** | Free |

Click **"Create Web Service"** and wait for deployment.

**After deployment, COPY the backend URL!** 
Example: `https://insightflow-backend.onrender.com`

---

## 📋 STEP 2: Deploy Frontend (Static Site)

### Go to: Render Dashboard → New → **Static Site**

| Field | Value to Enter |
|-------|----------------|
| **Repository** | `Laksh-Devloper/InsightFlow---Data-to-Actionable-Insights` |
| **Name** | `InsightFlow---Data-to-Actionable-Insights` |
| **Branch** | `main` |
| **Root Directory** | `frontend` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

### ⚠️ CRITICAL: Add Environment Variable

Click **"Advanced"** → **"Add Environment Variable"**

| Name | Value |
|------|-------|
| `VITE_API_BASE_URL` | `https://insightflow-backend.onrender.com/api` |

**Replace with YOUR actual backend URL from Step 1!**

Click **"Create Static Site"**

---

## ✅ Done!

Your app will be live at:
- **Frontend**: `https://insightflow.onrender.com` (or whatever name you chose)
- **Backend**: `https://insightflow-backend.onrender.com`

---

## 🐛 If Something Goes Wrong

1. Check the **Logs** in Render Dashboard
2. Make sure the backend deployed successfully FIRST
3. Make sure `VITE_API_BASE_URL` is set correctly in frontend
4. Test backend health: `https://your-backend.onrender.com/api/health`

---

For detailed troubleshooting, see `RENDER_DEPLOYMENT.md`
