// https://springhillnursery.com/collections/shipping-now

(() => {
    const TEST_CONFIG = {
        client: "ROI Revolution",
        project: "springhillnursery",
        site_url: "https://springhillnursery.com/",
        test_name: "Product Listing Page - Show Discount Percentage [DTM]",
        page_initials: "AB-PLP-DTM",
        test_variation: 1,
        test_version: 0.0001,
    };

    function waitForElement(predicate, callback, timer = 10000, frequency = 100) {
        try {
            if (timer <= 0) {
                throw new Error(`Timeout reached while waiting for condition: ${predicate.toString()}`);
            } else if (predicate && predicate()) {
                callback();
            } else {
                setTimeout(() => {
                    waitForElement(predicate, callback, timer - frequency, frequency);
                }, frequency);
            }
        } catch (error) {
            return;
        }
    }

    function getDiscountPercentage(saleElement) {
        // Find the <s> (original price) and the current price in the sale element
        const originalPriceEl = saleElement.querySelector("s");
        if (!originalPriceEl) return null;

        // Extract price numbers using regex
        const originalPriceMatch = originalPriceEl.textContent.match(/[\d,.]+/);
        const saleText = saleElement.textContent;
        const salePriceMatch = saleText.match(/\$\s?([\d,.]+)/g);

        if (!originalPriceMatch || !salePriceMatch || salePriceMatch.length < 2) return null;

        // The last match is the sale price
        const originalPrice = parseFloat(originalPriceMatch[0].replace(/,/g, ""));
        const salePrice = parseFloat(salePriceMatch[salePriceMatch.length - 1].replace(/[^0-9.]/g, ""));

        if (isNaN(originalPrice) || isNaN(salePrice) || originalPrice <= salePrice) return null;

        // Calculate discount percentage
        const discount = ((originalPrice - salePrice) / originalPrice) * 100;
        return Math.round(discount);
    }

    function createLayout() {
        const targetNodes = document.querySelectorAll(".product-item__price-wrap:has(.sale)");
        targetNodes.forEach((node) => {

            let savingsBadge = node.querySelector(".ab-savings-percentage");
            if (!savingsBadge) {
                savingsBadge = document.createElement("span");
                savingsBadge.className = "displayed-discount badge-shape fs-body-75 ab-savings-percentage";
                savingsBadge.setAttribute("data-badge-shape", "rounded-rectangle");
                node.insertAdjacentElement("beforeend", savingsBadge);
            }

            savingsBadge.innerText = 'Save' + getDiscountPercentage(node.querySelector(".sale")) + '%'; /* Save 22% */
        });
    }

    function mutationObserverFunction() {
        const targetNode = document.querySelector(".collection__products-container #root");

        new MutationObserver((mutationList, observer) => {
            createLayout();
        }).observe(targetNode, { childList: true /*  , subtree: true */ });
    }

    function init() {
        document.body.classList.add(
            TEST_CONFIG.page_initials,
            `${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}`,
            `${TEST_CONFIG.page_initials}--version${TEST_CONFIG.test_version}`
        );

        console.table(TEST_CONFIG);
        createLayout();
        mutationObserverFunction();
    }

    function hasAllTargetElements() {
        return !!(
            window.location.href.includes("/collections/") &&
            document.querySelector(`body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`) &&
            document.querySelector(".collection__products-container #root")
        );
    }

    waitForElement(hasAllTargetElements, init);
})();
