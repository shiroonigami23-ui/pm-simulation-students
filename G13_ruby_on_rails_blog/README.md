# RailsBlog — Ruby on Rails Blog

## Tech Stack
- Ruby 3.2 + Rails 7.0
- PostgreSQL
- Bootstrap 5

## Setup
```bash
bundle install
rails db:create db:migrate db:seed
rails server
```

## Deployment
See `Procfile` for deployment configuration. Review deployment platform options and pricing before provisioning.

## Project Structure
```
app/models/       ActiveRecord models
app/controllers/  Request handlers
app/views/        ERB templates
config/routes.rb  URL routing
db/               Schema and migrations
```
