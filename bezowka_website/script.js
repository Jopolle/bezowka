let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

window.addEventListener('wheel', function (e) {
    const delta = e.deltaY;
    if (delta < 0 && currentSlide > 0) {
        // Scrolling up
        currentSlide--;
    } else if (delta > 0 && currentSlide < slides.length - 1) {
        // Scrolling down
        currentSlide++;
    }

    window.scrollTo({
        top: slides[currentSlide].offsetTop,
        behavior: 'smooth'
    });
});
