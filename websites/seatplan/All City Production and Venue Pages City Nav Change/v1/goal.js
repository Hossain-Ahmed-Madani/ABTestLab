// Select city nav item | needs js to trigger
(async function () {
    console.log("Global JS: All | City, Production and Venue Pages | City Nav Changem v:0.0001");

    async function waitForElementAsync(predicate, timeout = 10000, frequency = 150) {
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

    const selector = ".city-nav__item, .city-nav__item button, .city-nav__city";

    function clickEvent(e) {
        console.log("=== Select city nav item Clicked ===");
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "1004109462"]);
        const nodes = qq(selector);
        console.log("total nodes: ", nodes.length);
        nodes.forEach((item) => item.removeEventListener("click", clickEvent));
    }

    function getCityFromDataLayer() {
        const pageViewEvent = window?.dataLayer?.find((item) => item?.eventName === "page_view" && item?.eventPayload?.content_city);
        return pageViewEvent?.eventPayload?.content_city.toLowerCase().replace(" ", "-") || null;
    }

    try {
        await waitForElementAsync(
            () =>
                !!(
                    document.readyState === "complete" &&
                    window?.dataLayer?.some((item) => item?.eventName === "page_view" && item?.eventPayload?.content_city) &&
                    getCityFromDataLayer() &&
                    qq(selector)?.length > 0
                )
        );

        const nodes = qq(selector);
        console.log("total nodes: ", nodes.length);
        nodes.forEach((item) => item.addEventListener("click", clickEvent));
    } catch (error) {
        return false;
    }
})();

// Select city sub nav item | can be created with basic selector
// .ab-sub-nav__link, .ab-sub-nav__link *

// View city homepage or category page
// ^https?:\/\/(?:www\.)?seatplan\.com\/(london|new\-york)(?:\/|\/whats-on(?:\/.*)?)$
