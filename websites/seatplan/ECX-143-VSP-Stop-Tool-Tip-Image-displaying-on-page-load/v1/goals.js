(() => {
    console.log("EXP-143: VSP - Stop Tool Tip Image displaying on page load | GOALS GLOBAL JS");

    function waitForElement(predicate, callback, timer = 10000, frequency = 150) {
        if (timer <= 0) {
            console.warn(`Timeout reached while waiting for condition: ${predicate.toString()}`);
            return;
        } else if (predicate && predicate()) {
            callback();
        } else {
            setTimeout(() => {
                waitForElement(predicate, callback, timer - frequency, frequency);
            }, frequency);
        }
    }

    function q(selector, context) {
        return context ? context.querySelector(selector) : document.querySelector(selector);
    }

    function qq(selector, context) {
        return context ? [...context.querySelectorAll(selector)] : [...document.querySelectorAll(selector)];
    }

    function convPush(goal_name, goal_id) {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", goal_id]);
        console.log("Triggered Goal:", goal_name, goal_id);
    }

    const GOAL_LIST = [
        {
            goal_name: "EXP-143: All VSP Seat Map Clicks | JS",
            goal_id: "1004105704",
            predicate: () => qq(".seating-plan-availability-link, .sp-paragraph.btn-group-vertical, #seatmap-base-app").length === 3,
            callback: (goal_name, goal_id) => {
                const cb = (e) => {
                    convPush(goal_name, goal_id);
                    e.target.removeEventListener("click", cb);
                };

                const targetNodes = qq(".seating-plan-availability-link, .sp-paragraph.btn-group-vertical, #seatmap-base-app");
                targetNodes.forEach((node) => node.addEventListener("click", cb));
            },
        },
        {
            goal_name: "View Calendar Overlay | JS",
            goal_id: "100494719",
            predicate: () => q("#seat-reveal-panel"),
            callback: (goal_name, goal_id) => {
                const targetNode = q("#seat-reveal-panel");

                new MutationObserver((mutationList, observer) => {
                    if (q("#seat-reveal-panel .ticket-calendar")) {
                        convPush(goal_name, goal_id);
                        observer.disconnect();
                    }
                }).observe(targetNode, { attributes: true });
            },
        },
        {
            goal_name: "VSP | Open seat overlay | JS",
            goal_id: "100489963",
            predicate: () => q("#seat-reveal-panel"),
            callback: (goal_name, goal_id) => {
                const targetNode = q("#seat-reveal-panel");

                new MutationObserver((mutationList, observer) => {
                    if (q("#seat-reveal-panel.is-visible")) {
                        convPush(goal_name, goal_id);
                        observer.disconnect();
                    }
                }).observe(targetNode, { attributes: true });
            },
        },
        {
            goal_name: "EXP-143 Click Mobile Sticky CTA Button | JS",
            goal_id: "1004105711",
            predicate: () => q(".production-right-panel__sticky-container"),
            callback: (goal_name, goal_id) => {
                const selector = ".production-right-panel__sticky-container"
                const targetNode = q(selector);

                const cb = (e) => {
                    convPush(goal_name, goal_id);
                    e.target.closest(selector).removeEventListener("click", cb);
                };

                targetNode.addEventListener("click", cb);
            },
        },
        {
            goal_name: "EXP-143: Tool Tip View on Hover | JS",
            goal_id: "1004105705",
            predicate: () => q("#seatmap-base-app"),
            callback: (goal_name, goal_id) => {
                const targetNode = q("#seatmap-base-app");

                const cb = (e) => {
                    convPush(goal_name, goal_id);
                    e.target.removeEventListener("mouseenter", cb);
                };

                new MutationObserver((mutationList, observer) => {
                    mutationList[0].addedNodes.forEach((node) => {
                        if (node?.classList?.contains("seatplan-tooltip-info-outer") && !node?.classList?.contains(".seatplan-tooltip-info-outer--ab-on-load")) {
                            node.addEventListener("mouseenter", (e) => {
                                cb(e);
                                observer.disconnect();
                            });
                        }
                    });
                }).observe(targetNode, { childList: true });
            },
        },
    ];

    GOAL_LIST.forEach(({ goal_name, goal_id, predicate, callback }) => {
        waitForElement(predicate, () => {
            callback(goal_name, goal_id);
        });
    });
})();
