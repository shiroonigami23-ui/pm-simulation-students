<?php
class BookingPress_Admin {
    public function __construct() {
        add_action( 'admin_menu', [ $this, 'register_submenus' ] );
    }
    public function register_submenus(): void {
        add_submenu_page( 'bookingpress', 'All Appointments', 'Appointments',
            'manage_options', 'bookingpress-appointments', [ $this, 'render_appointments' ] );
    }
    public function render_appointments(): void {
        $appointments = BookingPress_CPT::get_appointments();
        include BOOKINGPRESS_PATH . 'admin/views/appointments.php';
    }
}
