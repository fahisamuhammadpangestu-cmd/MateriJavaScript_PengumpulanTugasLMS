// 1. List data produk awal minimal 5
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 3000000 },
  { id: 4, nama: "Headphone", harga: 1500000 },
  { id: 5, nama: "Smartwatch", harga: 2500000 }
];

// 2. Nama fungsi bebas (Event Handler)
const productEventHandler = {
  handleSuccess: (pesan) => console.log(`Berhasil: ${pesan}`),
  handleError: (pesan) => console.log(`Gagal: ${pesan}`)
};

// 3. Menambahkan Produk dengan Spread Operator
function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };
  // Menggunakan spread operator untuk menyalin dan menambah array [cite: 1089, 1109]
  produkList = [...produkList, produkBaru]; 
  productEventHandler.handleSuccess(`Produk "${nama}" ditambahkan.`);
}

// 4. Menghapus Produk dengan Rest Parameter
// Rest parameter mengumpulkan sisa ID jika ingin menghapus banyak sekaligus [cite: 1026, 1041]
function hapusProduk(...ids) {
  ids.forEach(id => {
    produkList = produkList.filter(p => p.id !== id);
  });
  productEventHandler.handleSuccess(`Produk dengan ID [${ids}] telah dihapus.`);
}

// 5. Menampilkan Semua Produk dengan Destructuring
function tampilkanProduk() {
  console.log("=== DAFTAR PRODUK TOKO ONLINE ===");
  // Destructuring di dalam loop untuk efisiensi [cite: 983, 992]
  for (const { id, nama, harga } of produkList) {
    console.log(`ID: ${id} | Produk: ${nama} | Harga: Rp${harga.toLocaleString()}`);
  }
  console.log("----------------------------------");
}

// --- EKSEKUSI KODE (Contoh Penambahan Data) ---

// Menampilkan data awal
tampilkanProduk();

// Menambah produk baru
tambahProduk(6, "Mouse Gaming", 500000);
tampilkanProduk();

// Menghapus produk dengan ID 2
hapusProduk(2);
tampilkanProduk();