(async () => {
  const TEST_CONFIG = {
    client: "SeatPlan",
    project: "SeatPlan",
    site_url: "https://seatplan.com",
    test_name: "[ECX-186] - Mobile - Production - Offer bar on sticky CTA",
    page_initials: "AB-ECX-186",
    test_variation: 1,
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const ASSETS = {
    chevron_down: /* HTML */ `
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z" fill="white" />
      </svg>
    `,
  };

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

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);

    const offerElement = q(
      ".sp-production-offer-content.sp-production-offer-content--v2",
    );

    q("#production-page-mobile-sticky-bar").insertAdjacentHTML(
      "afterbegin",
      /* HTML */ `
        <div class="ab-offer-bar ab-offer-bar--expanded">
          <div class="ab-offer-bar__header">
            <div class="ab-offer-bar__header__text">
              ${q(
                offerElement,
                ".sp-production-offer-content__badge-wrap .sp-badge",
              ).textContent}
            </div>
            <div class="ab-offer-bar__header__icon">${ASSETS.chevron_down}</div>
          </div>
          <div class="ab-offer-bar__bottom">
            <div class="ab-offer-bar__content">
              ${q(offerElement, ".sp-production-offer-content__text").innerHTML}
            </div>
          </div>
        </div>
      `,
    );

    qq(".ab-offer-bar__header__text, .ab-offer-bar__header__icon").forEach(
      (element) => {
        element.addEventListener("click", () => {
          const targetNode = q(".ab-offer-bar");

          if (!targetNode.classList.contains("ab-offer-bar--expanded")) {
            console.log("GOAL: Expands sticky CTA offer bar | JS: 1004117485");
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["triggerConversion", "1004117485"]);
          }

          q(".ab-offer-bar").classList.toggle("ab-offer-bar--expanded");
        });
      },
    );
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(".sp-production-offer-content.sp-production-offer-content--v2") &&
      q("#production-page-mobile-sticky-bar")
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
