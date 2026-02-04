(async () => {
    const TEST_ID = "PMO38";
    const VARIANT_ID = "V1"; /* control, V1 */

    function logInfo(message) {
        console.log(
            `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
            "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            message
        );
    }

    logInfo("fired");

    const TEST_CONFIG = {
        cdivent: "Acadia",
        project: "Water",
        site_url: "https://www.water.com",
        test_name: "PMO38: [CART] Clean Up Order Summary-(2) SET UP TEST",
        page_initials: "AB-PMO38",
        test_variation: 1 /* 0, 1 */,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        more_info_svg: /* HTML */ `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.9565 6C10.9565 4.68545 10.4339 3.42511 9.50442 2.49558C8.57489 1.56606 7.31455 1.04348 6 1.04348C4.68545 1.04348 3.42511 1.56606 2.49558 2.49558C1.56606 3.42511 1.04348 4.68545 1.04348 6C1.04348 6.65075 1.17154 7.29516 1.42052 7.8964C1.6696 8.49775 2.03533 9.04416 2.49558 9.50442C2.95584 9.96467 3.50225 10.3304 4.1036 10.5795C4.70483 10.8285 5.34925 10.9565 6 10.9565C6.65075 10.9565 7.29517 10.8285 7.8964 10.5795C8.49775 10.3304 9.04416 9.96467 9.50442 9.50442C9.96467 9.04416 10.3304 8.49775 10.5795 7.8964C10.8285 7.29517 10.9565 6.65075 10.9565 6ZM6 5.47826C6.28815 5.47826 6.52174 5.71185 6.52174 6V7.9127H6.60836C6.89639 7.9127 7.12991 8.14645 7.1301 8.43444C7.1301 8.72259 6.8965 8.95618 6.60836 8.95618H6C5.71185 8.95618 5.47826 8.72259 5.47826 8.43444V6.52174H5.39164C5.1035 6.52174 4.8699 6.28815 4.8699 6C4.8699 5.71185 5.1035 5.47826 5.39164 5.47826H6ZM6.00611 3.04382C6.29425 3.04383 6.52785 3.27742 6.52785 3.56556C6.52767 3.85354 6.29414 4.08728 6.00611 4.0873H6C5.71196 4.0873 5.47844 3.85355 5.47826 3.56556C5.47826 3.27741 5.71185 3.04382 6 3.04382H6.00611ZM12 6C12 6.78783 11.8449 7.56798 11.5435 8.29586C11.242 9.02381 10.7993 9.68504 10.2422 10.2422C9.68504 10.7993 9.02381 11.242 8.29586 11.5435C7.56798 11.8449 6.78783 12 6 12C5.21217 12 4.43202 11.8449 3.70414 11.5435C2.97619 11.242 2.31496 10.7993 1.75781 10.2422C1.20066 9.68504 0.75805 9.02381 0.456522 8.29586C0.15507 7.56798 1.37789e-08 6.78783 0 6C2.37122e-08 4.4087 0.632594 2.88303 1.75781 1.75781C2.88303 0.632594 4.4087 0 6 0C7.5913 4.9415e-08 9.11697 0.632594 10.2422 1.75781C11.3674 2.88303 12 4.4087 12 6Z"
                fill="black"
            />
        </svg> `,
        down_arrow_svg: /* HTML */ `<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0.140238 4.91288C-0.0599864 5.17474 -0.0458649 5.56075 0.182964 5.80484C0.411794 6.04892 0.77368 6.06399 1.01917 5.85041L1.06678 5.80484L5 1.60938L8.93322 5.80484L8.98083 5.85041C9.22632 6.06399 9.58821 6.04892 9.81704 5.80484C10.0459 5.56075 10.06 5.17474 9.85976 4.91288L9.81704 4.8621L5.44191 0.195269C5.19782 -0.0650892 4.80218 -0.0650892 4.55809 0.195269L0.182964 4.8621L0.140238 4.91288Z"
                fill="#0067C3"
            />
        </svg> `,
    };

    function fireGA4Event(eventName, eventLabel = "") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "GA4event",
            "ga4-event-name": "cro_event",
            "ga4-event-p1-name": "event_category",
            "ga4-event-p1-value": eventName,
            "ga4-event-p2-name": "event_label",
            "ga4-event-p2-value": eventLabel,
        });
    }

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

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function updateLayout() {
        console.log("updateLayout...");
    }

    function createLayout() {
        if (q(".ab-summary-wrapper")) return;

        q(".wrapper-section.flex.flex-col.gap-2\\.5").insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-summary-wrapper flex flex-col">
                    <div class="ab-summary-dropdown-container flex flex-col">
                        <div class="ab-summary-dropdown flex flex-col" aria-expanded="false">
                            <div class="ab-summary-dropdown__head">
                                <div class="ab-summary-row flex justify-between">
                                    <div class="ab-txt-lg text-left text-nowrap">One-time Purchase</div>
                                    <div class="ab-txt-lg text-right uppercase ml-auto">$34.99</div>
                                    <div class="ab-summary-dropdown__arrow flex justify-end items-center">${ASSETS["down_arrow_svg"]}</div>
                                </div>
                            </div>
                            <div class="ab-summary-dropdown__body flex flex-col">
                                <div class="ab-summary-row flex justify-between">
                                    <div class="ab-txt-regular text-left text-nowrap">One-Time Products</div>
                                    <div class="ab-txt-regular text-right uppercase">$14.99</div>
                                </div>
                                <div class="ab-summary-row flex justify-between">
                                    <div class="ab-txt-regular text-left text-nowrap flex items-center">
                                        <span>One-Time Refundable Deposit Fee</span>
                                        <span class="ab-summary-more-info flex justify-center items-center">${ASSETS["more_info_svg"]}</span>
                                    </div>
                                    <div class="ab-txt-regular text-right uppercase">$20.00</div>
                                </div>
                            </div>
                        </div>

                        <div class="ab-wrapper-section__total flex flex-col justify-between">
                            <div class="ab-summary-row flex justify-between">
                                <div class="ab-txt-regular text-left text-nowrap">Estimated Credit Card Fee</div>
                                <div class="ab-txt-regular text-right uppercase">TBD</div>
                            </div>
                            <div class="ab-summary-row flex justify-between">
                                <div class="ab-summary-label ab-txt-regular text-left text-nowrap">Taxes</div>
                                <div class="ab-summary-value ab-txt-regular text-right text-nowrap uppercase">TBD</div>
                            </div>
                            <div class="ab-summary-row ab-summary-row--total flex justify-between">
                                <div class="ab-summary-label ab-txt-lg text-left text-nowrap">Estimated Total</div>
                                <div class="ab-summary-value flex flex-col items-end">
                                    <div class="ab-txt-lg text-right text-nowrap uppercase">$82.42</div>
                                    <div class="ab-txt-sm text-right text-nowrap">Billed on the first invoice</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        );
    }

    function mutationObserverFunction() {
        const targetNode = q(".my-selector");
        const debouncedUpdate = debounce(updateLayout, 150);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: false, attributes: true });
    }

    function clickFunction() {
        const prefersReducedMotion = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

        qq(".ab-summary-dropdown__head").forEach((head) => {
            const dropdown = head.parentNode;
            const dropdownBody = q(dropdown, ".ab-summary-dropdown__body");
            if (!dropdownBody) return;

            // Initialize transition properties (smoother: height + fade + slight slide)
            dropdownBody.style.overflow = "hidden";
            dropdownBody.style.willChange = "height, opacity, transform";
            dropdownBody.style.transition = prefersReducedMotion
                ? "none"
                : "height 320ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms ease-in-out, transform 200ms ease-in-out";

            const removeExistingTransitionHandler = () => {
                if (dropdownBody._abTransitionHandler) {
                    dropdownBody.removeEventListener("transitionend", dropdownBody._abTransitionHandler);
                    dropdownBody._abTransitionHandler = null;
                }
            };

            const setClosedStyles = () => {
                dropdownBody.style.display = "none";
                dropdownBody.style.height = "0px";
                dropdownBody.style.opacity = "0";
                dropdownBody.style.transform = "translateY(-4px)";
                dropdownBody.style.overflow = "hidden";
            };

            const setOpenStyles = () => {
                dropdownBody.style.display = "flex";
                dropdownBody.style.height = "";
                dropdownBody.style.opacity = "1";
                dropdownBody.style.transform = "translateY(0)";
                dropdownBody.style.overflow = "visible";
            };

            // Ensure body matches current expanded state on init
            const isOpenOnInit = dropdown.getAttribute("aria-expanded") === "true";
            if (isOpenOnInit) setOpenStyles();
            else setClosedStyles();

            const openDropdown = () => {
                dropdown.setAttribute("aria-expanded", "true");

                if (prefersReducedMotion) {
                    setOpenStyles();
                    return;
                }

                removeExistingTransitionHandler();
                dropdownBody.style.display = "flex";
                dropdownBody.style.overflow = "hidden";
                dropdownBody.style.height = "0px";
                dropdownBody.style.opacity = "0";
                dropdownBody.style.transform = "translateY(-4px)";

                // Force layout so the browser acknowledges the "from" state
                dropdownBody.offsetHeight;

                const targetHeight = dropdownBody.scrollHeight;
                requestAnimationFrame(() => {
                    dropdownBody.style.height = `${targetHeight}px`;
                    dropdownBody.style.opacity = "1";
                    dropdownBody.style.transform = "translateY(0)";
                });

                dropdownBody._abTransitionHandler = (evt) => {
                    if (evt.target !== dropdownBody) return;
                    if (evt.propertyName !== "height") return;
                    dropdownBody.style.height = "";
                    dropdownBody.style.overflow = "visible";
                    dropdownBody.classList.remove("animating");
                    removeExistingTransitionHandler();
                };
                dropdownBody.addEventListener("transitionend", dropdownBody._abTransitionHandler);
            };

            const closeDropdown = () => {
                dropdown.setAttribute("aria-expanded", "false");

                if (prefersReducedMotion) {
                    setClosedStyles();
                    return;
                }

                removeExistingTransitionHandler();
                dropdownBody.style.overflow = "hidden";

                const startHeight = dropdownBody.getBoundingClientRect().height;
                dropdownBody.style.height = `${startHeight}px`;
                dropdownBody.style.opacity = "1";
                dropdownBody.style.transform = "translateY(0)";

                // Force layout so the browser acknowledges the "from" state
                dropdownBody.offsetHeight;

                requestAnimationFrame(() => {
                    dropdownBody.style.height = "0px";
                    dropdownBody.style.opacity = "0";
                    dropdownBody.style.transform = "translateY(-4px)";
                });

                dropdownBody._abTransitionHandler = (evt) => {
                    if (evt.target !== dropdownBody) return;
                    if (evt.propertyName !== "height") return;
                    setClosedStyles();
                    dropdownBody.classList.remove("animating");
                    removeExistingTransitionHandler();
                };
                dropdownBody.addEventListener("transitionend", dropdownBody._abTransitionHandler);
            };

            head.addEventListener("click", () => {
                const isOpen = dropdown.getAttribute("aria-expanded") === "true";

                // Prevent rapid clicking during animation
                if (dropdownBody.classList.contains("animating")) return;
                dropdownBody.classList.add("animating");

                if (!isOpen) openDropdown();
                else closeDropdown();
            });
        });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        createLayout();
        // mutationObserverFunction();
        clickFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && document.readyState === "complete" && q(".wrapper-section.flex.flex-col.gap-2\\.5"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
