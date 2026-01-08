/* 
    Ticket: https://trello.com/c/vAbXT6E6/4473-cart-display-logos-for-all-brands-dtm
    Test container: https://app.optimizely.com/v2/projects/30347390156/experiments/4653129170419712/variations
    Figma: https://www.figma.com/design/sDP3TPgMBmNNr4RZvdx4Kb/Dunlop-Sports-America?node-id=54-3&t=IPFQ1NtXJ3dwcTvX-1

*/

(function () {
    const TEST_CONFIG = {
        client: "ROI Revolution",
        project: "dunlopsports",
        site_url: "https://us.dunlopsports.com/",
        test_name: "Cart - Display Logos for All Brands [DTM]",
        page_initials: "AB-DISPLAY-LOGOS",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;


    const DATA = {
        brands: [
            {
                label: "dunlop",
                imgUrl: 'https://cdn.optimizely.com/img/30347390156/bdaf2fbedb4545e3971e15d242b346c0.png',
                link: "https://us.dunlopsports.com/dunlop",
            },
            {
                label: "srixon",
                imgUrl: 'https://cdn.optimizely.com/img/30347390156/7c8dd842b0ba48aaaa58b5c687fbed58.png',
                link: "https://us.dunlopsports.com/srixon",
            },
            {
                label: "cleveland",
                imgUrl: 'https://cdn.optimizely.com/img/30347390156/6cf448201947461f874fb83eb5235b93.png',
                link: "https://us.dunlopsports.com/cleveland-golf",
            },
            {
                label: "xxio",
                imgUrl: 'https://cdn.optimizely.com/img/30347390156/ebbbae6400e84d399124fa23027eecc6.png',
                link: "https://us.dunlopsports.com/xxio",
            },
            {
                label: "never-compromise",
                imgUrl: 'https://cdn.optimizely.com/img/30347390156/8289e7d3114149f59d5d3f1ee11ca461.png',
                link: "https://us.dunlopsports.com/never-compromise",
            },
            {
                label: "asics",
                imgUrl: 'https://cdn.optimizely.com/img/30347390156/1464cca5ca02401dbe034982aa37a391.png',
                link: "https://us.dunlopsports.com/asics",
            },
        ],
    };

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

    function updateLayout() {
        console.log("updateLayout...");
    }

    function mutationObserverFunction() {
        const targetNode = q("#cart-drawer");
        const debouncedUpdate = debounce(updateLayout, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    function createLayout() {
        //
    }

    function clickFunction() {
        //
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
        clickFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && true);
    }

    waitForElement(checkForItems, init);
})();
