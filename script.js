const photoGallery = document.getElementById('photo-gallery');

// Cek apakah pengguna sudah login
function isLoggedIn() {
    const storedUsername = localStorage.getItem('username');
    return storedUsername !== null; // Mengembalikan true jika username ada di localStorage
}

if (isLoggedIn()) {
    const images = [];
    for (let i = 1; i <= 250; i++) {
        images.push(`Foto/Image${i}.jpg`);
    }

    images.forEach((src, index) => {
        const a = document.createElement('a');
        a.href = src;
        a.download = `Image${index + 1}`;
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Image ${index + 1}`;
        
        // Event listener untuk gambar yang gagal dimuat
        img.onerror = function() {
            img.style.visibility = 'hidden'; // Menyembunyikan gambar jika gagal dimuat
        };
        
        a.appendChild(img);
        photoGallery.appendChild(a);
    });
} else {
    // Jika belum login, tampilkan pesan dengan ikon login
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('gallery-message');
    
    const textParagraph = document.createElement('p');
    textParagraph.textContent = 'Silahkan login untuk melihat profil';
    
    const link = document.createElement('a');
    link.href = 'login.html';
    
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-right-to-bracket';
    icon.style.color = ' #00fbff';
    
    // Menambahkan gaya inline untuk memastikan elemen berada di sebelah satu sama lain
    messageDiv.style.display = 'flex';
    messageDiv.style.alignItems = 'center';
    
    textParagraph.style.margin = '0';
    textParagraph.style.fontSize = '1em'; // Sesuaikan ukuran font jika perlu
    
    link.style.marginLeft = '8px'; // Jarak antara teks dan ikon
    
    icon.style.fontSize = '1.2em'; // Sesuaikan ukuran ikon jika perlu
    
    link.appendChild(icon);
    messageDiv.appendChild(textParagraph);
    messageDiv.appendChild(link);
    photoGallery.appendChild(messageDiv);
}

// text animasi
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.text-animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
});
