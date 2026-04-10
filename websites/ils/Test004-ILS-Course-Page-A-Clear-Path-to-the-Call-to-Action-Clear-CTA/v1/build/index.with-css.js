(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-TEST004 .ab-section {
  overflow: hidden;
  padding-top: 27px;
  padding-top: 26px;
}
.AB-TEST004 .ab-pill-header {
  background-color: #fff;
  padding: 1rem 1.5rem;
  margin-bottom: 22px;
  font-family: Noto Sans;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: #fa6400;
}
.AB-TEST004 .ab-card-wrapper--mobile {
  display: block;
  overflow: visible;
  padding-left: 35px;
  padding-right: 35px;
}
.AB-TEST004 .ab-card-wrapper--desktop {
  display: none;
  justify-content: flex-start;
  gap: 11px;
}
.AB-TEST004 .ab-card-wrapper .swiper-button[aria-disabled="true"] {
  opacity: 0;
}
.AB-TEST004 .ab-card-wrapper .swiper-button {
  width: 30px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
}
.AB-TEST004 .ab-card-wrapper .swiper-button::after {
  color: #000000;
  font-size: 14px;
  font-weight: 700;
}
.AB-TEST004 .ab-card-wrapper .swiper-button.swiper-button-prev {
  left: 0;
}
.AB-TEST004 .ab-card-wrapper .swiper-button.swiper-button-next {
  right: 0;
}
.AB-TEST004 .ab-card {
  border-radius: 15px;
  background-color: #ffffff;
  padding: 16px;
  padding-bottom: 26px;
}
.AB-TEST004 .ab-card__header {
  font-family: Noto Sans;
  font-weight: 700;
  font-size: 16px;
  line-height: 186%;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #000000;
  margin-bottom: 10px;
}
.AB-TEST004 .ab-card br {
  display: none;
}
.AB-TEST004 .ab-card__list {
  list-style: none;
  padding: 0;
  margin-bottom: 19px;
}
.AB-TEST004 .ab-card__list-item {
  font-family: Noto Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #000000;
  display: flex;
  justify-content: flex-start;
  gap: 5px;
}
.AB-TEST004 .ab-card__cta {
  min-height: 47px;
  display: flex !important;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 300px;
  margin-bottom: 9px;
  padding: 10px 7px;
  cursor: pointer;
  text-decoration: none !important;
  outline: none;
}
.AB-TEST004 .ab-card__cta:hover,
.AB-TEST004 .ab-card__cta:focus {
  border: 2px solid rgba(0, 0, 0, 0);
  text-decoration: none;
  outline: none;
}
.AB-TEST004 .ab-card__cta-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-TEST004 .ab-card__cta-icon svg {
  width: 27px;
  height: 27px;
}
.AB-TEST004 .ab-card__cta-text {
  font-family: Noto Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0px;
  vertical-align: middle;
}
.AB-TEST004 .ab-card__cta--downloads {
  background-color: #bcd8fa !important;
}
.AB-TEST004 .ab-card__cta--downloads .ab-card__cta-text {
  color: #09479b !important;
}
.AB-TEST004 .ab-card__cta--downloads:hover {
  background-color: #87b9fa !important;
}
.AB-TEST004 .ab-card__cta--downloads:hover .ab-card__cta-text {
  color: #043271 !important;
}
.AB-TEST004 .ab-card__cta--sign-up {
  background-color: #166adb !important;
}
.AB-TEST004 .ab-card__cta--sign-up .ab-card__cta-text {
  color: #ffffff !important;
}
.AB-TEST004 .ab-card__cta--sign-up:hover {
  background-color: #09479b !important;
}
.AB-TEST004 .ab-card__cta--sign-up:hover .ab-card__cta-text {
  color: #fff !important;
}
.AB-TEST004 .ab-card__footer-info {
  font-family: Noto Sans;
  font-weight: 400;
  font-size: 12px;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: #000000;
}
@media screen and (max-width: 400px) {
  .AB-TEST004 .ab-card__header {
    font-size: 14px;
    line-height: 186%;
  }
  .AB-TEST004 .ab-card br {
    display: none;
  }
  .AB-TEST004 .ab-card__list-item {
    font-size: 14px;
    line-height: 28px;
  }
  .AB-TEST004 .ab-card__cta-text {
    font-size: 12px;
    line-height: 120%;
  }
  .AB-TEST004 .ab-card__footer-info {
    font-size: 12px;
    line-height: 24px;
  }
}
@media screen and (max-width: 990.5px) {
  .AB-TEST004 .ab-section .container {
    padding-left: 0;
    padding-right: 0;
  }
}
@media screen and (min-width: 991px) {
  .AB-TEST004 .ab-section {
    padding-top: 23px;
    padding-bottom: 66px;
  }
  .AB-TEST004 .ab-pill-header {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 29px;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    border-radius: 25.5px;
  }
  .AB-TEST004 .ab-card-wrapper--mobile {
    display: none;
  }
  .AB-TEST004 .ab-card-wrapper--desktop {
    display: flex;
  }
  .AB-TEST004 .ab-card {
    border-radius: 20px;
    padding: 16px 39px;
    width: calc(50% - 5.5px);
    height: auto;
    display: flex;
    flex-direction: column;
  }
  .AB-TEST004 .ab-card__header {
    font-family: Noto Sans;
    font-weight: 700;
    font-size: 16px;
    line-height: 186%;
    margin-bottom: 10px;
  }
  .AB-TEST004 .ab-card br {
    display: inline-block;
  }
  .AB-TEST004 .ab-card__list {
    margin-bottom: 19px;
  }
  .AB-TEST004 .ab-card__list-item {
    font-weight: 400;
    font-size: 16px;
    line-height: 186%;
  }
  .AB-TEST004 .ab-card__cta {
    width: 100%;
    max-width: 443px;
    margin: auto;
    margin-top: auto;
    padding: 10px 20px;
    gap: 20px;
    height: auto;
    margin-bottom: 7px;
  }
  .AB-TEST004 .ab-card__cta-text {
    font-family: Noto Sans;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    margin: auto;
  }
  .AB-TEST004 .ab-card__footer-info {
    font-family: Noto Sans;
    font-weight: 400;
    font-size: 12px;
    line-height: 27px;
    letter-spacing: 0px;
  }
}
`;
      document.head.appendChild(style);
      setTimeout(() => {
        clearInterval(interval); // Clear the interval after 5 seconds
      }, 5000);
    }
  }, 100); // Check every 100ms for <head>
})();
/* 

Test container:  https://app.varify.io/dashboard?msg=experiment-created&experiment_id=34434&variation_id=51547&search=Test004+%5BILS%5D+-+Course+Page+-+A+Clear+Path+to+the+Call+to+Action+%2B+Clear+CTA

Preview/Forced Variation: https://www.ils.de/fernkurse/buchhalter/?varify-force=34434-51547  

*/

(async () => {
  const TEST_CONFIG = {
    client: "Netzproduzenten",
    project: "ILS",
    site_url: "https://www.ils.de",
    test_name:
      "Test004 [ILS] - Course Page - A Clear Path to the Call to Action + Clear CTA",
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
    console.table(TEST_CONFIG);
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
    console.warn(error);
    return false;
  }
})();
