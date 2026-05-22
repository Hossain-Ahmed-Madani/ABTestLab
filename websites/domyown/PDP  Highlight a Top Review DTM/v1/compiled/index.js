(async () => {
    const TEST_CONFIG = {
        page_initials: "AB-HIGHLIGHT-TOP-REVIEW",
        test_variation: 1,
        test_version: 0.0002,
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

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

        // GET ITEMS
        const targetNode = q(".leading-none:has(.price-breaks)");
        const isMobile = !!q("body#mobile");
        const insertPosition = isMobile ? "beforebegin" : "afterend";
        const reviewTxt = q(
            "li:has(p img[alt='5 of 5 Stars']) div.product-review, li:has(p img[alt='5 of 5 Stars']) p.paragraphs-bottom.leading-normal.md\\:leading-loose.text-grey-darkest",
        ).textContent;

        // CREATE MARKUP
        const layout = /* HTML */ `
            <div class="ab-review">
                <div class="ab-review__txt">${reviewTxt}</div>
                <div class="ab-review__icon">
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L8 9L15 1" stroke="#315CAA" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
        `;

        // INSERT ELEMENTS
        if (isMobile) targetNode.insertAdjacentElement(insertPosition, q("div:has(>#product-title)"));
        targetNode.insertAdjacentHTML(insertPosition, layout);

        // HANDLE FUNCTIONALITIES
        const abReviewTxtDiv = q(".ab-review__txt");
        abReviewTxtDiv.style.width = `${abReviewTxtDiv.getBoundingClientRect().width}px`;

        q(".ab-review").addEventListener("click", (e) => {
            e.currentTarget.classList.toggle("ab-review--expanded");
        });
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q("#product-page-reviews") && q("li p img[alt='5 of 5 Stars']"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
