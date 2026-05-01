(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-MMI20 #main,
.AB-MMI20 .shopify-section.logos {
  background-color: #fff !important;
}
.AB-MMI20 main .shopify-section.main-product-v2 {
  background-color: #fcfcfc !important;
}
.AB-MMI20 main .shopify-section.ingredients-slider-v2 {
  background-color: #fff !important;
}
.AB-MMI20 .shopify-section.product-benefits .product-benefits__wrapper::before,
.AB-MMI20 .shopify-section.product-benefits .product-benefits__wrapper::after {
  z-index: 1;
}
.AB-MMI20 .shopify-section:has(> .hm-v3-faq) {
  background: #f7f7f7;
  padding-top: 50px;
  padding-bottom: 50px;
}
.AB-MMI20 .shopify-section:has(> .hm-v3-faq) > .hm-v3-faq {
  margin-top: 0;
  margin-bottom: 0;
}
@media screen and (min-width: 1200px) {
  .AB-MMI20 .shopify-section:has(> .hm-v3-faq) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}

.AB-MMI20--v1 main .shopify-section.ingredients-slider-v2 {
  padding-bottom: 0 !important;
  background-color: #fff !important;
}
.AB-MMI20--v1 .shopify-section.logos {
  padding-top: 59px !important;
  padding-bottom: 40px !important;
}
.AB-MMI20--v1 .shopify-section.product-benefits {
  padding-top: 125px !important;
  padding-bottom: 160px !important;
}
@media screen and (min-width: 1200px) {
  .AB-MMI20--v1 main .shopify-section.ingredients-slider-v2 {
    padding-bottom: 25px !important;
  }
  .AB-MMI20--v1 .shopify-section.logos {
    padding-top: 61px !important;
    padding-bottom: 61px !important;
  }
  .AB-MMI20--v1 .shopify-section.product-benefits {
    padding-bottom: 190px !important;
  }
}

.AB-MMI20--v2 .shopify-section.ingredients-slider-v2 component-accordions {
  display: none;
}
.AB-MMI20--v2 main .shopify-section.ingredients-slider-v2 {
  padding-top: 40px !important;
  padding-bottom: 0 !important;
}
.AB-MMI20--v2
  main
  .shopify-section.ingredients-slider-v2
  .ingredients-v2__title {
  margin-bottom: 30px !important;
}
.AB-MMI20--v2
  main
  .shopify-section.ingredients-slider-v2
  .ingredients-v2__heading {
  margin-bottom: 64px !important;
}
.AB-MMI20--v2 .shopify-section.logos {
  padding-top: 59px !important;
  padding-bottom: 40px !important;
}
.AB-MMI20--v2 .shopify-section.product-benefits {
  padding-top: 120px !important;
  padding-bottom: 160px !important;
}
@media screen and (min-width: 1200px) {
  .AB-MMI20--v2 main .shopify-section.ingredients-slider-v2 {
    padding-top: 45px !important;
  }
  .AB-MMI20--v2
    main
    .shopify-section.ingredients-slider-v2
    .ingredients-v2__title {
    margin-bottom: 45px !important;
  }
  .AB-MMI20--v2
    main
    .shopify-section.ingredients-slider-v2
    .ingredients-v2__heading {
    margin-bottom: 96px !important;
  }
  .AB-MMI20--v2 .shopify-section.logos {
    padding-top: 80px !important;
    padding-bottom: 80px !important;
  }
  .AB-MMI20--v2 .shopify-section.product-benefits {
    padding-top: 120px !important;
    padding-bottom: 160px !important;
  }
}
.AB-MMI20--v2 .ab-accordion-grid-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 14px;
}
.AB-MMI20--v2 .ab-accordion-grid-item {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.AB-MMI20--v2 .ab-accordion {
  border: 1px solid #b2b4b5;
  border-radius: 7px;
  padding: 15px 17px 15px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  transition: padding 0.3s ease-in-out;
  will-change: padding;
}
.AB-MMI20--v2 .ab-accordion__left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 16px;
  cursor: pointer;
}
.AB-MMI20--v2 .ab-accordion__middle {
  flex-grow: 1;
  margin: auto;
}
.AB-MMI20--v2 .ab-accordion__right {
  width: 30px;
  min-width: 30px;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
}
.AB-MMI20--v2 .ab-accordion__left img {
  width: 50px;
  min-width: 50px;
  height: 50px;
  min-height: 50px;
  object-fit: contain;
  object-position: center;
}
.AB-MMI20--v2 .ab-accordion__head {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
}
.AB-MMI20--v2 .ab-accordion__heading {
  font-family: Circular, sans-serif;
  font-weight: 500;
  font-size: 19px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #000000;
}
.AB-MMI20--v2 .ab-accordion__chevron {
  margin-top: 20px;
  will-change: margin-top;
  transition: margin-top 0.3s ease-in-out;
}
.AB-MMI20--v2 .ab-accordion__chevron:after {
  content: "";
  display: block;
  width: 22px;
  height: 9px;
  background: url("https://magicmind.com/cdn/shop/files/arrow-down.svg?v=1770640687&width=66")
    center/contain no-repeat;
  transition: all 0.3s ease-in-out;
}
.AB-MMI20--v2 .ab-accordion__info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  will-change: height;
}
.AB-MMI20--v2 .ab-accordion__info-title {
  font-family:
    Akkurat Mono,
    sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  letter-spacing: 2%;
  color: #000000;
}
.AB-MMI20--v2 .ab-accordion__info-exclusive {
  height: 19px;
  border-radius: 2px;
  padding-top: 3px;
  background-color: #00a087;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family:
    Akkurat Mono,
    sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 120%;
  letter-spacing: 10%;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
}
.AB-MMI20--v2 .ab-accordion__info-sub-title {
  font-family: Circular, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0;
  color: #000000;
}
.AB-MMI20--v2 .ab-accordion__info-content {
  font-family: Circular, sans-serif;
  font-weight: 450;
  font-size: 12px;
  line-height: 120%;
  letter-spacing: 0;
  color: #000000;
}
.AB-MMI20--v2 .ab-accordion.ab-accordion--expanded .ab-accordion__chevron {
  margin-top: 17px;
}
.AB-MMI20--v2
  .ab-accordion.ab-accordion--expanded
  .ab-accordion__chevron:after {
  width: 14px;
  height: 14px;
  background: url('data:image/svg+xml,<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.353516 14.3535L7.35352 7.35352L14.3535 0.353516" stroke="%2305060A"/><path d="M14.3535 14.3535L7.35352 7.35352L0.353516 0.353516" stroke="%2305060A"/></svg>')
    center/contain no-repeat;
  transform: rotate(-180deg);
}
.AB-MMI20--v2 .ab-accordion.ab-accordion--expanded .ab-accordion__middle {
  display: flex;
  flex-direction: column;
}
.AB-MMI20--v2 .ab-accordion.ab-accordion--expanded .ab-accordion__head {
  height: 50px;
}
.AB-MMI20--v2 .ab-accordion.ab-accordion--expanded .ab-accordion__info {
  height: 100%;
  max-height: 1200px;
}
@media screen and (min-width: 1200px) {
  .AB-MMI20--v2 .ab-accordion-grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
  .AB-MMI20--v2 .ab-accordion__left img {
    width: 50px;
    min-width: 50px;
    height: 50px;
    min-height: 50px;
    object-fit: contain;
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

Test container: https://marketer.monetate.net/control/a-d6198f6f/p/magicmind.com/experience/2101827#c2639836:what

Preview including all experiences: 
control: https://marketer.monetate.net/control/preview/13487/VRCQIRJ5HH82WSRHVVHLYTD22SM0JFJT/20-product-move-up-ingredients-btf
v1: https://marketer.monetate.net/control/preview/13487/IMMA1FQ0ZI1VP1ROI8G24F6BA2PDXIVA/20-product-move-up-ingredients-btf
v2: https://marketer.monetate.net/control/preview/13487/23WS0EW2TBFF1XZKGKPF6NG22BW8TTYU/20-product-move-up-ingredients-btf


Preview excluding all experiences:
control: https://marketer.monetate.net/control/preview/13487/K048RNXDRVU7BWJAP2ANDCYC43Q142SB/20-product-move-up-ingredients-btf
v1: https://marketer.monetate.net/control/preview/13487/ANX5YNXHPC7PJ4KUFSQGKSM4SZGBOD5X/20-product-move-up-ingredients-btf
v2: https://marketer.monetate.net/control/preview/13487/Y41T6WH20FT9NTCXN2XOEL973RTZDC0C/20-product-move-up-ingredients-btf


*/

(async () => {
  const TEST_ID = "MMI20";
  const VARIANT_ID = "V1"; /* Control, V1, V2 */

  function logInfo(message) {
    console.log(
      `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
      "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
      "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
      message,
    );
  }

  logInfo("fired");

  const TEST_CONFIG = {
    client: "Acadia",
    project: "Magic Mind",
    site_url: "https://magicmind.com",
    test_name: "MMI20: [PRODUCT] Move Up Ingredients BTF (2) SET UP TEST",
    page_initials: "AB-MMI20",
    test_variation: 1 /* 0, 1, 2 */,
    test_version: 0.0002,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  function fireGA4Event(eventName, eventLabel = "") {
    logInfo(`fireGA4Event: ${eventName}, ${eventLabel}`);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "GA4event",
      "ga4-event-name": "cro_event",
      "ga4-event-p1-name": "event_category",
      "ga4-event-p1-value": eventName,
      "ga4-event-p2-name": "event_label",
      "ga4-event-p2-value": eventLabel,
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
    return o ? s.querySelector(o) : document.querySelector(s);
  }

  function clickFunction() {
    // Control Accordion
    q(
      ".shopify-section.ingredients-slider-v2 component-accordions",
    )?.addEventListener("click", (e) => {
      const accordion = e.target.closest(".accordion__item");
      if (accordion) {
        fireGA4Event(
          "MM120_IngredientClick",
          q(accordion, ".ingredients-v2__block-btn").textContent.trim(),
        );
      }
    });

    // V2 Accordion
    q(".ab-accordion-grid-container")?.addEventListener("click", (e) => {
      const accordion = e.target.closest(".ab-accordion");
      if (accordion && !e.target.closest("a, .ab-accordion__info-exclusive")) {
        accordion.classList.toggle("ab-accordion--expanded");
        fireGA4Event(
          "MM120_IngredientClick",
          q(accordion, ".ab-accordion__heading").textContent.trim(),
        );
      }

      if (e.target.closest(".ab-accordion__info-exclusive")) {
        q("component-accordions .ingredients-v2__open-modal-btn").click();
      }
    });
  }

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);

    q(".shopify-section.ingredients-slider-v2").insertAdjacentElement(
      "afterend",
      q(".shopify-section.product-benefits"),
    );
    q(".shopify-section.ingredients-slider-v2").insertAdjacentElement(
      "afterend",
      q(".shopify-section.logos"),
    );
    clickFunction();
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(".shopify-section.product-benefits") &&
      q(".shopify-section.logos") &&
      q(".shopify-section.ingredients-slider-v2")
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
