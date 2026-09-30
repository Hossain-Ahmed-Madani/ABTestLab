// 1. Features data
const features = [
    {
        label: "Targeted pests",
        text:
            "All major species of ants including: Argentine, Big Headed, Carpenter, Cornfield, " +
            "Crazy, Field, Ghost, Harvester, Honey, Little Black, Odorous House, Pavement, Pharaoh, " +
            "Thief, Velvety Tree, Western Harvester, Acrobat, Fire and Pyramid ants.",
    },
    { label: "Active ingredient", text: "Indoxacarb 0.05%" },
    { label: "Manufacturer", text: "Syngenta (Mfg. Number: 53204)" },
];

// 2. CSS
const css = /* HTML */ `
    .pf-list { padding-left: 1.25rem; font: 16px/1.5 Arial, sans-serif; } .pf-item { position: relative; margin-bottom: 8px; } .pf-text { display: -webkit-box; -webkit-box-orient:
    vertical; -webkit-line-clamp: 2; overflow: hidden; } .pf-toggle { position: absolute; right: 0; bottom: 0; padding-left: 28px; border: 0; cursor: pointer; background:
    linear-gradient(to right, transparent, #fff 24px); color: #2a5db0; font: inherit; text-decoration: underline; } .pf-toggle[hidden] { display: none; } .pf-item.open .pf-text {
    display: inline; overflow: visible; } .pf-item.open .pf-toggle { position: static; padding-left: 6px; background: none; }
`;

// 3. Inject CSS + HTML at the start of body
document.head.insertAdjacentHTML("beforeend", `<style>${css}</style>`);

document.querySelector(".leading-none:has(.price-breaks)").insertAdjacentHTML(
    "beforebegin",
    `<ul class="pf-list">
        ${features
            .map(
                (f) =>
                    /* HTML */ `
                <li class="pf-item">
                        <span class="pf-text"><strong>${f.label}:</strong> ${f.text}</span>
                        <button type="button" class="pf-toggle" hidden>Expand</button>
                    </li>`,
            )
            .join("")}
    </ul>`,
);

// 4. Expand / collapse
function setupItem(item) {
    const text = item.querySelector(".pf-text");
    const btn = item.querySelector(".pf-toggle");

    // Show the button only if the clamped text is actually cut off
    const checkOverflow = () => {
        const wasOpen = item.classList.contains("open");
        item.classList.remove("open");
        btn.hidden = text.scrollHeight <= text.clientHeight + 1;
        item.classList.toggle("open", wasOpen && !btn.hidden);
        btn.textContent = item.classList.contains("open") ? "Collapse" : "Expand";
    };

    btn.addEventListener("click", () => {
        const open = item.classList.toggle("open");
        btn.textContent = open ? "Collapse" : "Expand";
    });

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
}

document.fonts.ready.then(() => {
    document.querySelectorAll(".pf-item").forEach(setupItem);
});
