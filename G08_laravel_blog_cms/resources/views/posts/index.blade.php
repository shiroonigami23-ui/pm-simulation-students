@extends('layouts.app')
@section('title','Posts')
@section('content')
<h1 class="mb-4">Posts</h1>
<div class="row">
@foreach($posts as $post)
<div class="col-md-4 mb-4"><div class="card h-100"><div class="card-body">
  <h5>{{ $post->title }}</h5>
  <p class="text-muted small">{{ Str::words($post->excerpt ?? $post->body, 20) }}</p>
</div><div class="card-footer d-flex justify-content-between">
  <small class="text-muted">{{ $post->author->name }}</small>
  <a href="/post/{{ $post->slug }}" class="btn btn-sm btn-primary">Read</a>
</div></div></div>
@endforeach
</div>
{{ $posts->links() }}
@endsection
