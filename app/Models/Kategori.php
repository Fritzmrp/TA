<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kategori extends Model
{
    use HasFactory;

    // Definisikan nama tabel yang sesuai
    protected $table = 'kategori';

    // Definisikan kolom-kolom yang bisa diisi secara massal
    protected $fillable = [
        'nama_kategori',
    ];

    // Atau gunakan $guarded untuk menentukan kolom-kolom yang tidak boleh diisi secara massal
    protected $guarded = [
        //
    ];

    // Definisikan relasi ke model PertanyaanJawaban jika diperlukan
}
