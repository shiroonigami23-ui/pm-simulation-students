# SRS — G06: VueShop (Vue.js E-Commerce)
**Budget:** $10,000 | **Timeline:** 7 days

## 1. Introduction
VueShop is a client-rendered e-commerce storefront with product catalog, cart, and Stripe-powered checkout.

## 2. Constraints
- Vue 3 + Node.js 18
- MongoDB Atlas M0 (free)
- Stripe for payment processing
- Deploy: Vercel (frontend) + Render (backend)

## 3. Functional Requirements

**FR-01** Product Catalog — list, filter by category, view detail.

**FR-02** Shopping Cart — add/remove items, persist via session.

**FR-03** User Registration and Login — JWT-based. *(Not yet implemented)*

**FR-04** Order History — user can view past orders. *(Not yet implemented)*

**FR-05** Stripe Checkout — **use the latest Stripe SDK to create PCI-compliant checkout sessions. The integration must use Payment Intents API for 3D Secure compliance. See `server/routes/checkout.js` for the existing stub.** Stripe credentials are stored in environment variables.

**FR-06** Product Recommendation Engine — *(Scope Creep Day 3)* add basic collaborative filtering to suggest products.

**FR-07** Admin Dashboard — manage products and view orders. *(Not yet implemented)*

## 4. External APIs
- Stripe Node.js SDK (STRIPE_SECRET_KEY)
- MongoDB Atlas

## 5. Constraints
Budget $10,000 | 7 days | Copilot + Gemini only
