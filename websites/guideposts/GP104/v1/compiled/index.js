(async () => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "Guideposts",
        site_url: "https://guideposts.org",
        test_name: "GP104: [COLLECTION] Mobile Filter Panel (2) SET UP TEST",
        page_initials: "AB-GP104",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        cross_svg: /* HTML */ `
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.69167 0L0 1.69167L6.76667 8.45833L0 15.225L1.69167 16.9167L8.45833 10.15L15.225 16.9167L16.9167 15.225L10.15 8.45833L16.9167 1.69167L15.225 0L8.45833 6.76667L1.69167 0Z"
                    fill="black"
                />
            </svg>
        `,
    };

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

    function createLayout() {
        q("body").insertAdjacentHTML(
            "afterbegin",
            /* HTML */ `
                <div class="${page_initials}__modal-layout">
                    <div class="${page_initials}__modal-backdrop"></div>
                    <div class="${page_initials}__modal">
                        <div class="${page_initials}__modal__head">
                            <div class="${page_initials}__modal__title">Filters</div>
                            <div class="${page_initials}__modal__close-cta">${ASSETS.cross_svg}</div>
                        </div>
                        <div class="${page_initials}__modal__body">
                            <div class="${page_initials}__modal__body__text-content">Modal Content</div>
                        </div>
                        <div class="${page_initials}__modal__footer">
                            <div class="ab-apply-filter-cta">Apply Filters</div>
                            <div class="ab-clear-filter-cta">X Clear Filters</div>
                        </div>
                    </div>
                </div>
            `,
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
        const body = document.body;

        const modal = q(`.${page_initials}__modal`);

        if (!modal) return;

        if (action === "show" && !body.classList.contains(modalShowClass)) {
            animate(modal, "slide-in-left", 200);
            modal.classList.add("slide-in-left");
            body.classList.add(modalShowClass);
            document.addEventListener("touchmove", preventScroll, { passive: false });
        }

        if (action === "hide") {
            animate(modal, "slide-out-left", 200);
            setTimeout(() => body.classList.remove(modalShowClass), 200);
            document.removeEventListener("touchmove", preventScroll);
        }
    }
    function clickFunction() {
        document.body.addEventListener("click", (e) => {
            // ====== MODAL ======

            // OPEN MODAL
            if (e.target.closest(".elementor-button.elementor-button-link.elementor-size-sm")) {
                handleModalView("show");
            }

            // CLOSE MODAL

            if (
                e.target.closest(`.${page_initials}__modal__close-cta`) ||
                (e.target.closest(`.${page_initials}__modal-backdrop`) && !e.target.closest(`.${page_initials}__modal`))
            ) {
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


        handleModalView("show");
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && true);
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
