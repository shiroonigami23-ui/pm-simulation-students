# EShop — Django REST E-Shop

## Tech Stack
- Python 3.12 + Django 4.2 + DRF
- Celery + Redis (async tasks)
- PostgreSQL
- Stripe (payments)

## Setup
```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# Celery worker (separate terminal)
celery -A config worker -l info
```

> If Celery fails to start, check Python version compatibility with the installed packages.

## Project Structure
```
shop/           Product catalog app
orders/         Orders and Stripe webhook
tasks/          Celery async tasks
config/         Django settings, Celery config
```
