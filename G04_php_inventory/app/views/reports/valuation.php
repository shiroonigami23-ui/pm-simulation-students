<?php require_once __DIR__ . '/../shared/layout.php'; layout_start('Valuation Report'); ?>
<div class="d-flex justify-content-between mb-3">
  <h1>Inventory Valuation Report</h1>
  <span class="fs-5 fw-bold text-success">Total: $<?= number_format($total,2) ?></span>
</div>
<table class="table table-sm table-striped">
  <thead><tr><th>SKU</th><th>Name</th><th>Qty</th><th>Price</th><th>Value</th><th>In</th><th>Out</th><th>Recent</th><th>Status</th></tr></thead>
  <tbody>
  <?php foreach ($report as $r): ?>
  <tr>
    <td><?= htmlspecialchars($r['sku']??'') ?></td>
    <td><?= htmlspecialchars($r['name']) ?></td>
    <td><?= $r['quantity'] ?></td>
    <td>$<?= number_format($r['unit_price'],2) ?></td>
    <td>$<?= number_format($r['total_value'],2) ?></td>
    <td><?= $r['total_in'] ?></td>
    <td><?= $r['total_out'] ?></td>
    <td><?= $r['recent_movements'] ?></td>
    <td><?= $r['reorder_status']==='REORDER'
        ? '<span class="badge bg-danger">REORDER</span>'
        : '<span class="badge bg-success">OK</span>' ?></td>
  </tr>
  <?php endforeach; ?>
  </tbody>
</table>
<?php layout_end(); ?>
