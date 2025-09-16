/* 
https://www.figma.com/design/gRstDeTcFaKxrCReVHbMeh/BL-10-Blog-Work?node-id=26-2&p=f&t=g7MMjZOYSByPG8s3-0
https://www.bergerlawsc.com/library/10-ways-sc-buses-must-be-maintained-for-child-safety.cfm
https://www.bergerlawsc.com/library/in-the-news.cfm


control: https://marketer.monetate.net/control/preview/13087/ZOIEV7SN3KS01R8A681547H1YINEME5N/bl10-library-increase-scroll-depth
v1: https://marketer.monetate.net/control/preview/13087/D6GZFD5F9BNA03TRGWOR729X74UDT7DC/bl10-library-increase-scroll-depth
*/

(() => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "bergerlawsc",
        site_url: "https://www.bergerlawsc.com/",
        test_name: "BL10: [LIBRARY] Increase Scroll Depth-(2) SET UP TEST",
        page_initials: "AB-BL10",
        test_variation: 1,
        test_version: 0.0003,
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

    function waitForElement(predicate, callback, timer = 20000, frequency = 150) {
        if (timer <= 0) {
            return;
        } else if (predicate && predicate()) {
            callback();
        } else {
            setTimeout(() => waitForElement(predicate, callback, timer - frequency, frequency), frequency);
        }
    }

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }
    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function createTableOfContents() {
        const foundNodes = qq(".dss-content h2, .dss-content h3").filter((cItem) => cItem.textContent.trim().length > 0);

        const firstChild = foundNodes[0];
        const initialText = firstChild.textContent.split(".")?.[1] || firstChild.textContent;

        return /* HTML */ `
            <div class="ab-table-contents-container container">
                <div class="ab-table-contents-title">Table of Contents</div>
                <div class="ab-table-content-selection" data-state="closed">
                    <div class="ab-table-content-selected-item">
                        <span>1.1</span>
                        <span class="ab-ellipsis-two-lines">${initialText}</span>
                    </div>
                    <ul class="ab-table-content-list">
                        ${Array.from(foundNodes)
                            .map((item, index) => {
                                item.setAttribute("id", `section-${index + 1}`);
                                const txt = item.textContent.split(".")[1] || item.textContent;

                                return /* HTML */ `
                                    <li targetH3="#section-${index + 1}" class="ab-table-content-item" ${index === 0 ? "selected" : ""}>
                                        <span>1.${index + 1}</span>
                                        <span class=" ab-ellipsis-two-lines">${txt}</span>
                                    </li>

                                    ${foundNodes.length === 1
                                        ? /* HTML */ `
                                              <li targetH3="#section-${index + 1}" class="ab-table-content-item">
                                                  <span>1.${index + 1}</span>
                                                  <span class=" ab-ellipsis-two-lines">${txt}</span>
                                              </li>
                                          `
                                        : ""}
                                `;
                            })
                            .join("")}
                    </ul>
                </div>
            </div>
        `;
    }

    function createLayout() {
        const totalHeaders = qq(".dss-content h2, .dss-content h3").reduce((acc, cItem) => {
            if (cItem.textContent.trim().length > 0) {
                return acc + 1; // Only count if has text content
            }
            return acc;
        }, 0);

        q("#nav").insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-scroll-and-table-contents ${totalHeaders > 0 ? "" : "ab-scroll-and-table-contents--only-scroll"}">
                    <div class="ab-scroll-container" data-scroll="25"></div>
                    ${qq(".dss-content h2, .dss-content h3").length > 0 ? createTableOfContents() : ""}
                </div>
            `
        );
    }

    function getHeaderOffset() {
        const headerOffsetObj = {
            "(max-width: 575px)": 200,
            "(min-width: 576px) and (max-width: 991px)": 230,
            "(min-width: 992px)": 150,
        };

        const matchingQuery = Object.keys(headerOffsetObj).find((mediaQuery) => window.matchMedia(mediaQuery).matches);
        return matchingQuery ? headerOffsetObj[matchingQuery] : 150;
    }

    function autoSelectOnScroll() {
        const totalHeaders = qq(".dss-content h2, .dss-content h3").reduce((acc, cItem) => {
            if (cItem.textContent.trim().length > 0) {
                return acc + 1; // Only count if has text content
            }
            return acc;
        }, 0);

        const headerOffset = getHeaderOffset();
        const arr = [...qq(".ab-table-content-item")];

        const handleAutoSelect = () => {
            if (totalHeaders === 1) return;

            arr.forEach((cItem) => {
                const header = q(cItem.getAttribute("targeth3"));
                const top = header.getBoundingClientRect().top;

                if (top > 100 && top <= headerOffset && !cItem.hasAttribute("selected")) {
                    arr.forEach((item) => item.removeAttribute("selected"));
                    cItem.setAttribute("selected", "");
                    q(".ab-table-content-selected-item").innerHTML = cItem.innerHTML;
                }
            });
        };

        return { handleAutoSelect };
    }

    function getMileStoneFunctions() {
        const getScrollPercent = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            return (scrollTop / docHeight) * 100;
        };

        const closestMilestone = (percent) => {
            const milestones = [25, 50, 75, 100]; // scroll checkpoints
            return milestones.reduce((prev, curr) => (percent >= curr ? curr : prev), 0);
        };

        return { getScrollPercent, closestMilestone };
    }

    function updateProgressBar() {
        const selector = ".ab-scroll-container";
        const targetNode = q(selector);

        const { getScrollPercent, closestMilestone } = getMileStoneFunctions();
        const milestone_reached = { 25: false, 50: false, 75: false, 100: false };

        const percent = getScrollPercent();
        const milestone = closestMilestone(percent);

        let lastMilestone = null; // track last milestone crossed

        // console.log({ percent, milestone, lastMilestone });

        if (milestone !== lastMilestone && milestone !== 0) {
            lastMilestone = milestone;
        }

        if (milestone >= 25) {
            targetNode.setAttribute("data-scroll", milestone);
        }

        // Fire GA4 event when a new milestone is reached
        if (milestone === 25 && !milestone_reached[25]) {
            milestone_reached[25] = true;
            fireGA4Event("BL10_Scrolldepth", "25%");
        } else if (milestone === 50 && !milestone_reached[50]) {
            fireGA4Event("BL10_Scrolldepth", "50%");
            milestone_reached[50] = true;
        } else if (milestone === 75 && !milestone_reached[75]) {
            fireGA4Event("BL10_Scrolldepth", "75%");
            milestone_reached[75] = true;
        } else if (milestone === 100 && !milestone_reached[100]) {
            fireGA4Event("BL10_Scrolldepth", "100%");
            milestone_reached[100] = true;
        }
    }

    function throttle(func, limit) {
        let inThrottle;
        return function (...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    }

    function handleScrollActions() {
        const { handleAutoSelect } = autoSelectOnScroll();
        handleAutoSelect();
        updateProgressBar();
    }

    function handleScrollEvent() {
        const selector = ".ab-scroll-container";
        waitForElement(
            () => q(selector),
            () => {
                const throttledScrollHandler = throttle(handleScrollActions, 50);
                window.addEventListener("scroll", throttledScrollHandler);
            }
        );
    }

    function scrollToTargetItem(selector) {
        if (!selector) return;

        const targetElement = q(selector);
        const headerOffset = getHeaderOffset();

        window.scrollTo({
            top: targetElement.offsetTop - headerOffset,
            behavior: "smooth",
        });

        fireGA4Event("BL10_Tableofcontent", targetElement.textContent);
    }

    function handleShowHideSelection(action /* show, hide */) {
        const selectionContainer = q(".ab-table-content-selection");
        if (action === "show") {
            selectionContainer.setAttribute("data-state", "opened");
        } else if (action === "hide") {
            selectionContainer.setAttribute("data-state", "closed");
        }
    }

    function eventListeners() {
        const event_list = [
            {
                selector: ".ab-scroll-and-table-contents",
                event: "click",
                callback: (e) => e.preventDefault(),
            },
            {
                selector: ".ab-table-content-selection",
                event: "mouseenter",
                callback: (e) => {
                    if (window.innerWidth >= 1200) {
                        handleShowHideSelection("show");
                    }
                },
            },
            {
                selector: ".ab-table-content-selection",
                event: "mouseleave",
                callback: (e) => {
                    if (window.innerWidth >= 1200) {
                        handleShowHideSelection("hide");
                    }
                },
            },
            {
                selector: ".ab-table-content-selected-item",
                event: "click",
                callback: (e) => {
                    if (window.innerWidth < 1200) handleShowHideSelection("show");
                },
            },
            {
                selector: ".ab-table-content-item",
                event: "click",
                callback: (e) => {
                    if (e.target.hasAttribute("selected") && window.innerWidth < 1200) {
                        setTimeout(() => handleShowHideSelection("hide"), 50);
                        return;
                    }

                    if (!e.target.hasAttribute("selected")) {
                        const selectionContainer = q(".ab-table-content-selection");
                        const arr = [...qq(".ab-table-content-item")];
                        const selectedItem = q(".ab-table-content-item[selected]");
                        const cItem = e.target.closest(".ab-table-content-item");

                        if (selectedItem.getAttribute("targeth3") !== cItem.getAttribute("targeth3")) {
                            arr.forEach((el) => el.removeAttribute("selected"));
                            cItem.setAttribute("selected", "true");
                            q(".ab-table-content-selected-item").innerHTML = cItem.innerHTML;
                        }

                        if (arr.indexOf(cItem) !== 0) {
                            setTimeout(() => selectionContainer.setAttribute("data-state", "closed"), 50);
                        }

                        scrollToTargetItem(cItem.getAttribute("targetH3"));
                    }
                },
            },
        ];

        event_list.forEach(({ selector, event, callback }) => {
            waitForElement(
                () => selector && qq(selector).length > 0,
                () => {
                    const targetNodes = qq(selector);
                    targetNodes.forEach((node) => node.addEventListener(event, callback));
                }
            );
        });
    }

    function init() {

        const { page_initials, test_variation, test_version } = TEST_CONFIG;
        document.body.classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        createLayout();
        eventListeners();
        handleScrollEvent();
    }

    function hasAllTargetElements() {
        return !!(q(`body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`) && q("#nav") && q(".dss-content"));
    }

    waitForElement(hasAllTargetElements, init);
})();
