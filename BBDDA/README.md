# NetSysAI - Database (BBDDA)

This directory contains all database-related resources for the NetSysAI project.

The system uses PostgreSQL as its relational database, running inside a Docker container to ensure portability and consistency across different environments.

---

## Project Structure
```
BBDDA/
├── docker-compose.yml # PostgreSQL container configuration
├── schema.sql # Database schema definition
├── seed.sql # Initial data (optional)
└── README.md # Documentation
```

---

## Getting Started

To start the database service, run the following command from this directory:

```bash
sudo docker-compose up -d
```
This will:

- Pull the PostgreSQL image (if not already available)
- Create and start the container
- Expose the database on port 5432

---

## Connection Details

The database will be accessible at:

```
Host: localhost
Port: 5432
```

Credentials are defined in the docker-compose.yml file.

---

## Schema

The schema.sql file defines the database structure.

Example of a basic users table:

```
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Seed Data

The seed.sql file can be used to populate the database with initial data for development or testing.

Example:

```
INSERT INTO users (email, password)
VALUES ('test@netsysai.com', '123456');
```
---
## Backend Integration

The backend, built with FastAPI, connects to this database using SQLAlchemy.

Relevant file:

```
Backend-NetSysAI/app/db/session.py
```
---
## Notes

- Root privileges may be required when running Docker commands, depending on system configuration
- If port 5432 is already in use, update the port mapping in docker-compose.yml
- Avoid committing sensitive credentials in production environments

---

## Current Status
- PostgreSQL container running via Docker
- Backend successfully connected to the database
- Basic user table implemented

---

## Next Steps
- Implement tables for URL analysis results
- Associate analysis records with users
- Introduce roles and permissions
- Add database migrations for version control