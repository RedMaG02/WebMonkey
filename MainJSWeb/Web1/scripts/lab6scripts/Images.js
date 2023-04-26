const images = document.querySelectorAll('.image-container img');
let currentImageIndex = 0;

function showNextImage() {
    images[currentImageIndex].style.opacity = '0';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity = '1';
}

const imageContainer = document.querySelector('.image-container');
imageContainer.addEventListener('mouseenter', showNextImage);
