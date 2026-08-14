/* 
This is a shopify standered event:


analytics.subscribe("collection_viewed", (event) => {
    window.dataLayer.push({
        event: "collection_viewed",
        timestamp: event.timestamp,
        id: event.id,
        client_id: event.clientId,
        url: event.context.document.location.href,
        collection_id: event.data?.collection?.id,
        collection_title: event.data?.collection?.title,
    });
});

I want to show it as view_item_list in ga4 using google tag manager and push the values in data layouer according to this https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtm#view_item_list.

Update the code accordingly and provide step by step guide on how to create necessary tag, triggers and variables in gooogle tag manager


*/