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

// دعم تغيير اللغة
const translations = {
    ar: {
        natureTitle: "🌿 المناظر الطبيعية",
        natureText: "تتمتع حائل بمناظر طبيعية خلابة تشمل الجبال والصحاري والوديان، مما يجعلها وجهة رائعة لمحبي الطبيعة والمغامرة.",
        explorersTitle: "🌍 الرحالة",
        explorersText: "شهدت حائل مرور العديد من الرحالة عبر العصور، مستكشفين طبيعتها الفريدة وثقافتها الغنية التي تعكس روح الضيافة العربية."
    },
    en: {
        natureTitle: "🌿 Natural Landscapes",
        natureText: "Hail boasts stunning natural landscapes, including mountains, deserts, and valleys, making it an ideal destination for nature lovers and adventurers.",
        explorersTitle: "🌍 Explorers",
        explorersText: "Hail has witnessed the passage of many explorers over the centuries, fascinated by its unique nature and rich cultural heritage."
    }
};

function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    document.documentElement.lang = lang;
    document.getElementById("nature-title").innerText = translations[lang].natureTitle;
    document.getElementById("nature-text").innerText = translations[lang].natureText;
    document.getElementById("explorers-title").innerText = translations[lang].explorersTitle;
    document.getElementById("explorers-text").innerText = translations[lang].explorersText;
}

// تعيين اللغة المحفوظة مسبقًا أو الافتراضية للعربية
setLanguage(localStorage.getItem('selectedLanguage') || 'ar');
