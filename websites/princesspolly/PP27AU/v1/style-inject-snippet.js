function injectStyles() {
    const cssText = /* HTML */ ``
    const style = document.createElement("style");
    style.id = `${page_initials}-styles`;
    style.textContent = cssText;
    document.head.append(style);
}