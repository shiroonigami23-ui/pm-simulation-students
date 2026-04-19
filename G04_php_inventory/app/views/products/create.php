<?php require_once __DIR__ . '/../shared/layout.php'; layout_start('Add Product'); ?>
<h1 class="mb-3">Add Product</h1>
<form method="post" action="/products/new" style="max-width:480px">
  <div class="mb-3"><label class="form-label">Name</label>
    <input type="text" name="name" class="form-control" required></div>
  <div class="mb-3"><label class="form-label">SKU</label>
    <input type="text" name="sku" class="form-control" required></div>
  <div class="mb-3"><label class="form-label">Quantity</label>
    <input type="number" name="quantity" class="form-control" value="0"></div>
  <div class="mb-3"><label class="form-label">Unit Price ($)</label>
    <input type="number" step="0.01" name="unit_price" class="form-control" value="0.00"></div>
  <div class="mb-3"><label class="form-label">Reorder Level</label>
    <input type="number" name="reorder_level" class="form-control" value="10"></div>
  <button type="submit" class="btn btn-primary">Save</button>
  <a href="/products" class="btn btn-secondary ms-2">Cancel</a>
</form>
<?php layout_end(); ?>
