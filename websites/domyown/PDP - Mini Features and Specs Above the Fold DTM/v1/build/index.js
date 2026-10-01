(async () => {
  const TEST_CONFIG = {
    client: "ROI Revolution",
    project: "Do My Own",
    site_url: "https://www.domyown.com",
    test_name: "PDP - Mini Features and Specs Above the Fold [DTM]",
    page_initials: "AB-PDP-MINI-FEATURES",
    test_variation: 2 /* 1, 2 */,
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const SPEC_LIST_ROW_ORDER = [
    "Target pests",
    "Active Ingredient",
    "Manufacturer",
    "Sprayer Type",
    "Tank Size",
    "For use In",
    "Coverage Area",
    "Special Features",
    "Parts Included",
    "Yield",
  ];

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

  // 4. Expand / collapse
  function handleExpandCollapse(item) {
    const text = q(item, ".pf-text");
    const btn = q(item, ".pf-toggle");

    // Show the button only if the clamped text is actually cut off
    const checkOverflow = () => {
      const wasOpen = item.classList.contains("open");
      item.classList.remove("open");
      btn.hidden = text.scrollHeight <= text.clientHeight + 1;
      item.classList.toggle("open", wasOpen && !btn.hidden);
      btn.textContent = item.classList.contains("open") ? "Collapse" : "Expand";
    };

    btn.addEventListener("click", () => {
      const open = item.classList.toggle("open");
      btn.textContent = open ? "Collapse" : "Expand";
    });

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
  }

  function getSpecsData() {
    const obj = {};
    qq("#product-page-specs tr").forEach((tr) => {
      const key = q(tr, "th").textContent?.trim() || "";
      const htmlContent = q(tr, "td").innerHTML.trim() || "";
      if (key && htmlContent && !obj[key]) {
        obj[key] = htmlContent;
      }
    });

    const foundList = [];

    SPEC_LIST_ROW_ORDER.forEach((rowName) => {
      if (obj[rowName]) {
        foundList.push({
          label: rowName,
          htmlContent: obj[rowName],
        });

        delete obj[rowName];
      }
    });

    Object.keys(obj).forEach((rowName) => {
      foundList.push({
        label: rowName,
        htmlContent: obj[rowName],
      });
    });

    return foundList;
  }

  function createLayoutAndAddToggleFunctionality(data) {
    const targetNode = q(
      "#mobile #product-page-nav, #desktop .leading-none:has(.price-breaks)",
    );
    targetNode.insertAdjacentHTML(
      "beforebegin",
      /* HTML */ `
        <div
          class="ab-product-features-container px-2 border-grey-light border-b-6 pb-2"
        >
          <div
            class="ab-product-features text-sm text-grey-darker mb-4"
            id="product-features"
          >
            <h4 class="text-blue text-sm">
              ${q("#mobile") ? "Product Highlights" : "Product Features"}
            </h4>
            <ul class="-ml-6">
              ${data
                .slice(0, 3)
                .map(
                  (item) => /* HTML */ `
                    <li class="text-xs text-blue pf-item">
                      <span class="text-sm text-grey-darker pf-text">
                        <strong>${item.label}:</strong>
                        <span class="pf-text-content">${item.htmlContent}</span>
                        <button type="button" class="pf-toggle" hidden>
                          Expand
                        </button>
                      </span>
                    </li>
                  `,
                )
                .join("")}
            </ul>
            <p class="ab-see-application-instructions">
              <i
                >See application instructions and more detail in the Features
                and Specs section.</i
              >
            </p>
          </div>
        </div>
      `,
    );

    document.fonts.ready.then(() => {
      qq(".pf-item").forEach(handleExpandCollapse);
    });
  }

  function init() {
    if (window[TEST_CONFIG] === true) return;

    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    window[TEST_CONFIG] = true;
    console.table(TEST_CONFIG);

    const isMobile = !!q("#mobile");
    const productFeaturesControl = q("#product-features");
    productFeaturesControl?.classList.add("ab-control-feature-item");

    const data = getSpecsData();
    if (data.length >= 3) {
      createLayoutAndAddToggleFunctionality(data);
    }

    if (data.length >= 3) {
      productFeaturesControl?.classList.add("hidden");
      if (isMobile) productFeaturesControl?.parentNode?.classList.add("hidden");
    }
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(
        "#mobile #product-page-nav, #desktop .leading-none:has(.price-breaks)",
      ) &&
      q("#product-page-specs tr") &&
      document.readyState !== "loading"
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    return false;
  }
})();
