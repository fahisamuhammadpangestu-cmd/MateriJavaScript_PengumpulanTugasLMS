// 1. Membuat Class Pelanggan sesuai materi OOP 
class Pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;
  }

  // Method untuk menampilkan info transaksi
  getDetailSewa() {
    return `Pelanggan: ${this.nama} | Telp: ${this.nomorTelepon} | Kendaraan: ${this.kendaraanDisewa}`;
  }
}

// 2. Sistem Manajemen Penyewaan
let daftarPenyewa = [];

// Function mencatat transaksi baru
function catatTransaksi(nama, telp, kendaraan) {
  // Membuat Object baru dari Class Pelanggan
  const pelangganBaru = new Pelanggan(nama, telp, kendaraan);
  daftarPenyewa.push(pelangganBaru);
  tampilkanDaftar();
}

// 3. Manipulasi DOM untuk menampilkan daftar
function tampilkanDaftar() {
  const container = document.getElementById("list-penyewa");
  container.innerHTML = "";

  daftarPenyewa.forEach((pelanggan, index) => {
    const item = document.createElement("div"); 
    item.innerText = `${index + 1}. ${pelanggan.getDetailSewa()}`;
    
    container.appendChild(item); 
  });
}

// Contoh input data awal
catatTransaksi("reno", "0812345678", "Toyota Avanza");
catatTransaksi("baba", "0898765432", "Honda Vario");