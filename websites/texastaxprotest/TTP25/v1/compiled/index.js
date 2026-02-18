/* 

Figma: https://www.figma.com/design/EegmeIrFHMK3rVEhYTOlxT/TTP25---HOME--Add-Video?node-id=2001-2192&p=f&t=G8nZFwZy9SAvbBgU-0
Test container: https://marketer.monetate.net/control/a-7b7b9c2b/p/texastaxprotest.com/experience/2088292#c2622624:what

*/

(async () => {
    const TEST_ID = "TTP25";
    const VARIANT_ID = "V1"; /* Control, V1, V2 */

    function logInfo(message) {
        console.log(
            `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
            "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            message,
        );
    }

    logInfo("fired");

    const TEST_CONFIG = {
        client: "Acadia",
        project: "Texas Tax Protest",
        site_url: "https://www.texastaxprotest.com",
        test_name: "TTP25: [HOME] Add Video - (2) SET UP TEST",
        page_initials: "AB-TTP25",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        close_cta_svg: /* HTML */ `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0.907335 14C0.675145 14 0.442789 13.9111 0.266072 13.7343C-0.0886906 13.3797 -0.0886906 12.8063 0.266072 12.4517L12.4514 0.265953C12.806 -0.0886509 13.3793 -0.0886509 13.7339 0.265953C14.0887 0.620557 14.0887 1.1939 13.7339 1.54851L1.5486 13.7343C1.37072 13.912 1.13953 14 0.907335 14Z"
                fill="white"
            />
            <path
                d="M13.0927 14C12.8605 14 12.6283 13.9111 12.4514 13.7343L0.266072 1.54851C-0.0886906 1.1939 -0.0886906 0.620557 0.266072 0.265953C0.620668 -0.0886509 1.19384 -0.0886509 1.5486 0.265953L13.7339 12.4517C14.0887 12.8063 14.0887 13.3797 13.7339 13.7343C13.557 13.912 13.3249 14 13.0927 14Z"
                fill="white"
            />
        </svg> `};

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

    function createLayout() {
        const contactPrevSibling = q('.mantine-Button-root[href="#contact"]').previousSibling;
        contactPrevSibling.insertAdjacentHTML(
            "afterend",
            /* HTML */ ` <div class="${page_initials}__modal-cta-container">
                <div class="${page_initials}__modal-open-cta" style="cursor: pointer;">Play Video</div>
            </div>`,
        );

        const ctaContainer = q(`.${page_initials}__modal-cta-container`);

        qq('.mantine-Button-root[href="#contact"]').forEach((cta) => {
            ctaContainer.insertAdjacentElement("afterbegin", cta);
        });

        q("body").insertAdjacentHTML(
            "afterbegin",
            /* HTML */ ` <div class="${page_initials}__modal-layout">
                <div class="${page_initials}__modal-backdrop"></div>
                <div class="${page_initials}__modal">
                    <div class="${page_initials}__modal-close-cta">${ASSETS.close_cta_svg}</div>
                    <div class="${page_initials}__modal__content">Video Content here</div>
                </div>
            </div>`,
        );
    }

    function animate(targetElement, className, interval) {
        if (!targetElement) return;
        if (className.includes(".")) className.replace(".", "");
        targetElement.classList.add(className);
        setTimeout(() => targetElement.classList.remove(className), interval);
    }

    function preventScroll(e) {
        e.preventDefault();
    }

    function handleModalView(action = "show") {
        const modalShowClass = `${page_initials}--modal-show`;
        const modal = q(`.${page_initials}__modal`);
        const body = document.body;

        if (action === "show" && !body.classList.contains(modalShowClass)) {
            animate(modal, `${page_initials}__slide-bottom`, 200);
            modal.classList.add(`${page_initials}__slide-bottom`);
            body.classList.add(modalShowClass);
            document.addEventListener("touchmove", preventScroll, { passive: false });
        }

        if (action === "hide") {
            animate(modal, `${page_initials}__slide-top`, 200);
            setTimeout(() => body.classList.remove(modalShowClass), 200);
            document.removeEventListener("touchmove", preventScroll);
        }
    }

    function clickFunction() {
        document.body.addEventListener("click", (e) => {
            // ====== MODAL ======

            // OPEN MODAL
            if (e.target.closest(`.${page_initials}__modal-open-cta`)) {
                handleModalView("show");
            }

            if (e.target.closest(`.${page_initials}__modal-close-cta`) || (e.target.closest(`.${page_initials}__modal-backdrop`) && !e.target.closest(`.${page_initials}__modal`))) {
                handleModalView("hide");
            }
        });

        // CLOSE POPUP -> ON ESC CLICK
        document.addEventListener("keydown", function (evt) {
            evt = evt || window.event; // Fallback for older browsers (optional)
            if (evt.key === "Escape" || evt.key === "Esc") {
                handleModalView("hide");
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
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            qq('.mantine-Button-root[href="#contact"]').length === 2 &&
            document.readyState === "complete" &&
            window.Wistia &&
            typeof window.Wistia === "object"
        );
    }

    // try {
    //     await waitForElementAsync(checkForItems);
    //     init();
    // } catch (error) {
    //     return false;
    // }

    waitForElementAsync(checkForItems).then(init);
})();
