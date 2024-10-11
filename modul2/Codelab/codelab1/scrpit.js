function hitung() {
    let bil1 = document.getElementById("bil1").value;
    let bil2 = document.getElementById("bil2").value;
    let hasil = parseFloat(bil1) + parseFloat(bil2);
    document.getElementById("hasil").innerText = hasil;
}

function reset() {
    document.getElementById("bil1").value = '';
    document.getElementById("bil2").value = '';
    document.getElementById("hasil").innerText = 0;
}
