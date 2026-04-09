(async () => {
  const TEST_CONFIG = {
    client: "ROI Revolutions",
    project: "Gurneys",
    site_url: "https://www.gurneys.com/",
    test_name: "PDP - Add Product Badges [DTM]",
    page_initials: "AB-PRODUCT-BADGES",
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
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);

    q(".product__block--product-header-inner").insertAdjacentHTML(
      "afterbegin",
      /* HTML */ `
        <div class="ab-product-badges-container">
          <div class="ab-product-badge ab-product-badge--only-from-gurneys">
            Only From Gurney's
          </div>
          <div class="ab-product-badge ab-product-badge--bestseller">
            Bestseller
          </div>
        </div>
      `,
    );
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) && q(".product__block--product-header-inner")
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
