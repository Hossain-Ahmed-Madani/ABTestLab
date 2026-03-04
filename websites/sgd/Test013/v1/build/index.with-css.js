(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-TEST013 .ab-hidden,
.AB-TEST013 .header-phone.d-none.d-lg-flex,
.AB-TEST013
  .page-header
  .header-elements
  .header-wrapper
  .header-button-wrapper,
.AB-TEST013 .page-header .header-elements .header-banner,
.AB-TEST013 .page-header .header-elements .header-wrapper .header-grid-right,
.AB-TEST013 .page-header .header-elements .header-buttons,
.AB-TEST013
  .seal.seal-course-detail-box.col-4.col-sm-2.my-3.my-md-0.mx-auto.mx-md-0,
.AB-TEST013 div.my-3:has(> .badge.badge-.badge-type-action) ~ span:has(ul),
.AB-TEST013 .header-navigation-wrapper,
.AB-TEST013 .container-md:has(> div.h2),
.AB-TEST013 .container-md ~ .frame-type-teaser_course_registration,
.AB-TEST013
  .container-md
  ~ .frame-type-teaser_course_registration
  + .container-md:has(> hr),
.AB-TEST013 .container-md:has(> #course_accordion),
.AB-TEST013 .container-md.mb-2.tab-393-none,
.AB-TEST013 .container-md:has(> .tab-393-none),
.AB-TEST013 .quick-info:not(:has(.mb-2:empty)) h2,
.AB-TEST013 .quick-info:not(:has(.mb-2:empty)) p,
.AB-TEST013 .box-small.bg-blue-green:has(.course-tabs.tab-393.d-none) {
  display: none !important;
}
.AB-TEST013 .header-wrapper.container-md {
  display: none !important;
}
.AB-TEST013 .header-grid-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-TEST013 .page-content {
  padding-top: 0;
  padding-bottom: 0;
}
.AB-TEST013 main.page-content {
  margin-top: 0px !important;
}
.AB-TEST013 .container-md.frame-space-before-medium.frame-space-after-medium {
  margin-top: 17px;
}
.AB-TEST013 .ab-header-wrapper.container-md {
  padding-top: 9px;
  padding-bottom: 9px;
  border-bottom: 2px solid rgb(224, 224, 224);
}
.AB-TEST013 .col-12.col-md-6 h1.h2.mb-3 {
  font-family: "Onest Bold";
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: rgb(26, 43, 73);
  margin-bottom: 13px;
}
.AB-TEST013 .col-12.col-md-6 h1.h2.mb-3 ~ .my-3 {
  margin-top: 0 !important;
  margin-bottom: 21px !important;
}
.AB-TEST013 .col-12.col-md-6 h1.h2.mb-3 ~ .my-3 > .badge {
  font-family: "Onest Regular";
  font-weight: 400;
  font-size: 12.6px;
  line-height: 12.6px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: rgb(26, 43, 73);
}
.AB-TEST013 .ab-course-info-box {
  background-color: rgb(235, 235, 235);
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 11px 13px 13px 10px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-bottom: 23px;
}
.AB-TEST013 .ab-course-info-item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 9px;
}
.AB-TEST013 .ab-course-info-item__icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-TEST013 .ab-course-info-item__icon svg {
  width: 20px;
  height: 20px;
}
.AB-TEST013 .ab-course-info-item__text {
  font-family: "Onest Regular";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgb(26, 43, 73);
}
.AB-TEST013
  .seal.seal-course-detail-box.col-4.col-sm-2.my-3.my-md-0.mx-auto.mx-md-0 {
  display: none;
}
.AB-TEST013 .wf-course-badges-mobile {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  margin-bottom: 34px;
}
.AB-TEST013 .wf-course-badges-mobile img {
  width: auto;
  height: 57px;
}
.AB-TEST013 .wf-course-badges-desktop {
  display: none;
  justify-content: center;
  align-items: center;
  gap: 28px;
}
.AB-TEST013 .wf-course-badges-desktop img {
  width: auto;
  height: 92px;
}
.AB-TEST013
  .container-md.frame-space-before-medium.frame-space-after-medium:not(
    :has(.ab-course-info-box-btn-desktop-mobile-link)
  ) {
  display: none;
}
.AB-TEST013 .d-flex.flex-column.align-items-center a.btn.btn-prio-1 {
  background-color: rgb(38, 139, 46);
  border: 1px solid rgb(102, 204, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  font-family: "Onest Bold";
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  color: rgb(255, 255, 255);
}
.AB-TEST013 .ab-course-info-box-btn-desktop-mobile {
  margin-bottom: 25px;
}
.AB-TEST013 #js-card-download .container-md:has(> hr) {
  display: none;
}
.AB-TEST013
  .container-md.frame-space-before-medium.frame-space-after-medium
  + .container-md:has(> hr)
  hr {
  margin-top: 41px;
  margin-bottom: 32px;
}
@media screen and (max-width: 768px) {
  .AB-TEST013 .page-header.pinned .header-elements {
    position: static;
  }
  .AB-TEST013 .page-header .header-elements .header-wrapper {
    border-bottom: 2px solid rgb(224, 224, 224);
    box-shadow: none;
  }
  .AB-TEST013 .page-header.pinned .header-elements {
    box-shadow: none;
  }
  .AB-TEST013 .container-md:has(> .grid-container) {
    margin-bottom: 72px;
  }
  .AB-TEST013 .container-md:has(> .grid-container) + .container-md:has(> hr) {
    display: none;
  }
  .AB-TEST013
    .container-md.frame-space-before-medium.frame-space-after-medium
    + .container-md:has(> hr) {
    display: none;
  }
  .AB-TEST013 #js-card-download .container-md:has(> hr) {
    display: block;
  }
  .AB-TEST013 #js-card-download .container-md hr {
    margin-top: 25px;
    margin-bottom: 22px;
  }
}
@media screen and (min-width: 768px) {
  .AB-TEST013 .header-wrapper.container-md {
    display: flex !important;
  }
  .AB-TEST013 .ab-header-wrapper.container-md {
    display: none;
  }
}
@media screen and (min-width: 991px) {
  .AB-TEST013 .page-header .header-elements .header-wrapper {
    padding-top: 13px;
    padding-bottom: 35px;
  }
  .AB-TEST013 .container-md.frame-space-before-medium.frame-space-after-medium {
    display: block;
    margin-top: 30px;
    margin-bottom: 0;
  }
  .AB-TEST013 .container-md.frame-space-after-medium + .ab-course-accordion {
    margin-bottom: 44px;
  }
  .AB-TEST013 .col-12.col-md-6 h1.h2.mb-3 {
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 22px !important;
  }
  .AB-TEST013 .col-12.col-md-6 h1.h2.mb-3 ~ .my-3 {
    margin-bottom: 26px !important;
  }
  .AB-TEST013 .col-12.col-md-6 h1.h2.mb-3 ~ .my-3 > .badge {
    font-size: 14.4px;
    line-height: 14.4px;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
  }
  .AB-TEST013 .ab-course-info-box {
    border-radius: 10px;
    padding: 17px 7px 13px 17px;
    width: 520px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .AB-TEST013 .ab-course-info-item {
    gap: 14px;
  }
  .AB-TEST013 .ab-course-info-item__icon svg {
    width: 28px;
    height: 28px;
  }
  .AB-TEST013 .ab-course-info-item__text {
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0px;
  }
  .AB-TEST013 .wf-course-badges-mobile {
    display: none;
  }
  .AB-TEST013 .d-flex.flex-column.align-items-center a.btn.btn-prio-1 {
    background-color: rgb(38, 139, 46);
    border: 1px solid rgb(102, 204, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 651px;
    height: 56px;
    font-family: "Onest Bold";
    font-weight: 700;
    font-size: 32px;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: center;
  }
  .AB-TEST013 .wf-course-badges-desktop {
    display: flex;
    margin-top: 43px;
    margin-bottom: 60px;
  }
  .AB-TEST013 .ab-course-info-box-btn-desktop-mobile {
    display: none !important;
  }
  .AB-TEST013
    .container-md.frame-space-before-medium.frame-space-after-medium:not(
      :has(.ab-course-info-box-btn-desktop-mobile-link)
    ) {
    display: block;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
}

.AB-TEST013 .ab-faq-accordion-section hr {
  margin-top: 26px;
  margin-bottom: 26px;
}
.AB-TEST013 .ab-faq-accordion-item {
  margin-left: -10px;
  margin-right: -10px;
  padding: 8px 25px 18px;
  transition: all 0.3s ease-in-out;
  background-color: #f7f7f7;
}
.AB-TEST013
  .ab-faq-accordion-item--open
  .ab-faq-accordion-item__head__toggle-icon {
  transform: rotate(180deg);
}
.AB-TEST013 .ab-faq-accordion-item--open .ab-faq-accordion-item__body {
  max-height: 1600px;
}
.AB-TEST013
  .ab-faq-accordion-item--open
  .ab-faq-accordion-item__collapsed-text {
  opacity: 0;
}
.AB-TEST013 .ab-faq-accordion-item--open .ab-faq-accordion-item__expanded-text {
  opacity: 1;
}
.AB-TEST013 .ab-faq-accordion-item__head {
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-family: "Onest Bold";
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0px;
  color: #1a2b49;
}
.AB-TEST013 .ab-faq-accordion-item__body {
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s;
}
.AB-TEST013 .ab-faq-accordion-item__body__content {
  padding: 15px 0 25px;
  text-align: left;
  font-family: "Onest Regular";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #1a2b49;
}
.AB-TEST013 .ab-faq-accordion-item strong {
  font-family: "Onest Bold";
  font-weight: bolder;
  color: #1a2b49;
}
.AB-TEST013 .ab-faq-accordion-item a {
  font-family: "Onest Bold";
  font-weight: bolder;
  color: #1a2b49;
  text-align: underline;
}
.AB-TEST013 .ab-faq-accordion-item__cta {
  margin-top: 4px;
  cursor: pointer;
  height: 20px;
  position: relative;
  text-align: left;
  font-family: "Onest Regular";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: rgba(26, 43, 73, 0.8);
}
.AB-TEST013 .ab-faq-accordion-item__collapsed-text {
  overflow: hidden;
  opacity: 1;
  transition: all 0.1s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
}
.AB-TEST013 .ab-faq-accordion-item__expanded-text {
  position: absolute;
  opacity: 0;
  transition: all 0.1s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
}
.AB-TEST013 .ab-faq-accordion-item p {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  text-wrap: pretty;
  text-align: left;
  display: block !important;
  mask-image: none !important;
  -webkit-mask-image: none !important;
}
.AB-TEST013 .ab-faq-accordion-item .read-more-toggle {
  display: none !important;
}
.AB-TEST013 .ab-faq-accordion-item .read-more-wrapper {
  display: block !important;
}
@media screen and (min-width: 991px) {
  .AB-TEST013 .ab-faq-accordion-section hr {
    margin-top: 41px;
    margin-bottom: 36px;
  }
  .AB-TEST013 #courseTabContent .ab-faq-accordion-item {
    margin-left: 0;
    margin-right: 0;
  }
  .AB-TEST013 .ab-faq-accordion-item {
    padding: 10px 14px 14px;
    transition: all 0.3s ease-in-out;
    background-color: #f7f7f7;
  }
  .AB-TEST013 .ab-faq-accordion-item__head {
    font-weight: 700;
    font-size: 24px;
    line-height: 44px;
    letter-spacing: 0px;
  }
  .AB-TEST013 .ab-faq-accordion-item__body {
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s;
  }
  .AB-TEST013 .ab-faq-accordion-item__body__content,
  .AB-TEST013 .ab-faq-accordion-item strong {
    padding: 6px 0 29px;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #000000;
  }
  .AB-TEST013 .ab-faq-accordion-item__cta {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
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
Test doc: https://docs.google.com/document/d/1aRY66TBUeXHBDx5imd0b7Z3HhILM3nqkuWvxBML48HY/edit?tab=t.0
Figma: https://www.figma.com/design/RWs9kC2tKwUdp3OEJcadw9/Test013---Landingpages-Kurse---Optimierung-auf-Anmeldungen-upper-funnel?node-id=50-1031&t=reOCha0nPcNYTOyf-1

Important: https://www.sgd.de/lp/realschulabschluss.html

Target Pages:
https://www.sgd.de/lp/abitur.html
https://www.sgd.de/lp/gepr-fachwirtin-im-gesundheits-und-sozialwesen-ihk.html
https://www.sgd.de/lp/gepr-wirtschaftsfachwirtin-ihk.html
https://www.sgd.de/lp/realschulabschluss.html
https://www.sgd.de/lp/ernaehrungsberaterin.html
https://www.sgd.de/lp/tierpsychologie-tierhaltung-tierbetreuung-tierverhaltenstherapie.html
https://www.sgd.de/lp/psychotherapie-hp.html
https://www.sgd.de/lp/gepr-fitnesscoach-sgd.html
https://www.sgd.de/lp/gepr-buchhalterin-sgd.html
https://www.sgd.de/lp/staatlich-gepr-maschinenbautechnikerin.html


*/

(async () => {
  const TEST_CONFIG = {
    client: "Netzproduzenten",
    project: "SGD",
    site_url: "https://www.sgd.de/",
    test_name: "Test013 [SGD] - landing pages - new structure",
    page_initials: "AB-TEST013",
    test_variation: 1,
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const ASSETS = {
    course_info_svg: /* HTML */ `<svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <rect width="28" height="28" fill="url(#pattern0_54_2539)" />
      <defs>
        <pattern
          id="pattern0_54_2539"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image0_54_2539" transform="scale(0.0078125)" />
        </pattern>
        <image
          id="image0_54_2539"
          width="128"
          height="128"
          preserveAspectRatio="none"
          xlink:href="data:image/png;base64,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"
        />
      </defs>
    </svg>`,
  };

  const DATA = {
    course_info: {
      "/lp/abitur": [
        "Umfassende, individuelle Betreuung",
        "Abiturprüfung in Schulen in Hessen",
        "Fernschule mit der längsten Erfahrung in der Abitur-Prüfungsvorbereitung",
        "Übernahme aller Formalitäten",
      ],
      "/lp/gepr-fachwirtin-im-gesundheits-und-sozialwesen-ihk": [
        "Hohe staatliche Förderung möglich (Aufstiegs-BAföG)",
        "IHK-Abschluss auf Niveau 6 des Deutschen Qualifikationsrahmens (DQR), gleichwertig mit dem Bachelor",
      ],
      "/lp/gepr-wirtschaftsfachwirtin-ihk": [
        "Persönliche Betreuung + Optimale Vorbereitung auf die IHK-Prüfung",
        "Angesehener Fortbildungsabschluss",
        "Sehr gute Karriereaussichten im mittleren Management",
        "Förderung durch Bildungsgutschein möglich",
      ],
      "/lp/realschulabschluss": [
        "Bewährtes Konzept für die Vorbereitung zur staatlichen Prüfung",
        "Lernstoff leicht verständlich dank erfahrener Fernlehrer",
        "Abschluss in ganz Deutschland anerkannt",
      ],
      "/lp/ernaehrungsberaterin": [
        "Optimale Vorbereitung auf den Berufseinstieg",
        "Ideal für unterwegs dank Audiorepetitorien",
        "Für Quereinsteiger geeignet",
        'Inklusive Ernährungsberater-Software "kcalculator"',
      ],
      "/lp/tierpsychologie-tierhaltung-tierbetreuung-tierverhaltenstherapie": [
        "Konzentriertes Fachwissen zu Hund, Katze, Kleinsäuger, Pferd optional",
        "Leicht verständlicher Lernstoff mit kursspezifischen Audiorepetitorien",
        "Mit erfahrenen Fachleuten entwickelt inkl. regelmäßiger Chats mit dem Fernlehrer",
        "Förderung durch Bildungsgutschein nach AZAV möglich",
      ],
      "/lp/psychotherapie-hp": [
        "Praxisbezug durch zahlreiche Fallbeispiele",
        "Vorbereitung auf die behördliche Kenntnisüberprüfung „Psychotherapie“",
        "Ihr Weg zur psychotherapeutischen Tätigkeit ohne Hochschulstudium",
        "Ideal für unterwegs - Audiorepetitorien gratis",
      ],
      "/lp/gepr-fitnesscoach-sgd": [
        "Kooperation mit der Deutschen Akademie für Medical Fitness (DAFMF)®",
        "Anschauliche Lernvideos + Gratis-Praxisseminare",
        "Erwerb von drei wichtigen Lizenzen",
        "Förderung möglich",
      ],
      "/lp/gepr-buchhalterin-sgd": [
        "Praxisorientierte Vermittlung der Lerninhalte",
        "Mit Profi-Buchführungssoftware, die Sie nach dem Lehrgang weiter nutzen können",
        "Förderung möglich (Bildungsgutschein nach AZAV)",
      ],
      "/lp/staatlich-gepr-maschinenbautechnikerin": [
        "24/7 mobiles Lernen auf allen Geräten",
        "Optimale Prüfungsvorbereitung und Unterstützung von erfahrenen Dozent:innen",
        "Kostenlose Software aus der Praxis + Audio-Training für technisches Englisch",
      ],
      "/lp/heilpraktikerin-vorbereitung-auf-die-amtsaerztliche-ueberpruefung": [
        "Optimale Vorbereitung auf die amtsärztliche Prüfung",
        "Erster Schritt auf dem Weg zur eigenen Praxis",
        "Erfahrene Fernlehrer + Audiorepetitorien – ideal für unterwegs + Praxisseminar",
      ],
    },
  };

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
    return o ? s.querySelector(o) : document.querySelector(s);
  }

  function qq(s, o) {
    return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
  }

  function createAccordionNoTabLayout() {
    const targetNode = q(
      ".container-md.tab-393-none + div.frame-space-after-medium",
    );

    if (!targetNode) return;

    const data = qq(".tab-393-none:not(.accordion):has(h2)").map((item) => {
      return {
        title: q(item, "h2").textContent,
        description: qq(item, "span p")
          .map((p) => `<p>${p.textContent.trim()}</p>`)
          .join(""),
      };
    });

    targetNode.insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <div class="ab-course-accordion container-md">
          <div class="ab-faq-accordion-section">
            ${data
              .map(
                (item, index) => /* HTML */ `
                  <div
                    class="ab-faq-accordion-item"
                    data-toggle-id="${index + 1}"
                  >
                    <div class="ab-faq-accordion-item__head">
                      <div class="ab-faq-accordion-item__head__title">
                        ${item.title}
                      </div>
                    </div>
                    <div class="ab-faq-accordion-item__body">
                      <div class="ab-faq-accordion-item__body__content">
                        ${item.description}
                      </div>
                    </div>
                    <div class="ab-faq-accordion-item__cta">
                      <span class="ab-faq-accordion-item__collapsed-text"
                        >Klicken zum Lesen</span
                      >
                      <span class="ab-faq-accordion-item__expanded-text"
                        >Klicken zum Schließen</span
                      >
                    </div>
                  </div>
                  ${index !== data.length - 1
                    ? `<div class="container-md"><hr /></div>`
                    : ""}
                `,
              )
              .join("")}
          </div>
        </div>
      `,
    );
  }

  function createAccordionWithTabLayout() {
    const targetNode = q("#courseTabContent .quick-info");

    if (!targetNode) return;

    const [targetNode1, targetNode2] = qq(".quick-info:not(:has(.mb-2:empty))");

    const data1 = [
      {
        title: "Abitur nachholen mit Realschulabschluss",
        description: `
                <p>Wenn Sie bereits den Realschulabschluss erfolgreich absolviert haben, erfüllen Sie alle Voraussetzungen, um direkt in den Fernkurs für das Abitur einzusteigen. Die Dauer des Kurses beträgt hier bei einem Pensum von 12–16 Wochenstunden etwa 32 Monate.</p>
                <p>Da es sich um einen Fernlehrgang handelt, haben Sie die Möglichkeit, den Zeitraum bis zur Abiturprüfung zu verkürzen oder zu verlängern.</p>
                `,
      },
      {
        title: "Fächerkombinationen, um das Abitur nachzuholen",
        description:
          "<p>Die Abitur-Prüfungsordnung für die staatliche Externenprüfung in Hessen sieht acht Prüfungsfächer vor. Dabei können Sie je nach Ihren Interessen bzw. Vorkenntnissen eigene Schwerpunkte bei der Fächerwahl setzen. Aus langjähriger Erfahrung wissen wir, dass vier Fächerkombinationen besonders erfolgversprechend sind. Wählen Sie eine dieser Kursvarianten – je nachdem, welche Fremdsprachen Sie bevorzugen und ob Sie weniger oder mehr naturwissenschaftliche Fächer belegen möchten.</p>",
      },
    ];

    const data2 = [
      {
        title:
          "Abitur nachholen mit Fachhochschulreife oder Fachoberschulreife",
        description: `
                <p>Auch wenn Sie bereits die fachgebundene Hochschulreife oder die Fachoberschulreife haben, kann es Gründe geben, dass Sie die Allgemeine Hochschulreife brauchen. Denn gerade bei Studienfächern, die ausschließlich an Universitäten studiert werden, wie Medizin oder Psychologie, ist die Allgemeine Hochschulreife notwendig. Wenden Sie sich gerne an unsere sgd Bildungsberatung, um zu besprechen, welche Möglichkeiten Sie haben, das Abitur mit Fachoberschulreife nachzuholen und eventuell den Fernlehrgang zu verkürzen.</p>
                `,
      },
      {
        title:
          "Die Allgemeine Hochschulreife nachholen und durch Vorkenntnisse verkürzen",
        description:
          '<p>Haben Sie bereits einen dieser Abschlüsse erreicht, bieten wir Ihnen die Möglichkeit, den Aufbaulehrgang zu verkürzen. Das Gleiche gilt, wenn Sie bereits die gymnasiale Oberstufe besucht, das Abitur jedoch nicht beendet haben.&nbsp;Lassen Sie sich von unseren Experten persönlich beraten!<br>Ihre individuelle SGD-Bildungsberatung erreichen Sie unter: <strong>06151 3842 259</strong><br>Um ein Angebot für einen individuellen Lehrgangseinstieg zu erhalten, senden Sie bitte Ihre letzten Zeugnisse in Kopie mit Angabe der Fächer und Noten direkt an: <a href="mailto:abitur@sgd.de"><strong>abitur@sgd.de</strong></a></p>',
      },
    ];

    targetNode1.insertAdjacentHTML(
      "beforebegin",
      /* HTML */ `
        <div class="ab-course-accordion mb-5">
          <div class="ab-faq-accordion-section">
            ${data2
              .map(
                (item, index) => /* HTML */ `
                  <div
                    class="ab-faq-accordion-item"
                    data-toggle-id="${index + 1}"
                  >
                    <div class="ab-faq-accordion-item__head">
                      <div class="ab-faq-accordion-item__head__title">
                        ${item.title}
                      </div>
                    </div>
                    <div class="ab-faq-accordion-item__body">
                      <div class="ab-faq-accordion-item__body__content">
                        ${item.description}
                      </div>
                    </div>
                    <div class="ab-faq-accordion-item__cta">
                      <span class="ab-faq-accordion-item__collapsed-text"
                        >Klicken zum Lesen</span
                      >
                      <span class="ab-faq-accordion-item__expanded-text"
                        >Klicken zum Schließen</span
                      >
                    </div>
                  </div>
                  ${index !== data1.length - 1
                    ? `<div class="container-md"><hr /></div>`
                    : ""}
                `,
              )
              .join("")}
          </div>
        </div>
      `,
    );

    targetNode2.insertAdjacentHTML(
      "beforebegin",
      /* HTML */ `
        <div class="ab-course-accordion mb-5">
          <div class="ab-faq-accordion-section">
            ${data1
              .map(
                (item, index) => /* HTML */ `
                  <div
                    class="ab-faq-accordion-item"
                    data-toggle-id="${index + 1}"
                  >
                    <div class="ab-faq-accordion-item__head">
                      <div class="ab-faq-accordion-item__head__title">
                        ${item.title}
                      </div>
                    </div>
                    <div class="ab-faq-accordion-item__body">
                      <div class="ab-faq-accordion-item__body__content">
                        ${item.description}
                      </div>
                    </div>
                    <div class="ab-faq-accordion-item__cta">
                      <span class="ab-faq-accordion-item__collapsed-text"
                        >Klicken zum Lesen</span
                      >
                      <span class="ab-faq-accordion-item__expanded-text"
                        >Klicken zum Schließen</span
                      >
                    </div>
                  </div>
                  ${index !== data2.length - 1
                    ? `<div class="container-md"><hr /></div>`
                    : ""}
                `,
              )
              .join("")}
          </div>
        </div>
      `,
    );
  }

  function createLayout() {
    // Header
    q(".header-wrapper.container-md").insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <div class="ab-header-wrapper container-md">
          <div class="header-grid-wrapper">
            <div class="header-grid-left">
              <div class="header-company">
                <a aria-label="Die SGD – Logo" href="/">
                  <div class="header-logo">${q(".header-logo").innerHTML}</div>
                  <div class="header-claim">
                    ${q(".header-claim").innerHTML}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      `,
    );

    // Course Info Box
    const currentPath = window.location.pathname;
    const infoList = DATA.course_info[currentPath.replace(".html", "")];

    if (infoList) {
      q("div.my-3:has(> .badge.badge-.badge-type-action)").insertAdjacentHTML(
        "afterend",
        /* HTML */ `
          <div class="ab-course-info-box">
            ${infoList
              .map(
                (infoTxt) => /* HTML */ `
                  <div class="ab-course-info-item">
                    <div class="ab-course-info-item__icon">
                      ${ASSETS.course_info_svg}
                    </div>
                    <div class="ab-course-info-item__text">${infoTxt}</div>
                  </div>
                `,
              )
              .join("")}
          </div>
          <div class="wf-course-badges-mobile">
            <img
              src="https://www.sgd.de/fileadmin/images/siegel/top-fernschule.png"
              alt="Top Fernschule"
            />
            <img
              src="https://www.sgd.de/fileadmin/images/siegel/Statista_FurtherEducation_DE2024.png"
              alt="Top Weiterbildungsanbieter 2024"
            />
            <img
              src="https://www.sgd.de/fileadmin/images/siegel/fernstudium-direkt-2024.png"
              alt="Fernstudium Direkt Siegel 2024"
            />
          </div>

          ${q(
            ".container-md.frame-space-before-medium.frame-space-after-medium:has(a.btn.btn-prio-1)",
          )
            ? `<div class="ab-course-info-box-btn-desktop-mobile d-flex flex-column align-items-center"><a href="#" class="ab-course-info-box-btn-desktop-mobile-link btn btn-prio-1" data-jump-to="#js-card-download">Preise &amp; Probeinhalte anfordern</a></div>`
            : ""}
        `,
      );
    }

    // Image Desktop
    q("#course_registration > div.row.mb-2").insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <div class="wf-course-badges-desktop">
          <img
            src="https://www.sgd.de/fileadmin/images/siegel/top-fernschule.png"
            alt="Top Fernschule"
          />
          <img
            src="https://www.sgd.de/fileadmin/images/siegel/Statista_FurtherEducation_DE2024.png"
            alt="Top Weiterbildungsanbieter 2024"
          />
          <img
            src="https://www.sgd.de/fileadmin/images/siegel/fernstudium-direkt-2024.png"
            alt="Fernstudium Direkt Siegel 2024"
          />
        </div>
      `,
    );

    // Reposition Elements
    const targetNode = q(
      ".container-md:has(> .frame-type-easy_image_slider) ~ .container-md:has(> hr)",
    );
    targetNode.insertAdjacentElement(
      "afterend",
      q(".container-md:has(>.frame-type-contact_support)"),
    );
    targetNode.insertAdjacentElement(
      "afterend",
      q(".container-md:has(>.grid-container) + .container-md:has(>hr)"),
    );
    targetNode.insertAdjacentElement(
      "afterend",
      q(".container-md:has(>.grid-container)"),
    );
    qq(
      ".container-md:has(>.frame-type-contact_support) ~ .container-md:has(>hr)",
    ).forEach((item) => item.classList.add("ab-hidden"));

    // Accorction Content
    createAccordionNoTabLayout();
    createAccordionWithTabLayout();
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
  }

  function toggleAccordion(clickedItem) {
    const clickedAccordion = clickedItem.parentNode;
    const isOpen = clickedAccordion.classList.contains(
      "ab-faq-accordion-item--open",
    );
    if (isOpen) {
      clickedAccordion.classList.remove("ab-faq-accordion-item--open");
    } else {
      clickedAccordion.classList.add("ab-faq-accordion-item--open");
    }
  }

  function clickFunction() {
    qq(".ab-faq-accordion-item__cta")?.forEach((item) => {
      item.addEventListener("click", (e) => {
        toggleAccordion(item);
      });
    });
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(".header-wrapper.container-md") &&
      q("div.my-3:has(> .badge.badge-.badge-type-action)") &&
      q(".container-md:has(> .frame-type-easy_image_slider)") &&
      q(".container-md:has(>.grid-container)") &&
      q(".container-md:has(>.grid-container) + .container-md:has(>hr)") &&
      q(".container-md:has(>.frame-type-contact_support)") &&
      ((q(".container-md.tab-393-none + div.frame-space-after-medium") &&
        q("div.tab-393-none:not(.accordion):has(h2)")) ||
        q("#courseTabContent .quick-info"))
    );
  }

  // try {
  //     await waitForElementAsync(checkForItems);
  //     init();
  // } catch (error) {
  //     console.warn(error);
  //     return false;
  // }

  waitForElementAsync(checkForItems).then(init);
})();
