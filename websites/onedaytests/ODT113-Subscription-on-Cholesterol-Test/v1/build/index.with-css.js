(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-ODT113 .ab-subscription-dropdown {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.AB-ODT113
  .ab-subscription-dropdown--collapsed
  .ab-subscription-dropdown__body {
  display: none;
}
.AB-ODT113 .ab-subscription-dropdown__header {
  width: max-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 9px;
  cursor: pointer;
  user-select: none;
}
.AB-ODT113 .ab-subscription-dropdown__header__icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-ODT113 .ab-subscription-dropdown__header__icon svg {
  width: 12px;
  height: 13px;
}
.AB-ODT113 .ab-subscription-dropdown__header__text {
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  vertical-align: middle;
  color: #1d1d1d;
}
.AB-ODT113 .ab-subscription-dropdown__body {
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 16px;
}
.AB-ODT113 .ab-subscription-dropdown__body__text {
  font-family: Nunito Sans;
  font-weight: 400;
  font-style: Italic;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0;
  vertical-align: middle;
  color: #1d1d1d;
  padding: 0;
  margin: 0;
}
.AB-ODT113 .ab-description {
  padding-left: 27px;
  display: none;
  flex-direction: column;
  gap: 8px;
}
.AB-ODT113 .ab-description__title {
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #1d1d1d;
}
.AB-ODT113 .ab-description__sub-title {
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #1d1d1d;
}
.AB-ODT113 .ab-description__list {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 17px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.AB-ODT113 .ab-description__list-item {
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #1d1d1d;
}
.AB-ODT113 #new_place_for_paywhirl {
  margin-bottom: 40px !important;
}
.AB-ODT113 .product-app,
.AB-ODT113 .paywhirl-plan-selector {
  margin-bottom: 0;
}
.AB-ODT113 .product-form--atc {
  margin-top: 0;
  padding-top: 0;
}
.AB-ODT113 .product-form--atc-button {
  margin-top: 0;
}
.AB-ODT113 .paywhirl-info-popup {
  display: none;
}
.AB-ODT113 .paywhirl-plan-selector .paywhirl-plan-selector-group-container {
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.AB-ODT113 .paywhirl-plan-selector .paywhirl-plan-selector-group {
  margin: 0;
  padding: 0 16px;
}
.AB-ODT113
  .paywhirl-plan-selector-group.paywhirl-group-selected:not(
    #paywhirl-one-time-purchase-group
  ) {
  background-color: #e0eff6;
  margin: 0;
  padding: 16px;
  border-radius: 4px;
}
.AB-ODT113
  .paywhirl-plan-selector-group.paywhirl-group-selected:not(
    #paywhirl-one-time-purchase-group
  )
  .paywhirl-plan-selector-icon
  svg {
  fill: #0070b9;
  width: 17px;
  height: 17px;
}
.AB-ODT113
  .paywhirl-plan-selector-group.paywhirl-group-selected:not(
    #paywhirl-one-time-purchase-group
  )
  .paywhirl-plan-selector-group-price,
.AB-ODT113
  .paywhirl-plan-selector-group.paywhirl-group-selected:not(
    #paywhirl-one-time-purchase-group
  )
  .paywhirl-plan-selector-price {
  display: none !important;
}
.AB-ODT113
  .paywhirl-plan-selector-group.paywhirl-group-selected:not(
    #paywhirl-one-time-purchase-group
  )
  .paywhirl-plan-selector-group-name {
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #0070b9;
}
.AB-ODT113
  .paywhirl-plan-selector-group.paywhirl-group-selected:not(
    #paywhirl-one-time-purchase-group
  )
  .paywhirl-plan-selector-plan {
  margin-top: 16px;
  margin-bottom: 12px;
  margin-left: 27px;
}
.AB-ODT113
  .paywhirl-plan-selector-group.paywhirl-group-selected:not(
    #paywhirl-one-time-purchase-group
  )
  .paywhirl-label {
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #1d1d1d;
}
.AB-ODT113
  .paywhirl-plan-selector-group.paywhirl-group-selected:not(
    #paywhirl-one-time-purchase-group
  )
  select {
  max-width: 587px;
  height: auto;
  border: 1px solid #a1d3ea;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px 16px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('data:image/svg+xml,<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 0.5L5.5 5.5L0.5 0.5" stroke="%231D1D1D" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 12px;
  background-color: #fff;
}
.AB-ODT113
  .paywhirl-plan-selector-group.paywhirl-group-selected:not(
    #paywhirl-one-time-purchase-group
  )
  .ab-description {
  display: flex;
}
.AB-ODT113 .paywhirl-plan-selector-description.paywhirl-plan-selector-content {
  display: none !important;
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
    project: "One Day Tests",
    site_url: "https://onedaytests.com",
    test_name: "ODT113 - Subscription on Cholesterol Test",
    page_initials: "AB-ODT113",
    test_variation: 1,
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const ASSETS = {
    subscription_header_arrow: /* HTML */ `
      <svg
        width="13"
        height="14"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6443 7.86464L1.77876 13.5097C0.821894 14.0565 -0.301551 13.1125 0.0743705 12.0766L1.96885 6.8352L0.0743705 1.59379C-0.301551 0.555709 0.821894 -0.386174 1.77876 0.160592L11.6443 5.80565C12.443 6.2606 12.441 7.40969 11.6443 7.86464Z"
          fill="black"
        />
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
    return document.querySelector(s);
  }

  function createLayout() {
    q(".paywhirl-info-popup").insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <div
          class="ab-subscription-dropdown ab-subscription-dropdown--collapsed"
        >
          <div class="ab-subscription-dropdown__header">
            <span class="ab-subscription-dropdown__header__icon"
              >${ASSETS["subscription_header_arrow"]}</span
            >
            <span class="ab-subscription-dropdown__header__text"
              >About subscriptions</span
            >
          </div>
          <div class="ab-subscription-dropdown__body">
            <p class="ab-subscription-dropdown__body__text">
              When you purchase a subscription we will deliver your home test
              kits or allow you to book appointments in line with your chosen
              frequency. You will be able to track your biomarkers over time in
              our powerful Health Dashboard. There is a minimum of 3 tests with
              a subscription, after that you can cancel any time. You will be
              charged at the frequency of the plan.
            </p>
          </div>
        </div>
      `,
    );

    q(
      ".paywhirl-plan-selector-description.paywhirl-plan-selector-content",
    ).insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <div class="ab-description">
          <div class="ab-description__title">
            The best way to look after your health is to do so continuously.
          </div>
          <div class="ab-description__sub-title">
            Your easy, hassle-free way to continually monitor your health with
            our subscription plans.
          </div>
          <ul class="ab-description__list">
            <li class="ab-description__list-item">
              Choose your frequency and we will do the rest.
            </li>
            <li class="ab-description__list-item">
              All of your results will be automatically updated in your Health
              Dashboard.
            </li>
            <li class="ab-description__list-item">
              Pause and restart any time.
            </li>
            <li class="ab-description__list-item">
              Available for home test or in-clinic test (clinic appointment not
              included).
            </li>
          </ul>
        </div>
      `,
    );
  }

  function clickFunction() {
    q(".ab-subscription-dropdown__header").addEventListener("click", (e) => {
      q(".ab-subscription-dropdown").classList.toggle(
        "ab-subscription-dropdown--collapsed",
      );
    });
  }

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);

    createLayout();
    clickFunction();
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(".paywhirl-info-popup") &&
      q(".paywhirl-plan-selector-description.paywhirl-plan-selector-content")
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
