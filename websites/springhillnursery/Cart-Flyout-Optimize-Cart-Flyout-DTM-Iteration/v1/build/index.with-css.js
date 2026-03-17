(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-OPT-CART-ITERATION .quick-cart__item-image {
  width: 120px;
}
.AB-OPT-CART-ITERATION .ab-total-saved {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.AB-OPT-CART-ITERATION .ab-total-saved__label {
  font-family: "Libre Baskerville";
  font-size: 14.5px;
  font-weight: 400;
  color: #ca5e5c;
  display: block;
  margin: 0;
  font-weight: bold;
  unicode-bidi: isolate;
}
.AB-OPT-CART-ITERATION .ab-total-saved__value {
  font-family: "Libre Baskerville", serif;
  font-size: 14.5px;
  font-weight: 700;
  color: #ca5e5c;
}
`;
      document.head.appendChild(style);
      setTimeout(() => {
        clearInterval(interval); // Clear the interval after 5 seconds
      }, 5000);
    }
  }, 100); // Check every 100ms for <head>
})();
(async () => {
  const TEST_CONFIG = {
    page_initials: "AB-OPT-CART-ITERATION",
    test_variation: 1 /* 1 */,
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

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

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function convertToNumber(value) {
    if (typeof value !== "string") return "";
    const numeric = value.replace(/[^0-9.\-]/g, "");
    const num = parseFloat(numeric);
    if (isNaN(num)) return 0;
    return num;
  }

  function getTotalSaved() {
    let totalSaved = 0;

    qq(".quick-cart__item:has(s.quick-cart__item-price)").forEach((item) => {
      const originPrice =
        q(item, "s.quick-cart__item-price")?.textContent ?? "";
      const savedPrice =
        q(item, "span.quick-cart__item-price")?.textContent ?? "";
      const quantity = +q(item, "input.quantity-input__input")?.value ?? 1;

      if (originPrice && savedPrice) {
        totalSaved +=
          quantity *
          (convertToNumber(originPrice) - convertToNumber(savedPrice));
      }
    });

    return totalSaved;
  }

  function createLayout() {
    console.log("create layout...");

    const totalSaved = getTotalSaved();

    const targetNode = q(".ab-total-saved__value");

    if (!targetNode && totalSaved > 0) {
      q(".quick-cart__footer-subtotal")?.insertAdjacentHTML(
        "afterend",
        /* HTML */ `
          <div class="ab-total-saved">
            <h4 class="ab-total-saved__label">You Saved</h4>
            <span class="ab-total-saved__value">$${totalSaved.toFixed(2)}</span>
          </div>
        `,
      );
    }

    if (
      targetNode &&
      convertToNumber(targetNode.textContent).toFixed(2) !==
        totalSaved.toFixed(2)
    ) {
      targetNode.textContent = `$${totalSaved.toFixed(2)}`;
    }

    if (totalSaved === 0 && q(".ab-total-saved")) {
      q(".ab-total-saved")?.remove();
    }

    if (!q(".ab-tax-note")) {
      q(".quick-cart__footer-tax-note")?.insertAdjacentHTML(
        "afterend",
        `<p class="ab-tax-note ff-body fs-body-75 t-subdued">Apply discounts & gift certificates at checkout.</p>`,
      );
    }
  }

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    createLayout();
    mutationObserverFunction();
  }

  function mutationObserverFunction() {
    const targetNode = q(".quick-cart");
    const debouncedUpdate = debounce(createLayout, 250);
    return new MutationObserver(debouncedUpdate).observe(targetNode, {
      childList: true,
      subtree: true,
      attributes: true,
    });
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(${page_initials}--v${test_variation})`,
      ) && q(".quick-cart")
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
