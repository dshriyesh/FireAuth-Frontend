# FireAuth – MERN Authentication System

## A full-stack authentication system built using the MERN stack with secure JWT-based authentication, HTTP-only cookies, and production deployment on Render.

### 🔗 Live Demo:
👉 https://fireauth-frontend.onrender.com

### 🔗 Backend API:
👉 https://fireauth-backend.onrender.com

---
## 🚀 Features

🔐 User Registration & Login

🍪 Secure HTTP-only JWT Cookies

🔁 Access & Refresh Token System

🛡 Protected Routes

🌍 Production-ready CORS Configuration

📦 Deployed on Render (Frontend + Backend)

🎨 Responsive UI with TailwindCSS

🔔 Toast Notifications

⚡ Built using Vite + React 19

---

## 🛠 Tech Stack

### Frontend

React 19

Vite

React Router

Axios

TailwindCSS

React Toastify

### Backend

Node.js

Express.js

MongoDB Atlas

JWT (Access + Refresh Tokens)

Cookie Parser

CORS

### Deployment

Render (Static Site + Web Service)

MongoDB Atlas (Cloud Database)

---
### 🔐 Authentication Flow

1.User registers or logs in

2.Backend generates:

Access Token

Refresh Token

Tokens stored as:

HTTP-only

Secure cookies

SameSite=None

Protected routes verify access token

Refresh token used when access token expires

---

## 🧪 Local Setup
### Clone Repository
git clone https://github.com/dshriyesh/FireAuth-Frontend.git

### Frontend
npm install
npm run dev

### Backend
npm install
npm run dev

---
## 🌍 Production Deployment Details

### Frontend (Render Static Site)

Root Directory: (empty)

Build Command: npm install && npm run build

Publish Directory: dist

Rewrite Rule:

Source: /*
Destination: /index.html
Action: Rewrite


### Backend (Render Web Service)

CORS configured for:

localhost

Production frontend URL

Cookies configured with:

httpOnly: true

secure: true

sameSite: "None"

---

## 📂 Project Structure

### FireAuth-Frontend
│
├── src
│   ├── pages
│   ├── components
│   ├── context
│   ├── assets
│
├── public
├── package.json
└── vite.config.js

---

## 🔥 Learning Highlights

This project demonstrates:

Production CORS handling

Cross-origin cookie authentication

Secure JWT implementation

Deployment debugging

SPA routing rewrite configuration

Environment variable management in production

## 👨‍💻 Author

Shriyesh Dixit

If you like this project, feel free to ⭐ the repository!

