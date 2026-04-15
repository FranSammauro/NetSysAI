# NetSysAI — Backend

Backend service for NetSysAI, built with FastAPI.  
Provides URL threat analysis, user authentication, and database integration.

---

## Overview

The NetSysAI backend is responsible for:

- Processing URL threat analysis requests
- Managing user authentication and authorization
- Interacting with the PostgreSQL database
- Providing a scalable API for the frontend

The architecture follows a modular design, allowing future integration of machine learning models and advanced security analysis.

---

## Project Structure
```
Backend-NetSysAI/
├── app/
│ ├── api/
│ │ └── routes/
│ │ ├── analyze.py # URL analysis endpoint
│ │ └── auth.py # Authentication endpoints
│ ├── services/
│ │ └── analyzer.py # Analysis logic
│ ├── core/
│ │ ├── security.py # Password hashing, JWT
│ │ └── deps.py # Auth dependencies
│ ├── db/
│ │ ├── session.py # Database connection
│ │ └── deps.py # DB dependency (get_db)
│ ├── models/
│ │ └── user.py # User model
│ ├── schemas/
│ │ └── user.py # Pydantic schemas
│ └── main.py # Application entry point
├── venv/
├── requirements.txt

```

---

## Tech Stack

- FastAPI — Web framework
- Python — Core language
- Uvicorn — ASGI server
- PostgreSQL — Relational database
- SQLAlchemy — ORM
- JWT — Authentication mechanism

---

## Setup

### 1. Clone repository

```bash
git clone https://github.com/FranSammauro/NetSysAI.git
cd Backend-NetSysAI
```

### 2. Create virtual environment
```bash
python -m venv venv
source venv/bin/activate
```
### 3. Install dependencies
```
pip install -r requirements.txt
```
### 4. Run the server
```
uvicorn app.main:app --reload
```

---

## API Documenttation
Interactive docs aviable at:

```
http://127.0.0.1:8000/docs
```

---

## Features

- URL analysis endpoint
- User registration and login
- Password hashing
- JWT-based authentication
- Protected routes
- PostgreSQL integration
- Modular architecture

--- 
## Endpoints
### POST /register
Registers a new user.

Request:
```
{
  "email": "user@example.com",
  "password": "password123"
}
```

---

## POST /login
Authenticates a user and returns a JWT token
Response:
```
{
  "access_token": "JWT_TOKEN",
  "token_type": "bearer"
}
```

---

## POST /analyze (Protected)
Analyzes a URL for potential threats.

Headers:

```
Authorization: Bearer <token>
```
Request:
```
{
  "url": "http://example.com/login"
}
```
Response:
```
{
  "status": "suspicious",
  "reason": "Contains common phishing keywords"
}
```

---

## Analysis Engine
The current implementation is rule-based and includes:

- Keyword detection (e.g. login, verify, free, bonus)
- Basic classification:
  - safe
  - suspicious
  - dangerous

The system is designed to be extended with machine learning models in future iterations.

---


## Database Integration

The backend connects to PostgreSQL using SQLAlchemy.
- Users are stored with unique email constraints
- Passwords are hashed before storage
- Database session is managed via dependency injection

---

## Security
- Password hashing implemented
- JWT authentication for protected routes
- Token-based access control
- Input validation using Pydantic

--- 

## Development Guidelines
- Keep route handlers minimal
- Move business logit to services/
- Use schemas for validation
- Maintain separations of concerns
- Write scalable and modular code

---

## Current Status
- Core API implemented
- Authentication system functional
- Database integration completed
- Protected endpoints in place

---

## Roadmap
- Improve analysis logic
- Store analysis history
- Associate results with users
- Implement roles and permissions
- Add rate limiting
- Integrate machine learning models
- Deploy to production environment

--- 

## License

Project under development. License to be defined.