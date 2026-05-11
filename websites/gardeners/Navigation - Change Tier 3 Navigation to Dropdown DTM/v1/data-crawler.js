(function () {
    let DATA = [];

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

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function getData(selector = 'div[data-pane-key="home"] > ul > li > a[data-link-target-pane-key]') {
        const arr = [];

        qq(selector).forEach((item) => {
            const dataPaneKey = item?.getAttribute("data-link-target-pane-key") ?? null;

            arr.push({
                label: item.textContent.trim(),
                link: item.getAttribute("href"),
                ...(dataPaneKey && { "data-link-target-pane-key": dataPaneKey, subMenuList: getData(`ul[data-pane-key="${dataPaneKey}"] > li.fs-body-100 > a.mobile-menu__link`) }),
            });
        });

        return arr;
    }

    function logData() {
        console.log(DATA);
    }

    waitForElementAsync(() => q('div[data-pane-key="home"]'))
        .then(() => {
            DATA = getData();
            logData();
        })
        .catch(console.error);
})();
