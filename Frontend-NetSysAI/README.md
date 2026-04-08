# 🛡 NetSys AI — Frontend

> **React UI for URL Threat Analysis**  
> Simple, fast, and intuitive interface to analyze URLs and display security verdicts.

---

## 🚀 Overview

**NetSys AI Frontend** is a React (Vite) application that allows users to:

- Input a URL
- Send it to the backend for analysis
- Receive a clear security verdict:
  - ✅ Safe
  - ⚠ Suspicious
  - ❌ Dangerous

It is designed for **scalability**, **modularity**, and **future AI integration**.

---

## 🏗 Project Structure

```bash
FRONTEND/
├── src/
│   ├── assets/        # Images, icons, global styles
│   ├── components/    # Reusable UI components (Button, Card, Input)
│   ├── pages/         # Full pages (HomePage, ResultPage)
│   ├── services/      # API calls and business logic
│   ├── hooks/         # Custom React hooks
│   └── main.jsx       # Entry point
├── public/            # Static assets
├── package.json       # Dependencies and scripts
└── vite.config.js     # Vite configuration
```

## 🧩 Folder Roles

- **components**: Small, reusable UI pieces.
- **pages**: Main views of the application.
- **services**: Functions to interact with backend API.
- **hooks**: Custom hooks for state management or reusable logic.
- **assets**: Images, icons, or global styles.

## 🧩 Installation

Clone the repository:

```bash
git clone <https://github.com/FranSammauro/NetSysAI.gitl>
cd FRONTEND
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

You should see the app at http://localhost:5173.

## 🛠 Tech Stack

- React (Vite) — UI framework
- TailwindCSS — Styling
- Axios / Fetch — API requests

## ⚡ Features

- URL input form
- Real-time threat classification
- Clear UI for results
- Modular React architecture for easy scaling

## 📦 How to Add New Features

- **Components**: Add new reusable UI elements in `src/components/`.
- **Pages**: Add new views in `src/pages/`.
- **Services**: Put API calls in `src/services/`.
- **Hooks**: Create reusable logic in `src/hooks/`.
- **Assets**: Add images/icons in `src/assets/`.

## 🗺 Roadmap

- ✓ Basic URL analysis interface
- ⬜ Connect frontend to `/analyze` backend endpoint
- ⬜ Display detailed analysis results
- ⬜ Add history and logging
- ⬜ Implement AI-powered threat detection UI

## 💡 Notes for Developers

- Use functional components and hooks.
- Keep components small and reusable.
- Follow the folder structure for maintainability.
- Styles should go in `assets/global.css` or Tailwind classes.

## 📄 License

Frontend code is under development; license TBD.
