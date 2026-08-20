// Define dataLayer and the gtag function.
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}

// Initialize GTM tag
// ============================================================
// Containers
// www.batchldn.com -> GTM-M76Q65C
// batchldn.com | Shopify Store -> GTM-TSS75VDV
// ============================================================

(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-TSS75VDV");

// subscribe to events

// ============================================================
// Shopify Standard Event: collection_viewed
// GA4 Event: view_item_list
// ============================================================

analytics.subscribe("collection_viewed", (event) => {
    const collection = event.data?.collection;
    const productVariants = collection?.productVariants || [];

    if (!productVariants.length) return;

    const items = productVariants.map((variant, index) => {
        const product = variant?.product;

        return {
            item_id:  variant?.id || variant?.sku || product?.id,
            item_sku: variant?.sku,
            item_name: product?.title || variant?.title,
            affiliation: product?.vendor || undefined,
            index: index,
            item_brand: product?.vendor || undefined,
            item_category: product?.type || undefined,
            item_list_id: String(collection?.id || ""),
            item_list_name: collection?.title || undefined,
            item_variant: variant?.title || undefined,
            price: Number(variant?.price?.amount) || 0,
            quantity: 1,
        };
    });

    const currency = productVariants[0]?.price?.currencyCode || "GBP";

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        ecommerce: null,
    });

    // Push GA4 view_item_list event
    window.dataLayer.push({
        event: "view_item_list",
        ecommerce: {
            currency: currency,
            item_list_id: String(collection?.id || ""),
            item_list_name: collection?.title || "",
            items: items,
        },
    });
});

// ============================================================
// Shopify Standard Event: product_removed_from_cart
// GA4 Event: remove_from_cart
// ============================================================

analytics.subscribe("product_removed_from_cart", (event) => {
    const cartLine = event.data?.cartLine;
    const merchandise = cartLine?.merchandise;
    const product = merchandise?.product;

    if (!cartLine || !merchandise || !product) return;

    const quantity = Number(cartLine.quantity || 1);
    const price = Number(merchandise.price?.amount || 0);
    const currency = merchandise.price?.currencyCode || "USD";
    // GA4 remove_from_cart value = price × quantity
    const value = price * quantity;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        ecommerce: null,
    });


    // Push remove_from_cart event
    window.dataLayer.push({
        event: "remove_from_cart",
        ecommerce: {
            currency: currency,
            value: value,
            items: [
                {
                    item_id: merchandise.id || merchandise.id,
                    item_sku:  merchandise.sku,
                    item_name: product.title,
                    item_brand: product.vendor,
                    item_category: product.type,
                    item_variant: merchandise.title,
                    price: price,
                    quantity: quantity,
                },
            ],
        },
    });
});

// ============================================================
// Shopify Standard Event: cart_viewed
// GA4 Event: view_cart
// ============================================================

analytics.subscribe("cart_viewed", (event) => {
    const items = event.data?.cart?.lines?.map((item) => {
        return {
            item_id: item.merchandise.product.id,
            item_name: item.merchandise.product.title,
            price: item.merchandise.price.amount,
            quantity: item.quantity,
        };
    });

    dataLayer.push({ ecommerce: null });
    dataLayer.push({
        event: "view_cart",
        url: event.context.document.location.href,
        ecommerce: {
            currency: event.data?.cart?.cost?.totalAmount?.currencyCode,
            value: event.data?.cart?.cost?.totalAmount?.amount,
            items: items,
        },
    });
});

// ============================================================
// Shopify Standard Event: checkout_shipping_info_submitted
// GA4 Event: add_shipping_info
// ============================================================

analytics.subscribe("checkout_shipping_info_submitted", (event) => {
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
        event: "add_shipping_info",
        url: event.context.document.location.href,
        ecommerce: {
            currency: event.data?.checkout?.currencyCode,
            value: event.data?.checkout?.subtotalPrice?.amount,
            items: items,
        },
    });
});

// ============================================================
// Shopify Standard Event: payment_info_submitted
// GA4 Event: add_payment_info
// ============================================================

analytics.subscribe("payment_info_submitted", (event) => {
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
        event: "add_payment_info",
        url: event.context.document.location.href,
        ecommerce: {
            currency: event.data?.checkout?.currencyCode,
            value: event.data?.checkout?.subtotalPrice?.amount,
            items: items,
        },
    });
});


// ============================================================
// Shopify Standard Event: null
// GA4 Event: select_size
// ============================================================
analytics.subscribe("select_size", (event) => {
    console.log("select_size : Custom Pixel", event.customData);
    const payload = event.customData;
    dataLayer.push({ ecommerce: null });
    dataLayer.push(payload);
});
