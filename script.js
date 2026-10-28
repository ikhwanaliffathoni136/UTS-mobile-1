// Menunggu sampai seluruh halaman HTML selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    
    // Mengambil elemen-elemen yang dibutuhkan dari HTML
    const loginPage = document.getElementById('login-page');
    const homePage = document.getElementById('home-page');
    const btnLogin = document.getElementById('btn-login');
    const btnLogout = document.getElementById('btn-logout');
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');
    const displayName = document.getElementById('display-name');

    // Fungsi ketika Tombol Login diklik
    btnLogin.addEventListener('click', function() {
        const email = inputEmail.value;
        const password = inputPassword.value;

        // Validasi sederhana
        if (email === "" || password === "") {
            alert("Harap isi Email dan Password!");
            return;
        }

        // Sembunyikan halaman login
        loginPage.classList.remove('active');
        
        // Tampilkan halaman home
        homePage.classList.add('active');

        // Mengubah teks nama di profil sesuai email (diambil sebelum tanda @)
        // Contoh: budi@gmail.com -> BUDI
        const namaUser = email.split('@')[0];
        displayName.innerText = namaUser.toUpperCase();
    });

    // Fungsi ketika Tombol Logout diklik
    btnLogout.addEventListener('click', function() {
        // Sembunyikan halaman home
        homePage.classList.remove('active');
        
        // Tampilkan halaman login
        loginPage.classList.add('active');

        // Kosongkan form input
        inputEmail.value = "";
        inputPassword.value = "";
    });

});