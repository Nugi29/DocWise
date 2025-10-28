# 🏥 Doc Wise – Hospital Appointment System

🌐 **Live Demo:** https://doc-wise-health.vercel.app/

Doc Wise is a full‑stack hospital appointment platform built with MERN stack, featuring three integrated apps in one monorepo:

- 👨‍⚕️ **Patient Frontend** (`/frontend`): Browse doctors, book and pay for appointments, manage profile
- 🩺 **Doctor Panel** (`/admin/Doctor` in backend API): Doctors interact via backend-secured endpoints and tokens
- ⚙️ **Admin Panel** (`/admin`): Manage doctors, toggle availability, view/cancel appointments, dashboards

This monorepo leverages **React 19** + **Vite 7** + **Tailwind CSS 4** on the frontend(s) and an **Express 5**, **Mongoose 8** API backend with **Cloudinary** uploads and **PayHere** payments (LKR).

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React 19** with **Vite 7**
- 🛣️ **React Router 7**
- 🎨 **Tailwind CSS 4**
- 📡 **Axios**
- 🔔 **React Toastify**

### Backend
- 🟢 **Node.js** with **Express 5**
- 🍃 **MongoDB** via **Mongoose 8**
- 🔐 **JWT Authentication**
- 📤 **Multer** for file uploads
- ☁️ **Cloudinary** for media storage
- 🔒 **Bcrypt** for password hashing
- ✅ **Validator** for data validation

### Database & Services
- 🗄️ **MongoDB** (connection via MONGODB_URI)
- 💳 **PayHere** payment gateway (LKR) with return/cancel/notify URLs

## 📁 Repository Structure

```
📦 Doc-Wise/
├── 🎛️ admin/       # React Admin Panel (Vite)
├── 🔧 backend/     # Express API server (MongoDB, Cloudinary, PayHere)
└── 💻 frontend/    # React Patient Frontend (Vite)
```

## 🎯 Apps at a Glance

- 🏥 **Frontend (Patients)**: Runs at port `5173` in development
- ⚙️ **Admin Panel**: Runs at port `5174` in development
- 🔧 **Backend API**: Runs at `PORT` (default `4000`). API routes:
  - 👤 `/api/user` - Patient operations
  - 👨‍⚕️ `/api/doctor` - Doctor operations
  - 🔐 `/api/admin` - Admin operations


## 🚀 Quick Start

**Prerequisites:** Node 18+, npm, MongoDB URI, Cloudinary credentials, PayHere merchant credentials

### 1️⃣ Install Dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
cd ../admin && npm install
```

### 2️⃣ Create `.env` Files

Configure environment variables for each app (see individual README files for details)

### 3️⃣ Run in Development

```bash
# Terminal A - Backend
cd backend
npm run server

# Terminal B - Frontend
cd frontend
npm run dev

# Terminal C - Admin Panel
cd admin
npm run dev
```

**Development ports:**
- 🏥 Frontend: `http://localhost:5173`
- ⚙️ Admin: `http://localhost:5174`
- 🔧 Backend: `http://localhost:4000`


---

## 📚 Documentation

See component READMEs for app‑specific instructions:
- 💻 [`frontend/README.md`](./frontend/README.md) - Patient Frontend documentation
- ⚙️ [`admin/README.md`](./admin/README.md) - Admin Panel documentation
- 🔧 [`backend/README.md`](./backend/README.md) - Backend API documentation

##### Special Thanks For GreatStack Youtube Channel
