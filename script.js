document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        ar: {
            title: "مرشد سياحي في حائل - بشر العيسى",
            description: "اكتشف حائل مع أفضل مرشد سياحي، جولات ممتعة لاستكشاف التراث والثقافة.",
            aboutHail: "حائل هي واحدة من أقدم المناطق في المملكة العربية السعودية، حيث تضم نقوشًا ثمودية تاريخية وتراثًا ثقافيًا غنيًا.",
            landmarks: "اكتشف المعالم السياحية المميزة في حائل.",
            contact: "للحجز أو الاستفسار، تواصل معي عبر الهاتف أو البريد الإلكتروني."
        },
        en: {
            title: "Tour Guide in Hail - Bisher Al-Eisa",
            description: "Explore Hail with the best tour guide, enjoy amazing heritage and cultural tours.",
            aboutHail: "Hail is one of the oldest regions in Saudi Arabia, featuring Thamudic inscriptions and a rich cultural heritage.",
            landmarks: "Discover the unique landmarks of Hail.",
            contact: "For booking or inquiries, contact me via phone or email."
        }
    };

    function setLanguage(lang) {
        localStorage.setItem('selectedLanguage', lang);
        document.documentElement.lang = lang;

        document.getElementById("title").innerText = translations[lang].title;
        document.getElementById("description").innerText = translations[lang].description;

        // التأكد من بقاء اللغة عند التنقل بين الصفحات
        document.querySelectorAll("nav a, .back-btn").forEach(link => {
            let url = new URL(link.href);
            url.searchParams.set("lang", lang);
            link.href = url.toString();
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const savedLang = urlParams.get("lang") || localStorage.getItem('selectedLanguage') || 'ar';
    setLanguage(savedLang);

    window.setLanguage = setLanguage;
});
