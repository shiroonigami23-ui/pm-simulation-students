# SRS — G02: BlogForge (Django Blog)
**Budget:** $10,000 | **Timeline:** 7 days

## 1. Introduction
BlogForge is a multi-author blogging platform. Authors publish posts, readers comment, admins moderate.

## 2. Constraints
- Python 3.11 / Django 4.2
- SQLite dev, PostgreSQL production
- Deploy to Render free tier

## 3. Functional Requirements

**FR-01** Post CRUD — create/edit/publish posts with title, slug, body, category, image, status.

**FR-02** Category System — posts belong to categories; category pages list related posts.

**FR-03** Comment Threads — authenticated users comment; admin moderates.

**FR-04** User Auth — Django login/logout. Password managed via admin.

**FR-05** Pagination — 6 posts per page.

**FR-06** Admin Dashboard — full CRUD via Django admin panel.

**FR-07** Search — full-text search across titles and bodies. *(Not yet implemented)*

**FR-08** RSS Feed — 20 most recent published posts. *(Not yet implemented)*

## 4. Setup
```bash
pip install -r requirements.txt
python manage.py migrate     # sets up all database tables
python manage.py createsuperuser
python manage.py runserver
```

## 5. Deployment
Render free tier — Gunicorn + WhiteNoise. Set SECRET_KEY, DEBUG=False, ALLOWED_HOSTS.

## 6. Project Constraints
Budget $10,000 | 7 days | Copilot + Gemini only
