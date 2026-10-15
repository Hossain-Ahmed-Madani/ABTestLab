console.log("=========== BatchLDN 48 - GA Tracking | Custom Working Tree =================");

// ============================================================
// Publish Shopify Custom Event: select_size
// Triggered by observing changes to the hidden variant id input
// inside the installment form (#product-form-installment-*)
// ============================================================

(function () {
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

        const debouncedPublishSelectSizeEvent = debounce(publishSelectSizeEvent, 100);

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

// ============================================================
// Shopify Standard Event: null
// Publish Shopify Custom Event: login
// GA4 Event: login
// ============================================================

(function () {
    const currentCustomerId = window.gaLoginCustomerId;

    if (!currentCustomerId) {
        // Logged out / not logged in — clear all tracking state
        // so the next login (same or different account) fires fresh
        sessionStorage.removeItem("ga_login_sent");
        localStorage.removeItem("ga_login_customer_id");
        return;
    }

    const storedCustomerId = localStorage.getItem("ga_login_customer_id");
    const loginSent = sessionStorage.getItem("ga_login_sent");

    // Already published during this session
    if (loginSent === "1") return;

    // Customer was already tracked in a previous session (and hasn't logged out since)
    if (storedCustomerId === currentCustomerId) {
        sessionStorage.setItem("ga_login_sent", "1");
        return;
    }

    // Publish the Shopify custom login event
    const data = {
        customerId: currentCustomerId,
    };

    Shopify.analytics.publish("login", data);
    sessionStorage.setItem("ga_login_sent", "1");
    localStorage.setItem("ga_login_customer_id", currentCustomerId);
})();


// ============================================================
// Shopify Standard Event: checkout_completed
// GA4 Event: select_promotion
// ============================================================

analytics.subscribe("checkout_completed", (event) => {
    const checkout = event.data.checkout;

    if (checkout.discountApplications.length === 0) return;

    const discount = checkout.discountApplications[0];

    const items = event.data?.checkout?.lineItems?.map((item) => {
        return {
            item_id: item.variant.product.id,
            item_name: item.variant.product.title,
            price: item.variant.price.amount,
            quantity: item.quantity,
        };
    });

    dataLayer.push({ ecommerce: null });
    dataLayer.push({
        event: "select_promotion",
        ecommerce: {
            currency: checkout.currencyCode,
            creative_name: discount.title,
            creative_slot: discount.targetType,
            promotion_id: discount.title,
            promotion_name: discount.title,
            items: items,
        },
    });
});


const data_without_discount = {
    "checkout": {
        "buyerAcceptsEmailMarketing": false,
        "buyerAcceptsSmsMarketing": false,
        "attributes": [],
        "billingAddress": {
            "address1": "Test",
            "address2": null,
            "city": "Test",
            "country": "BD",
            "countryCode": "BD",
            "firstName": "Test",
            "lastName": "Test",
            "phone": null,
            "province": null,
            "provinceCode": null,
            "zip": "1207"
        },
        "token": "c861274776341544ffbcaf89f48b7687",
        "currencyCode": "BDT",
        "discountApplications": [],
        "discountsAmount": {
            "amount": 0,
            "currencyCode": "BDT"
        },
        "email": "hewegih480@ehwit.com",
        "phone": null,
        "lineItems": [
            {
                "discountAllocations": [],
                "id": "49490881675479",
                "quantity": 5,
                "title": "Abingdon - Blue Preppy Stripe Shirt",
                "variant": {
                    "id": "49490881675479",
                    "image": {
                        "src": "https://cdn.shopify.com/s/files/1/0832/7518/6391/files/abingdon-blue-preppy-stripe-shirt.jpg?v=1784894824"
                    },
                    "price": {
                        "amount": 170,
                        "currencyCode": "BDT"
                    },
                    "product": {
                        "id": "9343705120983",
                        "title": "Abingdon - Blue Preppy Stripe Shirt",
                        "vendor": "Wax London",
                        "type": "Long Sleeve Shirts",
                        "untranslatedTitle": "Abingdon - Blue Preppy Stripe Shirt",
                        "url": "/products/abingdon-blue-preppy-stripe-shirt"
                    },
                    "sku": "AW25-SHT-ABD-BXG-BLU-S",
                    "title": "S",
                    "untranslatedTitle": "S"
                },
                "finalLinePrice": {
                    "amount": 850,
                    "currencyCode": "BDT"
                },
                "sellingPlanAllocation": null,
                "properties": [],
                "lineComponents": []
            },
            {
                "discountAllocations": [],
                "id": "49490881020119",
                "quantity": 3,
                "title": "Aston - Dark Brown Italian Wool Pinstripe Trousers",
                "variant": {
                    "id": "49490881020119",
                    "image": {
                        "src": "https://cdn.shopify.com/s/files/1/0832/7518/6391/files/aston-dark-brown-wool-pinstripe-trousers.jpg?v=1784894821"
                    },
                    "price": {
                        "amount": 230,
                        "currencyCode": "BDT"
                    },
                    "product": {
                        "id": "9343705055447",
                        "title": "Aston - Dark Brown Italian Wool Pinstripe Trousers",
                        "vendor": "Wax London",
                        "type": "Suiting",
                        "untranslatedTitle": "Aston - Dark Brown Italian Wool Pinstripe Trousers",
                        "url": "/products/aston-dark-brown-wool-pinstripe-trousers"
                    },
                    "sku": "AW25-TRO-AST-BZI-DKB-32",
                    "title": "32",
                    "untranslatedTitle": "32"
                },
                "finalLinePrice": {
                    "amount": 690,
                    "currencyCode": "BDT"
                },
                "sellingPlanAllocation": null,
                "properties": [],
                "lineComponents": []
            }
        ],
        "localization": {
            "country": {
                "isoCode": "BD"
            },
            "language": {
                "isoCode": "en-BD"
            },
            "market": {
                "id": "gid://shopify/Market/39719698647",
                "handle": "bd"
            }
        },
        "order": {
            "id": "6807581753559",
            "customer": {
                "id": "9384230682839",
                "isFirstOrder": false
            }
        },
        "delivery": {
            "selectedDeliveryOptions": [
                {
                    "cost": {
                        "amount": 1400,
                        "currencyCode": "BDT"
                    },
                    "costAfterDiscounts": {
                        "amount": 1400,
                        "currencyCode": "BDT"
                    },
                    "description": null,
                    "handle": "c861274776341544ffbcaf89f48b7687-dea98a01419e6b2bc646ed8b868e9dde",
                    "title": "Standard",
                    "type": "shipping",
                    "targetLineItems": [
                        "49490881675479",
                        "49490881020119"
                    ]
                }
            ]
        },
        "shippingAddress": {
            "address1": "Test",
            "address2": null,
            "city": "Test",
            "country": "BD",
            "countryCode": "BD",
            "firstName": "Test",
            "lastName": "Test",
            "phone": null,
            "province": null,
            "provinceCode": null,
            "zip": "1207"
        },
        "subtotalPrice": {
            "amount": 1540,
            "currencyCode": "BDT"
        },
        "shippingLine": {
            "price": {
                "amount": 1400,
                "currencyCode": "BDT"
            }
        },
        "smsMarketingPhone": null,
        "totalTax": {
            "amount": 231,
            "currencyCode": "BDT"
        },
        "totalPrice": {
            "amount": 3171,
            "currencyCode": "BDT"
        },
        "transactions": [
            {
                "amount": {
                    "amount": 3171,
                    "currencyCode": "BDT"
                },
                "gateway": "bogus",
                "paymentMethod": {
                    "type": "creditCard",
                    "name": "BOGUS"
                }
            }
        ]
    }
}

const data_with_discount = {
    checkout: {
        buyerAcceptsEmailMarketing: false,
        buyerAcceptsSmsMarketing: false,
        attributes: [],
        billingAddress: {
            address1: "Test",
            address2: null,
            city: "Test",
            country: "BD",
            countryCode: "BD",
            firstName: "Test",
            lastName: "Test",
            phone: null,
            province: null,
            provinceCode: null,
            zip: "1207",
        },
        token: "7ec295c8673d2650fbb01e29215f6bae",
        currencyCode: "BDT",
        discountApplications: [
            {
                allocationMethod: "ACROSS",
                targetSelection: "ALL",
                targetType: "LINE_ITEM",
                title: "Test0003",
                type: "DISCOUNT_CODE",
                value: {
                    percentage: 25,
                },
            },
            {
                allocationMethod: "ACROSS",
                targetSelection: "ALL",
                targetType: "LINE_ITEM",
                title: "Test0001",
                type: "DISCOUNT_CODE",
                value: {
                    percentage: 10,
                },
            },
            {
                allocationMethod: "EACH",
                targetSelection: "ALL",
                targetType: "SHIPPING_LINE",
                title: "Test0002",
                type: "DISCOUNT_CODE",
                value: {
                    percentage: 100,
                },
            },
        ],
        discountsAmount: {
            amount: 1939,
            currencyCode: "BDT",
        },
        email: "hewegih480@ehwit.com",
        phone: null,
        lineItems: [
            {
                discountAllocations: [
                    {
                        amount: {
                            amount: 172.5,
                            currencyCode: "BDT",
                        },
                        discountApplication: {
                            allocationMethod: "ACROSS",
                            targetSelection: "ALL",
                            targetType: "LINE_ITEM",
                            title: "Test0003",
                            type: "DISCOUNT_CODE",
                            value: {
                                percentage: 25,
                            },
                        },
                    },
                    {
                        amount: {
                            amount: 69,
                            currencyCode: "BDT",
                        },
                        discountApplication: {
                            allocationMethod: "ACROSS",
                            targetSelection: "ALL",
                            targetType: "LINE_ITEM",
                            title: "Test0001",
                            type: "DISCOUNT_CODE",
                            value: {
                                percentage: 10,
                            },
                        },
                    },
                ],
                id: "49490881020119",
                quantity: 3,
                title: "Aston - Dark Brown Italian Wool Pinstripe Trousers",
                variant: {
                    id: "49490881020119",
                    image: {
                        src: "https://cdn.shopify.com/s/files/1/0832/7518/6391/files/aston-dark-brown-wool-pinstripe-trousers.jpg?v=1784894821",
                    },
                    price: {
                        amount: 230,
                        currencyCode: "BDT",
                    },
                    product: {
                        id: "9343705055447",
                        title: "Aston - Dark Brown Italian Wool Pinstripe Trousers",
                        vendor: "Wax London",
                        type: "Suiting",
                        untranslatedTitle: "Aston - Dark Brown Italian Wool Pinstripe Trousers",
                        url: "/products/aston-dark-brown-wool-pinstripe-trousers",
                    },
                    sku: "AW25-TRO-AST-BZI-DKB-32",
                    title: "32",
                    untranslatedTitle: "32",
                },
                finalLinePrice: {
                    amount: 690,
                    currencyCode: "BDT",
                },
                sellingPlanAllocation: null,
                properties: [],
                lineComponents: [],
            },
            {
                discountAllocations: [
                    {
                        amount: {
                            amount: 212.5,
                            currencyCode: "BDT",
                        },
                        discountApplication: {
                            allocationMethod: "ACROSS",
                            targetSelection: "ALL",
                            targetType: "LINE_ITEM",
                            title: "Test0003",
                            type: "DISCOUNT_CODE",
                            value: {
                                percentage: 25,
                            },
                        },
                    },
                    {
                        amount: {
                            amount: 85,
                            currencyCode: "BDT",
                        },
                        discountApplication: {
                            allocationMethod: "ACROSS",
                            targetSelection: "ALL",
                            targetType: "LINE_ITEM",
                            title: "Test0001",
                            type: "DISCOUNT_CODE",
                            value: {
                                percentage: 10,
                            },
                        },
                    },
                ],
                id: "49490881675479",
                quantity: 5,
                title: "Abingdon - Blue Preppy Stripe Shirt",
                variant: {
                    id: "49490881675479",
                    image: {
                        src: "https://cdn.shopify.com/s/files/1/0832/7518/6391/files/abingdon-blue-preppy-stripe-shirt.jpg?v=1784894824",
                    },
                    price: {
                        amount: 170,
                        currencyCode: "BDT",
                    },
                    product: {
                        id: "9343705120983",
                        title: "Abingdon - Blue Preppy Stripe Shirt",
                        vendor: "Wax London",
                        type: "Long Sleeve Shirts",
                        untranslatedTitle: "Abingdon - Blue Preppy Stripe Shirt",
                        url: "/products/abingdon-blue-preppy-stripe-shirt",
                    },
                    sku: "AW25-SHT-ABD-BXG-BLU-S",
                    title: "S",
                    untranslatedTitle: "S",
                },
                finalLinePrice: {
                    amount: 850,
                    currencyCode: "BDT",
                },
                sellingPlanAllocation: null,
                properties: [],
                lineComponents: [],
            },
        ],
        localization: {
            country: {
                isoCode: "BD",
            },
            language: {
                isoCode: "en-BD",
            },
            market: {
                id: "gid://shopify/Market/39719698647",
                handle: "bd",
            },
        },
        order: {
            id: "6807530143959",
            customer: {
                id: "9384230682839",
                isFirstOrder: false,
            },
        },
        delivery: {
            selectedDeliveryOptions: [
                {
                    cost: {
                        amount: 1400,
                        currencyCode: "BDT",
                    },
                    costAfterDiscounts: {
                        amount: 0,
                        currencyCode: "BDT",
                    },
                    description: null,
                    handle: "7ec295c8673d2650fbb01e29215f6bae-dea98a01419e6b2bc646ed8b868e9dde",
                    title: "Standard",
                    type: "shipping",
                    targetLineItems: ["49490881020119", "49490881675479"],
                },
            ],
        },
        shippingAddress: {
            address1: "Test",
            address2: null,
            city: "Test",
            country: "BD",
            countryCode: "BD",
            firstName: "Test",
            lastName: "Test",
            phone: null,
            province: null,
            provinceCode: null,
            zip: "1207",
        },
        subtotalPrice: {
            amount: 1001,
            currencyCode: "BDT",
        },
        shippingLine: {
            price: {
                amount: 0,
                currencyCode: "BDT",
            },
        },
        smsMarketingPhone: null,
        totalTax: {
            amount: 150.15,
            currencyCode: "BDT",
        },
        totalPrice: {
            amount: 1151.15,
            currencyCode: "BDT",
        },
        transactions: [
            {
                amount: {
                    amount: 1151.15,
                    currencyCode: "BDT",
                },
                gateway: "bogus",
                paymentMethod: {
                    type: "creditCard",
                    name: "BOGUS",
                },
            },
        ],
    },
};
