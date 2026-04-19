<?php
class BookingPress {

    public function register_hooks(): void {
        // These hooks run at wrong lifecycle stage (see main plugin file comment)
        add_action( 'init',             [ $this, 'load_textdomain' ] );
        add_action( 'init',             [ $this, 'register_post_types' ] );
        add_action( 'admin_menu',       [ $this, 'add_admin_menu' ] );
        add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_public_scripts' ] );
        add_shortcode( 'bookingpress_form', [ $this, 'render_booking_form' ] );
    }

    public function load_textdomain(): void {
        load_plugin_textdomain( 'bookingpress', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
    }

    public function register_post_types(): void {
        register_post_type( 'bp_appointment', [
            'labels'   => [
                'name'          => __( 'Appointments', 'bookingpress' ),
                'singular_name' => __( 'Appointment',  'bookingpress' ),
            ],
            'public'      => false,
            'show_ui'     => true,
            'show_in_menu'=> false,
            'supports'    => [ 'title' ],
            'capability_type' => 'post',
        ] );
    }

    public function add_admin_menu(): void {
        add_menu_page(
            'BookingPress', 'BookingPress', 'manage_options',
            'bookingpress', [ $this, 'render_admin_page' ],
            'dashicons-calendar-alt', 30
        );
    }

    public function enqueue_public_scripts(): void {
        wp_enqueue_script( 'bookingpress-js',
            BOOKINGPRESS_URL . 'public/js/booking-form.js',
            [ 'jquery' ], BOOKINGPRESS_VERSION, true );
        wp_enqueue_style( 'bookingpress-css',
            BOOKINGPRESS_URL . 'public/css/booking-form.css',
            [], BOOKINGPRESS_VERSION );
        wp_localize_script( 'bookingpress-js', 'bp_ajax', [
            'url'   => admin_url( 'admin-ajax.php' ),
            'nonce' => wp_create_nonce( 'bp_nonce' ),
        ] );
    }

    public function render_admin_page(): void {
        include BOOKINGPRESS_PATH . 'admin/views/settings.php';
    }

    public function render_booking_form( $atts ): string {
        ob_start();
        include BOOKINGPRESS_PATH . 'templates/booking-form.php';
        return ob_get_clean();
    }
}
