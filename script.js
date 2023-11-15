let slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let slideInterval = 2000;

function nextSlide() {
    slides[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.opacity = 1;
}

setInterval(nextSlide, slideInterval);
