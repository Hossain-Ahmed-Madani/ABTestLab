(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-MS126 .bundle-sec > ul > li:has(a[href="/collections/shop-all"]) {
  display: none !important;
}

.AB-MS126--v1 #mobile-slides-content > div.bundle-sec > ul > li:has(a[href="https://magicspoon.com/products/variety-6-6-bags-of-granola"])
{
  border-bottom: none !important;
  padding-bottom: 0 !important;
}
.AB-MS126--v1 header .button-sec {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.AB-MS126--v1 #mobile-slides-content .button-sec a.btn-toggle {
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  font-family: Mabry, Helvetica, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-transform: uppercase;
}
.AB-MS126--v1 #mobile-slides-content .button-sec a.btn-toggle__icon {
  margin-top: -4px;
}
.AB-MS126--v1
  #mobile-slides-content
  .button-sec
  a.btn-toggle.ab-toggle-outlined {
  border-radius: 50px;
  border: 2px solid #3f0791;
  background: #fff;
  color: #3f0791;
}

.AB-MS126--v2 header .button-sec {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.AB-MS126--v2 #mobile-slides-content .button-sec a.btn-toggle {
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  font-family: Mabry, Helvetica, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-transform: uppercase;
}
.AB-MS126--v2 #mobile-slides-content .button-sec a.btn-toggle__icon {
  margin-top: -4px;
}
.AB-MS126--v2 header .button-sec a[href="/products/custom-mixed-bundle-6-box"] {
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
  const TEST_ID = "MS126";
  const VARIANT_ID = "V1"; /* Control, V1, V2 */

  function logInfo(message) {
    console.log(
      `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
      "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
      "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
      message,
    );
  }

  logInfo("fired");

  const TEST_CONFIG = {
    client: "Acadia",
    project: "Magic Spoon",
    site_url: "https://www.example.com",
    test_name:
      "MS126: [NAV-Mobile] Move Main Nav Element into CTAs (2) SET UP TEST",
    page_initials: "AB-MS126",
    test_variation: 2,
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  function fireGA4Event(eventName, eventLabel = "") {
    console.log("fireGA4Event", eventName, eventLabel);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "GA4event",
      "ga4-event-name": "cro_event",
      "ga4-event-p1-name": "event_category",
      "ga4-event-p1-value": eventName,
      "ga4-event-p2-name": "event_label",
      "ga4-event-p2-value": eventLabel,
    });
  }

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

  function createLayoutV2() {
    const shopAllNode = q(
      'header .bundle-sec > ul > li:has(a[href="/collections/shop-all"])',
    );
    shopAllNode.insertAdjacentHTML(
      "afterend" /* HTML */,
      `
                <li>
                    <a href="/products/custom-mixed-bundle-6-box">
                        <img src="//magicspoon.com/cdn/shop/files/MS_VARIETY_DISCOVERY_HERO2_1_bdc88c05-172a-4e18-9e2d-00ce08702d0e.png?v=1754946270" alt=""/>
                        <h2>Build your own bundle</h2>
                    </a>
                </li>
                `,
    );

    const buildYourOwnBundleNode = q(
      ' header .button-sec a[href="/products/custom-mixed-bundle-6-box"] ',
    );
    buildYourOwnBundleNode.insertAdjacentHTML(
      "afterend",
      /* HTML */ `<a href="/collections/shop-all" class="btn-toggle"
        >Shop All →</a
      >`,
    );
  }

  function clickFunction() {
    document
      .querySelector(".mobile-menu > button")
      ?.addEventListener("click", () => {
        if (!document.querySelector("html").classList.contains("mobile_slide"))
          return;
        fireGA4Event("MS126_NavView", "Nav View");
      });

    document
      .querySelector("#mobile-slides-content .bundle-sec")
      .addEventListener("click", (e) => {
        fireGA4Event("MS126_NavEngagement", e.target.textContent.trim());
      });
  }

  function createLayout() {
    {
      createLayoutV2();
    }
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
      q('header .bundle-sec > ul > li:has(a[href="/collections/shop-all"])') &&
      q(".mobile-menu > button") &&
      q("#mobile-slides-content .bundle-sec")
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    return false;
  }
})();
