(() => {
    if (location.pathname !== "/products/testosterone-blood-test") return;

    // zero-based indexes
    const REPLACE = {
        1: "https://cdn-3.convertexperiments.com/uf/10018141/10018430/image-a-1_6adb4650bd35f.png",
        2: "https://cdn-3.convertexperiments.com/uf/10018141/10018430/image-b-1_6adb4664b12cf.png",
    };
    const REMOVE_INDEX = 5;

    const waitFor = (sel, cb, t = 10000) => {
        const el = document.querySelector(sel);
        if (el) return cb(el);
        if (t > 0) setTimeout(() => waitFor(sel, cb, t - 50), 50);
    };

    waitFor(".product-gallery [data-gallery-figure]", (first) => {
        const gallery = first.closest(".product-gallery");
        if (gallery.dataset.odt023) return;
        gallery.dataset.odt023 = "1";

        const figs = () => [...gallery.querySelectorAll("[data-gallery-figure]")];
        const thumbs = () => [...gallery.querySelectorAll("[data-gallery-thumbnail]")];
        const F = figs();
        const T = thumbs();

        // 1. Swap images (slide + thumbnail) and mark the slide as replaced
        Object.entries(REPLACE).forEach(([i, src]) => {
            if (!F[i]) return;
            F[i].dataset.zoom = src;
            F[i].dataset.replaced = "1";
            F[i].querySelectorAll("noscript").forEach((n) => n.remove());
            [F[i].querySelector("img"), T[i]?.querySelector("img")].forEach((img) => {
                if (!img) return;
                [...img.attributes].forEach((a) => a.name.startsWith("data-rimg") && img.removeAttribute(a.name));
                img.removeAttribute("srcset");
                img.src = src;
            });
        });

        // 2. Remove the slide + thumbnail, then refresh Flickity and indexes
        F[REMOVE_INDEX]?.remove();
        T[REMOVE_INDEX]?.remove();

        const slider = gallery.querySelector(".flickity-enabled");
        const flk = slider && window.Flickity?.data(slider);
        if (flk) {
            flk.reloadCells();
            flk.resize();
            flk.reposition();
        }
        figs().forEach((f, i) => (f.dataset.galleryIndex = i));
        thumbs().forEach((t, i) => (t.dataset.galleryIndex = i));

        // 3. Own lightbox for replaced images (theme zoom can't see them)
        const openLightbox = (start) => {
            let i = start;
            const ov = document.createElement("div");
            ov.style.cssText = "position:fixed;inset:0;z-index:2147483000;background:rgba(0,0,0,.9);display:flex;align-items:center;justify-content:center";
            const b = (t, a, pos) => `<button data-a="${a}" style="position:absolute;${pos};background:none;border:0;color:#fff;font-size:40px;cursor:pointer">${t}</button>`;
            ov.innerHTML = b("×", "x", "top:12px;right:20px") + b("‹", "p", "left:16px") + b("›", "n", "right:16px") + '<img style="max-width:92vw;max-height:92vh">';
            const img = ov.querySelector("img");
            const show = () => {
                const list = figs();
                i = (i + list.length) % list.length;
                img.src = list[i].dataset.zoom;
            };
            const close = () => {
                ov.remove();
                document.removeEventListener("keydown", onKey);
            };
            const onKey = (e) => {
                if (e.key === "Escape") close();
                else if (e.key === "ArrowLeft") i--, show();
                else if (e.key === "ArrowRight") i++, show();
            };
            ov.onclick = (e) => {
                const a = e.target.dataset.a;
                if (a === "p") i--, show();
                else if (a === "n") i++, show();
                else if (a === "x" || e.target === ov) close();
            };
            document.addEventListener("keydown", onKey);
            document.body.appendChild(ov);
            show();
        };

        gallery.addEventListener(
            "click",
            (e) => {
                const list = figs();
                let fig = e.target.closest("[data-gallery-figure]");
                if (!fig && e.target.closest("[data-gallery-expand]")) fig = list.find((f) => f.classList.contains("is-selected"));
                if (!fig?.dataset.replaced) return; // let the theme handle other images
                e.preventDefault();
                e.stopImmediatePropagation();
                openLightbox(list.indexOf(fig));
            },
            true,
        );
    });
})();
