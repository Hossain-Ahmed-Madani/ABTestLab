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
        return document.querySelector(s);
    }

    function createLayout() {
        q("section:has(.triple-info-panel)").insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="section ab-section section--bg-orange">
                    <div class="container">
                        <div class="ab-pill-header">Auf einen Blick: der Fahrplan für Buchung und Weiterbildung</div>
                        <div class="ab-card-wrapper">
                            <div class="ab-card ab-card--downloads">
                                <div class="ab-card__header">Klarheit gewinnen: Fordern Sie jetzt Ihr </br> kostenloses Infopaket an</div>
                                <ul class="ab-card__list">
                                    <li class="ab-card__list-item"><span class="ab-card__list-item-icon">✅</span> Alle Preise und Fördermöglichkeiten auf einen Blick erhalten</li>
                                    <li class="ab-card__list-item"><span class="ab-card__list-item-icon">✅</span> Detaillierten Studienablauf und alle Kursinhalte einsehen</li>
                                    <li class="ab-card__list-item"><span class="ab-card__list-item-icon">✅</span> Konkrete Job-Perspektiven nach dem Abschluss verstehen</li>
                                    <li class="ab-card__list-item"><span class="ab-card__list-item-icon">✅</span> 100% kostenlos und absolut unverbindlich</li>
                                </ul>
                                <div class="ab-card__cta ab-card__cta--downloads">
                                    <div class="ab-card__cta-icon">
                                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="27" height="27" rx="13.5" fill="#09479B"/>
                                            <path d="M21.3738 13.4572L14.5295 6.61279L13.1606 7.98167L17.6683 12.4894H6.59375V14.425H17.6683L13.1606 18.9327L14.5295 20.3016L21.3738 13.4572Z" fill="#BCD8FA"/>
                                        </svg>
                                    </div>
                                    <div class="ab-card__cta-text">Jetzt kostenloses Infopaket anfordern</div>
                                </div>
                                <div class="ab-card__footer-info">Keine Buchung. Unverbindlich alle Informationen einsehen.</div>
                            </div>
                            <div class="ab-card ab-card--sign-up">
                                <div class="ab-card__header">Bereit für den nächsten Schritt? Starten Sie <br/> jetzt Ihre Transformation</div>
                                <ul class="ab-card__list">
                                    <li class="ab-card__list-item"><span class="ab-card__list-item-icon">🚀</span> Sofortiger Zugang: Starten Sie flexibel, wann immer Sie bereit sind</li>
                                    <li class="ab-card__list-item"><span class="ab-card__list-item-icon">📚</span> Ihre persönlichen Studienunterlagen werden direkt freigeschaltet </li>
                                    <li class="ab-card__list-item"><span class="ab-card__list-item-icon">🎯</span> Klarer Fahrplan: Sie erhalten Schritt-für-Schritt-Anleitungen </li>
                                    <li class="ab-card__list-item"><span class="ab-card__list-item-icon">🏆</span> Beginnen Sie noch heute den Weg zu Gehaltserhöhung und Jobsicherheit</li>
                                    
                                </ul>
                                <div class="ab-card__cta ab-card__cta--sign-up">
                                    <div class="ab-card__cta-icon">
                                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="27" height="27" rx="13.5" fill="white"/>
                                            <path d="M21.3738 13.4572L14.5295 6.61279L13.1606 7.98167L17.6683 12.4894H6.59375V14.425H17.6683L13.1606 18.9327L14.5295 20.3016L21.3738 13.4572Z" fill="#166ADB"/>
                                        </svg>
                                    </div>
                                    <div class="ab-card__cta-text">Jetzt Kursplatz sichern & starten</div>
                                </div>
                                <div class="ab-card__footer-info">Flexibel neben dem Beruf. Jetzt 4 Wochen kostenlos testen.</div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
        );
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
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
