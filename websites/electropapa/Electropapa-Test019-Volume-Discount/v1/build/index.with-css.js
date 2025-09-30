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
  padding: 13px 0px 14px;
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
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: right;
  vertical-align: middle;
  color: #4a545b;
}
.AB-TEST-019 .ab-total-price {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5px;
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
  min-width: 139px;
}
.AB-TEST-019 .line-item-quantity {
  display: flex;
  justify-content: flex-start;
  align-items: end;
}
@media screen and (min-width: 991px) {
  .AB-TEST-019 .ab-celebration-message-container {
    display: block;
    padding: 13px 4px 14px;
    white-space: nowrap;
  }
}

.AB-TEST-019--v1 .product-detail-tax-link {
  display: none;
}
.AB-TEST-019--v1.AB-TEST-019--show-volume-discount-modal {
  overflow: hidden;
  padding-right: 15px;
}
.AB-TEST-019--v1.AB-TEST-019--show-volume-discount-modal
  .ab-quantity-modal-layout {
  opacity: 1;
  z-index: 1000;
}
.AB-TEST-019--v1 .ab-quantity-modal-layout {
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;
  transition: all 0.3s ease-in-out;
}
.AB-TEST-019--v1 .ab-quantity-modal-backdrop {
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5882352941);
}
.AB-TEST-019--v1 .ab-quantity-modal {
  width: 100%;
  max-width: 456px;
  height: max-content;
  position: absolute;
  z-index: 1;
  top: 20px;
  left: 0;
  right: 0;
  margin: auto;
  padding-left: 10px;
  padding-right: 10px;
}
.AB-TEST-019--v1 .ab-quantity-modal__container {
  position: relative;
  background: #fff;
  border-radius: 7px;
  padding: 40px 20px 20px;
}
.AB-TEST-019--v1 .ab-quantity-modal__close-cta {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5px;
  height: 5px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: #4a545b;
}
.AB-TEST-019--v1 .ab-quantity-modal__heading {
  min-height: 33px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 21px;
  letter-spacing: 0.5px;
  text-align: center;
  vertical-align: middle;
  color: #47b4eb;
}
.AB-TEST-019--v1 .ab-quantity-modal__sub-heading {
  min-height: 21px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: #4a545b;
  margin-bottom: 15px;
}
@media screen and (min-width: 768px) {
  .AB-TEST-019--v1 .ab-quantity-modal {
    top: 100px;
    padding-left: 0;
    padding-right: 0;
  }
  .AB-TEST-019--v1 .ab-quantity-modal__container {
    padding: 20px 30px 28px;
  }
  .AB-TEST-019--v1 .ab-quantity-modal__heading {
    line-height: 33px;
  }
}
.AB-TEST-019--v1 .ab-quantity-dropdown-layout {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.AB-TEST-019--v1 ul.ab-quantity-dropdown-options {
  width: 100%;
  max-width: 220px;
  list-style: none;
  margin: 0;
  padding: 0;
  user-select: none;
  border: 1px solid #47b4eb;
  border-radius: 4px;
  transition: all 0.3s;
}
.AB-TEST-019--v1 li.ab-quantity-dropdown-option {
  user-select: none;
  padding: 6px 9px 5px 30px;
  margin-left: 0;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.AB-TEST-019--v1 li.ab-quantity-dropdown-option:not(:last-child) {
  border-bottom: 0.5px solid #d8d8d8;
}
.AB-TEST-019--v1 .ab-quantity-dropdown-option__value {
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #4a545b;
}
.AB-TEST-019--v1
  li.ab-quantity-dropdown-option:first-child
  .ab-quantity-dropdown-option__green-badge {
  display: none;
}
.AB-TEST-019--v1 .ab-quantity-dropdown-option__green-badge {
  width: 68px;
  height: 22px;
  background: #3cc261;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: #ffffff;
}
.AB-TEST-019--v1 .ab-quantity-dropdown-option__ten-plus-badge {
  font-family: Inter, sans-serif;
  font-weight: 300;
  font-style: Italic;
  font-size: 8px;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: #4a545b;
}
.AB-TEST-019--v1
  .product-detail-delivery-information
  > .product-delivery-available {
  display: none;
}
.AB-TEST-019--v1 .ab-free-delivery-txt-cta-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
}
.AB-TEST-019--v1 .ab-free-delivery-txt-cta {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
.AB-TEST-019--v1 .ab-free-delivery-txt-cta .high-availability {
  text-decoration: underline;
  text-decoration-color: #3cc261;
  text-underline-offset: 3px;
}
.AB-TEST-019--v1 .ab-volume-discount-modal-cta {
  cursor: pointer;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 12.3px;
  line-height: 18.38px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #47b4eb;
  text-decoration: underline;
  text-underline-offset: 2px;
}
@media screen and (min-width: 768px) {
  .AB-TEST-019--v1 .ab-quantity-dropdown-select:after {
    right: 29px;
  }
  .AB-TEST-019--v1 .ab-free-delivery-txt-cta-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
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

ControL: https://electropapa.com/de/e-bike-akku-als-ersatz-fuer-samsung-gd-ssdi-e24b-sdi-2510b-7inr19-65-4-10inr19-65-4-8-8-ah-24v-li-ion-800108614?_conv_eforce=1004170195.1004401762&utm_campaign=qa5 
V1: https://electropapa.com/de/e-bike-akku-als-ersatz-fuer-samsung-gd-ssdi-e24b-sdi-2510b-7inr19-65-4-10inr19-65-4-8-8-ah-24v-li-ion-800108614?_conv_eforce=1004170195.1004401763&utm_campaign=qa5 
v2: https://electropapa.com/de/e-bike-akku-als-ersatz-fuer-samsung-gd-ssdi-e24b-sdi-2510b-7inr19-65-4-10inr19-65-4-8-8-ah-24v-li-ion-800108614?_conv_eforce=1004170195.1004401764&utm_campaign=qa5 

*/

(() => {
  const TEST_CONFIG = {
    client: "Netzproduzenten",
    project: "Project Name",
    site_url: "https://electropapa.com/de",
    test_name:
      "Test019 [Electropapa] A/B/C - Followup016 - PDS & Side Cart - Textlink Popup and Volume discount nudge cart",
    page_initials: "AB-TEST-019",
    test_variation: 1 /* 1, 2 */,
    test_version: 0.0002,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;
  const BODY_CLASSLIST = [
    page_initials,
    `${page_initials}--v${test_variation}`,
    `${page_initials}--version-${test_version}`,
  ];

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
    return [...document.querySelectorAll(s)];
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

  function calculateOriginalPrice(offerPrice, quantity) {
    const percentage_by_quantity = [0, 0, 5, 5, 6, 6, 8, 8, 8, 8, 10];
    const discount_percentage =
      quantity <= 10
        ? percentage_by_quantity[quantity]
        : percentage_by_quantity[10];

    // Calculate original price from discounted price
    const originalPrice = offerPrice / (1 - discount_percentage / 100);
    return originalPrice;
  }

  function getPriceData(targetNode) {
    const offerPriceContainer = q(targetNode, ".line-item-total-price-value");
    const offerPrice = parseAmount(offerPriceContainer); // This is DISCOUNTED price
    const quantity =
      +q(targetNode, "input.quantity-selector-group-input")?.value || 0;

    const totalPrice = calculateOriginalPrice(offerPrice, quantity);
    const discount = totalPrice - offerPrice;

    return {
      totalPrice, // Original main price
      offerPrice, // Discounted price
      discount, // Actual amount saved
      quantity,
    };
  }

  function getCelebrationTxt(targetNode) {
    const { discount, quantity } = getPriceData(targetNode);
    const multi_item_txt = `Glückwunsch! Du sparst ${formatPriceToGerman(discount, true)} durch unseren Mengenrabatt.`;

    {
      return quantity <= 1 ? "" : multi_item_txt;
    }
  }

  function createReducedPriceLayout(targetNode) {
    const { totalPrice, quantity } = getPriceData(targetNode);
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

  function createCelebrationMessageLayout(targetNode) {
    const { quantity } = getPriceData(targetNode);

    if (!q(targetNode, ".ab-celebration-message-container")) {
      targetNode.insertAdjacentHTML(
        "beforeend",
        /* HTML */
        `<div
          class="ab-celebration-message-container ${quantity <= 1
            ? "ab-celebration-message-container--viewing-for-single"
            : ""}"
        >
          ${getCelebrationTxt(targetNode)}
        </div>`,
      );

      if (quantity > 1) {
        fireConvertGoal("Shows Celebration Message | JS", 1004106272);
      }
    }
  }

  function createCelebrationMessageComponent() {
    const targetNodes = qq(".offcanvas-cart-items .line-item");
    targetNodes.forEach((targetNode) => {
      createReducedPriceLayout(targetNode);
      createCelebrationMessageLayout(targetNode);
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

  function showHideVolumeDiscountModal(action /* show, hide */) {
    const body = document.body;
    const className = BODY_CLASSLIST[0] + "--show-volume-discount-modal";
    if (action === "show") {
      body.classList.add(className);
    } else if (action === "hide") {
      body.classList.remove(className);
      //
    }
  }

  function clickEvents() {
    document.body.addEventListener("click", (e) => {
      // ==== Variation 1 ====
      if (e.target.closest(".ab-free-delivery-txt-cta")) {
        q(".product-detail-tax-link").click();
      }

      if (e.target.closest(".ab-volume-discount-modal-cta")) {
        showHideVolumeDiscountModal("show");
      }

      if (
        e.target.closest(".ab-quantity-modal__close-cta") ||
        (e.target.closest(".ab-quantity-modal-backdrop") &&
          !e.target.closest(".ab-quantity-modal"))
      ) {
        showHideVolumeDiscountModal("hide");
      }

      if (e.target.closest(".ab-quantity-dropdown-option")) {
        const curr = e.target.closest(".ab-quantity-dropdown-option");
        const selectedValue = curr.getAttribute("value");
        const targetInput = q(
          ".product-detail-quantity-group.quantity-selector-group input.product-detail-quantity-input",
        );
        targetInput.value = selectedValue;
        showHideVolumeDiscountModal("hide");
      }
    });
  }

  // ==== Variation 1 ====
  function createV1PriceModal() {
    const SELECT_OPTIONS = [
      {
        value: 1,
        label: 1,
        discount_percentage: 0,
      },
      {
        value: 2,
        label: 2,
        discount_percentage: 5,
      },
      {
        value: 3,
        label: 3,
        discount_percentage: 5,
      },
      {
        value: 4,
        label: 4,
        discount_percentage: 6,
      },
      {
        value: 5,
        label: 5,
        discount_percentage: 6,
      },
      {
        value: 6,
        label: 6,
        discount_percentage: 8,
      },
      {
        value: 7,
        label: 7,
        discount_percentage: 8,
      },
      {
        value: 8,
        label: 8,
        discount_percentage: 8,
      },
      {
        value: 9,
        label: 9,
        discount_percentage: 8,
      },
      {
        value: 10,
        label: 10,
        discount_percentage: 10,
      },
      {
        value: 11,
        label: "11+",
        discount_percentage: 10,
      },
    ];

    const selector = ".product-detail-tax-link, .product-delivery-available";

    waitForElement(
      () => qq(selector).length === 2,
      () => {
        // ======  Modal Cta Link ======
        q(".product-detail-tax-link").insertAdjacentHTML(
          "afterend",
          `<span class="ab-volume-discount-modal-cta">Sparpreis bei höherer Stückzahl verfügbar</span>`,
        );

        // ====== Delivery Layout ======
        q(".product-delivery-available").insertAdjacentHTML(
          "afterend",
          /* HTML */ `
            <div class="ab-free-delivery-txt-cta-container">
              <div class="product-delivery-available">
                <div>
                  <span class="delivery-status-indicator bg-success"></span>
                </div>
                <div class="high-availability">
                  <span class="text-success fw-bold">Auf Lager</span>
                </div>
              </div>
              <div class="product-delivery-available ab-free-delivery-txt-cta">
                <div>
                  <span class="delivery-status-indicator bg-success"></span>
                </div>
                <div class="high-availability">
                  <span class="text-success fw-bold"
                    >Kostenfreie Lieferung in DE</span
                  >
                </div>
              </div>
            </div>
          `,
        );

        // ====== Modal Layout ======
        q("body").insertAdjacentHTML(
          "afterbegin",
          /* HTML */ `
            <!-- MODAL  -->
            <div class="ab-quantity-modal-layout">
              <div class="ab-quantity-modal-backdrop"></div>
              <div class="ab-quantity-modal">
                <div class="ab-quantity-modal__container">
                  <div
                    class="ab-quantity-modal__close-cta btn-close close"
                  ></div>
                  <div class="ab-quantity-modal__heading">
                    Jetzt zum Sparpreis immer Ersatz parat haben
                  </div>
                  <div class="ab-quantity-modal__sub-heading">
                    Clever sein und sparen!
                  </div>
                  <div class="ab-quantity-dropdown-layout">
                    <ul class="ab-quantity-dropdown-options">
                      ${SELECT_OPTIONS.map(
                        ({ value, label, discount_percentage }) => /* HTML */ `
                          <li
                            class="ab-quantity-dropdown-option"
                            value="${value}"
                          >
                            <span class="ab-quantity-dropdown-option__value"
                              >${label} Stk.</span
                            >
                            ${value <= 10
                              ? `<span class="ab-quantity-dropdown-option__green-badge">Spare ${discount_percentage}%</span>`
                              : `<span class="ab-quantity-dropdown-option__ten-plus-badge"><i>Bitte Mail an uns</i></span>`}
                          </li>
                        `,
                      ).join("")}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          `,
        );
      },
    );
  }

  function init() {
    document.body.classList.add(...BODY_CLASSLIST);
    console.table(TEST_CONFIG);

    // Observing body -> when side cart appears in dom -> Observing Side Cart
    bodyObserver();

    // Handle when test buckets on side cart open
    cartObserver();

    // Other functionalities
    createV1PriceModal();
    clickEvents();
  }

  function hasAllTargetElements() {
    return !!document.querySelector(
      `body:not(.${BODY_CLASSLIST[0]}):not(.${BODY_CLASSLIST[1]})`,
    );
  }

  waitForElement(hasAllTargetElements, init);
})();
