# 🏥 Doc Wise – Patient Frontend (React)

Patient-facing web application to discover medical specialists, book appointments, pay via PayHere, and manage profiles and appointments.

🌐 **Live Site:** https://doc-wise-health.vercel.app

## 🛠️ Tech Stack

- ⚛️ **React 19** with **Vite 7**
- 🛣️ **React Router 7**
- 🎨 **Tailwind CSS 4** (via @tailwindcss/vite)
- 📡 **Axios**
- 🔔 **React Toastify**

## 📜 Scripts

```bash
npm run dev      # 🚀 Start Vite dev server (port 5173)
npm run build    # 🏗️ Build for production
npm run preview  # 👀 Preview production build
```

## ⚙️ Environment Configuration

Create `frontend/.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

`AppContext` uses this URL to call the API under `/api/user` and `/api/doctor`.

## 🔐 Authentication

- 🔑 User login/register returns a JWT stored in `localStorage` as `token`
- 📤 Authenticated requests include header: `{ token: <jwt> }`

## ✨ Key Capabilities

- 🔍 **Browse Doctors** and filter by speciality
- 👨‍⚕️ **View Doctor Profiles** with fees and availability
- 📅 **Book Appointments** (date/time slots)
- 💳 **Pay with PayHere** (LKR)
- 📋 **View/Cancel Appointments**
- 👤 **Manage Profile** with avatar upload (multipart `image`)

## 💻 Development

```bash
npm install
npm run dev
```

🌐 Dev server runs at **http://localhost:5173**

⚠️ Ensure the backend is running and `VITE_BACKEND_URL` is set correctly.

## 🏗️ Production Build

```bash
npm run build
npm run preview
```

The build output is in `dist/` and can be deployed to any static host (Vercel, Netlify, etc.).

## 📁 Folder Structure

```
src/
├── 🧩 components/    # Header, Navbar, Footer, TopDoctors, etc.
├── 🔌 context/       # AppContext (API calls, auth token, user data)
└── 📄 pages/
    ├── Home.jsx
    ├── Doctors.jsx
    ├── Appointment.jsx
    ├── MyAppointments.jsx
    ├── MyProfile.jsx
    ├── Login.jsx
    ├── About.jsx
    └── Contact.jsx
```

## 🔧 Troubleshooting

- ❌ **Unauthorized**: Confirm `token` is present in headers and matches backend `JWT_SECRET`
- 💳 **PayHere flow not returning**: Verify `FRONTEND_URL` and `BACKEND_URL` in backend env as they're used by the payment payload
