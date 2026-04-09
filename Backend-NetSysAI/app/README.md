# 🛡 NetSys AI — Backend

> **FastAPI Backend for URL Threat Analysis**  
> Lightweight, fast, and scalable API to analyze URLs and detect potential security threats.

---

## 🚀 Overview

**NetSys AI Backend** is built with FastAPI and is responsible for:

- Receiving URL inputs from the frontend
- Processing threat analysis
- Returning a clear security verdict:
  - ✅ Safe
  - ⚠ Suspicious
  - ❌ Dangerous

It is designed to be **modular**, **scalable**, and ready for **AI integration**.

---

## 🏗 Project Structure

```bash
BACKEND/
├── app/
│   ├── api/           # API routes (endpoints)
│   │   └── routes/
│   │       └── analyze.py
│   ├── services/      # Business logic (analysis engine)
│   │   └── analyzer.py
│   ├── core/          # Config, settings (future use)
│   ├── models/        # Database models (future)
│   ├── database/      # DB connection (future)
│   ├── __init__.py
│   └── main.py        # Entry point
├── venv/              # Virtual environment
├── requirements.txt   # Dependencies
```
## 🧩 Folder Roles

- **api/routes**: Defines API endpoints (e.g. `/analyze`)
- **services**: Contains core logic (URL analysis, scoring)
- **core**: Configuration and environment settings
- **models**: Database models (PostgreSQL, future)
- **database**: Database connection and setup
- **main.py**: Starts the FastAPI server

---

## 🧩 Installation

Clone the repository:

```bash
git clone https://github.com/FranSammauro/NetSysAI.git
cd BACKEND
```
Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate
```
Install dependencies:
```bash
pip install fastapi uvicorn
```

Run development server:
```bash
uvicorn app.main:app --reload
```
API aviable at:
http://127.0.0.1:8000
Docs (Swagger): http://127.0.0.1:8000/docs

## 🛠 Tech Stack

- FastAPI — Web framework  
- Python — Core language  
- Uvicorn — ASGI server  
- PostgreSQL — Database (future integration)  

---

## ⚡ Features

- URL analysis endpoint (`/analyze`)  
- Basic phishing pattern detection  
- Structured API responses  
- Fast and async-ready architecture  
- Ready for future AI modules  

---

## 🧪 Current Endpoint

### POST `/analyze`

#### Request:

```json
{
  "url": "http://example.com/login"
}

```
#### Response:
```json
{
  "status": "suspicious",
  "reason": "Contains common phishing keywords"
}
```
## 🧠 Analysis Engine
Input → Validation → Pattern Detection → Risk Scoring → Classification

Current logic includes:
- Keyword-based detection (login, verify, free, etc.)
- Basic rule-based classification
---
## 📦 How to Add New Features
- Routes: Add new endpoints in app/api/routes/
- Logic: Extend analysis in app/services/
- Models: Define DB models in app/models/
- Database: Configure connection in app/database/
- Core: Manage settings and configs in app/core/

## 🗺 Roadmap
- FastAPI setup
- /analyze endpoint
- Input validation (URL format)
- Improved detection logic
- Database integration (PostgreSQL)
- Analysis history
- AI-based threat detection
- Authentication & users

--- 
## Notes for Developers
- Keep routes clean and minimal
- Move logic to services/ (separation of concerns)
- Validate inputs with Pydantic
- Prepare code for scalability and modularity


---
## License
Backend code is under development; license TBD
