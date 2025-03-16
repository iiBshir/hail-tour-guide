document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        ar: {
            title: "مرشد سياحي في حائل - بشر العيسى",
            description: "اكتشف حائل مع أفضل مرشد سياحي، جولات ممتعة لاستكشاف التراث والثقافة.",
            aboutHail: "حائل من أجمل مناطق المملكة العربية السعودية، تشتهر بجبالها الفريدة والنقوش الثمودية.",
            aboutMe: "أنا بشر العيسى، مرشد سياحي مرخص من هيئة السياحة في المملكة العربية السعودية.",
            tours: "استمتع بجولات سياحية تشمل زيارة الأماكن التراثية والطبيعية في حائل.",
            contact: "للحجز أو الاستفسار، تواصل معي عبر الهاتف أو البريد الإلكتروني."
        },
        en: {
            title: "Tour Guide in Hail - Bisher Al-Eisa",
            description: "Explore Hail with the best tour guide, enjoy amazing heritage and cultural tours.",
            aboutHail: "Hail is one of the most beautiful regions in Saudi Arabia, famous for its unique mountains and ancient Thamudic inscriptions.",
            aboutMe: "I am Bisher Al-Eisa, a licensed tour guide by the Saudi Tourism Authority.",
            tours: "Enjoy guided tours that include visits to heritage and natural sites in Hail.",
            contact: "For booking or inquiries, contact me via phone or email."
        }
    };

    function setLanguage(lang) {
        localStorage.setItem('selectedLanguage', lang);
        document.documentElement.lang = lang;

        document.getElementById("title").innerText = translations[lang].title;
        document.getElementById("description").innerText = translations[lang].description;

        const page = document.body.getAttribute("data-page");

        if (page === "about-hail") {
            document.getElementById("about-hail-text").innerText = translations[lang].aboutHail;
        } else if (page === "about-me") {
            document.getElementById("about-me-text").innerText = translations[lang].aboutMe;
        } else if (page === "tours") {
            document.getElementById("tours-text").innerText = translations[lang].tours;
        } else if (page === "contact") {
            document.getElementById("contact-text").innerText = translations[lang].contact;
        }
    }

    const savedLang = localStorage.getItem('selectedLanguage') || 'ar';
    setLanguage(savedLang);

    window.setLanguage = setLanguage;
});
