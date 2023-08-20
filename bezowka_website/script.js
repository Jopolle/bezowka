let slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let slideInterval = 3000; // 3 seconds

function nextSlide() {
    slides[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.opacity = 1;
}

setInterval(nextSlide, slideInterval);
