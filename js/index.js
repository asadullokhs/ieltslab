document.addEventListener("DOMContentLoaded", () => {
  const btnRu = document.getElementById("lang-ru");
  const btnUz = document.getElementById("lang-uz");

  const texts = {
    ru: {
      heroTitle: "IELTS — формула точного результата",
      heroSubtitle:
        "Мы применяем системный подход и доводим знания до максимального балла",
      cta: "Начать обучение",
      formulaTitle: "Наша методика",
      step1T: "Анализ",
      step1D: "Проводим полный аудит ваших знаний перед началом.",
      step2T: "Синтез",
      step2D: "Формируем индивидуальную программу обучения.",
      step3T: "Результат",
      step3D: "Достигаем целевого балла через практику.",
      mentorsSectionTitle: "Наши менторы",
      mentorsMainTitle: "Чтобы получить результат",
      mentorsDesc: "Что нужно сделать?",
      regText: "ТРЕБУЕТСЯ РЕГИСТРАЦИЯ",
      scienceTitle: "Научный подход к подготовке",
      scienceCard1Title: "Персональный план обучения",
      scienceCard1Desc:
        "Мы анализируем ваш уровень и создаём индивидуальную стратегию подготовки под конкретный балл IELTS.",
      scienceCard2Title: "Эффективные методы запоминания",
      scienceCard2Desc:
        "Используем научно доказанные техники памяти для быстрого и долгосрочного усвоения материала.",
      scienceCard3Title: "Практика как на экзамене",
      scienceCard3Desc:
        "Регулярные тесты в формате реального IELTS с таймингом и критериями оценки.",
      scienceCard4Title: "Постоянная обратная связь",
      scienceCard4Desc:
        "Вы получаете детальный разбор ошибок и рекомендации после каждого этапа обучения.",
      proTipText:
        "Наш секрет успеха — комбинация структурированной подготовки и индивидуального подхода. Мы анализируем твой стиль обучения и адаптируем программу под твои цели.",
      resultsTitle: "Лаборатория результатов IELTS Lab",
      resultsDesc:
        "Мы работаем с фактами, цифрами и реальными результатами. Ниже — поток достижений наших студентов.",

      // Footer
      footerContacts: "Контакты",
      footerLinks: "Ссылки",
      footerCourses: "Курсы",
      footerCopyright: "© 2026 IELTS Lab. Все права защищены.",
      footerBy: "By Asadullokh",
    },

    uz: {
      heroTitle: "IELTS — bu aniq natija formulasi",
      heroSubtitle:
        "Biz bilimlarni tizimli yondashuv orqali yuqori natijaga olib chiqamiz",
      cta: "O‘qishni boshlash",
      formulaTitle: "Bizning metodika",
      step1T: "Tahlil",
      step1D: "Boshlashdan oldin bilimlaringizni to‘liq audit qilamiz.",
      step2T: "Sintez",
      step2D: "Individual o‘quv dasturini shakllantiramiz.",
      step3T: "Natija",
      step3D: "Amaliyot orqali maqsadli balga erishamiz.",
      mentorsSectionTitle: "Bizning mentorlar",
      mentorsMainTitle: "Natijaga erishish uchun",
      mentorsDesc: "Nima qilish kerak?",
      regText: "RO‘YXATDAN O‘TISH KERAK",
      scienceTitle: "Tayyorgarlikka ilmiy yondashuv",
      scienceCard1Title: "Shaxsiy o‘quv rejasi",
      scienceCard1Desc:
        "Biz sizning darajangizni tahlil qilib, IELTS bo‘yicha aniq maqsadga yo‘naltirilgan reja tuzamiz.",
      scienceCard2Title: "Samarali yodlash usullari",
      scienceCard2Desc:
        "Ilmiy asoslangan xotira texnikalari orqali bilimni tez va uzoq muddatga mustahkamlaymiz.",
      scienceCard3Title: "Imtihon kabi amaliyot",
      scienceCard3Desc:
        "Haqiqiy IELTS formatida vaqt va baholash mezonlari bilan testlar.",
      scienceCard4Title: "Doimiy fikr-mulohaza",
      scienceCard4Desc:
        "Har bir bosqichdan so‘ng xatolar tahlili va aniq tavsiyalar beriladi.",
      proTipText:
        "Bizning muvaffaqiyat sirlari — tizimli tayyorgarlik va individual yondashuv. Biz sizning o‘quv uslubingizni tahlil qilib, dasturimizni maqsadlaringizga moslashtiramiz.",
      resultsTitle: "IELTS Lab Natijalar Laboratoriyasi",
      resultsDesc:
        "Biz faktlar, raqamlar va haqiqiy natijalar bilan ishlaymiz. Quyida talabalarimizning yutuqlari oqimi.",

      // Footer
      footerContacts: "Kontaktlar",
      footerLinks: "Havolalar",
      footerCourses: "Kurslar",
      footerCopyright: "© 2026 IELTS Lab. Barcha huquqlar himoyalangan.",
      footerBy: "By Asadullokh",
    },
  };

  function setLanguage(lang) {
    // HERO
    document.getElementById("hero-title").textContent = texts[lang].heroTitle;
    document.getElementById("hero-subtitle").textContent =
      texts[lang].heroSubtitle;
    document.getElementById("hero-cta").textContent = texts[lang].cta;

    // FORMULA
    document.getElementById("formula-title").textContent =
      texts[lang].formulaTitle;
    document.getElementById("formula-cta").textContent = texts[lang].cta;

    document.getElementById("step-1-title").textContent = texts[lang].step1T;
    document.getElementById("step-1-desc").textContent = texts[lang].step1D;
    document.getElementById("step-2-title").textContent = texts[lang].step2T;
    document.getElementById("step-2-desc").textContent = texts[lang].step2D;
    document.getElementById("step-3-title").textContent = texts[lang].step3T;
    document.getElementById("step-3-desc").textContent = texts[lang].step3D;

    // MENTORS
    document.getElementById("mentors-title").textContent =
      texts[lang].mentorsSectionTitle;
    document.getElementById("mentors-main-title").textContent =
      texts[lang].mentorsMainTitle;
    document.getElementById("mentors-desc").textContent =
      texts[lang].mentorsDesc;
    document.getElementById("reg-text").textContent = texts[lang].regText;

    // SCIENCE
    document.getElementById("science-title").textContent =
      texts[lang].scienceTitle;
    document.getElementById("science-card-1-title").textContent =
      texts[lang].scienceCard1Title;
    document.getElementById("science-card-1-desc").textContent =
      texts[lang].scienceCard1Desc;
    document.getElementById("science-card-2-title").textContent =
      texts[lang].scienceCard2Title;
    document.getElementById("science-card-2-desc").textContent =
      texts[lang].scienceCard2Desc;
    document.getElementById("science-card-3-title").textContent =
      texts[lang].scienceCard3Title;
    document.getElementById("science-card-3-desc").textContent =
      texts[lang].scienceCard3Desc;
    document.getElementById("science-card-4-title").textContent =
      texts[lang].scienceCard4Title;
    document.getElementById("science-card-4-desc").textContent =
      texts[lang].scienceCard4Desc;
    document.getElementById("pro-tip-text").textContent =
      texts[lang].proTipText;

    // RESULTS
    document.getElementById("results-title").textContent =
      texts[lang].resultsTitle;
    document.getElementById("results-desc").textContent =
      texts[lang].resultsDesc;

    // FOOTER
    document.querySelector(".footer-column:nth-child(1) h3").textContent =
      texts[lang].footerContacts;
    document.querySelector(".footer-column:nth-child(2) h3").textContent =
      texts[lang].footerLinks;
    document.getElementById("footer-courses").textContent =
      texts[lang].footerCourses;
    document.querySelector(".footer-bottom p:first-child").textContent =
      texts[lang].footerCopyright;
    document.querySelector(".footer-bottom p:last-child").textContent =
      texts[lang].footerBy;

    // ACTIVE BUTTON
    btnRu.classList.toggle("active", lang === "ru");
    btnUz.classList.toggle("active", lang === "uz");
  }

  btnRu.addEventListener("click", () => setLanguage("ru"));
  btnUz.addEventListener("click", () => setLanguage("uz"));

  // DEFAULT
  setLanguage("ru");
});

const data = [
  {
    speed: "slow",
    items: [
      {
        link: "https://www.instagram.com/p/DVGtXvTjHG_/",
        img: `https://images.weserv.nl/?url=instagram.com/p/DVGtXvTjHG_/media/?size=l`,
      },
      {
        link: "https://www.instagram.com/p/DUWEjWiDMR3/",
        img: `https://images.weserv.nl/?url=instagram.com/p/DUWEjWiDMR3/media/?size=l`,
      },
      {
        link: "https://www.instagram.com/p/DUD4KeGjKq5/",
        img: `https://images.weserv.nl/?url=instagram.com/p/DUD4KeGjKq5/media/?size=l`,
      },
    ],
  },
  {
    speed: "normal",
    items: [
      {
        link: "https://www.instagram.com/p/DULtJ_ujOMo/",
        img: `https://images.weserv.nl/?url=instagram.com/p/DULtJ_ujOMo/media/?size=l`,
      },
      {
        link: "https://www.instagram.com/p/DT5p64pjNEQ/",
        img: `https://images.weserv.nl/?url=instagram.com/p/DT5p64pjNEQ/media/?size=l`,
      },
      {
        link: "https://www.instagram.com/p/DVBZO1mDIX2/",
        img: `https://images.weserv.nl/?url=instagram.com/p/DVBZO1mDIX2/media/?size=l`,
      },
    ],
  },
  {
    speed: "fast",
    items: [
      {
        link: "https://www.instagram.com/p/DU3dgDsDPpj/",
        img: `https://images.weserv.nl/?url=instagram.com/p/DU3dgDsDPpj/media/?size=l`,
      },
      {
        link: "https://www.instagram.com/p/DUgD2gGDC4f/",
        img: `https://images.weserv.nl/?url=instagram.com/p/DUgD2gGDC4f/media/?size=l`,
      },
      {
        link: "https://www.instagram.com/p/DUGgflhDM60/",
        img: `https://images.weserv.nl/?url=instagram.com/p/DUGgflhDM60/media/?size=l`,
      },
    ],
  },
  {
    speed: "normal",
    items: [
      {
        link: "https://www.instagram.com/p/DVGtXvTjHG_/",
        img: `https://images.weserv.nl/?url=instagram.com/p/DVGtXvTjHG_/media/?size=l`,
      },
      {
        link: "https://www.instagram.com/p/DUWEjWiDMR3/",
        img: `https://images.weserv.nl/?url=instagram.com/p/DUWEjWiDMR3/media/?size=l`,
      },
      {
        link: "https://www.instagram.com/p/DULtJ_ujOMo/",
        img: `https://images.weserv.nl/?url=instagram.com/p/DULtJ_ujOMo/media/?size=l`,
      },
    ],
  },
  {
    speed: "slow",
    items: [
      {
        link: "https://www.instagram.com/p/DUD4KeGjKq5/",
        img: `https://images.weserv.nl/?url=instagram.com/p/DUD4KeGjKq5/media/?size=l`,
      },
      {
        link: "https://www.instagram.com/p/DT5p64pjNEQ/",
        img: `https://images.weserv.nl/?url=instagram.com/p/DT5p64pjNEQ/media/?size=l`,
      },
      {
        link: "https://www.instagram.com/p/DUgD2gGDC4f/",
        img: `https://images.weserv.nl/?url=instagram.com/p/DUgD2gGDC4f/media/?size=l`,
      },
    ],
  },
];

const wall = document.getElementById("wall");

data.forEach((col) => {
  const column = document.createElement("div");
  column.className = `column ${col.speed}`;

  const track = document.createElement("div");
  track.className = "track";

  // duplicate items for infinite scroll effect
  const items = [...col.items, ...col.items];

  items.forEach((item) => {
    const a = document.createElement("a");
    a.href = item.link;
    a.target = "_blank";
    a.className = "result-card";

    const img = document.createElement("img");
    img.src = item.img;

    a.appendChild(img);
    track.appendChild(a);
  });

  column.appendChild(track);
  wall.appendChild(column);
});
