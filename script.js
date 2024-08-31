const photoGallery = document.getElementById('photo-gallery');

const images = [
    'Foto/Image1.jpg', 'Foto/Image2.jpg', 'Foto/Image3.jpg',
    'Foto/Image4.jpg', 'Foto/Image5.jpg', 'Foto/Image6.jpg',
    'Foto/Image7.jpg', 'Foto/Image8.jpg', 'Foto/Image9.jpg',
    'Foto/Image10.jpg', 'Foto/Image11.jpg', 'Foto/Image12.jpg',
    'Foto/Image13.jpg', 'Foto/Image14.jpg', 'Foto/Image15.jpg',
    'Foto/Image16.jpg', 'Foto/Image17.jpg', 'Foto/Image18.jpg',
    'Foto/Image19.jpg', 'Foto/Image20.jpg', 'Foto/Image21.jpg',
    'Foto/Image22.jpg', 'Foto/Image23.jpg', 'Foto/Image24.jpg',
    'Foto/Image25.jpg', 'Foto/Image26.jpg', 'Foto/Image27.jpg',
    'Foto/Image28.jpg', 'Foto/Image29.jpg', 'Foto/Image30.jpg',
    'Foto/Image31.jpg', 'Foto/Image32.jpg', 'Foto/Image33.jpg',
    'Foto/Image34.jpg', 'Foto/Image35.jpg', 'Foto/Image36.jpg',
    'Foto/Image37.jpg', 'Foto/Image38.jpg', 'Foto/Image39.jpg',
    'Foto/Image40.jpg', 'Foto/Image41.jpg', 'Foto/Image42.jpg',
    'Foto/Image43.jpg', 'Foto/Image44.jpg', 'Foto/Image45.jpg',
    'Foto/Image46.jpg', 'Foto/Image47.jpg', 'Foto/Image48.jpg',
    'Foto/Image49.jpg', 'Foto/Image50.jpg', 'Foto/Image51.jpg',
    'Foto/Image52.jpg', 'Foto/Image53.jpg', 'Foto/Image54.jpg',
    'Foto/Image55.jpg', 'Foto/Image56.jpg', 'Foto/Image57.jpg',
    'Foto/Image58.jpg', 'Foto/Image59.jpg', 'Foto/Image60.jpg',
    'Foto/Image61.jpg'
];

images.forEach((src, index) => {
    const a = document.createElement('a');
    a.href = src;
    a.download = `Image${index + 1}`;
    a.innerHTML = `<img src="${src}" alt="Image ${index + 1}">`;
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
