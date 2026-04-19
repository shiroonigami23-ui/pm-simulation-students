# InvenTrack — PHP Inventory System

## Tech Stack
- PHP 8.2 (no framework, custom MVC)
- SQLite (dev) / PostgreSQL (production)
- Bootstrap 5

## Setup
```bash
php -S localhost:8000 -t public/
# Visit http://localhost:8000
```

## Project Structure
```
public/           Web root
app/controllers/  Request handlers
app/models/       Database abstraction
app/views/        HTML templates
config/           Database config
```
