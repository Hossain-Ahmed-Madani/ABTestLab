/*

Figma: https://www.figma.com/design/swfYfWcam6dy9Pt4myxAOM/LME87--BYOB-Steps?node-id=18-261&t=kDUIweIcAErm0xzr-1
Test container: https://marketer.monetate.net/control/a-2087c1e5/p/lemmelive.com/experience/2060558#c2587808:what


URL's

https://lemmelive.com/products/byob-3-pack
https://lemmelive.com/products/byob-4-pack
https://lemmelive.com/products/byob-5-pack

*/

/*

Figma: https://www.figma.com/design/swfYfWcam6dy9Pt4myxAOM/LME87--BYOB-Steps?node-id=18-261&t=kDUIweIcAErm0xzr-1
Test container: https://marketer.monetate.net/control/a-2087c1e5/p/lemmelive.com/experience/2060558#c2587808:what

URL's

https://lemmelive.com/products/byob-3-pack
https://lemmelive.com/products/byob-4-pack
https://lemmelive.com/products/byob-5-pack

*/

const TEST_ID = "LME87";
const VARIANT_ID = "V1"; /* V1, V2, V3 */

function logInfo(message) {
  console.log(
    `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
    "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
    "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
    message,
  );
}

logInfo("fired");

(async () => {
  const TEST_CONFIG = {
    client: "Acadia",
    project: "lemmelive",
    host: "https://lemmelive.com",
    test_name: "LME87: [BYOB] Add Steps to Bundle Builder - (2) SET UP TEST",
    page_initials: "AB-LME87",
    test_variation: 1 /* 1, 2, 3 */,
    test_version: 0.0004,
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

  function qq(s, o) {
    return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
  }

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function updateOnMutation() {
    const selectedItemCount = document.querySelectorAll(
      ".bundle-builder__items .bundle-builder__item.active",
    ).length;

    const bundleSizeEl = document.querySelector(
      ".bundle-builder__form span[data-bundle-builder-total-count]",
    );
    const bundleSize = Number(bundleSizeEl?.textContent || 0);

    const progressLevelEl = q(".ab-progress-step.ab-progress-step--start");
    const progressLevelEndEl = q(".ab-progress-step.ab-progress-step--end");
    const progressEl = q(".ab-progress__progress");

    // Update counts
    if (progressLevelEl) progressLevelEl.innerText = selectedItemCount;
    if (progressLevelEndEl) progressLevelEndEl.innerText = bundleSize;

    // Avoid divide-by-zero + update progress bar
    if (bundleSize > 0 && progressEl) {
      const percentage = Math.floor((selectedItemCount / bundleSize) * 100);
      progressEl.style.width = `${percentage}%`;

      if (progressLevelEl) {
        progressLevelEl.style.left = `calc(${percentage}% - 2%)`;
      }
    }

    // Hide/show left progress bubble
    if (progressLevelEl) {
      progressLevelEl.style.display =
        selectedItemCount === bundleSize ? "none" : "flex";
    }
  }

  function mutationObserverFunction() {
    const targetNode = q(".bundle-builder__items");
    const debouncedUpdate = debounce(updateOnMutation, 250);
    return new MutationObserver(debouncedUpdate).observe(targetNode, {
      childList: true,
      subtree: true,
      attributes: true,
    });
  }

  function getStepHeading(stepNo, label) {
    return /* HTML */ `
      <div class="ab-step-heading ab-step-heading--${stepNo}">
        <span class="ab-step-heading__step-no">${stepNo}</span>
        <span class="ab-step-heading__label">${label}</span>
      </div>
    `;
  }

  function getProgressBarLayout() {
    return /* HTML */ `
      <div class="ab-progress">
        <div class="ab-progress-step ab-progress-step--start">
          ${q(
            ".bundle-builder__form span[data-bundle-builder-item-count-current]",
          ).innerText}
        </div>
        <div class="ab-progress__bar">
          <div class="ab-progress__progress"></div>
        </div>
        <div class="ab-progress-step ab-progress-step--end">
          ${q(".bundle-builder__form span[data-bundle-builder-total-count]")
            .innerText}
        </div>
      </div>
    `;
  }

  function createLayout() {
    [
      {
        htmlContent: `<div class="ab-bundle-builder-form-wrapper"></div>`,
        targetNodeSelector: ".bundle-builder__form",
        insertPosition: "afterbegin",
      },
      {
        htmlContent: getStepHeading(1, "Build Your Bundle"),
        targetNodeSelector: ".bundle-builder__form > h3.heading-4.text-center",
        insertPosition: "afterend",
      },

      {
        htmlContent: `<div class="ab-border"></div> ${getStepHeading(2, "Choose Your Products")} ${getProgressBarLayout()}`,
        targetNodeSelector:
          ".bundle-builder__form > .bundle-builder__pack-size-options",
        insertPosition: "afterend",
      },
      {
        htmlContent: `<div class="ab-border"></div> ${getStepHeading(3, "Choose Your Frequency")}`,
        targetNodeSelector: ".bundle-builder__form > .bundle-builder__items",
        insertPosition: "afterend",
      },
    ].forEach(({ htmlContent, targetNodeSelector, insertPosition }) =>
      q(targetNodeSelector).insertAdjacentHTML(insertPosition, htmlContent),
    );

    qq(
      ".bundle-builder__form > *:not(button.bundle-builder__form-toggle):not(.ab-bundle-builder-form-wrapper)",
    ).forEach((item) => q(".ab-bundle-builder-form-wrapper").appendChild(item));
  }

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);
    createLayout();
    {
      updateOnMutation();
      mutationObserverFunction();
    }
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(${page_initials}--v${test_variation})`,
      ) &&
      q(".bundle-builder__form") &&
      q(".bundle-builder__form span[data-bundle-builder-item-count-current]")
        .innerText &&
      q(".bundle-builder__form span[data-bundle-builder-total-count]").innerText
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    return false;
  }
})();
