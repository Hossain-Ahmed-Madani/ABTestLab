(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Dunlop Sports",
        site_url: "https://us.dunlopsports.com/",
        test_name: "Navigation - Show Tier 2 Brand Nav By Default [M]",
        page_initials: "AB-NAV-TIER-2-BRAND-M",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        "srixon-logo-svg": /* HTML */ `
            <svg id="srixon-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1560.1 253.41">
                <title>Srixon</title>
                <path
                    d="M221.53,126.66L3.82,0,74.13,57.86c-97.96,3.44-99.69,130.2-.04,137.65L3.82,253.41,221.53,126.66m-205.2-.02c0-35.56,28.83-64.38,64.39-64.38s64.38,28.82,64.38,64.38-28.83,64.37-64.38,64.37S16.33,162.2,16.33,126.64Z"
                ></path>
            </svg>
        `,
        "cleveland-golf-logo-svg": /* HTML */ `
            <svg id="cleveland-golf-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1560.1 253.41">
                <title>Cleveland Golf</title>
                <path
                    d="M221.53,126.66L3.82,0,74.13,57.86c-97.96,3.44-99.69,130.2-.04,137.65L3.82,253.41,221.53,126.66m-205.2-.02c0-35.56,28.83-64.38,64.39-64.38s64.38,28.82,64.38,64.38-28.83,64.37-64.38,64.37S16.33,162.2,16.33,126.64Z"
                ></path>
            </svg>
        `,
        "xxio-logo-svg": /* HTML */ `
            <svg id="xxio-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1560.1 253.41">
                <title>XXIO</title>
                <path
                    d="M221.53,126.66L3.82,0,74.13,57.86c-97.96,3.44-99.69,130.2-.04,137.65L3.82,253.41,221.53,126.66m-205.2-.02c0-35.56,28.83-64.38,64.39-64.38s64.38,28.82,64.38,64.38-28.83,64.37-64.38,64.37S16.33,162.2,16.33,126.64Z"
                ></path>
            </svg>
        `,
        "never-compromise-logo-svg": /* HTML */ `
            <svg id="never-compromise-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1560.1 253.41">
                <title>Never Compromise</title>
                <path
                    d="M221.53,126.66L3.82,0,74.13,57.86c-97.96,3.44-99.69,130.2-.04,137.65L3.82,253.41,221.53,126.66m-205.2-.02c0-35.56,28.83-64.38,64.39-64.38s64.38,28.82,64.38,64.38-28.83,64.37-64.38,64.37S16.33,162.2,16.33,126.64Z"
                ></path>
            </svg>
        `,
        "dunlop-logo-svg": /* HTML */ `
            <svg id="dunlop-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1560.1 253.41">
                <title>Dunlop</title>
                <path
                    d="M221.53,126.66L3.82,0,74.13,57.86c-97.96,3.44-99.69,130.2-.04,137.65L3.82,253.41,221.53,126.66m-205.2-.02c0-35.56,28.83-64.38,64.39-64.38s64.38,28.82,64.38,64.38-28.83,64.37-64.38,64.37S16.33,162.2,16.33,126.64Z"
                ></path>
            </svg>
        `,
        "asics-logo-svg": /* HTML */ `
            <svg id="asics-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1560.1 253.41">
                <title>Asics</title>
                <path
                    d="M221.53,126.66L3.82,0,74.13,57.86c-97.96,3.44-99.69,130.2-.04,137.65L3.82,253.41,221.53,126.66m-205.2-.02c0-35.56,28.83-64.38,64.39-64.38s64.38,28.82,64.38,64.38-28.83,64.37-64.38,64.37S16.33,162.2,16.33,126.64Z"
                ></path>
            </svg>
        `,
    };

    const DATA = {
        srixon: {
            title: "Srixon",
            link: "/srixon",
            logo: ASSETS["srixon-logo-svg"],
        },
        clevelandgolf: {
            title: "Cleveland Golf",
            link: "/cleveland-golf",
            logo: ASSETS["cleveland-golf-logo-svg"],
        },
        xxio: {
            title: "XXIO",
            link: "/xxio",
            logo: ASSETS["xxio-logo-svg"],
        },
        nevercompromise: {
            title: "Never Compromise",
            link: "/never-compromise",
            logo: ASSETS["never-compromise-logo-svg"],
        },
        dunlop: {
            title: "Dunlop",
            link: "/dunlop",
            logo: ASSETS["dunlop-logo-svg"],
        },
        asics: {
            title: "Asics",
            link: "/asics",
            logo: ASSETS["asics-logo-svg"],
        },
    };

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

    function createLayout() {
        const targetNode = q(".main-menu.navbar-toggleable-sm .container-fluid");
        targetNode.classList.add(`ab-container-fluid-control`);
        targetNode.insertAdjacentHTML("afterend", /* HTML */ `<div class="container-fluid ab-container-fluid-duplicated">${targetNode.innerHTML}</div>`);

        // Level 2
        qq(".ab-container-fluid-duplicated .menu-group > ul.nav > li.nav-item > .dropdown-menu").forEach((dropdownMenu) => {
            const parentUl = dropdownMenu.parentElement;
            const linkItem = q(parentUl, ":scope > a.nav-link");
            const id = linkItem.id;
            console.log("id", id);
            const link = DATA[id].link;
            const title = DATA[id].title;

            dropdownMenu.insertAdjacentHTML(
                "afterbegin",
                /* HTML */ `
                    <li class="nav-menu">
                        <div class="close-menu clearfix d-md-none">
                            <div class="back pull-left">
                                <button role="button" aria-label="Back to previous menu">
                                    <span class="caret-left"></span>
                                    <span class="menu-heading">${title}</span>
                                </button>
                            </div>
                            <div class="close-button">
                                <button role="button" class="close" aria-label="Close Menu">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                        </div>
                    </li>
                    <li class="dropdown-item top-category" role="button">
                        <a href="${link}" id="${link}" name="${title}" class="nav-link more-link" role="button" aria-haspopup="false" aria-label="${title}" tabindex="0">
                            <div data-name="${title}">Shop All</div>
                        </a>
                    </li>
                `,
            );
        });

        // Level 3
        qq(".menu-group > ul.nav > li.nav-item > .dropdown-menu > .column.d-flex > ul.row.mr-0.ml-0 > li.dropdown-item > .dropdown-menu").forEach((dropdownItem) => {
            const parentUl = dropdownItem.parentElement;
            const linkItem = q(parentUl, ":scope > a.dropdown-link.more-link");
            const id = linkItem.id;
            const link = linkItem.href;
            const title = linkItem.getAttribute("aria-label");

            dropdownItem.insertAdjacentHTML(
                "afterbegin",
                /* HTML */ `
                    <li class="nav-menu">
                        <div class="close-menu clearfix d-md-none">
                            <div class="back pull-left">
                                <button role="button" aria-label="Back to previous menu">
                                    <span class="caret-left"></span>
                                    <span class="menu-heading">${title}</span>
                                </button>
                            </div>
                            <div class="close-button pull-right">
                                <button role="button" class="close" aria-label="Close Menu">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                        </div>
                    </li>
                    <li class="dropdown-item top-category" role="button" >
                        <a href="${link}" id="${link}" name="${title}" class="dropdown-link more-link p-0" role="button" aria-haspopup="false" aria-label="${title}" tabindex="0">
                            <div class="category-name" data-name="Balls">Shop All</div>
                        </a>
                    </li>
                `,
            );
        });
    }

    function clickFunction() {
        q(".ab-container-fluid-duplicated")?.addEventListener(
            "click",
            (e) => {
                console.log("===== clicked =====");
                e.preventDefault();

                const closeElement = e.target.closest(".close-menu .close, button.close, button.close span");
                if (closeElement) {
                    console.log("closeElement", closeElement);
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    q(".ab-container-fluid-control .close-menu .close").click();
                }

                const subMenuLinkL1 = e.target.closest(".menu-group > ul.nav > li.nav-item > a.nav-link");
                if (subMenuLinkL1) {
                    const ul = subMenuLinkL1.parentElement;
                    const dropdownMenu = q(ul, ":scope > .dropdown-menu");
                    ul.classList.add("show");
                    subMenuLinkL1.setAttribute("aria-expanded", "true");
                    subMenuLinkL1.setAttribute("aria-hidden", "true");
                    dropdownMenu.setAttribute("aria-hidden", "false");
                }

                const dropdownLevel2BackToParentLi = e.target.closest(".menu-group > ul.nav > li.nav-item > .dropdown-menu > li.nav-menu");
                if (
                    dropdownLevel2BackToParentLi &&
                    e.target.closest(".menu-group > ul.nav > li.nav-item > .dropdown-menu > li.nav-menu > .close-menu .back.pull-left") &&
                    !closeElement
                ) {
                    dropdownLevel2BackToParentLi.parentElement.parentElement.classList.remove("show");
                    dropdownLevel2BackToParentLi.parentElement.previousElementSibling.setAttribute("aria-expanded", "false");
                    dropdownLevel2BackToParentLi.parentElement.previousElementSibling.setAttribute("aria-hidden", "false");
                    dropdownLevel2BackToParentLi.parentElement.setAttribute("aria-hidden", "true");
                }

                const dropdownLevel2ShopAllLi = e.target.closest(".menu-group > ul.nav > li.nav-item > .dropdown-menu > li.dropdown-item.top-category");
                if (dropdownLevel2ShopAllLi && q(dropdownLevel2ShopAllLi, ":scope > a.nav-link")) {
                    const href = q(dropdownLevel2ShopAllLi, ":scope > a.nav-link").href;
                    window.location.href = href;
                }

                const subMenuLinkL2 = e.target.closest(".menu-group > ul.nav > li.nav-item > .dropdown-menu > .column > ul[role='menu'] > li.dropdown-item > a.dropdown-link");
                if (subMenuLinkL2 && !q(subMenuLinkL2.parentElement, ":scope > .dropdown-menu")) {
                    const href = subMenuLinkL2.href;
                    window.location.href = href;
                }

                if (subMenuLinkL2 && q(subMenuLinkL2.parentElement, ":scope > .dropdown-menu")) {
                    const subMenuParent2 = subMenuLinkL2.parentElement;
                    subMenuParent2.classList.add("show");
                    subMenuLinkL2.setAttribute("aria-expanded", "true");
                    qq(subMenuParent2, ":scope > .dropdown-menu").forEach((dropdownMenu) => {
                        dropdownMenu.setAttribute("aria-hidden", "false");
                    });
                }
            },
            false,
        );
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
        clickFunction();
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q(".main-menu.navbar-toggleable-sm .container-fluid") &&
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
