<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Di sini tempat kamu mendefinisikan rute untuk aplikasi CareerMatch.
| Rute ini akan merender komponen React yang sudah kita buat.
|
*/

// Halaman utama Splash Screen
Route::get('/', function () {
    return Inertia::render('Auth/Splash');
});

// Jika kamu ingin menambahkan rute dashboard nantinya, tambahkan di bawah sini:
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// });