// ============= Ticket: BatchLDN 48 - GA Tracking =============

// Define dataLayer and the gtag function.
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}

//Initialize GTM tag
// Containers
// www.batchldn.com -> GTM-M76Q65C
// batchldn.com | Shopify Store -> GTM-TSS75VDV

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

//Google Consent Mode v2
gtag("consent", "update", {
    ad_storage: "granted",
    analytics_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
});

//subscribe to events

// 1. view_item_list | shopify standard event -> collection_viewed
analytics.subscribe("collection_viewed", (event) => {
    window.dataLayer = window.dataLayer || [];

    const collection = event.data?.collection;
    const productVariants = collection?.productVariants || [];

    const items = productVariants.map((variant) => ({
        item_id: variant.id,
        item_name: variant.product?.title,
        item_brand: variant.product?.vendor,
        item_variant: variant.title,
        item_sku: variant.sku,
        item_category: variant.product?.type,
        price: variant.price?.amount,
        item_url: variant.product?.url,
    }));

    console.log({
        event: "collection_viewed",

        // GA4 view_item_list parameters
        item_list_id: collection?.id,
        item_list_name: collection?.title,
        items: items,

        // Optional Shopify event information
        timestamp: event.timestamp,
        shopify_event_id: event.id,
        client_id: event.clientId,
        url: event.context?.document?.location?.href,
    });

    window.dataLayer.push({
        event: "collection_viewed",

        // GA4 view_item_list parameters
        item_list_id: collection?.id,
        item_list_name: collection?.title,
        items: items,

        // Optional Shopify event information
        timestamp: event.timestamp,
        shopify_event_id: event.id,
        client_id: event.clientId,
        url: event.context?.document?.location?.href,
    });
});
