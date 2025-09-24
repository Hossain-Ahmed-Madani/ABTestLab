(function () {
    const TEST_KEY = "CONVERT_1004169319_BUCKETED";
    const IS_BUCKETED = window[TEST_KEY];

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
                } else if (count >= 50) {
                    observer.disconnect();
                    // reject(new Error(`Max polling reached while waiting for: ${count} ' : ' ${predicate.toString()}`));
                }
            }).observe(document.body, { childList: true, subtree: true });
        });
    }

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    try {
        if (IS_BUCKETED) {
            return true;
        } else {
            return waitForPromise(() => qq("body.is-ctl-product, .offcanvas").length > 0)
                .then(() => {
                    window[TEST_KEY] = true;
                    convert_recheck_experiment();
                })
                .catch((err) => false);
        }
    } catch (error) {
        convert_recheck_experiment();
        return false;
    }
})();
