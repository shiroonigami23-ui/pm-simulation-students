# CraftCMS — Laravel Blog CMS

## Tech Stack
- Laravel 10 + PHP 8.2
- MySQL 8.0
- Blade templates + Bootstrap 5
- Laravel Sanctum

## Setup
```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

## Project Structure
```
app/Models/              Eloquent models
app/Http/Controllers/    Request handlers
resources/views/         Blade templates
routes/web.php           Route definitions
database/                Migrations and seeders
```
