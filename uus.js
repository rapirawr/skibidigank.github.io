//Button Skibidi Gank di navbar
document.addEventListener('DOMContentLoaded', function() {
    const redirectButton = document.getElementById('redirect-button');
    
    if (redirectButton) {
        redirectButton.addEventListener('click', function() {
            window.location.href = 'ror.html';
        });
    }
});
