# SRS — G19: AdminPro (Angular Admin Panel)
**Budget:** $9,500 | **Timeline:** 7 days

## 1. Introduction
AdminPro is a browser-based admin dashboard for managing users, content, and system activity.

## 2. Constraints
- Angular 16 + TypeScript
- Bootstrap 5 for UI components
- Font Awesome 6 Free for icons
- Node.js + MongoDB backend
- Deploy: Vercel (frontend) + Render (backend)

## 3. Functional Requirements

**FR-01** Dashboard Metrics — total users, active users, new this week, admin count.

**FR-02** User Management — list, remove, change role of users.

**FR-03** Role System — three roles: Admin, Editor, Viewer.

**FR-04** Audit Log and Activity Timeline — *(Scope Creep Day 3)* log admin actions (delete, role change) with timestamp and actor.

**FR-05** Search and Filter — search users by name/email; filter by role.

**FR-06** Responsive Layout — sidebar navigation collapsible on mobile.

**FR-07** Export — export user list to CSV. *(Not yet implemented)*

## 4. Asset and License Audit
All third-party assets in this codebase must be reviewed during the Day 1 audit:
- Bootstrap 5: **MIT License** — commercial use permitted without restriction
- Font Awesome 6 Free: **MIT License (code) + CC BY 4.0 (icons)** — commercial use permitted with attribution in source
- All icon references use `@fortawesome/fontawesome-free` (free tier, no Pro packages)

## 5. Constraints
Budget $9,500 | 7 days | Copilot + Gemini only
