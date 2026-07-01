(async () => {
    const TEST_CONFIG = {
        page_initials: "AB-266",
        test_variation: 1,
        test_version: 0.0006,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    function fireHookAndLoopGa4AbTestEvent(dom_interaction_type = null, key_one = null, key_two = null, key_three = null, val_1 = null, val_2 = null, val_3 = null) {
        window.dataLayer = window.dataLayer || [];

        const eventData = {
            event: "ab_test_custom_event",
            dom_interaction_type,
            key_one,
            key_two,
            key_three,
            val_1,
            val_2,
            val_3,
        };

        console.log("fireHookAndLoopGa4AbTestEvent", eventData);
        window.dataLayer.push(eventData);

        return eventData;
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
        return [...document.querySelectorAll(s)];
    }

    const DATA = {
        "in stock": {
            icon: /* HTML */ `
                <svg class="in-stock" width="640" height="640" viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576ZM438 209.7C427.3 201.9 412.3 204.3 404.5 215L285.1 379.2L233 327.1C223.6 317.7 208.4 317.7 199.1 327.1C189.8 336.5 189.7 351.7 199.1 361L271.1 433C276.1 438 282.9 440.5 289.9 440C296.9 439.5 303.3 435.9 307.4 430.2L443.3 243.2C451.1 232.5 448.7 217.5 438 209.7Z"
                        fill="#008800"
                    />
                </svg>
            `,
            label: "In stock",
            tooltip_message: "",
        },
        "low stock": {
            icon: /* HTML */ `
                <svg class="low-stock" width="640" height="640" viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576ZM320 384C302.3 384 288 398.3 288 416C288 433.7 302.3 448 320 448C337.7 448 352 433.7 352 416C352 398.3 337.7 384 320 384ZM320 192C301.8 192 287.3 207.5 288.6 225.7L296 329.7C296.9 342.3 307.4 352 319.9 352C332.5 352 342.9 342.3 343.8 329.7L351.2 225.7C352.5 207.5 338.1 192 319.8 192H320Z"
                        fill="#FF9903"
                    />
                </svg>
            `,
            label: "Low stock",
            tooltip_message: "Low Stock: Available to order, but supply may be limited. Larger quantities may take additional time to fulfill.",
        },
        "available to order": {
            icon: /* HTML */ `
                <svg class="low-stock" width="640" height="640" viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576ZM320 384C302.3 384 288 398.3 288 416C288 433.7 302.3 448 320 448C337.7 448 352 433.7 352 416C352 398.3 337.7 384 320 384ZM320 192C301.8 192 287.3 207.5 288.6 225.7L296 329.7C296.9 342.3 307.4 352 319.9 352C332.5 352 342.9 342.3 343.8 329.7L351.2 225.7C352.5 207.5 338.1 192 319.8 192H320Z"
                        fill="#FF9903"
                    />
                </svg>
            `,
            label: "Available to Order",
            tooltip_message: "Available to Order: This item may be ordered now, but it is not currently available for immediate shipment. Fulfillment timing may vary.",
        },
    };

    let prevStatus = null;

    function createLayout(currentStatus) {
        if (!currentStatus) return;

        const productId = q('input[name="product"][value]')?.getAttribute('value') ?? null;

        if(currentStatus !== prevStatus) {
            fireHookAndLoopGa4AbTestEvent("stock_message_hover", 'experiment_id', 'product_id', 'stock_type', "38042", productId, currentStatus);
            prevStatus = currentStatus;
        }

        qq(".ab-stock-status-container")?.forEach((item) => item.remove());

        let toolTipMessage = DATA[currentStatus].tooltip_message;
        const leadTimeText = q("#backorder_lead_time")?.textContent ?? null;

        if (currentStatus === "available to order") {
            toolTipMessage += leadTimeText;
        }

        const targetNodes = qq("div:has(>.updated-stock-status)");
        targetNodes.forEach((targetNode) => {
            targetNode.insertAdjacentHTML(
                "beforeend",
                /* HTML */ `
                    <div class="ab-stock-status-container ab-stock-status-container--${currentStatus.split(" ").join("-")}">
                        <div class="ab-stock-status-icon">${DATA[currentStatus].icon}</div>
                        <div class="ab-stock-status-text">${DATA[currentStatus].label}</div>
                        ${toolTipMessage !== ""
                            ? `
                            <div class="ab-stock-status-text-tooltip-arrow"></div>
                            <div class="ab-stock-status-text-tooltip">
                            
                            <div class="ab-stock-status-text-tooltip-text">${toolTipMessage}</div></div>`
                            : ""}
                    </div>
                `,
            );
        });
    }

    function customEventListener() {
        window.addEventListener("configurable-selection-changed", (e) => {
            const currentStatus = e?.detail?.sstockMessage.toLowerCase().trim() ?? null;
            createLayout(currentStatus);
        });
    }

    function init() {
        if (window[page_initials] === true) return;

        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;

        const currentStatus = q(".updated-stock-status p").textContent.toLowerCase().trim();
        createLayout(currentStatus);
        customEventListener();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".updated-stock-status p")?.textContent && qq("div:has(>.updated-stock-status)"));
    }

    await waitForElementAsync(checkForItems);
    init();
})();
