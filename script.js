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
    window.addEventListener('load', function() {
        const loadingScreen = document.getElementById('loading-screen');
        const allContent = document.querySelectorAll('body > *:not(#loading-screen)');

        // Menyembunyikan semua konten
        allContent.forEach(element => {
            element.classList.add('hidden');
        });

        // Menghilangkan loading screen setelah semua elemen dimuat
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                allContent.forEach(element => {
                    element.classList.remove('hidden');
                });
            }, 1000); // Waktu untuk memastikan transisi sebelum menghilangkan loading screen
        }, 0);
    });

    document.addEventListener("DOMContentLoaded", function() {
        const loadingScreen = document.getElementById('loading-screen');
        const loadingWords = document.getElementById('loading-words');
        const elementsToLoad = [
            { name: "Navbar", selector: 'nav' },
            { name: "Image", selector: 'img' },
            { name: "Style", selector: 'link[rel="stylesheet"]' },
            { name: "Member", selector: '.member-box' },
            { name: "Social Media", selector: '.social-media' }
        ];
    
        // Tambahkan elemen loading ke loading screen
        elementsToLoad.forEach(element => {
            const wordSpan = document.createElement('span');
            wordSpan.classList.add('word');
            wordSpan.textContent = element.name;
            loadingWords.appendChild(wordSpan);
        });
    
        const words = document.querySelectorAll('.word');
        let currentStep = 0;
    
        function updateLoadingText(step) {
            words.forEach((word, index) => {
                if (index === step) {
                    word.classList.add('highlight');
                } else {
                    word.classList.remove('highlight');
                }
            });
        }
    
        function loadNextElement(step) {
            if (step < elementsToLoad.length) {
                const element = elementsToLoad[step];
                const elements = document.querySelectorAll(element.selector);
                
                let loadedCount = 0;
    
                if (elements.length > 0) {
                    elements.forEach(el => {
                        if (el.complete || el.readyState === 'complete' || el.readyState === 'loaded') {
                            elementLoaded();
                        } else {
                            el.addEventListener('load', elementLoaded);
                            el.addEventListener('error', elementLoaded);
                        }
                    });
                } else {
                    elementLoaded(); // Jika tidak ada elemen yang ditemukan, lanjutkan ke step berikutnya
                }
    
                function elementLoaded() {
                    loadedCount++;
                    if (loadedCount === elements.length) {
                        // Semua elemen dari kategori ini telah diload
                        updateLoadingText(step);
                        loadNextElement(step + 1); // Pindah ke elemen berikutnya
                    }
                }
            } else {
                finishLoading(); // Semua elemen telah diload
            }
        }
    
        function finishLoading() {
            setTimeout(() => {
                loadingScreen.classList.add('hidden'); // Sembunyikan loading screen
            }, 500); // Waktu tunggu sebelum loading screen hilang
        }
    
        // Mulai loading dari elemen pertama
        loadNextElement(0);
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
