// ticket: https://trello.com/c/abZ2YUSs/3955-product-listing-page-show-discount-percentage-dtm
// https://springhillnursery.com/collections/shipping-now

(() => {
    const TEST_CONFIG = {
        client: "ROI Revolution",
        project: "springhillnursery",
        site_url: "https://springhillnursery.com/",
        test_name: "Product Listing Page - Show Discount Percentage [DTM]",
        page_initials: "AB-PLP-DTM",
        test_variation: 1,
        test_version: 0.0002,
    };

    function waitForElement(predicate, callback, timer = 10000, frequency = 100) {
        if (timer <= 0) {
            console.warn(`Timeout reached while waiting for condition: ${predicate.toString()}`);
            return;
        } else if (predicate && predicate()) {
            callback();
        } else {
            setTimeout(() => {
                waitForElement(predicate, callback, timer - frequency, frequency);
            }, frequency);
        }
    }

    function getDiscountPercentage(saleEl, originalPriceEl) {
        let originalPrice, salePrice;

        // Check if there's a strikethrough element inside saleEl
        if (saleEl.querySelector("s.t-subdued")) {
            // Extract original price from the dedicated element
            const originalPriceText = originalPriceEl.textContent;
            const originalPriceMatch = originalPriceText.match(/[\d,.]+/);

            // Extract sale price from sale element
            const saleText = saleEl.textContent;
            const salePriceMatch = saleText.match(/\$\s?([\d,.]+)/g);

            if (!originalPriceMatch || !salePriceMatch || salePriceMatch.length < 2) return null;

            // Parse prices
            originalPrice = parseFloat(originalPriceMatch[0].replace(/,/g, ""));
            salePrice = parseFloat(salePriceMatch[salePriceMatch.length - 1].replace(/[^0-9.]/g, ""));

            if (isNaN(originalPrice) || isNaN(salePrice) || originalPrice <= salePrice) return null;
        } else {
            // Handle case where original price is not inside sale element
            // Extract both prices from their respective elements
            const originalPriceText = originalPriceEl.textContent;
            const salePriceText = saleEl.textContent;

            const originalPriceMatch = originalPriceText.match(/[\d,.]+/);
            const salePriceMatch = salePriceText.match(/[\d,.]+/);

            if (!originalPriceMatch || !salePriceMatch) return null;

            originalPrice = parseFloat(originalPriceMatch[0].replace(/,/g, ""));
            salePrice = parseFloat(salePriceMatch[0].replace(/,/g, ""));

            if (isNaN(originalPrice) || isNaN(salePrice) || originalPrice <= salePrice) return null;
        }

        // Calculate discount percentage
        const discount = ((originalPrice - salePrice) / originalPrice) * 100;
        return Math.round(discount);
    }

    function createLayout() {
        const targetNodes = document.querySelectorAll(".product-item__price-wrap:has(.sale)");
        targetNodes.forEach((cNode, index) => {
            let savingsBadge = cNode.closest(".ab-savings-percentage");
            if (!savingsBadge) {
                savingsBadge = document.createElement("span");
                savingsBadge.className = "displayed-discount badge-shape fs-body-75 ab-savings-percentage";
                savingsBadge.setAttribute("data-badge-shape", "rounded-rectangle");
                cNode.insertAdjacentElement("afterend", savingsBadge);
            }

            const saleEl = cNode.querySelector(".sale");
            const originalPriceEl = cNode.querySelector("s.t-subdued");

            savingsBadge.innerText = "Save " + getDiscountPercentage(saleEl, originalPriceEl) + "%"; /* Save 22% */
        });
    }

    function mutationObserverFunction() {
        const targetNode = document.querySelector(".collection__products-container #root");

        new MutationObserver((mutationList, observer) => {
            createLayout();
        }).observe(targetNode, { childList: true /*  , subtree: true */ });
    }

    function init() {
        console.table(TEST_CONFIG);
        const { page_initials, test_variation, test_version } = TEST_CONFIG;
        document.body.classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version${test_version}`);
        
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
