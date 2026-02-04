/* 

Test container: https://marketer.monetate.net/control/a-880bc965/p/shopguideposts.org/experience/2084158#
Figma: https://www.figma.com/design/SGBjRGc41LwU6iILzzKaxj/GP---COLLECTION--Best-Sellers-In-Line-Ad?node-id=2003-61&t=ooYR9leugtefwF9n-0

Preview: 
control: https://marketer.monetate.net/control/preview/12053/FYMJPMGBQXVMJ1HRDKNX2WC6I3FFV985/90-collection-best-sellers-in-line-ad
v1: https://marketer.monetate.net/control/preview/12053/WY3YC3WKG164J7SJUE87W7HN3U2A44E3/90-collection-best-sellers-in-line-ad
v2: https://marketer.monetate.net/control/preview/12053/2GGPX5C38RGMG8RJEJQE4POBLUTYVPIP/90-collection-best-sellers-in-line-ad

Preview including all experiences: 
control: https://marketer.monetate.net/control/preview/12053/BN3W9LG2TYPQUTTQM953PU5YTSVU5SWQ/90-collection-best-sellers-in-line-ad
v1: https://marketer.monetate.net/control/preview/12053/FRTKXLIYNQJ0GXLI5RLLP0E6A6MQKE52/90-collection-best-sellers-in-line-ad
v2: https://marketer.monetate.net/control/preview/12053/O6HKTI89MMUX4BURM8VD0GVI9Q5O1DFR/90-collection-best-sellers-in-line-ad


*/

const TEST_ID = "GP90";
const VARIANT_ID = "V1"; /* control, V1, V2 */

function logInfo(message) {
    console.log(
        `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
        "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
        "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
        message,
    );
}

logInfo("fired");

(async () => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "Guide Posts",
        site_url: "https://guideposts.org/",
        test_name: "GP90: [Collection] Best Sellers In Line Ad (2) SET UP TEST",
        page_initials: "AB-GP90",
        test_variation: 2 /* 0, 1, 2 */,
        test_version: 0.0004,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    function fireGA4Event(eventName, eventLabel = "") {
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

    const CONFIG = {
        1: updateLayoutV1,
        2: updateLayoutV2,
    };

    const updateLayoutFunction = CONFIG[test_variation];

    function mutationObserverFunction() {
        const targetNode = q(".products");
        const debouncedUpdate = debounce(updateLayoutFunction, 150);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: false, attributes: true });
    }

    ASSETS = {
        poster_img_src: "https://sb.monetate.net/img/1/1544/5994771.png",
        poster_redirect_link: "https://guideposts.org/shop/category/best-sellers/",
    };

    const layout = /* HTMl */ `
            <li
                class="ast-grid-common-col ast-full-width ast-article-post astra-woo-hover-zoom desktop-align-left tablet-align-left mobile-align-left ast-width-md-12 ast-archive-post ast-separate-posts product type-product post-2002623 status-publish last instock product_cat-mysteries-of-cobble-hill-farm product_cat-new-releases product_cat-fiction-books has-post-thumbnail sale taxable shipping-taxable product-type-grouped"
            >
                <div class="ab-bestseller-ad widget_text widget category-ads-shortcode">
                    <div class="textwidget custom-html-widget">
                        <a href="${ASSETS["poster_redirect_link"]}" aria-label="inline-banner-gp">
                            <div class="wcpb-product-badges-loop-container" style="position: relative; max-width: 261.656px; margin: 0px auto;">
                                <img loading="lazy" src="${ASSETS["poster_img_src"]}" alt="" width="336" height="452" style="display: block;" />
                            </div>
                        </a>
                    </div>
                </div>
            </li>
        `;

    function updateLayoutV1() {
        if (q(".ab-bestseller-ad")) return;

        let targetNode = q(".products:not(.owl-carousel) .widget_text.widget.category-ads-shortcode");
        if (targetNode) {
            targetNode.classList.add(".ab-bestseller-ad");
            q(targetNode, "a").setAttribute("href", ASSETS["poster_redirect_link"]);
            q(targetNode, "img").setAttribute("src", ASSETS["poster_img_src"]);
            return;
        }

        targetNode = q(".products:not(.owl-carousel) > li:last-child");
        targetNode.insertAdjacentHTML("afterend", layout);
    }

    function updateLayoutV2() {
        if (q(".ab-bestseller-ad")) return;

        let targetNode = q(".products:not(.owl-carousel) > li:nth-child(10)") || q(".products:not(.owl-carousel) > li:last-child");
        targetNode.insertAdjacentHTML("afterend", layout);
    }

    function clickFunction() {
        q(".products:not(.owl-carousel)").addEventListener("click", (e) => {
            if (e.target.closest(".category-ads-shortcode a")) {
                e.preventDefault();

                const href = e.target.closest(".category-ads-shortcode a").getAttribute("href");

                if (href === "https://guideposts.org/shop/product/guideposts-magazine/") {
                    fireGA4Event("GP90_AdClick", "Get Inspired");
                } else if (href === ASSETS["poster_redirect_link"]) {
                    fireGA4Event("GP90_AdClick", "Shop Our Best Sellers");
                }

                setTimeout(() => {
                    if (e.ctrlKey || e.metaKey) {
                        window.open(href, "_blank");
                    } else {
                        window.location.href = href;
                    }
                }, 150);
            }
        });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        updateLayoutFunction();
        mutationObserverFunction();
        clickFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".products:not(.owl-carousel)") /* q(".products:not(.owl-carousel)  .widget_text.widget.category-ads-shortcode") */);
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
