(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-TEST-019 .ab-celebration-message-container:empty {
  display: none !important;
}
.AB-TEST-019 .ab-celebration-message-container {
  display: block;
  padding: 13px 0 14px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #03a616;
  text-align: left;
}
.AB-TEST-019 .line-item-total-price.ab-added-reduced-total {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
.AB-TEST-019
  .line-item-total-price.ab-added-reduced-total
  .line-item-total-price-value {
  margin-top: 0.2rem;
  font-weight: 400;
}
.AB-TEST-019 .ab-total-price {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: right;
  vertical-align: middle;
  color: #4a545b;
  text-decoration: line-through;
}
.AB-TEST-019 .is-offcanvas .line-item-quantity-select-wrapper {
  min-width: 145px;
}
.AB-TEST-019 .line-item-quantity {
  display: flex;
  justify-content: flex-start;
  align-items: end;
}
@media screen and (min-width: 991px) {
  .AB-TEST-019 .ab-celebration-message-container {
    padding: 13px 0px 14px;
  }
}

.AB-TEST-019--v2 .ab-hidden {
  display: none;
}
.AB-TEST-019--v2 .row.line-item-row {
  padding-bottom: 0.5rem;
}
.AB-TEST-019--v2 .line-item-info {
  margin-bottom: 0 !important;
}
.AB-TEST-019--v2 .is-offcanvas .line-item-remove {
  height: auto;
}
.AB-TEST-019--v2 .line-item-remove {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.AB-TEST-019--v2 .line-item-remove .line-item-total-price.line-item-price {
  margin-left: auto;
  margin-top: 0;
  margin-bottom: 9px;
}
.AB-TEST-019--v2 .ab-single-item-progress-btn-container {
  display: flex;
  flex-direction: column;
}
.AB-TEST-019--v2 .ab-single-item-progress-btn-container__heading {
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #4a545b;
  min-height: 21px;
  margin-bottom: 11px;
}
.AB-TEST-019--v2 .ab-single-item-progress-btn-container__progress-bar {
  width: 100%;
  height: 5px;
  border-radius: 2px;
  background-color: #bcc1c7;
  position: relative;
  margin-bottom: 16px;
}
.AB-TEST-019--v2 .ab-single-item-progress-btn-container__progress-bar::before {
  content: "";
  top: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  width: 0%; /* 30, 51, 100 */
  height: 5px;
  background: #00a816;
  border-radius: 2px;
  transition: width 0.3s;
}
.AB-TEST-019--v2 .ab-single-item-progress-btn-container__progress-bar__pointer {
  position: absolute;
  background: url('data:image/svg+xml,<svg class="triangle" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.93326 11.5753C5.6044 12.4297 4.3956 12.4297 4.06674 11.5753L0.327008 1.85921C0.0748835 1.20417 0.55838 0.5 1.26027 0.5H8.73974C9.44162 0.5 9.92512 1.20417 9.67299 1.85921L5.93326 11.5753Z" fill="%23BCC1C7" rx="5"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  width: 12px;
  height: 18px;
  bottom: -13px;
  z-index: -1;
}
.AB-TEST-019--v2
  .ab-single-item-progress-btn-container__progress-bar__pointer--2 {
  left: 49%;
}
.AB-TEST-019--v2
  .ab-single-item-progress-btn-container__progress-bar__pointer--3 {
  left: 82%;
}
.AB-TEST-019--v2
  .ab-single-item-progress-btn-container__progress-bar[step="1"]::before {
  width: 30%;
}
.AB-TEST-019--v2
  .ab-single-item-progress-btn-container__progress-bar[step="2"]::before {
  width: 50.6%;
}
.AB-TEST-019--v2
  .ab-single-item-progress-btn-container__progress-bar[step="2"]
  .ab-single-item-progress-btn-container__progress-bar__pointer--2 {
  background: url('data:image/svg+xml,<svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.93326 11.5753C5.6044 12.4297 4.3956 12.4297 4.06674 11.5753L0.327008 1.85921C0.0748835 1.20417 0.55838 0.5 1.26027 0.5H8.73974C9.44162 0.5 9.92512 1.20417 9.67299 1.85921L5.93326 11.5753Z" fill="url(%23gradient)"/><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%2300a816"/><stop offset="50%" stop-color="%2300a816"/><stop offset="50%" stop-color="%23BCC1C7"/><stop offset="100%" stop-color="%23BCC1C7"/></linearGradient></defs></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  width: 12px;
  height: 18px;
}
.AB-TEST-019--v2
  .ab-single-item-progress-btn-container__progress-bar[step="3"]::before {
  width: 100%;
}
.AB-TEST-019--v2
  .ab-single-item-progress-btn-container__progress-bar[step="3"]
  .ab-single-item-progress-btn-container__progress-bar__pointer--2,
.AB-TEST-019--v2
  .ab-single-item-progress-btn-container__progress-bar[step="3"]
  .ab-single-item-progress-btn-container__progress-bar__pointer--3 {
  background: url('data:image/svg+xml,<svg class="triangle" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.93326 11.5753C5.6044 12.4297 4.3956 12.4297 4.06674 11.5753L0.327008 1.85921C0.0748835 1.20417 0.55838 0.5 1.26027 0.5H8.73974C9.44162 0.5 9.92512 1.20417 9.67299 1.85921L5.93326 11.5753Z" fill="%2300a816" rx="5"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  width: 12px;
  height: 18px;
}
.AB-TEST-019--v2 .ab-single-item-progress-btn-container__btn-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}
.AB-TEST-019--v2 .ab-single-item-progress-btn-container__btn {
  border: 0.5px solid #47b4eb;
  border-radius: 3px;
  padding: 7px;
  width: 100%;
  height: 42px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  cursor: pointer;
}
.AB-TEST-019--v2 .ab-single-item-progress-btn-container__btn--selected {
  border-radius: 5px;
  position: relative;
}
.AB-TEST-019--v2 .ab-single-item-progress-btn-container__btn--selected::before {
  content: "";
  position: absolute;
  border: 2px solid #47b4eb;
  border-radius: 3px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.AB-TEST-019--v2 .ab-single-item-progress-btn-container__btn--selected:after {
  content: url('data:image/svg+xml,<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="11" height="11" fill="url(%23pattern0_3838_19204)"/><defs><pattern id="pattern0_3838_19204" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="%23image0_3838_19204" transform="scale(0.00390625)"/></pattern><image id="image0_3838_19204" width="256" height="256" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABWJJREFUeJzt3T+LHVUcBuDfjRENiKjYqNHCWAiCiLFIoyJYmS9gobUWgoUI4sewUWzUwkbRQiUggfgJIloIYptECxODhRL/vha7i2Jcs3v3zpyZOc9T7i5zzsB53zN7Z3a2CgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKpq1XoCMLYkt1TVg1V1dPtL56vqy9Vq9WO7WQGDSnIyyekkv+Zqv25/76nW8wQ2KMldST77j9Dv5kySO1vPGzigJI8kubCP8O+4kOR46/kDa0pyPMkPa4R/x8Ukx1qfB7BPSU4k+fEA4d/xRZLDrc8H2KMN7Pz/9nzrcwL2IJvb+f/pXJJDrc8N+B/Z/M7/Tydan98QtBqLsB3QM1V160BDPDHQcZtSAMxetm7Xnaqqmwcc5ui1f2R+FACzNsLOv+OmgY/fhAJgtkba+Xd8O8IYo1MAzNKIO/+Or0caZ1T+GpDZ2d75T9d44f+jqu5YrVbfjzTeaFwBMCsNdv6qqo+XGH6YlYHv8+/m9yQPtD536FqGecJvL15tfe7QtYbhfzeJz8mglbS57E+SD5Jc3/r8oVvCD50SfuiU8EOnhB86JfzQKeGHTgk/dEr4oVPCD50SfuiU8EOnhB86JfzQKeGHTgk/dEr4oVPCD50SfuiU8EOnhB86JfzQKeGHTgk/dEr4oVPCD50SfuiU8C9Hl//4MMk9VfVwVR3d/tL5qjq7Wq3OtZvVPCQ5UVWfVtXNIw/9YVU9vVqtfht5XJYgyaEkzyY5u8vu8uf2955Jcqj1fKco7f5Lr52f9SW5L8nn+1hwZ5Mcaz3vKYnwM0dJHktyaY2FdzHJ463nPwURfuYoyf1JLh9gAf6c5MnW59FSfODHHCW5Mck3G1iI3ZZA7PzMVZKXN7gguyuB2PmZqySHk3y/4YXZTQnEzs+cJXlioAW6+BKInb8rS73f/ehAxz1SVR8ttQSy9ZDPmaq6deShPeTTyFIL4K4Bj73IEkhyvKpOlSf8urLUAjgywvEXUwJ2/n4ttQC+G2GMI1X1SZKTI4w1GDt/35ZaAF+NNM4NVfX+XK8E7PwsUpLbkvw24ifYV+Z2JRCf9rNkSd4beWHP5hZh3Odn6ZLcm+SXkRf45K8EYuenF0lebLDQJ1sCEX56k+SNBgt+cr8OxGU/PUqySpsSmMyVQOz89Cwdl0CEH/osgQg//C0dlUCEH66WDkogwg+7y4JLIMIP15YFlkCEH/YuCyqBCD/sXxZQAhF+WF9mXAIRfji4zLAEIvywOZlRCUT4YfMygxKI8MNwMuESiPDD8DLBEojww3gyoRKI8MP4MoESiPBDO0kOJXmrQQB/TvJSvMmHgaxaT2Aukqyq6vWqeq71XEbgvf2dUAD70EkJCH9HFMA+LbwEhL8zCmANCy0B4e+QAljTwkpA+DulAA5gISUg/LCutHtOYBPc6oODyjxLQPhhUzKvEhB+2LTMowSEH4aSaZeA8MPQMs0SEH4YS6ZVAsIPY8s0SkD4oZXGJSD80FqjEhB+mIqRS0D4YWpGKgHhh6kauASEH6ZuoBIQfpiLDZeA8MPcbKgEhB/mKluvHH9tzfC/LfywAEleSPLTHoN/Jckr2XojEbAESe5O8maSi7sE/3KSd5Icaz1XlsEOMkFJrquqh6rqzqq6vaouVdV3VfWFd/cBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/cXslh0bhQ08pwAAAAASUVORK5CYII="/></defs></svg>');
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #47b4eb;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -9px;
  right: 3px;
}
.AB-TEST-019--v2 .ab-single-item-progress-btn-container__btn__label {
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  vertical-align: middle;
  color: #4a545b;
  height: 17px;
}
.AB-TEST-019--v2 .ab-single-item-progress-btn-container__btn__badge {
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  vertical-align: middle;
  color: #00a816;
}
.AB-TEST-019--v2 .ab-single-item-progress-btn-container__btn__badge:empty {
  display: none;
}
@media screen and (min-width: 991px) {
  .AB-TEST-019--v2 .ab-single-item-progress-btn-container__heading {
    font-size: 14px;
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
Ticket: https://trello.com/c/pVg0rKnQ/4093-test019-electropapa-a-b-c-followup016-pds-side-cart-textlink-popup-and-volume-discount-nudge-cart#
Test doc: https://docs.google.com/document/d/13OFhHZ9n1KU_rWYOWWDacs2jVkpWrrBV2Yt5f6zHNlA/edit?tab=t.0

Test container: https://app.convert.com/accounts/1004828/projects/10047105/experiences/1004170195/summary

V1: https://electropapa.com/de/e-bike-akku-als-ersatz-fuer-samsung-gd-ssdi-e24b-sdi-2510b-7inr19-65-4-10inr19-65-4-8-8-ah-24v-li-ion-800108614?_conv_eforce=1004170195.1004401763&utm_campaign=qa5
v2: https://electropapa.com/de/e-bike-akku-als-ersatz-fuer-samsung-gd-ssdi-e24b-sdi-2510b-7inr19-65-4-10inr19-65-4-8-8-ah-24v-li-ion-800108614?_conv_eforce=1004170195.1004401764&utm_campaign=qa5

without forced: https://electropapa.com/de/e-bike-akku-als-ersatz-fuer-samsung-gd-ssdi-e24b-sdi-2510b-7inr19-65-4-10inr19-65-4-8-8-ah-24v-li-ion-800108614?utm_campaign=qa5

*/

(() => {
  const TEST_CONFIG = {
    client: "Netzproduzenten",
    project: "Project Name",
    site_url: "https://electropapa.com/de",
    test_name:
      "Test019 [Electropapa] A/B/C - Followup016 - PDS & Side Cart - Textlink Popup and Volume discount nudge cart",
    page_initials: "AB-TEST-019",
    test_variation: 2 /* 1, 2 */,
    test_version: 0.0006,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;
  const BODY_CLASSLIST = [
    page_initials,
    `${page_initials}--v${test_variation}`,
    `${page_initials}--version-${test_version}`,
  ];

  async function fetchAndParseURLApi(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const html = await response.text();
      const dom = new DOMParser().parseFromString(html, "text/html");
      return dom;
    } catch (error) {
      // console.error("Fetch and parse failed:", error);
      return null;
    }
  }

  function waitForElement(predicate, callback, timer = 20000, frequency = 150) {
    if (timer <= 0) {
      console.warn(
        `Timeout reached while waiting for condition: ${predicate.toString()}`,
      );
      return;
    } else if (predicate && predicate()) {
      callback();
    } else {
      setTimeout(
        () => waitForElement(predicate, callback, timer - frequency, frequency),
        frequency,
      );
    }
  }

  function q(s, o) {
    return o ? s.querySelector(o) : document.querySelector(s);
  }

  function qq(s, o) {
    return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
  }

  function fireConvertGoal(goalName, goalId) {
    console.log("Triggered convert goal: ", goalName, goalId);
    window._conv_q = window._conv_q || [];
    _conv_q.push(["triggerConversion", goalId]);
  }

  function mutationObserverFunction(selector, callback, config) {
    waitForElement(
      () => q(selector),
      () => {
        const targetNode = q(selector);
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
        return observer;
      },
    );
  }

  function parseAmount(targetNode) {
    if (!targetNode) return 0;
    return parseFloat(
      targetNode.innerText
        ?.replace(".", "")
        ?.replace(",", ".")
        ?.replace("€", ""),
    );
  }

  function formatPriceToGerman(price, trimInnerSpace = false) {
    const formattedPriceTxt = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(price);

    return trimInnerSpace
      ? formattedPriceTxt.replaceAll("\u00A0", "")
      : formattedPriceTxt;
  }

  async function getProductOriginalPricePerQuantity(url) {
    return fetch(url)
      .then((res) => res.text())
      .then((resTxt) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(resTxt, "text/html");
        const priceNode = doc.querySelector(".product-detail-price");
        if (priceNode) {
          return parseAmount(priceNode);
        } else {
          throw new Error("Price element not found");
        }
      });
  }

  async function getPriceData(targetNode) {
    const productUrl =
      q(targetNode, "a.line-item-label")?.getAttribute("href") || "";

    const dom = await fetchAndParseURLApi(productUrl);

    const offerPriceContainer = q(targetNode, ".line-item-total-price-value");
    const offerPrice = parseAmount(offerPriceContainer); // This is DISCOUNTED price
    const quantity =
      +q(targetNode, "input.quantity-selector-group-input")?.value || 0;

    // const totalPrice = calculateOriginalPrice(offerPrice, quantity);
    const hasVolumeDiscountTable = !!q(dom, ".table.product-block-prices-grid");
    const totalPricePerQuantity =
      await getProductOriginalPricePerQuantity(productUrl);
    const totalPrice = totalPricePerQuantity * quantity;
    const discount = totalPrice - offerPrice;

    return {
      hasVolumeDiscountTable,
      totalPrice, // Original main price
      offerPrice, // Discounted price
      discount, // Actual amount saved
      quantity,
    };
  }

  function getCelebrationTxt({
    targetNode,
    totalPrice,
    quantity,
    discount,
    offerPrice,
  }) {
    const single_item_txt =
      "<b>Clever sein und sparen:</b>&nbspAb 2 Stück mindestens 5% Rabatt";
    const multi_item_txt = `Glückwunsch! Du sparst ${formatPriceToGerman(discount, true)} durch unseren Mengenrabatt.`;

    {
      return quantity <= 1 ? single_item_txt : multi_item_txt;
    }
  }

  function createReducedPriceLayout({
    targetNode,
    totalPrice,
    quantity,
    discount,
    offerPrice,
  }) {
    const parentNode = q(
      targetNode,
      ".line-item-total-price:not(.ab-added-reduced-total)",
    );

    if (quantity > 1 && parentNode) {
      parentNode.classList.add("ab-added-reduced-total");
      // q(parentNode, ".line-item-total-price-value").innerText = formatPriceToGerman(totalPrice);
      parentNode.insertAdjacentHTML(
        "afterbegin",
        /* HTML */ `<div class="ab-total-price ">
          ${formatPriceToGerman(totalPrice)}
        </div>`,
      );
    }
  }

  function createSingleItemProgressBtnLayout() {
    const layout = /* HTML */ `
      <div class="ab-single-item-progress-btn-container">
        <div class="ab-single-item-progress-btn-container__heading">
          Jetzt zum Sparpreis immer Ersatz parat haben
        </div>
        <div
          class="ab-single-item-progress-btn-container__progress-bar"
          step="1"
        >
          <div
            class="ab-single-item-progress-btn-container__progress-bar__pointer ab-single-item-progress-btn-container__progress-bar__pointer--2"
          ></div>
          <div
            class="ab-single-item-progress-btn-container__progress-bar__pointer ab-single-item-progress-btn-container__progress-bar__pointer--3"
          ></div>
        </div>
        <div class="ab-single-item-progress-btn-container__btn-container">
          <div
            class="ab-single-item-progress-btn-container__btn ab-single-item-progress-btn-container__btn--selected"
            quantity="1"
          >
            <span class="ab-single-item-progress-btn-container__btn__label"
              >1 Stück</span
            >
            <span
              class="ab-single-item-progress-btn-container__btn__badge"
            ></span>
          </div>
          <div class="ab-single-item-progress-btn-container__btn" quantity="2">
            <span class="ab-single-item-progress-btn-container__btn__label"
              >2 Stück</span
            >
            <span class="ab-single-item-progress-btn-container__btn__badge"
              >Spare 5%</span
            >
          </div>
          <div class="ab-single-item-progress-btn-container__btn" quantity="4">
            <span class="ab-single-item-progress-btn-container__btn__label"
              >4 Stück</span
            >
            <span class="ab-single-item-progress-btn-container__btn__badge"
              >Spare 6%</span
            >
          </div>
        </div>
      </div>
    `;

    return layout;
  }

  function createCelebrationMessageLayoutV2({
    targetNode,
    totalPrice,
    quantity,
    discount,
    offerPrice,
  }) {
    if (
      !q(targetNode, ".ab-single-item-progress-btn-container") &&
      quantity < 2
    ) {
      q(targetNode, ".line-item-quantity").classList.add("ab-hidden");
      q(targetNode, ".line-item-remove").insertAdjacentElement(
        "beforeend",
        q(targetNode, ".line-item-total-price.line-item-price"),
      );
      targetNode.insertAdjacentHTML(
        "beforeend",
        createSingleItemProgressBtnLayout(),
      );
    }

    if (
      !q(targetNode, ".ab-celebration-message-container") &&
      quantity > 1 &&
      discount !== 0
    ) {
      targetNode.insertAdjacentHTML(
        "beforeend",
        /* HTML */
        `<div class="ab-celebration-message-container">
          ${getCelebrationTxt({
            targetNode,
            totalPrice,
            quantity,
            discount,
            offerPrice,
          })}
        </div>`,
      );

      fireConvertGoal("Shows Celebration Message | JS", 1004106272);
    }
  }

  function createCelebrationMessageComponent() {
    const targetNodes = qq(".offcanvas-cart-items .line-item");
    targetNodes.forEach(async (targetNode) => {
      const {
        hasVolumeDiscountTable,
        totalPrice,
        quantity,
        discount,
        offerPrice,
      } = await getPriceData(targetNode);

      if (!hasVolumeDiscountTable) return;

      createReducedPriceLayout({
        targetNode,
        totalPrice,
        quantity,
        discount,
        offerPrice,
      });
      createCelebrationMessageLayoutV2({
        targetNode,
        totalPrice,
        quantity,
        discount,
        offerPrice,
      });
    });
  }

  function cartObserverCallBack(recordsList, observer) {
    recordsList.forEach((record) => {
      if (record.addedNodes.length > 0) {
        const offcanvasBody = Array.from(record.addedNodes).find(
          (node) =>
            node.nodeType === 1 && node.classList?.contains("offcanvas-body"),
        );
        if (
          offcanvasBody &&
          offcanvasBody.querySelector(".offcanvas-cart-items .line-item")
        ) {
          createCelebrationMessageComponent();
        }
      }
    });
  }

  function cartObserver() {
    return mutationObserverFunction(".offcanvas", cartObserverCallBack, {
      childList: true,
      subtree: true,
    });
  }

  function bodyObserverCallback(recordsList, observer) {
    recordsList.forEach((record) => {
      if (record.addedNodes.length > 0) {
        const offcanvasNode = Array.from(record.addedNodes).find(
          (node) =>
            node.nodeType === 1 && node.classList?.contains("offcanvas"),
        );

        if (offcanvasNode) {
          cartObserver();
        }
      }
    });
  }

  function bodyObserver() {
    return mutationObserverFunction("body", bodyObserverCallback, {
      childList: true,
    });
  }

  function clickEvents() {
    document.body.addEventListener("click", (e) => {
      // ==== Variation 2 ====

      if (
        e.target.closest(
          ".ab-single-item-progress-btn-container__btn:not(.ab-single-item-progress-btn-container__btn--selected)",
        )
      ) {
        const clickedItem = e.target.closest(
          ".ab-single-item-progress-btn-container__btn:not(.ab-single-item-progress-btn-container__btn--selected)",
        );
        const quantity = clickedItem.getAttribute("quantity");
        const container = e.target.closest(
          ".ab-single-item-progress-btn-container",
        );

        qq(container, ".ab-single-item-progress-btn-container__btn").forEach(
          (item) => {
            const className =
              "ab-single-item-progress-btn-container__btn--selected";
            if (item === clickedItem) {
              item.classList.add(className);
            } else {
              item.classList.remove(className);
            }
          },
        );

        const progressBar = q(
          container,
          ".ab-single-item-progress-btn-container__progress-bar",
        );

        if (quantity === "1") {
          progressBar.setAttribute("step", 1);
        } else if (quantity === "2") {
          progressBar.setAttribute("step", 2);
        } else if (quantity === "4") {
          progressBar.setAttribute("step", 3);
        }

        const inputElement = q(
          e.target.closest(".line-item"),
          ".js-offcanvas-cart-change-quantity-number",
        );
        inputElement.value = quantity;
        const changeEvent = new Event("change", { bubbles: true });
        inputElement.dispatchEvent(changeEvent);
      }

      if (e.target.closest(".ab-quantity-dropdown-option")) {
        const curr = e.target.closest(".ab-quantity-dropdown-option");
        const selectedValue = curr.getAttribute("value");
        const targetInput = q(
          ".product-detail-quantity-group.quantity-selector-group input.product-detail-quantity-input",
        );
        targetInput.value = selectedValue;
      }
    });
  }

  function createCheckoutCrossedTotalPriceLayout(finalTotal) {
    q(".checkout-aside-summary-list").insertAdjacentHTML(
      "afterbegin",
      `<div class="col-12"><div class="ab-total-price">${formatPriceToGerman(finalTotal)}</div></div>`,
    );
  }

  function createCheckoutCelebrationMessage(finalDiscount) {
    const layout = /* HTML */ `
      <div class="col-12">
        <div class="ab-celebration-message-container ">
          Glückwunsch! Du sparst ${formatPriceToGerman(finalDiscount, true)}
          durch unseren Mengenrabatt.
        </div>
      </div>
    `;

    q(
      ".checkout-aside-summary-list .checkout-aside-summary-value:first-of-type",
    ).insertAdjacentHTML("afterend", layout);
  }

  function createCartPageLayout() {
    if (!window.location.href.includes("/checkout/cart")) return;

    waitForElement(
      () =>
        !!(
          qq(".checkout-product-table .line-item").length > 0 &&
          q(
            ".checkout-aside-summary-list .checkout-aside-summary-value:first-of-type",
          ) &&
          qq(
            ".checkout-aside-summary-list .ab-total-price, .checkout-aside-summary-list .ab-celebration-message-container",
          ).length === 0
        ),
      async () => {
        const targetNodes = qq(".checkout-product-table .line-item");

        const priceDataList = await Promise.all(
          targetNodes.map((targetNode) => getPriceData(targetNode)),
        );

        const finalTotal = priceDataList.reduce(
          (sum, { totalPrice }) => sum + totalPrice,
          0,
        );
        const finalOfferTotal = priceDataList.reduce(
          (sum, { offerPrice }) => sum + offerPrice,
          0,
        );
        const finalDiscount = finalTotal - finalOfferTotal;

        if (finalDiscount === 0) return; // No discount applied

        createCheckoutCrossedTotalPriceLayout(finalTotal);
        createCheckoutCelebrationMessage(finalDiscount);
        fireConvertGoal("Shows Celebration Message | JS", 1004106272);
      },
    );
  }

  // ==== Variation 2 ====
  function init() {
    document.body.classList.add(...BODY_CLASSLIST);
    console.table(TEST_CONFIG);
    // Observing body -> when side cart appears in dom -> Observing Side Cart
    bodyObserver();

    // Handle when test buckets on side cart open
    cartObserver();

    // Other functionalities
    clickEvents();

    // Cart page layout
    createCartPageLayout();
  }

  function hasAllTargetElements() {
    return !!document.querySelector(
      `body:not(.${BODY_CLASSLIST[0]}):not(.${BODY_CLASSLIST[1]})`,
    );
  }

  waitForElement(hasAllTargetElements, init);
})();
