/* 

Figma: https://www.figma.com/design/EegmeIrFHMK3rVEhYTOlxT/TTP25---HOME--Add-Video?node-id=2001-2192&p=f&t=G8nZFwZy9SAvbBgU-0
Test container: https://marketer.monetate.net/control/a-7b7b9c2b/p/texastaxprotest.com/experience/2088292#c2622624:what

Preview:
ControL: https://marketer.monetate.net/control/preview/12476/36P33TSCD0U92XPELZI42RAS56M4G9PT/25-home-add-video
V1:  https://marketer.monetate.net/control/preview/12476/KBMENOLKYJA4GLHFIIKWJIPZAB6WD7N3/25-home-add-video
V2:  https://marketer.monetate.net/control/preview/12476/TIEB1H9B87K1S97U2GE9PPKYGXCPBNUY/25-home-add-video



Preview including all experiences::
ControL: https://marketer.monetate.net/control/preview/12476/UU1IWOS9J9E3KSEHTON1AE00WH9FTHNS/25-home-add-video
V1:  https://marketer.monetate.net/control/preview/12476/US6EGVP34QU2DL0NT4XOWSZ35M3BP8Q3/25-home-add-video
V2: https://marketer.monetate.net/control/preview/12476/18JCO1AWYT3KZE27SG0LPGF1OMBT3BP7/25-home-add-video


*/

(async () => {
    const TEST_ID = "TTP25";
    const VARIANT_ID = "V1"; /* Control, V1, V2 */

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
        project: "Texas Tax Protest",
        site_url: "https://www.texastaxprotest.com",
        test_name: "TTP25: [HOME] Add Video - (2) SET UP TEST",
        page_initials: "AB-TTP25",
        test_variation: 1,
        test_version: 0.0002,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        close_cta_svg: /* HTML */ `
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.907335 14C0.675145 14 0.442789 13.9111 0.266072 13.7343C-0.0886906 13.3797 -0.0886906 12.8063 0.266072 12.4517L12.4514 0.265953C12.806 -0.0886509 13.3793 -0.0886509 13.7339 0.265953C14.0887 0.620557 14.0887 1.1939 13.7339 1.54851L1.5486 13.7343C1.37072 13.912 1.13953 14 0.907335 14Z"
                    fill="white"
                />
                <path
                    d="M13.0927 14C12.8605 14 12.6283 13.9111 12.4514 13.7343L0.266072 1.54851C-0.0886906 1.1939 -0.0886906 0.620557 0.266072 0.265953C0.620668 -0.0886509 1.19384 -0.0886509 1.5486 0.265953L13.7339 12.4517C14.0887 12.8063 14.0887 13.3797 13.7339 13.7343C13.557 13.912 13.3249 14 13.0927 14Z"
                    fill="white"
                />
            </svg>
        `,
        play_svg: /* HTML */ `
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 5.31586C13.3333 6.06437 13.3333 7.93564 12 8.68414L3 13.7366C1.66667 14.4851 -6.72981e-08 13.5494 0 12.0524L4.54262e-07 1.94758C5.2156e-07 0.450566 1.66667 -0.485068 3 0.263439L12 5.31586Z"
                    fill="white"
                />
            </svg>
        `,
    };

    function fireGA4Event(eventName, eventLabel = "") {
        console.log("fireGA4Event", eventName, eventLabel);

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "GA4event",
            "ga4-event-name": "cro_event",
            "ga4-event-p1-name": "event_category",
            "ga4-event-p1-value": eventName,
            "ga4-event-p2-name": "event_label",
            "ga4-event-p2-value": eventLabel,
        });
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

    const VIDEO_ID = "wistia-player-ttp25";
    let VIDEO_INSTANCE = null;

    function resetWistiaVideo() {
        if (!VIDEO_INSTANCE) return;
        const hashedId = VIDEO_INSTANCE.hashedId();
        VIDEO_INSTANCE.replaceWith(hashedId, { transition: "none" });
    }

    async function initWistiaVideo() {
        if (!q(`#${VIDEO_ID}`)) return;

        window._wq = window._wq || [];
        _wq.push({
            id: VIDEO_ID,
            onReady: function (video) {
                VIDEO_INSTANCE = video;
                VIDEO_INSTANCE.bind("end", function () {
                    VIDEO_INSTANCE.pause();
                    VIDEO_INSTANCE.time(0);
                    resetWistiaVideo();
                });
            },
        });
    }

    function createLayout() {
        const contactPrevSibling = q('.mantine-Button-root[href="#contact"]').previousSibling;
        contactPrevSibling.insertAdjacentHTML(
            "afterend",
            /* HTML */ ` <div class="${page_initials}__modal-cta-container">
                <div class="${page_initials}__modal-open-cta">
                    <div class="${page_initials}__modal-open-cta__icon">${ASSETS.play_svg}</div>
                    <div class="${page_initials}__modal-open-cta__text">Watch Video</div>
                </div>
            </div>`,
        );

        const ctaContainer = q(`.${page_initials}__modal-cta-container`);

        qq('.mantine-Button-root[href="#contact"]').forEach((cta) => {
            ctaContainer.insertAdjacentElement("afterbegin", cta);
        });

        q("body").insertAdjacentHTML(
            "afterbegin",
            /* HTML */ ` <script class="w-json-ld ab-wistia-script" type="application/ld+json" id="w-json-ldwistia_40">
                    {
                        "@context": "http://schema.org/",
                        "@id": "https://fast.wistia.net/embed/iframe/p9lruxird8",
                        "@type": "VideoObject",
                        "duration": "PT1M55S",
                        "name": "CM_TexasTax_MAIN",
                        "thumbnailUrl": "https://embed-ssl.wistia.com/deliveries/1bb4759b294f04e7d7b264504cc5de48.jpg?image_crop_resized=640x360",
                        "embedUrl": "https://fast.wistia.net/embed/iframe/p9lruxird8",
                        "uploadDate": "2024-04-03T23:07:50.000Z",
                        "description": "a TTP Site Videos video",
                        "contentUrl": "https://embed-ssl.wistia.com/deliveries/542de4f89401f23f0bd26756b2f135a7e73508ed.m3u8",
                        "transcript": "[WOMAN CRIES]

                        - Property taxes suck harder than 100 pounds skeeter. Thanks to Texas Tax Protest, you can take back the power to control your property taxes.
                        - Oh yeah, this is way better. Can Texas Tax Protest really lower my property taxes?
                        - You bet your boots. [SWOOSH]
                        You love your house as a home and as an investment. But then, the government comes in like a bull in a China shop and--
                        [SLEDGEHAMMER SMASH]
                        so long investment dollars and how to do outrageous property taxes. But Texas Tax Protest helps protect what's yours and keeps your money, right where it belongs.
                        - Great! I'd hate to fight it on my own.
                        [FINGER CLICKS]
                        - There's no need to spend hours filling out forms, researching property values, or sitting and waiting in a county tax office. Let Texas Tax Protest empower you [FINGER CLICKS]
                        by doing the heavy lifting.
                        [SWOOSH]
                        - But how they really do it?
                        - Well--
                        - No don't snap! Dang it!
                        NARRATOR: Texas Tax Protest proprietary software analyzes millions of data records to prepare the strongest case to negotiate a fair value for you. You enroll in their program one time and Texas Tax Protest represents you each tax year.
                        - Oh, nice.
                        NARRATOR: Plus, they have excellent customer service.
                        - So you can talk to a fellow Texan any time you call.
                        - Yeehaw.
                        - Only pay your fair share and spend your money how you want. Buy an extravagant sculpture of the state of Texas. Hire an opera singer to serenade you.
                        - (SINGING) Property taxes is suck!
                        - Or heal your childhood trauma by buying that designer pony your daddy never bought you.
                        - [SQUEAL]
                        Going to name her Dr. Catherine after my therapist. [WOMAN CRIES]
                        - Take back the power to control your property taxes with Texas Tax Protest.
                        NARRATOR: Go to Texastaxprotest.com and join thousands of money saving Texans today.
                        [FINGER CLICKS]
                        CLICKS]",
                        "potentialAction": {
                            "@type": "SeekToAction",
                            "target": "https://www.texastaxprotest.com/?wtime={seek_to_second_number}",
                            "startOffset-input": "required name=seek_to_second_number"
                        }
                    }
                </script>
                <div class="${page_initials}__modal-layout">
                    <div class="${page_initials}__modal-backdrop"></div>
                    <div class="${page_initials}__modal">
                        <div class="${page_initials}__modal-close-cta">${ASSETS.close_cta_svg}</div>
                        <div class="${page_initials}__modal__content">
                            <div class="ab-wistia-video">
                                <div id="wistia-player-ttp25" class="wistia_embed wistia_async_p9lruxird8 wistia_embed_initialized ab-wistia-player-container"></div>
                            </div>
                        </div>
                    </div>
                </div>`,
        );
    }

    function animate(targetElement, className, interval) {
        if (!targetElement) return;
        if (className.includes(".")) className.replace(".", "");
        targetElement.classList.add(className);
        setTimeout(() => targetElement.classList.remove(className), interval);
    }

    function preventScroll(e) {
        e.preventDefault();
    }

    function handleModalView(action = "show") {
        const modalShowClass = `${page_initials}--modal-show`;
        const modal = q(`.${page_initials}__modal`);
        const body = document.body;

        if (action === "show" && !body.classList.contains(modalShowClass)) {
            animate(modal, `${page_initials}__slide-bottom`, 200);
            modal.classList.add(`${page_initials}__slide-bottom`);
            body.classList.add(modalShowClass);
            document.addEventListener("touchmove", preventScroll, { passive: false });
        }

        if (action === "hide") {
            resetWistiaVideo();
            animate(modal, `${page_initials}__slide-top`, 200);
            setTimeout(() => {
                body.classList.remove(modalShowClass);
            }, 200);
            document.removeEventListener("touchmove", preventScroll);
        }
    }

    function clickFunction() {
        q(`.${page_initials}__modal-open-cta`).addEventListener("click", () => {
            fireGA4Event("TTP25_VideoCTAClick");
            handleModalView("show");
        });

        q(`.${page_initials}__modal-close-cta`).addEventListener("click", () => {
            handleModalView("hide");
        });

        q(`.${page_initials}__modal-backdrop`).addEventListener("click", (e) => {
            if (e.target.closest(`.${page_initials}__modal`)) return;
            handleModalView("hide");
        });

        q(".ab-wistia-video").addEventListener("click", (e) => {
            if (e.target.closest(".w-big-play-button.w-css-reset-button-important.w-vulcan-v2-button svg")) {
                fireGA4Event("TTP25_VideoPlayClick");
            }
        });

        q(".wistia-video ").addEventListener("click", (e) => {
            if (e.target.closest(".w-big-play-button.w-css-reset-button-important.w-vulcan-v2-button svg")) {
                fireGA4Event("TTP25_VideoPlayClick");
            }
        });

        // CLOSE POPUP -> ON ESC CLICK
        document.addEventListener("keydown", function (evt) {
            evt = evt || window.event; // Fallback for older browsers (optional)
            if (evt.key === "Escape" || evt.key === "Esc") {
                handleModalView("hide");
            }
        });
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            qq('.mantine-Button-root[href="#contact"]').length === 2 &&
            document.readyState === "complete" &&
            window.Wistia &&
            typeof window.Wistia === "object"
        );
    }

    function handleLocationChanges() {
        const pathName = window.location.pathname;

        if (pathName === "/") {
            init_TTP25();
        } else {
            document.body.classList.remove(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
            window[page_initials] = false;
            qq("script.ab-wistia-script , .AB-TTP25__modal-layout")?.forEach((item) => item.remove());
        }
    }

    function urlObserver() {
        const debouncedChanges = debounce(handleLocationChanges, 150);

        const originalPushState = history.pushState;
        history.pushState = function () {
            originalPushState.apply(history, arguments);
            window.dispatchEvent(new Event("pushstate"));
        };

        window.addEventListener("popstate", function () {
            debouncedChanges();
        });
        
        window.addEventListener("pushstate", function () {
            debouncedChanges();
        });
    }

    async function init_TTP25() {
        if (window[page_initials] === true) return;

        try {
            await waitForElementAsync(checkForItems);

            q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
            window[page_initials] = true;

            console.table(TEST_CONFIG);

            createLayout();
            initWistiaVideo();
            clickFunction();
        } catch (error) {
            return false;
        }
    }

    init_TTP25();
    urlObserver();
})();
