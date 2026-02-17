/* 

Ticket : https://trello.com/c/vx7mJ8cY/4768-%E2%9D%A4%EF%B8%8F-pp27us-collection-quick-add-modal-with-images-2-set-up-test
Figma: https://www.figma.com/design/OFbYNoG7ddtMgXfuaunJPh/PP_---COLLECTION--Quick-Add-Modal-with-Images?node-id=4001-29095&t=7hQ02K4unS65XZam-0



https://us.princesspolly.com
https://www.princesspolly.com.au

// https://us.princesspolly.com/products/gigi-skort-beige
check the pdp pages as the code mostly works on it, and you can also find design


*/

(async () => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "Princess Polly",
        site_url: "https://us.princesspolly.com",
        test_name: "Ticket Name",
        page_initials: "AB-PP27US",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    async function fetchAndParseURLApi(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const html = await response.text();
            const dom = new DOMParser().parseFromString(html, "text/html");
            return dom;
        } catch (error) {
            // console.error("Fetch and parse failed:", error);
            return null;
        }
    }

    function waitForElement(predicate, callback, timer = 20000, frequency = 150) {
        if (timer <= 0) {
            console.warn(`Timeout reached while waiting for condition: ${predicate.toString()}`);
            return;
        } else if (predicate && predicate()) {
            callback();
        } else {
            setTimeout(() => waitForElement(predicate, callback, timer - frequency, frequency), frequency);
        }
    }

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

    async function waitForPromiseOnMutation(predicate, maxCount = 50) {
        let count = 0;

        return new Promise((resolve, reject) => {
            if (typeof predicate === "function" && predicate()) {
                return resolve(true);
            }

            new MutationObserver((mutationList, observer) => {
                count++;

                if (typeof predicate === "function" && predicate()) {
                    observer.disconnect();
                    return resolve(true);
                } else if (count > maxCount) {
                    observer.disconnect();
                    return reject(new Error(`Max polling count ${count} reached while waiting for predicate:\n${predicate.toString()}`));
                }
            }).observe(document.body, { childList: true, subtree: true });
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

    function getCookie(key) {
        try {
            if (!key || typeof key !== "string") {
                // console.error("Invalid key provided to getCookie");
                return null;
            }

            // Encode the key to handle special characters
            const encodedKey = encodeURIComponent(key);
            const cookies = `; ${document.cookie}`;

            // Find the cookie value
            const parts = cookies.split(`; ${encodedKey}=`);

            if (parts.length === 2) {
                const value = parts.pop().split(";").shift();
                return value ? decodeURIComponent(value) : null;
            }

            return null;
        } catch (error) {
            // console.error(`Error reading cookie "${key}":`, error);
            return null;
        }
    }

    function isSafari() {
        const userAgent = navigator.userAgent;
        return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    function mutationObserverFunction() {
        const targetNode = q("#cart-drawer");
        const debouncedUpdate = debounce(updateSideCartLayout, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    async function createLayout() {
        const dom = await fetchAndParseURLApi("https://us.princesspolly.com/products/gigi-skort-black-lower-impact?variant=41406057676884");
        // const dom = await fetchAndParseURLApi("https://us.princesspolly.com/products/marano-bag-brown");
        const thumbnails = qq(dom, ".product__thumb img");
        const afterPay = q(dom, ".product__payment-terms");
        const layout = q(dom, ".product__info");

        console.log(dom, layout, afterPay);

        q("body").insertAdjacentHTML(
            "afterbegin",
            /* HTML */ ` <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(51, 49, 49, 0.5); z-index: 1000;">
                <div style="width:100%;height:max-content; background-color: #fff; margin: auto;">
                    <div style=" width: 100%;" class="ab-swiper swiper">
                        <div class="swiper-wrapper">${thumbnails.map((thumbnail) => `<div class="swiper-slide">${thumbnail.outerHTML}</div>`).join("")}</div>
                    </div>

                    <div style="display:block; border:1px solid red;  height: 100px;" class="ab-afterpay">
                        <div class="product__payment-terms">
                            <div class="afterpay" data-currency="USD">
                                <afterpay-placement
                                    id="afterpay-placement-pdp"
                                    data-locale="en_US"
                                    data-currency="USD"
                                    data-amount="49"
                                    data-currency-conversion="49.00"
                                    data-amount-attribute="amount"
                                    data-currency-attribute="currency"
                                    data-logo-type="lockup"
                                    data-size="sm"
                                    data-show-interest-free="false"
                                ></afterpay-placement>
                            </div>
                        </div>
                    </div>
                    <div>${layout.outerHTML}</div>
                </div>
            </div>`,

            waitForElement(
                () => typeof window.Swiper === "function" && window.Swiper && document.readyState === "complete",
                () => {
                    console.log("========= Swiper ========== ", window.Swiper);

                    // INSERT_YOUR_CODE
                    // Initialize Swiper for .ab-swiper elements using window.Swiper

                    const swiperEl = document.querySelectorAll(".ab-swiper");
                    swiperEl.forEach((el) => {
                        // eslint-disable-next-line no-new
                        new window.Swiper(el, {
                            // slidesPerView: "auto", // use slide width from CSS (163px)
                            slidesPerView: "auto", // use slide width from CSS (163px)
                            spaceBetween: 5, // 5px gap between slides
                            loop: false, // or true if you want looping
                            navigation: {
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            },
                            watchSlidesProgress: true,
                            // items: 1.5,
                        });
                    });

                    console.log("========= Afterpay ========== ", window.Afterpay);
                    if (typeof window.Afterpay !== "undefined" && window.Afterpay.update) {
                        window.Afterpay.update();
                    }
                },
                10000,
            ),
        );
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && true);
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
