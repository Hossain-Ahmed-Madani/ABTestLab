/* 
Ticket: https://trello.com/c/trjmMt98/4062-test018-electropapa-a-b-c-followup016-pds-side-cart-volume-discount
Test Container: https://app.convert.com/accounts/1004828/projects/10047105/experiences/1004169319/summary

Forced Variation:
v1: https://electropapa.com/de/e-bike-akku-als-ersatz-fuer-samsung-gd-ssdi-e24b-sdi-2510b-7inr19-65-4-10inr19-65-4-8-8-ah-24v-li-ion-800108614?_conv_eforce=1004169319.1004399802&&utm_campaign=qa09 
v2: https://electropapa.com/de/e-bike-akku-als-ersatz-fuer-samsung-gd-ssdi-e24b-sdi-2510b-7inr19-65-4-10inr19-65-4-8-8-ah-24v-li-ion-800108614?_conv_eforce=1004169319.1004400054&utm_campaign=qa09

*/

(() => {
  const TEST_CONFIG = {
    client: "Netzproduzenten",
    project: "Project Name",
    site_url: "https://electropapa.com/de",
    test_name:
      "Test018 A/B/C - Followup016 - PDS & Side Cart - Volume discount",
    page_initials: "AB-TEST-018",
    test_variation: 1 /* 0, 1, 2 */,
    test_version: 0.0007,
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

    const offerPriceContainer = q(targetNode, ".line-item-total-price-value");
    const offerPrice = parseAmount(offerPriceContainer); // This is DISCOUNTED price
    const quantity =
      +q(targetNode, "input.quantity-selector-group-input")?.value || 0;

    // const totalPrice = calculateOriginalPrice(offerPrice, quantity);
    const totalPricePerQuantity =
      await getProductOriginalPricePerQuantity(productUrl);
    const totalPrice = totalPricePerQuantity * quantity;
    const discount = totalPrice - offerPrice;

    return {
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
    const multi_item_txt = `Glückwunsch! Du sparst ${formatPriceToGerman(discount, true)} durch unseren Mengenrabatt.`;

    {
      return quantity <= 1 ? "" : multi_item_txt;
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
      parentNode.insertAdjacentHTML(
        "afterbegin",
        /* HTML */ `<div class="ab-total-price">
          ${formatPriceToGerman(totalPrice)}
        </div>`,
      );
    }
  }

  function createCelebrationMessageLayout({
    targetNode,
    totalPrice,
    quantity,
    discount,
    offerPrice,
  }) {
    const layout = /* HTML */ `
      <div
        class="ab-celebration-message-container ${quantity <= 1
          ? "ab-celebration-message-container--viewing-for-single"
          : ""}"
      >
        ${getCelebrationTxt({
          targetNode,
          totalPrice,
          quantity,
          discount,
          offerPrice,
        })}
      </div>
    `;

    setTimeout(() => {
      if (!q(targetNode, ".ab-celebration-message-container")) {
        targetNode.insertAdjacentHTML("beforeend", layout);
        if (quantity > 1) {
          fireConvertGoal("Shows Celebration Message | JS", 1004106272);
        }
      }
    }, 0);
  }

  function createCelebrationMessageComponent() {
    const selector = ".offcanvas-cart-items .line-item";
    waitForElement(
      () => qq(selector).length > 0,
      () => {
        const targetNodes = qq(selector);
        targetNodes.forEach(async (targetNode) => {
          const { totalPrice, quantity, discount, offerPrice } =
            await getPriceData(targetNode);
          createReducedPriceLayout({
            targetNode,
            totalPrice,
            quantity,
            discount,
            offerPrice,
          });
          createCelebrationMessageLayout({
            targetNode,
            totalPrice,
            quantity,
            discount,
            offerPrice,
          });
        });
      },
    );
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
      "#productDetailPageBuyProductForm .col-2.col-md-1.col-lg-2.col-xl-1",
    ).forEach((item) => {
      item.classList.remove("col-lg-2");
      item.classList.add("col-lg-1");
    });

    qq(
      "#productDetailPageBuyProductForm .col-4.col-sm-3.d-flex.justify-content-end",
    ).forEach((item) => {
      item.classList.remove("col-sm-3");
      item.classList.add("col-5", "col-sm-4");
    });

    qq(
      "#productDetailPageBuyProductForm .col-6.col-sm-7.col-md-8.col-lg-7.col-xl-8",
    ).forEach((item) => {
      item.classList.remove("col-6", "col-md-8", "col-xl-8");
      item.classList.add("col-5");
    });

    qq(
      "#productDetailPageBuyProductForm .col-sm-9, #productDetailPageBuyProductForm .col-md-9",
    ).forEach((item) => {
      item.classList.remove("col-sm-9", "col-md-9");
      item.classList.add("col-sm-8");
    });
  }

  function createDropdownComponent() {
    const targetNode = q(
      ".product-detail-quantity-group.quantity-selector-group",
    );

    const SELECT_OPTIONS = [
      {
        value: 1,
        label: "1 Stück",
        discount_percentage: 0,
      },
      {
        value: 2,
        label: "2 Stück",
        discount_percentage: 5,
      },
      {
        value: 3,
        label: "3 Stück",
        discount_percentage: 5,
      },
      {
        value: 4,
        label: "4 Stück",
        discount_percentage: 6,
      },
      {
        value: 5,
        label: "5 Stück",
        discount_percentage: 6,
      },
      {
        value: 6,
        label: "6 Stück",
        discount_percentage: 8,
      },
      {
        value: 7,
        label: "7 Stück",
        discount_percentage: 8,
      },
      {
        value: 8,
        label: "8 Stück",
        discount_percentage: 8,
      },
      {
        value: 9,
        label: "9 Stück",
        discount_percentage: 8,
      },
      {
        value: 10,
        label: "10 Stück",
        discount_percentage: 10,
      },
      {
        value: 11,
        label: "11+ Stück",
        discount_percentage: 10,
      },
    ];

    const layout = /* HTML */ `
      <div class="ab-quantity-dropdown-layout" expanded="false">
        <div class="ab-quantity-dropdown-select">
          ${q(
            targetNode,
            ".product-detail-quantity-group.quantity-selector-group input.product-detail-quantity-input",
          )?.value || SELECT_OPTIONS[0].label}
          Stück
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

    targetNode.insertAdjacentHTML("afterend", layout);
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
        q(".ab-quantity-dropdown-select").innerText = selectedValue + " Stück";
        toggleDropdown("hide");
      }
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
        qq(".checkout-product-table .line-item").length > 0 &&
        q(
          ".checkout-aside-summary-list .checkout-aside-summary-value:first-of-type",
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
      },
    );
  }

  function init() {
    document.body.classList.add(...BODY_CLASSLIST);
    console.table(TEST_CONFIG);

    // Observing body -> when side cart appears in dom -> Observing Side Cart
    bodyObserver(); /* */

    // When Test is triggered on cart drawer opening
    cartObserver();

    // Rest of functions
    createV1PriceDropdown();
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
