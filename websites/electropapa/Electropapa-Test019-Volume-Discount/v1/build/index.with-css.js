(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-TEST-018 .ab-celebration-message-container:empty {
  display: none !important;
}
.AB-TEST-018 .ab-celebration-message-container {
  display: block;
  padding: 13px 4px 14px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #03a616;
  text-align: left;
  white-space: nowrap;
}
.AB-TEST-018 .line-item-total-price.ab-added-reduced-total {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
.AB-TEST-018
  .line-item-total-price.ab-added-reduced-total
  .line-item-total-price-value {
  text-decoration: line-through;
}
.AB-TEST-018 .ab-reduced-total-price {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: right;
  vertical-align: middle;
  color: #4a545b;
}
.AB-TEST-018 .is-offcanvas .line-item-quantity-select-wrapper {
  min-width: 139px;
}
.AB-TEST-018 .line-item-quantity {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.AB-TEST-018--v1 .product-detail-quantity-group.quantity-selector-group {
  display: none;
}
.AB-TEST-018--v1 .ab-quantity-dropdown-layout {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.AB-TEST-018--v1 .ab-quantity-dropdown-select {
  width: 100%;
  height: 41px;
  padding-left: 29px;
  padding-right: 29px;
  border: 1px solid #47b4eb;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: #4a545b;
}
.AB-TEST-018--v1 .ab-quantity-dropdown-select:after {
  content: "";
  background: url('data:image/svg+xml,<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect y="-0.00012207" width="10" height="10" fill="url(%23pattern0_3775_592)"/><defs><pattern id="pattern0_3775_592" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="%23image0_3775_592" transform="scale(0.00195312)"/></pattern><image id="image0_3775_592" width="512" height="512" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/></defs></svg>');
  width: 10px;
  height: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: auto;
  transition: all 0.3s;
  position: absolute;
  right: 15px;
}
.AB-TEST-018--v1 ul.ab-quantity-dropdown-options {
  position: absolute;
  opacity: 0;
  display: none;
  z-index: 10;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  user-select: none;
  background: #ffffff;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.3s;
}
.AB-TEST-018--v1 li.ab-quantity-dropdown-option {
  user-select: none;
  padding: 6px 9px 5px 30px;
  margin-left: 0;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.AB-TEST-018--v1 li.ab-quantity-dropdown-option:not(:last-child) {
  border-bottom: 0.5px solid #d8d8d8;
}
.AB-TEST-018--v1 .ab-quantity-dropdown-option__value {
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #4a545b;
}
.AB-TEST-018--v1
  li.ab-quantity-dropdown-option:first-child
  .ab-quantity-dropdown-option__green-badge {
  display: none;
}
.AB-TEST-018--v1 .ab-quantity-dropdown-option__green-badge {
  width: 64px;
  height: 20px;
  background: #3cc261;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: #ffffff;
}
.AB-TEST-018--v1 .ab-quantity-dropdown-option__ten-plus-badge {
  font-family: Inter, sans-serif;
  font-weight: 300;
  font-style: Italic;
  font-size: 6px;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: #4a545b;
}
.AB-TEST-018--v1
  .ab-quantity-dropdown-layout[expanded="true"]
  .ab-quantity-dropdown-select:after {
  transform: rotate(-180deg);
}
.AB-TEST-018--v1
  .ab-quantity-dropdown-layout[expanded="true"]
  ul.ab-quantity-dropdown-options {
  display: block;
  opacity: 1;
  top: 41px;
}
@media screen and (min-width: 768px) {
  .AB-TEST-018--v1 .ab-quantity-dropdown-select:after {
    right: 29px;
  }
}

.AB-TEST-018--v2
  .ab-celebration-message-container.ab-celebration-message-container--viewing-for-single {
  position: relative;
  margin-top: 18px;
  margin-bottom: 8px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 5px 5px 3px;
  background: #3cc261;
  border-radius: 2px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: #ffffff;
  text-align: center;
}
.AB-TEST-018--v2
  .ab-celebration-message-container.ab-celebration-message-container--viewing-for-single::before {
  position: absolute;
  content: "";
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none"><path d="M7.16802 2.18271C7.8674 0.585897 10.1326 0.585899 10.832 2.18271L17.2989 16.9476C17.8776 18.2691 16.9095 19.75 15.4669 19.75H2.53313C1.09047 19.75 0.122352 18.2691 0.701139 16.9476L7.16802 2.18271Z" fill="%233CC261"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 22px;
  height: 29px;
  top: -19px;
  left: 40.5%;
  opacity: 1;
  border-radius: 2px;
}
`;
      document.head.appendChild(style);
      setTimeout(() => {
        clearInterval(interval); // Clear the interval after 5 seconds
      }, 5000);
    }
  }, 100); // Check every 100ms for <head>
})();
(() => {
  const TEST_CONFIG = {
    client: "Netzproduzenten",
    project: "Project Name",
    site_url: "https://electropapa.com/de",
    test_name:
      "Test018 A/B/C - Followup016 - PDS & Side Cart - Volume discount",
    page_initials: "AB-TEST-018",
    test_variation: 1 /* 0, 1, 2 */,
    test_version: 0.0001,
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
    return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
  }

  function fireConvertGoal(goalName, goalId) {
    console.log("Triggered convert goal: ", goalName, goalId);
    window._conv_q = window._conv_q || [];
    _conv_q.push(["triggerConversion", goalId]);
  }

  function mutationObserverFunction(selector, callback, config) {
    const targetNode = q(selector);
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
    return observer;
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

  function formatPriceToGerman(price) {
    const formattedPriceTxt = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(price);

    return formattedPriceTxt;
  }

  function calculateDiscount(offerPrice, quantity) {
    const percentage_by_quantity = [0, 0, 5, 5, 6, 6, 8, 8, 8, 8, 10];
    const discount_percentage =
      quantity <= 10
        ? percentage_by_quantity[quantity]
        : percentage_by_quantity[10];

    // Calculate discount amount
    const discount = offerPrice * (discount_percentage / 100);

    return {
      discountAmount: discount,
      discountPercentage: discount_percentage,
      finalTotal: offerPrice - discount,
    };
  }

  function getPriceData(targetNode) {
    const offerPriceContainer = q(targetNode, ".line-item-total-price-value");
    const offerPrice = parseAmount(offerPriceContainer);
    const quantity =
      +q(targetNode, "input.quantity-selector-group-input")?.value || 0;

    // Get discount calculation results
    const discountResult = calculateDiscount(offerPrice, quantity);

    // Calculate unit prices
    const finalUnitPrice =
      quantity > 0 ? discountResult.finalTotal / quantity : 0;
    const originalUnitPrice = parseAmount(
      q(targetNode, ".line-item-unit-price-value"),
    );

    return {
      offerPrice, // Original total before discount
      discount: discountResult.discountAmount, // Amount saved
      totalPrice: discountResult.finalTotal, // Final price after discount
      originalUnitPrice: originalUnitPrice, // Unit price before discount
      finalUnitPrice: finalUnitPrice, // Unit price after discount
      quantity,
    };
  }

  function getCelebrationTxt(targetNode) {
    const { discount, quantity } = getPriceData(targetNode);
    const multi_item_txt = `Glückwunsch! Du sparst ${formatPriceToGerman(discount)} durch unseren Mengenrabatt.`;

    {
      return quantity <= 1 ? "" : multi_item_txt;
    }
  }

  function createReducedPriceLayout(targetNode) {
    const { totalPrice, quantity, offerPrice } = getPriceData(targetNode);
    const parentNode = q(
      targetNode,
      ".line-item-total-price:not(.ab-added-reduced-total)",
    );

    if (quantity > 1 && parentNode) {
      parentNode.classList.add("ab-added-reduced-total");
      q(parentNode, ".line-item-total-price-value").innerText =
        formatPriceToGerman(offerPrice);
      parentNode.insertAdjacentHTML(
        "beforeend",
        /* HTML */ `<div class="ab-reduced-total-price">
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

  function updateClassName() {
    qq(
      "#productDetailPageBuyProductForm .col-4.col-sm-3.d-flex.justify-content-end",
    ).forEach((item) => {
      item.classList.remove("col-sm-3");
      item.classList.add("col-sm-4");
    });

    qq(
      "#productDetailPageBuyProductForm .col-6.col-sm-7.col-md-8.col-lg-7.col-xl-8",
    ).forEach((item) => {
      item.classList.remove("col-md-8", "col-xl-8");
    });

    qq(
      "#productDetailPageBuyProductForm .col-sm-9, #productDetailPageBuyProductForm .col-md-9",
    ).forEach((item) => {
      item.classList.remove("col-sm-9", "col-md-9");
      item.classList.add("col-sm-8");
    });
  }

  function createDropdownComponent() {
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

    const layout = /* HTML */ `
      <div class="ab-quantity-dropdown-layout" expanded="false">
        <div class="ab-quantity-dropdown-select">
          ${SELECT_OPTIONS[0].label}
        </div>
        <ul class="ab-quantity-dropdown-options">
          ${SELECT_OPTIONS.map(
            ({ value, label, discount_percentage }) => /* HTML */ `
              <li class="ab-quantity-dropdown-option" value="${value}">
                <span class="ab-quantity-dropdown-option__value">${label}</span>
                ${value <= 10
                  ? `<span class="ab-quantity-dropdown-option__green-badge">Spare ${discount_percentage}%</span>`
                  : `<span class="ab-quantity-dropdown-option__ten-plus-badge"><i>Bitte Mail an uns</i></span>`}
              </li>
            `,
          ).join("")}
        </ul>
      </div>
    `;

    q(
      ".product-detail-quantity-group.quantity-selector-group",
    ).insertAdjacentHTML("afterend", layout);
  }

  function toggleDropdown(action /* show, hide, toggle */) {
    const container = q(".ab-quantity-dropdown-layout");
    const isExpanded =
      container.getAttribute("expanded")?.toLowerCase() === "true";

    if (action === "toggle") {
      container.setAttribute("expanded", !isExpanded);
    } else if (action === "show") {
      container.setAttribute("expanded", true);
    } else if (action === "hide") {
      container.setAttribute("expanded", false);
    }
  }

  function clickEvents() {
    document.body.addEventListener("click", (e) => {
      if (e.target.closest(".ab-quantity-dropdown-select")) {
        // fireConvertGoal("Dropdown Open Click | JS", 1004106271);
        toggleDropdown("toggle");
      }

      if (
        q(".ab-quantity-dropdown-select") &&
        !e.target.closest(".ab-quantity-dropdown-layout")
      ) {
        toggleDropdown("hide");
      }

      if (e.target.closest(".ab-quantity-dropdown-option")) {
        const curr = e.target.closest(".ab-quantity-dropdown-option");
        const selectedValue = curr.getAttribute("value");
        const targetInput = q(
          ".product-detail-quantity-group.quantity-selector-group input.product-detail-quantity-input",
        );
        targetInput.value = selectedValue;
        q(".ab-quantity-dropdown-select").innerText = selectedValue;
        toggleDropdown("hide");
      }

      // if (e.target.closest(".product-detail-quantity-group.quantity-selector-group button.btn.btn-outline-light")) {
      //     fireConvertGoal("Volume selector click | JS", 1004106270);
      // }
    });
  }

  function createV1PriceDropdown() {
    const selector =
      "body.is-ctl-product.is-act-index #productDetailPageBuyProductForm";
    waitForElement(
      () => q(selector),
      () => {
        updateClassName();
        createDropdownComponent();
      },
    );
  }

  function init() {
    document.body.classList.add(...BODY_CLASSLIST);
    console.table(TEST_CONFIG);
    bodyObserver(); /* Observing body -> when side cart appears in dom -> Observing Side Cart */
    createV1PriceDropdown();
    clickEvents();
  }

  function hasAllTargetElements() {
    return !!document.querySelector(
      `body:not(.${BODY_CLASSLIST[0]}):not(.${BODY_CLASSLIST[1]})`,
    );
  }

  waitForElement(hasAllTargetElements, init);
})();
