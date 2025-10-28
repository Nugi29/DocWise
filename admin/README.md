# ⚙️ Doc Wise – Admin Panel (React)

The Admin Panel empowers administrators to manage doctors, toggle availability, view and cancel appointments, and monitor platform activity via an interactive dashboard.

## 🛠️ Tech Stack

- ⚛️ **React 19** with **Vite 7**
- 🛣️ **React Router 7**
- 🎨 **Tailwind CSS 4** (via @tailwindcss/vite)
- 📡 **Axios**
- 🔔 **React Toastify**

## 📜 Scripts

```bash
npm run dev      # 🚀 Start Vite dev server (port 5174)
npm run build    # 🏗️ Build for production
npm run preview  # 👀 Preview production build
```

## ⚙️ Environment Configuration

Create `admin/.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

This URL is used by `AdminContext` to call the API under `/api/admin`.

## 🔐 Authentication

- 🔑 Admin login hits `POST /api/admin/login` with email/password
- ✅ Credentials must match `ADMIN_EMAIL` and `ADMIN_PASSWORD` configured in the backend
- 💾 After login, an admin JWT is stored in `localStorage` as `aToken`
- 📤 Token is sent in requests using the `aToken` header

## ✨ Key Capabilities

- ➕ **Add Doctor** (multipart form; image field name: `image`)
- 🔄 **Toggle Doctor Availability**
- 👨‍⚕️ **View All Doctors**
- 📅 **View and Cancel Appointments**
- 📊 **Dashboard Metrics** (doctors, appointments, patients, recent activity)

## 💻 Development

```bash
npm install
npm run dev
```

🌐 Dev server runs at **http://localhost:5174**

⚠️ Ensure the backend is running and `VITE_BACKEND_URL` is set correctly.

## 🏗️ Production Build

```bash
npm run build
npm run preview
```

The build output is in `dist/` and can be deployed to any static host.

## 📁 Folder Structure

```
src/
├── 🧩 components/    # Navbar, Sidebar
├── 🔌 context/       # AdminContext (API calls, state)
└── 📄 pages/
    ├── Login.jsx
    └── Admin/
        ├── AddDoctor.jsx
        ├── AllAppointments.jsx
        ├── Dashboard.jsx
        └── DoctorsList.jsx
```

**Headers:** `{ aToken: <admin-jwt> }`

## 🔧 Troubleshooting

- ❌ **Unauthorized**: Confirm `aToken` is present and backend `JWT_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD` are set correctly
- 📸 **Image upload fails**: Ensure the form field is `image` and backend Cloudinary env vars are configured

