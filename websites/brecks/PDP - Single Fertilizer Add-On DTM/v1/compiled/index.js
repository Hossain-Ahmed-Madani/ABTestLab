(async () => {
    const TEST_CONFIG = {
        page_initials: "AB-SINGLE-FERTILIZER",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    // data-lion-price-for-product-id

    const DATA = {
        iris: {
            productCategory: "Iris",
            plantFood: "Iris Food",
            sku: "77723",
            variantId: "49216239173947",
            "properties[_singleitemdetails]": "Ships Year-round",
            "properties[_restricted_states]": "AE AK GU HI ND PA PR VI",
            productId: "9687381999931" /* data-lion-price-for-product-id */,
            productPrice: "9.99",
            bulletPoint1: "Recommended for iris",
            bulletPoint2: "Stronger roots and bigger, brighter blooms",
            bulletPoint3: "One 1lb bag covers 20 sq ft",
            productUrl: "https://www.brecks.com/products/brecks-iris-lovers-all-natural-food?variant=49216239173947",
            imageUrl: "https://www.brecks.com/cdn/shop/files/77723.webp?v=1776109594&width=1200",
        },

        daylily: {
            productCategory: "Daylily",
            plantFood: "Daylilies Food",
            sku: "77724",
            variantId: "49216238879035",
            "properties[_singleitemdetails]": "Ships Year-round",
            "properties[_restricted_states]": "AE AK GU HI ND PA PR VI",
            productId: "9687381705019" /* data-lion-price-for-product-id */,
            productPrice: "16.99",
            bulletPoint1: "Recommended for daylily",
            bulletPoint2: "Stronger roots and bigger, brighter blooms",
            bulletPoint3: "One 3lb bag covers 60 sq ft",
            productUrl: "https://www.brecks.com/products/breck-food-for-daylilies?variant=49216238879035",
            imageUrl: "https://www.brecks.com/cdn/shop/files/77724_3b237972-a82f-4068-b922-fc69e6c3066b.webp?v=1779978938&width=800",
        },

        all: {
            productCategory: "all",
            appliesTo: "All other products (plants)",
            plantFood: "Breck's® Food for Bulbs and Perennials",
            sku: "84749",
            variantId: "49216239698235",
            "properties[_singleitemdetails]": "Ships Year-round",
            "properties[_restricted_states]": "AE AK GU HI ND PA PR VI",
            productId: "9687382262075" /* data-lion-price-for-product-id */,
            productPrice: "8.99",
            bulletPoint1: "Recommended for",
            bulletPoint2: "Stronger roots and bigger, brighter blooms",
            bulletPoint3: "One 13oz bag covers 40 sq ft",
            productUrl: "https://www.brecks.com/products/brecks_food_for_bulbs_and_perennials?variant=49216239698235",
            imageUrl: "https://www.brecks.com/cdn/shop/files/84749.webp?v=1776107453&width=1200",
        },
    };

    async function waitForElementAsync(predicate, timeout = 20000, frequency = 150) {
        const startTime = Date.now();

        return new Promise((resolve, reject) => {
            if (typeof predicate === "function" && predicate()) {
                return resolve(true);
            }

            const interval = setInterval(() => {
                const elapsed = Date.now() - startTime;

                if (elapsed >= timeout) {
                    clearInterval(interval);
                    return reject(new Error(`Timeout of ${timeout}ms reached while waiting for condition: ${predicate.toString()}`));
                }

                if (typeof predicate === "function" && predicate()) {
                    clearInterval(interval);
                    return resolve(true);
                }
            }, frequency);
        });
    }

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function setSessionStorageValue(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    function getSessionStorageValue(key, defaultValue = null) {
        const value = sessionStorage.getItem(key);

        if (value === null) return defaultValue;

        try {
            return JSON.parse(value);
        } catch (error) {
            return value;
        }
    }

    function getFertilizerInfo() {
        const pathname = window.location.pathname;
        if (pathname.includes("iris")) {
            return DATA["iris"];
        } else if (pathname.includes("daylily")) {
            return DATA["daylily"];
        } else {
            return DATA["all"] /* default */;
        }
    }

    async function addToCart(variantId, productId, quantity = 1, formType = "product") {
        const body = new URLSearchParams({
            form_type: formType,
            utf8: "✓",
            id: variantId,
            "updates[]": quantity,
            quantity: quantity,
            "properties[_restricted_states]": "AE AK GU HI ND PA PR VI",
            "properties[_singleitemdetails]": " Ships Year-round",
            "product-id": productId,
            "section-id": "template--23455413895483__main",
            "attributes[__shopify_r]": "",
            "attributes[__shopify_b]": "",
        });

        const response = await fetch("/cart/add.js", {
            method: "POST",
            headers: {
                accept: "*/*",
                "content-type": "application/x-www-form-urlencoded",
                "x-requested-with": "XMLHttpRequest",
            },
            body: body.toString(),
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error(`Add to cart failed: ${response.status}`);
        }

        return await response.json();
    }

    let IS_CHECKED = false;
    let IS_BUSY = false;

    function createLayout() {
        const { productCategory, plantFood, productPrice, bulletPoint2, bulletPoint3, productUrl, imageUrl } = getFertilizerInfo();
        const STORAGE_IS_CHECKED = Boolean(getSessionStorageValue("AB_IS_CHECKED"));
        const STORAGE_IS_ADDED = Boolean(getSessionStorageValue("AB_IS_ADDED"));

        q(".product__price-block.product__block.product__block--medium").insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-single-fertilizer">
                    <div class="ab-single-fertilizer__top">
                        <label for="ab_fertilizer" class="ab-single-fertilizer__label">
                            <input type="checkbox" id="ab_fertilizer" value="${productCategory}" class="ab-single-fertilizer__input" />
                            <span class="ab-single-fertilizer__label-text">Add plant food for bigger, brighter blooms</span>
                        </label>
                    </div>
                    <div class="ab-single-fertilizer__bottom">
                        <a href="${productUrl}" class="ab-single-fertilizer___img">
                            <img src="${imageUrl}" alt="${productCategory}" />
                        </a>
                        <div class="ab-single-fertilizer___text-content">
                            <h3 class="ab-single-fertilizer__title">${plantFood} · $${productPrice}</h3>
                            <ul class="ab-single-fertilizer__benefit-lists">
                                <li class="ab-single-fertilizer__benefit-item">Recommended for ${productCategory.toLocaleLowerCase()}</li>
                                <li class="ab-single-fertilizer__benefit-item">${bulletPoint2}</li>
                                <li class="ab-single-fertilizer__benefit-item">${bulletPoint3}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
        );

        q("#ab_fertilizer").checked = STORAGE_IS_CHECKED && !STORAGE_IS_ADDED;
        IS_CHECKED = STORAGE_IS_CHECKED && !STORAGE_IS_ADDED;
    }

    function updateAddToCartButtonLayout() {
        const targetNode = q("#AddToCart");

        const { productPrice } = getFertilizerInfo();
        const total = (+q('meta[property="og:price:amount"]').content * +q(".product-form .quantity-input__input").value + +productPrice).toFixed(2);

        q(".ab-short-info")?.remove();

        if (!IS_CHECKED) {
            q(targetNode, "#addcarttext").innerText = "Add to Cart";
        } else {
            q(targetNode, "#addcarttext").innerText = `Add to Cart | $${total}`;
            targetNode.insertAdjacentHTML("afterend", /* HTML */ ` <span class="ab-short-info">Adds both items to your cart. Uncheck the box above to add only your dahlias.</span> `);
        }
    }

    function handleFertilizerCheck() {
        q("#ab_fertilizer").addEventListener("change", (e) => {
            IS_CHECKED = e.target.checked;
            setSessionStorageValue("AB_IS_CHECKED", IS_CHECKED);
            updateAddToCartButtonLayout();
        });
    }

    function handleProductQuantity() {
        q(".product-form .quantity-input__input").addEventListener("change", (e) => {
            updateAddToCartButtonLayout();
        });
    }

    function handleAddToCartWithFertilizer() {
        const btn = q("#AddToCart");
        btn.addEventListener(
            "click",
            async (e) => {
                if (!IS_CHECKED || IS_BUSY) return; // second pass: let the theme handle it
                btn.classList.add("loading");
                e.preventDefault();
                e.stopImmediatePropagation();
                IS_BUSY = true;

                try {
                    const { variantId, productId } = getFertilizerInfo();
                    await addToCart(variantId, productId, 1, "product"); // your working function (A/B product)
                } catch (err) {
                    console.error(err);
                }

                q("#ab_fertilizer").checked = false;
                q("#ab_fertilizer").dispatchEvent(new Event("change", { bubbles: true, cancelable: true }));
                IS_CHECKED = false;
                IS_BUSY = false;
                setSessionStorageValue("AB_IS_ADDED", true);
                // GOAL ->  Fertilizer Add-ons | Adds fertilizer product | js
                window._conv_q = window._conv_q || [];
                _conv_q.push(["triggerConversion", "1004129715"]);

                
                btn.click(); // theme adds the main product and refreshes the side cart
            },
            true,
        );
    }

    function init() {
        if (window[page_initials] === true) return;
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;

        const sku = q(".product__sku-block.product__block.product__block--medium");
        if (sku) q(".product__price-block.product__block.product__block--medium").insertAdjacentElement("beforebegin", sku);
        createLayout();
        updateAddToCartButtonLayout();
        handleFertilizerCheck();
        handleProductQuantity();
        handleAddToCartWithFertilizer();
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q('meta[property="og:price:amount"]') &&
            q(".product__price-block.product__block.product__block--medium") &&
            q("#AddToCart")
        );
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
