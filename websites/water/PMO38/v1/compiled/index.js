/* 

URL: https://order.water.com/checkout/cart/
Figma: https://www.figma.com/design/BhhbSpGPx3ABY1J6OUa8Nd/PMO38---CART--Clean-Up-Order-Summary?node-id=9-82&t=Az29v74pNVnOwjFj-0
Test container: https://marketer.monetate.net/control/a-899aac64/p/water.com/experience/2084113#

Preview:
Control: https://marketer.monetate.net/control/preview/12416/BWOH2TRBHGKNG1KRP6VKOA7OL4MN1X7T/pmo38-cart-clean-up-order-summary
V1:  https://marketer.monetate.net/control/preview/12416/JHVT2XOPCYQ1FZD4SIE3S1P4B2SOFBIL/pmo38-cart-clean-up-order-summary


Preview including all experiences:
Control: https://marketer.monetate.net/control/preview/12416/7PC0TFU4WQCHJEZDNDWWSMTPM64DHQQO/pmo38-cart-clean-up-order-summary
V1: https://marketer.monetate.net/control/preview/12416/4U2LY75MCPFIYNHX7K59DJYJ8GC01JCY/pmo38-cart-clean-up-order-summary

*/

(async () => {
    const TEST_ID = "PMO38";
    const VARIANT_ID = "V1"; /* control, V1 */

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
        project: "Water",
        site_url: "https://order.water.com",
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
                d="M0.140238 1.08712C-0.0599864 0.825263 -0.0458649 0.439249 0.182964 0.195163C0.411794 -0.0489224 0.77368 -0.0639854 1.01917 0.149589L1.06678 0.195163L5 4.39062L8.93322 0.195163L8.98083 0.149588C9.22632 -0.0639858 9.58821 -0.0489228 9.81704 0.195163C10.0459 0.439249 10.06 0.825262 9.85976 1.08712L9.81704 1.1379L5.44191 5.80473C5.19782 6.06509 4.80218 6.06509 4.55809 5.80473L0.182964 1.1379L0.140238 1.08712Z"
                fill="#0067C3"
            />
        </svg> `,
    };

    function fireGA4Event(eventName, eventLabel = "") {
        console.log("fireGA4Event", eventName, eventLabel);

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

    function parseCurrency(val) {
        if (!val) return 0;
        const num = parseFloat(String(val).replace(/[^0-9.\-]/g, ""));
        return isNaN(num) ? 0 : num;
    }

    function getSum(...args) {
        const sum = args.reduce((sum, arg) => sum + parseCurrency(arg), 0);
        return sum.toFixed(2);
    }

    function getOrderSummaryData() {
        const dataObj = {
            "one-time-purchase-total": "$0.00",
            "one-time-purchase": {
                "one-time products": "$0.00",
                "one-time refundable deposit fee": "$0.00",
            },
            "recurring-charges-total": "$0.00",
            "recurring charges": {
                "recurring products": "$0.00",
                delivery: "$0.00",
            },
            others: {},
            "estimated credit card fee": "$0.00",
            taxes: "$0.00",
            "estimated total": "$0.00",
        };

        qq(".wrapper-section.flex.flex-col.gap-2\\.5 .wrapper-totals-item").forEach((item) => {
            const label = q(item, "span[x-text='segment.label']")?.textContent?.toLowerCase().trim() ?? "";
            const value = q(item, "span.text-nowrap")?.textContent?.trim() ?? "";

            if (!label) return;

            if (label.includes("one-time")) {
                dataObj["one-time-purchase"][label] = value;
            } else if (label.includes("recurring") || label.includes("delivery")) {
                dataObj["recurring charges"][label] = value;
            } else if (label.includes("estimated credit card fee") || label.includes("taxes")) {
                dataObj[label] = value;
            } else {
                dataObj["others"][label] = value;
            }
        });

        dataObj["one-time-purchase-total"] = `$${getSum(...Object.values(dataObj["one-time-purchase"]))}`;
        dataObj["recurring-charges-total"] = `$${getSum(...Object.values(dataObj["recurring charges"]))}`;
        dataObj["estimated total"] = q(".wrapper-section.flex.flex-col.gap-2\\.5 .wrapper-section__total  .flex.items-end.flex-col .font-semibold span")?.textContent?.trim() ?? "";

        return dataObj;
    }

    function updateRow(key, value) {
        const selector = `div[ab-col-label="${key}"]`;
        const targetNode = q(selector);
        if (!targetNode) return;
        const parentNode = targetNode.parentNode;
        targetNode.innerText = value;

        if (parentNode.hasAttribute("others") && parseCurrency(value) === 0) {
            parentNode.classList.add("hidden");
            return;
        }

        parentNode.classList.remove("hidden");
    }

    function updateLayout() {
        if (!q(".ab-summary-wrapper")) return;

        const dataObj = getOrderSummaryData();

        Object.keys(dataObj).forEach((key) => {
            const value = dataObj[key];

            if (typeof value !== "object" || value === null) {
                updateRow(key, value);
                return;
            }

            if (typeof value === "object") {
                Object.keys(value).forEach((nestedKey) => {
                    updateRow(nestedKey, value[nestedKey]);
                });
            }
        });
    }

    function createLayout() {
        if (q(".ab-summary-wrapper")) return;

        const dataObj = getOrderSummaryData();

        q(".wrapper-section.flex.flex-col.gap-2\\.5").insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-summary-wrapper flex flex-col">
                    <div class="ab-summary-dropdown-container flex flex-col">
                        <div class="ab-summary-dropdown flex flex-col" aria-expanded="false">
                            <div class="ab-summary-dropdown__head">
                                <div class="ab-summary-row flex justify-between">
                                    <div class="ab-txt-lg text-left text-nowrap">One-time Purchase</div>
                                    <div class="ab-txt-lg text-right uppercase ml-auto" ab-col-label="one-time-purchase-total">${dataObj["one-time-purchase-total"]}</div>
                                    <div class="ab-summary-dropdown__arrow flex justify-end items-center">${ASSETS["down_arrow_svg"]}</div>
                                </div>
                            </div>
                            <div class="ab-summary-dropdown__body flex flex-col">
                                <div class="ab-summary-row flex justify-between">
                                    <div class="ab-txt-regular text-left text-nowrap">One-Time Products</div>
                                    <div class="ab-txt-regular text-right uppercase" ab-col-label="one-time products">${dataObj["one-time-purchase"]["one-time products"]}</div>
                                </div>
                                <div class="ab-summary-row flex justify-between">
                                    <div class="ab-txt-regular text-left text-nowrap flex items-center">
                                        <span>One-Time Refundable Deposit Fee</span>
                                        <span class="ab-summary-more-info flex justify-center items-center">${ASSETS["more_info_svg"]}</span>
                                    </div>
                                    <div class="ab-txt-regular text-right uppercase" ab-col-label="one-time refundable deposit fee">
                                        ${dataObj["one-time-purchase"]["one-time refundable deposit fee"]}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ab-summary-dropdown flex flex-col" aria-expanded="false">
                            <div class="ab-summary-dropdown__head">
                                <div class="ab-summary-row flex justify-between">
                                    <div class="ab-txt-lg text-left text-nowrap">Recurring Charges</div>
                                    <div class="ab-txt-lg text-right uppercase ml-auto" ab-col-label="recurring-charges-total">${dataObj["recurring-charges-total"]}</div>
                                    <div class="ab-summary-dropdown__arrow flex justify-end items-center">${ASSETS["down_arrow_svg"]}</div>
                                </div>
                            </div>
                            <div class="ab-summary-dropdown__body flex flex-col">
                                <div class="ab-summary-row flex justify-between">
                                    <div class="ab-txt-regular text-left text-nowrap">Recurring Products</div>
                                    <div class="ab-txt-regular text-right uppercase" ab-col-label="recurring products">${dataObj["recurring charges"]["recurring products"]}</div>
                                </div>
                                <div class="ab-summary-row flex justify-between">
                                    <div class="ab-txt-regular text-left text-nowrap flex items-center">Delivery</div>
                                    <div class="ab-txt-regular text-right uppercase" ab-col-label="delivery">${dataObj["recurring charges"]["delivery"]}</div>
                                </div>
                            </div>
                        </div>

                        <div class="ab-wrapper-section__total flex flex-col justify-between">
                            ${dataObj["others"] && Object.keys(dataObj["others"]).length > 0
                                ? /* HTML */ `
                                      <div class="ab-summary-row-others flex flex-col justify-between">
                                          ${Object.keys(dataObj["others"])
                                              .map(
                                                  (key) => /* HTML */ `
                                                      <div class="ab-summary-row flex justify-between ${parseCurrency(dataObj["others"][key]) === 0 ? "hidden" : ""}" others>
                                                          <div class="ab-txt-regular text-left text-nowrap capitalize">${key}</div>
                                                          <div class="ab-txt-regular text-right uppercase" ab-col-label="${key}">${dataObj["others"][key]}</div>
                                                      </div>
                                                  `,
                                              )
                                              .join("")}
                                      </div>
                                  `
                                : ""}
                            <div class="ab-summary-row flex justify-between">
                                <div class="ab-txt-regular text-left text-nowrap">Estimated Credit Card Fee</div>
                                <div class="ab-txt-regular text-right uppercase" ab-col-label="estimated credit card fee">${dataObj["estimated credit card fee"]}</div>
                            </div>
                            <div class="ab-summary-row flex justify-between">
                                <div class="ab-summary-label ab-txt-regular text-left text-nowrap">Taxes</div>
                                <div class="ab-summary-value ab-txt-regular text-right text-nowrap uppercase" ab-col-label="taxes">${dataObj["taxes"]}</div>
                            </div>
                            <div class="ab-summary-row ab-summary-row--total flex justify-between">
                                <div class="ab-summary-label ab-txt-lg text-left text-nowrap">Estimated Total</div>
                                <div class="ab-summary-value flex flex-col items-end">
                                    <div class="ab-txt-lg text-right text-nowrap uppercase" ab-col-label="estimated total">${dataObj["estimated total"]}</div>
                                    <div class="ab-txt-sm text-right text-nowrap">Billed on the first invoice</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
        );
    }

    let observer;

    function mutationObserverFunction() {
        const targetNode = q(".wrapper-section.flex.flex-col.gap-2\\.5:not(.ab-mutation-added)");
        if (!targetNode) return;

        targetNode.classList.add("ab-mutation-added");
        const debouncedUpdate = debounce(updateLayout, 150);
        const observer = new MutationObserver(debouncedUpdate);
        observer.observe(targetNode, { childList: true, subtree: true, attributes: true, characterData: true });
        return observer;
    }

    function clickFunction() {
        qq(".ab-summary-dropdown__head").forEach((item) => {
            const dropdown = item.parentNode;
            item.addEventListener("click", () => {
                fireGA4Event("PMO38_SummaryAccordion", q(item, ".text-left").textContent);
                const isOpen = dropdown.getAttribute("aria-expanded") === "true";
                dropdown.setAttribute("aria-expanded", !isOpen);
            });
        });

        q("button.btn.btn-primary.btn-size-default.btm-size-full.shadow-btn").addEventListener("click", (e) => {
            fireGA4Event("PMO38_CheckoutCTAClick", "Proceed to Checkout");
        });

        q(".ab-summary-more-info").addEventListener("click", (e) => q(".wrapper-summary-totals__inner .cursor-pointer.modal-v2__trigger__ready")?.click());
    }

    function handleLocationChanges() {
        if (window.location.pathname === "/checkout/cart/") {
            init_PMO38();
        } else {
            window[page_initials] = false;
            document.body.classList.remove(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
            q(".ab-summary-wrapper")?.remove();
            observer?.disconnect();
            observer = null;
        }
    }

    function urlObserver() {
        const debouncedChanges = debounce(handleLocationChanges, 150);

        const originalPushState = history.pushState;
        history.pushState = function () {
            originalPushState.apply(history, arguments);
            window.dispatchEvent(new Event("pushstate"));
        };

        // Listen for back/forward button clicks
        window.addEventListener("popstate", function (event) {
            debouncedChanges();
        });

        window.addEventListener("pushstate", function () {
            debouncedChanges();
        });
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            document.readyState === "complete" &&
            q(".wrapper-section.flex.flex-col.gap-2\\.5") &&
            q("button.btn.btn-primary.btn-size-default.btm-size-full.shadow-btn")
        );
    }

    async function init_PMO38() {
        if (window[page_initials] === true) return;

        try {
            await waitForElementAsync(checkForItems);

            window[page_initials] = true;
            q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

            console.log(TEST_CONFIG);

            createLayout();
            clickFunction();
            observer = mutationObserverFunction();
        } catch (error) {
            return false;
        }
    }

    init_PMO38();
    urlObserver();
})();
