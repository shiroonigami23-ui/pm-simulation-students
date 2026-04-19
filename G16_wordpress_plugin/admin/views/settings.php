<?php if (!defined('ABSPATH')) exit; ?>
<div class="wrap">
  <h1>BookingPress Settings</h1>
  <form method="post" action="options.php">
    <?php settings_fields('bookingpress_options'); ?>
    <table class="form-table">
      <tr>
        <th>Business Name</th>
        <td><input type="text" name="bp_business_name"
          value="<?= esc_attr(get_option('bp_business_name','')) ?>" class="regular-text"></td>
      </tr>
      <tr>
        <th>Services (comma-separated)</th>
        <td><input type="text" name="bp_services"
          value="<?= esc_attr(get_option('bp_services','Consultation,Follow-up')) ?>" class="regular-text"></td>
      </tr>
    </table>
    <?php submit_button(); ?>
  </form>
</div>
