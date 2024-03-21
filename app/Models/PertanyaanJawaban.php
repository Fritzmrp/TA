<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PertanyaanJawaban extends Model
{
    use HasFactory;

    // Definisikan nama tabel yang sesuai
    protected $table = 'pertanyaan_jawaban';

    // Definisikan kolom-kolom yang bisa diisi secara massal
    protected $fillable = [
        'id_kategori',
        'pertanyaan',
        'jawaban',
    ];

    // Atau gunakan $guarded untuk menentukan kolom-kolom yang tidak boleh diisi secara massal
    protected $guarded = [
        'id',
    ];

    // Definisikan relasi ke model Kategori jika diperlukan
    public function kategori()
    {
        return $this->belongsTo(Kategori::class, 'id_kategori');
    }
}
