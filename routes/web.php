<?php

use Illuminate\Support\Facades\Route;
use App\Models\Kategori;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\ChatbotController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('pages.web.dashboard.home');
// });

Route::get('/', [KategoriController::class, 'index']); // Menggunakan controller untuk menampilkan kategori


Route::get('/kategori', [ChatbotController::class, 'getKategori']);
Route::get('/pertanyaan/{kategori}', [ChatbotController::class, 'getPertanyaanByKategori']);
