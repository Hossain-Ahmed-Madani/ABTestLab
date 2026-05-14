(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Gardeners",
        site_url: "https:[]//www.gardeners.com",
        test_name: "Navigation - Change Tier 3 Navigation to Dropdown [DTM]",
        page_initials: "AB-NAV",
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

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function toggleAccordion(clickedElement) {
        const currentAccordionElement = clickedElement;
        const clickedItemIsOpen = currentAccordionElement.classList.contains("ab-nav-accordion-item--open");

        const accordionELements = document.querySelectorAll(".ab-nav-accordion-item");
        accordionELements.forEach((elem) => {
            elem.classList.remove("ab-nav-accordion-item--open");
        });

        if (clickedItemIsOpen) {
            currentAccordionElement.classList.remove("ab-nav-accordion-item--open");
        } else {
            currentAccordionElement.classList.add("ab-nav-accordion-item--open");
        }
    }

    const accordionData = [
        {
            imgUrl: "https://assets.ablyft.com/22263542/ZwGvyiBDKEqbakt7ApOPavMcVxXPmB5NQSH2gJ81.png",
            title: "Was passiert nach der Bestellung?",
            description: /* HTML */ `
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
            `,
        },
        {
            imgUrl: "https://assets.ablyft.com/22263542/OMZ0jFCYjx2ZmQmcqieAPJvXghwb8UlGFizq1teE.png",
            title: "Wie läuft der Versand ab?",
            description: /* HTML */ `
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
            `,
        },
        {
            imgUrl: "https://assets.ablyft.com/22263542/xjyeXdF2vIQQwgdRijmHXn66pPM5272uDBUGL5v6.png",
            title: "Wie läuft die Montage ab?",
            description: /* HTML */ `
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
            `,
        },
        {
            imgUrl: "https://assets.ablyft.com/22263542/jzH089DBid8YmWDhQflthxFleVqXUdSG6UcPaSUp.png",
            title: "Sie benötigen eine Beratung?",
            description: /* HTML */ `
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
                <li class="ab-third-tier-nav-item">
                    <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                </li>
            `,
        },
    ];

    function init() {
        if (window[page_initials] === true) return;

        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;

        console.table(TEST_CONFIG);

        qq('ul[data-menu-depth="1"]').forEach((item) => {
            item.insertAdjacentHTML(
                "beforeend",
                /* HTML */ `
                    ${accordionData
                        .map(
                            (item, index) => /* HTML */ `
                                <li class="ab-nav-accordion-item" data-toggle-id="${index + 1}">
                                    <a href="#" class="ab-nav-accordion-item__head">
                                        <div class="ab-nav-accordion-item__head__title">${item.title}</div>
                                        <div class="ab-nav-accordion-item__head__toggle-icon">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.875 7.438 12 17.563 22.125 7.438" stroke="currentColor" stroke-width="2"></path>
                                            </svg>
                                        </div>
                                    </a>
                                    <ul class="ab-nav-accordion-item__third-tier-list">
                                        <li class="ab-third-tier-nav-item">
                                            <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                                        </li>
                                        <li class="ab-third-tier-nav-item">
                                            <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                                        </li>
                                        <li class="ab-third-tier-nav-item">
                                            <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                                        </li>
                                        <li class="ab-third-tier-nav-item">
                                            <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                                        </li>
                                        <li class="ab-third-tier-nav-item">
                                            <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                                        </li>
                                        <li class="ab-third-tier-nav-item">
                                            <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                                        </li>
                                        <li class="ab-third-tier-nav-item">
                                            <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                                        </li>
                                        <li class="ab-third-tier-nav-item">
                                            <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                                        </li>
                                        <li class="ab-third-tier-nav-item">
                                            <a href="#" class="ab-third-tier-nav-item__link">Link Item</a>
                                        </li>
                                    </ul>
                                </li>
                            `,
                        )
                        .join("")}
                `,
            );
        });

        q(".mobile-menu").addEventListener("click", (e) => {
            if (e.target.closest(".ab-nav-accordion-item__head")) {
                const accordionElement = e.target.closest(".ab-nav-accordion-item__head").parentNode;
                toggleAccordion(accordionElement);
            }
        });
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q('.mobile-menu ul[data-menu-depth="1"]'));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
