// Add
fetch("https://us.princesspolly.com/cart/add", {
    headers: {
        accept: "application/json",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        priority: "u=1, i",
        "sec-ch-ua": '"Not:A-Brand";v="99", "Google Chrome";v="145", "Chromium";v="145"',
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": '"Android"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
    },
    referrer: "https://us.princesspolly.com/collections/sale",
    body: '{"id":"42135628873812","quantity":1}',
    method: "POST",
    mode: "cors",
    credentials: "include",
})
    .then((res) => console.log("res", res))
    .catch((err) => {
        console.log("error", err);
    });

fetch("https://us.princesspolly.com/cart/update.js", {
    headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        priority: "u=1, i",
        "sec-ch-ua": '"Not:A-Brand";v="99", "Google Chrome";v="145", "Chromium";v="145"',
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": '"Android"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
    },
    referrer: "https://us.princesspolly.com/collections/sale",
    body: '{"attributes":{"_elevar__ga_GC7L0ZHV8C":"GS2.1.s1772111040$o2$g1$t0$j60$l0$h0"}}',
    method: "POST",
    mode: "cors",
    credentials: "include",
})
    .then((res) => console.log("res", res))
    .catch((err) => {
        console.log("error", err);
    });

    // loadMinicart();
    // window.minicartLoaded = true;

document.dispatchEvent(
    new CustomEvent("cart:update", {
        bubbles: true,
        detail: {
            data: {
                itemCount: 1,
                source: "product-form-component",
            },
        },
    }),
);
