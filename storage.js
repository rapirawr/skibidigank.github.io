// Simpan username di localStorage
function storeUsername() {
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username);
}

// Tampilkan username dari localStorage
function displayUsername() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        document.getElementById('display-username').innerText = storedUsername;
    } else {
        document.getElementById('display-username').innerText = "Guest";
    }
}

// Hapus username dari localStorage saat logout
function logout() {
    localStorage.removeItem('username');
    window.location.href = 'login.html';
}
