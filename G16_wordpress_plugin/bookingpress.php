<?php
/**
 * Plugin Name: BookingPress
 * Plugin URI:  https://example.com/bookingpress
 * Description: Appointment booking system for WordPress.
 * Version:     1.0.0
 * Author:      G16 Team
 * License:     GPL-2.0+
 * Text Domain: bookingpress
 */

if ( ! defined( 'ABSPATH' ) ) exit;

define( 'BOOKINGPRESS_VERSION', '1.0.0' );
define( 'BOOKINGPRESS_PATH',    plugin_dir_path( __FILE__ ) );
define( 'BOOKINGPRESS_URL',     plugin_dir_url( __FILE__ ) );

require_once BOOKINGPRESS_PATH . 'includes/class-bookingpress.php';
require_once BOOKINGPRESS_PATH . 'includes/class-cpt.php';
require_once BOOKINGPRESS_PATH . 'includes/class-ajax.php';
require_once BOOKINGPRESS_PATH . 'admin/class-admin.php';

$plugin = new BookingPress();

// Plugin hooks registered at activation.
// Review the WordPress Plugin Handbook for best practices on hook registration lifecycle.
$plugin->register_hooks();  // BUG: should be: add_action('init', [$plugin, 'register_hooks']);
