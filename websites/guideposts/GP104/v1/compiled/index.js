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
        plus_svg: /* HTML */ `
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.0316 7.16223V8.93927C13.0316 9.18608 12.9452 9.39587 12.7724 9.56863C12.5997 9.7414 12.3899 9.82779 12.1431 9.82779H0.888517C0.641707 9.82779 0.431918 9.7414 0.259151 9.56863C0.0863836 9.39587 0 9.18608 0 8.93927V7.16223C0 6.91542 0.0863836 6.70563 0.259151 6.53287C0.431918 6.3601 0.641707 6.27372 0.888517 6.27372H12.1431C12.3899 6.27372 12.5997 6.3601 12.7724 6.53287C12.9452 6.70563 13.0316 6.91542 13.0316 7.16223Z"
                    fill="black"
                />
                <path
                    d="M5.62729 1.53497H7.40433C7.65114 1.53497 7.86093 1.62135 8.0337 1.79412C8.20646 1.96688 8.29285 2.17667 8.29285 2.42348V13.678C8.29285 13.9248 8.20646 14.1346 8.0337 14.3074C7.86093 14.4802 7.65114 14.5666 7.40433 14.5666H5.62729C5.38048 14.5666 5.17069 14.4802 4.99793 14.3074C4.82516 14.1346 4.73878 13.9248 4.73878 13.678L4.73878 2.42348C4.73878 2.17667 4.82516 1.96688 4.99793 1.79412C5.17069 1.62135 5.38048 1.53497 5.62729 1.53497Z"
                    fill="black"
                />
            </svg>
        `,
        minus_svg: /* HTML */ `
            <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.0316 0.888525V2.66556C13.0316 2.91237 12.9452 3.12216 12.7724 3.29493C12.5997 3.46769 12.3899 3.55408 12.1431 3.55408H0.888517C0.641707 3.55408 0.431918 3.46769 0.259151 3.29493C0.0863836 3.12216 0 2.91237 0 2.66556V0.888525C0 0.641714 0.0863836 0.431925 0.259151 0.259158C0.431918 0.0863907 0.641707 7.15256e-06 0.888517 7.15256e-06H12.1431C12.3899 7.15256e-06 12.5997 0.0863907 12.7724 0.259158C12.9452 0.431925 13.0316 0.641714 13.0316 0.888525Z"
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

    const accordionData = [
        {
            title: "Category",
            description: `Ist Ihre Bestellung bei uns eingegangen, erhalten Sie von uns eine Auftragsbestätigung per E-Mail zugesendet und wir beginnen mit der Bearbeitung. Sie werden stets auf dem aktuellen Stand gehalten - über jeden Produktionsprozess erhalten Sie automatisch eine E-Mail vom Auftragseingang über die Produktion und bis zur Fertigstellung Ihrer Ware. Sobald Ihr Auftrag abschließend bearbeitet und kommissioniert wurde, teilen wir Ihnen per E-Mail einen Liefertermin mit. Über den Status Ihres Auftrags können Sie sich jederzeit in unserem <a href="https://www.zaun-idee.de/sendungsnummer">Sendungstool</a> informieren.`,
        },
        {
            title: "Price",
            description: `Paketdienstleister: Ihre Sendung wird dem Dienstleister übergeben und Ihnen an Ihrer Adresse zugestellt. Sie erhalten via E-Mail eine Sendungsnummer und sind somit jederzeit über den Stand Ihrer Bestellung informiert. Spedition: Wir sorgen dafür, dass alle bestellten Artikel unbeschädigt und sicher bei Ihnen angeliefert werden. Deshalb erfolgt der Versand ausschließlich durch Transportunternehmen, die unser gesamtes Produktportfolio kennen. Weitere Informationen haben wir <a href="https://www.zaun-idee.de/lieferung">hier</a> für Sie zusammengestellt.`,
        },
    ];

    function faqAccordionSectionLayout() {
        const layout = /* HTML */ `
            <div class="ab__filter-accordion-section">
                ${accordionData.reduce(
                    (acc, cItem, index) =>
                        acc +
                        /* HTML */ `
                            <div class="ab__filter-accordion-item" data-toggle-id="${index + 1}">
                                <div class="ab__filter-accordion-item__head">
                                    <div class="ab__filter-accordion-item__head__title">${cItem.title}</div>
                                    <div class="ab__filter-accordion-item__head__toggle-icon">
                                        <div class="ab-accordion-icon ab-accordion-icon--plus">${ASSETS.plus_svg}</div>
                                        <div class="ab-accordion-icon ab-accordion-icon--minus">${ASSETS.minus_svg}</div>
                                    </div>
                                </div>
                                <div class="ab__filter-accordion-item__body">${cItem.description}</div>
                            </div>
                        `,
                    "",
                )}
            </div>
        `;

        return layout;
    }

    function toggleAccordion(clickedElement) {
        const currentAccordionElement = clickedElement;
        clickedElement.getAttribute("data-toggle-id");
        const clickedItemIsOpen = currentAccordionElement.classList.contains("ab__filter-accordion-item--open");

        const accordionELements = document.querySelectorAll(".ab__filter-accordion-item");
        accordionELements.forEach((elem) => {
            elem.classList.remove("ab__filter-accordion-item--open");
        });

        if (clickedItemIsOpen) {
            currentAccordionElement.classList.remove("ab__filter-accordion-item--open");
        } else {
            currentAccordionElement.classList.add("ab__filter-accordion-item--open");
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
                            <div class="${page_initials}__modal__title">Filters</div>
                            <div class="${page_initials}__modal__close-cta">${ASSETS.cross_svg}</div>
                        </div>
                        <div class="${page_initials}__modal__body">
                            <div class="${page_initials}__modal__filter__accordion-wrapper">${faqAccordionSectionLayout()}</div>
                            <div class="${page_initials}__modal__filter-cta-wrapper">
                                <div class="ab-apply-filter-cta">Apply Filters</div>
                                <div class="ab-clear-filter-cta">X Clear Filters</div>
                            </div>
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
            if (e.target.closest(`.${page_initials}__modal__close-cta`) || (e.target.closest(`.${page_initials}__modal-backdrop`) && !e.target.closest(`.${page_initials}__modal`))) {
                handleModalView("hide");
            }

            // TOGGLE ACCORDION
            if (e.target.closest(".ab__filter-accordion-item__head")) {
                const accordionElement = e.target.closest(".ab__filter-accordion-item__head").parentNode;
                toggleAccordion(accordionElement);
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
