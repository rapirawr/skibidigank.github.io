const photoGallery = document.getElementById('photo-gallery');
const loadedElements = new Set(); 

function isLoggedIn() {
    const storedUsername = localStorage.getItem('username');
    return storedUsername !== null;
}

function populateGallery() {
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
            
            img.onerror = function() {
                img.style.visibility = 'hidden'; 
            };
            
            a.appendChild(img);
            photoGallery.appendChild(a);
        });
    } else {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('gallery-message');
        
        const textParagraph = document.createElement('p');
        textParagraph.textContent = 'Silahkan login untuk melihat profil';
        
        const link = document.createElement('a');
        link.href = 'login.html';
        
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-right-to-bracket';
        icon.style.color = '#00fbff';
        
        messageDiv.style.display = 'flex';
        messageDiv.style.alignItems = 'center';
        
        textParagraph.style.margin = '0';
        textParagraph.style.fontSize = '1em';
        
        link.style.marginLeft = '8px';
        
        icon.style.fontSize = '1.2em';
        
        link.appendChild(icon);
        messageDiv.appendChild(textParagraph);
        messageDiv.appendChild(link);
        photoGallery.appendChild(messageDiv);
    }
}

window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const allContent = document.querySelectorAll('body > *:not(#loading-screen)');
    
    allContent.forEach(element => {
        element.classList.add('hidden');
    });
    
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            allContent.forEach(element => {
                element.classList.remove('hidden');
            });
        }, 1000); 
    }, 0); 
});

document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingWords = document.getElementById('loading-words');
    const elementsToLoad = [
        { name: "Navbar", selector: 'nav' },
        { name: "Image Gallery", selector: '.frame2' },
        { name: "Styles", selector: 'link[rel="stylesheet"]' },
        { name: "Member Profiles", selector: '.frame3' },
        { name: "Social Media Links", selector: '.frame4' }
    ];

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
                    if (loadedElements.has(el)) {
                        elementLoaded();
                    } else {
                        if (el.complete || el.readyState === 'complete' || el.readyState === 'loaded') {
                            elementLoaded();
                        } else {
                            el.addEventListener('load', elementLoaded);
                            el.addEventListener('error', elementLoaded);
                        }
                        loadedElements.add(el);
                    }
                });
            } else {
                elementLoaded(); 
            }

            function elementLoaded() {
                loadedCount++;
                if (loadedCount === elements.length) {
                    if (!loadedElements.has(element)) {
                        updateLoadingText(step);
                        loadedElements.add(element);
                    }
                    loadNextElement(step + 1);
                }
            }
        } else {
            finishLoading();
        }
    }

    function finishLoading() {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.querySelectorAll('body > *:not(#loading-screen)').forEach(element => {
                element.classList.remove('hidden');
            });
        }, 1000); 
    }

    loadNextElement(0);  
});

 
populateGallery();

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

 
document.addEventListener('DOMContentLoaded', function() {
    const redirectButton = document.getElementById('redirect-button');
    
    if (redirectButton) {
        redirectButton.addEventListener('click', function() {
            window.location.href = 'ror.html';
        });
    }
});

