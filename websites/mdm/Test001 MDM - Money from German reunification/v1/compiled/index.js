(function () {
    const exp = {
        exp: "Test001",
        var: "variation",
        getLayoutData: function () {
            const data = {
                352039: {
                    heading: "D-Mark Kursmünzen der Bundesrepublik in neuer Form",
                    sub_title: "14 originalgetreue Gold-Neuprägungen des D-Mark-Kursmünzensatzes – von 1 Pfennig bis 5 D-Mark",
                    benefits_bar: /* HTML */ `
                        <div class="Test001__benefits-bar">
                            <div class="benefit-item">
                                <div class="benefit-icon lock"></div>
                                <span class="benefit-text">Garantierter Festpreis</span>
                            </div>

                            <div class="benefit-item">
                                <div class="benefit-icon stopwatch"></div>
                                <span class="benefit-text">Alle 3-4 Wochen</span>
                            </div>

                            <div class="benefit-item">
                                <div class="benefit-icon gift"></div>
                                <span class="benefit-text">1+1 Gratis zur Startausgabe</span>
                            </div>

                            <div class="benefit-item">
                                <div class="benefit-icon euro"></div>
                                <span class="benefit-text">Fast 275 € Ersparnis</span>
                            </div>
                        </div>
                    `,
                    uspTexts: ["Flatrate Preis - nur 64,99 € pro Sendung", "Je 1/200 Unze aus reinstem Feingold (999/1000)", "Höchste Prägequalität - Polierte Platte"],
                },
                352040: {
                    heading: "DDR Kursmünzen in neuer Form",
                    sub_title: "14 originalgetreue Gold-Neuprägungen des DDR-Kursmünzensatzes von 1990 – von 1 Pfennig bis 5 Mark",
                    benefits_bar: /* HTML */ `
                        <div class="Test001__benefits-bar">
                            <div class="benefit-item">
                                <div class="benefit-icon lock"></div>
                                <span class="benefit-text">Garantierter Festpreis</span>
                            </div>

                            <div class="benefit-item">
                                <div class="benefit-icon stopwatch"></div>
                                <span class="benefit-text">Alle 3-4 Wochen</span>
                            </div>

                            <div class="benefit-item">
                                <div class="benefit-icon gift"></div>
                                <span class="benefit-text">1 + 1 Gratis-Ausgabe zum Start</span>
                            </div>

                            <div class="benefit-item">
                                <div class="benefit-icon euro"></div>
                                <span class="benefit-text">Fast 275 € Ersparnis</span>
                            </div>
                        </div>
                    `,
                    uspTexts: ["Flatrate Preis - nur 64,99 € pro Sendung", "Je 1/200 Unze aus reinstem Feingold (999/1000)", "Höchste Prägequalität - Polierte Platte"],
                },
                352155: {
                    heading: "Staatsgold Deutschland – Goldbarren Vermögens-Edition",
                    sub_title: "14 thematische Goldbarren rund um Vermögensaufbau und finanzielle Grundlagen",
                    benefits_bar: /* HTML */ `
                        <div class="Test001__benefits-bar">
                            <div class="benefit-item">
                                <div class="benefit-icon lock"></div>
                                <span class="benefit-text">Garantierter Festpreis</span>
                            </div>

                            <div class="benefit-item">
                                <div class="benefit-icon stopwatch"></div>
                                <span class="benefit-text">Alle 3-4 Wochen</span>
                            </div>

                            <div class="benefit-item">
                                <div class="benefit-icon gift"></div>
                                <span class="benefit-text">1 + 1 Gratis-Ausgabe zum Start</span>
                            </div>

                            <div class="benefit-item">
                                <div class="benefit-icon euro"></div>
                                <span class="benefit-text">Fast 275 € Ersparnis</span>
                            </div>
                        </div>
                    `,
                    uspTexts: ["Flatrate Preis - nur 64,99 € pro Sendung", "Flatrate Preis - nur 64,99 € pro Sendung", "Offiziell mehrwertsteuerfrei"],
                },
                25817: {
                    heading: "Goldbarren Sternzeichen – die zwölf Tierkreiszeichen",
                    sub_title: "12 Goldbarren mit allen Sternzeichen der Astrologie – als vollständige Serie",
                    benefits_bar: /* HTML */ `
                        <div class="Test001__benefits-bar">
                            <div class="benefit-item">
                                <div class="benefit-icon lock"></div>
                                <span class="benefit-text">Garantierter Festpreis</span>
                            </div>

                            <div class="benefit-item">
                                <div class="benefit-icon stopwatch"></div>
                                <span class="benefit-text">alle 3-4 Wochen</span>
                            </div>

                            <div class="benefit-item">
                                <div class="benefit-icon gift"></div>
                                <span class="benefit-text">1 + 1 Gratis-Ausgabe zum Start</span>
                            </div>

                            <div class="benefit-item">
                                <div class="benefit-icon euro"></div>
                                <span class="benefit-text">Fast 250 € Ersparnis</span>
                            </div>
                        </div>
                    `,
                    uspTexts: ["Flatrate Preis - nur 64,99 € pro Sendung", "Je 1/200 Unze aus reinstem Feingold (999,9/1000)", "Höchste Prägequalität - Polierte Platte"],
                },
            };

            console.log("======== GET DATA ========");
            const urlParams = new URLSearchParams(window.location.search);
            const sku = urlParams.get("sku");
            const targetValue = sku.split("/")[0];

            if (!targetValue) return null;

            return data[targetValue];
        },

        build: function () {
            console.log("======== BUILD TEST ========");

            /* ============================== BUILD START ============================== */
            const scope = {
                utils: {
                    replaceText: (selector, newText, root = document) => {
                        this.waitUntil(
                            () => root?.querySelector(selector),
                            () => {
                                const el = root?.querySelector(selector);
                                if (el) el.textContent = newText;
                            },
                        );
                    },
                },
                mainJS: function () {
                    const { waitUntil, getLayoutData } = exp;
                    const { replaceText } = scope.utils;
                    const dataObj = getLayoutData();

                    if (!dataObj) {
                        console.warn(`No Matching value found for: ${window.location.href}`);
                        return;
                    }

                    const { heading, sub_title, benefits_bar, uspTexts } = dataObj;

                    waitUntil(
                        () => document.querySelector(".dop-product-heading__title"),
                        () => {
                            if (!document.querySelector(".Test001__trust-container")) {
                                document.querySelector(".default-layout__wrapper").insertAdjacentHTML(
                                    "afterbegin",
                                    `<div class="Test001__trust-container">
										<div class="Test001__trust-item Test001__item-shipping">
											<img src="https://assets-manager.abtasty.com/8d2a191170a55164917c790c6a928716/account/shipping.png" alt="Versand" class="Test001__icon-img">
											<span class="trust-text">Versandkostenfrei ab 200 €</span>
										</div>
										<div class="Test001__trust-item Test001__item-retoure">
											<img src="https://assets-manager.abtasty.com/8d2a191170a55164917c790c6a928716/account/retoure.png" alt="30 Tage Rückgabe" class="Test001__icon-img">
											<span class="trust-text">30 Tage Rückgabe</span>
										</div>
										<div class="Test001__trust-item Test001__item-ssl">
											<img src="https://assets-manager.abtasty.com/8d2a191170a55164917c790c6a928716/account/ssl.png" alt="SSL-gesichert" class="Test001__icon-img">
											<span class="trust-text">SSL-gesichert</span>
										</div>
									</div>`,
                                );
                            }

                            if (!document.querySelector(".Test001__benefits-bar .benefit-item")) {
                                document.querySelector(".dop-product-heading__title").innerText = heading;

                                document.querySelector(".dop-product-heading__title").insertAdjacentHTML("afterend", `<p class="Test001__dop-product-heading__subtitle">${sub_title}</p>`);
                            }

                            if (!document.querySelector(".Test001__benefits-bar .benefit-item")) {
                                document.querySelector(".Test001__dop-product-heading__subtitle").insertAdjacentHTML("afterend", benefits_bar);
                            }
                        },
                    );

                    replaceText(".az-badge__text", "Flatrate Kollektion");

                    waitUntil(
                        () => document.querySelector(".az-buy-box__usps-item"),
                        () => {
                            document.querySelectorAll(".az-buy-box__usps-item").forEach((item, index) => {
                                const icon = item.querySelector("i");
                                item.textContent = uspTexts[index];
                                item.prepend(icon);
                            });
                        },
                    );

                    waitUntil(
                        () => document.querySelector(".dop-product-content__title"),
                        () => {
                            replaceText("#\\31 -header .dop-product-content__title", "Ihre Kollektion im Überblick");
                            replaceText("#\\33 -header .dop-product-content__title", "Flatrate im Überblick");
                        },
                    );

                    waitUntil(
                        () => document.querySelector(".az-accordion-panel"),
                        () => {
                            const accordion1 = document.querySelector("#\\31 -panel > div");
                            accordion1.querySelector("img");

                            accordion1.innerHTML =
                                `
								<b>Für Sammler deutscher Geschichte und alle, die mit der</b>
								<p>Die D-Mark prägte über 50 Jahre deutsche Geschichte – von der Währungsreform 1948 bis zur Euro-Einführung 2002. Sie begleitete den wirtschaftlichen Aufstieg Deutschlands und war für viele ein Symbol von Stabilität und Vertrauen.</p>
								<br>

								<p>Diese bedeutende Epoche lebt heute als exklusive Gold-Kollektion weiter. Jede Ausgabe erinnert an ein Stück dieser Geschichte.</p>
								<br>
								
								<b>Warum Sammler diese D-Mark Neuprägungen wählen:</b>
								<ul>
									<li><b>Historischer Wert:</b> Die Neuprägungen zur letzten vollständigen D-Mark-Generation als abgeschlossenes Kapitel deutscher Geldgeschichte.</li>
									<li><b>Premium Goldqualität:</b> 999/1000 Feingold in numismatischer Sammlerqualität.</li>
									<li><b>Werterhalt:</b> Schutz vor Inflation durch physisches Gold + historischen Sammlerwert.</li>
									<li><b>Begrenzte Verfügbarkeit:</b> Nur 20.000 komplette Kollektionen weltweit verfügbar.</li>
								</ul>
							
								<p>Diese meisterhaften Neuprägungen verwandeln Erinnerungen an das deutsche Wirtschaftswunder in greifbares Gold. Perfekt für Sammler deutscher Numismatik und Goldkäufer mit Geschichtsbewusstsein.</p>
								<br>

								` +
                                `<img src="https://cdn.media.amplience.net/i/MDM/352039_006_1080x1080" alt="" width="380" height="380">` +
                                `
								<br>
								<br>
								
								<b>So erhalten Sie Ihre vollständige Kollektion</b> 
								<p>Mit diesem Angebot sichern Sie sich alle 14 Gold-Neuprägungen der D-Mark-Serie. Die ersten beiden Ausgaben beginnen sofort, die weiteren folgen regelmäßig alle 3–4 Wochen in zufälliger Reihenfolge.</p>
								<br>

								<b>Ausgabe 1 · 5-D-Mark (Startausgabe)</b> 
								<p>Die Gold-Neuprägung der historischen 5-DM-Münze erinnert an eine der beliebtesten Kursmünzen der D-Mark-Ära – bekannt als „Heiermann“ oder „Silberadler“. Die Vorderseite trägt den Nennwert "5 Deutsche Mark" und die Umschrift "Bundesrepublik Deutschland", die Rückseite zeigt den Bundesadler – ein Symbol des deutschen Wiederaufbaus und kultureller Identität.</p>
								<br>

								<b>Ausgabe 2 · D-Mark 1-Pfennig (Gratis Startausgabe)</b>
								<p>Gold-Neuprägung der kleinsten D-Mark-Einheit mit dem ikonischen Eichenlaub-Motiv. Diese Ausgabe erhalten Sie kostenlos zu Ihrer ersten Lieferung – im Wert von 79,99 €.</p>
								<br>
	
								<b>Ausgabe 3-14 · Weitere Ausgaben</b>
								<p>Die weiteren zwölf Gold-Neuprägungen erhalten Sie in regelmäßigen Abständen – darunter die Motive aller Kursmünzen von 1-Pfennig bis 5-D-Mark inklusive der 2-D-Mark-Ausgaben der Politiker-Serie und ausgewählter Gedenkmünzen Deutschlands. Jede Ausgabe ist Teil der vollständigen Serie.</p>
								
								<br>
							`;

                            const accordion2 = document.querySelector("#\\32 -panel > div");
                            accordion2.innerHTML = `
								<h3>Motive & Design</h3>
								<span>Startausgabe 1: 5-D-Mark-Neuprägung mit Jahrespunze</span><br>
								<span>Gratis Startausgabe 2: 1-Pfennig-Neuprägung mit Jahrespunze</span><br>

								<h3>Material & Qualität</h3>
								<span>Edelmetall: Feingold (999/1000)</span><br>
								<span>Prägequalität: Polierte Platte</span><br>

								<h3>Größe & Gewicht</h3>
								<span>Durchmesser: 13,92 mm</span><br>
								<span>Gewicht: je 1/200 Unzen</span><br>

								<h3>Limitierung & Zertifikat</h3>
								<span>Weltweite Auflage: Nur 20.000 komplette Kollektionen</span><br>
								<span>Zertifikat: Echtheits-Zertifikat zu jeder Ausgabe inklusive</span><br>

								<h3>Preise & Lieferung</h3>
								<span>Startpreis:</span><br>
								<span>– 5 D-Mark: 64,99 € (statt 79,99 €)</span><br>
								<span>– Gratis: 1 Pfennig (Wert: 79,99 €)</span><br>
								<span>– Folgeausgaben: je 64,99 € (statt 79,99 €)</span><br>
								<span>– Lieferrhythmus: ca. 3–4 Wochen</span><br>

								<h3>Artikel-Details</h3>
								<span>Artikel-Nr.: 352039/006</span><br>
								<span>Jahrespunze: 2025</span><br>
								<span>Serie: Das Geld der Deutschen BRD</span><br><br>
							`;

                            const accordion3 = document.querySelector("#\\33 -panel > div");
                            accordion3.innerHTML = `
								<div class="Test001-table-container">
									<div class="Test001-td-11">
										<b class="Test001-text-golden">IHRE KOLLEKTION IM <br>VERGLEICH</b></td>
									</div>
									<div class="Test001-text-center Test001-td-12">
										<b>EINZELKAUF</b>
										<img src="https://assets-manager.abtasty.com/8d2a191170a55164917c790c6a928716/account/increase.png" alt="Increase Graph">
										<span>Preise steigen <br>mit dem Markt</span>
									</div>
									<div class="Test001-bg-golden Test001-td-13">
										<b>FLATRATE</b>
										<img src="https://assets-manager.abtasty.com/8d2a191170a55164917c790c6a928716/lock.png" alt="Price Lock">
										<span>Preis garantiert <br>für 1 Jahr</span>
									</div>
									<div class="Test001-td-21">
										<b>1× Start-Ausgabe</b><br>
										<span>5 D-Mark der BRD Neuprägung</span>
									</div>
									<div class="Test001-td-22">79,99 €*</div>
									<div class="Test001-td-23">64,99 €</div>
									<div class="Test001-td-31">
										<b>1× Zusatz zur Start-Ausgabe</b><br>
										<span>1 Pfennig der BRD Neuprägung</span>
									</div>
									<div class="Test001-td-32">79,99 €*</div>
									<div class="Test001-td-33">GRATIS</div>
									<div  class="Test001-td-41">
										<b>12× weitere Ausgaben</b><br>
										<span>Das Geld der Deutschen - BRD Neuprägungen</span>
									</div>
									<div class="Test001-td-42">aktuell<br>je 79,99 €*</div>
									<div class="Test001-td-43">je 64,99 €</div>
									<div class="Test001-td-51">
										<span><b>Versandkosten</b><br>Pro Lieferung</span>
									</div>
									<div class="Test001-td-52">je 6,95 €*</div>
									<div class="Test001-td-53">
										<div>
											<b>1. Lieferung frei</b> <br>
											<span>Folgelieferungen je 6,95€ </span>
										</div>
									</div>
									<div class="Test001-td-61">
										<b>Sammelalbum & Zertifikate</b><br>
										<span>Zubehör je Ausgabe</span>
									</div>
									<div class="Test001-td-62">gesondert</div>
									<div class="Test001-td-63">INKLUSIVE</div>
									<div class="Test001-td-71">
										<b>Ihre Gesamtersparnis</b> <br>
										<span>15€ pro Ausgabe · Gratis-Goldprägung · Album inklusive</span>
									</div>
									<div class="Test001-td-72"></div>
									<div class="Test001-td-73" class="Test001-text-center">275 €</div>
									
									<div class="Test001-td-81">
										<b class="Test001-text-golden">SIE BEHALTEN DIE KONTROLLE</b> <br>
										<ul>
											<li>
												<span class="Test001-tick">✓</span>
												<div> 
													<b>30 Tage Testphase</b> <span>— Erstausgabe zur Ansicht mit kostenlosem Rückgaberecht</span>
												</div>
											</li>
											<li>
												<span class="Test001-tick">✓</span> 
												<div>
													<b>Fester Preis</b><span>— 64,99 € je Ausgabe – für ein Jahr garantiert, auch bei steigendem Goldpreis</span>
												</div>
											</li>
											<li>
												<span class="Test001-tick">✓</span> 
												<div>
													<b>Automatisches Ende</b><span>— die Flatrate endet nach 14 Ausgaben automatisch</span></li>
												</div>
											</li>
										</ul>
									</div>
								</table>
							`;
                        },
                    );
                },
            };

            const REQUIRED_SELECTORS = [".Test001__benefits-bar .benefit-item"];

            const checkAndTrigger = () => {
                const allPresent = REQUIRED_SELECTORS.every((sel) => document.querySelector(sel));
                if (!allPresent) scope.mainJS();
            };

            const observer = new MutationObserver((mutations, obs) => {
                clearTimeout(observer._debounceTimer);

                observer._debounceTimer = setTimeout(() => {
                    checkAndTrigger();
                }, 500);
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
            });

            checkAndTrigger();
        },
        waitUntil: function (predicate, success, error, waitTime = 30000) {
            let int = setInterval(function () {
                if (predicate()) {
                    clearInterval(int);
                    int = null;
                    success();
                }
            }, 500);
            setTimeout(function () {
                if (int !== null) {
                    clearInterval(int);
                    if (typeof error === "function") {
                        error();
                    }
                }
            }, waitTime);
        },
        init: function () {
            document.body.classList.add("exp-" + this.exp + "-" + this.var);
            this.build();
        },
    };
    exp.waitUntil(
        () => document.querySelector("body"),
        () => exp.init(),
    );
})();
