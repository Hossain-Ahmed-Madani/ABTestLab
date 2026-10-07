(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "AED Superstore",
        site_url: "https://www.aedsuperstore.com",
        test_name: "Homepage - Redesign the Hero Toward Search and Value [DTM]",
        page_initials: "AB-HOMEPAGE-HERO-SEARCH",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        search_svg: /* HTML */ `
            <svg class="ab-icon-search" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M21.0002 21.0002L16.6602 16.6602M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                    stroke="white"
                    stroke-width="2.72727"
                    stroke-linecap="round"
                />
            </svg>
        `,
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

    async function fetchJSON(url) {
        const response = await fetch(url, { headers: { accept: "application/json" } });
        if (!response.ok) throw new Error(response.status);
        return response.json();
    }

    function getLocalStorageValue(key) {
        return JSON.parse(localStorage.getItem(key))?.value?.value || "";
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

    function getSearchResultLayout({ pagination, results, searchedValue }) {
        return /* HTML */ `
            <div class="ab-search-header">
                <p class="ab-search-header__text">Products Suggestions</p>
            </div>
            <ul class="ab-search-result-list">
                ${results
                    .map(
                        ({ id, imageUrl, name, price, url }) => /* HTML */ `
                            <li id="${id}" class="ab-search-result-item">
                                <a href="${url}" class="ab-search-result-item__link">
                                    <span class="ab-search-result-item__img-container">
                                        <img class="ab-search-result-item__img" src="${imageUrl}" alt="${name}" />
                                    </span>
                                    <span class="ab-search-result-item__name">${name}</span>
                                    <span class="ab-search-result-item__price">$${parseFloat(price).toFixed(2)}</span>
                                </a>
                            </li>
                        `,
                    )
                    .join("")}
            </ul>
            <div class="ab-search-footer">
                <a href="/search-results.html?keyword=${searchedValue}" class="ab-search-footer__cta">See ${pagination.totalResults} results for "${searchedValue}"</a>
            </div>
        `;
    }

    async function getSearchResults(searchedValue) {
        if (!searchedValue) throw new Error("Search value is empty");

        const SITE_ID = "zsrz4a";
        const BASE = `https://${SITE_ID}.a.searchspring.io/api`;
        const SUGGEST_LIMIT = 4;

        try {
            const suggestion = await fetchJSON(`${BASE}/suggest/query?lang=en&limit=${SUGGEST_LIMIT}&pubId=${SITE_ID}&query=${encodeURIComponent(searchedValue)}`);

            const queryValue = suggestion?.suggested?.text || searchedValue;

            if (!queryValue) throw new Error("No search query available");

            const response = await fetchJSON(
                `${BASE}/search/autocomplete.json?ajaxCatalog=v3&resultsFormat=native&siteId=${SITE_ID}&resultsPerPage=${SUGGEST_LIMIT}&q=${encodeURIComponent(queryValue)}&userId=${getLocalStorageValue("ssUserId")}&sessionId=${getLocalStorageValue("ssSessionId")}&pageLoadId=${getLocalStorageValue("ssPageLoadId")}&beacon=true&source=input&input=${encodeURIComponent(searchedValue)}`,
            );

            if (!response?.results?.length) throw new Error("No search results found");

            return response;
        } catch (error) {
            throw error;
        }
    }

    function handleSearchView(action /* show, hide */) {
        const targetNode = q(".ab-search-results");

        if (action === "show") {
            targetNode.classList.remove("ab-hidden");
        } else if (action === "hide") {
            targetNode.classList.add("ab-hidden");
        }
    }

    let eventAttached = false;

    function addOutsideClickEvent() {
        if (eventAttached) return;
        eventAttached = true;

        const callback = (e) => {
            if (!e.target.closest(".ab-hero-search")) {
                handleSearchView("hide");
                eventAttached = false
                document.removeEventListener("click", callback);
            }
        };
        
        
        document.addEventListener("click", callback);
    }

    function handleClick(e) {
        if (e.target.closest(".ab-search-form .search-submit")) {
            window.location.href = "/search-results.html?keyword=" + q("input#ab-searchlight").value.trim() || "";
            handleSearchView("hide");
        }

        if (e.target.closest(".ab-search-footer__cta")) {
            handleSearchView("hide");
        }

        if (e.target.closest("#ab-searchlight") && q('.ab-search-results:not(:empty)')) {
            handleSearchView("show");
        }
    }

    async function handleSearch(e) {
        const targetNode = q(".ab-search-results");

        try {
            const searchedValue = e.target.value.trim();
            if (!searchedValue) throw new Error("Invalid Search Value: " + searchedValue);
            const res = await getSearchResults(searchedValue);
            targetNode.innerHTML = getSearchResultLayout({ ...res, searchedValue });
            handleSearchView("show");
            addOutsideClickEvent();
        } catch (error) {
            handleSearchView("hide");
            targetNode.innerHTML = "";
        }
    }



    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        q(".frame-feature").insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-hero-container">
                    <h2 class="ab-hero-heading">
                        Find the exact AED, pad, <br />
                        or battery you need
                    </h2>
                    <div class="ab-hero-search">
                        <div class="ab-searchWidget">
                            <div class="ab-searchBox">
                                <div class="ab-search-form">
                                    <label id="ab-searchLabel" for="ab-search" style="display: inline">
                                        <input
                                            type="text"
                                            id="ab-searchlight"
                                            aria-labelledby="searchLabel"
                                            name="keyword"
                                            value=""
                                            placeholder="Search for your perfect AED match"
                                            class="search-text form-control"
                                        />
                                        <button type="click" class="search-submit">${ASSETS["search_svg"]}</button>
                                    </label>
                                </div>
                            </div>
                            <div class="ab-search-results ab-hidden"></div>
                        </div>
                    </div>
                    <a href="/aeds.html" class="ab-hero-promo-cta">$175 off $1,500+ · code SAVE175</a>
                </div>
            `,
        );

        const debouncedSearch = debounce(handleSearch, 1000);
        q("#ab-searchlight").addEventListener("input", debouncedSearch);
        q(".ab-hero-search").addEventListener("click", handleClick);
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".frame-feature") && q(".searchWidget"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
