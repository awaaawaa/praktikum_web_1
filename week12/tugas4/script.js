document.addEventListener("DOMContentLoaded", function () {
    var dropdown = document.getElementById("imageDropdown");
    var selectedImage = document.getElementById("selectedImage");

    // Event listener untuk memunculkan gambar dan teks alert saat dropdown dipilih
    dropdown.addEventListener("change", function () {
        var selectedOption = dropdown.options[dropdown.selectedIndex];
        var caption = selectedOption.getAttribute("data-caption");
        var imageName = selectedOption.value;

        // Mengganti gambar pada area di bawah dropdown
        selectedImage.src = imageName;

        // Menampilkan teks alert dengan informasi nama file gambar dan deskripsi
        showAlert("Nama file gambar: " + imageName, "Deskripsi: " + caption);
    });

    // Fungsi untuk menampilkan teks alert
    function showAlert(fileName, description) {
        // Menunggu 500 milidetik (0.5 detik) sebelum menampilkan teks alert
        setTimeout(function () {
            alert(fileName + "\n" + description);
        }, 500);
    }
});

