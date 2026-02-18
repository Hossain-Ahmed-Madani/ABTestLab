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
                    <div class="${page_initials}__modal-close-cta" style="cursor: pointer;">X</div>
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
