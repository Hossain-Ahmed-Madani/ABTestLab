(async () => {
    const TEST_CONFIG = {
        page_initials: "AB-TEST014-1",
        test_variation: 1 /* 1, 2 */,
        test_version: 0.0003,
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

    const CONTENT = {
        1: {
            info_package: {
                label: "Infopaket",
                bottom_text: "",
                btn_class_name: "btn btn-info btn-sm link-modal-info-package",
            },
            sign_up: {
                label: "Anmelden",
                bottom_text: "",
                btn_class_name: "btn btn-prio-1 btn-reg-header btn-sm track-fb-init-free-month",
            },
        },
        2: {
            info_package: {
                label: "Infopaket",
                bottom_text: "Kostenlos. Alles Wissenswerte.",
                btn_class_name: "btn btn-info btn-sm link-modal-info-package",
            },
            sign_up: {
                label: "Anmelden",
                bottom_text: "4 Wochen unverbindlich testen.",
                btn_class_name: "btn btn-prio-1 btn-reg-header btn-sm track-fb-init-free-month",
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
                        <button class="ab-sticky-cta__button ab-sticky-cta__button--info ${info_package.btn_class_name}">${info_package.label}</button>
                        ${""}
                    </div>
                    <div class="ab-sticky-cta__container">
                        <button class="ab-sticky-cta__button ab-sticky-cta__button--signup ${sign_up.btn_class_name}">${sign_up.label}</button>
                        ${""}
                    </div>
                </div>
            `,
        );

        q(".ab-sticky-cta__button--info").addEventListener("click", (e) => q(".btn.btn-info.btn-sm.link-modal-info-package:not(.ab-sticky-cta__button)").click());
        q(".ab-sticky-cta__button--signup").addEventListener("click", (e) => q(".btn.btn-prio-1.btn-reg-header.btn-sm.track-fb-init-free-month:not(.ab-sticky-cta__button)").click());
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
