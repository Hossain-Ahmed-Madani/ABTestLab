(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-FIX-OVERLAP #sticky-search-bar {
  z-index: 10000 !important;
}
.AB-FIX-OVERLAP .product-detail-header-section {
  border-top: 1px solid #ced4da;
  top: 77.5px;
  padding: 5.5px 16px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  gap: 0;
  z-index: 10000;
}
.AB-FIX-OVERLAP .product-detail-header-section .title.bold-text {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0px;
  color: #333333;
}
.AB-FIX-OVERLAP .product-detail-header-section .header-section-3 .price.mr-2 {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #333333;
}
.AB-FIX-OVERLAP .product-detail-header-section .btn.eve-cart-submit {
  margin: 0;
  margin-left: 5px;
  border-radius: 3px;
  padding: 8px 12px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 120%;
  color: #ffffff;
  background-color: #5d7a2f;
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
    page_initials: "AB-FIX-OVERLAP",
    test_variation: 1,
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

  function init() {
    if (window[page_initials] === true) return;

    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    window[page_initials] = true;

    q("html").insertAdjacentHTML(
      "beforeend",
      `
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
        `,
    );
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) && q("#sticky-search-bar")
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
