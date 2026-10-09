(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-HOMEPAGE-HERO-SEARCH .ab-hidden {
  display: none !important;
}
.AB-HOMEPAGE-HERO-SEARCH .frame-feature {
  display: none;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-container {
  background-color: #eaf4fa;
  padding: 24px 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
}
.AB-HOMEPAGE-HERO-SEARCH h2.ab-hero-heading {
  font-family: Rubik, Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  color: #0d21a1;
  margin: 0;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search {
  position: relative;
  width: 100%;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-searchBox {
  border: 1px solid #b9b9b9;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search label#ab-searchLabel {
  display: flex !important;
  flex-wrap: nowrap;
  margin: 0;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search input.search-text {
  height: 45px;
  border: none;
  padding: 12px 0 12px 24px;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search input#ab-searchlight {
  height: 45px;
  border: none;
  padding: 12px 0 12px 24px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #282828;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .form-control:focus {
  box-shadow: none;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .search-submit {
  position: static;
  height: 45px;
  width: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .search-submit .ab-icon-search {
  width: 24px;
  height: 24px;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-results {
  position: absolute;
  top: 100%;
  z-index: 100;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid #e7e5e5;
  border-top: 0px;
  background-color: #fff;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-header {
  height: 34px;
  background-color: #e7e5e5;
  padding: 10px 16px;
  align-content: center;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-header__text {
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  text-transform: uppercase;
  color: #6b7280;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-result-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-result-item {
  width: 100%;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #e7e5e5;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-result-item__link {
  border: none;
  text-decoration: none;
  outline: none;
  margin: 5px;
  gap: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-result-item__link:hover {
  border: none;
  text-decoration: none;
  outline: none;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-result-item__img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  min-width: 48px;
  height: 48px;
  min-height: 48px;
  background-color: #fff;
  padding: 5px;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-result-item__img {
  object-fit: contain;
  object-position: center;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-result-item__name {
  flex-grow: 1;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #282828;
  white-space: nowrap; /* 2. Forces the text to stay on a single line */
  overflow: hidden; /* 3. Hides the text that spills out */
  text-overflow: ellipsis;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-result-item__price {
  font-family: Rubik, Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #282828;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-footer {
  padding: 12px 16px 14px;
  text-align: center;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-footer__cta {
  border: none;
  text-decoration: none;
  outline: none;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  color: #0d21a1;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-footer__cta:hover {
  border: none;
  text-decoration: none;
  outline: none;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-promo-cta {
  height: 24px;
  background-color: #e00034;
  padding: 5px 10px;
  border-radius: 100px;
  font-family: Rubik, Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #ffffff;
  align-content: center;
  text-decoration: none;
  outline: none;
  margin: 0;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-promo-cta:hover {
  text-decoration: none;
  outline: none;
}
@media screen and (min-width: 991px) {
  .AB-HOMEPAGE-HERO-SEARCH .ab-hero-container {
    padding: 59.5px 0px;
    gap: 24px;
  }
  .AB-HOMEPAGE-HERO-SEARCH h2.ab-hero-heading {
    font-weight: 500;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
  }
  .AB-HOMEPAGE-HERO-SEARCH h2.ab-hero-heading br {
    display: none;
  }
  .AB-HOMEPAGE-HERO-SEARCH .ab-search-results {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .AB-HOMEPAGE-HERO-SEARCH .ab-hero-search {
    max-width: 800px;
  }
  .AB-HOMEPAGE-HERO-SEARCH .ab-hero-search input.search-text {
    height: 60px;
    padding: 18.5px 24px;
  }
  .AB-HOMEPAGE-HERO-SEARCH .ab-hero-search input#ab-searchlight {
    height: 60px;
    padding: 18.5px 24px;
    font-size: 20px;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0px;
  }
  .AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .search-submit {
    height: 60px;
    width: 68px;
  }
  .AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .search-submit .ab-icon-search {
    width: 30px;
    height: 30px;
  }
  .AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-header {
    height: 36px;
    padding: 10px 16px;
  }
  .AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-header__text {
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0px;
  }
  .AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-result-item__link {
    margin: 10px 16px;
    gap: 12px;
  }
  .AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-result-item__name {
    font-weight: 400;
    font-size: 16px;
  }
  .AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-result-item__price {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0px;
  }
  .AB-HOMEPAGE-HERO-SEARCH .ab-hero-search .ab-search-footer__cta {
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
  }
  .AB-HOMEPAGE-HERO-SEARCH .ab-hero-promo-cta {
    height: 35px;
    padding: 8px 20px;
    border-radius: 21.6px;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0px;
  }
}
`;
      document.head.appendChild(style);
      setTimeout(() => {
        clearInterval(interval); // Clear the interval after 5 seconds
      }, 5000);
    }
  }, 100); // Check every 100ms for <head>
})();
(async () => {
  const TEST_CONFIG = {
    page_initials: "AB-HOMEPAGE-HERO-SEARCH",
    test_variation: 1,
    test_version: 0.0002,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const ASSETS = {
    search_svg: /* HTML */ `
      <svg
        class="ab-icon-search"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.0002 21.0002L16.6602 16.6602M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          stroke="white"
          stroke-width="2.72727"
          stroke-linecap="round"
        />
      </svg>
    `,
  };

  async function waitForElementAsync(
    predicate,
    timeout = 20000,
    frequency = 150,
  ) {
    const startTime = Date.now();

    return new Promise((resolve, reject) => {
      if (typeof predicate === "function" && predicate()) {
        return resolve(true);
      }

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;

        if (elapsed >= timeout) {
          clearInterval(interval);
          return reject(
            new Error(
              `Timeout of ${timeout}ms reached while waiting for condition: ${predicate.toString()}`,
            ),
          );
        }

        if (typeof predicate === "function" && predicate()) {
          clearInterval(interval);
          return resolve(true);
        }
      }, frequency);
    });
  }

  async function fetchJSON(url) {
    const response = await fetch(url, {
      headers: { accept: "application/json" },
    });
    if (!response.ok) throw new Error(response.status);
    return response.json();
  }

  function getLocalStorageValue(key) {
    return JSON.parse(localStorage.getItem(key))?.value?.value || "";
  }

  function q(s, o) {
    return document.querySelector(s);
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

  function getSearchResultLayout({ queryValue, pagination, results }) {
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
                    <img
                      class="ab-search-result-item__img"
                      src="${imageUrl}"
                      alt="${name}"
                    />
                  </span>
                  <span class="ab-search-result-item__name">${name}</span>
                  <span class="ab-search-result-item__price">
                    $${parseFloat(price).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </a>
              </li>
            `,
          )
          .join("")}
      </ul>
      <div class="ab-search-footer">
        <a
          href="/search-results.html?keyword=${queryValue}"
          class="ab-search-footer__cta"
          >See ${pagination.totalResults} results for "${queryValue}"</a
        >
      </div>
    `;
  }

  async function getSearchResults(searchedValue) {
    if (!searchedValue) throw new Error("Search value is empty");

    const SITE_ID = "zsrz4a";
    const BASE = `https://${SITE_ID}.a.searchspring.io/api`;
    const SUGGEST_LIMIT = 3;

    try {
      const suggestion = await fetchJSON(
        `${BASE}/suggest/query?lang=en&limit=${SUGGEST_LIMIT}&pubId=${SITE_ID}&query=${encodeURIComponent(searchedValue)}`,
      );

      const queryValue = suggestion?.suggested?.text || searchedValue;
      if (!queryValue) throw new Error("No search query available");

      const response = await fetchJSON(
        `${BASE}/search/autocomplete.json?ajaxCatalog=v3&resultsFormat=native&siteId=${SITE_ID}&resultsPerPage=${SUGGEST_LIMIT}&q=${encodeURIComponent(queryValue)}&userId=${getLocalStorageValue("ssUserId")}&sessionId=${getLocalStorageValue("ssSessionId")}&pageLoadId=${getLocalStorageValue("ssPageLoadId")}&beacon=true&source=input&input=${encodeURIComponent(searchedValue)}`,
      );

      if (!response?.results?.length)
        throw new Error("No search results found");

      return { queryValue, ...response };
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
        eventAttached = false;
        document.removeEventListener("click", callback);
      }
    };

    document.addEventListener("click", callback);
    q("#searchlight")?.addEventListener("click", callback);
  }

  function handleClick(e) {
    if (e.target.closest(".ab-search-form .search-submit")) {
      const url =
        "/search-results.html?keyword=" +
          q("input#ab-searchlight").value.trim() || "";
      handleSearchView("hide");

      if (e.ctrlKey || e.metaKey) {
        window.open(url, "_blank");
      } else {
        window.location.href = url;
      }
    }

    if (e.target.closest(".ab-search-footer__cta")) {
      e.preventDefault();
      const url = e.target.closest(".ab-search-footer__cta").href;
      handleSearchView("hide");
      window.location.href = url;
    }

    if (
      e.target.closest("#ab-searchlight") &&
      q(".ab-search-results:not(:empty)")
    ) {
      handleSearchView("show");
      addOutsideClickEvent();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const url =
      "/search-results.html?keyword=" +
        q("input#ab-searchlight").value.trim() || "";
    window.location.href = url;
  }

  async function handleSearch(e) {
    const targetNode = q(".ab-search-results");

    try {
      const searchedValue = e.target.value.trim();
      if (!searchedValue)
        throw new Error("Invalid Search Value: " + searchedValue);
      const res = await getSearchResults(searchedValue);
      targetNode.innerHTML = getSearchResultLayout(res);
      handleSearchView("show");
      addOutsideClickEvent();
    } catch (error) {
      handleSearchView("hide");
      targetNode.innerHTML = "";
    }
  }

  function init() {
    if (window[page_initials] === true) return;
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    window[page_initials] = true;

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
              <form class="ab-search-form">
                <div class="ab-searchBox">
                  <div class="ab-search-form">
                    <label
                      id="ab-searchLabel"
                      for="ab-search"
                      style="display: inline"
                    >
                      <input
                        type="text"
                        id="ab-searchlight"
                        aria-labelledby="searchLabel"
                        name="keyword"
                        value=""
                        placeholder="Search by part #, brand, or product..."
                        class="search-text form-control"
                      />
                      <button type="click" class="search-submit">
                        ${ASSETS["search_svg"]}
                      </button>
                    </label>
                  </div>
                </div>
              </form>
              <div class="ab-search-results ab-hidden"></div>
            </div>
          </div>
          <a href="/aeds.html" class="ab-hero-promo-cta"
            >$175 off $1,500+ · code SAVE175</a
          >
        </div>
      `,
    );

    const debouncedSearch = debounce(handleSearch, 250);
    q("#ab-searchlight").addEventListener("input", debouncedSearch);
    q(".ab-hero-search").addEventListener("click", handleClick);
    q("form.ab-search-form").addEventListener("submit", handleSubmit);
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(".frame-feature") &&
      q(".searchWidget")
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    return false;
  }
})();
