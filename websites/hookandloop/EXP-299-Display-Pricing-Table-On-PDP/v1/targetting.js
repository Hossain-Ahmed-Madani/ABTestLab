// body.page-product-configurable #qty-counter .discount-box


async function waitForPromiseOnMutation(predicate, maxCount = 1000) {
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

function q(s, o) {
    return o ? s.querySelector(o) : document.querySelector(s);
}

return waitForPromiseOnMutation(() => !!(q("body.page-product-configurable #qty-counter .discount-box")))
    .then(() => true)
    .catch(() => false);