document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnLuas").addEventListener("click", hitungLuas);
    document.getElementById("resetLuas").addEventListener("click", resetLuas);
    document.getElementById("btnKeliling").addEventListener("click", hitungKeliling);
    document.getElementById("resetKeliling").addEventListener("click", resetKeliling);
});

function hitungLuas() {
    let sisi = document.getElementById("sisiLuas").value;
    
    if (sisi === "" || sisi <= 0) {
        alert("Masukkan nilai sisi yang valid!");
        return;
    }

    let luas = sisi * sisi;
    document.getElementById("hasilLuas").innerText = "Luas Persegi = " + luas;
}

function resetLuas() {
    document.getElementById("sisiLuas").value = "";
    document.getElementById("hasilLuas").innerText = "";
}

function hitungKeliling() {
    let sisi = document.getElementById("sisiKeliling").value;
    
    if (sisi === "" || sisi <= 0) {
        alert("Masukkan nilai sisi yang valid!");
        return;
    }

    let keliling = 4 * sisi;
    document.getElementById("hasilKeliling").innerText = "Keliling Persegi = " + keliling;
}

function resetKeliling() {
    document.getElementById("sisiKeliling").value = "";
    document.getElementById("hasilKeliling").innerText = "";
}
