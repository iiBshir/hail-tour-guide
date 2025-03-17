let index = 0;

function showSlide(n) {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");
    slides[n].style.display = "block";
}

function changeSlide(n) {
    let slides = document.querySelectorAll(".slide");
    index += n;
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    showSlide(index);
}

setInterval(() => changeSlide(1), 3000);
showSlide(index);
