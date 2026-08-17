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
        return document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

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

        console.log("UpdatedTxt", txt);

        return txt.trim();
    }

    function updateLayout(targetNode) {
        // console.log("targetNode", targetNode);

        const productTitle = targetNode.textContent.trim();
        const updatedTitle = getUpdatedTitle(productTitle);

        if (!(targetNode.classList.contains("base") && targetNode.hasAttribute("data-ui-id"))) {
            targetNode.innerText = updatedTitle;
        }

        // targetNode.insertAdjacentHTML("afterend", /* HTML */ `<span class="base  ab-product-title">${updatedTitle}</span>`);

        const matchedData = getMatchingBrandData(productTitle);
        if (!matchedData) return;
        const { brand_title, img_url, link } = matchedData;

        qq(targetNode.parentNode, ".ab-brand, span.ab-product-title").forEach((item) => item.remove());

        targetNode.parentNode.classList.add("ab-title-and-brand-container");

        targetNode.insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                ${targetNode.classList.contains('base') && targetNode.hasAttribute('data-ui-id') ? `<span class="base  ab-product-title">${updatedTitle}</span>` : ""} 
                <a href="${link}" class="ab-brand">
                    <div class="ab-brand__label">Brand:</div>
                    <div class="ab-brand__img">
                        <img src="${img_url}" alt="${brand_title}" />
                    </div>
                </a>
            `,
        );
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
            setTimeout(() => {
                console.log("title: ", q("body.catalog-product-view h1.page-title span").textContent);
                updateLayout(q("body.catalog-product-view h1.page-title span"));
            }, 100);
        });
        // Side Cart Section

        // Cart Page
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            (q("body.page-products .product-item-link .text-primary.font-bold.text-lg") ||
                (q("body.catalog-product-view h1.page-title span") && q("body.catalog-product-view .pdp-slider-container .pdp-slider .product-title"))) &&
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

// function getUpdatedTitle(productTitle) {
//     let txt = productTitle.trim();

//     /*

//     1. Remove : DuraGrip®, DuraGrip, VELCRO®, VELCRO,  3M™,  3M
//     2. Remove: Brand , Brand -
//     3. Replace:  "Peel & Stick"  with "Adhesive Backed"
//     4. If title contains "Rubber" or "Acrylic" wrap them with (), Example: (Rubber)
//     5. Remove whitespaces

//     Examples:
//     1. DuraGrip® Brand Hook and Loop Coins ->  Hook and Loop Coins
//     2. DuraGrip Brand Display Loop -> Display Loop
//     3. DuraGrip® Brand - 3/4" White Loop Peel & Stick - Rubber -> 3/4 White Loop Adhesive Backed - (Rubber)
//     4. DuraGrip® Brand Adhesive Backed Hook and Loop Fasteners ->   Adhesive Backed Hook and Loop Fasteners
//     5. VELCRO® Brand Sew-On Loop 3610 ->  Sew-On Loop 3610
//     6. 3M™ Dual Lock™ 1" Clear Recloseable Fastener - 50 Yard Roll -> Dual Lock™ 1" Clear Recloseable Fastener - 50 Yard Roll
//     7. DuraGrip® Brand - 1" Black Hook Peel & Stick - Acrylic -> 1 Black Hook Adhesive Backed - (Acrylic)

//     */

//     console.log("UpdatedTxt", txt);

//     return txt.trim();
// }
