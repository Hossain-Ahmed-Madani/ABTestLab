(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `@charset "UTF-8";
.AB-0124 #mobile-facet-toolbar {
  display: none;
}
.AB-0124 a.tag-link.link.text--subdued[data-action="clear-filters"] {
  font-size: 0;
}
.AB-0124 a.tag-link.link.text--subdued[data-action="clear-filters"]:after {
  content: "Auswahl zurücksetzen";
  font-family: Nunito, sans-serif;
  font-size: 14px;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
}
.AB-0124 .product-facet__active-list .tag {
  min-width: 73px;
  padding: 3px 0px 3px 5px;
  border-radius: 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 15px;
  font-family: Quicksand, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.3px;
  color: rgb(116, 115, 116);
}
.AB-0124 image-with-text-overlay {
  margin-bottom: 29px;
}
.AB-0124 #facet-main {
  display: flex;
  flex-direction: column;
}
.AB-0124 .product-facet__active-list.tag-list.hidden-tablet-and-up {
  order: -1;
  margin-top: -15px;
}
.AB-0124 .ab-price-filter__container {
  min-height: 102px;
  background-color: rgb(254, 231, 241);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 5px 9px;
  position: relative;
}
.AB-0124 .ab-price-filter__img {
  position: absolute;
  bottom: -2px;
  left: -13px;
  width: 115px;
  height: 115px;
  object-fit: contain;
}
.AB-0124 .ab-price-filter__content {
  margin-left: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}
.AB-0124 .ab-price-filter__description {
  font-family: Quicksand, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.3px;
  color: rgb(24, 1, 12);
}
.AB-0124 .ab-price-filter__cta {
  background-color: rgb(96, 6, 46);
  border-radius: 10px;
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Quicksand, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.3px;
  text-align: center;
  vertical-align: middle;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 0%;
  text-decoration-skip-ink: auto;
  color: rgb(255, 255, 255);
}
@media screen and (max-width: 740px) {
  .AB-0124 .ab-price-filter__container {
    margin-left: calc(-1 * var(--container-gutter) / 2);
    margin-right: calc(-1 * var(--container-gutter) / 2);
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

Ticket: https://trello.com/c/D5qcEwSA/4372-test024-wunderwunsch-category-page-place-filters-prominently-with-wunderwunsch-fox-to-appeal-to-emotions-mobile-only
Description: https://docs.google.com/document/u/1/d/1dR0MCsXf3qTMZp7JNHDcUpYLQ8zk5k7cgodC71CJTZ0/edit?usp=sharing
Figma: https://www.figma.com/design/orfdp8oj34kNQKPPDoDw7k/Test024---Kategorieseite---Filter-prominenter-platzieren?node-id=0-1&t=1QjTm1HMH7DUWwYa-1

Test Container: 
V1: 

*/

(async () => {
  const TEST_CONFIG = {
    client: "Netzproduzenten",
    project: "wunderwunsch",
    host: "https://www.wunderwunsch.de/",
    test_name:
      "Test024 [Wunderwunsch] - category page - Place filters prominently with Wunderwunsch-fox to appeal to emotions (mobile only)",
    page_initials: "AB-0124",
    test_variation: 1,
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const ASSETS = {
    fox_image:
      "https://cdn.shopify.com/s/files/1/0535/5654/3672/files/Motiv-Fuchs-Aquarell.png?v=1744870034",
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
    return document.querySelector(s);
  }

  async function createLayout() {
    const layout = /* HTML */ `
      <div class="ab-price-filter">
        <div class=" container">
          <div class="ab-price-filter__container">
            <div class="ab-price-filter__img-container">
              <img
                src="${ASSETS.fox_image}"
                alt="Wunderwunsch Fox"
                class="ab-price-filter__img"
              />
            </div>
            <div class="ab-price-filter__content">
              <div class="ab-price-filter__description">
                Hi, ich bin Felix und helfe dir deinen Lieblingsartikel zu
                finden. Passe deine Auswahl mit unseren Filtern an:
              </div>
              <div class="ab-price-filter__cta">Alle Filter anzeigen</div>
            </div>
          </div>
        </div>
      </div>
    `;
    q(".shopify-section.shopify-section--main-collection").insertAdjacentHTML(
      "beforebegin",
      layout,
    );

    const cta = ".ab-price-filter__cta";
    await waitForElementAsync(() => q(cta));
    q(cta).addEventListener("click", () =>
      q(".mobile-toolbar__item.mobile-toolbar__item--filters").click(),
    );
  }

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);
    createLayout();
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(${page_initials}--v${test_variation})`,
      ) &&
      q(".shopify-section.shopify-section--main-collection") &&
      q(".mobile-toolbar__item.mobile-toolbar__item--filters")
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
    return true;
  } catch (error) {
    console.warn(error);
    return false;
  }
})();
