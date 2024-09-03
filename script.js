const photoGallery = document.getElementById('photo-gallery');

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
