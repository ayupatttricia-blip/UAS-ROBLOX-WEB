<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

// Gerbang API untuk Registrasi Akun CAREERMATCH (Menggunakan Validasi Regex)
Route::post('/register', [AuthController::class, 'register']);

// Gerbang API untuk Login Akun CAREERMATCH (Mengeluarkan Token Session)
Route::post('/login', [AuthController::class, 'login']);