(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `@media (max-width: 450px) {
  .AB-PLP-OPTIMIZE-MOBILE {
    /* Page Structure */
    /* Header */
    /* Footer */
    /* Right Column */
  }
  .AB-PLP-OPTIMIZE-MOBILE #PageSubTable {
    display: flex;
  }
  .AB-PLP-OPTIMIZE-MOBILE #PageSubTable,
  .AB-PLP-OPTIMIZE-MOBILE #PageSubTable table:not(.ContentTableHeader) {
    max-width: 100vw !important;
  }
  .AB-PLP-OPTIMIZE-MOBILE #PageSubTable > tbody > tr:nth-child(3) {
    display: flex;
    flex-direction: column;
  }
  .AB-PLP-OPTIMIZE-MOBILE #ContentCell {
    max-width: 100vw !important;
  }
  .AB-PLP-OPTIMIZE-MOBILE #Top_Wrapper {
    display: flex;
  }
  .AB-PLP-OPTIMIZE-MOBILE #menu-btn {
    position: absolute;
    top: -100%;
    left: -100%;
    z-index: 1000 !important;
  }
  .AB-PLP-OPTIMIZE-MOBILE .menu-icon {
    grid-row-end: 3;
    grid-row-start: 1;
    /* display: flex; */
    align-items: center;
    z-index: 1000 !important;
  }
  .AB-PLP-OPTIMIZE-MOBILE .menu-icon svg {
    fill: #d64937;
  }
  .AB-PLP-OPTIMIZE-MOBILE .header-cart {
    grid-row-end: 3;
    grid-row-start: 1;
    display: flex;
    align-items: center;
    position: relative;
  }
  .AB-PLP-OPTIMIZE-MOBILE .header-cart a {
    width: 100%;
  }
  .AB-PLP-OPTIMIZE-MOBILE .header-cart svg {
    fill: #d64937;
  }
  .AB-PLP-OPTIMIZE-MOBILE .header-cart .cart-qty {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-35%, -94%);
    color: #d64937;
    background: white;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    padding: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .AB-PLP-OPTIMIZE-MOBILE .header-cart .cart-qty.hide {
    display: none;
  }
  .AB-PLP-OPTIMIZE-MOBILE td#LeftColumnCell {
    position: absolute;
    background: white;
    width: 154px !important;
    transform: translateX(-160px);
    transition: transform 0.3s;
    z-index: 2;
  }
  .AB-PLP-OPTIMIZE-MOBILE tr:has(#menu-btn:checked) + tr td#LeftColumnCell {
    transform: none;
  }
  .AB-PLP-OPTIMIZE-MOBILE tr:has(#menu-btn:checked) + tr td#ContentCell {
    position: relative;
  }
  .AB-PLP-OPTIMIZE-MOBILE tr:has(#menu-btn:checked) + tr td#ContentCell:after {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.5882352941);
    inset: 0;
  }
  .AB-PLP-OPTIMIZE-MOBILE #Top_Wrapper:has(.menu-icon) {
    max-width: 100vw !important;
    display: grid;
    grid-template-columns: 10% 1fr 10%;
    margin-top: 0;
    padding: 0 6px;
    box-sizing: border-box;
    margin-bottom: 4px;
  }
  .AB-PLP-OPTIMIZE-MOBILE #Top_Wrapper:not(:has(.menu-icon)) {
    flex-direction: column;
    margin-top: 0;
  }
  .AB-PLP-OPTIMIZE-MOBILE #Top_Wrapper img {
    max-width: 100%;
  }
  .AB-PLP-OPTIMIZE-MOBILE #Top_Wrapper #loginlink {
    display: none;
  }
  .AB-PLP-OPTIMIZE-MOBILE #Top_Wrapper #rightinfo {
    grid-row-start: 2;
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
  .AB-PLP-OPTIMIZE-MOBILE #Top_Wrapper #rightinfo * {
    font-size: 14px;
    color: #03c;
    margin: 0;
  }
  .AB-PLP-OPTIMIZE-MOBILE #TopBanner_Wrapper {
    max-width: 100vw !important;
  }
  .AB-PLP-OPTIMIZE-MOBILE #TopBanner_Wrapper,
  .AB-PLP-OPTIMIZE-MOBILE #TopBanner_Wrapper * {
    box-sizing: border-box;
  }
  .AB-PLP-OPTIMIZE-MOBILE #TopBanner_Navigation {
    display: flex;
    max-width: 100vw !important;
    justify-content: center;
    padding: 0;
  }
  .AB-PLP-OPTIMIZE-MOBILE #TopBanner_Navigation > div > div {
    display: flex;
    align-items: center;
    padding: 4px 0;
  }
  .AB-PLP-OPTIMIZE-MOBILE #TopSubBanner1_SimpleSearch1_txtSimpleSearch {
    top: unset;
    width: calc(100vw - 144px - 26px);
    margin-right: 4px;
  }
  .AB-PLP-OPTIMIZE-MOBILE #TopBanner_AdvancedSearch {
    max-width: 100%;
  }
  .AB-PLP-OPTIMIZE-MOBILE #TopSubBanner1_SimpleSearch1_imgSearch {
    top: unset !important;
  }
  .AB-PLP-OPTIMIZE-MOBILE #Top_Wrapper #loginlink {
    /* display: none; */
    grid-column: 1/4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 40px;
  }
  .AB-PLP-OPTIMIZE-MOBILE #Top_Wrapper #loginlink a {
    font-size: 12px;
    margin-top: 3px;
  }
  .AB-PLP-OPTIMIZE-MOBILE #Top_Wrapper #loginlink br {
    display: none;
  }
  .AB-PLP-OPTIMIZE-MOBILE #FooterCell {
    max-width: 100vw !important;
  }
  .AB-PLP-OPTIMIZE-MOBILE #FooterCell table > tbody > tr {
    display: flex;
    flex-direction: column;
  }
  .AB-PLP-OPTIMIZE-MOBILE #FooterCell .search-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 6px;
  }
  .AB-PLP-OPTIMIZE-MOBILE
    #RightColumnNav1_Table1
    .RightColumn
    > br:nth-of-type(-n + 3) {
    display: none;
  }
  .AB-PLP-OPTIMIZE-MOBILE #TopBanner_Navigation > a {
    display: none;
  }
  .AB-PLP-OPTIMIZE-MOBILE #RightColumnCell {
    width: 100%;
    box-sizing: border-box;
  }
  .AB-PLP-OPTIMIZE-MOBILE #RightColumnCell .security_container {
    width: 100% !important;
    height: unset !important;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .AB-PLP-OPTIMIZE-MOBILE #RightColumnCell .security_container br,
  .AB-PLP-OPTIMIZE-MOBILE
    #RightColumnCell
    .security_container
    p:not(:has(img)) {
    display: none;
  }
  .AB-PLP-OPTIMIZE-MOBILE #RightColumnCell .security_container > address {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .AB-PLP-OPTIMIZE-MOBILE #RightColumnCell .security_container > div {
    grid-column-start: 1;
    display: flex;
    justify-content: center;
  }
  .AB-PLP-OPTIMIZE-MOBILE #RightColumnCell .security_container p:has(img) {
    grid-column-start: 2;
    display: flex;
    justify-content: center;
  }
  .AB-PLP-OPTIMIZE-MOBILE #btnCheckout {
    width: 90% !important;
    height: 30px !important;
    line-height: 30px !important;
  }
  .AB-PLP-OPTIMIZE-MOBILE td:has(#btnCheckout) {
    text-align: center;
  }
  .AB-PLP-OPTIMIZE-MOBILE #SearchTemplate13_pnlSort {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
  }
  .AB-PLP-OPTIMIZE-MOBILE #SearchTemplate13_pnlSort font.Content {
    white-space: nowrap;
  }
  .AB-PLP-OPTIMIZE-MOBILE #SearchTemplate13_DataGrid1 > tbody > tr:first-child {
    margin-top: 5px;
    margin-bottom: 10px;
    display: inline-block;
  }
  .AB-PLP-OPTIMIZE-MOBILE
    #SearchTemplate13_DataGrid1
    > tbody
    > tr:first-child
    td:has(> span) {
    border: none;
  }
  .AB-PLP-OPTIMIZE-MOBILE
    #SearchTemplate13_DataGrid1
    > tbody
    > tr:first-child
    td {
    border-left: 0;
    border-right: 0;
  }
  .AB-PLP-OPTIMIZE-MOBILE #FooterCell {
    width: 100vw;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .AB-PLP-OPTIMIZE-MOBILE > form {
    margin-bottom: 0;
    padding-bottom: 0;
    overflow-x: hidden;
  }
  .AB-PLP-OPTIMIZE-MOBILE td.ContentTable {
    background: none;
  }
  .AB-PLP-OPTIMIZE-MOBILE td .product_img {
    margin-right: 23px;
    width: 112px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
  }
  .AB-PLP-OPTIMIZE-MOBILE td .product_img img {
    width: 112px;
    height: auto;
    object-fit: contain;
  }
  .AB-PLP-OPTIMIZE-MOBILE td[valign="top"]:has(.product_img) {
    vertical-align: middle;
  }
  .AB-PLP-OPTIMIZE-MOBILE table.starClass {
    padding-top: 11px;
    padding-bottom: 8px;
  }
  .AB-PLP-OPTIMIZE-MOBILE
    table.starClass
    td.content[valign="top"]
    td.content
    span {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    color: #000000;
    margin-bottom: 5px;
    display: inline-block;
  }
  .AB-PLP-OPTIMIZE-MOBILE
    table.starClass
    td.content[valign="top"]
    td.content
    span:has(s) {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    color: #000000;
    margin-bottom: 5px;
    display: inline-block;
  }
  .AB-PLP-OPTIMIZE-MOBILE
    table.starClass
    td.content[valign="top"]
    td.content
    a[href*="detail.aspx"]:not(:empty) {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0px;
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-thickness: 0%;
    text-decoration-skip-ink: auto;
    color: #0000ee;
  }
  .AB-PLP-OPTIMIZE-MOBILE
    tr[id*="SearchTemplate13"]:has(> td.Content[colspan="4"]),
  .AB-PLP-OPTIMIZE-MOBILE td.ContentTableHorizontal,
  .AB-PLP-OPTIMIZE-MOBILE tr:has(> td.Content:empty),
  .AB-PLP-OPTIMIZE-MOBILE tr.Content:has(> td.Content[colspan="3"]),
  .AB-PLP-OPTIMIZE-MOBILE
    table.starClass
    td.content[valign="top"]
    td.content:has(> a[href*="detail.aspx"]:empty),
  .AB-PLP-OPTIMIZE-MOBILE
    table.starClass
    td.content[valign="top"]
    td.content
    a[href*="detail.aspx"]:empty {
    display: none;
  }
  .AB-PLP-OPTIMIZE-MOBILE table.starClass td.content[valign="top"] td.content {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 12px !important;
    line-height: 1.2;
    letter-spacing: 0px;
    color: #000000;
    margin-bottom: 5px;
    display: inline-block;
  }
  .AB-PLP-OPTIMIZE-MOBILE
    div
    > table
    > tbody
    > tr:last-child:not(:nth-child(1))
    td:not(.ContentTableHeader) {
    display: block;
    border: none;
    margin-top: 11px;
    margin-bottom: 15px;
  }
  .AB-PLP-OPTIMIZE-MOBILE td#RightColumnCell {
    padding-left: 22px;
    padding-right: 22px;
  }
  .AB-PLP-OPTIMIZE-MOBILE #HeaderRow:has(span:empty) {
    display: none;
  }
  .AB-PLP-OPTIMIZE-MOBILE #FooterCell table {
    width: 100%;
  }
  .AB-PLP-OPTIMIZE-MOBILE #FooterCell table > tbody > tr {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .AB-PLP-OPTIMIZE-MOBILE #FooterCell table > tbody > tr * {
    width: auto;
    text-align: center;
  }
  .AB-PLP-OPTIMIZE-MOBILE
    #FooterCell
    table
    > tbody
    > tr
    > td[height="14"]:last-child {
    height: auto;
    text-wrap: wrap;
  }
  .AB-PLP-OPTIMIZE-MOBILE p#ErrorAlignment,
  .AB-PLP-OPTIMIZE-MOBILE p#MessageAlignment,
  .AB-PLP-OPTIMIZE-MOBILE
    table#SearchTemplate13_HeaderRow2
    td[width="33%"]:not(.Content) {
    display: none;
  }
  .AB-PLP-OPTIMIZE-MOBILE #SearchTemplate13_HeaderRow2 {
    display: flex;
    justify-content: flex-end;
  }
  .AB-PLP-OPTIMIZE-MOBILE
    div
    > table#SearchTemplate13_HeaderRow2
    > tbody
    > tr
    > td {
    margin-top: 0;
    margin-bottom: 0;
  }
  .AB-PLP-OPTIMIZE-MOBILE table.ContentTableHeader {
    width: calc(100% + 20px);
    display: block;
    margin-left: -10px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 10px;
    padding-right: 10px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    color: #000000;
  }
  .AB-PLP-OPTIMIZE-MOBILE
    table.ContentTableHeader:has(span.ContentTableHeader:empty) {
    display: none;
  }
  .AB-PLP-OPTIMIZE-MOBILE select[name="SearchTemplate13$dlSortBy"] {
    border: 1px solid #000000;
    border-radius: 0;
  }
}
@media (min-width: 451px) {
  .AB-PLP-OPTIMIZE-MOBILE .menu-btn,
  .AB-PLP-OPTIMIZE-MOBILE .menu-icon,
  .AB-PLP-OPTIMIZE-MOBILE .header-cart {
    display: none;
  }
  .AB-PLP-OPTIMIZE-MOBILE #FooterCell .search-buttons {
    display: none;
  }
  .AB-PLP-OPTIMIZE-MOBILE
    #RightColumnNav1_Table1
    .RightColumn
    > br:nth-of-type(-n + 3) {
    display: none;
  }
}
@media (max-width: 450px) {
  .AB-PLP-OPTIMIZE-MOBILE .cart-remove {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .AB-PLP-OPTIMIZE-MOBILE .cart-remove svg {
    width: 16px;
    height: 16px;
    fill: red;
  }
  .AB-PLP-OPTIMIZE-MOBILE #Table3 table td.Content:has(.cart-remove) {
    display: flex;
    justify-content: center;
  }
  .AB-PLP-OPTIMIZE-MOBILE .total-row > td:not(#jdfonts) {
    display: none;
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
    client: "ROI Revolutions",
    project: "Best Materials",
    site_url: "https://www.bestmaterials.com/",
    test_name: "PLP - Optimize Mobile Experience [M]",
    page_initials: "AB-PLP-OPTIMIZE-MOBILE",
    test_variation: 1,
    test_version: 0.0003,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

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

  function q(s, o) {
    return o ? s.querySelector(o) : document.querySelector(s);
  }

  function qq(s, o) {
    return [...document.querySelectorAll(s)];
  }

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);

    document.head.insertAdjacentHTML(
      "beforeend",
      `<meta name="viewport" content="width=device-width, initial-scale=1">`,
    );
    document.head.insertAdjacentHTML(
      "beforeend",
      /* HTML */ `
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      `,
    );

    const leftColumn = q("td#LeftColumnCell");
    const topWrapper = q("#Top_Wrapper");

    if (leftColumn && topWrapper) {
      // Insert hamburger nav
      topWrapper.insertAdjacentHTML(
        "afterbegin",
        `
                <input class="menu-btn" type="checkbox" id="menu-btn" name="menu-btn" />
                <label class="menu-icon" for="menu-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                </label>
            `,
      );

      document.addEventListener("click", (event) => {
        const menuCheckbox = q("#menu-btn");
        if (
          menuCheckbox &&
          menuCheckbox.checked &&
          !leftColumn.contains(event.target) &&
          !topWrapper.contains(event.target)
        ) {
          menuCheckbox.checked = false;
        }
      });

      // Insert cart in header
      const leftLogo = q(topWrapper, "#leftlogo");
      if (leftLogo) {
        leftLogo.insertAdjacentHTML(
          "afterend",
          `
                    <div class="header-cart">
                        <a href="https://www.bestmaterials.com/shoppingcart.aspx">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                        </a>
                        <div class="cart-qty"></div>
                    </div>
                `,
        );

        const countEl = q("#LeftColumnNav1_CartList1_lblCount");
        const cartQty = q(".cart-qty");
        if (countEl && cartQty) {
          if (countEl.textContent) {
            if (cartQty.textContent !== countEl.textContent) {
              cartQty.textContent = countEl.textContent;
            }
            cartQty.classList.remove("hide");
          } else {
            cartQty.classList.add("hide");
          }
        }
      }
    }

    // Move nav buttons to footer
    const footerCell = q("#FooterCell");
    const navLinks = qq("#TopBanner_Navigation > a");

    if (footerCell) {
      if (!q(footerCell, ".search-buttons")) {
        footerCell.insertAdjacentHTML(
          "afterbegin",
          `<div class="search-buttons"></div>`,
        );
        const searchButtons = q(footerCell, ".search-buttons");
        navLinks.forEach((link) =>
          searchButtons.appendChild(link.cloneNode(true)),
        );
      }
    } else {
      navLinks.forEach((link) => (link.style.display = "none"));
    }

    // Replace cart remove buttons with X icons
    qq('img[src="images/buttons/remove.jpg"]').forEach((img) => {
      const div = document.createElement("div");
      div.className = "cart-remove";
      div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>`;
      img.replaceWith(div);
    });

    // Style cart total row
    const jdfonts = q("td#jdfonts");
    if (jdfonts) {
      jdfonts.closest("tr").classList.add("total-row");
      jdfonts.setAttribute("colspan", "9");
    }
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      typeof window.jQuery === "function" &&
      q("td#LeftColumnCell") &&
      q("#Top_Wrapper") &&
      q("#FooterCell")
    );
  }

  await waitForElementAsync(checkForItems);
  init();
})();
