// ============================================================
// Ticket: BatchLDN 48 - GA Tracking
// ============================================================

console.log("======== BatchLDN 48 - GA Tracking ===========");

// ============================================================
// Shopify Standard Event: null
// Publish Shopify Custom Event: select_size
// ============================================================

(function () {
    function getProductData() {
        const script = document.querySelector("script[data-product-json]");
        if (!script) return null;
        try {
            return JSON.parse(script.textContent);
        } catch (e) {
            return null;
        }
    }

    function getSelectedOptions(product) {
        // Reads the value of every option selector on the PDP (Jacket Size, Trouser Size, Colour, etc.)
        const selectors = document.querySelectorAll("[data-single-option-selector]");
        const options = [];
        selectors.forEach(function (input) {
            options.push(input.value);
        });
        return options;
    }

    function findMatchingVariant(product, selectedOptions) {
        if (!product || !product.variants) return null;

        return (
            product.variants.find(function (variant) {
                return selectedOptions.every(function (val, i) {
                    const key = "option" + (i + 1);
                    return variant[key] === val;
                });
            }) || null
        );
    }

    function getCurrencyCode() {
        return (window.Shopify && Shopify.currency && Shopify.currency.active) || (window.ShopifyAnalytics && ShopifyAnalytics.meta && ShopifyAnalytics.meta.currency) || "GBP";
    }

    function pushSelectSizeEvent(product, variant, sizeLabel, sizeValue) {
        if (!product || !variant) return;

        const data = {
            url: window.location.href,
            size_option_name: sizeLabel,
            size_option_value: sizeValue,
            currency: getCurrencyCode(),
            value: variant.price / 100,
            items: [
                {
                    item_id: String(variant.id),
                    item_sku: String(variant.sku),
                    item_name: product.title,
                    item_brand: product.vendor,
                    item_category: product.type,
                    item_variant: variant.title,
                    price: variant.price / 100,
                    quantity: 1,
                },
            ],
        };

        console.log("select_size, Publish", data);
        Shopify.analytics.publish("select_size", data);
    }

    function initSelectSizeTracking() {
        const product = getProductData();
        if (!product) return;

        // Delegate click listener to catch all size option links, including future re-renders
        document.querySelector(".product__page .form__width").addEventListener("click", function (e) {
            const optionEl = e.target.closest("[data-popout-option]");
            if (!optionEl) return;

            const popoutSelect = optionEl.closest("popout-select");
            if (!popoutSelect) return;

            const legendLabel = popoutSelect.closest("fieldset")?.querySelector(".radio__legend__option-name");
            const sizeLabel = legendLabel ? legendLabel.childNodes[0].textContent.trim() : "Size";

            const sizeValue = optionEl.getAttribute("data-value");

            // Wait a tick for the hidden input value to update (theme.js updates it on click)
            setTimeout(function () {
                const selectedOptions = getSelectedOptions();
                const variant = findMatchingVariant(product, selectedOptions);
                pushSelectSizeEvent(product, variant, sizeLabel, sizeValue);
            }, 50);
        });

        // Also catch native <select> fallback (noscript / mobile select dropdown)
        document.querySelector(".product__page .form__width").addEventListener("change", function (e) {
            const select = e.target.closest("select[data-single-option-selector], select.product__form__select");
            if (!select) return;

            setTimeout(function () {
                const selectedOptions = getSelectedOptions();
                const variant = findMatchingVariant(product, selectedOptions);
                pushSelectSizeEvent(product, variant, "Size", select.value);
            }, 50);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initSelectSizeTracking);
    } else {
        initSelectSizeTracking();
    }
})();
