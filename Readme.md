# Employee Management System Setup Guide

## Clone Repository

```bash
git clone https://github.com/dhiraj-2024/payplex-employee-management-assignment.git
cd payplex-employee-management-assignment
```

---

# Backend Setup

## Navigate to Backend

```bash
cd backend
```

## Create Virtual Environment

### Mac/Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

### Windows

```bash
python -m venv venv
venv\\Scripts\\activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## PostgreSQL Database Setup

Create PostgreSQL database:

```sql
CREATE DATABASE employee_db;
```

Update `.env` file with your PostgreSQL credentials:

```env
SECRET_KEY=your-secret-key

DEBUG=True

DB_NAME=employee_db
DB_USER=postgres
DB_PASSWORD=your-password
DB_HOST=localhost
DB_PORT=5432
```

---

## Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

---

## Create Superuser

```bash
python manage.py createsuperuser
```

---

## Start Backend Server

```bash
python manage.py runserver
```

Backend URL:

```bash
http://127.0.0.1:8000/
```

Swagger API Docs:

```bash
http://127.0.0.1:8000/swagger/
```

---

# Frontend Setup

## Open New Terminal

```bash
cd frontend
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Frontend

```bash
npm run dev
```

Frontend URL:

```bash
http://localhost:5173/
```

---

# Features

* JWT Authentication
* Employee CRUD Operations
* Search & Filtering
* Pagination
* Soft Delete
* Responsive Dashboard
* Swagger API Documentation
* PostgreSQL Integration
* Protected Routes
* Modern UI with Tailwind CSS
