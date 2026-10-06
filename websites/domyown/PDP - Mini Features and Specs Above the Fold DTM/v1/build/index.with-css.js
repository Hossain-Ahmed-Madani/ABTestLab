(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `@charset "UTF-8";
.AB-PDP-MINI-FEATURES .pf-list {
  padding-left: 1.25rem;
}
.AB-PDP-MINI-FEATURES .pf-item {
  position: relative;
}
.AB-PDP-MINI-FEATURES .pf-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-align: justify;
}
.AB-PDP-MINI-FEATURES .pf-text b {
  display: inline;
}
.AB-PDP-MINI-FEATURES .pf-text span {
  text-align: justify;
}
.AB-PDP-MINI-FEATURES .pf-toggle {
  position: absolute;
  right: 0;
  bottom: 0;
  padding-left: 28px;
  border: 0;
  cursor: pointer;
  background: linear-gradient(to right, transparent, #fff 24px);
  color: #2a5db0;
  font: inherit;
  text-decoration: underline;
  border: none;
  outline: none;
}
.AB-PDP-MINI-FEATURES .pf-toggle:hover {
  color: #d2272a;
}
.AB-PDP-MINI-FEATURES .pf-toggle[hidden] {
  display: none;
}
.AB-PDP-MINI-FEATURES .pf-item.open .pf-text {
  display: block;
  overflow: visible;
  -webkit-line-clamp: unset;
}
.AB-PDP-MINI-FEATURES .pf-item.open .pf-toggle {
  position: static;
  display: inline;
  margin-top: 2px;
  padding: 0;
  text-align: left;
  background: none;
}
.AB-PDP-MINI-FEATURES .ab-product-features li.pf-item {
  list-style: none;
}
.AB-PDP-MINI-FEATURES .ab-product-features li.pf-item::marker {
  display: none !important;
  opacity: 0;
}
.AB-PDP-MINI-FEATURES .ab-product-features li.pf-item::before {
  content: "•";
  position: absolute;
  left: -15px;
  top: -4px;
  color: #424242 !important;
  font-size: 1.3rem;
  font-family:
    Open Sans,
    Helvetica,
    Arial,
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
}
.AB-PDP-MINI-FEATURES .ab-product-features-container {
  padding-left: 0;
}
.AB-PDP-MINI-FEATURES .ab-product-features-container ul {
  margin-left: -0.8rem;
  margin-bottom: 6px;
}

#mobile.AB-PDP-MINI-FEATURES
  #product-features.ab-control-feature-item
  h2.text-xl {
  font-size: 1.25rem;
  color: #315caa;
  margin-bottom: 0.5rem;
}
#mobile.AB-PDP-MINI-FEATURES
  #product-features.ab-control-feature-item
  li.text-blue.mt-1,
#mobile.AB-PDP-MINI-FEATURES
  #product-features.ab-control-feature-item
  li.text-blue.mt-1
  span {
  color: #424242;
}
#mobile.AB-PDP-MINI-FEATURES .ab-product-features {
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
}
#mobile.AB-PDP-MINI-FEATURES .ab-product-features h4.text-blue.text-sm {
  font-size: 1.25rem;
  color: #315caa;
  margin-bottom: 0.5rem;
}
#mobile.AB-PDP-MINI-FEATURES .ab-product-features .pf-item::marker {
  display: none !important;
  opacity: 0;
}
#mobile.AB-PDP-MINI-FEATURES .ab-product-features li.pf-item::before {
  top: -6px;
  font-size: 1.5rem;
}
#mobile.AB-PDP-MINI-FEATURES .ab-product-features .pf-text {
  font-size: 1rem;
  line-height: 1.5;
}
#mobile.AB-PDP-MINI-FEATURES p.ab-see-application-instructions {
  display: none;
}
#mobile.AB-PDP-MINI-FEATURES .ab-product-features-container ul {
  margin-left: -1.2rem;
}
#mobile.AB-PDP-MINI-FEATURES .ab-product-features-container ul li {
  margin-bottom: 3px;
}

#desktop.AB-PDP-MINI-FEATURES div:has(> #product-features) {
  border-bottom: 0;
  padding-bottom: 0;
}
#desktop.AB-PDP-MINI-FEATURES #product-features h4.text-blue.text-sm {
  margin-bottom: 6px;
}
#desktop.AB-PDP-MINI-FEATURES p.ab-see-application-instructions {
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0;
  font-weight: 400;
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
    page_initials: "AB-PDP-MINI-FEATURES",
    test_variation: 1 /* 1, 2 */,
    test_version: 0.0003,
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
  // function handleExpandCollapse(item) {
  //     const text = q(item, ".pf-text");
  //     const btn = q(item, ".pf-toggle");

  //     // Show the button only if the clamped text is actually cut off
  //     const checkOverflow = () => {
  //         const wasOpen = item.classList.contains("open");
  //         item.classList.remove("open");
  //         btn.hidden = text.scrollHeight <= text.clientHeight + 1;
  //         item.classList.toggle("open", wasOpen && !btn.hidden);
  //         btn.textContent = item.classList.contains("open") ? "Collapse" : "Expand";
  //     };

  //     btn.addEventListener("click", () => {
  //         const open = item.classList.toggle("open");
  //         btn.textContent = open ? "Collapse" : "Expand";
  //     });

  //     checkOverflow();
  //     window.addEventListener("resize", checkOverflow);
  // }

  function handleExpandCollapse(item) {
    const text = q(item, ".pf-text");
    const content = q(item, ".pf-text-content");
    const btn = q(item, ".pf-toggle");

    // Keep original markup for the expanded state; collapsed state gets <br> flattened to spaces
    const fullHTML = content.innerHTML;
    const flatHTML = fullHTML.replace(/(\s*<br\s*\/?>\s*)+/gi, " ").trim();

    const render = (open) => {
      // content.innerHTML = open ? fullHTML : flatHTML;
      content.innerHTML = flatHTML;
    };

    // Show the button only if the clamped text is actually cut off
    const checkOverflow = () => {
      const wasOpen = item.classList.contains("open");

      item.classList.remove("open");
      render();

      btn.hidden = text.scrollHeight <= text.clientHeight + 1;

      const stillOpen = wasOpen && !btn.hidden;
      item.classList.toggle("open", stillOpen);
      render();
      btn.textContent = stillOpen ? "Collapse" : "Expand";
    };

    btn.addEventListener("click", () => {
      const open = item.classList.toggle("open");
      render();
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

    !!q("#mobile");
    const productFeaturesControl = q("#product-features");
    productFeaturesControl?.classList.add("ab-control-feature-item");

    const data = getSpecsData();
    if (data.length >= 3) {
      createLayoutAndAddToggleFunctionality(data);
    }

    if (productFeaturesControl) {
      q(".ab-product-features-container")?.classList.add("hidden");
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
