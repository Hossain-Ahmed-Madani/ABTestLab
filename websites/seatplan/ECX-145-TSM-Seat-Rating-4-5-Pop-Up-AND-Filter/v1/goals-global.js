(function customGoalJS(timer = 10000, frequency = 150) {
    if (!document.body) {
        setTimeout(() => customGoalJS(timer - frequency, frequency), frequency);
        return;
    }

    async function waitForPromise(predicate) {
        return new Promise((resolve, reject) => {
            if (typeof predicate === "function" && predicate()) {
                return resolve();
            }

            new MutationObserver((_, observer) => {
                if (typeof predicate === "function" && predicate()) {
                    resolve();
                    observer.disconnect();
                }
            }).observe(document.body, { childList: true, subtree: true });
        });
    }

    function viewSeatOverlayGaolJS() {
        waitForPromise(() => document.querySelector("#seat-reveal-panel.reveal-panel.is-visible")).then(() => {
            console.log("Goal: EXP-684 View Seat Overlay | JS");
            window._conv_q = window._conv_q || [];
            _conv_q.push(["triggerConversion", "1004103518"]);
        });
    }

    function clickOnShowBestSeats() {
        waitForPromise(() => document.querySelectorAll(".basket-empty-mobile__button, .c-seatmap-booking-app__best-seats-btn.sp-button").length === 2).then(() => {
            document.querySelectorAll(".basket-empty-mobile__button, .c-seatmap-booking-app__best-seats-btn.sp-button").forEach((elem) => {
                elem.addEventListener("click", (e) => {
                    console.log("Goal: TSM Show Best Seats CTA | JS");
                    window._conv_q = window._conv_q || [];
                    _conv_q.push(["triggerConversion", "1004100308"]);
                });
            });
        });
    }

    function clickOnOfferPopUp() {
        waitForPromise(() => document.querySelector(".sp-tsm-sticky-filter__accordion")).then(() => {
            document.querySelector(".sp-tsm-sticky-filter__accordion").addEventListener("click", (e) => {
                window._conv_q = window._conv_q || [];

                if (e.target.closest(".sp-accordion-sticky__header")) {
                    const targetNode = document.querySelector(".sp-tsm-sticky-filter__accordion");

                    if (!targetNode.classList.contains("sp-accordion-sticky--open")) {
                        console.log("Goal: EXP-684 Click Collapse Offers Pop Up | JS");
                        _conv_q.push(["triggerConversion", "1004103623"]);
                    } else {
                        console.log("Goal: EXP-684 Click Expand Offers Pop Up | JS");
                        _conv_q.push(["triggerConversion", "1004103622"]);
                    }
                }

                if (e.target.closest(".sp-tsm-sticky-filter__button")) {
                    const targetNode = document.querySelector(".sp-tsm-sticky-filter__button");

                    if (!targetNode.classList.contains("sp-tsm-sticky-filter__button--active")) {
                        console.log("Goal: EXP-684 Click Offer Filter OFF | JS");
                        _conv_q.push(["triggerConversion", "1004103715"]);
                    } else {
                        console.log("Goal: EXP-684 Click Offer Filter ON | JS");
                        _conv_q.push(["triggerConversion", "1004103716"]);
                    }
                }
            });
        });
    }

    viewSeatOverlayGaolJS();
    clickOnShowBestSeats();
    clickOnOfferPopUp();
})();
