// Mengucapkan selamat datang di konsol browser
console.log("Halo Oss! Script sudah berhasil terhubung.");

// Menambahkan fungsi interaktif sederhana
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.querySelector('input[type="text"]').value;
    alert("Terima kasih " + nama + ", data kamu sudah terkirim (boongan)!");
});

// Contoh mengubah warna background footer saat diklik
const footer = document.querySelector('footer');
footer.addEventListener('click', function() {
    footer.style.backgroundColor = '#f0f0f0';
    alert("Footer diklik!");
});