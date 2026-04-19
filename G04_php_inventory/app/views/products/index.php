<?php require_once __DIR__ . '/../shared/layout.php'; layout_start('Products'); ?>
<div class="d-flex justify-content-between mb-3">
  <h1>Products</h1>
  <a href="/products/new" class="btn btn-primary">+ Add Product</a>
</div>
<table class="table table-striped table-hover">
  <thead><tr><th>SKU</th><th>Name</th><th>Qty</th><th>Price</th><th>Value</th><th>Status</th></tr></thead>
  <tbody>
  <?php foreach ($products as $p): ?>
  <tr>
    <td><?= htmlspecialchars($p['sku'] ?? '') ?></td>
    <td><?= htmlspecialchars($p['name']) ?></td>
    <td><?= $p['quantity'] ?></td>
    <td>$<?= number_format($p['unit_price'],2) ?></td>
    <td>$<?= number_format($p['quantity']*$p['unit_price'],2) ?></td>
    <td><?= $p['quantity']<=$p['reorder_level']
        ? '<span class="badge bg-danger">REORDER</span>'
        : '<span class="badge bg-success">OK</span>' ?></td>
  </tr>
  <?php endforeach; ?>
  </tbody>
</table>
<?php layout_end(); ?>
