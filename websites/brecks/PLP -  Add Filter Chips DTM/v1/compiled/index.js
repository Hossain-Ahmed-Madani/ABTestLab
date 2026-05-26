/* 
https://www.brecks.com/collections/summer_flower_bulbs?sort_by=manual

*/

(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Brecks.com",
        site_url: "https://www.brecks.com/",
        test_name: "PLP - Add Filter Chips [DTM]",
        page_initials: "AB-FILTER-CHIPS",
        test_variation: 1,
        test_version: 0.0002,
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
        return [...document.querySelectorAll(s)];
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

    function getCookie(key) {
        try {
            if (!key || typeof key !== "string") ;

            // Encode the key to handle special characters
            const encodedKey = encodeURIComponent(key);
            const cookies = `; ${document.cookie}`;

            // Find the cookie value
            const parts = cookies.split(`; ${encodedKey}=`);

            if (parts.length === 2) {
                const value = parts.pop().split(";").shift();
                return value ? decodeURIComponent(value) : null;
            }

            return null;
        } catch (error) {
            // console.error(`Error reading cookie "${key}":`, error);
            return null;
        }
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    function getFilterData() {
        const data = [];
        const PlantingZone = getCookie("PlantingZone");
        const matchingFilterNodeValue = qq('ul#filter-form__list-zone--sidebar input[type="checkbox"]').find((item) => PlantingZone && PlantingZone.includes(item.value))?.value ?? null;

        if (PlantingZone && matchingFilterNodeValue) {
            data.push({
                label: "Shop Your Zone: " + PlantingZone.toUpperCase(),
                targetNodeSelector: `ul#filter-form__list-zone--sidebar input[type="checkbox"][value="${matchingFilterNodeValue}"]`,
            });
        }

        // if (q(`ul#filter-form__list-new-products--sidebar input[type="checkbox"][value="Yes"]`)) {
        //     data.push({
        //         label: "New Arrivals",
        //         targetNodeSelector: `ul#filter-form__list-new-products--sidebar input[type="checkbox"][value="Yes"]`,
        //     });
        // }

        if (q(`ul#filter-form__list-shipping-season--sidebar input[type="checkbox"][value="Fall"]`)) {
            data.push({
                label: "Ships Now",
                targetNodeSelector: `ul#filter-form__list-shipping-season--sidebar input[type="checkbox"][value="Fall"]`,
            });
        }

        qq(`ul#filter-form__list-usage--sidebar input[type="checkbox"]`)?.forEach((item) =>
            data.push({
                label: item.getAttribute("value"),
                targetNodeSelector: `ul#filter-form__list-usage--sidebar input[type="checkbox"][value="${item.getAttribute("value")}"]`,
            }),
        );

        // console.log("DATA", data);

        return data;
    }

    function createLayout() {
        const filterData = getFilterData();
        if (!filterData.length) return;

        const insertionConfig = {
            "(max-width: 990.5px)": {
                selector: ".section-inner.section-inner--full-width:has(>.collection__inner)",
                insertPosition: "afterbegin",
            },
            "(min-width: 991px)": {
                selector: ".filter-topbar__sidebar-toggle-wrapper",
                insertPosition: "afterend",
            },
        };

        const matchedQuery = Object.keys(insertionConfig).find((query) => window.matchMedia(query).matches);
        const { selector, insertPosition } = insertionConfig[matchedQuery] ?? {};
        if (!selector) return;

        q(selector).insertAdjacentHTML(
            insertPosition,
            /* HTML */ `
                <div class="ab--filter-chips-wrap">
                    <div class="ab--filter-chips">
                        ${filterData
                            .map(
                                ({ label, targetNodeSelector }) => /* HTML */ `
                                    <button
                                        type="button"
                                        class="ab--filter-chip ${q(targetNodeSelector)?.checked ? "ab--chip-active" : ""}"
                                        data-selector="${encodeURIComponent(targetNodeSelector)}"
                                    >
                                        <span class="ab--chip-label">${label}</span>
                                    </button>
                                `,
                            )
                            .join("")}
                    </div>
                </div>
            `,
        );
    }

    function updateLayout() {
        qq(".ab--filter-chip").forEach((button) => {
            const targetNodeSelector = decodeURIComponent(button.dataset.selector);
            const targetNode = q(targetNodeSelector);

            if (targetNode.checked) {
                button.classList.add("ab--chip-active");
            } else {
                button.classList.remove("ab--chip-active");
            }
        });
    }

    function mutationObserverFunction() {
        const targetNode = q(".filter-sidebar");
        const debouncedUpdate = debounce(updateLayout, 150);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: false });
    }

    function dragScrollFunction() {
        if (!window.matchMedia("(min-width: 991px)").matches) return;
        if (isTouchEnabled()) return;

        const el = q(".ab--filter-chips");
        if (!el) return;

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;
        let hasDragged = false;
        let velocity = 0;
        let lastX = 0;
        let lastTime = 0;
        let rafId = null;

        const DRAG_THRESHOLD = 5;
        const FRICTION = 0.92; // velocity multiplier per frame (~60fps decay)
        const MIN_VELOCITY = 0.3; // px/frame below which momentum stops
        const VELOCITY_SCALE = 16; // normalise raw px/ms to px/frame at ~60fps

        function cancelMomentum() {
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
        }

        function applyMomentum() {
            velocity *= FRICTION;
            if (Math.abs(velocity) < MIN_VELOCITY) {
                velocity = 0;
                rafId = null;
                return;
            }
            el.scrollLeft -= velocity;
            rafId = requestAnimationFrame(applyMomentum);
        }

        function endDrag() {
            isDown = false;
            el.classList.remove("ab--is-dragging");
            if (hasDragged && Math.abs(velocity) > MIN_VELOCITY) {
                rafId = requestAnimationFrame(applyMomentum);
            }
        }

        el.addEventListener("mousedown", (e) => {
            cancelMomentum();
            isDown = true;
            hasDragged = false;
            velocity = 0;
            startX = e.pageX - el.getBoundingClientRect().left;
            scrollLeft = el.scrollLeft;
            lastX = e.pageX;
            lastTime = performance.now();
            el.classList.add("ab--is-dragging");
        });

        el.addEventListener("mouseleave", () => {
            if (!isDown) return;
            endDrag();
        });

        el.addEventListener("mouseup", () => {
            if (!isDown) return;
            endDrag();
        });

        el.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();

            const now = performance.now();
            const dt = now - lastTime;
            const dx = e.pageX - lastX;

            // EMA keeps velocity smooth — downweights noisy single-frame spikes
            if (dt > 0) {
                const raw = (dx / dt) * VELOCITY_SCALE;
                velocity = velocity * 0.4 + raw * 0.6;
            }

            lastX = e.pageX;
            lastTime = now;

            const x = e.pageX - el.getBoundingClientRect().left;
            const delta = x - startX;
            if (Math.abs(delta) > DRAG_THRESHOLD) hasDragged = true;
            el.scrollLeft = scrollLeft - delta;
        });

        // Suppress chip clicks that were actually drag gestures
        el.addEventListener(
            "click",
            (e) => {
                if (hasDragged) {
                    e.stopImmediatePropagation();
                    hasDragged = false;
                }
            },
            true,
        );
    }

    function clickFunction() {
        q(".ab--filter-chips").addEventListener("click", (e) => {
            const button = e.target.closest(".ab--filter-chip");

            if (button) {
                button.classList.toggle("ab--chip-active");
                const targetNodeSelector = decodeURIComponent(button.dataset.selector);
                const targetNode = q(targetNodeSelector);
                targetNode?.click();
            }
        });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();

        waitForElementAsync(() => q(".ab--filter-chips-wrap"))
            .then(() => {
                clickFunction();
                dragScrollFunction();
                mutationObserverFunction();
            })
            .catch(console.warn);
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".collection__inner") && q(".filter-form__content .filter-form__group"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
