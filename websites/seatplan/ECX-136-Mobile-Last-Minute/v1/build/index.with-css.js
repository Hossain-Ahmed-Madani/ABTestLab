(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-ECX-136 .last-minute__date-select {
  display: none;
}
.AB-ECX-136 .ab-hidden {
  display: none !important;
}
.AB-ECX-136 .ab-last-minute {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid #d5d5d5;
  gap: 20px;
}
.AB-ECX-136 .ab-last-minute__button {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  width: 24px;
  height: 24px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 4px;
  z-index: 10;
}
.AB-ECX-136 .ab-last-minute__button--disabled {
  opacity: 0.4;
  pointer-events: none;
}
.AB-ECX-136 .ab-last-minute__button-icon {
  font-size: 24px;
}
.AB-ECX-136 .ab-last-minute__date-heading {
  width: 175px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #000;
  margin: 0;
  text-align: center;
}
`;
      document.head.appendChild(style);
      setTimeout(() => {
        clearInterval(interval); // Clear the interval after 5 seconds
      }, 5000);
    }
  }, 100); // Check every 100ms for <head>
})();
(() => {
  const TEST_CONFIG = {
    page_initials: "AB-ECX-136",
    test_variation: 1,
    test_version: 0.0002,
  };

  function waitForElement(predicate, callback, timer = 10000, frequency = 100) {
    try {
      if (timer <= 0) {
        throw new Error(
          `Timeout reached while waiting for condition: ${predicate.toString()}`,
        );
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
          <button
            class="ab-last-minute__button ab-last-minute__button--disabled"
          >
            <span
              class="ab-last-minute__button-icon sp-icon sp-icon-chevron-left"
            ></span>
          </button>
          <div
            class="ab-last-minute__date-heading"
            value="${selectElement.value}"
          >
            ${selectElement.querySelector("option[selected]").innerText}
          </div>
          <button class="ab-last-minute__button">
            <span
              class="ab-last-minute__button-icon sp-icon sp-icon-chevron-right"
            ></span>
          </button>
        </div>
      `,
    );
  }

  function hideTableWithNoTime() {
    const selectedDate = document.querySelector(
      "#last-minute-day-select",
    ).value;

    document
      .querySelectorAll(
        `.sp-table__cell.last-minute__day-col[data-date='${selectedDate}']`,
      )
      .forEach((item) => {
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
      return document.querySelector(
        `#last-minute-day-select option[value='${selectElement.value}']`,
      );
    }
    function getCurrentOptionIndex() {
      return selectElement.selectedIndex;
    }
    function getTotalOptions() {
      return selectElement.options.length;
    }

    function dispatchOnchangeEvent(currOption) {
      document
        .querySelectorAll(`#last-minute-day-select option`)
        .forEach((item) => item.removeAttribute("selected"));
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
      dispatchOnchangeEvent(
        document.querySelector(`#last-minute-day-select option:nth-child(2)`),
      );
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
    const { getCurrentOptionElement, getTotalOptions, getCurrentOptionIndex } =
      getLastMinuteSelectFunctionalities();

    const targetNode = document.querySelector(".ab-last-minute__date-heading");
    targetNode.innerText = getCurrentOptionElement().innerText;
    targetNode.setAttribute("value", getCurrentOptionElement().value);

    document.querySelectorAll(".ab-last-minute__button").forEach((item) => {
      item.classList.remove("ab-last-minute__button--disabled");

      if (
        getCurrentOptionIndex() === 0 &&
        item.querySelector(".sp-icon-chevron-left")
      ) {
        item.classList.add("ab-last-minute__button--disabled");
      } else if (
        getCurrentOptionIndex() === getTotalOptions() - 1 &&
        item.querySelector(".sp-icon-chevron-right")
      ) {
        item.classList.add("ab-last-minute__button--disabled");
      }
    });
  }

  function clickEvents() {
    const { selectNextDate, selectPreviousDate } =
      getLastMinuteSelectFunctionalities();

    document.querySelectorAll(".ab-last-minute__button").forEach((item) => {
      const action = item.querySelector(".sp-icon-chevron-left")
        ? "prev"
        : "next";

      item.addEventListener("click", (e) => {
        if (action === "prev") {
          selectPreviousDate();
        } else if (action === "next") {
          selectNextDate();
        }
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
    const partObject = Object.fromEntries(
      parts.map(({ type, value }) => [type, value]),
    );

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
        const { selectSecondDate } = getLastMinuteSelectFunctionalities();
        if (result.isBetween) {
          selectSecondDate();
        }
      },
    );
  }

  function init() {
    document.body.classList.add(
      TEST_CONFIG.page_initials,
      `${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}`,
      `${TEST_CONFIG.page_initials}--version-${TEST_CONFIG.test_version}`,
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
      document.querySelector(
        `body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`,
      ) &&
      document.querySelector(
        ".last-minute__date-select #last-minute-day-select",
      ) &&
      document.querySelector(".sp-table__row.last-minute__table-row")
    );
  }

  waitForElement(hasAllTargetElements, init);
})();
