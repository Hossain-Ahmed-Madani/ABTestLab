// https://app.convert.com/accounts/10042082/projects/10042535/experiences/1004165897/summary
// https://magicspoon.com/?_conv_eforce=1004165897.1004392050&utm_campaign=qa5

(function () {
    // ========= TEST START =========

    const TEST_CONFIG = {
        client: "Acadia",
        project: "Magicspoon",
        site_url: "https://magicspoon.com/",
        test_name: `MS94: [SITEWIDE] Default to Subscription - (2) SET UP TEST`,
        page_initials: "MS94",
        test_variation: 1,
        test_version: 0.0002,
    };

    function waitForElement(predicate, callback, timer = 20000, frequency = 150) {
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
            return;
        }
    }

    waitForElement(
        () =>
            !!(
                document.querySelector(`body:not(.${TEST_CONFIG.page_initials})`) &&
                (document.querySelectorAll(".ms24b-row").length >= 1 ||
                    document.querySelectorAll(".lsg-bundle-wrapper .lsg-bundle-block").length >= 1 ||
                    document.querySelectorAll(".rtx-subscription-label").length >= 1)
            ),
        () => {
            console.log(TEST_CONFIG);
            document.body.classList.add(TEST_CONFIG.page_initials);

            waitForElement(
                () => document.querySelectorAll(".ms24b-row").length >= 1,
                () => {
                    document.querySelectorAll(".ms24b-row").forEach((item) => {
                        if (item.classList.contains("ms24b-subscribe")) {
                            item.classList.add("is-active");
                        } else {
                            item.classList.remove("is-active");
                        }
                    });
                }
            );

            waitForElement(
                () => document.querySelectorAll(".lsg-bundle-wrapper .lsg-bundle-block.lsg-bundle--otp-selected, .lsg-bundle-interval-el.lsg-bundle-interval-sub-el").length >= 1,
                () => {
                    document.querySelectorAll(".lsg-bundle-wrapper .lsg-bundle-block.lsg-bundle--otp-selected").forEach((item) => {
                        item.classList.add("lsg-bundle--sub-selected");
                        item.classList.remove("lsg-bundle--otp-selected");
                    });

                    document.querySelector(".lsg-bundle-interval-el.lsg-bundle-interval-sub-el").click();
                }
            );

            waitForElement(
                () => document.querySelectorAll(".rtx-subscription-label").length >= 1,
                () => {
                    document.querySelectorAll(".rtx-subscription-label").forEach((item) => {
                        if (item.classList.contains("custom-rtx-subscription-label")) {
                            item.classList.add("is-selected");
                            item.querySelector("input").setAttribute("checked", "");
                        } else {
                            item.classList.remove("is-selected");
                            item.querySelector("input").removeAttribute("checked");
                        }
                    });
                }
            );
        }
    );
})();
