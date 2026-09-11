(async () => {
    const TEST_CONFIG = {
        client: "Netzproduzenten",
        project: "Electropapa",
        site_url: "https://electropapa.com/de",
        test_name: 'Test030 [Electropapa] - PDP - category "battery" - showing only higher variants',
        page_initials: "AB-TEST030",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    async function waitForElementAsync(predicate, timeout = 10000, frequency = 150) {
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

    function toNumber(str) {
        const num = String(str).replace(/[^\d.-]/g, "");
        return num ? Number(num) : NaN;
    }

    function init() {
        if (window[page_initials] === true) return;

        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;

        const targetNode = q(".product-detail-upselling");
        targetNode.classList.remove("d-none");

        const activeValue = toNumber(q(targetNode, ".upselling-card--selected .upselling-card-capacity, .upselling-card--selected .upselling-card-price").textContent);

        qq(targetNode, "li.upselling-item").forEach((item) => {
            const curr = toNumber(q(item, ".upselling-card-capacity, .upselling-card-price").textContent);
            if (curr < activeValue) item.classList.add("d-none");
        });
    }

    await waitForElementAsync(() => q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation}) .product-detail-upselling`));
    init();
})();
