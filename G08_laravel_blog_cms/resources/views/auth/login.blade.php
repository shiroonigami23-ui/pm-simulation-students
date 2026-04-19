@extends('layouts.app')
@section('title','Login')
@section('content')
<div class="row justify-content-center"><div class="col-md-4">
<div class="card"><div class="card-body p-4">
<h3 class="mb-3">Login</h3>
@if($errors->any())<div class="alert alert-danger">{{ $errors->first() }}</div>@endif
<form method="POST" action="/login">@csrf
<div class="mb-3"><label class="form-label">Email</label>
<input type="email" name="email" class="form-control" value="{{ old('email') }}" required></div>
<div class="mb-3"><label class="form-label">Password</label>
<input type="password" name="password" class="form-control" required></div>
<button class="btn btn-primary w-100">Login</button>
<a href="/register" class="btn btn-link w-100 mt-1">Create account</a>
</form>
</div></div></div></div>
@endsection
