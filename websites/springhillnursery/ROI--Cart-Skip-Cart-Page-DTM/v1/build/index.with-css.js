(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-SKIP-CART-PAGE .quick-cart a.quick-cart__submit[href="/cart"] {
  display: none;
}
.AB-SKIP-CART-PAGE .ab-side-cart-checkout-btn {
  margin-top: 12px;
  padding: 8px 16px;
  background: #7f2841;
  font-family: "Libre Baskerville", serif;
  font-size: 22.4px;
  font-style: normal;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
}
.AB-SKIP-CART-PAGE .ab-side-cart-checkout-btn:hover {
  background: #7f2841 !important;
}

.AB-SKIP-CART-PAGE--v1 .ab-cta-btn {
  display: inline-block;
  width: 100%;
  margin-top: 15px;
  color: rgb(0, 0, 0);
  font-family: "Libre Baskerville", serif;
  text-align: center;
  text-decoration: underline;
  text-decoration-style: solid;
  font-weight: 400;
  font-size: 20px;
  line-height: 18px;
  letter-spacing: 0px;
}

.AB-SKIP-CART-PAGE--v2 .ab-cta-btn {
  display: inline-block;
  width: 100%;
  margin-top: 15px;
  color: rgb(0, 0, 0);
  font-family: "Libre Baskerville", serif;
  text-align: center;
  text-decoration: underline;
  text-decoration-style: solid;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0px;
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
    page_initials: "AB-SKIP-CART-PAGE",
    test_variation: 1 /* 1, 2 */,
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
    return document.querySelector(s);
  }

  async function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );

    q(".quick-cart a.quick-cart__submit[href='/cart']").insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <a
          href="/checkout"
          class="ab-side-cart-checkout-btn  btn btn--full btn--primary"
          aria-label="Go To Checkout"
          >Go To Checkout
        </a>
        <a href="${"/cart"}" class="ab-cta-btn" aria-label="${"View Cart"}">
          ${"View Cart"}
        </a>
      `,
    );

    return;
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(${page_initials}--v${test_variation})`,
      ) && q(".quick-cart a.quick-cart__submit[href='/cart']")
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
