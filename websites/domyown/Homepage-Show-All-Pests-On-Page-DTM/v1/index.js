(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Do My Own",
        site_url: "https://www.domyown.com",
        test_name: "Homepage Show All Pests On Page DTM",
        page_initials: "AB-HOME-SHOW-ALL-PESTS",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const DATA = [
        {
            title: "Ants",
            imgURL: "https://cdn.domyown.com/images/thumbnails/ant/ant.png.thumb_120x120.png",
            link: "https://www.domyown.com/ants-c-1.html",
        },
        {
            title: "Bed Bugs",
            imgURL: "https://cdn.domyown.com/images/thumbnails/Bed-Bug/Bed-Bug.png.thumb_120x120.png",
            link: "https://www.domyown.com/bed-bugs-c-39.html",
        },
        {
            title: "Roaches",
            imgURL: "https://cdn.domyown.com/images/thumbnails/roach/roach.png.thumb_120x120.png",
            link: "https://www.domyown.com/roaches-c-2.html",
        },
        {
            title: "Carpenter Bees",
            imgURL: "https://cdn.domyown.com/images/thumbnails/carpenter-bee/carpenter-bee.png.thumb_120x120.png",
            link: "https://www.domyown.com/carpenter-bees-c-142.html",
        },
        {
            title: "Mosquitoes",
            imgURL: "https://cdn.domyown.com/images/thumbnails/Mosquito/Mosquito.png.thumb_120x120.png",
            link: "https://www.domyown.com/mosquitoes-c-94.html",
        },
        {
            title: "Termites",
            imgURL: "https://cdn.domyown.com/images/thumbnails/termite/termite.png.thumb_120x120.png",
            link: "https://www.domyown.com/termites-c-3.html",
        },
        {
            title: "Ticks",
            imgURL: "https://cdn.domyown.com/images/thumbnails/tick1/tick1.png.thumb_120x120.png",
            link: "https://www.domyown.com/ticks-c-227.html",
        },
        {
            title: "Flies",
            imgURL: "https://cdn.domyown.com/images/thumbnails/fly/fly.png.thumb_120x120.png",
            link: "https://www.domyown.com/flies-c-35.html",
        },
        {
            title: "Powderpost Beetles",
            imgURL: "https://cdn.domyown.com/images/thumbnails/powderpost-beetle/powderpost-beetle.png.thumb_120x120.png",
            link: "https://www.domyown.com/powderpost-beetles-c-54.html",
        },
        {
            title: "Stink Bugs",
            imgURL: "https://cdn.domyown.com/images/thumbnails/stink_bug/stink_bug.png.thumb_120x120.png",
            link: "https://www.domyown.com/stink-bugs-c-211.html",
        },
        {
            title: "Spiders",
            imgURL: "https://cdn.domyown.com/images/thumbnails/spider/spider.png.thumb_120x120.png",
            link: "https://www.domyown.com/spiders-c-22.html",
        },
        {
            title: "Fleas",
            imgURL: "https://cdn.domyown.com/images/thumbnails/flea/flea.png.thumb_120x120.png",
            link: "https://www.domyown.com/fleas-c-24.html",
        },
        {
            title: "Voles",
            imgURL: "https://cdn.domyown.com/images/thumbnails/vole/vole.png.thumb_120x120.png",
            link: "https://www.domyown.com/voles-c-517.html",
        },
        {
            title: "Beetles",
            imgURL: "https://cdn.domyown.com/images/thumbnails/beetle/beetle.png.thumb_120x120.png",
            link: "https://www.domyown.com/beetles-c-214.html",
        },
        {
            title: "Drain Flies",
            imgURL: "https://cdn.domyown.com/images/thumbnails/drain-flies/drain-flies.png.thumb_120x120.png",
            link: "https://www.domyown.com/drain-flies-c-146.html",
        },
        {
            title: "Scorpions",
            imgURL: "https://cdn.domyown.com/images/thumbnails/scorpion/scorpion.png.thumb_120x120.png",
            link: "https://www.domyown.com/scorpions-c-52.html",
        },
        {
            title: "Armyworms",
            imgURL: "https://cdn.domyown.com/images/thumbnails/fall-army-worm/fall-army-worm.png.thumb_120x120.png",
            link: "https://www.domyown.com/armyworms-c-1269.html",
        },
        {
            title: "Carpet Beetles",
            imgURL: "https://cdn.domyown.com/images/carp-beetle-thumb_120x120.png",
            link: "https://www.domyown.com/carpet-beetles-c-141.html",
        },
        {
            title: "Moles",
            imgURL: "https://cdn.domyown.com/images/thumbnails/mole1/mole1.png.thumb_120x120.png",
            link: "https://www.domyown.com/moles-c-92.html",
        },
        {
            title: "Boxelder Bugs",
            imgURL: "https://cdn.domyown.com/images/thumbnails/box-elder-bug/box-elder-bug.png.thumb_120x120.png",
            link: "https://www.domyown.com/boxelder-bugs-c-137.html",
        },
        {
            title: "Gophers",
            imgURL: "https://cdn.domyown.com/images/thumbnails/gopher1/gopher1.png.thumb_120x120.png",
            link: "https://www.domyown.com/gophers-c-228.html",
        },
        {
            title: "Overwintering Pests",
            imgURL: "https://cdn.domyown.com/images/thumbnails/1876-overwintering-pests-v5/1876-overwintering-pests-v5.png.thumb_120x120.png",
            link: "https://www.domyown.com/overwintering-pests-c-1273.html",
        },
        {
            title: "Fruit Flies",
            imgURL: "https://cdn.domyown.com/images/thumbnails/fruit-fly/fruit-fly.png.thumb_120x120.png",
            link: "https://www.domyown.com/fruit-flies-c-149.html",
        },
        {
            title: "Carpenter Bees",
            imgURL: "https://cdn.domyown.com/images/thumbnails/carpenter-bee/carpenter-bee.png.thumb_120x120.png",
            link: "https://www.domyown.com/carpenter-bees-c-142.html",
        },
    ];

    async function fetchAndParseURLApi(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const html = await response.text();
            const dom = new DOMParser().parseFromString(html, "text/html");
            return dom;
        } catch (error) {
            // console.error("Fetch and parse failed:", error);
            return null;
        }
    }

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

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function getCookie(key) {
        try {
            if (!key || typeof key !== "string") {
                // console.error("Invalid key provided to getCookie");
                return null;
            }

            // Encode the key to handle special characters
            const encodedKey = encodeURIComponent(key);
            const cookies = `; ${document.cookie}`;

            // Find the cookie value
            const parts = cookies.split(`; ${encodedKey}=`);

            if (parts.length === 2) {
                const value = parts.pop().split(";").shift();
                return value ? decodeURIComponent(value) : null;
            }

            return null;
        } catch (error) {
            // console.error(`Error reading cookie "${key}":`, error);
            return null;
        }
    }

    function isSafari() {
        const userAgent = navigator.userAgent;
        return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    function mutationObserverFunction() {
        const targetNode = q("#cart-drawer");
        const debouncedUpdate = debounce(updateSideCartLayout, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        const layout = /* HTML */ `
            <div class="ab-content ab-pests-grid mt-4">
                ${qq("div[id*='category-carousel'] .w-1\\/4 > .flex.flex-col.mx-auto.h-full")
                    .map(
                        (item) => `<div class="ab-pest-item flex flex-col leading-tight ">${item.innerHTML}</div>
                `,
                    )
                    .join("")}
                ${qq("div[id*='category-carousel'] .w-1\\/6 > .text-center.h-full.border.border-grey.p-1")
                    .map(
                        (item) => `<div class="ab-pest-item flex flex-col leading-tight">
                        <div class="text-center h-full border border-grey p-1">${item.innerHTML}</div>
                        </div>
                `,
                    )
                    .join("")}
            </div>
        `;

        q("div[id*='category-carousel']").insertAdjacentHTML("beforeend", layout);
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q("div[id*='category-carousel']"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
