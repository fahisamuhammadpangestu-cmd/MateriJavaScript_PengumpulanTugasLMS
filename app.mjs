import { index, store, destroy } from "./controller.mjs";

const app = () => {
    store({ nama: 'Budi Santoso', umur: 22, alamat: 'Jakarta', email: 'budi@mail.com' });
    store({ nama: 'Siti Aminah', umur: 21, alamat: 'Bandung', email: 'siti@mail.com' });

    index();

    destroy(0);

    // Tampilkan hasil akhir
    index();
};

app();