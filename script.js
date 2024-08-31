// JavaScript to add images to the gallery
document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("photo-gallery");

    // Array of image filenames (500 images)
    const images = [];
    for (let i = 1; i <= 500; i++) {
        images.push(`Image${i}.jpg`);
    }

    // Loop untuk menambahkan gambar ke galeri
    images.forEach(image => {
        const link = document.createElement("a");
        link.href = `Foto/${image}`;
        link.target = "_blank"; // Buka gambar di tab baru jika di-klik
        
        const imgElement = document.createElement("img");
        imgElement.src = `Foto/${image}`;
        link.appendChild(imgElement);
        gallery.appendChild(link);
    });
});
