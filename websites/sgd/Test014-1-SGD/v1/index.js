(async () => {
    const TEST_CONFIG = {
        client: "Netzproduzenten",
        project: "SGD",
        site_url: "https://www.sgd.de",
        test_name: "Test014 - 1 [SGD] - global - sticky CTA at the bottom of the screen",
        page_initials: "AB-TEST014-1",
        test_variation: 1 /* 1, 2 */,
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

    function isSafari() {
        const userAgent = navigator.userAgent;
        return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    const CONTENT = {
        1: {
            info_package: {
                label: "Infopaket",
                bottom_text: "",
            },
            sign_up: {
                label: "Anmelden",
                bottom_text: "",
            },
        },
        2: {
            info_package: {
                label: "Infopaket bestellen",
                bottom_text: "Kostenlos. Alles Wissenswerte.",
            },
            sign_up: {
                label: "Kursplatz sichern",
                bottom_text: "4 Wochen unverbindlich testen.",
            },
        },
    };

    function init() {
        if (window[page_initials] === true) return;

        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;

        const { info_package, sign_up } = CONTENT[test_variation];

        q("body").insertAdjacentHTML(
            "beforeend",
            /* HTML */ `
                <div class="ab-sticky-cta">
                    <div class="ab-sticky-cta__container">
                        <div class="ab-sticky-cta__button ab-sticky-cta__button--info">${info_package.label}</div>
                        ${info_package.bottom_text ? `<div class="ab-sticky-cta__bottom-text ab-sticky-cta__bottom-text--info">${info_package.bottom_text}</div>` : ""}
                    </div>
                    <div class="ab-sticky-cta__container">
                        <div class="ab-sticky-cta__button ab-sticky-cta__button--signup">${sign_up.label}</div>
                        ${sign_up.bottom_text ? `<div class="ab-sticky-cta__bottom-text ab-sticky-cta__bottom-text--signup">${sign_up.bottom_text}</div>` : ""}
                    </div>
                </div>
            `,
        );

        q(".ab-sticky-cta__button--info").addEventListener("click", (e) => q(".btn.btn-info.btn-sm.link-modal-info-package").click());
        q(".ab-sticky-cta__button--signup").addEventListener("click", (e) => q(".btn.btn-prio-1.btn-reg-header.btn-sm.track-fb-init-free-month").click());
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q(".btn.btn-info.btn-sm.link-modal-info-package") &&
            q(".btn.btn-prio-1.btn-reg-header.btn-sm.track-fb-init-free-month")
        );
    }

    await waitForElementAsync(checkForItems);
    init();
})();
