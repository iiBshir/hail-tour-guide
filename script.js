document.addEventListener("DOMContentLoaded", function () {
    // كائن يحتوي على الترجمة لكامل الصفحة
    const translations = {
        ar: {
            title: "مرشد سياحي في حائل - بشر العيسى",
            description: "اكتشف حائل مع أفضل مرشد سياحي، جولات ممتعة لاستكشاف التراث والثقافة.",
            aboutHail: "حائل هي إحدى المناطق التاريخية في المملكة العربية السعودية، وتشتهر بجغرافيتها الفريدة ونقوشها الأثرية.",
            aboutMe: "أنا بشر العيسى، مرشد سياحي مرخص، متخصص في جولات حائل السياحية لاكتشاف تاريخها وتراثها.",
            tours: "استمتع بجولات سياحية فريدة تشمل زيارة المواقع الأثرية والمتاحف في حائل.",
            contact: "تواصل معي لحجز جولاتك السياحية الخاصة واستكشاف أفضل معالم حائل.",
            back: "🔙 العودة"
        },
        en: {
            title: "Tour Guide in Hail - Bisher Al-Eisa",
            description: "Explore Hail with the best tour guide, enjoy amazing heritage and cultural tours.",
            aboutHail: "Hail is one of the historic regions in Saudi Arabia, known for its unique geography and ancient inscriptions.",
            aboutMe: "I am Bisher Al-Eisa, a licensed tour guide specializing in Hail tours to explore its history and heritage.",
            tours: "Enjoy unique guided tours including visits to archaeological sites and museums in Hail.",
            contact: "Contact me to book your private tours and explore the best attractions in Hail.",
            back: "🔙 Back"
        }
    };

    function setLanguage(lang) {
        localStorage.setItem("selectedLanguage", lang);
        document.documentElement.lang = lang;

        // تغيير جميع النصوص بناءً على اللغة المختارة
        document.getElementById("title").innerText = translations[lang].title;
        document.getElementById("description").innerText = translations[lang].description;
        document.getElementById("about-hail-text").innerText = translations[lang].aboutHail;
        document.getElementById("about-me-text").innerText = translations[lang].aboutMe;
        document.getElementById("tours-text").innerText = translations[lang].tours;
        document.getElementById("contact-text").innerText = translations[lang].contact;
        document.getElementById("back-btn").innerText = translations[lang].back;
    }

    // استعادة اللغة المختارة عند تحميل الصفحة
    const savedLang = localStorage.getItem("selectedLanguage") || "ar";
    setLanguage(savedLang);
});
document.documentElement.lang = localStorage.getItem('selectedLanguage') || 'ar';
const translations = {
    ar: { title: "مرشد سياحي في حائل - بشر العيسى", description: "اكتشف حائل مع أفضل مرشد سياحي، جولات ممتعة لاستكشاف التراث والثقافة." },
    en: { title: "Tour Guide in Hail - Bisher Al-Eisa", description: "Explore Hail with the best tour guide, enjoy amazing heritage and cultural tours." }
};
function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    document.documentElement.lang = lang;
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("description").innerText = translations[lang].description;
}
setLanguage(localStorage.getItem('selectedLanguage') || 'ar');
