/* 
    url: https://www.domyown.com/termidor-sc-p-184.html
    Objective: Investigate add to cart functionality for mobile view. Goal is to prevent from redirecting to cart page after adding item to cart.
    And get the modal popup to show up instead which appears in desktop view.
*/

async function addToCart(token, productId, referrer) {
    // Create the form data body
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


function insertHTMLAndExecuteScripts(targetElement, htmlContent, position = 'beforeend') {
    // Create a temporary container
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = htmlContent;
    
    // Extract all script elements
    const scripts = tempContainer.querySelectorAll('script');
    const scriptContents = [];
    
    // Store script contents and attributes
    scripts.forEach(script => {
        scriptContents.push({
            src: script.src,
            content: script.textContent,
            type: script.type || 'text/javascript',
            async: script.async,
            defer: script.defer,
            attributes: Array.from(script.attributes)
        });
        // Remove script from temp container
        script.remove();
    });
    
    // Insert the HTML without scripts
    targetElement.insertAdjacentHTML(position, tempContainer.innerHTML);
    
    // Execute scripts in order
    scriptContents.forEach(scriptData => {
        const newScript = document.createElement('script');
        
        // Copy all attributes
        scriptData.attributes.forEach(attr => {
            if (attr.name !== 'src') {
                newScript.setAttribute(attr.name, attr.value);
            }
        });
        
        if (scriptData.src) {
            // External script
            newScript.src = scriptData.src;
            newScript.async = scriptData.async;
            newScript.defer = scriptData.defer;
        } else {
            // Inline script
            newScript.textContent = scriptData.content;
        }
        
        // Append to document to execute
        document.body.appendChild(newScript);
    });
}

// Start the process
const token = document.querySelector('form#cart-quantity input[name="_token"]').getAttribute("value");
const referrer = window.location.href;
const products_id = document.querySelector("#products-grid").getAttribute("data-selected-products-id");


// Usage with your existing code:
addToCart(token, products_id, referrer)
    .then((result) => {
        console.log("Cart updated successfully:", result);
        document.body.appendChild( result.htmlContent);
        // insertHTMLAndExecuteScripts(document.body, result.htmlContent, 'afterbegin');
    })
    .catch((error) => {
        console.error("Failed to add to cart:", error);
    });





// addToCart(token, products_id, referrer)
//     .then((result) => {
//         console.log("Cart updated successfully:", result);
//         document.body.insertAdjacentHTML('afterbegin', result.htmlContent);
//     })
//     .catch((error) => {
//         console.error("Failed to add to cart:", error);
//     });
