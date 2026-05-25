function extractFilterTextsFromDOM(root = document, filterLabel = "usage") {
    const group = root.querySelector(`[data-filter-group][data-filter-label="${filterLabel}"]`);

    if (!group) return [];

    return [...group.querySelectorAll("li.filter-item")]
        .map((li) => {
            const input = li.querySelector("input[data-filter-item-input]");
            const label = li.querySelector(".filter-item__label");

            // Best source is input value because it excludes count text like (983)
            const text = input?.value || label?.childNodes?.[0]?.textContent;

            return text?.trim();
        })
        .filter(Boolean);
}
