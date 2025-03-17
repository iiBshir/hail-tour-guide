document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[n].classList.add("active");
    }

    function changeSlide(n) {
        index += n;
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        showSlide(index);
    }

    setInterval(() => changeSlide(1), 3000);
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
