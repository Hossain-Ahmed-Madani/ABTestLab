(function () {
    function getProductData() {
        var script = document.querySelector("script[data-product-json]");
        if (!script) return null;
        try {
            return JSON.parse(script.textContent);
        } catch (e) {
            console.error("select_size: failed to parse product JSON", e);
            return null;
        }
    }

    function getSelectedOptions(product) {
        // Reads the value of every option selector on the PDP (Jacket Size, Trouser Size, Colour, etc.)
        var selectors = document.querySelectorAll("[data-single-option-selector]");
        var options = [];
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
                    var key = "option" + (i + 1);
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

        window.dataLayer = window.dataLayer || [];

        // Clear previous ecommerce object per GA4 best practice
        window.dataLayer.push({ ecommerce: null });

        console.log({
            event: "select_size",
            url: window.location.href,
            size_option_name: sizeLabel,
            size_option_value: sizeValue,
            ecommerce: {
                currency: getCurrencyCode(),
                value: variant.price / 100,
                items: [
                    {
                        item_id: String(variant.sku || variant.id),
                        item_name: product.title,
                        item_brand: product.vendor,
                        item_category: product.type,
                        item_variant: variant.title,
                        price: variant.price / 100,
                        quantity: 1,
                    },
                ],
            },
        });

        return;

        window.dataLayer.push({
            event: "select_size",
            url: window.location.href,
            size_option_name: sizeLabel,
            size_option_value: sizeValue,
            ecommerce: {
                currency: getCurrencyCode(),
                value: variant.price / 100,
                items: [
                    {
                        item_id: String(variant.sku || variant.id),
                        item_name: product.title,
                        item_brand: product.vendor,
                        item_category: product.type,
                        item_variant: variant.title,
                        price: variant.price / 100,
                        quantity: 1,
                    },
                ],
            },
        });
    }

    function initSelectSizeTracking() {
        var product = getProductData();
        if (!product) return;

        // Delegate click listener to catch all size option links, including future re-renders
        document.addEventListener("click", function (e) {
            var optionEl = e.target.closest("[data-popout-option]");
            if (!optionEl) return;

            var popoutSelect = optionEl.closest("popout-select");
            if (!popoutSelect) return;

            var legendLabel = popoutSelect.closest("fieldset")?.querySelector(".radio__legend__option-name");
            var sizeLabel = legendLabel ? legendLabel.childNodes[0].textContent.trim() : "Size";

            var sizeValue = optionEl.getAttribute("data-value");

            // Wait a tick for the hidden input value to update (theme.js updates it on click)
            setTimeout(function () {
                var selectedOptions = getSelectedOptions(product);
                var variant = findMatchingVariant(product, selectedOptions);
                pushSelectSizeEvent(product, variant, sizeLabel, sizeValue);
            }, 50);
        });

        // Also catch native <select> fallback (noscript / mobile select dropdown)
        document.addEventListener("change", function (e) {
            var select = e.target.closest("select[data-single-option-selector], select.product__form__select");
            if (!select) return;

            setTimeout(function () {
                var selectedOptions = getSelectedOptions(product);
                var variant = findMatchingVariant(product, selectedOptions);
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
