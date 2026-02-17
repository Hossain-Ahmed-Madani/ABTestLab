(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-TEST008 .container-md:has(.quick-info.row) {
  margin-bottom: 26px;
}
.AB-TEST008 .ab-heading {
  font-family: "Onest Bold";
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgb(26, 43, 73);
  margin-bottom: 17px;
}
.AB-TEST008 .ab-content-row {
  margin-left: -20px;
  margin-right: -20px;
  padding: 12px 20px;
  margin-bottom: 24px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
}
.AB-TEST008 .slick-list {
  padding-top: 0;
  padding-bottom: 0;
}
.AB-TEST008 .ab-content-row .slick-arrow.slick-disabled {
  display: none !important;
}
.AB-TEST008 .slick-slider .slick-arrow {
  top: 0;
  bottom: 0;
  margin: auto;
}
.AB-TEST008 .slick-slider .slick-arrow:before {
  content: "";
  background: url('data:image/svg+xml,<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7009 10.5599L0.16037 21.4119L6.86959e-05 5.56138e-05L17.7009 10.5599Z" fill="%23278B2E"/></svg>');
  width: 20px;
  height: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.AB-TEST008 .slick-slider .slick-prev.slick-arrow:before {
  transform: rotate(-180deg);
}
.AB-TEST008 .ab-content-col {
  display: flex !important;
  flex-direction: column;
  height: auto;
  gap: 18px;
}
.AB-TEST008 .ab-content {
  flex-grow: 1;
  display: flex;
  gap: 5px;
}
.AB-TEST008 .ab-content-icon {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-right: 5px;
}
.AB-TEST008 .ab-content-icon img {
  margin-top: 15px;
  width: 50px;
  height: 50px;
  min-height: 50px;
  object-fit: contain;
}
.AB-TEST008 .ab-content-serial,
.AB-TEST008 .ab-content-heading {
  font-family: "Onest Bold";
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgb(26, 43, 73);
}
.AB-TEST008 .ab-content-heading {
  text-align: left;
  text-wrap: pretty;
  margin-bottom: 2px;
}
.AB-TEST008 .ab-content-description {
  font-family: "Onest Regular";
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgb(26, 43, 73);
  text-align: left;
  text-wrap: pretty;
}
.AB-TEST008 .ab-content-cta {
  width: 143px;
  height: 19px;
  border-radius: 5px;
  background-color: rgb(192, 255, 197);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Onest Regular";
  font-weight: 400;
  font-size: 10px;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: rgb(69, 69, 69);
  margin-top: 9.5px;
}
.AB-TEST008 .ab-button-container.header-buttons {
  padding-left: 50px;
  padding-right: 50px;
  width: 100%;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 21px;
}
.AB-TEST008 .ab-button-divider {
  font-family: "Onest Regular";
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: rgba(117, 117, 117, 0.5);
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-TEST008 .ab-button-container .link-modal-info-package {
  background-color: rgb(38, 139, 46);
  color: rgb(255, 255, 255);
  width: 100%;
  height: 29px;
  border-radius: 30px;
  border: 1px solid rgb(38, 139, 46);
  font-family: "Onest Regular";
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
}
.AB-TEST008 .ab-button-container .track-fb-init-free-month {
  background-color: rgb(102, 204, 0);
  color: rgb(255, 255, 255);
  width: 100%;
  height: 29px;
  border-radius: 30px;
  border: 1px solid rgb(102, 204, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Onest Regular";
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
}
@media screen and (min-width: 991px) {
  .AB-TEST008 .container-md:has(.quick-info.row) {
    margin-bottom: 20px;
  }
  .AB-TEST008 .ab-content-row {
    margin-left: 0;
    margin-right: 0;
    display: flex;
    margin-bottom: 0;
    box-shadow: none;
    gap: 68px;
    padding: 12px 20px 20px;
  }
  .AB-TEST008 .ab-content-col {
    width: 33.33%;
    gap: 0;
  }
  .AB-TEST008 .ab-content-col--arrow {
    position: relative;
  }
  .AB-TEST008 .ab-content-col--arrow::after {
    content: "";
    position: absolute;
    right: -40px;
    top: 38%;
    background: url('data:image/svg+xml,<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7009 10.5599L0.16037 21.4119L6.86959e-05 5.56138e-05L17.7009 10.5599Z" fill="%23278B2E"/></svg>');
    width: 23px;
    height: 23px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .AB-TEST008 .ab-content {
    min-height: 185px;
  }
  .AB-TEST008 .ab-heading {
    font-size: 34px;
    line-height: 44px;
    margin-bottom: 25px;
  }
  .AB-TEST008 .ab-content-icon {
    padding-right: 0;
  }
  .AB-TEST008 .ab-content-icon img {
    margin-top: 16px;
    width: 55px;
    height: 55px;
    min-height: 55px;
    object-fit: contain;
  }
  .AB-TEST008 .ab-content-serial,
  .AB-TEST008 .ab-content-heading {
    font-size: 16px;
    line-height: 24px;
  }
  .AB-TEST008 .ab-content-heading {
    margin-bottom: 5px;
  }
  .AB-TEST008 .ab-content-description {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    margin-bottom: 11px;
  }
  .AB-TEST008 .ab-content-cta {
    width: 163px;
    height: 22.5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 12px;
  }
  .AB-TEST008 .ab-button-container.header-buttons {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-bottom: 17px;
  }
  .AB-TEST008 .ab-button-divider {
    font-size: 14px;
    line-height: 20px;
    color: rgba(117, 117, 117, 0.5);
  }
  .AB-TEST008 .ab-button-container .link-modal-info-package {
    background-color: rgb(38, 139, 46);
    color: rgb(255, 255, 255);
    width: 100%;
    height: 52px;
    font-weight: 700;
    font-size: 20px;
    line-height: 21px;
  }
  .AB-TEST008 .ab-button-container .track-fb-init-free-month {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(102, 204, 0);
    color: rgb(255, 255, 255);
    width: 100%;
    height: 52px;
    border: 1px solid rgb(102, 204, 0);
    font-weight: 700;
    font-size: 20px;
    line-height: 21px;
  }
  .AB-TEST008 .container-md:has(#azav-banner) > hr:first-child {
    margin-top: 0 !important;
    margin-bottom: 39px !important;
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

Figma: https://www.figma.com/design/yhsHHMvXhm9AGNOBzk6r8N/Test008---Kursdetailseite---Prozess-visualisieren?node-id=0-1&p=f&t=u4a9TPbHG6rStGdR-0
Test container: https://app.varify.io/dashboard?msg=experiment-created&experiment_id=31590&variation_id=47379&search=Test008+%5BSGD%5D+-+course+detail+page+-+visualize+the+course+implementation+process
Preview: https://www.sgd.de/kursseite/gepr-betriebswirtin-sgd.html?qa5=true

*/

(async () => {
  const TEST_CONFIG = {
    page_initials: "AB-TEST008",
    test_variation: 1,
    test_version: 0.0002,
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
      heading: "Kostenloses Infopaket zum Kurs erhalten",
      description:
        "Alle Details auf einen Blick - unverbindlich & transparent. Preise, Kursinhalte, erste Lernmaterialien und flexible Finanzierungsmöglichkeiten entdecken.",
      cta: "oder direkt starten:",
    },
    {
      order: "2",
      icon: ASSETS["booking_img"],
      heading: "Wunschkurs buchen und risikofrei testen",
      description:
        "Einsteigen, ausprobieren, entscheiden Lernen Sie im eigenen Tempo, tauschen Sie sich im SGD-Onlinecampus aus und erleben Sie den Kurs unverbindlich.",
      cta: "",
    },
    {
      order: "3",
      icon: ASSETS["online_learning_img"],
      heading: "Flexibel lernen - Wissen gezielt aufbauen",
      description:
        "Weiterbildung, die sich Ihrem Alltag anpasst. Lernen Sie orts- und zeitunabhängig und erweitern Sie Schritt für Schritt Ihre beruflichen Kompetenzen.",
      cta: "",
    },
    {
      order: "4",
      icon: ASSETS["quality_assurance_img"],
      heading: "Aufgaben bearbeiten und professionelles Feedback erhalten",
      description:
        "Lernen mit Struktur und persönlicher Begleitung. Bearbeiten Sie Einsendeaufgaben und erhalten Sie qualifiziertes Feedback Ihrer Tutor:innen - für messbaren Lernfortschritt.",
      cta: "",
    },
    {
      order: "5",
      icon: ASSETS["winner_img"],
      heading: "Anerkanntes Abschlusszeugnis und Zertifikat erhalten",
      description:
        "Ihr offizieller Kompetenznachweis Nach erfolgreichem Abschluss erhalten Sie Ihr SGD-Zertifikat und Abschlusszeugnis.",
      cta: "",
    },
    {
      order: "6",
      icon: ASSETS["promotion_img"],
      heading: "Mit neuem Wissen sichtbar Karriere machen",
      description:
        "Positionieren Sie sich deutlich als ambitionierte Fachkraft, die sich gezielt weiterbildet und neue Herausforderungen annimmt. ",
      cta: "",
    },
  ];

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
                  ({ order, icon, heading, description, cta }) => /* HTML */ `
                    <div class="ab-content">
                      <div class="ab-content-icon">
                        <img src="${icon}" alt="${heading}" />
                      </div>
                      <div class="ab-content-serial">${order}.</div>
                      <div class="ab-content-text-items">
                        <div class="ab-content-heading">${heading}</div>
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
                  ({ order, icon, heading, description, cta }) => /* HTML */ `
                    <div class="ab-content">
                      <div class="ab-content-icon">
                        <img src="${icon}" alt="${heading}" />
                      </div>
                      <div class="ab-content-serial">${order}.</div>
                      <div class="ab-content-text-items">
                        <div class="ab-content-heading">${heading}</div>
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
                  ({ order, icon, heading, description, cta }) => /* HTML */ `
                    <div class="ab-content">
                      <div class="ab-content-icon">
                        <img src="${icon}" alt="${heading}" />
                      </div>
                      <div class="ab-content-serial">${order}.</div>
                      <div class="ab-content-text-items">
                        <div class="ab-content-heading">${heading}</div>
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

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    return false;
  }
})();
