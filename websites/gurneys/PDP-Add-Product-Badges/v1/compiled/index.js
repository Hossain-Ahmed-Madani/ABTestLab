/* 

Test container: https://app.convert.com/accounts/100412411/projects/100414848/experiences/1004191154/summary

Forced Variation: https://www.gurneys.com/products/gurney-girls-best-vff-hybrid-tomato?_conv_eforce=1004191154.1004449440&utm_campaign=qa5

*/

(async () => {
    const TEST_CONFIG = {
        page_initials: "AB-PRODUCT-BADGES",
        test_variation: 1,
        test_version: 0.0004,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const DATA = [
        {
            urlList: [
                "https://www.gurneys.com/products/gurneys_whopper_junebearing_strawberry",
                "https://www.gurneys.com/products/yukon_gold_potatoes",
                "https://www.gurneys.com/products/simply-irresistible-sweet-corn",
                "https://www.gurneys.com/products/candy_hybrid_onion",
                "https://www.gurneys.com/products/asparabest-asparagus",
                "https://www.gurneys.com/products/covington-sweet-potato",
                "https://www.gurneys.com/products/dwarf_burning_bush_",
                "https://www.gurneys.com/products/contender_peach_tree_",
                "https://www.gurneys.com/products/dwarf_meyer_lemon",
                "https://www.gurneys.com/products/heritage_raspberry",
            ],
            badge: {
                label: "Bestseller",
                className: "ab-product-badge--bestseller",
            },
        },
        {
            urlList: [
                "https://www.gurneys.com/products/gotta_have_it_sweet_corn",
                "https://www.gurneys.com/products/gurney-girls-best-vff-hybrid-tomato",
                "https://www.gurneys.com/products/gurneys_giant_ii_hybrid_sweet_pepper_",
                "https://www.gurneys.com/products/kabluey_blueberry_",
                "https://www.gurneys.com/products/crunch-a-bunch-hybrid-carrot",
                "https://www.gurneys.com/products/juliet-dwarf-cherry",
                "https://www.gurneys.com/products/beet-unbeetable-hybrid",
                "https://www.gurneys.com/products/gurneys_beneficial_bug_blend_",
                "https://www.gurneys.com/products/razzmatazz",
                "https://www.gurneys.com/products/gurneys_sunny_hedge_blend_sunflower",
            ],
            badge: {
                label: "Only From Gurney's",
                className: "ab-product-badge--only-from-gurneys",
            },
        },
    ];

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

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

        const currentUrl = window.location.href;
        const badgeData = DATA.filter((data) =>  data.urlList.some(url => currentUrl.includes(url)));

        if (!badgeData) return;

        q("head").insertAdjacentHTML(
            "beforeend",
            /* HTML */ `
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
            `,
        );

        q(".product__block--product-header-inner").insertAdjacentHTML(
            "afterbegin",
            /* HTML */ `
                ${badgeData
                    .map(
                        ({ badge }) => /* HTML */ `
                            <div class="ab-product-badges-container">
                                <div class="ab-product-badge ${badge.className}">${badge.label}</div>
                            </div>
                        `,
                    )
                    .join("")}
            `,
        );
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".product__block--product-header-inner"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
