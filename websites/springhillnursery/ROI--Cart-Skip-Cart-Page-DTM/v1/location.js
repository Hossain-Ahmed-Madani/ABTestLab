(function () {
    const TEST_KEY = "AB-SKIP-CART-PAGE";
    const IS_BUCKETED = window[TEST_KEY];

    async function waitForSideCartOpen() {
        const targetNode = q(".quick-cart__wrapper");
        let count = 0;

        return new Promise((resolve, reject) => {
            if (targetNode.classList.contains("active")) {
                return resolve(true);
            }

            new MutationObserver((_, observer) => {
                count++;

                if (targetNode.classList.contains("active")) {
                    observer.disconnect();
                    return resolve(true);
                } else if (count > 50) {
                    observer.disconnect();
                    return reject(new Error(`Max polling count ${count} reached while waiting for predicate:\n${predicate.toString()}`));
                }
            }).observe(targetNode, { childList: true, subtree: true });
        });
    }

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    try {

        if (!q(".quick-cart__wrapper")) {
            throw new Error("No side cart");
        }

        if (IS_BUCKETED) {
            return true;
        } else {
            waitForSideCartOpen()
                .then(() => {
                    window[TEST_KEY] = true;
                    convert_recheck_experiment();
                    return true;
                })
                .error(() => false);
            return false;
        }
    } catch (error) {
        convert_recheck_experiment();
        return false;
    }
})()
