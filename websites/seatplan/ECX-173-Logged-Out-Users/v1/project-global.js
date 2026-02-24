// POLLING FUNCTION
function waitForElement(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 250) {
    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
    if (timer <= 0) return;
    (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined")
        ? callback(elements)
        : setTimeout(() => waitForElement(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
}

function waitForElementV2(predicate, callback, timer = 20000, frequency = 150) {
    if (timer <= 0) {
        return;
    } else if (predicate && predicate()) {
        callback();
    } else {
        setTimeout(() => waitForElementV2(predicate, callback, timer - frequency, frequency), frequency);
    }
}

function q(s, o) {
    return o ? s.querySelector(o) : document.querySelector(s);
}

function qq(s, o) {
    return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
}

function getSessionStorageValue(key) {
    try {
        if (!key || typeof key !== "string") return null;
        const value = sessionStorage.getItem(key);
        return value !== null ? value : null;
    } catch (e) {
        return null;
    }
}

function setSessionStorageValue(key, value) {
    try {
        if (!key || typeof key !== "string") return false;
        sessionStorage.setItem(key, value);
        return true;
    } catch (e) {
        return false;
    }
}

function removeSessionStorageValue(key) {
    try {
        if (!key || typeof key !== "string") return false;
        sessionStorage.removeItem(key);
        return true;
    } catch (e) {
        return false;
    }
}

const LOG_IN_KEY = "AB_USER_LOGGED_IN";

function triggerLoggedInUserBeginsCheckout() {
    waitForElementV2(
        () =>
            getSessionStorageValue(LOG_IN_KEY) === "true" &&
        q(".c-loading-with-message-modal-template__loading-message")?.textContent?.toLowerCase()?.includes("proceeding to checkout"),
        () => {
            // GOAL NAME:  A logged in user begins checkout | JS
            window._conv_q = window._conv_q || [];
            _conv_q.push(["triggerConversion", "1004114283"]);
        },
        25000,
        15
    );
}

function initLoggedInUserBeginsCheckout() {
    triggerLoggedInUserBeginsCheckout();

    waitForElement(".status-loggedin", () => {
        setSessionStorageValue(LOG_IN_KEY, "true");
    });

    waitForElement("#loggedout-control", () => {
        removeEventListener(LOG_IN_KEY);
    });

    const selector = "#cart-summary .button-secure, .c-basket  .button-secure, .basket-overlay__container .basket-overlay__btn";
    waitForElement(selector, () => {
        qq(selector).forEach((button) => {
            button.addEventListener("click", (e) => {
                if (getSessionStorageValue(LOG_IN_KEY) !== "true") return false;
                triggerLoggedInUserBeginsCheckout();
            });
        });
    });
}

initLoggedInUserBeginsCheckout();
