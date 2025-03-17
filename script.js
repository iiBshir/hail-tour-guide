let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

function changeSlide(step) {
    index += step;
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    showSlide(index);
}

setInterval(() => changeSlide(1), 3000); // تغيير تلقائي كل 3 ثوانٍ

document.addEventListener("DOMContentLoaded", () => showSlide(index));
