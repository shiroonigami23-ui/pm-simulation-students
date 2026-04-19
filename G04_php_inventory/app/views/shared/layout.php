<?php function layout_start(string $title): void { ?>
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<title><?= htmlspecialchars($title) ?> — InvenTrack</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head><body>
<nav class="navbar navbar-dark bg-dark px-4">
  <a class="navbar-brand fw-bold" href="/">InvenTrack</a>
  <div class="ms-auto d-flex gap-3">
    <a href="/products" class="nav-link text-white">Products</a>
    <a href="/reports"  class="nav-link text-white">Reports</a>
  </div>
</nav>
<div class="container mt-4">
<?php } function layout_end(): void { ?>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body></html>
<?php } ?>
