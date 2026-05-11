const TEST_ID = "GP90";
const VARIANT_ID = "Control"; /* control, V1, V2 */

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
        test_variation: 0 /* 0, 1, 2 */,
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

    ASSETS = {
        poster_img_src: "https://sb.monetate.net/img/1/1544/5994771.png",
        poster_redirect_link: "https://guideposts.org/shop/category/best-sellers/",
    };

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

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

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".products:not(.owl-carousel) .widget_text.widget.category-ads-shortcode"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
