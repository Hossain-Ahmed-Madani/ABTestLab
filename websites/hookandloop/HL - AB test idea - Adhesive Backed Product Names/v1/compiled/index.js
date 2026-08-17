(async () => {
    const TEST_CONFIG = {
        client: "Hook & Loop",
        project: "Hook & Loop",
        site_url: "https://www.hookandloop.com",
        test_name: "H & L - A/B test idea - Adhesive Backed Product Names",
        page_initials: "AB-ADHESIVE-BACKED-PRODUCT-NAME",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const DATA = {
        duragrip: {
            brand_title: "Duragrip",
            img_url: "https://www.hookandloop.com/media/catalog/product/cache/67ee89799642c567a71fc92f3699d937/d/u/duragrip.jpg",
            link: "https://www.hookandloop.com/brands/duragrip",
        },
        velcro: {
            brand_title: "Velcro",
            img_url: "https://www.hookandloop.com/media/catalog/product/cache/67ee89799642c567a71fc92f3699d937/v/e/velcro_logo_1.jpg",
            link: "https://www.hookandloop.com/brands/velcro",
        },
        "3m": {
            brand_title: "3M",
            img_url: "https://hookandloop.com/media/wysiwyg/Logos/3M.png",
            link: "https://www.hookandloop.com/brands/3M",
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

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function getMatchingBrandData(productTitle) {
        const txt = productTitle.toLowerCase();
        const brands = ["duragrip", "velcro", "3m"];
        const brand = brands.find((brand) => txt.includes(brand));
        return brand ? DATA[brand] : null;
    }

    function getUpdatedTitle(productTitle) {
        let txt = productTitle.trim();

        // 1. Remove brand/material markers (order matters: longer/more specific first)
        const brandMarkers = ["DuraGrip®", "DuraGrip", "VELCRO®", "VELCRO", "3M™", "3M"];
        for (const marker of brandMarkers) {
            txt = txt.split(marker).join("");
        }

        // 2. Remove "Brand -" and "Brand" (handle the dash variant first so it
        //    doesn't leave a dangling "-")
        txt = txt.replace(/Brand\s*-\s*/gi, " ");
        txt = txt.replace(/Brand\b/gi, " ");

        // 3. Replace "Peel & Stick" with "Adhesive Backed"
        txt = txt.replace(/Peel\s*&\s*Stick/gi, "Adhesive Backed");

        // 4. Wrap "Rubber" or "Acrylic" in parentheses (skip if already wrapped)
        txt = txt.replace(/(?<!\()\bRubber\b(?!\))/g, "(Rubber)");
        txt = txt.replace(/(?<!\()\bAcrylic\b(?!\))/g, "(Acrylic)");

        // 5. Collapse/remove extra whitespace
        txt = txt.replace(/\s+/g, " ").trim();

        // console.log("UpdatedTxt", txt);

        return txt.trim();
    }

    function updateLayout(targetNode) {
        const productTitle = targetNode.textContent.trim();
        const updatedTitle = getUpdatedTitle(productTitle);

        if (!(targetNode.classList.contains("base") && targetNode.hasAttribute("data-ui-id"))) {
            targetNode.innerText = updatedTitle;
        }

        const matchedBrandData = getMatchingBrandData(productTitle);
        if (!matchedBrandData) return;
        const { brand_title, img_url, link } = matchedBrandData;

        qq(targetNode.parentNode, ".ab-brand, span.ab-product-title").forEach((item) => item.remove());

        targetNode.parentNode.classList.add("ab-title-and-brand-container");

        targetNode.insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                ${targetNode.classList.contains("base") && targetNode.hasAttribute("data-ui-id") ? `<span class="base  ab-product-title">${updatedTitle}</span>` : ""}
                <a href="${link}" class="ab-brand">
                    <div class="ab-brand__label">Brand:</div>
                    <div class="ab-brand__img">
                        <img src="${img_url}" alt="${brand_title}" />
                    </div>
                </a>
            `,
        );
    }

    function updateCartPageAddedProduct(targetNode) {
        const productTitleElement = q(targetNode, "a:not(.font-bold)");
        const productTitle = productTitleElement.textContent.trim();
        const updatedTitle = getUpdatedTitle(productTitle);
        
        productTitleElement.innerText = updatedTitle;
        
        const productBrandTitle = q(targetNode, "a.font-bold").textContent.trim();        const matchedBrandData = getMatchingBrandData(productBrandTitle);
        if (!matchedBrandData) return;
        const { brand_title, img_url, link } = matchedBrandData;

        productTitleElement.parentNode.classList.add("ab-title-and-brand-container");

        productTitleElement.insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <a href="${link}" class="ab-brand">
                    <div class="ab-brand__label">Brand:</div>
                    <div class="ab-brand__img">
                        <img src="${img_url}" alt="${brand_title}" />
                    </div>
                </a>
            `,
        );
    }

    function updateSideCartProductTitles(mutationList, observer) {
        console.log("==== updateSideCartProductTitles ====");
        mutationList.forEach((mutation) => {
            console.log("===== mutation: ", mutation, mutation.addedNodes.length, mutation.target, mutation.target.classList, mutation.target.classList.contains("product-title"));
        });
    }

    function mutationObserverFunction() {
        const targetNode = q("#cart-drawer #cartDrawerContent");
        console.log("targetNode ", targetNode);
        if (!targetNode) return;
        const debouncedUpdate = debounce(updateSideCartProductTitles, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: false });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        // https://www.hookandloop.com/products
        // https://www.hookandloop.com/products/peel-and-stick

        // PLP Page
        qq("body.page-products .product-item-link .text-primary.font-bold.text-lg")?.forEach(updateLayout);

        // PDP Page
        qq("body.catalog-product-view h1.page-title span, body.catalog-product-view .pdp-slider-container .pdp-slider .product-title")?.forEach(updateLayout);
        window.addEventListener("configurable-selection-changed", (e) => {
            setTimeout(() => updateLayout(q("body.catalog-product-view h1.page-title span")), 100);
        });

        // Side Cart Section | PENDING
        if (q("#cart-drawer #cartDrawerContent")) {
            qq("#cart-drawer #cartDrawerContent .product-price, #cart-drawer .product-title")?.forEach(updateLayout);
            mutationObserverFunction();
        }

        // Cart Page
        qq("body.checkout-cart-index .product-item-name")?.forEach(updateCartPageAddedProduct);
        qq("body.checkout-cart-index .pdp-slider-container .pdp-slider .product-title")?.forEach(updateLayout);
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            (q("body.page-products .product-item-link .text-primary.font-bold.text-lg") ||
                q("body.catalog-product-view h1.page-title span") ||
                q("body.checkout-cart-index .product-item-name")) &&
            document.readyState === "complete"
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
