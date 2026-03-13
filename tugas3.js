// 1. Inisialisasi array produkToko
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// 2. Fungsi Tambah Produk
function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
    
    let produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };

    produkToko.push(produkBaru);
    console.log("Produk baru berhasil ditambahkan!");
}

// 3. Fungsi Hapus Produk berdasarkan ID
function hapusProduk(id) {
    produkToko = produkToko.filter(produk => produk.id !== id);
    console.log("Proses hapus produk ID " + id + " selesai.");
}

// 4. Fungsi Tampilkan Produk
function tampilkanProduk() {
    console.log("--- Daftar Produk Saat Ini ---");
    
    for (let i = 0; i < produkToko.length; i++) {
        let p = produkToko[i];
        console.log(p.id + ". " + p.nama + " | Harga: " + p.harga + " | Stok: " + p.stok);
    }
}

//Implementasi

tampilkanProduk();           // Lihat data awal
tambahProduk("Monitor", 1500000, 4); // Tambah barang
tampilkanProduk();           // Lihat data setelah ditambah
hapusProduk(2);              // Hapus Mouse (ID 2)
tampilkanProduk();           // Lihat hasil akhir