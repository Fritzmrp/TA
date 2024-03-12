var currentImageIndex = 0;
var images = [
    "assets/images/del/PendaftaranPMDK_V2.jpg",
    "assets/images/del/PendaftaranUSM_V2.jpg",
    "assets/images/del/PendaftaranUTBK_V2.jpg",
    "assets/images/del/Ulang.jpg",
    "assets/images/del/Jalur.jpg",
    "assets/images/del/del.jpg",
    "assets/images/del/del2.jpg"
];

var slideImage = document.querySelector('.carousel-inner img');
var nextButton = document.getElementById('nextButton');
var prevButton = document.getElementById('prevButton');

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateSlide();
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateSlide();
}

function updateSlide() {
    slideImage.src = images[currentImageIndex];
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPreviousImage);

setInterval(showNextImage, 3000);