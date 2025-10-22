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

async function waitForPromiseOnMutation(predicate, maxCount = 50) {
    let count = 0;

    return new Promise((resolve, reject) => {
        if (typeof predicate === "function" && predicate()) {
            return resolve(true);
        }

        new MutationObserver((mutationList, observer) => {
            count++;

            if (typeof predicate === "function" && predicate()) {
                observer.disconnect();
                return resolve(true);
            } else if (count > maxCount) {
                observer.disconnect();
                return reject(new Error(`Max polling count ${count} reached while waiting for predicate:\n${predicate.toString()}`));
            }
        }).observe(document.body, { childList: true, subtree: true });
    });
}
