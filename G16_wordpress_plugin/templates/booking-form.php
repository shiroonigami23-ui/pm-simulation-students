<?php if (!defined('ABSPATH')) exit; ?>
<div class="bp-booking-form" style="max-width:500px;font-family:sans-serif">
  <h3><?= esc_html(get_option('bp_business_name','Book Appointment')) ?></h3>
  <div id="bp-response" style="display:none;padding:.8rem;border-radius:4px;margin-bottom:1rem"></div>
  <p><label>Name *<br><input type="text" id="bp-name" style="width:100%" required></label></p>
  <p><label>Email *<br><input type="email" id="bp-email" style="width:100%" required></label></p>
  <p><label>Phone<br><input type="tel" id="bp-phone" style="width:100%"></label></p>
  <p><label>Date *<br><input type="date" id="bp-date" style="width:100%" required></label></p>
  <p><label>Time *<br><input type="time" id="bp-time" style="width:100%" required></label></p>
  <p><button onclick="bpSubmit()" style="background:#0073aa;color:white;border:none;padding:.6rem 1.5rem;border-radius:4px;cursor:pointer">Book Appointment</button></p>
</div>
