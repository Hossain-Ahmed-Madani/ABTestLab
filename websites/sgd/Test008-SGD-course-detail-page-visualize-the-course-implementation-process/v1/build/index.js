/* 

Figma: https://www.figma.com/design/yhsHHMvXhm9AGNOBzk6r8N/Test008---Kursdetailseite---Prozess-visualisieren?node-id=0-1&p=f&t=u4a9TPbHG6rStGdR-0
Test container: https://app.varify.io/dashboard?msg=experiment-created&experiment_id=31590&variation_id=47379&search=Test008+%5BSGD%5D+-+course+detail+page+-+visualize+the+course+implementation+process
Preview: https://www.sgd.de/kursseite/gepr-betriebswirtin-sgd.html?qa5=true

*/

(async () => {
  const TEST_CONFIG = {
    page_initials: "AB-TEST008",
    test_variation: 1,
    test_version: 0.0003,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const ASSETS = {
    file_img: "https://www.sgd.de/fileadmin/images/testing/file.png",
    booking_img: "https://www.sgd.de/fileadmin/images/testing/booking.png",
    promotion_img: "https://www.sgd.de/fileadmin/images/testing/promotion.png",
    quality_assurance_img:
      "https://www.sgd.de/fileadmin/images/testing/quality-assurance.png",
    online_learning_img:
      "https://www.sgd.de/fileadmin/images/testing/online-learning.png",
    winner_img: "https://www.sgd.de/fileadmin/images/testing/winner.png",
  };

  const DATA = [
    {
      order: "1",
      icon: ASSETS["file_img"],
      heading_sm: "Kostenloses Infopaket zum Kurs erhalten",
      heading_lg: "Kostenloses Infopaket zum Kurs erhalten",
      description:
        "Alle Details auf einen Blick - unverbindlich & transparent. Preise, Kursinhalte, erste Lernmaterialien und flexible Finanzierungsmöglichkeiten entdecken.",
      cta: "oder direkt starten:",
    },
    {
      order: "2",
      icon: ASSETS["booking_img"],
      heading_sm: "Wunschkurs buchen und risikofrei testen",
      heading_lg: "Wunschkurs buchen und risikofrei testen",
      description:
        "Einsteigen, ausprobieren, entscheiden Lernen Sie im eigenen Tempo, tauschen Sie sich im SGD-Onlinecampus aus und erleben Sie den Kurs unverbindlich.",
      cta: "",
    },
    {
      order: "3",
      icon: ASSETS["online_learning_img"],
      heading_sm: "Flexibel lernen - Wissen gezielt aufbauen",
      heading_lg: "Flexibel lernen - Wissen gezielt aufbauen",
      description:
        "Weiterbildung, die sich Ihrem Alltag anpasst. Lernen Sie orts- und zeitunabhängig und erweitern Sie Schritt für Schritt Ihre beruflichen Kompetenzen.",
      cta: "",
    },
    {
      order: "4",
      icon: ASSETS["quality_assurance_img"],
      heading_sm: "Aufgaben bearbeiten und professionelles Feedback erhalten",
      heading_lg: "Aufgaben bearbeiten & professionelles Feedback erhalten",
      description:
        "Lernen mit Struktur und persönlicher Begleitung. Bearbeiten Sie Einsendeaufgaben und erhalten Sie qualifiziertes Feedback Ihrer Tutor:innen - für messbaren Lernfortschritt.",
      cta: "",
    },
    {
      order: "5",
      icon: ASSETS["winner_img"],
      heading_sm: "Anerkanntes Abschlusszeugnis und Zertifikat erhalten",
      heading_lg: "Anerkanntes Abschlusszeugnis & Zertifikat erhalten",
      description:
        "Ihr offizieller Kompetenznachweis Nach erfolgreichem Abschluss erhalten Sie Ihr SGD-Zertifikat und Abschlusszeugnis.",
      cta: "",
    },
    {
      order: "6",
      icon: ASSETS["promotion_img"],
      heading_sm: "Mit neuem Wissen sichtbar Karriere machen",
      heading_lg: "Mit neuem Wissen sichtbar Karriere machen",
      description:
        "Positionieren Sie sich deutlich als ambitionierte Fachkraft, die sich gezielt weiterbildet und neue Herausforderungen annimmt. ",
      cta: "",
    },
  ];

  async function waitForElementAsync(
    predicate,
    timeout = 10000,
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

  function updateLayout() {
    q(".container-md:has(> .quick-info.row)").insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <div class="container-md ab-container">
          <div class="ab-heading">
            Ablaufplan - von der Buchung bis zum ersten Erfolg im Job
          </div>
          <div class="ab-content-row">
            <div class="ab-content-col ab-content-col--arrow">
              ${DATA.slice(0, 2)
                .map(
                  ({
                    order,
                    icon,
                    heading_sm,
                    heading_lg,
                    description,
                    cta,
                  }) => /* HTML */ `
                    <div class="ab-content">
                      <div class="ab-content-icon">
                        <img src="${icon}" alt="${heading_sm}" />
                      </div>
                      <div class="ab-content-serial">${order}.</div>
                      <div class="ab-content-text-items">
                        <div class="ab-content-heading ab-content-heading--sm">
                          ${heading_sm}
                        </div>
                        <div class="ab-content-heading ab-content-heading--lg">
                          ${heading_lg}
                        </div>
                        <div class="ab-content-description">${description}</div>
                        ${cta ? `<div class="ab-content-cta">${cta}</div>` : ""}
                      </div>
                    </div>
                  `,
                )
                .join("")}
            </div>
            <div class="ab-content-col">
              ${DATA.slice(2, 4)
                .map(
                  ({
                    order,
                    icon,
                    heading_sm,
                    heading_lg,
                    description,
                    cta,
                  }) => /* HTML */ `
                    <div class="ab-content">
                      <div class="ab-content-icon">
                        <img src="${icon}" alt="${heading_sm}" />
                      </div>
                      <div class="ab-content-serial">${order}.</div>
                      <div class="ab-content-text-items">
                        <div class="ab-content-heading ab-content-heading--sm">
                          ${heading_sm}
                        </div>
                        <div class="ab-content-heading ab-content-heading--lg">
                          ${heading_lg}
                        </div>
                        <div class="ab-content-description">${description}</div>
                        ${cta ? `<div class="ab-content-cta">${cta}</div>` : ""}
                      </div>
                    </div>
                  `,
                )
                .join("")}
            </div>
            <div class="ab-content-col">
              ${DATA.slice(4)
                .map(
                  ({
                    order,
                    icon,
                    heading_sm,
                    heading_lg,
                    description,
                    cta,
                  }) => /* HTML */ `
                    <div class="ab-content">
                      <div class="ab-content-icon">
                        <img src="${icon}" alt="${heading_sm}" />
                      </div>
                      <div class="ab-content-serial">${order}.</div>
                      <div class="ab-content-text-items">
                        <div class="ab-content-heading ab-content-heading--sm">
                          ${heading_sm}
                        </div>
                        <div class="ab-content-heading ab-content-heading--lg">
                          ${heading_lg}
                        </div>
                        <div class="ab-content-description">${description}</div>
                        ${cta ? `<div class="ab-content-cta">${cta}</div>` : ""}
                      </div>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>
          <div class="ab-button-container header-buttons">
            <button class="btn btn-sm btn-info link-modal-info-package">
              Gratis Infopaket für diesen Kurs anfordern
            </button>
            <div class="ab-button-divider">oder</div>
            <a
              href="/kursanmeldung.html"
              class="btn btn-sm btn-prio-1 btn-reg-header track-fb-init-free-month"
              data-form-submit="#course_registration"
            >
              <span>Für diesen Kurs anmelden</span>
            </a>
          </div>
        </div>
      `,
    );
  }

  async function initSlickSlider() {
    await waitForElementAsync(
      () =>
        q(".ab-content-row") &&
        window?.$?.fn?.slick &&
        typeof window.$.fn.slick === "function" &&
        window.innerWidth < 991,
    );

    window.$(".ab-content-row").slick({
      dots: false,
      infinite: false,
      autoplay: false,
      arrows: true,
      lazyLoad: "ondemand",
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    updateLayout();
    initSlickSlider();
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) && q(".container-md:has(> .quick-info.row)")
    );
  }

  // try {
  //     await waitForElementAsync(checkForItems);
  //     init();
  // } catch (error) {
  //     return false;
  // }

  waitForElementAsync(checkForItems).then(init).catch(console.error);
})();
