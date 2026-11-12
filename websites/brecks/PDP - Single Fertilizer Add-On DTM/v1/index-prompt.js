(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Brecks.com",
        site_url: "https://www.brecks.com",
        test_name: "PDP - Single Fertilizer Add-On [DTM]",
        page_initials: "AB-SINGLE-FERTILIZER",
        test_variation: 1,
        test_version: 0.0002,
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
            productId: "9687381999931", // data-lion-price-for-product-id
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
            productId: "9687381705019", // data-lion-price-for-product-id
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
            productId: "9687382262075", // data-lion-price-for-product-id
            productPrice: "8.99",
            bulletPoint1: "Recommended for",
            bulletPoint2: "Stronger roots and bigger, brighter blooms",
            bulletPoint3: "One 13oz bag covers 40 sq ft",
            productUrl: "https://www.brecks.com/products/brecks_food_for_bulbs_and_perennials?variant=49216239698235",
            imageUrl: "https://www.brecks.com/cdn/shop/files/84749.webp?v=1776107453&width=1200",
        },
    };

    // ==========================================
    // HELPER FUNCTIONS
    // ==========================================

    async function waitForElementAsync(predicate, timeout = 20000, frequency = 150) {
        if (typeof predicate !== "function") {
            throw new TypeError("predicate must be a function");
        }

        if (predicate()) return true;

        return new Promise((resolve, reject) => {
            const startTime = Date.now();

            const interval = setInterval(() => {
                try {
                    if (predicate()) {
                        clearInterval(interval);
                        resolve(true);
                        return;
                    }

                    if (Date.now() - startTime >= timeout) {
                        clearInterval(interval);
                        reject(new Error(`Timeout of ${timeout}ms reached while waiting for condition: ${predicate.toString()}`));
                    }
                } catch (error) {
                    clearInterval(interval);
                    reject(error);
                }
            }, frequency);
        });
    }

    function q(selector, context = document) {
        return context.querySelector(selector);
    }

    function qq(selector, context = document) {
        return [...context.querySelectorAll(selector)];
    }

    function debounce(func, wait = 0) {
        let timeout;

        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    }

    function isSafari() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    function setSessionStorageValue(key, value) {
        try {
            sessionStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.warn("Unable to save session storage value:", error);
        }
    }

    function getSessionStorageValue(key, defaultValue = null) {
        try {
            const value = sessionStorage.getItem(key);

            if (value === null) return defaultValue;

            try {
                return JSON.parse(value);
            } catch {
                return value;
            }
        } catch (error) {
            console.warn("Unable to read session storage value:", error);
            return defaultValue;
        }
    }

    function getFertilizerInfo() {
        const pathname = window.location.pathname.toLowerCase();

        if (pathname.includes("iris")) return DATA.iris;
        if (pathname.includes("daylily")) return DATA.daylily;

        return DATA.all;
    }

    // ==========================================
    // API CALL FUNCTION
    // ==========================================

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

    // ==========================================
    // STATE & SELECTORS
    // ==========================================

    let IS_CHECKED = false;
    let IS_BUSY = false;

    const SELECTORS = {
        insertionPoint: ".product__price-block.product__block.product__block--medium, " + ".product__controls-group.product__variants-wrapper.product__block.product__block--medium",

        breadcrumbs: ".breadcrumbs__list > .breadcrumbs__item:nth-child(3) .breadcrumbs__link",

        quantity: ".product-form .quantity-input__input",

        addToCart: "#AddToCart",

        fertilizerCheckbox: "#ab_fertilizer",

        productControls: ".product-form[data-has-quantity-selector] .product-form__controls-group",

        mainPrice: "button.selected [data-lion-price-for-product-id], " + ".product__price-block.product__block.product__block--medium .product__price [data-lion-price-for-product-id]",
    };

    // ==========================================
    // PRODUCT HELPERS
    // ==========================================

    function getExactCategory(productCategory = getFertilizerInfo().productCategory) {
        if (productCategory !== "all") return productCategory;

        return q(SELECTORS.breadcrumbs)?.textContent.trim() || "plants";
    }

    function getProductPrice() {
        const priceText = q(SELECTORS.mainPrice)?.textContent.trim() || "";
        const priceMatch = priceText.match(/[\d,.]+/);

        return priceMatch ? Number(priceMatch[0].replace(/,/g, "")) : 0;
    }

    // ==========================================
    // CREATE FERTILIZER LAYOUT
    // ==========================================

    function createLayout() {
        const { productCategory, plantFood, productPrice, bulletPoint2, bulletPoint3, productUrl, imageUrl } = getFertilizerInfo();

        const exactCategory = getExactCategory(productCategory);

        const isCheckedInStorage = Boolean(getSessionStorageValue("AB_IS_CHECKED"));

        const isAlreadyAdded = Boolean(getSessionStorageValue("AB_IS_ADDED"));

        // Prevent duplicate markup.
        q(".ab-single-fertilizer")?.remove();

        const insertionPoint = q(SELECTORS.insertionPoint);

        if (!insertionPoint) return;

        insertionPoint.insertAdjacentHTML(
            "afterend",
            `
                <div class="ab-single-fertilizer">

                    <div class="ab-single-fertilizer__top">
                        <label
                            for="ab_fertilizer"
                            class="ab-single-fertilizer__label"
                        >
                            <input
                                type="checkbox"
                                id="ab_fertilizer"
                                value="${productCategory}"
                                class="ab-single-fertilizer__input"
                            />

                            <span class="ab-single-fertilizer__label-text">
                                Add plant food for bigger, brighter blooms
                            </span>
                        </label>
                    </div>

                    <div class="ab-single-fertilizer__bottom">

                        <a href="${productUrl}" class="ab-single-fertilizer___img">
                            <img
                                src="${imageUrl}"
                                alt="${exactCategory}"
                                loading="lazy"
                            />
                        </a>

                        <div class="ab-single-fertilizer___text-content">

                            <h3 class="ab-single-fertilizer__title">
                                ${plantFood} · $${productPrice}
                            </h3>

                            <ul class="ab-single-fertilizer__benefit-lists">

                                <li class="ab-single-fertilizer__benefit-item">
                                    Recommended for ${exactCategory.toLowerCase()}
                                </li>

                                <li class="ab-single-fertilizer__benefit-item">
                                    ${bulletPoint2}
                                </li>

                                <li class="ab-single-fertilizer__benefit-item">
                                    ${bulletPoint3}
                                </li>

                            </ul>

                        </div>
                    </div>

                </div>
            `,
        );

        const checkbox = q(SELECTORS.fertilizerCheckbox);

        checkbox.checked = isCheckedInStorage && !isAlreadyAdded;

        IS_CHECKED = checkbox.checked;
    }

    // ==========================================
    // UPDATE ADD TO CART BUTTON
    // ==========================================

    function updateAddToCartButtonLayout() {
        const targetNode = q(SELECTORS.addToCart);
        const addToCartText = q("#addcarttext", targetNode);
        const quantityInput = q(SELECTORS.quantity);

        if (!targetNode || !addToCartText || !quantityInput) return;

        const mainProductPrice = getProductPrice();

        const quantity = Math.max(1, Number(quantityInput.value) || 1);

        const { productPrice, productCategory } = getFertilizerInfo();

        const total = (mainProductPrice * quantity + Number(productPrice)).toFixed(2);

        const exactCategory = getExactCategory(productCategory);

        q(".ab-short-info")?.remove();

        if (!IS_CHECKED) {
            addToCartText.innerText = "Add to Cart";
            return;
        }

        addToCartText.innerText = `Add to Cart | $${total}`;

        q(SELECTORS.productControls)?.insertAdjacentHTML(
            "afterend",
            `
                <span class="ab-short-info">
                    Adds both items to your cart. Uncheck the box above to add only your
                    ${exactCategory.toLowerCase()}.
                </span>
            `,
        );
    }

    // ==========================================
    // EVENT HANDLERS
    // ==========================================

    function handleFertilizerCheck() {
        const checkbox = q(SELECTORS.fertilizerCheckbox);

        if (!checkbox) return;

        checkbox.addEventListener("change", (event) => {
            IS_CHECKED = event.currentTarget.checked;

            setSessionStorageValue("AB_IS_CHECKED", IS_CHECKED);

            updateAddToCartButtonLayout();
        });
    }

    function handleProductQuantity() {
        const quantityInput = q(SELECTORS.quantity);

        if (!quantityInput) return;

        quantityInput.addEventListener("change", updateAddToCartButtonLayout);

        quantityInput.addEventListener("input", updateAddToCartButtonLayout);
    }

    function handleProductVariantSwitch() {
        const variantContainer = q(".dynamic-variant-input-wrap");

        if (!variantContainer) return;

        variantContainer.addEventListener("change", updateAddToCartButtonLayout);

        variantContainer.addEventListener("click", updateAddToCartButtonLayout);
    }

    // ==========================================
    // ADD TO CART WITH FERTILIZER
    // ==========================================

    function handleAddToCartWithFertilizer() {
        const buttons = qq("#AddToCart, .sticky-atc-bar__button button[name='add']");

        buttons.forEach((button) => {
            button.addEventListener(
                "click",
                async (event) => {
                    if (!IS_CHECKED || IS_BUSY) return;

                    event.preventDefault();
                    event.stopImmediatePropagation();

                    IS_BUSY = true;

                    button.classList.add("loading");
                    button.setAttribute("aria-busy", "true");

                    try {
                        const { variantId, productId } = getFertilizerInfo();

                        await addToCart(variantId, productId, 1, "product");

                        setSessionStorageValue("AB_IS_ADDED", true);
                        setSessionStorageValue("AB_IS_CHECKED", false);

                        const checkbox = q(SELECTORS.fertilizerCheckbox);

                        if (checkbox) {
                            checkbox.checked = false;

                            checkbox.dispatchEvent(
                                new Event("change", {
                                    bubbles: true,
                                }),
                            );
                        }

                        IS_CHECKED = false;

                        // GOAL -> Fertilizer Add-ons | Adds fertilizer product | js
                        window._conv_q = window._conv_q || [];

                        window._conv_q.push(["triggerConversion", "1004129715"]);

                        // Let the theme add the main product and refresh the cart.
                        button.click();
                    } catch (error) {
                        console.error("Unable to add fertilizer to cart:", error);
                    } finally {
                        IS_BUSY = false;

                        button.classList.remove("loading");
                        button.removeAttribute("aria-busy");
                    }
                },
                true,
            );
        });
    }

    // ==========================================
    // INIT
    // ==========================================

    function init() {
        if (window[page_initials] === true) return;

        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

        window[page_initials] = true;

        const sku = q(".product__sku-block.product__block.product__block--medium");

        if (sku) {
            q(
                ".product__price-block.product__block.product__block--medium, " + ".product__controls-group.product__variants-wrapper.product__block.product__block--medium",
            ).insertAdjacentElement("beforebegin", sku);
        }

        createLayout();

        updateAddToCartButtonLayout();

        handleFertilizerCheck();

        handleProductQuantity();

        handleProductVariantSwitch();

        handleAddToCartWithFertilizer();
    }

    // ==========================================
    // CHECK REQUIRED ELEMENTS
    // ==========================================

    function checkForItems() {
        return Boolean(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
                q('meta[property="og:price:amount"]') &&
                q(SELECTORS.insertionPoint) &&
                q(SELECTORS.addToCart),
        );
    }

    // ==========================================
    // EXECUTION
    // ==========================================

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn("Single fertilizer test could not initialize:", error);
        return false;
    }
})();
