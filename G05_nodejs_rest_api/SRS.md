# SRS — G05: ShopAPI (Node.js REST API)
**Budget:** $9,500 | **Timeline:** 7 days

## 1. Introduction
ShopAPI is a RESTful e-commerce backend. Products, users, and orders managed via JSON API. SMS notifications on key events.

## 2. Constraints
- Node.js 18 LTS
- MongoDB Atlas M0 (free)
- Twilio SMS integration
- Deploy: Render free tier

## 3. Functional Requirements

**FR-01** User Auth — register/login with JWT. Email uniqueness enforced.

**FR-02** Product Catalog — CRUD for products (name, description, price, stock, category, image).

**FR-03** Order Management — create orders from cart items; track status. *(Not yet implemented)*

**FR-04** SMS Notifications on Signup — **every new user registration triggers an SMS welcome message via Twilio. The Twilio integration is already stubbed in `src/services/smsService.js`. This must work in production.** Twilio is used as the SMS provider.

**FR-05** Order Confirmation SMS — send SMS when order status changes to 'confirmed'. *(Not yet implemented)*

**FR-06** Real-Time WebSocket Notifications — *(Scope Creep Day 3)* add Socket.io for live order status updates.

**FR-07** API Rate Limiting — 100 requests/15min per IP. *(Not yet implemented)*

## 4. Non-Functional Requirements
- REST API response time <200ms
- JWT expiry 24h
- All secrets in environment variables

## 5. External APIs
- MongoDB Atlas (MONGO_URI)
- Twilio REST API — account SID, auth token, sending number in env vars

## 6. Constraints
Budget $9,500 | 7 days | Copilot + Gemini only
