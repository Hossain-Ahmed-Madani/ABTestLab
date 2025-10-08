(function () {
    async function waitForPromise(predicate) {
        let count = 0;

        return new Promise((resolve, reject) => {
            if (typeof predicate === "function" && predicate()) {
                return resolve();
            }

            new MutationObserver((mutationList, observer) => {
                count++;

                if (typeof predicate === "function" && predicate()) {
                    observer.disconnect();
                    resolve();
                } else if (count >= 100) {
                    observer.disconnect();
                }
            }).observe(q("body"), { childList: true, subtree: false });
        });
    }

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    try {
        if (!q("body")) {
            throw new Error("No body");
        }

        const TEST_KEY = "CONVERT_1004169319_BUCKETED";
        const IS_BUCKETED = window[TEST_KEY];

        if (IS_BUCKETED) {
            return true;
        } else {
            // Start mutation observer, but return false synchronously
            waitForPromise(() => qq("body.is-ctl-product, body.is-ctl-checkout, .offcanvas")?.length > 0)
                .then(() => {
                    window[TEST_KEY] = true;
                    convert_recheck_experiment();
                });

            return false;
        }
    } catch (error) {
        convert_recheck_experiment();
        return false;
    }
})()