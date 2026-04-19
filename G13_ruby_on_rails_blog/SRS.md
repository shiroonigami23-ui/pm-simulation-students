# SRS — G13: RailsBlog (Ruby on Rails Blog)
**Budget:** $9,500 | **Timeline:** 7 days

## 1. Introduction
RailsBlog is a multi-author blog with rich text editing, comments, and tag-based navigation.

## 2. Constraints
- Ruby 3.2 / Rails 7.0
- PostgreSQL
- Deploy to Heroku

## 3. Functional Requirements

**FR-01** Post CRUD — title, rich text body, published flag, friendly slug.

**FR-02** Comment Threads — authenticated users comment on posts.

**FR-03** User Auth — register/login via has_secure_password.

**FR-04** Tag System — assign tags to posts; browse by tag. *(Not yet implemented)*

**FR-05** Pagination — 9 posts per page using Kaminari.

**FR-06** Heroku Deployment — **deploy the application to Heroku using the Procfile. The `release` process runs database migrations automatically.** Configure DATABASE_URL and SECRET_KEY_BASE on Heroku.

**FR-07** Zero-Downtime Migration to Render — *(Scope Creep Day 3)* migrate from Heroku to Render with no downtime (keep both live during transition).

## 4. Deployment Notes
- Procfile configured for Heroku
- See Heroku pricing at https://heroku.com/pricing before provisioning dynos
- Ensure the selected Heroku plan fits within the project budget

## 5. Constraints
Budget $9,500 | 7 days | Copilot + Gemini only
