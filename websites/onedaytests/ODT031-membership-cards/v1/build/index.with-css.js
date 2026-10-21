(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-ODT031 .ab-check-svg {
  margin-top: 15px;
}
.AB-ODT031 .ab-cta-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.AB-ODT031 .ab-cta {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #006eb3;
  border-radius: 8px;
  height: 46px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
}
.AB-ODT031 .ab-cancel-text {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: #999999;
}
.AB-ODT031
  div[class*="ai-subscription-tiers__grid-"]
  > div[class*="ai-subscription-tier"] {
  padding-left: 26px;
  padding-right: 26px;
}
@media screen and (max-width: 989px) {
  .AB-ODT031
    div[class*="ai-subscription-tiers__grid-"]
    > div[class*="ai-subscription-tier"] {
    padding: 40px 24px 40px;
  }
}
@media screen and (min-width: 991px) {
  .AB-ODT031 .ab-check-svg {
    margin-top: 10px;
  }
}
.AB-ODT031 .ab-hidden {
  display: none;
}
.AB-ODT031
  div[class*="ai-subscription-tier__features"]
  > div[class*="ai-subscription-tier__feature"]:last-child {
  display: none;
}
.AB-ODT031 div[class*="ai-subscription-tier__price-amount"] {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  letter-spacing: 0px;
}
.AB-ODT031 div[class*="ai-subscription-tier__price-period"] {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #1d1d1d;
  margin-bottom: 8px;
}
.AB-ODT031 .ab-small {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
}
.AB-ODT031 .ab-saving {
  border: 1px solid #b1e7c7;
  background-color: #e1f7ea;
  border-radius: 4px;
  padding: 2px 6px;
  width: max-content;
  margin: auto;
  align-content: center;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #006d41;
}
@media screen and (min-width: 991px) {
  .AB-ODT031 div[class*="ai-subscription-tier__price-amount"] {
    font-size: 36px;
    line-height: 46px;
  }
  .AB-ODT031 div[class*="ai-subscription-tier__price-period"] {
    font-size: 16px;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 12px;
  }
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
    client: "Converted",
    project: "One Day Test",
    site_url: "https://onedaytests.com",
    test_name: "ODT031 - Membership cards: Clear billing and savings upfront",
    page_initials: "AB-ODT031",
    test_variation: 1,
    test_version: 0.0002,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const DATA = {
    "FLEX PLAN": {
      id: "flex_plan",
      discount: "15%",
      featureLabel: "15% off any other test",
      ctaLabel: "Select Flex",
      pricePerYear: 72,
      pricePerMonth: 6,
      savingText: "Save 15%+ vs buying separately",
    },
    "PERFORMANCE PLAN": {
      id: "performance_plan",
      discount: "10%",
      featureLabel: "10% off any other test",
      ctaLabel: "Select PERFORMANCE ",
      pricePerYear: 349,
      pricePerMonth: 29,
      savingText: "Save £291 vs buying separately",
    },
    "LONGEVITY PLAN": {
      id: "longevity_plan",
      discount: "10%",
      featureLabel: "10% off any other test",
      ctaLabel: "Select LONGEVITY",
      pricePerYear: 499,
      pricePerMonth: 42,
      savingText: "Save £380 vs buying separately",
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
    control_check_svg: /* HTML */ `
      <svg
        class="ai-subscription-tier__feature-icon-aazn6uxvscwvtys9xcaigenblock07168426tilmy ai-subscription-tier__feature-icon--tick-aazn6uxvscwvtys9xcaigenblock07168426tilmy"
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
    if (window[page_initials] === true) return;
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    window[page_initials] = true;

    console.log(TEST_CONFIG);

    // ODT030
    if (
      (window.convert && !window.convert.currentData) ||
      (window.convert &&
        window.convert.currentData &&
        window.convert.currentData.experiences &&
        window.convert.currentData.experiences["100147507"] &&
        window.convert.currentData.experiences["100147507"].variation.id !==
          "1001233939")
    ) {
      console.log("==== ODT030 ====");
      qq(
        'body:not(.AB-ODT030) div[class*="ai-subscription-tiers__grid"] > div[class*="ai-subscription-tier"]',
      )?.forEach((item) => {
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

        q(`.ab-cta#${id}`)?.addEventListener("click", (e) => {
          const elementId = e.target.id;
          if (elementId === "flex_plan") {
            q('.odt-radio-button__label input[value="Flex Plan"]').click();
          } else if (elementId === "performance_plan") {
            q(
              '.odt-radio-button__label input[value="Performance Plan"]',
            ).click();
          } else if (elementId === "longevity_plan") {
            q('.odt-radio-button__label input[value="Longevity Plan"]').click();
          }

          q(
            ".shopify-section.product--section .product-details",
          )?.scrollIntoView({
            behavior: "smooth",
            block: window.innerWidth < 901 ? "start" : "center",
          });
        });
      });
    }

    // ODT031
    qq(
      'div[class*="ai-subscription-tiers__grid"] > div[class*="ai-subscription-tier"]',
    )?.forEach((item) => {
      const title = q(
        item,
        'h3[class*="ai-subscription-tier__name"]',
      ).textContent.trim();
      const tierPriceElement = q(
        item,
        'div[class*="ai-subscription-tier__price-amount"]',
      );
      const tierPricePeriodElement = q(
        item,
        'div[class*="ai-subscription-tier__price-period"]',
      );
      const firstFeatureIndicatorElement = q(
        item,
        'div[class*="ai-subscription-tier__feature-indicator"]',
      );

      const {
        /* id, featureLabel, ctaLabel,  */ discount,
        pricePerYear,
        pricePerMonth,
        savingText,
      } = DATA[title];

      firstFeatureIndicatorElement.innerHTML = /* HTML */ `
        <div
          class="ai-subscription-tier__superscript-aazn6uxvscwvtys9xcaigenblock07168426tilmy"
        >
          Any test
        </div>
        ${ASSETS.control_check_svg}
        <div
          class="ai-subscription-tier__subscript-aazn6uxvscwvtys9xcaigenblock07168426tilmy"
        >
          ${discount}
        </div>
      `;

      tierPriceElement.innerHTML = `£${pricePerYear}<small class="ab-small"> / year</small>`;
      tierPricePeriodElement.innerText = `Equivalent to £${pricePerMonth} / month`;
      tierPricePeriodElement.insertAdjacentHTML(
        "afterend",
        `<div class="ab-saving">✓ ${savingText}</div>`,
      );
    });
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      qq(
        'div[class*="ai-subscription-tiers__grid"] > div[class*="ai-subscription-tier"]',
      ).length >= 3
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    return false;
  }
})();
