// JavaScript untuk mengatur slideshow

var images = [
    "assets/images/PendaftaranUSM.jpg",
    "assets/images/PendaftaranPMDK.jpg",
    "assets/images/del.jpg",
    "assets/images/PendaftaranUTBK.jpg",
    "assets/images/Ulang.jpg",
    "assets/images/Jalur.jpg",
    "assets/images/del2.jpg"
];

var currentImageIndex = 0;
var slideContainer = document.getElementById('slideContainer');
var slideImage = document.getElementById('slide');
var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');

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

// Ganti gambar setiap 5 detik (jika masih diinginkan)
setInterval(showNextImage, 5000);
