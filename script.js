document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        ar: {
            title: "مرشد سياحي في حائل - بشر العيسى",
            description: "اكتشف حائل مع أفضل مرشد سياحي، جولات ممتعة لاستكشاف التراث والثقافة.",
            aboutHail: "حائل هي واحدة من أقدم المناطق في المملكة العربية السعودية، حيث تضم نقوشًا ثمودية تاريخية وتراثًا ثقافيًا غنيًا.",
        },
        en: {
            title: "Tour Guide in Hail - Bisher Al-Eisa",
            description: "Explore Hail with the best tour guide, enjoy amazing heritage and cultural tours.",
            aboutHail: "Hail is one of the oldest regions in Saudi Arabia, featuring Thamudic inscriptions and a rich cultural heritage.",
        }
    };

    function setLanguage(lang) {
        localStorage.setItem('selectedLanguage', lang);
        document.documentElement.lang = lang;

        document.getElementById("title").innerText = translations[lang].title;
        document.getElementById("description").innerText = translations[lang].description;
        document.getElementById("about-title").innerText = "عن حائل";
        document.getElementById("about-description").innerText = translations[lang].aboutHail;
    }

    const savedLang = localStorage.getItem('selectedLanguage') || 'ar';
    setLanguage(savedLang);

    window.setLanguage = setLanguage;
});
