# BookingPress — WordPress Plugin

## Tech Stack
- PHP 8.2 + WordPress 6.x hook system
- Custom Post Types
- WooCommerce integration (planned)
- jQuery AJAX

## Setup
1. Copy this folder to `wp-content/plugins/bookingpress/`
2. Activate via WordPress Admin → Plugins
3. Configure via Settings → BookingPress

## Usage
Add `[bookingpress_form]` shortcode to any page.

## Project Structure
```
bookingpress.php          Plugin entry point
includes/                 Core classes
admin/                    Admin views and controllers
public/                   Frontend JS and CSS
templates/                Shortcode templates
```
