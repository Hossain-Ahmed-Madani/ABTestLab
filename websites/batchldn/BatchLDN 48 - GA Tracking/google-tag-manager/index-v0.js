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
            item_id: variant?.sku || variant?.id || product?.id,
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

    console.log("Custom Events: ", "collection_viewed -> ", "view_item_list", window.dataLayer);
});

// ============================================================
// Shopify Standard Event: product_viewed
// GA4 Event: view_item
// ============================================================

analytics.subscribe("product_viewed", (event) => {
    const productVariant = event.data?.productVariant;
    const product = productVariant?.product;

    const price = Number(productVariant?.price?.amount);
    const currency = productVariant?.price?.currencyCode;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        ecommerce: null,
    });

    // Push GA4-compatible ecommerce data
    window.dataLayer.push({
        event: "view_item",
        ecommerce: {
            currency: currency,
            value: price,
            items: [
                {
                    item_id: productVariant?.sku || productVariant?.id,
                    item_name: product?.title,
                    item_brand: product?.vendor,
                    item_variant: productVariant?.title,
                    price: price,
                    quantity: 1,
                },
            ],
        },
    });

    console.log("Custom Events: ", "product_viewed -> ", "view_item", window.dataLayer);
});

// ============================================================
// Shopify Standard Event: product_added_to_cart
// GA4 Event: add_to_cart
// ============================================================

analytics.subscribe("product_added_to_cart", (event) => {
    const cartLine = event.data?.cartLine;

    if (!cartLine) return;

    const merchandise = cartLine.merchandise;
    const product = merchandise?.product;
    const currency = cartLine.cost?.totalAmount?.currencyCode;
    const value = Number(cartLine.cost?.totalAmount?.amount || 0);
    const price = Number(merchandise?.price?.amount || 0);
    const quantity = Number(cartLine.quantity || 1);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        ecommerce: null,
    });

    window.dataLayer.push({
        event: "add_to_cart",
        ecommerce: {
            currency: currency,
            value: value,
            items: [
                {
                    item_id: merchandise?.sku || merchandise?.id,
                    item_name: product?.title,
                    item_brand: product?.vendor,
                    item_category: product?.type || undefined,
                    item_variant: merchandise?.title,
                    price: price,
                    quantity: quantity,
                    product_id: product?.id,
                    variant_id: merchandise?.id,
                    item_url: product?.url,
                },
            ],
        },
    });

    console.log("Custom Events: ", "product_added_to_cart -> ", "add_to_cart", window.dataLayer);
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
                    item_id: merchandise.sku || merchandise.id,
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

    console.log("Custom Events: ", "product_removed_from_cart -> ", "remove_from_cart", window.dataLayer);
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

    console.log("Custom Events: ", "cart_viewed -> ", "view_cart", window.dataLayer);
});
