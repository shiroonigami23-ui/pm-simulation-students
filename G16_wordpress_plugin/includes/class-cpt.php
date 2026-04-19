<?php
// Appointment data model helpers
class BookingPress_CPT {

    public static function save_appointment( array $data ): int|false {
        $post_id = wp_insert_post([
            'post_type'   => 'bp_appointment',
            'post_title'  => sanitize_text_field( $data['name'] ) . ' — ' . $data['date'],
            'post_status' => 'publish',
            'meta_input'  => [
                '_bp_name'    => sanitize_text_field( $data['name'] ),
                '_bp_email'   => sanitize_email( $data['email'] ),
                '_bp_phone'   => sanitize_text_field( $data['phone'] ?? '' ),
                '_bp_date'    => sanitize_text_field( $data['date'] ),
                '_bp_time'    => sanitize_text_field( $data['time'] ),
                '_bp_service' => sanitize_text_field( $data['service'] ?? '' ),
                '_bp_notes'   => sanitize_textarea_field( $data['notes'] ?? '' ),
                '_bp_status'  => 'pending',
            ],
        ]);
        return $post_id ?: false;
    }

    public static function get_appointments( string $status = 'all' ): array {
        $args = [ 'post_type' => 'bp_appointment', 'posts_per_page' => -1, 'post_status' => 'publish' ];
        if ( $status !== 'all' ) {
            $args['meta_query'] = [[ 'key' => '_bp_status', 'value' => $status ]];
        }
        return get_posts( $args );
    }
}
