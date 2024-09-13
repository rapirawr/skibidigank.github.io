// Simpan username di localStorage
function login(event) {
    event.preventDefault(); // Mencegah refresh page

    const username = document.getElementById('username').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Simpan username dan gender ke localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('gender', gender);

    // Arahkan ke halaman index.html setelah login berhasil
    window.location.href = 'index.html';
}

// Tampilkan username dan gender dari localStorage
function displayUsername() {
    const storedUsername = localStorage.getItem('username');
    const storedGender = localStorage.getItem('gender');
    const usernameElement = document.getElementById('display-username');
    const genderElement = document.getElementById('display-gender');

    // Tampilkan username
    usernameElement.textContent = storedUsername ? storedUsername : "Guest";

    // Tampilkan gender dengan ikon
    if (storedGender === 'male') {
        genderElement.innerHTML = '<i class="fas fa-mars" style="color: aqua;"></i>';
    } else if (storedGender === 'female') {
        genderElement.innerHTML = '<i class="fas fa-venus" style="color: pink;"></i>';
    } else {
        genderElement.textContent = "None";
    }
}

// Hapus username dan gender dari localStorage saat logout
function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('gender');
    window.location.href = 'login.html';
}

// Panggil displayUsername saat halaman dimuat
document.addEventListener('DOMContentLoaded', displayUsername);
