// Menggunakan sintaks ES Module (import)
import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Konfigurasi dotenv untuk ES Module
dotenv.config();

// --- 1. Konfigurasi Database ---
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  // Menambahkan fitur untuk mendapatkan tanggal sebagai string MySQL
  dateStrings: true,
};

// Buat pool koneksi (lebih efisien daripada koneksi tunggal)
let pool;
try {
  pool = mysql.createPool(dbConfig);
  console.log("Database pool connected successfully.");
} catch (error) {
  console.error("Failed to create database pool:", error.message);
  process.exit(1); // Keluar jika koneksi gagal
}

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk mem-parsing body dari request
// Menggantikan URL-encoded form data (seperti di PHP/React Native)
app.use(bodyParser.urlencoded({ extended: true }));
// Mengizinkan JSON body juga, jika dibutuhkan
app.use(bodyParser.json());

// Middleware sederhana untuk menangani CORS (penting untuk React Native)
app.use((req, res, next) => {
  // Izinkan semua origin. Dalam produksi, batasi ke URL frontend Anda.
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Tangani pre-flight requests (diperlukan oleh React Native/browser)
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// --- 2. Endpoint API (CRUD) ---

/**
 * Endpoint Utama: Menampilkan seluruh data mahasiswa (normal)
 * Replikasi dari: api.php tanpa 'op' atau op=normal
 * URL: /api/mahasiswa atau /api/mahasiswa?op=normal
 */
app.get(["/api/mahasiswa", "/api/mahasiswa/op=normal"], async (req, res) => {
  try {
    const sql =
      "SELECT id, npm, nama, program_studi, tanggal_input FROM mahasiswa ORDER BY id DESC";
    const [results] = await pool.query(sql);

    // Mengirim respons dalam format JSON yang sesuai dengan modul PHP:
    // {"data":{"result":[...data...]}}
    res.json({ data: { result: results } });
  } catch (error) {
    console.error("Error fetching data (normal):", error);
    res
      .status(500)
      .json({ data: { result: "Gagal memuat data" }, error: error.message });
  }
});

/**
 * Endpoint Create: Menyimpan data mahasiswa baru
 * Replikasi dari: api.php?op=create (Method POST)
 * URL: /api/mahasiswa
 */
app.post("/api/mahasiswa", async (req, res) => {
  // Karena React Native menggunakan URL-encoded form data (body),
  // kita ambil data dari req.body
  const { npm, nama, program_studi } = req.body;
  let hasil = "Gagal dimasukkan data";

  // Validasi data
  if (!npm || !nama || !program_studi) {
    return res
      .status(400)
      .json({ data: { result: "NPM, Nama, dan Program Studi harus diisi." } });
  }

  try {
    const sql =
      "INSERT INTO mahasiswa (npm, nama, program_studi) VALUES (?, ?, ?)";
    const [result] = await pool.execute(sql, [npm, nama, program_studi]);

    if (result.affectedRows > 0) {
      hasil = "Berhasil menambahkan data";
    }

    res.json({ data: { result: hasil } });
  } catch (error) {
    console.error("Error creating data:", error);
    // Respon error yang mengikuti format sukses (untuk kompatibilitas dengan frontend yang mungkin hanya cek 'result')
    res.status(500).json({
      data: { result: "Gagal memasukkan data" },
      error: error.message,
    });
  }
});

/**
 * Endpoint Detail: Menampilkan data mahasiswa berdasarkan ID
 * Replikasi dari: api.php?op=detail&id=... (Method GET)
 * URL: /api/mahasiswa/detail?id=3
 */
app.get("/api/mahasiswa/detail", async (req, res) => {
  const id = req.query.id;

  if (!id) {
    return res.status(400).json({ data: { result: "ID harus disertakan" } });
  }

  try {
    const sql =
      "SELECT id, npm, nama, program_studi, tanggal_input FROM mahasiswa WHERE id = ?";
    const [results] = await pool.execute(sql, [id]);

    if (results.length === 0) {
      return res.status(404).json({ data: { result: "Data tidak ditemukan" } });
    }

    // Modul PHP mengembalikan array meskipun hanya 1 data
    res.json({ data: { result: results } });
  } catch (error) {
    console.error("Error fetching detail data:", error);
    res.status(500).json({
      data: { result: "Gagal memuat detail data" },
      error: error.message,
    });
  }
});

/**
 * Endpoint Update: Merubah data mahasiswa
 * Replikasi dari: api.php?op=update&id=... (Method POST)
 * URL: /api/mahasiswa/update?id=3
 */
app.post("/api/mahasiswa/update", async (req, res) => {
  const id = req.query.id; // ID diambil dari query string
  // Data yang akan di-update diambil dari body (POST)
  const { npm, nama, program_studi } = req.body;

  if (!id) {
    return res.status(400).json({ data: { result: "ID harus disertakan" } });
  }

  // Minimal harus ada salah satu field yang diisi
  if (!npm && !nama && !program_studi) {
    return res.status(400).json({
      data: {
        result:
          "Setidaknya satu kolom (NPM/Nama/Program Studi) harus diisi untuk update",
      },
    });
  }

  try {
    // Logika untuk membangun query UPDATE secara dinamis
    let updateParts = [];
    let params = [];

    if (npm) {
      updateParts.push("npm = ?");
      params.push(npm);
    }
    if (nama) {
      updateParts.push("nama = ?");
      params.push(nama);
    }
    if (program_studi) {
      updateParts.push("program_studi = ?");
      params.push(program_studi);
    }

    // Tambahkan tanggal_input=now() seperti di modul PHP
    updateParts.push("tanggal_input = NOW()");

    // Tambahkan ID ke array params di akhir
    params.push(id);

    const sql = `UPDATE mahasiswa SET ${updateParts.join(", ")} WHERE id = ?`;
    const [result] = await pool.execute(sql, params);

    let hasil = "Gagal melakukan update data";
    if (result.affectedRows > 0) {
      hasil = "Data berhasil diupdate";
    } else if (result.affectedRows === 0 && result.changedRows === 0) {
      hasil = "Tidak ada perubahan data, atau ID tidak ditemukan";
    }

    res.json({ data: { result: hasil } });
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({
      data: { result: "Gagal melakukan update data" },
      error: error.message,
    });
  }
});

/**
 * Endpoint Delete: Menghapus data mahasiswa
 * Replikasi dari: api.php?op=delete&id=... (Method GET)
 * URL: /api/mahasiswa/delete?id=3
 */
app.get("/api/mahasiswa/delete", async (req, res) => {
  const id = req.query.id;
  let hasil = "Gagal menghapus data";

  if (!id) {
    return res.status(400).json({ data: { result: "ID harus disertakan" } });
  }

  try {
    const sql = "DELETE FROM mahasiswa WHERE id = ?";
    const [result] = await pool.execute(sql, [id]);

    if (result.affectedRows > 0) {
      hasil = "Berhasil menghapus data";
    } else {
      // Jika affectedRows 0, berarti ID tidak ditemukan
      hasil = "Gagal menghapus data (ID tidak ditemukan)";
    }

    res.json({ data: { result: hasil } });
  } catch (error) {
    console.error("Error deleting data:", error);
    res
      .status(500)
      .json({ data: { result: "Gagal menghapus data" }, error: error.message });
  }
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server Express berjalan di http://localhost:${PORT}`);
  console.log(`API Mahasiswa siap digunakan.`);
});
