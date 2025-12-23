/* 
Ticket: https://trello.com/c/JeFHZwPS/4541-pdp-top-review-modal-dtm
Test container: https://app.optimizely.com/v2/projects/30347390156/experiments/4655644880404480/pages
Figma: https://www.figma.com/design/sDP3TPgMBmNNr4RZvdx4Kb/Dunlop-Sports-America?node-id=101-189&t=q0FXhNstxiR9NZF2-0

*/

(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Dunlopsports",
        host: "https://us.dunlopsports.com",
        test_name: "PDP - Top Review Modal [DTM]",
        page_initials: "AB-PDP-TOP-REVIEW",
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

    function animate(targetElement, className, interval) {
        if (!targetElement) return;
        if (className.includes(".")) className.replace(".", "");
        targetElement.classList.add(className);
        setTimeout(() => targetElement.classList.remove(className), interval);
    }

    function preventScroll(e) {
        e.preventDefault();
    }

    async function handleModalView(action = "show") {
        const modalShowClass = `${page_initials}--modal-show`;
        const body = q("body");

        await waitForElementAsync(() => q(`.${page_initials}__modal`));

        const modal = q(`.${page_initials}__modal`);

        if (action === "show" && !body.classList.contains(modalShowClass)) {
            animate(modal, "slide-to-top", 200);
            modal.classList.add("slide-to-top");
            body.classList.add(modalShowClass);
            document.addEventListener("touchmove", preventScroll, { passive: false });
        }

        if (action === "hide") {
            animate(modal, "slide-to-bottom", 200);
            setTimeout(() => body.classList.remove(modalShowClass), 200);
            document.removeEventListener("touchmove", preventScroll);
        }
    }

    function createLayout() {
        q("body").insertAdjacentHTML(
            "afterbegin",
            /* HTML */ `
                <div class="${page_initials}__modal-layout">
                    <div class="${page_initials}__modal-backdrop"></div>
                    <div class="${page_initials}__modal">
                        <div class="${page_initials}__modal__head">
                            <div class="${page_initials}__modal__head__title">Inhaltsstoffe</div>
                            <div class="${page_initials}__modal__head__close-cta">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                    <path d="M25.4999 1.5001L1.5 25.5M1.4999 1.5L25.4998 25.4999" stroke="#547351" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </div>
                        </div>
                        <div class="${page_initials}__modal__body">
                            <div class="${page_initials}__modal__body__text-content">
                                Frisches Hähnchenfleisch 70 %, Bruchreis, Mais (gentechnikfrei), Bierhefe*, Apfelpulpe*, Lachsöl** (Omega-3), Yucca-Extrakt, Leinsamenöl** (Omega-3),
                                Olivenöl**, Grünlippmuschel-Extrakt, Karotten*, Tomaten*, Aufrechte Studentenblume*, Löwenzahn*, Brokkoli*, grüner Tee*, Kamille*, Oregano*,
                                Mariendistelsamen*, Cranberrysamen*, Algen*, Kaliumchlorid. (*getrocknet, **kaltgepresst, nativ)
                            </div>
                        </div>
                    </div>
                </div>
            `
        );

        q(`.${page_initials}__modal__head__close-cta`).addEventListener("click", (e) => {
            handleModalView("hide");
        });

        q(`.${page_initials}__modal-backdrop`).addEventListener("click", (e) => {
            if (!e.target.closest(`.${page_initials}__modal`)) {
                handleModalView("hide");
            }
        });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
        handleModalView("show");
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && true);
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
