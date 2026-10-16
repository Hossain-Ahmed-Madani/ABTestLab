(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `@media screen and (max-width: 1023.5px) {
  .AB-ODT064 .ab-desktop {
    display: none;
  }
}
@media screen and (min-width: 1024px) {
  .AB-ODT064 .ab-mobile {
    display: none;
  }
}

.AB-ODT064 h1,
.AB-ODT064 h2,
.AB-ODT064 h3,
.AB-ODT064 h4,
.AB-ODT064 h5,
.AB-ODT064 h6,
.AB-ODT064 p {
  margin: 0;
}
.AB-ODT064 ul,
.AB-ODT064 li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.AB-ODT064 a,
.AB-ODT064 a:hover {
  text-decoration: none;
  border: none;
}
.AB-ODT064 .shopify-section.slideshow--section.pxu-lia-section--play {
  display: none;
}
.AB-ODT064 .ab-section {
  padding: 40px 16px 0 16px;
}
.AB-ODT064 .ab-heading {
  font-weight: 700;
  font-size: 31px;
  line-height: 39px;
  letter-spacing: 0px;
  text-transform: uppercase;
  color: #222;
  margin-bottom: 12px;
}
.AB-ODT064 .ab-heading span {
  color: #bd3332;
}
.AB-ODT064 .ab-subheading {
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0px;
  color: #222;
  margin-top: 0;
  margin-bottom: 32px;
}
.AB-ODT064 .ab-trt-group {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.AB-ODT064 .ab-trt-item {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 16px;
  border-radius: 8px;
}
.AB-ODT064 .ab-trt-item--new-to-trt {
  background-color: #e2eff4;
}
.AB-ODT064 .ab-trt-item--already-on-trt {
  background-color: #f6f6f6;
}
.AB-ODT064 .ab-img-group {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.AB-ODT064 .ab-img-group img.ab-img-sm {
  background-color: #fff;
  width: 66px;
  min-width: 66px;
  max-width: 66px;
  height: 66px;
  min-height: 66px;
  max-height: 66px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: contain;
}
.AB-ODT064 .ab-trt-heading {
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0px;
  text-transform: uppercase;
  color: #1d1d1d;
  margin-bottom: 4px;
}
.AB-ODT064 .ab-trt-subheading {
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0px;
  color: #006eb3;
}
.AB-ODT064 .ab-trt-caret-right {
  margin-left: auto;
}
.AB-ODT064 .ab-trt-caret-right svg {
  width: 24px;
  height: 24px;
}
.AB-ODT064 .ab-trusted-content {
  background-color: #e2eff4;
  padding: 8px 0;
}
.AB-ODT064 .ab-trusted-content__text {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #1d1d1d;
}
@media screen and (min-width: 768px) and (max-width: 1023.5px) {
  .AB-ODT064 .ab-trt-group {
    flex-direction: row;
  }
}
@media screen and (min-width: 1024px) {
  .AB-ODT064 .ab-section {
    padding: 80px 22px 0 22px;
  }
  .AB-ODT064 .ab-heading {
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    letter-spacing: 0px;
    text-align: center;
    margin-bottom: 16px;
  }
  .AB-ODT064 .ab-subheading {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;
    margin-bottom: 40px;
  }
  .AB-ODT064 .ab-trt-group {
    flex-direction: row;
    gap: 20px;
    margin-bottom: 24px;
  }
  .AB-ODT064 .ab-trt-item {
    position: relative;
    overflow: hidden;
    flex: 1;
    box-shadow: none;
    transition:
      flex-grow 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
  }
  .AB-ODT064 .ab-trt-item:hover {
    flex-grow: 1.15;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .AB-ODT064 .ab-trt-item:hover .ab-trt-cta {
    background-color: #025a90;
  }
  .AB-ODT064 .ab-trt-text-group {
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  .AB-ODT064 .ab-trt-subheading-two {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0px;
    color: #1d1d1d;
    margin-bottom: 10px;
  }
  .AB-ODT064 .ab-trt-list {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 25px;
  }
  .AB-ODT064 .ab-trt-list-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }
  .AB-ODT064 .ab-trt-list-item-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .AB-ODT064 .ab-trt-list-item-icon svg {
    width: 18px;
    height: auto;
  }
  .AB-ODT064 .ab-trt-list-item-text {
    font-weight: 400;
    font-size: 15px;
    line-height: 26px;
    letter-spacing: 0px;
    color: #1d1d1d;
  }
  .AB-ODT064 .ab-trt-cta {
    width: max-content;
    background-color: #006eb3;
    padding: 10px 18px;
    border-radius: 4px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-bottom: 18px;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0px;
    text-transform: uppercase;
    color: #ffffff;
  }
  .AB-ODT064 .ab-trt-expert-name {
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0px;
    color: #1d1d1d;
  }
  .AB-ODT064 .ab-trt-expert-name strong {
    font-weight: 700;
  }
  .AB-ODT064 .ab-img-lg {
    width: 200px;
    height: auto;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .AB-ODT064 .ab-trusted-content {
    border-radius: 4px;
    padding: 8px;
  }
  .AB-ODT064 .ab-trusted-content__text {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;
  }
  .AB-ODT064 .ab-trusted-content__text br {
    display: none;
  }
}
@media screen and (min-width: 1440px) {
  .AB-ODT064 .ab-trt-item {
    padding: 56px 32px;
  }
  .AB-ODT064 .ab-trt-item:hover {
    flex-grow: 1.3;
  }
  .AB-ODT064 .ab-trt-heading {
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    letter-spacing: 0px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .AB-ODT064 .ab-img-lg {
    width: auto;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .AB-ODT064 .ab-trt-subheading-two {
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 16px;
  }
  .AB-ODT064 .ab-trt-list {
    gap: 8px;
    margin-bottom: 40px;
  }
  .AB-ODT064 .ab-trt-list-item {
    gap: 12px;
  }
  .AB-ODT064 .ab-trt-list-item-icon svg {
    width: 21px;
    height: auto;
  }
  .AB-ODT064 .ab-trt-list-item-text {
    font-size: 18px;
  }
  .AB-ODT064 .ab-trt-expert-name {
    font-size: 16px;
  }
  .AB-ODT064 .ab-trt-cta {
    padding: 12px 24px;
    line-height: 26px;
    font-size: 18px;
    margin-bottom: 24px;
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
    client: "Converted",
    project: "One Day Tests",
    site_url: "https://onedaytests.com",
    test_name: "ODT064 - TRT Split start page",
    page_initials: "AB-ODT064",
    test_variation: 1,
    test_version: 0.0001,
  };

  const ASSETS = {
    new_to_trt_mobile_img: "https://i.ibb.co.com/zH5CVjjh/image-37.png",
    new_to_trt_desktop_img: "https://i.ibb.co.com/S70mvnQV/image-35.png",
    already_on_trt_mobile_img: "https://i.ibb.co.com/CsNZtCn2/image-38.png",
    already_on_trt_desktop_img: "https://i.ibb.co.com/d3rcvDn/image-36.png",
    caret_right_svg: /* HTML */ `
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 4.5L16.5 12L9 19.5"
          stroke="#006EB3"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `,
    check_circle_svg: /* HTML */ `
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.625 0C4.76625 0 0 4.76625 0 10.625C0 16.4837 4.76625 21.25 10.625 21.25C16.4837 21.25 21.25 16.4837 21.25 10.625C21.25 4.76625 16.4837 0 10.625 0ZM10.625 20C5.4555 20 1.25 15.7945 1.25 10.625C1.25 5.4555 5.4555 1.25 10.625 1.25C15.7945 1.25 20 5.4555 20 10.625C20 15.7945 15.7945 20 10.625 20Z"
          fill="#006EB3"
        />
        <path
          d="M15.4735 7.20503L9.959 12.7193L7.12975 9.89028C7.07182 9.83182 7.0029 9.78537 6.92697 9.75361C6.85104 9.72186 6.76958 9.70541 6.68727 9.70522C6.60497 9.70503 6.52343 9.72109 6.44735 9.7525C6.37127 9.7839 6.30215 9.83002 6.24394 9.88821C6.18573 9.9464 6.13959 10.0155 6.10817 10.0916C6.07674 10.1677 6.06065 10.2492 6.06082 10.3315C6.06099 10.4138 6.07741 10.4953 6.10915 10.5712C6.14088 10.6471 6.18731 10.7161 6.24575 10.774L9.517 14.045C9.639 14.1673 9.799 14.2283 9.959 14.2283C10.119 14.2283 10.279 14.1673 10.401 14.045L16.3573 8.08878C16.4169 8.03112 16.4646 7.96216 16.4973 7.8859C16.5301 7.80965 16.5473 7.72764 16.548 7.64465C16.5488 7.56167 16.5329 7.47937 16.5015 7.40256C16.4701 7.32575 16.4237 7.25596 16.365 7.19728C16.3063 7.1386 16.2365 7.09219 16.1597 7.06076C16.0829 7.02934 16.0006 7.01352 15.9176 7.01424C15.8346 7.01497 15.7526 7.03221 15.6764 7.06496C15.6001 7.09772 15.5312 7.14533 15.4735 7.20503Z"
          fill="#006EB3"
        />
      </svg>
    `,
  };

  const DATA = [
    {
      link: "https://onedaytests.com/products/testosterone-blood-test",
      className: "ab-trt-item--new-to-trt",
      mobileImage: "new_to_trt_mobile_img",
      desktopImage: "new_to_trt_desktop_img",
      imageAlt: "Dr Rob Moisey - Endocrinologist",
      heading: "New to TRT",
      mobileSubheading: "Qualifying test - £19",
      desktopSubheading: "Find out if TRT is right for you",
      listItems: ["Home kit or 35+ clinics", "Results reviewed by our doctors"],
      cta: "Book qualifying test - £19",
      expertName: "Dr Rob Moisey",
      expertRole: "Endocrinologist",
    },
    {
      link: "https://onedaytests.com/products/trt-programme-transfer-consultation",
      className: "ab-trt-item--already-on-trt",
      mobileImage: "already_on_trt_mobile_img",
      desktopImage: "already_on_trt_desktop_img",
      imageAlt: "Paul Scott-Harris - Lead Clinical Pharmacist",
      heading: "Already on TRT",
      mobileSubheading: "Switch with no break <br />\n in your treatment",
      desktopSubheading: "Transfer your care to us",
      listItems: [
        "No break in your treatment",
        "Blood tests and 3-monthly reviews included",
        "Recent NHS results can be used",
      ],
      cta: "See how transfering works",
      expertName: "Paul Scott-Harris",
      expertRole: "Lead Clinical Pharmacist",
    },
  ];

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
    return document.querySelector(s);
  }

  function getHTMLLayout() {
    return /* HTML */ `
      <section class="ab-section">
        <h1 class="ab-heading">Expert led <span>TRT programme</span></h1>
        <h3 class="ab-subheading">Where are you on your TRT journey?</h3>
        <div class="ab-trt-group">
          ${DATA.map(
            (item) => /* HTML */ `
              <a href="${item.link}" class="ab-trt-item ${item.className}">
                <div class="ab-img-group">
                  <img
                    src="${ASSETS[item.mobileImage]}"
                    class="ab-img-sm ab-mobile"
                    alt="${item.imageAlt}"
                  />
                  <img
                    src="${ASSETS[item.desktopImage]}"
                    class="ab-img-lg ab-desktop"
                    alt="${item.imageAlt}"
                  />
                </div>
                <div class="ab-trt-text-group">
                  <h4 class="ab-trt-heading">${item.heading}</h4>
                  <p class="ab-trt-subheading ab-mobile">
                    ${item.mobileSubheading}
                  </p>
                  <p class="ab-trt-subheading-two ab-desktop">
                    ${item.desktopSubheading}
                  </p>
                  <ul class="ab-trt-list ab-desktop">
                    ${item.listItems
                      .map(
                        (text) => /* HTML */ `
                          <li class="ab-trt-list-item">
                            <span class="ab-trt-list-item-icon">
                              ${ASSETS["check_circle_svg"]}
                            </span>
                            <span class="ab-trt-list-item-text">${text}</span>
                          </li>
                        `,
                      )
                      .join("")}
                  </ul>
                  <button class="ab-trt-cta ab-desktop">${item.cta}</button>
                  <p class="ab-trt-expert-name ab-desktop">
                    <strong>${item.expertName}</strong> / ${item.expertRole}
                  </p>
                </div>
                <div class="ab-trt-caret-right ab-mobile">
                  ${ASSETS["caret_right_svg"]}
                </div>
              </a>
            `,
          ).join("")}
        </div>
        <div class="ab-trusted-content">
          <p class="ab-trusted-content__text">
            Trusted to do 100,000+ tests and <br />
            consultations per month
          </p>
        </div>
      </section>
    `;
  }

  function init() {
    if (window[page_initials] === true) return;
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    window[page_initials] = true;
    console.table(TEST_CONFIG);

    q(
      ".shopify-section.slideshow--section.pxu-lia-section--play",
    ).insertAdjacentHTML("beforebegin", getHTMLLayout());
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) && q(".shopify-section.slideshow--section.pxu-lia-section--play")
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    console.warn(error);
    return false;
  }
})();
