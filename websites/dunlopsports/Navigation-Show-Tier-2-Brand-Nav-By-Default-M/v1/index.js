(() => {
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
            <svg id="dunlop-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1560.1 253.41">
                <title>Dunlop</title>
                <path
                    d="M221.53,126.66L3.82,0,74.13,57.86c-97.96,3.44-99.69,130.2-.04,137.65L3.82,253.41,221.53,126.66m-205.2-.02c0-35.56,28.83-64.38,64.39-64.38s64.38,28.82,64.38,64.38-28.83,64.37-64.38,64.37S16.33,162.2,16.33,126.64Z"
                ></path>
                <path
                    d="M30.99,140.25l-5.17,11.34H104.63c16.16,.14,26.97-11.87,28.35-26.65,1.27-13.75-11.2-23.38-23.39-23.25H45.81l-5.75,12.48h11.85l-12.02,26.08h-8.9m53.88-26.65h8.99c7.69-.3,5.31,11.15,5.39,10.21-.5,5.96-5.25,16.38-15.32,15.93l-10.97-.07,11.91-26.06Z"
                ></path>
                <path
                    d="M1544.68,62.05h-174.57l-11.95,25.64h27.21l-35.22,77.34h-27.23l-11.8,25.7h118.63l11.79-25.75h-24.52l12.36-26.88h78.58c10.63,0,25.52-2.98,33.59-16.16,12.61-20.57,32.89-59.9,3.12-59.9m-58.82,34.38c-2.03,7.1-3.45,17.75-17.44,17.86h-28.12l12.16-26.63h28.72c7.22-.02,5.52,5.79,4.68,8.77Z"
                ></path>
                <polyline
                    points="912.51 87.61 933.04 87.61 944.8 62.05 867.73 62.05 855.42 87.61 877.36 87.61 854.78 137.09 814.99 62.05 737.76 62.05 725.69 87.73 748.99 87.73 713.51 165.01 690.14 165.01 678.47 190.74 759.33 190.74 771.06 165.13 749 165.13 771.96 113.87 813.32 190.74 865.17 190.74 912.51 87.61"
                ></polyline>
                <path
                    d="M474.59,113.16c8.08-17.01,14.03-51.11-20.05-51.11h-156.41l-11.99,25.68h24.32l-35.41,77.21h-24.34l-11.91,25.79h154.16c57.83,0,73.56-60.56,81.64-77.57m-100.77,51.78h-30.42l35.28-77.1h21.78c17.01-.9,12.2,11.85,8.23,26.31-3.97,14.46-19.84,50.47-34.87,50.79Z"
                ></path>
                <path
                    d="M553.74,192.14c-.98-.05,16.16,.15,35.79-1.2,25.24-1.74,47.99-7.95,59.92-31l33.93-71.96h22.12l11.98-25.92h-76.88l-11.73,25.67h21.93l-26.15,58.18c-8.72,15.73-13.4,18.28-35.08,17.86-21.69-.43-21.05-10.21-16.8-21.27l24.88-54.77h21.27l11.81-25.67h-113.69l-12,25.67h24.15s-28.47,62.01-28.91,63.28c-15.32,44.2,33.24,40.2,53.46,41.13"
                ></path>
                <polyline
                    points="946.45 165.03 922.75 165.03 911.08 190.73 1083.03 190.73 1112.42 126.67 1087.56 126.68 1054.57 165.03 1016.36 165.03 1051.28 87.71 1073.22 87.71 1085 62.05 969.19 62.05 957.29 87.59 981.77 87.59 946.45 165.03"
                ></polyline>
                <path
                    d="M1137.54,189.13c5.95,1.98,47.73,7.44,97.06,4.68,70.94-.44,89.01-64.01,99.29-92.15,6.78-18.52,6.75-37.38-33.93-41.63-38.76-3.21-82.68-1.18-85.79-.94-18.5,1.48-40.85,3.85-61.63,22.26-5.78,5.18-18.4,21.71-33.32,62.28-13.89,37.76,15.58,44.61,18.32,45.51m51.92-49.4c5.65-15.12,19.23-41.88,22.92-46.7,7.37-10.21,17.01-10.78,39.69-9.08,8.63,1.9,19.72,7.32,7.65,32.89-10.59,22.43-17.36,43.46-29.48,47.65-9.24,3.2-18.81,3.71-32.29,2.08-10.55-1.28-15.78-7.31-8.49-26.84Z"
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
        brand_items: {
            srixon: {
                title: "Srixon",
                link: "/srixon",
                logo: ASSETS["srixon-logo-svg"],
            },
            "cleveland-golf": {
                title: "Cleveland Golf",
                link: "/cleveland-golf",
                logo: ASSETS["cleveland-golf-logo-svg"],
            },
            xxio: {
                title: "XXIO",
                link: "/xxio",
                logo: ASSETS["xxio-logo-svg"],
            },
            "never-compromise": {
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

    function isSafari() {
        const userAgent = navigator.userAgent;
        return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    function getLevel2BrandLayout() {
        return /* HTML */ `
            <div class="ab-nav-brand-list-wrapper">
                <h4 class="ab-nav-brand-list-header">Also Shop</h4>
                <ul class="ab-nav-brand-list">
                    ${Object.values(DATA.brand_items)
                        .map(
                            ({ title, link }) => /* HTML  */ `
                            <li class="ab-nav-brand-item">
                                <a href="${link}" class="ab-nav-brand-item-link">${title}</a>
                            </li>
                        `,
                        )
                        .join("")}
                </ul>
            </div>
        `;
    }

    const level2BrandLayout = getLevel2BrandLayout();

    function getNavLayout(menu_items = DATA.menu_items, parent_title = "", parent_link = "", level = 1) {
        console.log("getNavLayout: recursive call", menu_items, parent_title, level);

        return /* HTML */ `
            <div class="ab-nav-menu-container ab-nav-menu-container-level-${level} ${level === 2 && parent_title === "Srixon" ? "ab-nav-menu-container--show" : ""}">
                ${level === 1
                    ? ` 
                    <div class="ab-nav-menu-top">
                        <div class="ab-nav-top-logo">${ASSETS["dunlop-logo-svg"]}</div>
                        <div class="ab-nav-close-cta">×</div>
                    </div>`
                    : ` 
                    <div class="ab-nav-menu-header">
                        <button class="ab-nav-menu-back-cta">
                            <span class="ab-nav-menu-back-cta__icon"><span class="ab-caret-left"></span></span>
                            <span class="ab-nav-menu-back-cta__text">${parent_title}</span>
                        </button>
                        <div class="ab-nav-close-cta">×</div>
                    </div>`}

                <ul class="ab-nav-menu-list">
                    ${parent_link
                        ? `
                        <li class="ab-nav-menu-item ab-nav-menu-item--shop-all">
                            <a href="${parent_link}" class="ab-nav-menu-item-link">Shop All</a>
                        </li>
                        `
                        : ""}
                    ${menu_items
                        .map(
                            ({ title, link, sub_menu_items = [] }) => /* HTML  */ `
                            <li class="ab-nav-menu-item">
                                <a href="${link}" class="ab-nav-menu-item-link ${sub_menu_items && sub_menu_items.length > 0 ? "ab-nav-menu-item-link--has-sub-menu" : ""}">${title}</a>
                                ${sub_menu_items && sub_menu_items.length > 0 ? getNavLayout(sub_menu_items, title, link, level + 1) : ""}
                            </li>
                        `,
                        )
                        .join("")}
                </ul>

                ${level === 2 ? level2BrandLayout : ""}
            </div>
        `;
    }

    function createLayout() {
        q("head").insertAdjacentHTML(
            "beforeend",
            /* HTML */ `
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            `,
        );

        const targetNode = q(".main-menu.navbar-toggleable-sm .container-fluid");

        targetNode.insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-nav-container">
                    <div class="ab-nav-menu-wrapper">${getNavLayout()}</div>
                </div>
            `,
        );
    }

    function clickFunction() {
        q(".ab-nav-container").addEventListener("click", (e) => {
            const closeButton = e.target.closest(".ab-nav-close-cta");
            if (closeButton) {
                q(".close-button button.close").click();
            }

            const subMenuLinkExpandable = e.target.closest(".ab-nav-menu-item-link.ab-nav-menu-item-link--has-sub-menu");
            if (subMenuLinkExpandable) {
                e.preventDefault();
                const siblingDropdownMenu = subMenuLinkExpandable.nextElementSibling;
                console.log("siblingDropdownMenu", siblingDropdownMenu);
                siblingDropdownMenu.classList.add("ab-nav-menu-container--show");
            }

            const backToParentCta = e.target.closest("button.ab-nav-menu-back-cta");
            if (backToParentCta) {
                const parentDropdownMenu = backToParentCta.parentElement.parentElement;
                console.log("parentDropdownMenu", parentDropdownMenu);
                parentDropdownMenu.classList.remove("ab-nav-menu-container--show");
            }
        });
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
