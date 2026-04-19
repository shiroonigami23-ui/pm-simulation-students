# SRS — G18: EShop (Django REST E-Shop)
**Budget:** $10,000 | **Timeline:** 7 days

## 1. Introduction
EShop is a headless e-commerce backend with product catalog, order management, and async task processing.

## 2. Constraints
- Python 3.12 / Django 4.2 / DRF
- Celery + Redis for async tasks
- PostgreSQL
- Deploy: Render free tier

## 3. Functional Requirements

**FR-01** Product Catalog API — list, filter, search products. CRUD for admins.

**FR-02** Cart and Orders — create orders from cart; track status.

**FR-03** Stripe Webhook — receive Stripe payment events; update order status via Celery task.

**FR-04** Async Task Queue — **use Celery with Redis broker for order confirmation emails and webhook processing. Celery is configured in `config/celery.py`. The project targets Python 3.12.** See `tasks/order_tasks.py` for implemented tasks.

**FR-05** User Auth — DRF session auth; register/login/logout.

**FR-06** Stripe Webhook for Order Status Updates — *(Scope Creep Day 3)* extend webhook handler to support `charge.refunded` event.

**FR-07** Product Reviews — *(Not yet implemented)*

## 4. External APIs
- Stripe (STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET)
- Redis (REDIS_URL) — Celery broker and result backend

## 5. Constraints
Budget $10,000 | 7 days | Python 3.12 | Copilot + Gemini only
