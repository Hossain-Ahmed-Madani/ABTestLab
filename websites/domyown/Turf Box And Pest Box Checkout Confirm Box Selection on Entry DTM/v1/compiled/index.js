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

    const TEST_START_LOCATIONS = ["/subscriptions/pest-box-program/signup#", "/subscriptions/lawn-box-program/signup#"];
    const LAYOUT_LOCATIONS = ["/subscriptions/pest-box-program/signup#/checkout/shipping/address", "/subscriptions/lawn-box-program/signup#/checkout/shipping/address"];

    const DATA = {
        "turf-box": {
            title: "New to Turf Box?",
            product: "",
            program: "",
        },
        "pest-box": {
            title: "New to Pest Box?",
            product: "",
            program: "",
        },
    };

    // Functions to get, set, and remove session storage values
    function getStorageValue(key) {
        try {
            return JSON.parse(window.sessionStorage.getItem(key));
        } catch (e) {
            console.warn("Unable to get window.sessionStorage value:", e);
            return null;
        }
    }

    function setSessionStorageValue(key, value) {
        try {
            window.sessionStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn("Unable to set window.sessionStorage value:", e);
        }
    }

    function handleBodyClick(e) {
        console.log("====== BODY CLICK DETECTED ======");

        const pestBoxProgramButton = e.target.closest("#offers span.uppercase[role='button']");
        if (window.location.href.includes(TEST_START_LOCATIONS[0]) && pestBoxProgramButton) {
            const title = q(pestBoxProgramButton.parentNode.parentNode, ".md\\:h-24 p.text-base.font-bold").textContent.trim();
            console.log("PEST BOX PROGRAM: ", title);
            DATA["pest-box"].program = title;
        }

        const pestBoxProductDoNotAddButton = e.target.closest("#addons button:not(#continue)");
        if (window.location.href.includes(TEST_START_LOCATIONS[0]) && pestBoxProductDoNotAddButton) {
            console.log("PEST BOX PRODUCT DO NOT ADD: ");
            DATA["pest-box"].product = "";
        }

        setSessionStorageValue(page_initials, DATA);
    }

    async function addPestProductCardEventListener() {
        await waitForElementAsync(() => !!q('div[role="radiogroup"] div.border-2.block.cursor-pointer'));

        qq('div[role="radiogroup"] div.border-2.block.cursor-pointer').forEach((item) => {
            console.log(item);
            item.addEventListener("click", (e) => {
                console.log(e.target);
                const title = q(e.currentTarget, "p.no-underline.text-sm.font-bold.text-blue").textContent.trim();
                console.log("PEST BOX PRODUCT CARD: ", title);
                DATA["pest-box"].product = title;
                setSessionStorageValue(page_initials, DATA);
            });
        });
    }

    function addEventListener() {
        console.log("===== ADD EVENT HANDLER ====");
        q("body").addEventListener("click", handleBodyClick);
    }

    function removeEventListener() {
        console.log("===== REMOVING EVENT HANDLER ====");
        q("body").removeEventListener("click", handleBodyClick);
    }

    async function createLayout() {
        const locationHref = window.location.href;

        let matchedData;

        const storageData = getStorageValue(page_initials);
        console.log("STORAGE DATA: ", storageData);

        if (locationHref.includes(LAYOUT_LOCATIONS[0])) {
            matchedData = storageData["pest-box"];
        } else if (locationHref.includes(LAYOUT_LOCATIONS[1])) {
            matchedData = storageData["turf-box"];
        }

        if (!matchedData) return;

        await waitForElementAsync(() => !!(q("#new-customer h1:not(.ab-header)") && !q(".ab-selection")));
        console.log("===== CREATING PEST BOX LAYOUT ====");
        const targetNode = q("#new-customer h1:not(.ab-header)");
        targetNode.textContent = matchedData.title;
        targetNode.classList.add("ab-header");

        const dynamicTxt = matchedData.product && matchedData.program ? `${matchedData.program} & ${matchedData.product}` : matchedData.program || matchedData.product;

        targetNode.insertAdjacentHTML("afterend", `<p class="ab-selection"> Create and account to get your <strong>${dynamicTxt}</strong> Box started </p>`);
    }

    function handleLocationChanges() {
        console.log("=====handleLocationChanges ====");

        const locationHref = window.location.href;

        if (!TEST_START_LOCATIONS.some((pathName) => locationHref.includes(pathName))) {
            console.log("===== NOT TARGET LOCATION  | REMOVING CLASS ====");
            removeTestInitials();
            removeEventListener();
            return;
        }

        if (!window[page_initials] === true && TEST_START_LOCATIONS.some((pathName) => locationHref.includes(pathName))) {
            console.log("===== NOT INITIALIZED | ADDING TEST INITIALS ====");
            addTestInitials();
            addEventListener();
            return;
        }

        if (LAYOUT_LOCATIONS.some((pathName) => locationHref.includes(pathName))) {
            console.log("===== CREATING LAYOUT ====");
            createLayout();
            return;
        }

        if (locationHref.includes(TEST_START_LOCATIONS[0]) && locationHref.includes("addons")) {
            console.log("===== ADDING PEST PRODUCT CARD EVENT LISTENER ====");
            addPestProductCardEventListener();
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
        addEventListener();
        urlObserver();
        if (!getStorageValue(page_initials)) setSessionStorageValue(page_initials, DATA);
   
    });

    // Use try catch after test is ready
})();
