import users from "./data.mjs";


const index = () => {
    console.log("=== Daftar User ===");
    users.map((user, i) => {
        const { nama, umur, alamat, email } = user; 
        console.log(`${i + 1}. ${nama} (${umur} thn) - ${alamat} [${email}]`);
    });
    console.log("--------------------\n");
};


const store = (user) => {
    users.push(user);
    console.log(`--> Berhasil menambahkan: ${user.nama}`);
};


const destroy = (indexToDelete) => {
    if (users[indexToDelete]) {
        const removed = users.splice(indexToDelete, 1);
        console.log(`--> Berhasil menghapus: ${removed[0].nama}`);
    }
};

export { index, store, destroy };