function validateForm() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let alamat = document.getElementById("alamat").value;

    if (nama == "" || email == "" || alamat == "") {
        alert("Semua data harus diisi.");
        return false; // Mencegah form dikirim jika ada yang kosong
    }

    return true; // Jika semua data sudah terisi, form bisa dikirim
}
