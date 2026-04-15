# NetSysAI — Frontend

Frontend application for NetSysAI, built with React and Vite.  
Provides the user interface for URL analysis, authentication, and interaction with the backend API.

---

## Overview

The NetSysAI frontend allows users to:

- Register and log into the platform
- Submit URLs for analysis
- Receive real-time security feedback
- Interact with a modern and responsive UI

The application is designed with a modular structure to support future scalability and integration with advanced analysis features.

---

## Project Structure
```
Frontend-NetSysAI/
├── src/
│ ├── assets/ # Global styles and static assets
│ ├── components/ # Reusable UI components
│ ├── pages/ # Application views (Home, Login, Register)
│ ├── services/ # API communication logic
│ ├── hooks/ # Custom React hooks (future use)
│ ├── App.jsx # Main app component
│ └── main.jsx # Entry point
├── public/ # Static files
├── package.json # Dependencies and scripts
└── vite.config.js # Vite configuration
```

---

## Tech Stack

- React (Vite) — Frontend framework
- JavaScript (ES6+) — Core language
- CSS — Styling (custom global styles)
- Fetch API — Backend communication

---

## Setup

### 1. Clone repository

```bash
git clone https://github.com/FranSammauro/NetSysAI.git
cd Frontend-NetSysAI
```
## 2. Install dependencies
```
npm install
```
## 3. Run development server
```
npm run dev
```
The application will be avialbe at:
```
http://localhost:5173
```

---

## Features
- URL analysis interface
- Integration with backend /analyze endpoint
- Real-time display of analysis results
- User authentication (register and login)
- Token-based session management (JWT)
- Responsive and interactive UI
- Canvas-based background animation


---

## API Integration
The frontend communicates with the backend via HTTP requests.
### Analyze Endpoint
 - Endpoint: POST /analyze
 - Requires authentication (JWT)

Example request:
```
{
  "url": "http://example.com/login"
}
```
Authorization header
```
Authorization: Bearer <token>
```

---
## Authentication Flow

1. User registers via /register
2. User logs in via /login
3. Backend returns a JWT token
4. Token is stored in localStorage
5. Token is sent in all protected requests (e.g. /analyze)

---

## UI Structure
- Home Page
 - URL input
 - Analyze button
 - Result display
- Authentication Pages (planned/implemented)
 - Login
 - Register

---

## Development Guidelines
- Use functional components and React hooks
- Keep components reusable and modular
- Separate UI from API logic (services/)
- Maintain clean and scalable structure
- Avoid embedding business logic inside components

---

## Current Status
- Frontend connected to backend API
- Real-time URL analysis working
- Authentication flow implemented
- Token-based access integrated
- Core UI completed

---

## Roadmap
- Improve authentication UI/UX
- Add protected routes (redirect if not authenticated)
- Implement logout functionality
- Store and display analysis history
- Enhance UI with better feedback and states
- Integrate advanced analysis results
- Prepare for AI-based features

---

## Notes
- Ensure backend is running before using the frontend
- Verify that JWT token is stored correctly after login
- Update API URLs if deploying to production

--- 

## License

Project under development. License to be defined.