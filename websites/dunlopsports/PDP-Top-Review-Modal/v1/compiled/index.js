/* 
Ticket: https://trello.com/c/JeFHZwPS/4541-pdp-top-review-modal-dtm
Test container: https://app.optimizely.com/v2/projects/30347390156/experiments/4655644880404480/pages
Figma: https://www.figma.com/design/sDP3TPgMBmNNr4RZvdx4Kb/Dunlop-Sports-America?node-id=101-189&t=q0FXhNstxiR9NZF2-0
Preview link: https://us.dunlopsports.com/cleveland-golf/clubs/wedges/rtz/rtz-black-satin-wedge/MRTZBKS.html?optimizely_token=4f9123072cf44c1a8a972ebd3d2709841466bf12b523eed9c98ed23f30efb599&optimizely_x=5046240749027328&optimizely_x_audiences=5612293145231360&optimizely_preview_layer_ids=6333187299737600&optimizely_snippet=s3-30347390156&optimizely_embed_editor=false
QA Param : https://us.dunlopsports.com/cleveland-golf/clubs/wedges/rtz/rtz-black-satin-wedge/MRTZBKS.html?qa5=true
*/

(function () {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Dunlopsports",
        host: "https://us.dunlopsports.com",
        test_name: "PDP - Top Review Modal [DTM]",
        page_initials: "AB-PDP-TOP-REVIEW",
        test_variation: 1,
        test_version: 0.0002,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const DATA = {
        reviews: [
            {
                url: "/cleveland-golf/clubs/wedges/cbz/cbz-tour-satin-wedge/MCBZTS.html",
                review_header: "Great wedges!",
                review_description:
                    "The wedges perform great. They are easy to hit and have a smooth feel about them. I especially like the 50 degree the best. Every time I purchase a new Cleveland wedge I fall in love with it. Don't hesitate to get one!",
                reviewer_name: "bjacobs79",
            },
            {
                url: "/cleveland-golf/clubs/wedges/rtz/rtz-tour-satin-wedge/MRTZTS.html",
                review_header: "First RTZ",
                review_description:
                    "Ordered custom with Nippon shaft to match my ZXi 5's and it feels great ! The wedge is a little softer than my RTX6 wedges but the trajectory and distance is the same. Very happy with my purchase!",
                reviewer_name: "WEJJS",
            },
            {
                url: "/cleveland-golf/clubs/wedges/rtz/rtz-black-satin-wedge/MRTZBKS.html",
                review_header: "Amazing feel and spin",
                review_description:
                    "I've played a number of wedges and always come back to Vokey or Cleveland. With a recent upgrade of some old wedges and redo in the bag, I was hitting these more consistently with better feel and spin than any others out there at my independent fitting. Love them and can't wait to get out next spring with these.",
                reviewer_name: "Tyler",
            },
            {
                url: "/cleveland-golf/clubs/wedges/rtz/rtz-tour-rack-(raw)-wedge/MRTZTR.html",
                review_header: "Great wedge!",
                review_description:
                    "Excellent all-around playability. Looks great, spin is perfect, and I love the default swing weight. Solid feel, versatile, and the best wedge on the market right now. I also appreciate the tour-issue DG S400 as the default shaft.",
                reviewer_name: "J",
            },
            {
                url: "/cleveland-golf/clubs/wedges/rtx-6-zipcore/rtx-6-zipcore-tour-satin-wedge/MRTX6ZCTS.html",
                review_header: "Solid wedge with great feel",
                review_description:
                    "This wedge feels great right out of the box. Excellent feel, plenty of spin, and consistent performance on chips and pitches. It also feels great with a full swing. Definitely a quality upgrade for the short game.",
                reviewer_name: "David",
            },
            {
                url: "/srixon/clubs/irons/zxi5-irons/zxi5-irons/MZXI5IRN.html",
                review_header: "Incredible irons for a wide range of handicaps",
                review_description:
                    "The Srixon ZXi5 irons are easily the best set of irons I've owned. They are incredibly consistent, very forgiving for their category, and beautiful to look down on. It's amazing how much technology they've packed into these irons, all while keeping them sleek in appearance. The feel is wonderful, and there is enough feedback to know exactly where you hit the ball on the face to make adjustments. I will be playing these for years to come.",
                reviewer_name: "NJ",
            },
            {
                url: "/srixon/clubs/irons/zxi7-irons/zxi7-irons/MZXI7IRN.html",
                review_header: "ZXi7 are great. Definitely recommend them",
                review_description:
                    "I replaced my 4-year-old ZX7 iron set with the new ZXi7. The new clubs are fantastic. I did not think they could improve on the ZX7, but they found a way to do it. They feel softer than my old set and are definitely straighter and a bit more forgiving. I would say handicaps as high as 15–18 can easily play these fantastic-looking clubs.",
                reviewer_name: "TM",
            },
            {
                url: "/srixon/clubs/irons/zxi4-irons/zxi4-irons/MZXI4IRN.html",
                review_header: "Srixon does it again!",
                review_description:
                    "The new generation of ZX4 irons has further helped me improve my game. Ball launch is slightly better than my older ZX4, and I am even more confident hitting the longer irons.",
                reviewer_name: "Dreaming72",
            },
            {
                url: "/srixon/balls/z-star-series/z-star-diamond/z-star-diamond-golf-balls-24-pack/10376310.html",
                review_header: "An amazing golf ball",
                review_description:
                    "This ball is fast and it spins! It launches in a great window with all clubs. It also produces low spin with the driver and plenty of spin with irons and wedges. It does everything I want it to do and more. I'll be playing this ball for a while!",
                reviewer_name: "Burt",
            },
            {
                url: "/srixon/balls/z-star-series/z-star-diamond/z-star-diamond-golf-balls-24-pack/MZSTARD24PK.html",
                review_header: "My new summer game ball",
                review_description: "They are the best spinning balls I have ever had on the greens off of irons and wedges.",
                reviewer_name: "JT",
            },
            {
                url: "/xxio/clubs/mens-golf-clubs/xxio-13/xxio-13-driver/MX13D.html",
                review_header: "Longer drives, game changer!",
                review_description:
                    "Clearly a game changer. Hitting the ball off the tee with more distance (at least 10–20 yards). Misses still produce a long drive. When I hit it flush, the ball explodes off the face of the club and goes a mile. Very happy with my new XXIO 13 driver. Highly recommend.",
                reviewer_name: "Len",
            },
            {
                url: "/xxio/balls/xxio-rebound-drive-ii/xxio-rebound-drive-ii-golf-balls/10348035.html",
                review_header: "First hole-in-one",
                review_description: "Had my first hole-in-one using an XXIO driver and lime-yellow ball. Both work great!",
                reviewer_name: "Randy",
            },
            {
                url: "/xxio/balls/xxio-rebound-drive-ii/xxio-rebound-drive-ii-ladies-golf-balls/MXRDL2GB.html",
                review_header: "I would buy this product again and again",
                review_description: "I really liked this ball. Better than most balls I have tried.",
                reviewer_name: "LIVY",
            },
            {
                url: "/cleveland-golf/clubs/wedges/rtz-set-builder/rtz-wedge-set-builder/rtz-wedge-set.html",
                review_header: "Awesome green grabbing spin!",
                review_description:
                    "3rd set of the Cleveland wedges, love the feel of the KBS Steel, satin. New grooves are perfect for our hard-to-hold Bermuda grass. Would recommend these to anyone needing help stopping the ball on the green.",
                reviewer_name: "Pmoney",
            },
            {
                url: "/srixon/clubs/drivers/zxi-driver/zxi-driver/MZXIDRV.html",
                review_header: "Easy to hit and very forgiving",
                review_description:
                    "This has been a wonderful addition to the bag. I've found added confidence when teeing up, even in tight fairways. The design and build provide forgiveness throughout my round. I would buy this again.",
                reviewer_name: "Blake",
            },
        ],
    };

    function waitForElement(predicate, callback, timer = 20000, frequency = 150) {
        if (timer <= 0) {
            console.warn(`Timeout reached while waiting for condition: ${predicate.toString()}`);
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

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    function animate(targetElement, className, interval) {
        if (!targetElement) return;
        if (className.includes(".")) className.replace(".", "");
        targetElement.classList.add(className);
        setTimeout(() => targetElement.classList.remove(className), interval);
    }

    function handleModalView(action = "show") {
        const modalShowClass = `${page_initials}--modal-show`;
        const body = q("body");

        waitForElement(
            () => q(`.${page_initials}__modal`),
            () => {
                const modal = q(`.${page_initials}__modal`);

                if (action === "show" && !body.classList.contains(modalShowClass)) {
                    animate(modal, "slide-to-top", 300);
                    modal.classList.add("slide-to-top");
                    body.classList.add(modalShowClass);
                }

                if (action === "hide") {
                    animate(modal, "slide-to-bottom", 300);
                    setTimeout(() => body.classList.remove(modalShowClass), 300);
                }
            }
        );
    }

    function updateProgressAndHideModal() {
        waitForElement(
            () => q(`.${page_initials}--modal-show .${page_initials}__modal`),
            () => {
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
                        handleModalView("hide");
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
        );
    }

    function getReviewData() {
        const currentUrl = window.location.href;
        const matchedReview = DATA["reviews"].find(({ url }) => currentUrl.includes(url));

        if (!matchedReview) return null;

        return matchedReview;
    }

    function handleScroll() {
        const reviewsAnchor = q(`#reviews-anchor`);

        // Function to attempt scrolling
        const scrollToReviewsAnchor = (retryCount = 0) => {
            if (!reviewsAnchor) return;

            // Get current position
            const rect = reviewsAnchor.getBoundingClientRect();
            const currentScroll = window.scrollY || document.documentElement.scrollTop;
            const targetScroll = currentScroll + rect.top - 50; // Offset of 50px from top

            // Scroll to the element with offset
            window.scrollTo({
                top: targetScroll,
                behavior: "smooth",
            });

            // Check after scrolling if we reached the correct position
            setTimeout(() => {
                const newRect = reviewsAnchor.getBoundingClientRect();
                const newScroll = window.scrollY || document.documentElement.scrollTop;
                newScroll + newRect.top;

                // If element is not in the expected position (more than 50px off) and we haven't retried too many times
                if (Math.abs(newRect.top - 50) > 50 && retryCount < 3) {
                    scrollToReviewsAnchor(retryCount + 1);
                }
            }, 500); // Wait for smooth scroll to complete plus some buffer
        };

        // Start the scroll process
        scrollToReviewsAnchor();
    }

    function createLayout() {
        const { review_header, review_description } = getReviewData();

        const startRatingHTML = q("#pr-review-snippet") ? /* HTML */ `<div class="${page_initials}__modal__review-stars">${q("#pr-review-snippet").outerHTML}</div>` : "";

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
                    ${startRatingHTML}
                    <div class="${page_initials}__modal__review-header">${review_header}</div>
                    <div class="${page_initials}__modal__review-description">${review_description}</div>
                    <div class="${page_initials}__modal__review-see-more-cta">See More Reviews</div>
                </div>
            `
        );

        const clickEventName = isTouchEnabled() ? "touchend" : "click";
        q(`.${page_initials}__modal__close-cta`).addEventListener(clickEventName, (e) => handleModalView("hide"));
        q(`.${page_initials}__modal__review-see-more-cta`).addEventListener(clickEventName, handleScroll);
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        getReviewData();
        createLayout();
        handleModalView("show");
        updateProgressAndHideModal();
    }

    function checkForItems() {
        const hasMatchingReview = !!getReviewData();
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && q(".pr-rating-stars") && hasMatchingReview);
    }

    waitForElement(checkForItems, init);
})();
