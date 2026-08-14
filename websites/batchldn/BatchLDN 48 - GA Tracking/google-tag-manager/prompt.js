/* 
This is a shopify standard event:


// ============================================================
// Shopify Standard Event: product_removed_from_cart
// GA4 Event: remove_from_cart
// ============================================================

analytics.subscribe("product_removed_from_cart", (event) => {
    console.log("product_removed_from_cart", event.data);

    // event.data 

    {
        "cartLine": {
            "cost": {
                "totalAmount": {
                    "amount": 195,
                    "currencyCode": "GBP"
                }
            },
            "merchandise": {
                "id": "41094351749235",
                "image": {
                    "src": "https://cdn.shopify.com/s/files/1/0563/1580/5811/files/XMASGIFTBOX__3.jpg?v=1739803423"
                },
                "price": {
                    "amount": 195,
                    "currencyCode": "GBP"
                },
                "product": {
                    "id": "7316707508339",
                    "title": "Gift Card - £195",
                    "vendor": "Batch London",
                    "type": "gift card",
                    "untranslatedTitle": "Gift Card - £195",
                    "url": "/products/gift-card?variant=41094351749235"
                },
                "sku": "",
                "title": "£195",
                "untranslatedTitle": "£195"
            },
            "quantity": 1
        }
    }


    // dataLayer Format | Google Tag manager
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
    event: "remove_from_cart",
    ecommerce: {
        currency: "USD",
        value: 30.03,
        items: [
        {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
        affiliation: "Google Merchandise Store",
        coupon: "SUMMER_FUN",
        discount: 2.22,
        index: 0,
        item_brand: "Google",
        item_category: "Apparel",
        item_category2: "Adult",
        item_category3: "Shirts",
        item_category4: "Crew",
        item_category5: "Short sleeve",
        item_list_id: "related_products",
        item_list_name: "Related Products",
        item_variant: "green",
        location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
        price: 10.01,
        google_business_vertical: "retail",
        quantity: 3
        }
        ]
    }
    });


    
});

// });





I want to show it as remove_from_cart in ga4 using google tag manager and push the values in data layouer according to this https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtm#remove_from_cart

Update the code accordingly and provide step by step guide on how to create necessary tag, triggers and variables in google tag manager


*/