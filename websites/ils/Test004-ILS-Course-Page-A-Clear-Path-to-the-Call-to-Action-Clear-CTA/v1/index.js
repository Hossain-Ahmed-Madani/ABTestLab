(async () => {
    const TEST_CONFIG = {
        client: "Netzproduzenten",
        project: "ILS",
        site_url: "https://www.ils.de",
        test_name: "Test004 [ILS] - Course Page - A Clear Path to the Call to Action + Clear CTA",
        page_initials: "AB-TEST004",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

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

    const ASSETS = {
        downloads_svg: /* HTML  */ `
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="27" height="27" rx="13.5" fill="#09479B"/>
            <path d="M21.3738 13.4572L14.5295 6.61279L13.1606 7.98167L17.6683 12.4894H6.59375V14.425H17.6683L13.1606 18.9327L14.5295 20.3016L21.3738 13.4572Z" fill="#BCD8FA"/>
        </svg>`,
        sign_up_svg: /* HTML  */ `
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="27" height="27" rx="13.5" fill="white"/>
            <path d="M21.3738 13.4572L14.5295 6.61279L13.1606 7.98167L17.6683 12.4894H6.59375V14.425H17.6683L13.1606 18.9327L14.5295 20.3016L21.3738 13.4572Z" fill="#166ADB"/>
        </svg>`
    };

    function createLayout() {
        q("section:has(.triple-info-panel)").insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="section ab-section section--bg-orange">
                    <div class="container">
                        <div class="ab-pill-header">Auf einen Blick: der Fahrplan für Buchung und Weiterbildung</div>
                        <div class="ab-card-wrapper">
                            ${[
                                {
                                    type: "downloads",
                                    header: "Klarheit gewinnen: Fordern Sie jetzt Ihr kostenloses Infopaket an",
                                    list: [
                                        { icon: "✅", text: "Alle Preise und Fördermöglichkeiten auf einen Blick erhalten" },
                                        { icon: "✅", text: "Detaillierten Studienablauf und alle Kursinhalte einsehen" },
                                        { icon: "✅", text: "Konkrete Job-Perspektiven nach dem Abschluss verstehen" },
                                        { icon: "✅", text: "100% kostenlos und absolut unverbindlich" },
                                    ],
                                    cta: {
                                        type: "downloads",
                                        icon: ASSETS.downloads_svg,
                                        text: "Jetzt kostenloses Infopaket anfordern",
                                    },
                                    footer: "Keine Buchung. Unverbindlich alle Informationen einsehen.",
                                },
                                {
                                    type: "sign-up",
                                    header: "Bereit für den nächsten Schritt? Starten Sie jetzt Ihre Transformation",
                                    list: [
                                        { icon: "🚀", text: "Sofortiger Zugang: Starten Sie flexibel, wann immer Sie bereit sind" },
                                        { icon: "📚", text: "Ihre persönlichen Studienunterlagen werden direkt freigeschaltet" },
                                        { icon: "🎯", text: "Klarer Fahrplan: Sie erhalten Schritt-für-Schritt-Anleitungen" },
                                        { icon: "🏆", text: "Beginnen Sie noch heute den Weg zu Gehaltserhöhung und Jobsicherheit" },
                                    ],
                                    cta: { type: "sign-up", icon: ASSETS.sign_up_svg, text: "Jetzt Kursplatz sichern & starten" },
                                    footer: "Flexibel neben dem Beruf. Jetzt 4 Wochen kostenlos testen.",
                                },
                            ]
                                .map(
                                    ({ type, header, list, cta, footer }) => /* HTML */ `
                                        <div class="ab-card ab-card--${type}">
                                            <div class="ab-card__header">${header}</div>
                                            <ul class="ab-card__list">
                                                ${list.map(({ icon, text }) =>/* HTML */ `
                                                    <li class="ab-card__list-item"><span class="ab-card__list-item-icon">${icon}</span> ${text}</li>`
                                                ).join("")}
                                            </ul>
                                            <div class="ab-card__cta ab-card__cta--${cta.type}">
                                                <div class="ab-card__cta-icon">    
                                                    ${cta.icon}
                                                </div>
                                                <div class="ab-card__cta-text">${cta.text}</div>
                                            </div>
                                            <div class="ab-card__footer-info">${footer}</div>
                                        </div>
                                    `,
                                )
                                .join("")}
                        </div>
                    </div>
                </div>
            `,
        );
    }

    function clickFunction() {
        q(".ab-card__cta--downloads").addEventListener("click", () => q('a[href="#sud-formular"]').click());
        q(".ab-card__cta--sign-up").addEventListener("click", () => q('a[href*="/fernstudium/onlineanmeldung/"]').click());
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
        clickFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q("section:has(.triple-info-panel)"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
