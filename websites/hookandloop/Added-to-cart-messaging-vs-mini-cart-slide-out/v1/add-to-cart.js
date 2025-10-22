window.addEventListener("private-content-loaded", function (event) {
    console.log("Private content loaded", event);
    // Handle the event
});

const formkey = hyva.getFormKey();

async function updateProductQuantityFormData({ productId, measurementUnit, newQuantity, sku }) {
    const formData = new FormData();

    const formkey = hyva.getFormKey();
    formData.append("form_key", formkey);
    formData.append(`cart[${productId}][qty]`, (measurementUnit * newQuantity).toString());
    formData.append("sku", sku);
    formData.append("uenc", hyva.getUenc());

    try {
        const response = await fetch("https://www.hookandloop.com/checkout/cart/updatePost/", {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9",
                priority: "u=1, i",
                "sec-ch-ua": '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"Windows"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                // Consider adding X-Requested-With for Magento
                "x-requested-with": "XMLHttpRequest",
            },
            referrer: "https://www.hookandloop.com/checkout/cart",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json(); // or response.text() depending on what Magento returns
    } catch (error) {
        console.error("Error updating product quantity:", error);
        throw error;
    }
}

window.addEventListener("private-content-loaded", function (event) {
    console.log("Private content loaded", event);
    // Handle the event
});

// const formkey = hyva.getFormKey();

function updateProductQuantityFormData({ productId, sku, measurementUnit, newQuantity }) {
    const formData = new FormData();

    const formkey = hyva.getFormKey();

    formData.append("form_key", formkey);
    formData.append(`cart[${productId}][qty]`, (measurementUnit * newQuantity).toString());
    formData.append("sku", sku);
    formData.append("uenc", hyva.getUenc());

    return fetch("https://www.hookandloop.com/checkout/cart/updatePost/", {
        // ... same headers and options
        headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            priority: "u=1, i",
            "sec-ch-ua": '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
        },
        referrer: "https://www.hookandloop.com/checkout/cart",
        body: formData,
        method: "POST",
        mode: "cors",
        credentials: "include",
    });
}

// Usage with named parameters (no order issues):
updateProductQuantityFormData({
    productId: 862000,
    newQuantity: 25,
    sku: "DG40LBHS",
    formKey: hyva.getFormKey(),
})
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => {
        console.log("Finally");
        window.dispatchEvent(new CustomEvent("reload-customer-section-data"));
    });

// Usage with better error handling and response processing:
updateProductQuantityFormData({
    productId: 862000,
    newQuantity: 25,
    sku: "DG40LBHS",
})
    .then((response) => {
        console.log("Quantity updated successfully:", response);
        // You might want to check response for success/error messages from Magento
    })
    .catch((error) => {
        console.error("Failed to update quantity:", error);
    })
    .finally(() => {
        console.log("Update operation completed");
        window.dispatchEvent(new CustomEvent("reload-customer-section-data"));
    });
