(() => {
    const TEST_CONFIG = {
        page_initials: "AB-MS76",
        test_variation: 2 /* 1, 2 */,
        test_version: 0.0002,
    };

    const ASSETS = {
        check_circle: "https://cdn-3.convertexperiments.com/uf/10042082/10042535/group-1-1_68a3314ab9936.svg",
        cross_circle: "https://cdn-3.convertexperiments.com/uf/10042082/10042535/delete-1-streamline-flex_68a3314ab8857.svg",
    };

    const DATA = {
        // ✅ high protein, ✅ high fiber, ✅ nostalgic flavors, ❌ no dyes, ❌ no artificial flavors, ❌ no gluten containing ingredients
        1: [
            {
                icon: ASSETS.check_circle,
                title: "high protein",
            },
            {
                icon: ASSETS.check_circle,
                title: "high fiber",
            },
            {
                icon: ASSETS.check_circle,
                title: "nostalgic flavors",
            },
            {
                icon: ASSETS.cross_circle,
                title: "no dyes",
            },
            {
                icon: ASSETS.cross_circle,
                title: "no artificial flavors",
            },
            {
                icon: ASSETS.cross_circle,
                title: "no gluten containing ingredients",
            },
        ],
        // ✅ high protein, ✅ high fiber, ✅ nostalgic flavors, ✅ Dye free, ✅ Never artificially flavored, ✅ gluten free
        2: [
            {
                icon: ASSETS.check_circle,
                title: "high protein",
            },
            {
                icon: ASSETS.check_circle,
                title: "high fiber",
            },
            {
                icon: ASSETS.check_circle,
                title: "nostalgic flavors",
            },
            {
                icon: ASSETS.check_circle,
                title: "Dye free",
            },
            {
                icon: ASSETS.check_circle,
                title: "Never artificially flavored",
            },
            {
                icon: ASSETS.check_circle,
                title: "gluten free",
            },
        ],
    };

    function waitForElement(predicate, callback, timer = 10000, frequency = 100) {
        try {
            if (timer <= 0) {
                throw new Error(`Timeout reached while waiting for condition: ${predicate.toString()}`);
            } else if (predicate && predicate()) {
                callback();
            } else {
                setTimeout(() => {
                    waitForElement(predicate, callback, timer - frequency, frequency);
                }, frequency);
            }
        } catch (error) {
            console.error(error);
            return;
        }
    }

    function createLayout() {
        const targetNode = document.querySelector("#shopify-section-shop-all-header");
        const matched_data = DATA[TEST_CONFIG.test_variation];

        const layout = /* HTML */ `
            <section class="ab-section">
                <div class="ab-hero-banner-wrapper">
                    <div class="ab-hero-banner-content">
                        <h2 class="ab-hero-banner-header">
                            EXPLORE OUR <br />
                            PRODUCTS
                        </h2>
                        <p class="ab-hero-banner-subtitle">Indulge in our delicious, better-<br />for-you breakfast options.</p>
                    </div>
                </div>
                <div class="ab-rotating-banner-wrapper">
                    <ul class="ab-rotating-banner-content">
                        ${[...matched_data, ...matched_data]
                            .map(
                                (item) => /* HTML */ `
                                    <li class="ab-rotating-banner-item">
                                        <div class="ab-rotating-banner-item__img">
                                            <img src="${item.icon}" />
                                        </div>
                                        <div class="ab-rotating-banner-item__label">${item.title}</div>
                                    </li>
                                `
                            )
                            .join("")}
                    </ul>
                    <ul class="ab-rotating-banner-content">
                        ${[...matched_data, ...matched_data]
                            .map(
                                (item) => /* HTML */ `
                                    <li class="ab-rotating-banner-item">
                                        <div class="ab-rotating-banner-item__img">
                                            <img src="${item.icon}" />
                                        </div>
                                        <div class="ab-rotating-banner-item__label">${item.title}</div>
                                    </li>
                                `
                            )
                            .join("")}
                    </ul>
                </div>
            </section>
        `;
        targetNode.insertAdjacentHTML("afterend", layout);
    }

    function init() {
        document.body.classList.add(TEST_CONFIG.page_initials, `${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}`, `${TEST_CONFIG.page_initials}--version${TEST_CONFIG.test_version}`);
        createLayout();
    }

    function hasAllTargetElements() {
        return !!(
            document.querySelector(`body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`) &&
            document.querySelector(`#shopify-section-shop-all-header`)
        );
    }

    waitForElement(hasAllTargetElements, init);
})();
