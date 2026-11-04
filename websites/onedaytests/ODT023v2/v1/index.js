(async () => {
    const TEST_CONFIG = {
        client: "Converted",
        project: "One Day Tests",
        site_url: "https://onedaytests.com",
        test_name: "ODT023v2 - Image gallery PDP test",
        page_initials: "AB-ODT023v2",
        test_variation: 1,
        test_version: 0.0007,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const IMAGES = [
        "https://cdn-3.convertexperiments.com/uf/10018141/10018430/card-a-choose-how-you-testaa-1_6aeb004d6fb0f.png",
        "https://cdn-3.convertexperiments.com/uf/10018141/10018430/card-b-track-your-results-over-timebb-1_6aeb0079e83b3.png",
        "https://onedaytests.com/cdn/shop/files/One_Day_Test-Clinic_male_customer_1000x667.jpg?v=1786443187",
    ];

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

    function isSafari() {
        const userAgent = navigator.userAgent;
        return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    function replaceImages() {
        const thumbItems = [
            {
                selector: `.gallery-navigation--scroller .product-gallery--media-thumbnail[data-gallery-index="1"] img, .product-gallery--viewer .product-gallery--media[data-gallery-index="1"] img, .pswp__img[src='//onedaytests.com/cdn/shop/files/One_Day_Test-Clinic_male_customer_1000x667.jpg?v=1786443187']`,
                image_url: IMAGES[0],
            },
            {
                selector: `.gallery-navigation--scroller .product-gallery--media-thumbnail[data-gallery-index="2"] img, .product-gallery--viewer .product-gallery--media[data-gallery-index="2"] img, .pswp__img[src='//onedaytests.com/cdn/shop/products/box_sleeve_2000px_b1c5e5ff-fc28-42dc-9e53-04914947d948_2000x1594.jpg?v=1768211106']`,
                image_url: IMAGES[1],
            },
            {
                selector: `.gallery-navigation--scroller .product-gallery--media-thumbnail[data-gallery-index="5"] img, .product-gallery--viewer .product-gallery--media[data-gallery-index="5"] img, .pswp__img[src='//onedaytests.com/cdn/shop/products/sussexpathology-01-04-web3_1b6a4c80-0bc8-42e2-ada1-3faf3b7098ee_2000x1333.jpg?v=1768211106']`,
                image_url: IMAGES[2],
            },
        ];

        thumbItems.forEach(({ selector, image_url }) => {
            const targetNodes = qq(selector);
            targetNodes?.forEach((node) => {
                if (node?.src.includes(image_url) && node?.srcset.includes(image_url)) return;
                node.classList.add("custom_preview_el");
                node?.parentElement.classList.add("media_wrapper_el");
                node.setAttribute("src", image_url);
                node.setAttribute("srcset", image_url);
            });
        });
    }

    function replaceImagesInInterval() {
        let count = 0;
        let interval = setInterval(() => {
            replaceImages();
            if (++count > 5) {
                clearInterval(interval);
            }
        }, 1000);
    }

    async function mutationObserverFunction() {
        await waitForElementAsync(() => q(".pswp__container"));
        const targetNode = q(".pswp__container");
        return new MutationObserver(replaceImages).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    function init() {
        if (window[page_initials] === true) return;
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;

        replaceImages();
        if (isSafari()) {
            replaceImagesInInterval();
        }
        mutationObserverFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".product-gallery") && document.readyState !== "loading");
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
