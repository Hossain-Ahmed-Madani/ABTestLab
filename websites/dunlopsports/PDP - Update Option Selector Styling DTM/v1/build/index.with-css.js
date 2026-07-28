(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-UPDATE-OPTION-SELECTOR {
  /* checkbox options style */
  /* ========== NEW ========== */
}
.AB-UPDATE-OPTION-SELECTOR .ab-option-wrapper .select-trigger {
  display: none !important;
}
.AB-UPDATE-OPTION-SELECTOR .ab-option-wrapper .select-options {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  overflow-y: auto;
  position: static !important;
  margin-left: 0px;
  margin-top: 5px;
}
.AB-UPDATE-OPTION-SELECTOR .ab-option-wrapper.active .select-options {
  display: flex !important;
  flex-wrap: wrap;
}
.AB-UPDATE-OPTION-SELECTOR .ab-option-wrapper .select-options .select-option {
  align-items: center !important;
  padding: 0 15px !important;
  font-size: 13px;
  font-family: var(--global-font);
  height: 45px !important;
  width: auto;
  min-width: 100px !important;
  line-height: 13px;
  letter-spacing: 0;
  border: 1px solid #c4c2c3;
  white-space: nowrap;
}
.AB-UPDATE-OPTION-SELECTOR
  .ab-option-wrapper
  .select-options
  .select-option.disabled {
  display: none !important;
  text-decoration: line-through;
  color: #71767a !important;
  cursor: not-allowed !important;
  background-color: #f4f4f4 !important;
  border: 1px solid #c4c2c3 !important;
  font-weight: 400 !important;
}
.AB-UPDATE-OPTION-SELECTOR
  .ab-option-wrapper
  .select-options
  .select-option.disabled:hover {
  background-color: #f4f4f4 !important;
  border-color: #c4c2c3 !important;
  color: #71767a !important;
  font-weight: 400 !important;
}
.AB-UPDATE-OPTION-SELECTOR
  .ab-option-wrapper
  .select-options
  .select-option[data-reset="true"] {
  background-color: var(--brand-color-bg);
  border-color: var(--brand-color-bg);
  color: var(--brand-color-bg-text);
  font-weight: 700;
}
.AB-UPDATE-OPTION-SELECTOR .ab-checkbox-wrapper {
  margin-left: 0px;
  margin-top: 5px;
}
.AB-UPDATE-OPTION-SELECTOR .ab-checkbox-wrapper .select-list__item {
  padding: 0;
  width: auto !important;
}
.AB-UPDATE-OPTION-SELECTOR .ab-checkbox-wrapper div:has(> .select-list__item) {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
}
.AB-UPDATE-OPTION-SELECTOR .ab-checkbox-wrapper .select-list__item input {
  display: none !important;
}
.AB-UPDATE-OPTION-SELECTOR .ab-checkbox-wrapper .select-list__item label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-family: var(--global-font);
  height: 45px !important;
  width: auto;
  min-width: 100px !important;
  line-height: 13px;
  letter-spacing: 0;
  justify-content: center;
  border: 1px solid #c4c2c3;
  cursor: pointer;
  padding: 0 15px;
}
.AB-UPDATE-OPTION-SELECTOR
  .ab-checkbox-wrapper
  .select-list__item:has(input:checked)
  label,
.AB-UPDATE-OPTION-SELECTOR
  .ab-checkbox-wrapper
  .select-list__item:has(input[checked])
  label {
  background-color: var(--brand-color-bg);
  border-color: var(--brand-color-bg);
  color: var(--brand-color-bg-text);
  font-weight: 700;
  width: initial;
}
.AB-UPDATE-OPTION-SELECTOR
  .ab-checkbox-wrapper
  .select-list__item:has(input[disabled])
  label {
  text-decoration: line-through;
  color: #71767a !important;
  cursor: not-allowed !important;
  background-color: #f4f4f4 !important;
  border: 1px solid #c4c2c3 !important;
  font-weight: 400 !important;
}
.AB-UPDATE-OPTION-SELECTOR
  .ab-checkbox-wrapper
  .select-list__item:has(input[disabled])
  label:hover {
  background-color: #f4f4f4 !important;
  border-color: #c4c2c3 !important;
  color: #71767a !important;
  font-weight: 400 !important;
}
.AB-UPDATE-OPTION-SELECTOR .ab-checkbox-wrapper .select-list__item:hover {
  cursor: pointer;
  background: #000;
  color: #fff;
}
.AB-UPDATE-OPTION-SELECTOR
  .ab-checkbox-wrapper
  .select-list__item:has(> input.select-list__item__input[disabled]) {
  display: none;
}
@media screen and (min-width: 768px) {
  .AB-UPDATE-OPTION-SELECTOR .ab-option-wrapper .select-options .select-option {
    min-width: 108px !important;
  }
  .AB-UPDATE-OPTION-SELECTOR .ab-checkbox-wrapper .select-list__item label {
    min-width: 108px !important;
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
(async function () {
  const TEST_CONFIG = {
    page_initials: "AB-UPDATE-OPTION-SELECTOR",
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

  function injectClasses() {
    const stockEl = document.querySelector(
      '.js-stock-visible[aria-labelledby*="stock-tab"]',
    );

    const tabContent = stockEl.querySelector(".tab-content");
    if (!tabContent) return;
    const headItems = tabContent.querySelectorAll(".attribute");

    headItems.forEach((item) => {
      const optionList = item.querySelector(".select .select-wrapper");
      const checkboxList = item.querySelector(".select-list");
      if (optionList && !optionList.classList.contains("ab-option-wrapper")) {
        optionList.classList.add("ab-option-wrapper");
        const selectOptions = optionList.querySelectorAll(".select-option");
        selectOptions.forEach((option) => {
          if (option.classList.contains("disabled")) {
            option.classList.add("ab-option-disabled");
            const span = option.querySelector("span");
            if (span) span.style.display = "none";
          }
        });
      }
      if (
        checkboxList &&
        !checkboxList.classList.contains("ab-checkbox-wrapper")
      ) {
        checkboxList.classList.add("ab-checkbox-wrapper");
      }
    });
  }

  function mutationObserverFunction() {
    const stockEl = document.querySelector(
      '.js-stock-visible[aria-labelledby*="stock-tab"]',
    );
    const debouncedUpdate = debounce(injectClasses, 250);
    return new MutationObserver(debouncedUpdate).observe(stockEl, {
      childList: true,
      subtree: true,
      attributes: false,
    });
  }

  function init() {
    if (window[page_initials] === true) return;
    document
      .querySelector("body")
      .classList.add(
        page_initials,
        `${page_initials}--v${test_variation}`,
        `${page_initials}--version:${test_version}`,
      );
    window[page_initials] = true;

    injectClasses();
    mutationObserverFunction();
  }

  function checkConditions() {
    return !!(
      document.querySelector(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      document.querySelector(".nav-tabs .nav-link") &&
      document
        .querySelector(".nav-tabs .nav-link")
        .textContent.trim()
        .toLowerCase()
        .includes("stock") &&
      document.querySelector('.js-stock-visible[aria-labelledby*="stock-tab"]')
    );
  }

  await waitForElementAsync(checkConditions);
  init();
})();
