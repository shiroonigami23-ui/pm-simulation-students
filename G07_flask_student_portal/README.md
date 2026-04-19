# EduPortal — Flask Student Portal

## Tech Stack
- Flask 2.3 + Python 3.11
- SQLAlchemy + Flask-Migrate
- Flask-Login (auth)
- Bootstrap 5

## Setup
```bash
pip install -r requirements.txt
flask db init
flask db migrate
flask db upgrade
python wsgi.py
```

## Project Structure
```
app/              Flask application factory
app/routes/       Blueprints (auth, portal)
app/models/       SQLAlchemy models
app/templates/    Jinja2 templates
wsgi.py           Entry point
```
