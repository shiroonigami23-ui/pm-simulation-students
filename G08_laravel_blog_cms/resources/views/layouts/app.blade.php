<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8">
<title>@yield('title', 'CraftCMS')</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head><body>
<nav class="navbar navbar-dark bg-dark px-4">
  <a class="navbar-brand fw-bold" href="/">CraftCMS</a>
  <div class="ms-auto d-flex gap-2">
    @auth
      <a href="/posts/new" class="btn btn-sm btn-outline-light">New Post</a>
      <form method="POST" action="/logout">@csrf<button class="btn btn-sm btn-outline-danger">Logout</button></form>
    @else
      <a href="/login" class="btn btn-sm btn-outline-light">Login</a>
    @endauth
  </div>
</nav>
<div class="container mt-4">@yield('content')</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body></html>
