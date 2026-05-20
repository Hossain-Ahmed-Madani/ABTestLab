(async () => { /* Remove the self calling function when pasting into the tool !important */
    const TEST_ID = "PMO52";
    const VARIANT_ID = "V1"; /* V1, V2 */

    function logInfo(message) {
        console.log(
            `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
            "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            message,
        );
    }

    logInfo("fired");

    const TEST_CONFIG = {
        client: "Acadia",
        project: "Water",
        site_url: "https://www.water.com",
        test_name: "PMO52: [CART] Add Social Proof-(2) SET UP TEST",
        page_initials: "AB-PMO52",
        test_variation: 1, /* 1, 2 */
        test_version: 0.0007,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    if(window[page_initials] === true) return;

    const ASSETS = {
        truck_svg: /* HTML */ `
            <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.34001 14.84C8.91464 14.84 9.46574 14.6118 9.87207 14.2054C10.2784 13.7991 10.5067 13.248 10.5067 12.6734C10.5067 12.0987 10.2784 11.5476 9.87207 11.1413C9.46574 10.735 8.91464 10.5067 8.34001 10.5067C7.76537 10.5067 7.21427 10.735 6.80794 11.1413C6.40161 11.5476 6.17334 12.0987 6.17334 12.6734C6.17334 13.248 6.40161 13.7991 6.80794 14.2054C7.21427 14.6118 7.76537 14.84 8.34001 14.84ZM19.1733 14.84C19.748 14.84 20.2991 14.6118 20.7054 14.2054C21.1117 13.7991 21.34 13.248 21.34 12.6734C21.34 12.0987 21.1117 11.5476 20.7054 11.1413C20.2991 10.735 19.748 10.5067 19.1733 10.5067C18.5987 10.5067 18.0476 10.735 17.6413 11.1413C17.2349 11.5476 17.0067 12.0987 17.0067 12.6734C17.0067 13.248 17.2349 13.7991 17.6413 14.2054C18.0476 14.6118 18.5987 14.84 19.1733 14.84Z"
                    stroke="#14A7E0"
                    stroke-width="1.51338"
                    stroke-miterlimit="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M10.5609 12.6734H15.9234V1.4067C15.9234 1.23431 15.8549 1.06898 15.733 0.947079C15.6111 0.825181 15.4458 0.756699 15.2734 0.756699H0.756714M5.79421 12.6734H3.57338C3.48802 12.6734 3.4035 12.6566 3.32464 12.6239C3.24577 12.5912 3.17412 12.5433 3.11376 12.483C3.0534 12.4226 3.00552 12.351 2.97286 12.2721C2.94019 12.1932 2.92338 12.1087 2.92338 12.0234V6.71503"
                    stroke="#14A7E0"
                    stroke-width="1.51338"
                    stroke-linecap="round"
                />
                <path d="M1.84009 4.0067H6.17342" stroke="#14A7E0" stroke-width="1.51338" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M15.9233 4.0067H22.0008C22.1265 4.00673 22.2494 4.04317 22.3548 4.11162C22.4601 4.18007 22.5434 4.27758 22.5945 4.39237L24.5337 8.75603C24.5706 8.83889 24.5898 8.92856 24.59 9.01928V12.0234C24.59 12.1087 24.5732 12.1932 24.5405 12.2721C24.5079 12.351 24.46 12.4226 24.3996 12.483C24.3393 12.5433 24.2676 12.5912 24.1888 12.6239C24.1099 12.6566 24.0254 12.6734 23.94 12.6734H21.8817M15.9233 12.6734H17.0067"
                    stroke="#14A7E0"
                    stroke-width="1.51338"
                    stroke-linecap="round"
                />
            </svg>
        `,
    };


    function injectStyles () {
        // Functionality to inject styles
        const styleId = `${page_initials}-STYLES`;
        if (document.getElementById(styleId)) return; // Prevent double-inject

        const css = `

            .AB-PMO52 .cart__banner + .ab-social-proof-badge {
                margin-left: 4px;
                margin-top: 18px;
                margin-bottom: 5px;
            }
            .AB-PMO52 .summit-Title-root.summary-head.cart__section-title + .ab-social-proof-badge {
                display: none;
            }
            .AB-PMO52 .ab-social-proof-badge {
                background-color: rgba(156, 230, 247, 0.2);
                width: max-content;
                padding: 4px 15px 4px 7px;
                border-radius: 3000px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 5px;
            }
            .AB-PMO52 .ab-social-proof-badge__icon {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .AB-PMO52 .ab-social-proof-badge__icon svg {
                width: 23px;
                height: auto;
            }
            .AB-PMO52 .ab-social-proof-badge__txt {
                font-family:
                    Nunito Sans,
                    Nunito Sans Fallback;
                font-weight: 400;
                font-style: Regular;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0px;
                vertical-align: middle;
                color: #00053e;
            }
            @media screen and (min-width: 991px) {
                .AB-PMO52 .cart__banner + .ab-social-proof-badge {
                    display: none;
                }
                .AB-PMO52 .summit-Title-root.summary-head.cart__section-title + .ab-social-proof-badge {
                    display: flex;
                    margin-top: -16px;
                    padding: 4px 10px;
                }
                .AB-PMO52 .ab-social-proof-badge + .summary-coupon {
                    margin-top: -15px;
                }
            }

            
        `;

        const style = document.createElement('style');
        style.id = styleId;
        style.type = 'text/css';
        style.textContent = css;
        document.head.appendChild(style);
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

    function handleLocationChange() {
        if (window.location.pathname === "/cart/") {
            INIT_PMO32();
        } else {
            q("body").classList.remove(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
            window[page_initials] = false;
            qq(`#${page_initials}-STYLES, .ab-social-proof-badge`).forEach((item) => item.remove());
        }
    }

    function urlObserver() {
        const debouncedLocationChanges = debounce(handleLocationChange, 250);

        // Optional: Track pushState/replaceState changes too
        const originalPushState = history.pushState;
        history.pushState = function () {
            originalPushState.apply(history, arguments);
            window.dispatchEvent(new Event("pushstate"));
        };

        // Listen for back/forward button clicks
        window.addEventListener("popstate", function (event) {
            console.log("====== < POP STATE ======");
            debouncedLocationChanges();
        });
        
        window.addEventListener("pushstate", function () {
            console.log("====== PUSH STATE > ======");
            debouncedLocationChanges();
        });
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q("meta[property='og:title'][content='Your Cart']") &&
            qq(".cart__banner, .summit-Title-root.summary-head.cart__section-title").length === 2 &&
            document.readyState === "complete"
        );
    }
    

    async function INIT_PMO32() {
        
        try {
            await waitForElementAsync(checkForItems);
            
            if (window[page_initials] === true || !q("meta[property='og:title'][content='Your Cart']")) return;

            injectStyles();

            q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

            const TXT = ["Delivered to 8,271 homes this week", "Delivered to 8,200+ homes this week"];

            qq(".cart__banner, .summit-Title-root.summary-head.cart__section-title").forEach((item) => {
                item.insertAdjacentHTML(
                    "afterend",
                    /* HTML */ `
                        <div class="ab-social-proof-badge">
                            <div class="ab-social-proof-badge__icon">${ASSETS.truck_svg}</div>
                            <div class="ab-social-proof-badge__txt">${TXT[test_variation - 1]}</div>
                        </div>
                    `,
                );
            });
        } catch (error) {
            return false;
        }
    }

    urlObserver();
    INIT_PMO32();
})();
