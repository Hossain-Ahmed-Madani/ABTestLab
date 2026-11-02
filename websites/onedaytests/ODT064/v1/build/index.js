(async () => {
  const TEST_CONFIG = {
    page_initials: "AB-ODT064",
    test_variation: 1,
    test_version: 0.0002,
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
    return false;
  }
})();
