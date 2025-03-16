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