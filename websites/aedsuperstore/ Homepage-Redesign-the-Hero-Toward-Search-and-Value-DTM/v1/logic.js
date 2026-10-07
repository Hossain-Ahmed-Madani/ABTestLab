(function () {
    const SITE_ID = "zsrz4a";
    const BASE = `https://${SITE_ID}.a.searchspring.io/api`;
    const MIN_CHARS = 2;
    const DEBOUNCE = 250;
    const SUGGEST_LIMIT = 4;
    const PRODUCT_LIMIT = 4;
    const FALLBACK_SEARCH_URL = (q) => `/search?q=${encodeURIComponent(q)}`; // adjust if form action differs

    const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

    function init() {
        const original = document.querySelector(".searchWidget");
        const bannerHead = document.querySelector(".banner-head");
        if (!original || !bannerHead || document.querySelector(".searchWidget--clone")) return;

        const clone = original.cloneNode(true);
        clone.classList.add("searchWidget--clone");
        clone.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));
        clone.querySelectorAll("[for]").forEach((el) => el.removeAttribute("for"));

        const input = clone.querySelector('input[type="search"], input[type="text"]');
        const form = clone.querySelector("form");
        if (!input) return;
        input.setAttribute("autocomplete", "off");

        clone.style.position = clone.style.position || "relative";
        const dropdown = document.createElement("div");
        dropdown.className = "searchWidget-clone__dropdown";
        dropdown.style.cssText = `position:absolute;left:0;right:0;top:100%;z-index:9999;background:#fff;
        border:1px solid #ddd;box-shadow:0 6px 16px rgba(0,0,0,.15);max-height:420px;overflow:auto;
        display:none;text-align:left;font-size:14px;color:#222;`;
        clone.appendChild(dropdown);

        let timer,
            ctrl,
            active = -1;
        const close = () => {
            dropdown.style.display = "none";
            dropdown.innerHTML = "";
            active = -1;
        };

        const getJSON = async (url, signal) => {
            const r = await fetch(url, { signal, credentials: "omit", headers: { accept: "application/json" } });
            if (!r.ok) throw new Error(r.status);
            return r.json();
        };

        const render = (q, terms, products) => {
            if (!terms.length && !products.length) return close();
            let html = "";
            if (terms.length) {
                html += `<div style="padding:8px 12px;font-weight:600;background:#f7f7f7;">Suggestions</div>`;
                html += terms
                    .map(
                        (t) => `<a href="${esc(FALLBACK_SEARCH_URL(t))}" data-term="${esc(t)}" class="clone-term"
            style="display:block;padding:8px 12px;color:#222;text-decoration:none;">${esc(t)}</a>`,
                    )
                    .join("");
            }
            if (products.length) {
                html += `<div style="padding:8px 12px;font-weight:600;background:#f7f7f7;">Products</div>`;
                html += products
                    .map(
                        (p) => `<a href="${esc(p.url)}" class="clone-product"
            style="display:flex;gap:10px;align-items:center;padding:8px 12px;color:#222;text-decoration:none;">
            ${p.img ? `<img src="${esc(p.img)}" alt="" style="width:44px;height:44px;object-fit:contain;">` : ""}
            <span style="flex:1">${esc(p.name)}</span>
            ${p.price ? `<strong>$${esc(Number(p.price).toLocaleString())}</strong>` : ""}</a>`,
                    )
                    .join("");
            }
            dropdown.innerHTML = html;
            dropdown.style.display = "block";
            active = -1;
        };

        const run = async (q) => {
            if (ctrl) ctrl.abort();
            ctrl = new AbortController();
            const { signal } = ctrl;
            console.log('signal', signal)
            try {
                // const [sug, res] = await Promise.all([
                //   getJSON(`${BASE}/suggest/query?lang=en&limit=${SUGGEST_LIMIT}&pubId=${SITE_ID}&query=${encodeURIComponent(q)}`, signal)
                //     .catch(e => { if (e.name === 'AbortError') throw e; return {}; }),
                //   getJSON(`${BASE}/search/search.json?siteId=${SITE_ID}&q=${encodeURIComponent(q)}&resultsFormat=native&resultsPerPage=${PRODUCT_LIMIT}`, signal)
                //     .catch(e => { if (e.name === 'AbortError') throw e; return {}; }),
                // ]);

                const getSS = (k) => {
                    try {
                        return JSON.parse(localStorage.getItem(k))?.value?.value || "";
                    } catch {
                        return "";
                    }
                };

                const sug = await getJSON(`${BASE}/suggest/query?lang=en&limit=${SUGGEST_LIMIT}&pubId=${SITE_ID}&query=${encodeURIComponent(q)}`, signal).catch((e) => {
                    if (e.name === "AbortError") throw e;
                    return {};
                });

                const queryValue = sug?.suggested?.text || q;

                const res = await getJSON(
                    `${BASE}/search/autocomplete.json?ajaxCatalog=v3&resultsFormat=native&siteId=zsrz4a&resultsPerPage=4&q=${encodeURIComponent(queryValue)}&userId=${getSS("ssUserId")}&sessionId=${getSS("ssSessionId")}&pageLoadId=${getSS("ssPageLoadId")}&beacon=true&source=input&input=${encodeURIComponent(q)}`,
                    signal,
                ).catch((e) => {
                    if (e.name === "AbortError") throw e;
                    return {};
                });

                const terms = [sug.suggested?.text, ...(sug.alternatives || []).map((a) => a.text)]
                    .filter(Boolean)
                    .filter((t, i, arr) => arr.indexOf(t) === i)
                    .slice(0, SUGGEST_LIMIT);

                const products = (res.results || []).slice(0, PRODUCT_LIMIT).map((r) => ({
                    name: r.name,
                    url: r.url || r.link,
                    img: r.thumbnailImageUrl || r.imageUrl,
                    price: r.price,
                }));

                if (input.value.trim() === q) render(q, terms, products);
            } catch (e) {
                if (e.name !== "AbortError") close();
            }
        };

        input.addEventListener("input", () => {
            clearTimeout(timer);
            const q = input.value.trim();
            if (q.length < MIN_CHARS) return close();
            timer = setTimeout(() => run(q), DEBOUNCE);
        });

        input.addEventListener("keydown", (e) => {
            const links = [...dropdown.querySelectorAll("a")];
            if (!links.length) return;
            if (e.key === "ArrowDown") {
                e.preventDefault();
                active = (active + 1) % links.length;
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                active = (active - 1 + links.length) % links.length;
            } else if (e.key === "Escape") return close();
            else if (e.key === "Enter" && active > -1) {
                e.preventDefault();
                return links[active].click();
            } else return;
            links.forEach((l, i) => (l.style.background = i === active ? "#f0f0f0" : ""));
        });

        // Clicking a suggested term fills the input and submits the clone's own form
        dropdown.addEventListener("click", (e) => {
            const a = e.target.closest(".clone-term");
            if (!a) return;
            e.preventDefault();
            input.value = a.dataset.term;
            close();
            form ? (form.requestSubmit ? form.requestSubmit() : form.submit()) : (location.href = a.href);
        });

        document.addEventListener("click", (e) => {
            if (!clone.contains(e.target)) close();
        });

        if (form)
            form.addEventListener("submit", (e) => {
                if (!input.value.trim()) e.preventDefault();
            });

        bannerHead.insertAdjacentElement("afterend", clone);
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
})();