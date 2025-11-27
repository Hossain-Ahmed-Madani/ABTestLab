// Cart Api

async function fetchCartData() {
    const response = await fetch("https://www.steinertractor.com/api/carts/carts_read", {
        method: "GET",
        headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            // authorization: "Bearer your-token-here", // If needed
            "x-requested-with": "XMLHttpRequest",
        },
        credentials: "include",
    });

    return await response.json();
}

fetchCartData().then((res) => {
    console.log(res);
});
