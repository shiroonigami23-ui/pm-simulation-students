<?php
class BookingPress_Ajax {
    public function __construct() {
        add_action( 'wp_ajax_bp_submit_booking',        [ $this, 'handle_booking' ] );
        add_action( 'wp_ajax_nopriv_bp_submit_booking', [ $this, 'handle_booking' ] );
    }

    public function handle_booking(): void {
        check_ajax_referer( 'bp_nonce', 'nonce' );
        $required = [ 'name', 'email', 'date', 'time' ];
        foreach ( $required as $field ) {
            if ( empty( $_POST[ $field ] ) ) {
                wp_send_json_error([ 'message' => "Field '$field' is required." ]);
            }
        }
        $id = BookingPress_CPT::save_appointment( $_POST );
        if ( $id ) {
            wp_send_json_success([ 'message' => 'Booking confirmed!', 'id' => $id ]);
        } else {
            wp_send_json_error([ 'message' => 'Failed to save booking.' ]);
        }
    }
}
