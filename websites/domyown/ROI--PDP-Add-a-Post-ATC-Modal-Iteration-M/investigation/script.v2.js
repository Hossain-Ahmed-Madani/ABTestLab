// https://www.domyown.com/termidor-sc-p-184.html

async function insertHTMLAndExecuteScripts(targetElement, htmlContent, position = "beforeend") {
    // Create a temporary container
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = htmlContent;

    // Extract all script elements
    const scripts = Array.from(tempContainer.querySelectorAll("script"));
    const scriptData = [];

    // Store script contents and attributes
    scripts.forEach((script) => {
        scriptData.push({
            src: script.src || null,
            content: script.textContent || "",
            type: script.type || "text/javascript",
            async: script.async,
            defer: script.defer,
            id: script.id || null,
            attributes: Array.from(script.attributes).reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {}),
        });
        // Remove script from temp container
        script.remove();
    });

    // Insert the HTML without scripts first
    targetElement.insertAdjacentHTML(position, tempContainer.innerHTML);

    // Execute scripts sequentially
    // for (const script of scriptData) {
    //     await executeScript(script);
    // }

    document.querySelector("#modal-window-added-product").style.display = "block";
}

function executeScript(scriptData) {
    return new Promise((resolve, reject) => {
        const newScript = document.createElement("script");

        // Set type
        newScript.type = scriptData.type;

        // Set id if exists
        if (scriptData.id) {
            newScript.id = scriptData.id;
        }

        // Copy other attributes (excluding src, type, id which are handled separately)
        Object.keys(scriptData.attributes).forEach((attrName) => {
            if (!["src", "type", "id"].includes(attrName)) {
                newScript.setAttribute(attrName, scriptData.attributes[attrName]);
            }
        });

        if (scriptData.src) {
            // External script - wait for load
            newScript.src = scriptData.src;
            newScript.async = false; // Force sequential loading

            newScript.onload = () => {
                console.log(`External script loaded: ${scriptData.src}`);
                resolve();
            };

            newScript.onerror = (error) => {
                console.error(`Failed to load script: ${scriptData.src}`, error);
                // Resolve anyway to continue with other scripts
                resolve();
            };

            document.head.appendChild(newScript);
        } else {
            // Inline script - executes immediately
            try {
                newScript.textContent = scriptData.content;
                document.body.appendChild(newScript);
                console.log("Inline script executed");
                resolve();
            } catch (error) {
                console.error("Error executing inline script:", error);
                resolve(); // Continue even if there's an error
            }
        }
    });
}

// Usage example with your API response
async function addToCart(token, productId, referrer) {
    const body = new URLSearchParams();
    body.append("_token", token);
    body.append("products_id", productId);
    body.append(`cart_quantity[${productId}]`, "1");
    body.append("cart_quantity_entered", "1");

    try {
        const response = await fetch("https://www.domyown.com/cart", {
            headers: {
                accept: "application/json, text/javascript, */*; q=0.01",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                priority: "u=1, i",
                "sec-ch-ua": '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
                "sec-ch-ua-mobile": "?1",
                "sec-ch-ua-platform": '"Android"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-csrf-token": token,
                "x-newrelic-id": "VwEGVF9SGwEHUVNXBgY=",
                "x-requested-with": "XMLHttpRequest",
            },
            referrer: referrer,
            body: body.toString(),
            method: "POST",
            mode: "cors",
            credentials: "include",
        });

        const data = await response.json();
        console.log("Add to Cart Response:", data);

        return {
            status: data.response,
            htmlContent: data.content,
            cartItems: data.cart,
            dataLayer: data.dataLayer,
            rfkData: data.rfk,
        };
    } catch (error) {
        console.error("Add to Cart Error:", error);
        throw error;
    }
}

const submitBtn = document.querySelector("input.add-to-cart");
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    submitBtn.setAttribute("disabled", "true");

    // Execute the cart addition and insert HTML
    const token = document.querySelector('form#cart-quantity input[name="_token"]').getAttribute("value");
    const referrer = window.location.href;
    const products_id = document.querySelector("#products-grid").getAttribute("data-selected-products-id");

    addToCart(token, products_id, referrer)
        .then(async (result) => {
            console.log("Cart updated successfully:", result);

            // Insert HTML and execute all scripts in order
            await insertHTMLAndExecuteScripts(document.body, result.htmlContent, "afterbegin");

            console.log("Modal HTML inserted and all scripts executed");
        })
        .catch((error) => {
            console.error("Failed to add to cart:", error);
        })
        .finally(() => {
            submitBtn.removeAttribute("disabled");
        });
});
