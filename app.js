/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// mencetak sebuah nilai = console.log("Teks")
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

// Menandakan Javascript Terhubung!
console.log("Skrip app.js berhasil terhubung!");

// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// Variabel "const" = Konstanta sifatnya Tetap dan tidak bisa diubah
const NAMA_KEDAI = "Kopi PSTI Kampus"; 

// Variabel Let = "let" digunakan untuk nilai yang bisa berubah sewaktu-waktu
let NAMA_KASIR = "Kang Eko"; 
let SHIFT_KERJA = "Shift Sore";

// Cetak nilai dari variabel let dan variabel const 
console.log("Nama Kedai : " + NAMA_KEDAI);
console.log("Nama Kasir : " + NAMA_KASIR);
console.log("Shift Kerja : " + SHIFT_KERJA);

// DEMO Perbedaan variabel const dan let 
NAMA_KASIR = "Kak Adelio"; // NAMA_KASIR variabel let diubah
console.log("Kasir Baru (Setelah diubah dengan variabel let): " + NAMA_KASIR);

// Input Interaktif 
// alert ini berfungsi sebagai penampil dialog pop up
alert("Selamat Datang di Sistem Poin " + NAMA_KEDAI + "!");

let NAMA_PELANGGAN = prompt("Halo! Masukkan Nama Kamu Untuk Memulai : ");

// Conditional Statement IF, ELSE IF, ELSE
// "Jika NAMA_PELANGGAN ada isinya" jalankan blok atas, jika kosong blok bawah
if (NAMA_PELANGGAN) {
    alert("Halo, " + NAMA_PELANGGAN + "! Yuk kita hitung poin member kamu.");
    console.log("Pelanggan aktif: " + NAMA_PELANGGAN);
} else {
    alert("Kamu tidak memasukkan nama. Kamu dipanggil Pelanggan Setia");
    NAMA_PELANGGAN = "Pelanggan Setia"; 
    console.log("Pelanggan aktif: " + NAMA_PELANGGAN);
}

// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Operasi Aritmatika - Hitung Poin (Bilangan bulat tanpa desimal)
let POIN_KOPI = 45;
let POIN_MAKANAN = 35;
let POIN_MERCHANDISE = 20;

// Jumlahkan Nilai Poin
let TOTAL_POIN = POIN_KOPI + POIN_MAKANAN + POIN_MERCHANDISE;

// Cetak nilai nya / output 
console.log("=== RINCIAN POIN: " + NAMA_PELANGGAN + " ===");
console.log("Poin Kopi        : " + POIN_KOPI);
console.log("Poin Makanan     : " + POIN_MAKANAN);
console.log("Poin Merchandise : " + POIN_MERCHANDISE);
console.log("Total Poin       : " + TOTAL_POIN);

// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================
// Buat Variabel Kosong -> String kosong
let TIER_MEMBER = ""; 
let BENEFIT = ""; 

// Percabangan / Conditional Statement ELSE IF
if (TOTAL_POIN >= 100) {
    // Kondisi pertama: Poin >= 100
    TIER_MEMBER = "Platinum";
    BENEFIT = "Diskon 20% + Gratis 1 Minuman Signature";
} else if (TOTAL_POIN >= 70) {
    // Kondisi kedua: Poin 70 - 99
    TIER_MEMBER = "Gold";
    BENEFIT = "Diskon 10% di setiap transaksi";
} else if (TOTAL_POIN >= 40) {
    // Kondisi ketiga: Poin 40 - 69
    TIER_MEMBER = "Silver";
    BENEFIT = "Diskon 5% untuk menu minuman";
} else {
    // Jika semua kondisi di atas tidak terpenuhi (< 40)
    TIER_MEMBER = "Bronze";
    BENEFIT = "Member Reguler (kumpulkan poin untuk naik tier)";
}

// Tampilkan Nilai Percabangan
console.log("Status Tier   : " + TIER_MEMBER);
console.log("Benefit       : " + BENEFIT);

// Tampilkan pop up alert ringkasan
alert(
    "RINGKASAN MEMBER:\n" +
    "Nama: " + NAMA_PELANGGAN + "\n" +
    "Total Poin: " + TOTAL_POIN + "\n" +
    "Tier: " + TIER_MEMBER + "\n" +
    "Benefit: " + BENEFIT
);

// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================
// FUNCTION Cara membungkus sekumpulan kode menjadi satu blok
function HITUNG_TOTAL_POIN(p1, p2, p3) {
    let JUMLAH = p1 + p2 + p3;
    return JUMLAH;
}

function TENTUKAN_TIER_MEMBER(POIN) {
    // Setiap baris "if" untuk menentukan tier
    if (POIN >= 100) return "Platinum";
    if (POIN >= 70) return "Gold";
    if (POIN >= 40) return "Silver";
    return "Bronze";
}

// Simulasi function untuk Pelanggan B dan C
let POIN_PELANGGAN_B = HITUNG_TOTAL_POIN(35, 25, 20); 
let TIER_PELANGGAN_B = TENTUKAN_TIER_MEMBER(POIN_PELANGGAN_B);

let POIN_PELANGGAN_C = HITUNG_TOTAL_POIN(15, 10, 5); 
let TIER_PELANGGAN_C = TENTUKAN_TIER_MEMBER(POIN_PELANGGAN_C);

// Cetak Tampilkan Console 
console.log("=== SIMULASI FUNCTION ===");
console.log("Total Poin Pelanggan B: " + POIN_PELANGGAN_B + " | Tier: " + TIER_PELANGGAN_B);
console.log("Total Poin Pelanggan C: " + POIN_PELANGGAN_C + " | Tier: " + TIER_PELANGGAN_C);

// Fitur Aktivitas 4 dan 5 siap dieksekusi

// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================
// ARRAY - KOTAK PENYIMPANAN YANG DIISI NILAI BANYAK
let MENU_REKOMENDASI = [
    "Caramel Macchiato", // Posisi ke - 0 index ke 0
    "Kopi Susu Gula Aren", // Posisi ke - 1
    "Croissant Butter Keju", // Posisi ke - 2
    "Matcha Cream Latte", // Posisi ke - 3
    "Cinnamon Roll Hangat" // Posisi ke - 4
];

console.log("=== MENU REKOMENDASI UNTUK MEMBER ===");

// Looping for 
for (let i = 0; i < MENU_REKOMENDASI.length; i++) {
    console.log((i + 1) + ". " + MENU_REKOMENDASI[i]);
}

// .length - Menampilkan jumlah total item dalam Array
console.log("-------------------------------------");
console.log("Total Menu Favorit: " + MENU_REKOMENDASI.length + " menu");
console.log("=== ALHAMDULILLAH BERESS ===");

// Fitur Aktivitas 6 perulangan array selesai