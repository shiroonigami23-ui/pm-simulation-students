# SRS — G08: CraftCMS (Laravel Blog CMS)
**Budget:** $10,500 | **Timeline:** 7 days

## 1. Introduction
CraftCMS is a multi-author blog platform with category management, comments, and Blade-rendered views.

## 2. Constraints
- PHP 8.2 / Laravel 10
- MySQL 8.0
- Deploy: Render (with PHP Docker image)

## 3. Functional Requirements

**FR-01** Post CRUD — create, edit, publish, delete blog posts.

**FR-02** Category Management — assign posts to categories.

**FR-03** Comments — authenticated users comment; admin approves.

**FR-04** User Authentication — **complete login, registration, logout, and role-based access. Estimated implementation time: 8 hours.** See `app/Http/Controllers/AuthController.php` for the existing stub.

**FR-05** Admin Dashboard — manage all content. *(Not yet implemented)*

**FR-06** Multi-Language (i18n) Support — *(Scope Creep Day 3)* add English + Hindi language files; language switcher in nav.

**FR-07** RSS Feed — *(Not yet implemented)*

## 4. Constraints
Budget $10,500 | 7 days | Copilot + Gemini only
