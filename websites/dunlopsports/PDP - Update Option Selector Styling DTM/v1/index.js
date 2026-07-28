(async function () {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Dunlop Sports",
        site_url: "https://us.dunlopsports.com",
        test_name: "PDP - Update Option Selector Styling [DTM]",
        page_initials: "AB-UPDATE-OPTION-SELECTOR",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    async function waitForElementAsync(predicate, timeout = 20000, frequency = 150) {
        const startTime = Date.now();

        return new Promise((resolve, reject) => {
            if (typeof predicate === "function" && predicate()) {
                return resolve(true);
            }

            const interval = setInterval(() => {
                const elapsed = Date.now() - startTime;

                if (elapsed >= timeout) {
                    clearInterval(interval);
                    return reject(new Error(`Timeout of ${timeout}ms reached while waiting for condition: ${predicate.toString()}`));
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
        const stockEl = document.querySelector('.js-stock-visible[aria-labelledby*="stock-tab"]');

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
            if (checkboxList && !checkboxList.classList.contains("ab-checkbox-wrapper")) {
                checkboxList.classList.add("ab-checkbox-wrapper");
            }
        });
    }

    function mutationObserverFunction() {
        const stockEl = document.querySelector('.js-stock-visible[aria-labelledby*="stock-tab"]');
        const debouncedUpdate = debounce(injectClasses, 250);
        return new MutationObserver(debouncedUpdate).observe(stockEl, { childList: true, subtree: true, attributes: false });
    }

    function init() {
        if (window[page_initials] === true) return;
        document.querySelector("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;

        injectClasses();
        mutationObserverFunction();
    }

    function checkConditions() {
        return !!(
            document.querySelector(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            document.querySelector(".nav-tabs .nav-link") &&
            document.querySelector(".nav-tabs .nav-link").textContent.trim().toLowerCase().includes("stock") &&
            document.querySelector('.js-stock-visible[aria-labelledby*="stock-tab"]')
        );
    }

    await waitForElementAsync(checkConditions);
    init();
})();
