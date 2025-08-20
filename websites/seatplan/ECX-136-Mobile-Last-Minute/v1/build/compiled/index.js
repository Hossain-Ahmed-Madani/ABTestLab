(() => {
    const TEST_CONFIG = {
        page_initials: "AB-ECX-136",
        test_variation: 1,
        test_version: 0.0001,
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
        console.log("Trigger Goal: EXP-681: Last Minute - Change Date | JS");
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "1004103971"]);
    }

    function handleLastMinuteSelectOnchange() {
        document.querySelector("#last-minute-day-select").addEventListener("change", (e) => {
            e.target.value;
            hideTableWithNoTime();
            fireConvertGoal();
        });
    }

    function handleLastMinuteArrowClickAction(action /* prev, next */) {
        // Get select input and option elements
        const selectElement = document.querySelector("#last-minute-day-select");
        let currentOptionElement = document.querySelector(`#last-minute-day-select option[value='${selectElement.value}']`);
        const totalOptions = selectElement.options.length;
        let currentOptionIndex = selectElement.selectedIndex;

        // Determine required outcome
        if ((action === "prev" && currentOptionIndex === 0) || (action === "next" && currentOptionIndex === totalOptions - 1)) return;

        currentOptionElement.removeAttribute("selected");

        if (action === "prev") {
            currentOptionElement = currentOptionElement.previousElementSibling;
            currentOptionIndex--;
        } else if (action === "next") {
            currentOptionElement = currentOptionElement.nextElementSibling;
            currentOptionIndex++;
        }

        // Dispatch change events
        selectElement.value = currentOptionElement.value;
        currentOptionElement.setAttribute("selected", "selected");
        const event = new Event("change", { bubbles: true });
        selectElement.dispatchEvent(event);

        // Update ab last minute layout
        const abLastMinuteHeadingElem = document.querySelector(".ab-last-minute__date-heading");
        abLastMinuteHeadingElem.innerText = currentOptionElement.innerText;
        abLastMinuteHeadingElem.setAttribute("value", currentOptionElement.value);

        document.querySelectorAll(".ab-last-minute__button").forEach((item) => {
            item.classList.remove("ab-last-minute__button--disabled");

            if (currentOptionIndex === 0 && item.querySelector(".sp-icon-chevron-left")) {
                item.classList.add("ab-last-minute__button--disabled");
            } else if (currentOptionIndex === totalOptions - 1 && item.querySelector(".sp-icon-chevron-right")) {
                item.classList.add("ab-last-minute__button--disabled");
            }
        });
    }

    function clickEvents() {
        document.querySelectorAll(".ab-last-minute__button").forEach((item) => {
            const action = item.querySelector(".sp-icon-chevron-left") ? "prev" : "next";
            item.addEventListener("click", (e) => {
                handleLastMinuteArrowClickAction(action);
            });
        });
    }

    function getLondonTimeParts() {
        const formatter = new Intl.DateTimeFormat("en-GB", {
            timeZone: "Europe/London",
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });

        const parts = formatter.formatToParts(new Date());
        const partObject = Object.fromEntries(parts.map(({ type, value }) => [type, value]));

        return {
            hour: parseInt(partObject.hour, 10),
            timeString: `${partObject.hour}:${partObject.minute}:${partObject.second}`,
        };
    }

    function isLondonTimeBetween7PMToMidnight() {
        const { hour, timeString } = getLondonTimeParts();
        const isBetween = hour >= 19 && hour <= 23;

        return {
            isBetween,
            londonTimeString: timeString,
        };
    }

    function displayNextDay() {
        waitForElement(
            () => document.readyState === "complete",
            () => {
                const result = isLondonTimeBetween7PMToMidnight();
                if (result.isBetween) {
                    handleLastMinuteArrowClickAction("next");
                }
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
