document.addEventListener('DOMContentLoaded', function() {
    // Slider Functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${-100 * currentSlide}%)`;
        });
    }

    function moveSlide(step) {
        showSlide(currentSlide + step);
    }

    // Initialize slider
    showSlide(currentSlide);

    // Add event listeners for buttons
    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));
});
