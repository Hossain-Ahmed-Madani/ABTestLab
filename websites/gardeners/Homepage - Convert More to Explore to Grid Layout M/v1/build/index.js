/* 

Test container: https://app.convert.com/accounts/100412411/projects/100417633/experiences/1004197571/summary
Forced url:
control   https://www.gardeners.com/?_conv_eforce=1004197571.1004464404&utm_campaign=qa5
variation: https://www.gardeners.com/?_conv_eforce=1004197571.1004464405&utm_campaign=qa5

*/

(async () => {
  const TEST_CONFIG = {
    client: "ROI Revolutions",
    project: "Gardeners",
    site_url: "https://www.gardeners.com",
    test_name: "Homepage - Convert “More to Explore” to Grid Layout [M]",
    page_initials: "AB-MORE-TO-EXPLORE-GRID-LAYOUT",
    test_variation: 1,
    test_version: 0.0002,
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

    q(
      "main > section:nth-child(3) .icon-with-text-columns__columns.icon-modifiers",
    ).insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <div class="ab-more-explore-container">
          <div class="ab-more-explore-grid">
            <div
              class="icon-with-text-column"
              data-desktop-alignment="above_center"
            >
              <a
                href="/collections/best-sellers"
                class="icon-with-text-column__icon-wrapper icon-modifiers__wrapper"
              >
                <div
                  class="image icon-modifiers__icon animation--lazy-load loaded"
                  style=""
                >
                  <img
                    alt="Best Sellers"
                    class="image__img"
                    loading="lazy"
                    width="768"
                    height="768"
                    src="//www.gardeners.com/cdn/shop/files/c196079741eda497f2fbd1b1f09d.webp?v=1754665313&amp;width=320"
                    sizes="(min-width: 720px) px, [[ism]px"
                  />
                </div>
              </a>

              <div class="icon-with-text-column__text-wrapper">
                <div class="icon-with-text-column__text rte fs-body-200">
                  <p>
                    <a href="/collections/best-sellers" title="Best Sellers"
                      >Best Sellers</a
                    >
                  </p>
                </div>
              </div>
            </div>

            <div
              class="icon-with-text-column"
              data-desktop-alignment="above_center"
            >
              <a
                href="/collections/potting-soil-and-fertilizers"
                class="icon-with-text-column__icon-wrapper icon-modifiers__wrapper"
              >
                <div
                  class="image icon-modifiers__icon animation--lazy-load loaded"
                  style=""
                >
                  <img
                    alt="Soils &amp; Fertilizers"
                    class="image__img"
                    loading="lazy"
                    width="768"
                    height="764"
                    src="//www.gardeners.com/cdn/shop/files/44a936cf428ea964529ccaeaa0f2.webp?v=1754662334&amp;width=320"
                    sizes="(min-width: 720px) px, [[ism]px"
                  />
                </div>
              </a>

              <div class="icon-with-text-column__text-wrapper">
                <div class="icon-with-text-column__text rte fs-body-200">
                  <p>
                    <a
                      href="/collections/potting-soil-and-fertilizers"
                      title="Soils &amp; Fertilizers"
                      >Soils &amp; Fertilizers</a
                    >
                  </p>
                </div>
              </div>
            </div>

            <div
              class="icon-with-text-column"
              data-desktop-alignment="above_center"
            >
              <a
                href="/collections/outdoor-planters"
                class="icon-with-text-column__icon-wrapper icon-modifiers__wrapper"
              >
                <div
                  class="image icon-modifiers__icon animation--lazy-load loaded"
                  style=""
                >
                  <img
                    alt="Pots and Planters"
                    class="image__img"
                    loading="lazy"
                    width="768"
                    height="778"
                    src="//www.gardeners.com/cdn/shop/files/28a9151e44398fbb51f0c0ea3617.webp?v=1754662332&amp;width=320"
                    sizes="(min-width: 720px) px, [[ism]px"
                  />
                </div>
              </a>

              <div class="icon-with-text-column__text-wrapper">
                <div class="icon-with-text-column__text rte fs-body-200">
                  <p>
                    <a
                      href="/collections/outdoor-planters"
                      title="/collections/outdoor-planters"
                      >Pots and Planters</a
                    >
                  </p>
                </div>
              </div>
            </div>

            <div
              class="icon-with-text-column"
              data-desktop-alignment="above_center"
            >
              <a
                href="/collections/garden-tools"
                class="icon-with-text-column__icon-wrapper icon-modifiers__wrapper"
              >
                <div
                  class="image icon-modifiers__icon animation--lazy-load loaded"
                  style=""
                >
                  <img
                    alt="Garden Tools"
                    class="image__img"
                    loading="lazy"
                    width="768"
                    height="768"
                    src="//www.gardeners.com/cdn/shop/files/af9d7a574271bcd18c8ca530b158.webp?v=1754665304&amp;width=320"
                    sizes="(min-width: 720px) px, [[ism]px"
                  />
                </div>
              </a>

              <div class="icon-with-text-column__text-wrapper">
                <div class="icon-with-text-column__text rte fs-body-200">
                  <p>
                    <a
                      href="/collections/garden-tools"
                      title="/collections/garden-tools"
                      >Garden Tools</a
                    >
                  </p>
                </div>
              </div>
            </div>

            <div
              class="icon-with-text-column"
              data-desktop-alignment="above_center"
            >
              <a
                href="/collections/planters-and-raised-beds"
                class="icon-with-text-column__icon-wrapper icon-modifiers__wrapper"
              >
                <div
                  class="image icon-modifiers__icon animation--lazy-load loaded"
                  style=""
                >
                  <img
                    alt="Raised Beds"
                    class="image__img"
                    loading="lazy"
                    width="768"
                    height="768"
                    src="//www.gardeners.com/cdn/shop/files/76eadefa4aed9325f0ecf3c90565.webp?v=1754662958&amp;width=320"
                    sizes="(min-width: 720px) px, [[ism]px"
                  />
                </div>
              </a>

              <div class="icon-with-text-column__text-wrapper">
                <div class="icon-with-text-column__text rte fs-body-200">
                  <p>
                    <a
                      href="/collections/planters-and-raised-beds"
                      title="Planters &amp; Raised Beds"
                      >Raised Beds</a
                    >
                  </p>
                </div>
              </div>
            </div>

            <div
              class="icon-with-text-column"
              data-desktop-alignment="above_center"
            >
              <a
                href="/collections/watering"
                class="icon-with-text-column__icon-wrapper icon-modifiers__wrapper"
              >
                <div
                  class="image icon-modifiers__icon animation--lazy-load loaded"
                  style=""
                >
                  <img
                    alt="Watering &amp; Irrigation"
                    class="image__img"
                    loading="lazy"
                    width="768"
                    height="768"
                    src="//www.gardeners.com/cdn/shop/files/0844207243bab3083401bf1bbfa2.webp?v=1754665299&amp;width=320"
                    sizes="(min-width: 720px) px, [[ism]px"
                  />
                </div>
              </a>

              <div class="icon-with-text-column__text-wrapper">
                <div class="icon-with-text-column__text rte fs-body-200">
                  <p>
                    <a
                      href="/collections/watering"
                      title="/collections/watering"
                      >Watering &amp; Irrigation</a
                    >
                  </p>
                </div>
              </div>
            </div>

            <div
              class="icon-with-text-column"
              data-desktop-alignment="above_center"
            >
              <a
                href="/collections/outdoor-pest-controls"
                class="icon-with-text-column__icon-wrapper icon-modifiers__wrapper"
              >
                <div
                  class="image icon-modifiers__icon animation--lazy-load loaded"
                  style=""
                >
                  <img
                    alt="Pest Control"
                    class="image__img"
                    loading="lazy"
                    width="768"
                    height="768"
                    src="//www.gardeners.com/cdn/shop/files/0a14925f4afba09c92ea4bf478ee.webp?v=1754666244&amp;width=320"
                    sizes="(min-width: 720px) px, [[ism]px"
                  />
                </div>
              </a>

              <div class="icon-with-text-column__text-wrapper">
                <div class="icon-with-text-column__text rte fs-body-200">
                  <p>
                    <a
                      href="/collections/outdoor-pest-controls"
                      title="Pest &amp; Disease Controls"
                      >Pest Control</a
                    >
                  </p>
                </div>
              </div>
            </div>

            <div
              class="icon-with-text-column"
              data-desktop-alignment="above_center"
            >
              <a
                href="/collections/gardeners-supply-outlet"
                class="icon-with-text-column__icon-wrapper icon-modifiers__wrapper"
              >
                <div
                  class="image icon-modifiers__icon animation--lazy-load loaded"
                  style=""
                >
                  <img
                    alt="Sale"
                    class="image__img"
                    loading="lazy"
                    width="768"
                    height="761"
                    src="//www.gardeners.com/cdn/shop/files/f8e88e9b4e7088d5c635a3f5180a.webp?v=1754665321&amp;width=320"
                    sizes="(min-width: 720px) px, [[ism]px"
                  />
                </div>
              </a>

              <div class="icon-with-text-column__text-wrapper">
                <div class="icon-with-text-column__text rte fs-body-200">
                  <p>
                    <a
                      href="/collections/gardeners-supply-outlet"
                      title="/collections/gardeners-supply-outlet"
                      >Sale</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
    );
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(
        "main > section:nth-child(3) .icon-with-text-columns__columns.icon-modifiers",
      )
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    return false;
  }
})();
