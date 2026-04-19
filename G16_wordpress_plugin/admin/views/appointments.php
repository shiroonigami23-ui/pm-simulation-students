<?php if (!defined('ABSPATH')) exit; ?>
<div class="wrap">
<h1>Appointments</h1>
<table class="wp-list-table widefat fixed striped">
  <thead><tr><th>Name</th><th>Email</th><th>Date</th><th>Time</th><th>Service</th><th>Status</th></tr></thead>
  <tbody>
  <?php foreach ($appointments as $apt): ?>
  <tr>
    <td><?= esc_html(get_post_meta($apt->ID,'_bp_name',true)) ?></td>
    <td><?= esc_html(get_post_meta($apt->ID,'_bp_email',true)) ?></td>
    <td><?= esc_html(get_post_meta($apt->ID,'_bp_date',true)) ?></td>
    <td><?= esc_html(get_post_meta($apt->ID,'_bp_time',true)) ?></td>
    <td><?= esc_html(get_post_meta($apt->ID,'_bp_service',true)) ?></td>
    <td><?= esc_html(get_post_meta($apt->ID,'_bp_status',true)) ?></td>
  </tr>
  <?php endforeach; ?>
  </tbody>
</table>
</div>
