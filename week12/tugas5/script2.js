function validateForm() {
    // Mengambil nilai input dari form
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var jam = document.getElementById("jam").value;
    var tujuan = document.getElementById("tujuan").value;
    var jumlah = document.getElementById("jumlah").value;

    // Mengambil elemen span untuk menampilkan pesan error
    var namaError = document.getElementById("namaError");
    var emailError = document.getElementById("emailError");
    var jamError = document.getElementById("jamError");
    var tujuanError = document.getElementById("tujuanError");
    var jumlahError = document.getElementById("jumlahError");

    // Mengatur pesan error menjadi kosong
    namaError.innerHTML = "";
    emailError.innerHTML = "";
    jamError.innerHTML = "";
    tujuanError.innerHTML = "";
    jumlahError.innerHTML = "";

    // Validasi Nama Pelanggan
    if (nama === "") {
        namaError.innerHTML = "Nama Pelanggan harus diisi";
        return;
    } else if (nama.length > 30) {
        namaError.innerHTML = "Nama Pelanggan maksimal 30 karakter";
        return;
    }

    // Validasi Email
    if (email === "") {
        emailError.innerHTML = "Email harus diisi";
        return;
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.innerHTML = "Format email tidak valid";
            return;
        }
    }

    // Validasi Jam Keberangkatan
    if (jam === "") {
        jamError.innerHTML = "Jam Keberangkatan harus diisi";
        return;
    }

    // Validasi Tujuan Keberangkatan
    if (tujuan === "") {
        tujuanError.innerHTML = "Tujuan Keberangkatan harus diisi";
        return;
    }

    // Validasi Jumlah Tiket
    if (jumlah === "") {
        jumlahError.innerHTML = "Jumlah Tiket harus diisi";
        return;
    } else if (isNaN(jumlah) || jumlah < 1 || jumlah > 10) {
        jumlahError.innerHTML = "Jumlah Tiket harus berupa bilangan bulat antara 1 dan 10";
        return;
    }

    // Jika semua data valid, tampilkan hasil
    document.getElementById("resultNama").innerHTML = "Nama Pelanggan: " + nama;
    document.getElementById("resultEmail").innerHTML = "Email: " + email;
    document.getElementById("resultJam").innerHTML = "Jam Keberangkatan: " + jam;
    document.getElementById("resultTujuan").innerHTML = "Tujuan Keberangkatan: " + tujuan;
    document.getElementById("resultJumlah").innerHTML = "Jumlah Tiket: " + jumlah;

    // Tampilkan hasil dan sembunyikan form
    document.getElementById("myForm").style.display = "none";
    document.getElementById("result").style.display = "block";
}
