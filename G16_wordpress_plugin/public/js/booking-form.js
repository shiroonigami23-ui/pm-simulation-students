function bpSubmit() {
  var data = {
    action: 'bp_submit_booking',
    nonce:  bp_ajax.nonce,
    name:   document.getElementById('bp-name').value,
    email:  document.getElementById('bp-email').value,
    phone:  document.getElementById('bp-phone').value,
    date:   document.getElementById('bp-date').value,
    time:   document.getElementById('bp-time').value,
  };
  jQuery.post(bp_ajax.url, data, function(resp) {
    var el = document.getElementById('bp-response');
    el.style.display = 'block';
    if (resp.success) {
      el.style.background = '#d4edda'; el.style.color = '#155724';
      el.textContent = resp.data.message;
    } else {
      el.style.background = '#f8d7da'; el.style.color = '#721c24';
      el.textContent = resp.data.message;
    }
  });
}
