/* 
Target URL's:
https://www.texastaxprotest.com/blog/
https://www.texastaxprotest.com/blog/texas-tax-relief-amendment/
https://www.texastaxprotest.com/blog/texas-property-tax-cuts-2025/

Figma: https://www.figma.com/design/42DzjhpNUj4W7pNQzKxJ4m/TTP27---BLOGS--Redesign-In-Line-Ads?node-id=2001-309&t=gm3GJl2zJdkfCqXS-0

Test container: https://marketer.monetate.net/control/a-7b7b9c2b/p/texastaxprotest.com/experience/2088293#c2622626:what
Url Matching Regex: ^https?:\/\/(?:www\.)?texastaxprotest\.com\/blog\/[^\/?#]+\/?(?:[?#].*)?$


Preview:
control: https://marketer.monetate.net/control/preview/12476/8XJWG0ICTUP1403FBUY3EJKDCT8DDQHG/27-blogs-redesign-in-line-ads
v1: https://marketer.monetate.net/control/preview/12476/J8LNV8DPFFC4WDJLO94FBPLTTUOPZDCO/27-blogs-redesign-in-line-ads

Preview including all experiences:
control: https://marketer.monetate.net/control/preview/12476/39UK6PB0RUMHN1YAQRQP5AZSJ5W2PGSI/27-blogs-redesign-in-line-ads
v1: https://marketer.monetate.net/control/preview/12476/55P0XAK8BGTJ583GGZNJMEKPCOX9NQLQ/27-blogs-redesign-in-line-ads


*/

(async () => {
    const TEST_ID = "TTP27";
    const VARIANT_ID = "V1"; /* Control, V1 */

    function logInfo(message) {
        console.log(
            `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
            "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            message,
        );
    }

    logInfo("fired");

    const TEST_CONFIG = {
        client: "Acadia",
        project: "texastaxprotest",
        host: "https://www.texastaxprotest.com",
        test_name: " TTP27: [BLOGS] Redesign In-Line Ads - (2) SET UP TEST",
        page_initials: "AB-TTP27",
        test_variation: 1 /* 0, 1 */,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    function fireGA4Event(eventName, eventLabel = "") {
        console.log("fireGA4Event:", eventName, eventLabel);

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "GA4event",
            "ga4-event-name": "cro_event",
            "ga4-event-p1-name": "event_category",
            "ga4-event-p1-value": eventName,
            "ga4-event-p2-name": "event_label",
            "ga4-event-p2-value": eventLabel,
        });
    }

    const ASSETS = {
        property_tax_too_high_mobile: "https://sb.monetate.net/img/1/1582/6005534.png",
        property_tax_too_high_desktop: "https://sb.monetate.net/img/1/1582/6005535.png",
        property_tax_made_easy_mobile: "https://sb.monetate.net/img/1/1582/6005538.png",
        property_tax_made_easy_desktop: "https://sb.monetate.net/img/1/1582/6005540.png",
        property_tax_got_you_down_mobile: "https://sb.monetate.net/img/1/1582/6005542.png",
        property_tax_got_you_down_desktop: "https://sb.monetate.net/img/1/1582/6005545.png",
    };

    const DATA = {
        layout_info: [
            {
                title: "Property Taxes Too High",
                selector: "figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/12/Win-fair-tax-assessments-for-Texas-property-owners-1024x576.png'])",
                img_mobile_src: ASSETS.property_tax_too_high_mobile,
                img_desktop_src: ASSETS.property_tax_too_high_desktop,
            },
            {
                title: "Property Taxes Made Easy",
                selector: "figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/12/Tax-Protests-Made-Easy-with-Texas-Tax-Protest-1024x576.png'])",
                img_mobile_src: ASSETS.property_tax_made_easy_mobile,
                img_desktop_src: ASSETS.property_tax_made_easy_desktop,
            },
            {
                title: "Property Taxes Got You Down",
                selector: "figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/09/Texas-Tax-Protest-Can-Advocate-For-Your-Property0A-1024x576.png'])",
                img_mobile_src: ASSETS.property_tax_got_you_down_mobile,
                img_desktop_src: ASSETS.property_tax_got_you_down_desktop,
            },
        ],
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

    function isSafari() {
        const userAgent = navigator.userAgent;
        return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    let foundNodes;

    function updateLayout() {
        DATA["layout_info"].forEach(({ title, selector, img_mobile_src, img_desktop_src }) => {
            const targetNode = q(selector);

            if (!targetNode) return;

            console.log(targetNode);

            targetNode.classList.add("ab-hidden");

            const layout = /* HTML */ `
                <figure class="ab-figure-content wp-block-image size-large ab-mobile">
                    <a href="https://www.texastaxprotest.com/blog-contact-us/" target="_blank" rel=" noreferrer noopener">
                        <img
                            loading="lazy"
                            decoding="async"
                            width="1024"
                            height="576"
                            src="${img_mobile_src}"
                            alt="${title}"
                            class="wp-image-712"
                            sizes="auto, (max-width: 1024px) 100vw, 1024px"
                        />
                    </a>
                </figure>
                <figure class="ab-figure-content wp-block-image size-large ab-desktop">
                    <a href="https://www.texastaxprotest.com/blog-contact-us/" target="_blank" rel=" noreferrer noopener">
                        <img
                            loading="lazy"
                            decoding="async"
                            width="1024"
                            height="576"
                            src="${img_desktop_src}"
                            alt="${title}"
                            class="wp-image-712"
                            sizes="auto, (max-width: 1024px) 100vw, 1024px"
                        />
                    </a>
                </figure>
            `;

            targetNode.insertAdjacentHTML("afterend", layout);
        });
    }

    function clickFunction() {

        // Variation
        qq(`.${page_initials} figure.ab-figure-content a`).forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const currentTarget = e.currentTarget;
                const href = currentTarget.getAttribute("href");
                const label = q(currentTarget, "img").getAttribute("alt") ?? "";
                fireGA4Event("TTP27_inlineAdClicks", label);
                window.open(href, "_blank", "noopener,noreferrer");
            });
        });
    }

    function isElementVisibleInViewport(el) {
        let top = el.getBoundingClientRect().top;
        let right = el.getBoundingClientRect().right;
        let bottom = el.getBoundingClientRect().bottom;
        let left = el.getBoundingClientRect().left;
        let innerWidth = window.innerWidth;
        let innerHeight = window.innerHeight;

        return ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) && ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth));
    }

    const debouncedGa4Event = debounce(() => {
        fireGA4Event("TTP27_ViewInLineAd");
    }, 250);

    function removeScrollHandler() {
        console.log("scroll event removed");
        window.removeEventListener("scroll", handleScroll);
        foundNodes = null;
    }

    function handleScroll(e) {
        const isVisible = foundNodes.some((item) => isElementVisibleInViewport(item));
        if (isVisible) {
            debouncedGa4Event();
            removeScrollHandler();
        }
    }

    function scrollFunction() {
        // Control
        // foundNodes = DATA["layout_info"].filter(({ selector }) => q(selector)).map(({ selector }) => q(selector));

        // Variation
        foundNodes = qq(".ab-figure-content img");

        if (foundNodes && foundNodes.length === 0) return;
        window.addEventListener("scroll", handleScroll);
    }

    function handleLocationChanges() {
        const pathname = window.location.pathname;
        const blogDetailPathRegex = /^\/blog\/[^/]+\/?$/;

        if (blogDetailPathRegex.test(pathname)) {
            init_TTP27();
        } else {
            window[page_initials] = false;
            document.body.classList.remove(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
            removeScrollHandler();
        }
    }

    function urlObserver() {
        const debouncedChanges = debounce(handleLocationChanges, 150);

        const originalPushState = history.pushState;
        history.pushState = function () {
            originalPushState.apply(history, arguments);
            window.dispatchEvent(new Event("pushstate"));
        };

        // Listen for back/forward button clicks
        window.addEventListener("popstate", function (event) {
            console.log("==== < Navigation occurred (back/forward button) ====");
            debouncedChanges();
        });

        window.addEventListener("pushstate", function () {
            console.log("=== > History state was changed programmatically ===");
            debouncedChanges();
        });
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            DATA.layout_info.some((item) => q(item.selector)) &&
            document.readyState === "complete"
        );
    }

    async function init_TTP27() {
        if (window[page_initials] === true) return;

        try {
            await waitForElementAsync(checkForItems);

            window[page_initials] = true;
            q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

            console.log(TEST_CONFIG);

            updateLayout();
            clickFunction();
            scrollFunction();
        } catch (error) {
            return false;
        }
    }

    init_TTP27();
    urlObserver();
})();
