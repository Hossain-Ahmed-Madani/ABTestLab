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
        brands: {
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
        },
        menu_items: [
            // Level 1 - Srixon
            {
                title: "Srixon",
                link: "/srixon",
                sub_menu_items: [
                    {
                        title: "Balls",
                        link: "/srixon/balls",
                        sub_menu_items: [
                            { title: "Z-STAR Series", link: "/srixon/balls/z-star-series" },
                            { title: "Q-STAR Series", link: "/srixon/balls/q-star-series" },
                            { title: "SOFT FEEL Series", link: "/srixon/balls/soft-feel-series" },
                            { title: "Ball Selector", link: "/srixon/balls/ball-selector" },
                            { title: "Personalized Balls", link: "/srixon/balls/personalized-balls" },
                        ],
                    },
                    {
                        title: "Clubs",
                        link: "/srixon/clubs",
                        sub_menu_items: [
                            { title: "Irons", link: "/srixon/clubs/irons" },
                            { title: "Drivers", link: "/srixon/clubs/drivers" },
                            { title: "Fairway Woods", link: "/srixon/clubs/fairway-woods" },
                            { title: "Hybrids", link: "/srixon/clubs/hybrids" },
                            { title: "Explore", link: "/srixon/clubs/explore" },
                            { title: "Trade-In Program", link: "/srixon/clubs/trade-in-program" },
                        ],
                    },
                    {
                        title: "Gear",
                        link: "/srixon/gear",
                        sub_menu_items: [
                            { title: "Bags", link: "/srixon/gear/bags" },
                            { title: "Apparel", link: "/srixon/gear/apparel" },
                            { title: "Accessories", link: "/srixon/gear/accessories" },
                            { title: "Limited Edition", link: "/srixon/gear/limited-edition" },
                        ],
                    },
                    {
                        title: "Limited Edition",
                        link: "/srixon/limited-edition",
                        sub_menu_items: [
                            { title: "Blackout Collection", link: "/srixon/limited-edition/blackout-collection" },
                            { title: "Hawaii Floral Collection", link: "/srixon/limited-edition/hawaii-floral-collection" },
                            { title: "Summer Major Collection", link: "/srixon/limited-edition/summer-major-collection" },
                            { title: "All-American", link: "/srixon/limited-edition/all-american" },
                            { title: "Spring Collection", link: "/srixon/limited-edition/spring-collection" },
                        ],
                    },
                    {
                        title: "Fitting",
                        link: "/srixon/fitting",
                        sub_menu_items: [
                            { title: "Selector", link: "/srixon/fitting/selector" },
                            { title: "Events", link: "/srixon/fitting/events" },
                        ],
                    },
                    {
                        title: "Tour",
                        link: "/srixon/tour",
                        sub_menu_items: [
                            { title: "Tour Pros", link: "/srixon/tour/tour-pros" },
                            { title: "Ambassadors", link: "/srixon/tour/ambassadors" },
                            { title: "Video", link: "/srixon/tour/video" },
                            { title: "Pure Precision", link: "/srixon/tour/pure-precision" },
                            { title: "Team Srixon Celebration", link: "/srixon/tour/team-srixon-celebration" },
                        ],
                    },
                ],
            },
            // Level 1 - Cleveland Golf
            {
                title: "Cleveland Golf",
                link: "/cleveland-golf",
                sub_menu_items: [
                    {
                        title: "Clubs",
                        link: "/cleveland-golf/clubs",
                        sub_menu_items: [
                            { title: "Wedges", link: "/cleveland-golf/clubs/wedges" },
                            { title: "Putters", link: "/cleveland-golf/clubs/putters" },
                            { title: "Club Sets", link: "/cleveland-golf/clubs/club-sets" },
                            { title: "Trade-In Program", link: "/cleveland-golf/clubs/trade-in-program" },
                        ],
                    },
                    {
                        title: "Gear",
                        link: "/cleveland-golf/gear",
                        sub_menu_items: [
                            { title: "Bags", link: "/cleveland-golf/gear/bags" },
                            { title: "Apparel", link: "/cleveland-golf/gear/apparel" },
                            { title: "Accessories", link: "/cleveland-golf/gear/accessories" },
                            { title: "Limited Edition", link: "/cleveland-golf/gear/limited-edition" },
                        ],
                    },
                    {
                        title: "Fitting",
                        link: "/cleveland-golf/fitting",
                        sub_menu_items: [
                            { title: "Selector", link: "/cleveland-golf/fitting/selector" },
                            { title: "Events", link: "/cleveland-golf/fitting/events" },
                        ],
                    },
                    {
                        title: "Video",
                        link: "/cleveland-golf/video",
                        sub_menu_items: [
                            { title: "Quiet Confidence", link: "/cleveland-golf/video/quiet-confidence" },
                            { title: "Roger Coming Home", link: "/cleveland-golf/video/roger-coming-home" },
                        ],
                    },
                    {
                        title: "Sale",
                        link: "/cleveland-golf/sale",
                        sub_menu_items: [
                            { title: "Wedges", link: "/cleveland-golf/sale/wedges" },
                            { title: "Putters", link: "/cleveland-golf/sale/putters" },
                        ],
                    },
                ],
            },
            // Level 1 - XXIO
            {
                title: "XXIO",
                link: "/xxio",
                sub_menu_items: [
                    {
                        title: "Clubs",
                        link: "/xxio/clubs",
                        sub_menu_items: [
                            { title: "Drivers", link: "/xxio/clubs/drivers" },
                            { title: "Fairway Woods", link: "/xxio/clubs/fairway-woods" },
                            { title: "Hybrids", link: "/xxio/clubs/hybrids" },
                            { title: "Irons", link: "/xxio/clubs/irons" },
                            { title: "Club Sets", link: "/xxio/clubs/club-sets" },
                            { title: "Trade-In Program", link: "https://us.dunlopsports.com/xxio/xxio-trade-in-program.html" },
                        ],
                    },
                    {
                        title: "Balls",
                        link: "/xxio/balls",
                        sub_menu_items: [
                            { title: "XXIO HYPER RD", link: "/xxio/balls/xxio-hyper-rd" },
                            { title: "XXIO Rebound Drive II", link: "/xxio/balls/xxio-rebound-drive-ii" },
                        ],
                    },
                    {
                        title: "Gear",
                        link: "/xxio/gear",
                        sub_menu_items: [
                            { title: "Bags", link: "/xxio/gear/bags" },
                            { title: "Apparel", link: "/xxio/gear/apparel" },
                            { title: "Accessories", link: "/xxio/gear/accessories" },
                        ],
                    },
                    {
                        title: "Fitting",
                        link: "/xxio/fitting",
                        sub_menu_items: [
                            { title: "Selector", link: "/xxio/fitting/selector" },
                            { title: "Events", link: "/xxio/fitting/events" },
                        ],
                    },
                    {
                        title: "Video",
                        link: "/xxio/video",
                        sub_menu_items: [{ title: "Time Well Spent", link: "/xxio/video/time-well-spent" }],
                    },
                    {
                        title: "Sale",
                        link: "/xxio/sale",
                        sub_menu_items: [
                            { title: "Drivers", link: "/xxio/sale/drivers" },
                            { title: "Fairway Woods", link: "/xxio/sale/fairway-woods" },
                            { title: "Hybrids", link: "/xxio/sale/hybrids" },
                            { title: "Irons", link: "/xxio/sale/irons" },
                            { title: "Balls", link: "/xxio/sale/balls" },
                        ],
                    },
                ],
            },
            // Level 1 - Never Compromise
            {
                title: "Never Compromise",
                link: "/never-compromise",
                sub_menu_items: [
                    {
                        title: "Putters",
                        link: "/never-compromise/putters",
                    },
                    {
                        title: "Gear",
                        link: "/never-compromise/gear",
                    },
                    {
                        title: "Fitting",
                        link: "/never-compromise/fitting",
                        sub_menu_items: [
                            { title: "Fitting", link: "/never-compromise/fitting/fitting" },
                            { title: "Events", link: "/never-compromise/fitting/events" },
                        ],
                    },
                ],
            },
            // Level 1 - Dunlop
            {
                title: "Dunlop",
                link: "/dunlop",
                sub_menu_items: [
                    {
                        title: "Tennis",
                        link: "/dunlop/tennis",
                        sub_menu_items: [
                            { title: "Rackets", link: "/dunlop/tennis/rackets" },
                            { title: "Balls", link: "/dunlop/tennis/balls" },
                            { title: "Strings", link: "/dunlop/tennis/strings" },
                            { title: "Grips", link: "/dunlop/tennis/grips" },
                            { title: "Bags", link: "/dunlop/tennis/bags" },
                            { title: "Accessories", link: "/dunlop/tennis/accessories" },
                            { title: "ATP Collection", link: "/dunlop/tennis/atp-collection" },
                        ],
                    },
                    {
                        title: "Squash",
                        link: "/dunlop/squash",
                        sub_menu_items: [
                            { title: "Rackets", link: "/dunlop/squash/rackets" },
                            { title: "Balls", link: "/dunlop/squash/balls" },
                            { title: "Strings", link: "/dunlop/squash/strings" },
                            { title: "Accessories", link: "/dunlop/squash/accessories" },
                            { title: "Junior Rackets", link: "/dunlop/squash/junior-rackets" },
                        ],
                    },
                    {
                        title: "Padel",
                        link: "/dunlop/padel",
                        sub_menu_items: [
                            { title: "Bats", link: "/dunlop/padel/bats" },
                            { title: "Balls", link: "/dunlop/padel/balls" },
                            { title: "Bags", link: "/dunlop/padel/bags" },
                            { title: "Accessories", link: "/dunlop/padel/accessories" },
                        ],
                    },
                    {
                        title: "Badminton",
                        link: "/dunlop/badminton",
                        sub_menu_items: [
                            { title: "Rackets", link: "/dunlop/badminton/rackets" },
                            { title: "Bags", link: "/dunlop/badminton/bags" },
                        ],
                    },
                    {
                        title: "Apparel",
                        link: "/dunlop/apparel",
                        sub_menu_items: [
                            { title: "Men's Apparel", link: "/dunlop/apparel/mens-apparel" },
                            { title: "Women's Apparel", link: "/dunlop/apparel/womens-apparel" },
                        ],
                    },
                    {
                        title: "Equipment",
                        link: "/dunlop/equipment",
                        sub_menu_items: [
                            { title: "Coaching Equipment", link: "/dunlop/equipment/coaching-equipment" },
                            { title: "Machines", link: "/dunlop/equipment/machines" },
                        ],
                    },
                ],
            },
            // Level 1 - Asics
            {
                title: "Asics",
                link: "/asics",
                sub_menu_items: [
                    {
                        title: "Men's Golf Shoes",
                        link: "/asics/mens-golf-shoes",
                        sub_menu_items: [
                            { title: "ASICS JAPAN S GOLF", link: "/asics/mens-golf-shoes/asics-japan-s-golf" },
                            { title: "ASICS GEL-PRESHOT", link: "/asics/mens-golf-shoes/asics-gel-preshot" },
                            { title: "ASICS GEL-ACE PRO M STANDARD", link: "/asics/mens-golf-shoes/asics-gel-ace-pro-m-standard" },
                            { title: "ASICS GEL-COURSE DUO BOA", link: "/asics/mens-golf-shoes/asics-gel-course-duo-boa" },
                            { title: "ASICS GEL-COURSE GLIDE", link: "/asics/mens-golf-shoes/asics-gel-course-glide" },
                        ],
                    },
                    {
                        title: "Women's Golf Shoes",
                        link: "/asics/womens-golf-shoes",
                        sub_menu_items: [
                            { title: "ASICS WOMEN'S JAPAN S GOLF", link: "/asics/womens-golf-shoes/asics-womens-japan-s-golf" },
                            { title: "ASICS WOMEN'S GEL KAYANO ACE 2", link: "/asics/womens-golf-shoes/asics-womens-gel-kayano-ace-2" },
                            { title: "ASICS WOMEN'S GEL-COURSE GLIDE", link: "/asics/womens-golf-shoes/asics-womens-gel-course-glide" },
                        ],
                    },
                    {
                        title: "Limited Edition Golf Shoes",
                        link: "/asics/limited-edition-golf-shoes",
                        sub_menu_items: [{ title: "ASICS GEL-KAYANO ACE 2 LIMITED EDITION", link: "/asics/limited-edition-golf-shoes/asics-gel-kayano-ace-2-limited-edition" }],
                    },
                    {
                        title: "Fitting",
                        link: "/asics/fitting",
                        sub_menu_items: [
                            { title: "Selector", link: "/asics/fitting/selector" },
                            { title: "Events", link: "/asics/fitting/events" },
                        ],
                    },
                    {
                        title: "Sale",
                        link: "/asics/sale",
                        sub_menu_items: [
                            { title: "ASICS Gel Ace Pro M Standard", link: "/asics/sale/asics-gel-ace-pro-m-standard" },
                            { title: "ASICS GEL-PRESHOT", link: "/asics/sale/asics-gel-preshot" },
                            { title: "ASICS GEL-COURSE GLIDE", link: "/asics/sale/asics-gel-course-glide" },
                            { title: "ASICS GEL-KAYANO ACE 2", link: "/asics/sale/asics-gel-kayano-ace-2" },
                            { title: "ASICS GEL-COURSE DUO BOA", link: "/asics/sale/asics-gel-course-duo-boa" },
                            { title: "ASICS WOMEN'S GEL-COURSE ACE", link: "/asics/sale/asics-womens-gel-course-ace" },
                        ],
                    },
                ],
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

    function mutationObserverFunction() {
        const targetNode = q("#cart-drawer");
        const debouncedUpdate = debounce(updateSideCartLayout, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    function getNavLayout(menu_items = DATA.menu_items, parent_title = "", level = 1) {

        console.log("getNavLayout: recursive call", menu_items, parent_title, level);
        
        return /* HTML */ `
            <div class="ab-nav-menu-container ab-nav-menu-container-level-${level}">
                ${level === 1
                    ? /* HTML */ ` 
                    <div class="ab-nav-menu-top" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e0e0e0;">
                        <div class="ab-nav-top-logo">LOGO</div>
                        <div class="ab-nav-close-cta">X</div>
                    </div>`
                    : /* HTML */ ` 
                    <div class="ab-nav-menu-header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e0e0e0;">
                        <div><button class="ab-nav-menu-back-cta">< ${parent_title}</a></div>
                        <div class="ab-nav-close-cta">X</div>
                    </div>`
                }

                <ul class="ab-nav-menu-list">
                    ${menu_items
                        .map(
                            ({ title, link , sub_menu_items = []}) => /* HTML  */ `
                            <li class="ab-nav-menu-item">
                                <a href="${link}" class="ab-nav-menu-item-link">${title}</a>
                                ${sub_menu_items && sub_menu_items.length> 0 ? getNavLayout(sub_menu_items, title, level + 1) : ""}
                            </li>
                        `,
                        )
                        .join("")}
                </ul>
            </div>
        `;
    }

    function createLayout() {
        const targetNode = q(".main-menu.navbar-toggleable-sm .container-fluid");

        targetNode.insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-nav-container container-fluid">
                    <div class="ab-nav-menu-container">${getNavLayout()}</div>
                </div>
            `,
        );
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
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".main-menu.navbar-toggleable-sm .container-fluid"));
    }

    waitForElement(checkForItems, init);
})();
