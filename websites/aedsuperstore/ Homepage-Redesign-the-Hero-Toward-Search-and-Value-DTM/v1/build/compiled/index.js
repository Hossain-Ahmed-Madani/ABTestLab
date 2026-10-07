(async () => {
  const TEST_CONFIG = {
    client: "ROI Revolutions",
    project: "AED Superstore",
    site_url: "https://www.aedsuperstore.com",
    test_name: "Homepage - Redesign the Hero Toward Search and Value [DTM]",
    page_initials: "AB-HOMEPAGE-HERO-SEARCH",
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

    q(".frame-feature").insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <div class="ab-hero-container">
          <h2 class="ab-hero-heading">
            Find the exact AED, pad, <br />
            or battery you need
          </h2>
          <div class="ab-hero-search">${q(".searchWidget").outerHTML}</div>
          <a href="/aeds.html" class="ab-hero-promo-cta"
            >$175 off $1,500+ · code SAVE175</a
          >
        </div>
      `,
    );
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(".frame-feature") &&
      q(".searchWidget")
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
