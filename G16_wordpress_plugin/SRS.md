# SRS — G16: BookingPress (WordPress Plugin)
**Budget:** $8,500 | **Timeline:** 7 days

## 1. Introduction
BookingPress is a WordPress plugin for appointment booking. Clients embed a form via `[bookingpress_form]` shortcode.

## 2. Constraints
- PHP 8.2 / WordPress 6.x
- No third-party booking SaaS — fully self-hosted
- WooCommerce 7.x compatibility required (Scope Creep)

## 3. Functional Requirements

**FR-01** Booking Form Shortcode — `[bookingpress_form]` renders a booking form on any page/post.

**FR-02** Appointment Storage — bookings stored as WordPress Custom Post Type with meta fields.

**FR-03** Admin Dashboard — view all appointments, filter by status.

**FR-04** AJAX Submission — form submits via jQuery AJAX, no page reload.

**FR-05** Settings Page — configure business name, services list.

**FR-06** WordPress Hook Integration — **integrate the plugin cleanly with the WordPress hook lifecycle. The plugin registers actions and filters via the WordPress hook system. Estimated integration time: 8 hours.** See `bookingpress.php` for the current hook registration approach.

**FR-07** WooCommerce Compatibility — *(Scope Creep Day 3)* allow bookings to be purchased via WooCommerce cart and checkout.

## 4. Constraints
Budget $8,500 | 7 days | Copilot + Gemini only | WordPress 6.x + PHP 8.2
