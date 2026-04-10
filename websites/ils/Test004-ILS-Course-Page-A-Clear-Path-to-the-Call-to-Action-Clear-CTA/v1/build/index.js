/* 

Test container:  https://app.varify.io/dashboard?msg=experiment-created&experiment_id=34434&variation_id=51547&search=Test004+%5BILS%5D+-+Course+Page+-+A+Clear+Path+to+the+Call+to+Action+%2B+Clear+CTA

Preview/Forced Variation: https://www.ils.de/fernkurse/buchhalter/?varify-force=34434-51547  

*/

(async () => {
  const TEST_CONFIG = {
    page_initials: "AB-TEST004",
    test_variation: 1,
    test_version: 0.0003,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  function loadSwiperWithCDN() {
    return new Promise((resolve, reject) => {
      if (typeof Swiper !== "undefined") return resolve(Swiper);

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
      link.onerror = reject;
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
      script.onload = () => resolve(window.Swiper);
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function waitForElementAsync(
    predicate,
    timeout = 20000,
    frequency = 150,
  ) {
    const startTime = Date.now();

    return new Promise((resolve, reject) => {
      if (typeof predicate === "function" && predicate()) {
        return resolve(true);
      }

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;

        if (elapsed >= timeout) {
          clearInterval(interval);
          return reject(
            new Error(
              `Timeout of ${timeout}ms reached while waiting for condition: ${predicate.toString()}`,
            ),
          );
        }

        if (typeof predicate === "function" && predicate()) {
          clearInterval(interval);
          return resolve(true);
        }
      }, frequency);
    });
  }

  function q(s, o) {
    return document.querySelector(s);
  }

  const ASSETS = {
    downloads_svg: /* HTML  */ `
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="27" height="27" rx="13.5" fill="#09479B"/>
            <path d="M21.3738 13.4572L14.5295 6.61279L13.1606 7.98167L17.6683 12.4894H6.59375V14.425H17.6683L13.1606 18.9327L14.5295 20.3016L21.3738 13.4572Z" fill="#BCD8FA"/>
        </svg>`,
    sign_up_svg: /* HTML  */ `
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="27" height="27" rx="13.5" fill="white"/>
            <path d="M21.3738 13.4572L14.5295 6.61279L13.1606 7.98167L17.6683 12.4894H6.59375V14.425H17.6683L13.1606 18.9327L14.5295 20.3016L21.3738 13.4572Z" fill="#166ADB"/>
        </svg>`,
  };

  const DATA = [
    {
      type: "downloads",
      header:
        "Klarheit gewinnen: Fordern Sie jetzt Ihr <br/> kostenloses Infopaket an",
      list: [
        {
          icon: "✅",
          text: "Alle Preise und Fördermöglichkeiten auf einen Blick erhalten",
        },
        {
          icon: "✅",
          text: "Detaillierten Studienablauf und alle Kursinhalte einsehen",
        },
        {
          icon: "✅",
          text: "Konkrete Job-Perspektiven nach dem Abschluss verstehen",
        },
        { icon: "✅", text: "100% kostenlos und absolut unverbindlich" },
      ],
      cta: {
        type: "downloads",
        icon: ASSETS.downloads_svg,
        text: "Jetzt kostenloses Infopaket anfordern",
        href: "#sud-formular",
      },
      footer: "Keine Buchung. Unverbindlich alle Informationen einsehen.",
    },
    {
      type: "sign-up",
      header:
        "Bereit für den nächsten Schritt? Starten Sie <br/> jetzt Ihre Transformation",
      list: [
        {
          icon: "🚀",
          text: "Sofortiger Zugang: Starten Sie flexibel, wann immer Sie bereit sind",
        },
        {
          icon: "📚",
          text: "Ihre persönlichen Studienunterlagen werden direkt freigeschaltet",
        },
        {
          icon: "🎯",
          text: "Klarer Fahrplan: Sie erhalten Schritt-für-Schritt-Anleitungen",
        },
        {
          icon: "🏆",
          text: "Beginnen Sie noch heute den Weg zu Gehaltserhöhung und Jobsicherheit",
        },
      ],
      cta: {
        type: "sign-up",
        icon: ASSETS.sign_up_svg,
        text: "Jetzt Kursplatz sichern & starten",
        href: "https://www.ils.de/fernstudium/onlineanmeldung/",
      },
      footer: "Flexibel neben dem Beruf. Jetzt 4 Wochen kostenlos testen.",
    },
  ];

  function getCardLayout({ type, header, list, cta, footer, className = "" }) {
    return /* HTML */ `
      <div class="ab-card ab-card--${type} ${className}">
        <div class="ab-card__header">${header}</div>
        <ul class="ab-card__list">
          ${list
            .map(
              ({ icon, text }) =>
                /* HTML */ `<li class="ab-card__list-item">
                  <span class="ab-card__list-item-icon">${icon}</span> ${text}
                </li>`,
            )
            .join("")}
        </ul>
        ${cta.href
          ? /* HTML */ `
              <a
                href="${cta.href}"
                class="ab-card__cta ab-card__cta--${cta.type}"
              >
                <div class="ab-card__cta-icon">${cta.icon}</div>
                <div class="ab-card__cta-text">${cta.text}</div>
              </a>
            `
          : /* HTML */ `
              <div class="ab-card__cta ab-card__cta--${cta.type}">
                <div class="ab-card__cta-icon">${cta.icon}</div>
                <div class="ab-card__cta-text">${cta.text}</div>
              </div>
            `}
        <div class="ab-card__footer-info">${footer}</div>
      </div>
    `;
  }

  function createLayout() {
    q("section:has(.triple-info-panel)").insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <div class="section ab-section section--bg-orange">
          <div class="container">
            <div class="ab-pill-header">
              Auf einen Blick: der Fahrplan für Buchung und Weiterbildung
            </div>
            <div class="ab-card-wrapper ab-card-wrapper--mobile swiper">
              <div class="swiper-wrapper">
                ${DATA.map((item) =>
                  getCardLayout({ ...item, className: "swiper-slide" }),
                ).join("")}
              </div>
              <div class="swiper-button-wrapper">
                <div class="swiper-button swiper-button-prev"></div>
                <div class="swiper-button swiper-button-next"></div>
              </div>
            </div>
            <div class="ab-card-wrapper ab-card-wrapper--desktop">
              ${DATA.map((item) => getCardLayout({ ...item })).join("")}
            </div>
          </div>
        </div>
      `,
    );
  }

  function clickFunction() {
    q(".ab-card__cta--sign-up").addEventListener("click", () => {
      const targetNode = q('a[href*="/fernstudium/onlineanmeldung/"]');
      if (targetNode) {
        targetNode.click();
        return;
      }

      window.location.href = "https://www.ils.de/fernstudium/onlineanmeldung/";
    });
  }

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    createLayout();
    clickFunction();

    if (window.innerWidth > 991) return;

    loadSwiperWithCDN().then((Swiper) => {
      new Swiper(".ab-card-wrapper--mobile", {
        slidesPerView: 1,
        spaceBetween: 50,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) && q("section:has(.triple-info-panel)")
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    return false;
  }
})();
