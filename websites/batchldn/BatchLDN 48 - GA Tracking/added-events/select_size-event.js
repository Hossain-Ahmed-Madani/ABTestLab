// ============================================================
// Publish Shopify Custom Event: select_size
// Triggered by observing changes to the hidden variant id input
// inside the installment form (#product-form-installment-*)
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

    function getCurrencyCode() {
        return (window.Shopify && Shopify.currency && Shopify.currency.active) || (window.ShopifyAnalytics && ShopifyAnalytics.meta && ShopifyAnalytics.meta.currency) || "GBP";
    }

    function findVariantById(product, variantId) {
        if (!product || !product.variants || !variantId) return null;
        return (
            product.variants.find(function (variant) {
                return String(variant.id) === String(variantId);
            }) || null
        );
    }

    function publishSelectSizeEvent(product, variant) {
        if (!product || !variant) return;

        const data = {
            url: window.location.href,
            currency: getCurrencyCode(),
            value: variant.price / 100,
            items: [
                {
                    item_id: String(variant.id),
                    item_sku: variant.sku ? String(variant.sku) : "",
                    item_name: product.title,
                    item_brand: product.vendor,
                    item_category: product.type,
                    item_variant: variant.title,
                    price: variant.price / 100,
                    quantity: 1,
                },
            ],
        };

        Shopify.analytics.publish("select_size", data);
    }

    function watchVariantIdInput(product, inputEl) {
        if (!inputEl || inputEl.dataset.selectSizeWatched === "true") return;
        inputEl.dataset.selectSizeWatched = "true";

        let lastValue = inputEl.value;

        const debouncedPublishSelectSizeEvent = debounce(publishSelectSizeEvent, 100)

        const handleChange = function () {
            const currentValue = inputEl.value;
            if (currentValue === lastValue) return;
            lastValue = currentValue;

            const variant = findVariantById(product, currentValue);
            debouncedPublishSelectSizeEvent(product, variant);
        };

        // Catch native events (change/input) in case the value is set via a real form control
        inputEl.addEventListener("change", handleChange);
        inputEl.addEventListener("input", handleChange);

        // Catch attribute-based updates (setAttribute('value', ...))
        const attributeObserver = new MutationObserver(handleChange);
        attributeObserver.observe(inputEl, { attributes: true, attributeFilter: ["value"] });

        // Catch programmatic property updates (input.value = '...'), which do NOT
        // trigger attribute mutations or native events — override the value setter.
        const proto = Object.getPrototypeOf(inputEl);
        const nativeDescriptor = Object.getOwnPropertyDescriptor(proto, "value");
        if (nativeDescriptor && nativeDescriptor.configurable) {
            Object.defineProperty(inputEl, "value", {
                get: function () {
                    return nativeDescriptor.get.call(this);
                },
                set: function (val) {
                    nativeDescriptor.set.call(this, val);
                    handleChange();
                },
                configurable: true,
            });
        }
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

    function initSelectSizeTracking() {
        const product = getProductData();
        if (!product) return;

        const formSelector = 'form[action="/cart/add"][data-product-form-installment]';
        const inputSelector = 'form[action="/cart/add"][data-product-form-installment] input[name="id"]';

        // Attach to any matching input already present
        document.querySelectorAll(inputSelector).forEach(function (input) {
            watchVariantIdInput(product, input);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initSelectSizeTracking);
    } else {
        initSelectSizeTracking();
    }
})();
