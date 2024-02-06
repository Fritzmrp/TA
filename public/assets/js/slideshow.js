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
    slideImage.style.width = "720px";
    slideImage.style.height = "480px";
}


nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPreviousImage);

setInterval(showNextImage, 5000);
