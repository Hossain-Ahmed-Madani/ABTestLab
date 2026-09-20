(async () => {
  const TEST_CONFIG = {
    client: "Converted",
    project: "One Day Test",
    site_url: "https://onedaytests.com",
    test_name: "ODT030 - CTA on memberships cards",
    page_initials: "AB-ODT030",
    test_variation: 1,
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const DATA = {
    "FLEX PLAN": {
      id: "flex_plan",
      featureLabel: "15% off any other test",
      ctaLabel: "Select Flex",
    },
    "PERFORMANCE PLAN": {
      id: "performance_plan",
      featureLabel: "10% off any other test",
      ctaLabel: "Select PERFORMANCE ",
    },
    "LONGEVITY PLAN": {
      id: "longevity_plan",
      featureLabel: "10% off any other test",
      ctaLabel: "Select LONGEVITY",
    },
  };

  const ASSETS = {
    check_svg: /* HTML */ `
      <svg
        class="ab-check-svg ai-subscription-tier__feature-icon-aazn6uxvscwvtys9xcaigenblock07168426tilmy ai-subscription-tier__feature-icon--tick-aazn6uxvscwvtys9xcaigenblock07168426tilmy"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
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

    qq(
      'div[class*="ai-subscription-tiers__grid"] > div[class*="ai-subscription-tier"]',
    ).forEach((item) => {
      const title = q(
        item,
        'h3[class*="ai-subscription-tier__name"]',
      ).textContent.trim();
      const firstFeatureElement = q(
        item,
        'div[class*="ai-subscription-tier__feature-name"]',
      );
      const firstFeatureIndicatorElement = q(
        item,
        'div[class*="ai-subscription-tier__feature-indicator"]',
      );
      const subscriptionTierElement = q(
        item,
        'div[class*="ai-subscription-tier__features"]',
      );

      const { id, featureLabel, ctaLabel } = DATA[title];

      firstFeatureElement.innerText = featureLabel;
      firstFeatureIndicatorElement.innerHTML = ASSETS.check_svg;
      subscriptionTierElement.insertAdjacentHTML(
        "afterend",
        /* HTML */ `
          <div class="ab-cta-container">
            <div id="${id}" class="ab-cta">${ctaLabel}</div>
            <div class="ab-cancel-text">Cancel anytime, no minimum term</div>
          </div>
        `,
      );

      q(`.ab-cta#${id}`).addEventListener("click", (e) => {
        const elementId = e.target.id;
        if (elementId === "flex_plan") {
          q('.odt-radio-button__label input[value="Flex Plan"]').click();
        } else if (elementId === "performance_plan") {
          q('.odt-radio-button__label input[value="Performance Plan"]').click();
        } else if (elementId === "longevity_plan") {
          q('.odt-radio-button__label input[value="Longevity Plan"]').click();
        }

        q(".shopify-section.product--section .product-details")?.scrollIntoView(
          {
            behavior: "smooth",
            block: window.innerWidth < 901 ? "start" : "center",
          },
        );
      });
    });
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(
        'div[class*="ai-subscription-tiers__grid"] > div[class*="ai-subscription-tier"]',
      )
    );
  }
  await waitForElementAsync(checkForItems);
  init();

  // try {
  //     await waitForElementAsync(checkForItems);
  //     init();
  // } catch (error) {
  //     console.warn(error);
  //     return false;
  // }
})();
