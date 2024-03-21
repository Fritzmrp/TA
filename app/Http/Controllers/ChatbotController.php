<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PDO;
use PDOException;
use Illuminate\Support\Facades\DB;

class ChatbotController extends Controller
{
    // Method untuk mendapatkan kategori dari database
    public function getKategori()
    {
        $kategori = DB::table('kategori')->get();
        return response()->json($kategori);
    }

    // Method untuk mendapatkan pertanyaan berdasarkan kategori dari database
    public function getPertanyaanByKategori(Request $request)
    {
        $kategori = $request->input('kategori');

        try {
            $pdo = new PDO("mysql:host=localhost;dbname=chatbot", "root", "");
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $sql = "SELECT * FROM pertanyaan_jawaban WHERE id_kategori = :kategori";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':kategori', $kategori);
            $stmt->execute();

            $pertanyaan = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return response()->json($pertanyaan);
        } catch (PDOException $e) {
            return response()->json(['error' => 'Gagal mengambil data dari database: ' . $e->getMessage()], 500);
        }
    }

    // Method untuk menangani pertanyaan dari frontend dan memberikan jawaban
    public function sendPertanyaan(Request $request)
    {
        $pertanyaan = $request->input('pertanyaan');

        // Lakukan logika untuk mencari jawaban dari database berdasarkan pertanyaan
        try {
            $pdo = new PDO("mysql:host=localhost;dbname=chatbot", "root", "");
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $sql = "SELECT jawaban FROM pertanyaan_jawaban WHERE pertanyaan = :pertanyaan";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':pertanyaan', $pertanyaan);
            $stmt->execute();

            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($result) {
                return response()->json(['jawaban' => $result['jawaban']]);
            } else {
                return response()->json(['jawaban' => 'Maaf, pertanyaan Anda tidak memiliki jawaban dalam database.']);
            }
        } catch (PDOException $e) {
            return response()->json(['error' => 'Gagal mengambil data dari database: ' . $e->getMessage()], 500);
        }
    }
}
