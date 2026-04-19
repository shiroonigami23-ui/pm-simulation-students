<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\AuthController;

Route::get('/',         [PostController::class, 'index'])->name('posts.index');
Route::get('/post/{slug}', [PostController::class, 'show'])->name('posts.show');
Route::get('/login',    [AuthController::class,  'showLogin'])->name('login');
Route::post('/login',   [AuthController::class,  'login']);
Route::get('/register', [AuthController::class,  'showRegister'])->name('register');
Route::post('/register',[AuthController::class,  'register']);
Route::post('/logout',  [AuthController::class,  'logout'])->name('logout');
Route::middleware('auth')->group(function () {
    Route::get('/posts/new',   [PostController::class, 'create'])->name('posts.create');
    Route::post('/posts',      [PostController::class, 'store'])->name('posts.store');
});
