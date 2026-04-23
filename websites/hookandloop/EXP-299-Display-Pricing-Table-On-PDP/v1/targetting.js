async function waitForElementAsync(predicate, timeout = 10000, frequency = 150) {
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
    return o ? s.querySelector(o) : document.querySelector(s);
}

return waitForElementAsync(() => !!(q("meta[property='og:type'][content='product']") && q(".discount-box ul li")))
    .then(() => true)
    .catch(() => false);