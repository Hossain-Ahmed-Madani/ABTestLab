/* 

Ticket: https://trello.com/c/Ne9Tdh4p/5102-turf-box-pest-box-checkout-confirm-box-selection-on-entry-dtm
Figma: https://www.figma.com/design/rjarBzPTOU1O5vS6HSbkiY/DoMyOwn?node-id=1561-2&p=f&t=RBIbfqvyB57uSph9-0
Test container: https://app.convert.com/accounts/10019048/projects/10019379/experiences/100139236/summary

URL Targeting: 2 URLs:

1. https://www.domyown.com/subscriptions/pest-box-program/signup#/checkout/shipping/address
2. https://www.domyown.com/subscriptions/lawn-box-program/signup#/checkout/shipping/address

*/

(async () => {
    const TEST_CONFIG = {
        page_initials: "AB-CONFIRM-BOX-SELECTION",
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


    const TEST_START_LOCATIONS = ["/subscriptions/pest-box-program/signup#", "/subscriptions/lawn-box-program/signup#"];
    const LAYOUT_LOCATIONS = ["/subscriptions/pest-box-program/signup#/checkout/shipping/address", "/subscriptions/lawn-box-program/signup#/checkout/shipping/address"];

    const DATA = {
        "lawn-box": {
            title: "Lawn Box"}};


    function eventHandler() {
        console.log("===== EVENT HANDLER ====");
    }

    function removeEventHandler() {
        console.log("===== REMOVING EVENT HANDLER ====");
    }

    function checkForHeader() {
        return !!q("#new-customer h1");
    }

    async function createTurfBoxLayout() {
        await waitForElementAsync(checkForHeader);
        console.log("===== CREATING TURF BOX LAYOUT ====");
        const targetNode = q("#new-customer h1");
        targetNode.textContent = DATA["lawn-box"].title;
    }

    async function createPestBoxLayout() {
        await waitForElementAsync(checkForHeader);
        console.log("===== CREATING PEST BOX LAYOUT ====");
    }

    function createLayout() {
        const locationHref = window.location.href;

        if (locationHref.includes("/subscriptions/lawn-box-program/signup#/checkout/shipping/address")) {
            createTurfBoxLayout();
        } else if (locationHref.includes("/subscriptions/pest-box-program/signup#/checkout/shipping/address")) {
            createPestBoxLayout();
        }
    }

    function handleLocationChanges() {
        console.log("=====handleLocationChanges ====");

        const locationHref = window.location.href;

        if (!TEST_START_LOCATIONS.some((currentPathName) => locationHref.includes(currentPathName))) {
            console.log("===== NOT TARGET LOCATION  | REMOVING CLASS ====");
            removeTestInitials();
            removeEventHandler();
            return;
        }

        if (!window[page_initials] === true) {
            console.log("===== NOT INITIALIZED | ADDING TEST INITIALS ====");
            addTestInitials();
            eventHandler();
            return;
        }

        if(LAYOUT_LOCATIONS.some((currentPathName) => locationHref.includes(currentPathName))) {
            console.log("===== CREATING LAYOUT ====");
            createLayout();
            return;
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
            debouncedChanges();
        });

        window.addEventListener("pushstate", function () {
            debouncedChanges();
        });
    }

    function checkForItems() {
        const locationHref = window.location.href;
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            !window[page_initials] &&
            document.readyState === "complete" &&
            TEST_START_LOCATIONS.some((currentPathName) => locationHref.includes(currentPathName))
        );
    }

    function addTestInitials() {
        window[page_initials] = true;
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
    }

    function removeTestInitials() {
        window[page_initials] = false;
        q("body").classList.remove(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
    }

    waitForElementAsync(checkForItems).then(() => {
        console.log("===== TEST STARTED ====");
        addTestInitials();
        createLayout();
        eventHandler();
        urlObserver();
    });
})();
