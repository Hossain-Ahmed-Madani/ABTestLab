(async () => {
    const TEST_CONFIG = {
        client: "Netzproduzenten",
        project: "ISL",
        site_url: "https://www.ils.de",
        test_name: "Test015 [ILS] - landing pages - Optimize above the fold area and links to courses",
        page_initials: "AB-TEST015",
        test_variation: 1,
        test_version: 0.0005,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        check_svg: /* HTML */ `
            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.8292 0.804295C17.2135 1.53814 16.9303 2.44466 16.1964 2.82905C13.2724 4.3607 10.0774 8.39835 8.45477 13.923C8.30379 14.437 7.89014 14.8315 7.36954 14.9579C6.84894 15.0844 6.30043 14.9235 5.93052 14.536C5.29821 13.8736 4.825 13.3935 4.14726 12.9205C3.46693 12.4458 2.52541 11.942 0.965132 11.346C0.191246 11.0504 -0.196462 10.1834 0.0991618 9.40948C0.394785 8.63559 1.26179 8.24788 2.03568 8.54351C3.74207 9.19534 4.92176 9.80272 5.86416 10.4604C6.0335 10.5786 6.19341 10.6972 6.34551 10.8162C8.27482 5.84747 11.4367 1.93559 14.8044 0.171558C15.5382 -0.212838 16.4448 0.0704482 16.8292 0.804295Z"
                    fill="#F55A00"
                />
            </svg>
        `,
        star_reviews: /* HTML */ `
            <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_19059_81)">
                    <path
                        d="M19.9867 7.24328L13.0859 6.24078L9.99922 -0.0117188L6.91255 6.24078L0.0117188 7.24328L5.00589 12.1116L3.82672 18.9841L9.99922 15.7408L16.1717 18.9841L14.9926 12.1116L19.9867 7.24328Z"
                        fill="#FBCF34"
                    />
                </g>
                <g clip-path="url(#clip1_19059_81)">
                    <path
                        d="M44.9867 7.24328L38.0859 6.24078L34.9992 -0.0117188L31.9126 6.24078L25.0117 7.24328L30.0059 12.1116L28.8267 18.9841L34.9992 15.7408L41.1717 18.9841L39.9926 12.1116L44.9867 7.24328Z"
                        fill="#FBCF34"
                    />
                </g>
                <g clip-path="url(#clip2_19059_81)">
                    <path
                        d="M69.9867 7.24328L63.0859 6.24078L59.9992 -0.0117188L56.9126 6.24078L50.0117 7.24328L55.0059 12.1116L53.8267 18.9841L59.9992 15.7408L66.1717 18.9841L64.9926 12.1116L69.9867 7.24328Z"
                        fill="#FBCF34"
                    />
                </g>
                <g clip-path="url(#clip3_19059_81)">
                    <path
                        d="M94.9867 7.24328L88.0859 6.24078L84.9992 -0.0117188L81.9126 6.24078L75.0117 7.24328L80.0059 12.1116L78.8267 18.9841L84.9992 15.7408L91.1717 18.9841L89.9926 12.1116L94.9867 7.24328Z"
                        fill="#FBCF34"
                    />
                </g>
                <g clip-path="url(#clip4_19059_81)">
                    <path
                        d="M119.987 7.24328L113.086 6.24078L109.999 -0.0117188L106.913 6.24078L100.012 7.24328L105.006 12.1116L103.827 18.9841L109.999 15.7408L116.172 18.9841L114.993 12.1116L119.987 7.24328Z"
                        fill="#FBCF34"
                    />
                    <path d="M119.986 7.24316L114.992 12.1113L116.172 18.9844L113.344 17.498V6.27832L119.986 7.24316Z" fill="#D9D9D9" />
                </g>
                <defs>
                    <clipPath id="clip0_19059_81">
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_19059_81">
                        <rect width="20" height="20" fill="white" transform="translate(25)" />
                    </clipPath>
                    <clipPath id="clip2_19059_81">
                        <rect width="20" height="20" fill="white" transform="translate(50)" />
                    </clipPath>
                    <clipPath id="clip3_19059_81">
                        <rect width="20" height="20" fill="white" transform="translate(75)" />
                    </clipPath>
                    <clipPath id="clip4_19059_81">
                        <rect width="20" height="20" fill="white" transform="translate(100)" />
                    </clipPath>
                </defs>
            </svg>
        `,
    };

    const DATA = {
        "/lp/heilpraktiker-ausbildung/": {
            title: "Heilpraktiker-Ausbildung",
            description:
                "Sie möchten Menschen helfen und sich beruflich neu orientieren? Die Heilpraktiker-Ausbildung des ILS bereitet Sie gezielt auf die amtsärztliche Prüfung vor – selbstbestimmt, zeitlich unabhängig und ohne Präsenzzwang. So eröffnen Sie sich den Weg in einen sinnstiftenden Gesundheitsberuf, in dem Sie eigenverantwortlich arbeiten. Testen Sie den Lehrgang vier Wochen kostenlos und prüfen Sie in Ruhe, ob der Weg zu Ihnen passt.",
        },
        "/lp/schulabschluesse/": {
            title: "Schulabschlüsse",
            description:
                "Ein anerkannter Schulabschluss öffnet Türen – für die Ausbildung, den nächsten Karriereschritt oder ein Studium. Beim ILS holen Sie Abitur, Fachhochschulreife, Real- oder Hauptschulabschluss flexibel neben dem Beruf nach, mit Lehrgangsstufen, die zu Ihren Vorkenntnissen passen. So erreichen Sie Ihr Ziel im eigenen Tempo, ganz ohne starren Stundenplan. Finden Sie heraus, welcher Einstieg für Ihre Ausgangslage der richtige ist.",
        },
        "/lp/pflege/": {
            title: "Pflege",
            description:
                "Der Bedarf an Pflegefachkräften wächst stetig – und damit Ihre Chancen auf einen sicheren, sinnvollen Beruf. Mit einer Weiterbildung im Bereich Pflege erwerben Sie fundierte Fachkenntnisse für ein breites Tätigkeitsfeld, von der häuslichen Pflege bis zur Betreuungskraft nach SGB XI. Berufsbegleitend und ortsunabhängig qualifizieren Sie sich zur gefragten Fachkraft, die wirklich gebraucht wird. Entdecken Sie, welcher Pflege-Lehrgang am besten zu Ihren Zielen passt.",
        },
        "/lp/ernaehrungsberater/": {
            title: "Ernährungsberater",
            description:
                "Sie interessieren sich für gesunde Ernährung und möchten Ihr Wissen zum Beruf machen? Im Fernstudium zum Ernährungsberater eignen Sie sich praxisnah genau das Know-how an, mit dem Sie andere kompetent auf dem Weg zu mehr Gesundheit begleiten. Den Lehrgang absolvieren Sie berufsbegleitend und zeitlich flexibel – und können sich gezielt spezialisieren, etwa für vegetarisch-vegane Kost, Sportler oder Kinder. So schaffen Sie sich gute Chancen auf eine erfüllende Tätigkeit in einem wachsenden Markt.",
        },
        "/lp/fachabitur-nachholen/": {
            title: "Fachabitur nachholen",
            description:
                "Das Fachabitur ist Ihr Schlüssel zu mehr: Es ermöglicht ein Hochschulstudium und ist oft die Voraussetzung für den nächsten Schritt auf der Karriereleiter. Beim ILS holen Sie es flexibel neben dem Beruf nach – individuell angepasst an Ihre Vorkenntnisse und mit wählbarem Schwerpunkt Technik oder Wirtschaft. So verwandeln Sie Ihre Berufserfahrung in einen anerkannten Abschluss mit neuen Perspektiven. Informieren Sie sich, welcher Schwerpunkt zu Ihren Plänen passt.",
        },
        "/lp/ihk-abschluesse/": {
            title: "IHK-Abschlüsse",
            description:
                "Ein IHK-Abschluss ist deutschlandweit anerkannt und verschafft Ihnen spürbar bessere Karrierechancen. Dank der langjährigen, engen Kooperation des ILS mit der IHK bereiten Sie die Lehrgänge gezielt und prüfungsorientiert auf Ihren Abschluss vor. Vom Controller bis zum Handelsfachwirt finden Sie genau die Qualifikation, die Ihren Berufsweg voranbringt. Schauen Sie, welcher IHK-Abschluss Sie Ihrem Ziel näherbringt.",
        },
        "/lp/ernaehrungsberater-ausbildung/": {
            title: "Ernährungsberater-Ausbildung",
            description:
                "Machen Sie Ihre Begeisterung für gesunde Ernährung zum Beruf – mit einem anerkannten Abschluss, der Sie direkt durchstarten lässt. Die Ausbildung beim ILS absolvieren Sie berufsbegleitend und zeitlich flexibel, mit praxisnah vermitteltem Beratungswissen. So qualifizieren Sie sich für eine erfüllende Tätigkeit und können sich gezielt auf Ihr Wunsch-Klientel spezialisieren. Verschaffen Sie sich einen Überblick über die passenden Lehrgänge.",
        },
        "/lp/bilanzbuchhalter/": {
            title: "Bilanzbuchhalter",
            description:
                "Mit einem qualifizierten Abschluss in Buchführung, Rechnungswesen und Controlling legen Sie das Fundament für Ihren beruflichen Aufstieg. Der geprüfte Bilanzbuchhalter (IHK) – auf Wunsch mit internationaler IFRS-Ausrichtung – zählt zu den anerkanntesten Aufstiegsqualifikationen im Finanzbereich. Berufsbegleitend qualifizieren Sie sich für mehr Verantwortung und attraktivere Positionen. Sehen Sie sich an, welcher Lehrgang Sie an Ihr Ziel bringt.",
        },
        "/lp/techniker/": {
            title: "Techniker",
            description:
                "Die Technik entwickelt sich rasant – und macht das Berufsfeld zu einem mit hohem Entwicklungspotenzial. Das ILS bereitet Sie ideal auf die staatliche Technikerprüfung vor, ob in Bau-, Elektro-, KFZ-, Maschinenbau- oder Mechatroniktechnik, mit Abschluss auf Bachelor-Professional-Niveau. Berufsbegleitend werden Sie so zur gefragten Fachkraft mit klaren Aufstiegschancen. Finden Sie die Fachrichtung, die zu Ihrer Erfahrung passt.",
        },
        "/lp/englischkurse/": {
            title: "Englischkurse",
            description:
                "Sicheres Englisch ist in fast jeder Branche die Grundvoraussetzung für den nächsten Karriereschritt – und macht zugleich jede Reise entspannter. Beim ILS finden Sie für jedes Niveau den passenden Kurs, vom Grundkurs über Wirtschafts- und Handelsenglisch bis zum international anerkannten Cambridge Certificate. Sie lernen flexibel im eigenen Tempo, beruflich wie privat einsetzbar. Wählen Sie den Kurs, der Sie weiterbringt.",
        },
        "/lp/psychologischer-berater/": {
            title: "Psychologischer Berater",
            description:
                "Die Anforderungen im Beruf und im Privatleben steigen – und damit der Bedarf an Menschen, die kompetent beraten und begleiten. Im Fernstudium zum Psychologischen Berater lernen Sie, neue Lösungswege aufzuzeigen und positive Veränderungen anzustoßen, für andere wie für sich selbst. Mit wählbaren Schwerpunkten wie Personal Coach oder Business-Coach gestalten Sie Ihr eigenes Profil. Entdecken Sie, welche Ausrichtung zu Ihnen passt.",
        },
        "/lp/spanischkurse/": {
            title: "Spanischkurse",
            description:
                "Spanisch zählt zu den bedeutendsten Welt- und Handelssprachen – ein echter Vorteil im Beruf und auf Reisen. Beim ILS finden Sie für jeden Bedarf den passenden Kurs, vom Grundkurs über den Gesamtlehrgang bis zum spezialisierten Wirtschaftsspanisch. Sie lernen bequem und zeitlich unabhängig im eigenen Tempo. Wählen Sie den Einstieg, der zu Ihren Zielen passt.",
        },
        "/lp/elektromeister/": {
            title: "Elektromeister",
            description:
                "Mit dem anerkannten Meistertitel werden Sie zur gefragten technischen Fachkraft – und öffnen sich Türen zu Führungsverantwortung und Selbstständigkeit. Das ILS bereitet Sie wie eine Meisterschule optimal auf die IHK- bzw. Handwerkskammer-Prüfung vor, nur zeitlich und örtlich flexibel. So machen Sie den nächsten Karriereschritt, ohne Ihren Beruf aufzugeben. Informieren Sie sich über den Weg zum Industrie- oder Handwerksmeister.",
        },
        "/lp/fachwirte/": {
            title: "Fachwirte",
            description:
                "Ein Fachwirt-Abschluss der IHK vermittelt wichtige Schlüsselqualifikationen für den Sprung in Spezialisten- und Führungsrollen. Das ILS bereitet Sie optimal auf die IHK-Prüfung vor – mit großer Auswahl an Fachrichtungen wie Wirtschaft, Handel, Tourismus, Immobilien oder Gesundheits- und Sozialwesen. Berufsbegleitend qualifizieren Sie sich für mehr Verantwortung. Schauen Sie, welcher Fachwirt zu Ihrem Berufsfeld passt.",
        },
        "/lp/heilpraktiker/": {
            title: "Heilpraktiker",
            description:
                "Sie möchten in einem sinnstiftenden Gesundheitsberuf eigenverantwortlich arbeiten? Die Weiterbildung des ILS bereitet Sie gezielt auf die amtsärztliche Heilpraktiker-Prüfung vor – an nahezu jedem Lehrgang können Sie auch ohne medizinische Vorbildung teilnehmen. Sie lernen selbstbestimmt und zeitlich unabhängig und wählen aus einem breiten Angebot rund um Gesundheit, Psychologie, Heilen und Helfen. Finden Sie den Lehrgang, der zu Ihrem Ziel passt.",
        },
        "/lp/coaching/": {
            title: "Coaching",
            description:
                "Coaching gewinnt im Beruf wie im Privatleben immer mehr an Bedeutung – ein Feld mit Zukunft und persönlicher Erfüllung. Beim ILS steht Ihnen ein breites Ausbildungsspektrum offen, vom Personal- und Business-Coach über Wirtschaftsmediation bis zum Mentaltrainer. Berufsbegleitend und flexibel entwickeln Sie genau das Profil, mit dem Sie andere wirksam begleiten. Entdecken Sie, welche Coaching-Ausbildung zu Ihnen passt.",
        },
        "/lp/personalwesen/": {
            title: "Personalwesen",
            description:
                "Mitarbeitende sind der Erfolgsfaktor jedes Unternehmens – und qualifizierte HR-Fachkräfte entsprechend gefragt. Mit einer Weiterbildung im Personalwesen, etwa zum Personalfachkaufmann (IHK), legen Sie die Grundlage für Ihren beruflichen Aufstieg. Ergänzende Lehrgänge wie Personalreferent, Business-Coach oder die Ausbildereignung (ADA) schärfen Ihr Profil zusätzlich. Sehen Sie sich an, welcher Weg Sie weiterbringt.",
        },
        "/lp/paar-familiencoach/": {
            title: "Paar- und Familiencoach",
            description:
                "In Krisen- und Konfliktsituationen brauchen Familien und Paare Menschen, die kompetent und einfühlsam begleiten. Im Fernstudium zum Paar- und Familiencoach lernen Sie, Menschen bei Neufindung, Zusammenhalt und Veränderung zu unterstützen. Als Teil des umfassenden ILS-Angebots in Coaching und Beratung erschließen Sie sich eine sinnstiftende Tätigkeit – flexibel und berufsbegleitend erlernbar. Erfahren Sie mehr über den Lehrgang.",
        },
        "/lp/franzoesischkurse/": {
            title: "Französischkurse",
            description:
                "Französisch ist nicht nur die Sprache der Liebe, sondern auch eine der wichtigsten Wirtschaftssprachen der Welt. Die Französischkurse des ILS vermitteln Ihnen alle notwendigen Kenntnisse sicher in Wort und Schrift – beruflich wie privat einsetzbar. Sie lernen flexibel im eigenen Tempo, vom Grundkurs bis zum Gesamtlehrgang. Wählen Sie den passenden Einstieg für Ihr Ziel.",
        },
        "/lp/qualitaetsmanagement/": {
            title: "Qualitätsmanagement",
            description:
                "Qualitätsmanagement ist in nahezu jedem Unternehmen eine gefragte Schlüsselkompetenz – und damit ein sicherer Karrierebaustein. Beim ILS qualifizieren Sie sich Schritt für Schritt mit anerkannten Abschlüssen von TÜV und bSb, vom QM-Assistenten über den Qualitätsbeauftragten bis zum Qualitätsmanager. Berufsbegleitend und flexibel bauen Sie sich eine gefragte Zusatzqualifikation auf. Vier Wochen kostenlos testen und herausfinden, ob der Bereich zu Ihnen passt.",
        },
        "/lp/techniker-elektrotechnik/": {
            title: "Techniker Elektrotechnik",
            description:
                "Die Elektrotechnik ist ein zukunftsträchtiges Feld mit hohem Entwicklungspotenzial – ideal für Ihren beruflichen Aufstieg. Das ILS bildet Sie wie eine Technikerschule zum staatlich geprüften Techniker Elektrotechnik aus, nur flexibel neben dem Beruf. Mit Schwerpunkten wie Energie-, Automatisierungs- oder Kommunikationstechnik qualifizieren Sie sich für anspruchsvolle Fach- und Führungsaufgaben. Finden Sie den passenden Schwerpunkt für Ihre Laufbahn.",
        },
        "/lp/weiterbildung-bueromanagement/": {
            title: "Büromanagement",
            description:
                "Schaffen Sie sich mit einem qualifizierten Abschluss im Büromanagement neue Perspektiven im Berufsalltag. Beim ILS steigen Sie stufenweise auf – von der Grundqualifikation über den Bürosachbearbeiter bis zu IHK-Aufstiegsfortbildungen wie Fachwirt oder Bilanzbuchhalter. Berufsbegleitend und flexibel entwickeln Sie sich zur unverzichtbaren Kraft im Büro. Schauen Sie, welcher Lehrgang Sie weiterbringt.",
        },
        "/lp/meister/": {
            title: "Meister",
            description:
                "Der anerkannte Meistertitel ist das Fundament für Ihren beruflichen Aufstieg – bis hin zu Führungsverantwortung und Selbstständigkeit. Das ILS bereitet Sie optimal auf die IHK- bzw. HWK-Prüfung in Fachrichtungen wie Elektrotechnik, Metall oder Luftfahrttechnik vor. Sie lernen zeitlich flexibel statt an einer klassischen Meisterschule und sichern sich in einigen Regionen sogar Sonderkonditionen. Informieren Sie sich über den Weg zu Ihrem Meistertitel.",
        },
        "/lp/fotolehrgaenge/": {
            title: "Fotolehrgänge",
            description:
                "Ein gutes Bild sagt mehr als tausend Worte – und mit dem richtigen Können gelingen Ihnen genau solche Aufnahmen. In den Fotolehrgängen des ILS lernen Sie professionelles Fotografieren und die fachmännische Bildbearbeitung am PC aus einer Hand. Ob aus beruflichen oder privaten Gründen: Sie lernen bequem von zuhause im eigenen Tempo. Entdecken Sie, welcher Lehrgang zu Ihren Foto-Zielen passt.",
        },
        "/lp/back-office/": {
            title: "Office-Management / Back-Office",
            description:
                "Mit einem qualifizierten Abschluss im Office Management legen Sie die Basis für Ihre berufliche Weiterentwicklung. Beim ILS reicht das Spektrum von kaufmännischen Grundlagen über praxisnahe Microsoft-Office-Kompetenz bis zur Managementassistenz. Berufsbegleitend und flexibel machen Sie sich im Büro unverzichtbar. Sehen Sie sich an, welcher Lehrgang Sie Ihrem Ziel näherbringt.",
        },
        "/lp/gesundheitswesen/": {
            title: "Gesundheitswesen",
            description:
                "Das Gesundheitswesen wächst – und bietet Ihnen attraktive Perspektiven mit Sinn. Mit einer Weiterbildung beim ILS legen Sie die Grundlage für Ihren Aufstieg, ob in Ernährungsberatung, Prävention, Praxismanagement oder als Fachwirt im Gesundheits- und Sozialwesen (IHK). Berufsbegleitend und flexibel qualifizieren Sie sich für mehr Verantwortung. Entdecken Sie, welcher Lehrgang zu Ihren Zielen passt.",
        },
        "/lp/sozialwesen/": {
            title: "Sozialwesen",
            description:
                "Im Sozialwesen verbinden Sie eine sinnstiftende Aufgabe mit echten Aufstiegschancen. Das ILS bietet Ihnen ein attraktives Lehrgangsangebot, vom Fachwirt im Gesundheits- und Sozialwesen (IHK) über die Altenpflege bis zur Erziehungsberatung. Berufsbegleitend und ortsunabhängig legen Sie die Grundlage für Ihre Weiterentwicklung. Schauen Sie, welcher Weg zu Ihnen passt.",
        },
        "/lp/betriebswirt/": {
            title: "Betriebswirt",
            description:
                "Mit einer Weiterbildung zum Betriebswirt erweitern Sie Ihr betriebswirtschaftliches Fachwissen grundlegend – und qualifizieren sich für anspruchsvolle Fach- und Führungsaufgaben. Beim ILS wählen Sie passend zu Ihrem Ziel und Ihrer Vorbildung aus verschiedenen Fachrichtungen, bis hin zum Master Professional. So verbinden Sie Ihre Berufserfahrung mit fundierter Theorie zu einem klaren Karrierevorsprung. Finden Sie die Fachrichtung, die zu Ihren Plänen passt.",
        },
        "/lp/immobilien/": {
            title: "Immobilien",
            description:
                "Die Immobilienbranche erzielt Jahr für Jahr hohe Umsätze und spielt eine bedeutende wirtschaftliche Rolle – ein Feld mit Perspektive. Beim ILS qualifizieren Sie sich mit anerkannten Abschlüssen wie dem Immobilienfachwirt (IHK) oder dem geprüften Immobilienmakler. Berufsbegleitend und flexibel werden Sie zur gefragten Fachkraft, vom Verkauf bis zur Hausverwaltung. Sehen Sie sich an, welcher Lehrgang zu Ihren Zielen passt.",
        },
        "/lp/sprachkurse/": {
            title: "Sprachkurse",
            description:
                "Wer eine Fremdsprache beherrscht, verschafft sich klare Vorteile im Beruf – und kommuniziert auch auf Reisen mühelos. Beim ILS wählen Sie aus einer großen Sprachauswahl, darunter Englisch, Spanisch, Französisch, Latein und Russisch. Sie lernen flexibel im eigenen Tempo, ob als Einstieg oder zum Vertiefen vorhandener Kenntnisse. Finden Sie den Sprachkurs, der zu Ihren Zielen passt.",
        },
    };

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

    function updateLayout() {
        q("head").insertAdjacentHTML(
            "beforeend",
            /* HTML */ `
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
            `,
        );

        q("ul.list.list--unordered.list--unordered-with-icon").innerHTML = /* HTML */ `
            ${[
                "Deutschlands größte Fernschule, mehrfach ausgezeichnet",
                "Ihr Abschluss mit Gewicht im Lebenslauf",
                "Ihr Tempo, Ihr Alltag: Weiterbildung, die sich in Ihr Leben einfügt - flexibel lernen wenn es passt",
            ]
                .map((txt) => /* HTML */ `<li><span class="ab-icon">${ASSETS.check_svg}</span> <span class="ab-text">${txt}</span></li>`)
                .join("")}
        `;

        q("ul.list.list--unordered.list--unordered-with-icon").insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-review-container">
                    <div class="ab-review-top">
                        <div class="ab-review-stars">${ASSETS.star_reviews}</div>
                        <div class="ab-review-count">4,7 (1.800 Bewertungen)</div>
                    </div>
                    <div class="ab-review-bottom">Gesamtwertung ILS - fernstudiumcheck.de</div>
                </div>
            `,
        );

        q(".stage-landingpage__picture-badge").insertAdjacentHTML(
            "beforeend",
            /* HTML */ `<span class="ab-badge-text"> Lehrgang <b>4 Wochen kostenlos</b> ausprobieren und dann durchstarten </span> `,
        );

        q(".stage-landingpage__header").insertAdjacentHTML("beforeend", /* HTML */ ` ${q(".stage-landingpage__picture-badge").outerHTML} `);

        q(".section.section--pos-relative.section--spacing-top-none").insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-new-heading-section-mobile">
                    <div class="ab-header">Erreichen Sie mit dem ${q(".stage-landingpage__header h1.headline.headline--h1").textContent} Ihre neuen Ziele</div>
                    <div class="ab-description">${DATA[window.location.pathname].description}</div>
                </div>
            `,
        );

        q(".stage-landingpage__header").insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-new-heading-section-desktop">
                    <div class="ab-header">Erreichen Sie mit dem ${q(".stage-landingpage__header h1.headline.headline--h1").textContent} Ihre neuen Ziele</div>
                    <div class="ab-description">${DATA[window.location.pathname].description}</div>
                </div>
            `,
        );
    }

    async function repositionElements() {
        const selector = ".section.section--spacing-bottom-none, .section:has(.teaser-course)";
        const siblingNodesSelectorList = [
            ".section.section--bg-orange:has(.teaser-oiv)",
            ".section.section--conditional-instagram-spacing-top",
            ".section.section--bg-orange.section--mobile-spacing-top-xxl",
            ".section:has(.listbox)",
        ];

        await waitForElementAsync(() => q(selector));
        await waitForElementAsync(() => q(siblingNodesSelectorList.join(",")));

        const targetNode = q(selector);

        siblingNodesSelectorList.forEach((cSelector) => {
            const cNode = q(cSelector);
            if (!cNode) return;
            targetNode.insertAdjacentElement("afterend", cNode);
        });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        updateLayout();
        repositionElements();
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q(".section.section--pos-relative.section--spacing-top-none") &&
            q(".stage-landingpage__header h1.headline.headline--h1") &&
            q("ul.list.list--unordered.list--unordered-with-icon") &&
            q(".stage-landingpage__picture-badge")
        );
    }

    await waitForElementAsync(checkForItems);
    init();
})();
