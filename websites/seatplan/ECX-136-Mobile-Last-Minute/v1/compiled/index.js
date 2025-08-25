(() => {
    const TEST_CONFIG = {
        page_initials: "AB-ECX-136",
        test_variation: 1,
        test_version: 0.0003,
    };

    function waitForElement(predicate, callback, timer = 10000, frequency = 100) {
        try {
            if (timer <= 0) {
                throw new Error(`Timeout reached while waiting for condition: ${predicate.toString()}`);
            } else if (predicate && predicate()) {
                callback();
            } else {
                setTimeout(() => {
                    waitForElement(predicate, callback, timer - frequency, frequency);
                }, frequency);
            }
        } catch (error) {
            console.warn(error);
            return;
        }
    }

    function createLayout() {
        const selectElement = document.querySelector("#last-minute-day-select");

        document.querySelector(".last-minute__date-select").insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-last-minute">
                    <button class="ab-last-minute__button ab-last-minute__button--disabled">
                        <span class="ab-last-minute__button-icon sp-icon sp-icon-chevron-left"></span>
                    </button>
                    <div class="ab-last-minute__date-heading" value="${selectElement.value}">${selectElement.querySelector("option[selected]").innerText}</div>
                    <button class="ab-last-minute__button">
                        <span class="ab-last-minute__button-icon sp-icon sp-icon-chevron-right"></span>
                    </button>
                </div>
            `
        );
    }

    function hideTableWithNoTime() {
        const selectedDate = document.querySelector("#last-minute-day-select").value;

        document.querySelectorAll(`.sp-table__cell.last-minute__day-col[data-date='${selectedDate}']`).forEach((item) => {
            const targetNode = item.parentNode;
            if (item.querySelector("div").innerText === "-") {
                targetNode.classList.add("ab-hidden");
            } else {
                targetNode.classList.remove("ab-hidden");
            }
        });
    }

    function fireConvertGoal() {
        console.log("Trigger Goal: ECX-136: Last Minute - Change Date | JS");
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "1004103971"]);
    }

    function handleLastMinuteSelectOnchange() {
        const { selectElement } = getLastMinuteSelectFunctionalities();
        selectElement.addEventListener("change", (e) => {
            hideTableWithNoTime();
            fireConvertGoal();
            updateLayout();
        });
    }

    function getLastMinuteSelectFunctionalities() {
        const selectElement = document.querySelector("#last-minute-day-select");

        function getCurrentOptionElement() {
            return document.querySelector(`#last-minute-day-select option[value='${selectElement.value}']`);
        }
        function getCurrentOptionIndex() {
            return selectElement.selectedIndex;
        }
        function getTotalOptions() {
            return selectElement.options.length;
        }

        function dispatchOnchangeEvent(currOption) {
            document.querySelectorAll(`#last-minute-day-select option`).forEach((item) => item.removeAttribute("selected"));
            selectElement.value = currOption.value;
            selectElement.selectedIndex = currOption.index;
            currOption.setAttribute("selected", "selected");
            const event = new Event("change", { bubbles: true });
            selectElement.dispatchEvent(event);
        }

        function selectPreviousDate() {
            const currentOptionElement = getCurrentOptionElement();
            if (!currentOptionElement.previousElementSibling) {
                return;
            }

            dispatchOnchangeEvent(currentOptionElement.previousElementSibling);
        }

        function selectNextDate() {
            const currentOptionElement = getCurrentOptionElement();

            if (!currentOptionElement.nextElementSibling) {
                return;
            }
            dispatchOnchangeEvent(currentOptionElement.nextElementSibling);
        }

        function selectSecondDate() {
            dispatchOnchangeEvent(document.querySelector(`#last-minute-day-select option:nth-child(2)`));
        }

        return {
            selectElement,
            getCurrentOptionElement,
            getCurrentOptionIndex,
            getTotalOptions,
            dispatchOnchangeEvent,
            selectPreviousDate,
            selectNextDate,
            selectSecondDate,
        };
    }

    function updateLayout() {
        const { getCurrentOptionElement, getTotalOptions, getCurrentOptionIndex } = getLastMinuteSelectFunctionalities();

        const targetNode = document.querySelector(".ab-last-minute__date-heading");
        targetNode.innerText = getCurrentOptionElement().innerText;
        targetNode.setAttribute("value", getCurrentOptionElement().value);

        document.querySelectorAll(".ab-last-minute__button").forEach((item) => {
            item.classList.remove("ab-last-minute__button--disabled");

            if (getCurrentOptionIndex() === 0 && item.querySelector(".sp-icon-chevron-left")) {
                item.classList.add("ab-last-minute__button--disabled");
            } else if (getCurrentOptionIndex() === getTotalOptions() - 1 && item.querySelector(".sp-icon-chevron-right")) {
                item.classList.add("ab-last-minute__button--disabled");
            }
        });
    }

    function clickEvents() {
        const { selectNextDate, selectPreviousDate } = getLastMinuteSelectFunctionalities();

        document.querySelectorAll(".ab-last-minute__button").forEach((item) => {
            const action = item.querySelector(".sp-icon-chevron-left") ? "prev" : "next";

            item.addEventListener("click", (e) => {
                if (action === "prev") {
                    selectPreviousDate();
                } else if (action === "next") {
                    selectNextDate();
                }
            });
        });
    }

    // Async function to load the scripts
    async function loadMomentTimezone() {
        if (typeof window.moment?.tz === "function") return; // Already loaded

        // Load moment.js first if needed
        if (typeof window.moment === "undefined") {
            await new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js";
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        }

        // Load moment-timezone
        await new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.43/moment-timezone-with-data.min.js";
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // Synchronous function to get London time (requires scripts to be loaded first)
    function getLondonTime() {
        if (typeof window.moment?.tz !== "function") {
            throw new Error("moment-timezone not loaded. Call loadMomentTimezone() first.");
        }

        const londonTime = window.moment().tz("Europe/London");

        return {
            hour: londonTime.hours(),
            timeString: londonTime.format("HH:mm:ss"),
        };
    }

    // Synchronous function to check time range
    function isLondonTimeBetween7PMToMidnight() {
        const { hour, timeString } = getLondonTime();
        const isBetween = hour >= 19 && hour <= 23; /* main */

        return {
            isBetween,
            londonTimeString: timeString,
        };
    }

    function displayNextDay() {
        waitForElement(
            () => document.readyState === "complete",
            () => {
                // Load scripts once at the beginning
                loadMomentTimezone().then(() => {
                    // Now use synchronous functions
                    const time = getLondonTime();
                    console.log("London time:", time.timeString);

                    const result = isLondonTimeBetween7PMToMidnight();
                    console.log("Is between 7 PM and midnight:", result.isBetween);
                    console.log("Time string:", result.londonTimeString);

                    // const result = isLondonTimeBetween7PMToMidnight();
                    const { selectSecondDate } = getLastMinuteSelectFunctionalities();
                    if (result.isBetween) {
                        selectSecondDate();
                    }
                });
            }
        );
    }

    function init() {
        document.body.classList.add(
            TEST_CONFIG.page_initials,
            `${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}`,
            `${TEST_CONFIG.page_initials}--version-${TEST_CONFIG.test_version}`
        );

        createLayout();
        clickEvents();
        hideTableWithNoTime();
        handleLastMinuteSelectOnchange();
        displayNextDay();
    }

    function hasAllTargetElements() {
        return !!(
            window.location.href.includes("whats-on/last-minute/") &&
            document.querySelector(`body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`) &&
            document.querySelector(".last-minute__date-select #last-minute-day-select") &&
            document.querySelector(".sp-table__row.last-minute__table-row")
        );
    }

    waitForElement(hasAllTargetElements, init);
})();
