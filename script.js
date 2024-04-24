let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slides img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slides[slideIndex].style.display = 'block';  
}

function nextSlide() {
    const slides = document.querySelectorAll('.slides img');
    if (slideIndex < slides.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    showSlides();
}

function prevSlide() {
    const slides = document.querySelectorAll('.slides img');
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = slides.length - 1;
    }
    showSlides();
}

showSlides();
