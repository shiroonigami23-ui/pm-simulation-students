# BlogForge — Django Blog

## Tech Stack
- Django 4.2 + Python 3.11
- SQLite (dev) / PostgreSQL (production)
- Bootstrap 5 (templates)
- Render deployment

## Setup
```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

## Environment
Copy `.env.example` to `.env` and set values.

## Project Structure
```
config/       Django project settings and URLs
blog/         Main blog app (posts, comments, categories)
accounts/     Auth views
```
