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

    ASSETS = {
        cross_svg: /* HTML */ `<svg class="sc-1uf0igr-1 fjHZYk" xmlns="http://www.w3.org/2000/svg" width="28" height="28" focusable="false" viewBox="0 0 28 28">
            <path stroke="currentColor" stroke-linecap="round" d="M3 13L13 3m0 10L3 3"></path>
        </svg>`,
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
            animate(modal, "slide-to-top", 300);
            modal.classList.add("slide-to-top");
            body.classList.add(modalShowClass);
            document.addEventListener("touchmove", preventScroll, { passive: false });
        }

        if (action === "hide") {
            animate(modal, "slide-to-bottom", 300);
            setTimeout(() => body.classList.remove(modalShowClass), 300);
            document.removeEventListener("touchmove", preventScroll);
        }
    }

    async function updateProgressAndHideModal() {
        await waitForElementAsync(() => q(`.${page_initials}--modal-show .${page_initials}__modal`));

        const targetNode = q(`.${page_initials}__modal__head__progress-value`);
        const modalElement = q(`.${page_initials}--modal-show .${page_initials}__modal`);

        if (!targetNode || !modalElement) return;

        const duration = 8000;
        let isPaused = false;
        let remainingTime = duration;
        let transitionTimeout = null;
        let isAnimating = false;

        // Set up CSS for smooth transition
        targetNode.style.transition = `width ${duration}ms linear`;
        targetNode.style.width = "0%";

        // Force reflow to ensure transition starts from 0
        void targetNode.offsetWidth;

        // Pause/Resume handlers
        const pauseAnimation = () => {
            if (!isAnimating || isPaused) return;

            isPaused = true;

            // Get computed style to calculate current progress
            const computedWidth = parseFloat(getComputedStyle(targetNode).width);
            const containerWidth = targetNode.parentElement.clientWidth;
            const progress = computedWidth / containerWidth;

            // Calculate remaining time
            remainingTime = duration * (1 - progress);

            // Pause the transition
            targetNode.style.transition = "none";
            targetNode.style.width = `${progress * 100}%`;

            // Clear any pending timeouts
            if (transitionTimeout) {
                clearTimeout(transitionTimeout);
                transitionTimeout = null;
            }
        };

        const resumeAnimation = () => {
            if (!isPaused) return;

            isPaused = false;

            // Force reflow before starting new transition
            void targetNode.offsetWidth;

            // Start new transition with remaining time
            targetNode.style.transition = `width ${remainingTime}ms linear`;
            targetNode.style.width = "100%";

            // Set timeout to hide modal when transition completes
            transitionTimeout = setTimeout(() => {
                handleModalView("hide");
                cleanup();
            }, remainingTime);
        };

        // Event listeners
        modalElement.addEventListener("mouseenter", pauseAnimation);
        modalElement.addEventListener("mouseleave", resumeAnimation);

        // Mobile touch events
        modalElement.addEventListener("touchstart", (e) => {
            pauseAnimation();
            e.preventDefault();
        });

        modalElement.addEventListener("touchend", (e) => {
            resumeAnimation();
            e.preventDefault();
        });

        // Start animation
        isAnimating = true;
        targetNode.style.width = "100%";

        // Set timeout to hide modal
        transitionTimeout = setTimeout(() => {
            if (!isPaused) {
                handleModalView("hide")();
                cleanup();
            }
        }, duration);

        // Cleanup function
        const cleanup = () => {
            isAnimating = false;

            // Remove event listeners
            modalElement.removeEventListener("mouseenter", pauseAnimation);
            modalElement.removeEventListener("mouseleave", resumeAnimation);
            modalElement.removeEventListener("touchstart", pauseAnimation);
            modalElement.removeEventListener("touchend", resumeAnimation);

            // Clear timeout
            if (transitionTimeout) {
                clearTimeout(transitionTimeout);
                transitionTimeout = null;
            }
        };
    }

    function createLayout() {
        q("body").insertAdjacentHTML(
            "afterbegin",
            /* HTML */ `
                <div class="${page_initials}__modal">
                    <div class="${page_initials}__modal__top">
                        <div class="${page_initials}__modal__head__progress">
                            <div class="${page_initials}__modal__head__progress-value" style="width:0%;"></div>
                        </div>
                        <div class="${page_initials}__modal__close-cta"></div>
                    </div>
                    <div class="${page_initials}__modal__review-stars">${q("#pr-review-snippet").outerHTML}</div>
                    <div class="${page_initials}__modal__review-header">Great wedges!</div>
                    <div class="${page_initials}__modal__review-description">
                        The wedges perform great. They are easy to hit and have a smooth feel about them. I especially like the 50 degree the best. Every time I purchase a new Cleveland
                        wedge I fall in love with it. Don't hesitate to get one!
                    </div>
                    <a href="#" class="${page_initials}__modal__review-see-more-cta"> See More Reviews </a>
                </div>
            `
        );

        q(`.${page_initials}__modal__close-cta`).addEventListener("click", (e) => {
            handleModalView("hide");
        });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
        handleModalView("show");
        updateProgressAndHideModal();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && q(".pr-rating-stars"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
