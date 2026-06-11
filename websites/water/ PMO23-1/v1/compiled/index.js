console.log("PMO23 V2");
const TEST_CONFIG = {
    client: "Acadia",
    project: "Water",
    site_url: "https://www.water.com/",
    test_name: "PMO23: [Start-water-delivery] Optimize “Learn More” Copy & Modal Design-(2) SET UP TEST",
    page_initials: "AB-PMO23",
    test_variation: 2 /* 0 -> control, 1, 2, 3 */,
    test_version: 0.0002,
};

const { page_initials, test_variation, test_version } = TEST_CONFIG;

const DATA = {
    learn_more_txt: ["What's the Difference?", "How Much Do I Need?", "Water Guide?"]};

function waitForElement(predicate, callback, timer = 20000, frequency = 100) {
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
        return;
    }
}

function createModalLayout() {

    document.querySelector(".onboarding-wizard-step-filters-head > .summit-Title-root").insertAdjacentHTML("afterend", /* HTML */ `<div class="${page_initials}__modal-open-cta">${DATA.learn_more_txt[test_variation - 1]}</div>`);

    console.log("========== createModalLayout ==========");

    const layout = /* HTML */ `
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
                        Frisches Hähnchenfleisch 70 %, Bruchreis, Mais (gentechnikfrei), Bierhefe*, Apfelpulpe*, Lachsöl** (Omega-3), Yucca-Extrakt, Leinsamenöl** (Omega-3), Olivenöl**,
                        Grünlippmuschel-Extrakt, Karotten*, Tomaten*, Aufrechte Studentenblume*, Löwenzahn*, Brokkoli*, grüner Tee*, Kamille*, Oregano*, Mariendistelsamen*,
                        Cranberrysamen*, Algen*, Kaliumchlorid. (*getrocknet, **kaltgepresst, nativ)
                    </div>
                </div>
            </div>
        </div>
    `;

    console.log(11111, layout);

    document.querySelector("body").insertAdjacentHTML("afterbegin", layout);

    console.log(111111, document.querySelector(`.${page_initials}__modal-layout`));
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

    const modal = document.querySelector(`.${page_initials}__modal`);

    if (action === "show" && !body.classList.contains(modalShowClass)) {
        animate(modal, "slide-bottom", 200);
        modal.classList.add("slide-bottom");
        body.classList.add(modalShowClass);
        document.addEventListener("touchmove", preventScroll, { passive: false });
    }

    if (action === "hide") {
        animate(modal, "slide-top", 200);
        setTimeout(() => body.classList.remove(modalShowClass), 200);
        document.removeEventListener("touchmove", preventScroll);
    }
}

function clickFunction() {
    document.body.addEventListener("click", (e) => {
        // ====== MODAL ======

        // OPEN MODAL
        if (e.target.closest(`.${page_initials}__modal-open-cta`)) {
            // const targetNode = e.target.closest('.plp-card-modal-trigger__item');
            // updateModalContent(targetNode);

            handleModalView("show");
        }

        // CLOSE MODAL

        if (e.target.closest(`.${page_initials}__modal__head__close-cta`) || (e.target.closest(`.${page_initials}__modal-backdrop`) && !e.target.closest(`.${page_initials}__modal`))) {
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
    document.body.classList.add(
        page_initials,
        `${page_initials}--v${test_variation}`,
        `${page_initials}--version-${test_version}`,
    );

    console.log(TEST_CONFIG);

    createModalLayout();
    clickFunction();

    // createLayout();
    // clickEvents();
    // modalViewGoal();
}

function hasAllTargetElements() {
    return !!(
        (
            // document.readyState === "complete" &&
            window.location.href.includes("start-water-delivery") &&
            document.querySelector(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) &&
            document.querySelector(".onboarding-wizard-step-filters-head > .summit-Title-root")
        )
        // document.querySelector("a.text-primo-river[data-modal-v2-trigger]") &&
        // document.querySelector(".storyblok-text-blocks") &&
        // document.querySelector("#water-types")
    );
}

waitForElement(hasAllTargetElements, init);

// ============================ CLIENT CODE  ============================

function waitForElm(selector) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) return resolve(document.querySelector(selector));

        const observer = new MutationObserver(() => {
            const el = document.querySelector(selector);
            if (el) {
                observer.disconnect();
                resolve(el);
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    });
}

function viewElementGoal(el) {
    const intObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    window.dataLayer.push({
                        event: "GA4event",
                        "ga4-event-name": "cro_event",
                        "ga4-event-p1-name": "event_category",
                        "ga4-event-p1-value": "PMO23_Modal_View",
                        "ga4-event-p2-name": "event_label",
                        "ga4-event-p2-value": "Water Guide Modal View",
                    });
                }
            });
        },
        { root: null, rootMargin: "0px", threshold: 0.1 },
    );

    intObserver.observe(el);
}

waitForElm("#water-types").then((elm) => {
    viewElementGoal(elm);
});
