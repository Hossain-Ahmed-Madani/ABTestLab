(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `/* 
sm: 640px
md: 768px
lg: 1024px

*/
.AB-HOMEPAGE-REDESIGN {
  /* Optional: Add these if you want smoother performance */
}
.AB-HOMEPAGE-REDESIGN main#maincontent > .columns {
  row-gap: 0;
}
.AB-HOMEPAGE-REDESIGN .hook-loop-products {
  display: none;
}
.AB-HOMEPAGE-REDESIGN .ab-heading-xl {
  font-family: "poppins", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
}
.AB-HOMEPAGE-REDESIGN .ab-heading-lg {
  font-family: "poppins", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
}
.AB-HOMEPAGE-REDESIGN .ab-leading-8 {
  line-height: 32px;
}
.AB-HOMEPAGE-REDESIGN .ab-hero-section {
  background-image: url("https://www.hookandloop.com/media/wysiwyg/AB-TEST/Hero_Banner_Mobile.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.AB-HOMEPAGE-REDESIGN .ab-hero-section:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.AB-HOMEPAGE-REDESIGN .ab-hero-section__container {
  position: relative;
  z-index: 2;
  padding: 16px 24px 30px;
}
.AB-HOMEPAGE-REDESIGN .ab-hero-section__container h2 {
  margin-bottom: 16px;
}
.AB-HOMEPAGE-REDESIGN .ab-hero-section__brands,
.AB-HOMEPAGE-REDESIGN .ab-hero-section__all-products-row {
  gap: 8px;
}
.AB-HOMEPAGE-REDESIGN .ab-sup {
  top: -0.6rem;
}
.AB-HOMEPAGE-REDESIGN .ab-hero-section__brands,
.AB-HOMEPAGE-REDESIGN .ab-hero-section__all-products {
  width: 100%;
}
.AB-HOMEPAGE-REDESIGN .ab-hero-section__brands {
  margin-bottom: 24px;
}
.AB-HOMEPAGE-REDESIGN .ab-hero-section__brands-item {
  width: 100%;
  height: 60px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
}
.AB-HOMEPAGE-REDESIGN .ab-hero-section__brands-item img {
  width: auto;
  height: 144px;
  object-fit: contain;
  object-position: center;
}
.AB-HOMEPAGE-REDESIGN .ab-hero-section__all-products-row {
  width: 100%;
}
.AB-HOMEPAGE-REDESIGN .ab-hero-section__all-products-row:not(:last-child) {
  margin-bottom: 8px;
}
.AB-HOMEPAGE-REDESIGN .ab-hero-section__all-products-item {
  width: 100%;
  height: 48px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #fff;
  font-family: "poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: rgb(29, 29, 29);
}
.AB-HOMEPAGE-REDESIGN .custom-converting-panel__subtitle {
  margin-top: 5px;
  margin-bottom: 16px;
}
.AB-HOMEPAGE-REDESIGN .ab-btn-secondary {
  background: none;
  border: 2px solid rgb(29, 29, 29);
  border-radius: 4px;
  padding: 12px 22px;
}
.AB-HOMEPAGE-REDESIGN .ab-btn-secondary:hover {
  background: none;
}
.AB-HOMEPAGE-REDESIGN .customer-service.ab-customer-service-mobile {
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: rgb(228, 228, 228);
}
.AB-HOMEPAGE-REDESIGN
  .customer-service.ab-customer-service-mobile
  .section-title {
  margin-top: 0;
  margin-bottom: 48px;
}
.AB-HOMEPAGE-REDESIGN
  .customer-service.ab-customer-service-mobile
  .section-title
  h5.font-normal {
  margin-bottom: 0;
}
.AB-HOMEPAGE-REDESIGN
  .customer-service.ab-customer-service-mobile
  .section-title
  p {
  margin-bottom: 0;
}
.AB-HOMEPAGE-REDESIGN
  .customer-service.ab-customer-service-mobile
  .my-5.text-gray-700.body-font {
  margin-top: 0;
  margin-bottom: 0;
}
.AB-HOMEPAGE-REDESIGN
  .customer-service.ab-customer-service-mobile
  .card.card-interactive {
  padding: 20px;
}
.AB-HOMEPAGE-REDESIGN .customer-service.ab-customer-service-mobile .item {
  height: 100%;
}
.AB-HOMEPAGE-REDESIGN .customer-service.ab-customer-service-mobile .ban1 {
  margin-top: 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.AB-HOMEPAGE-REDESIGN
  .customer-service.ab-customer-service-mobile
  .ban1
  h5.customer-service-name {
  order: -1;
  margin-bottom: 15px;
  line-height: 30px;
}
.AB-HOMEPAGE-REDESIGN .customer-service.ab-customer-service-mobile .ban1 p {
  line-height: 24px;
  margin-bottom: 20px;
}
.AB-HOMEPAGE-REDESIGN .customer-service.ab-customer-service-mobile .ban1:after {
  content: "";
  width: 29px;
  height: 24px;
  background-image: url('data:image/svg+xml,<svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.830265 8.78414C0.830265 7.12015 1.40627 5.71214 2.55827 4.56014C3.64627 3.40814 5.02226 2.83215 6.68627 2.83215C8.67027 2.83215 10.3023 3.66414 11.5823 5.32814C12.8623 6.99214 13.5023 8.84814 13.5023 10.8961C13.5023 13.7121 12.6063 16.3041 10.8143 18.6721C8.95827 21.1041 6.68627 22.8641 3.99826 23.9521L2.94226 21.7441C6.71826 19.3121 8.70226 16.3681 8.89427 12.9121C7.87027 13.7441 6.81427 14.1601 5.72626 14.1601C4.25426 14.1601 3.07026 13.6161 2.17426 12.5281C1.27826 11.5041 0.830265 10.2561 0.830265 8.78414ZM17.1503 8.78414C17.1503 7.12015 17.7263 5.71214 18.8783 4.56014C19.9663 3.40814 21.3423 2.83215 23.0063 2.83215C25.1183 2.83215 26.7823 3.63214 27.9983 5.23214C29.2143 6.83215 29.8223 8.72015 29.8223 10.8961C29.8223 13.8401 28.9583 16.4641 27.2303 18.7681C25.5023 21.0721 23.2303 22.8001 20.4143 23.9521L19.4543 21.7441C23.1663 19.3121 25.1183 16.3681 25.3103 12.9121C24.2863 13.7441 23.1983 14.1601 22.0463 14.1601C20.5743 14.1601 19.3903 13.6481 18.4943 12.6241C17.5983 11.6001 17.1503 10.3201 17.1503 8.78414Z" fill="%23A2A2A2"/></svg>');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: auto;
  margin-left: auto;
}
.AB-HOMEPAGE-REDESIGN
  .customer-service.ab-customer-service-mobile
  button[aria-label="Previous"],
.AB-HOMEPAGE-REDESIGN
  .customer-service.ab-customer-service-mobile
  button[aria-label="Next"] {
  width: 48px;
  height: 48px;
  border-radius: 4px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px rgb(215, 215, 215);
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-HOMEPAGE-REDESIGN
  .customer-service.ab-customer-service-mobile
  button[aria-label="Previous"]
  svg,
.AB-HOMEPAGE-REDESIGN
  .customer-service.ab-customer-service-mobile
  button[aria-label="Next"]
  svg {
  display: none;
}
.AB-HOMEPAGE-REDESIGN
  .customer-service.ab-customer-service-mobile
  button[aria-label="Previous"] {
  margin-left: -30px;
}
.AB-HOMEPAGE-REDESIGN
  .customer-service.ab-customer-service-mobile
  button[aria-label="Next"] {
  margin-right: -30px;
}
.AB-HOMEPAGE-REDESIGN
  .customer-service.ab-customer-service-mobile
  button[aria-label="Previous"]:after,
.AB-HOMEPAGE-REDESIGN
  .customer-service.ab-customer-service-mobile
  button[aria-label="Next"]:after {
  content: "";
  width: 12px;
  height: 24px;
  background: url('data:image/svg+xml,<svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L13 13L1 25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.AB-HOMEPAGE-REDESIGN
  .customer-service.ab-customer-service-mobile
  button[aria-label="Previous"]:after {
  transform: rotate(180deg);
}
.AB-HOMEPAGE-REDESIGN .ab-customer-service {
  margin-top: 60px;
  margin-bottom: 90px;
}
.AB-HOMEPAGE-REDESIGN .ab-customer-service .section-title h5 {
  padding-top: 11px;
}
.AB-HOMEPAGE-REDESIGN .ab-customer-service__review-grid {
  width: max-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
.AB-HOMEPAGE-REDESIGN .ab-customer-service__review-column {
  gap: 20px;
}
.AB-HOMEPAGE-REDESIGN .ab-customer-service .ab-customer-service__review-card {
  width: 320px;
  padding: 20px;
}
.AB-HOMEPAGE-REDESIGN .ab-customer-service .customer-service-name,
.AB-HOMEPAGE-REDESIGN .ab-customer-service .customer-service-text {
  color: rgb(55, 65, 81);
}
.AB-HOMEPAGE-REDESIGN .ab-customer-service .customer-service-quotation {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.AB-HOMEPAGE-REDESIGN .ab-customer-service .customer-service-quotation img {
  width: 29px;
  height: 24px;
  object-fit: contain;
}
.AB-HOMEPAGE-REDESIGN .ab-rotate-2deg {
  transform: rotate(2deg);
}
.AB-HOMEPAGE-REDESIGN .ab-rotate-neg-2deg {
  transform: rotate(-2deg);
}
.AB-HOMEPAGE-REDESIGN .ab-hookloop-features {
  padding-top: 60px;
  padding-bottom: 60px;
}
.AB-HOMEPAGE-REDESIGN .ab-hookloop-features__top-items {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}
.AB-HOMEPAGE-REDESIGN
  .ab-hookloop-features__bottom-items
  .action.primary.hnl-btn {
  min-width: 100%;
}
.AB-HOMEPAGE-REDESIGN .ab-hookloop-features__bottom-items .list-disc {
  margin-left: 30px;
}
.AB-HOMEPAGE-REDESIGN .ab-hookloop-features__top-items .item img {
  width: 128px;
  height: 128px;
  object-fit: contain;
}
.AB-HOMEPAGE-REDESIGN .newsletter-subscription,
.AB-HOMEPAGE-REDESIGN .hook-loop-promotion {
  padding: 60px 24px;
}
.AB-HOMEPAGE-REDESIGN .newsletter-subscription .section-title h2 {
  font-family: "poppins", sans-serif;
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
}
.AB-HOMEPAGE-REDESIGN .hook-loop-promotion h2 {
  font-family: "poppins", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0px;
  vertical-align: middle;
  text-align: left;
  text-wrap: pretty;
}
.AB-HOMEPAGE-REDESIGN .ab-newsletter-and-promotion__container {
  display: flex;
  flex-direction: column-reverse;
}
.AB-HOMEPAGE-REDESIGN .ab-newsletter-and-promotion__container > div {
  width: 100%;
}
.AB-HOMEPAGE-REDESIGN .ab-promotion-read-more-cta {
  min-width: 100%;
}
.AB-HOMEPAGE-REDESIGN .newsletter-subscription .newsletter_offer {
  padding-left: 0;
  padding-right: 0;
}
.AB-HOMEPAGE-REDESIGN .ab-hook-loop-brands {
  padding: 60px 24px;
}
.AB-HOMEPAGE-REDESIGN .ab-hook-loop-brands__auto-scroller {
  gap: 24px;
}
.AB-HOMEPAGE-REDESIGN .ab-hook-loop-brands__auto-scroller:first-child {
  margin-bottom: 24px;
}
.AB-HOMEPAGE-REDESIGN .ab-hook-loop-brand__item img {
  width: 80px;
  min-width: 80px;
  height: 37px;
  min-height: 37px;
  object-fit: contain;
}
.AB-HOMEPAGE-REDESIGN .ab-subscribe-cta {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}
@media screen and (min-width: 375px) {
  .AB-HOMEPAGE-REDESIGN .customer-service .section-title h2 {
    white-space: nowrap;
  }
}
@media screen and (min-width: 450px) {
  .AB-HOMEPAGE-REDESIGN .ab-md-hidden {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .AB-HOMEPAGE-REDESIGN .ab-hookloop-features__top-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 1024px) {
  .AB-HOMEPAGE-REDESIGN .ab-lg-hidden {
    display: none;
  }
  .AB-HOMEPAGE-REDESIGN .ab-heading-xl {
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
  }
  .AB-HOMEPAGE-REDESIGN .ab-hero-section {
    background-image: url("https://hookandloop.com/media/wysiwyg/AB-TEST/Hero_Banner.png");
  }
  .AB-HOMEPAGE-REDESIGN .ab-hero-section__container {
    padding: 80px 24px 185px;
  }
  .AB-HOMEPAGE-REDESIGN .ab-hero-section__brands,
  .AB-HOMEPAGE-REDESIGN .ab-hero-section__all-products-row {
    gap: 24px;
  }
  .AB-HOMEPAGE-REDESIGN .ab-hero-section__container h2 {
    margin-bottom: 24px;
  }
  .AB-HOMEPAGE-REDESIGN .ab-hero-section__brands {
    width: 920px;
    max-width: 920px;
    margin-bottom: 40px;
  }
  .AB-HOMEPAGE-REDESIGN .ab-hero-section__brands-item {
    height: 80px;
  }
  .AB-HOMEPAGE-REDESIGN .ab-hero-section__brands-item img {
    height: 164px;
  }
  .AB-HOMEPAGE-REDESIGN .ab-hero-section__all-products-row:not(:last-child) {
    margin-bottom: 24px;
  }
  .AB-HOMEPAGE-REDESIGN .ab-hero-section__all-products {
    width: 680px;
    max-width: 680px;
  }
  .AB-HOMEPAGE-REDESIGN .ab-hero-section__all-products-item {
    max-width: 360px;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    vertical-align: middle;
  }
  .AB-HOMEPAGE-REDESIGN .ab-hero-section__all-products-item--see-all {
    font-weight: 600;
    font-size: 15px;
    line-height: 22.5px;
  }
  .AB-HOMEPAGE-REDESIGN .ab-hookloop-features__bottom-items .item {
    padding: 24px;
  }
  .AB-HOMEPAGE-REDESIGN
    .ab-hookloop-features__bottom-items
    .action.primary.hnl-btn {
    min-width: 320px;
  }
  .AB-HOMEPAGE-REDESIGN .ab-hookloop-features__bottom-items .item .img-wrap {
    margin-right: 30px;
  }
  .AB-HOMEPAGE-REDESIGN .newsletter-subscription {
    padding: 165px 60px;
  }
  .AB-HOMEPAGE-REDESIGN .newsletter-subscription form.form.subscribe {
    width: 100%;
  }
  .AB-HOMEPAGE-REDESIGN .newsletter-subscription .newsletter_offer {
    padding-left: 0;
    padding-right: 0;
  }
  .AB-HOMEPAGE-REDESIGN .hook-loop-promotion .call-or-email {
    display: none;
  }
  .AB-HOMEPAGE-REDESIGN .ab-newsletter-and-promotion__container {
    flex-direction: row;
  }
  .AB-HOMEPAGE-REDESIGN .ab-newsletter-and-promotion__container > div {
    width: 50%;
  }
  .AB-HOMEPAGE-REDESIGN .ab-promotion-read-more-cta {
    min-width: 210px;
  }
  .AB-HOMEPAGE-REDESIGN .ab-hook-loop-brands__auto-scroller {
    gap: 60px;
  }
  .AB-HOMEPAGE-REDESIGN .ab-hook-loop-brand__item img {
    width: 160px;
    min-width: 160px;
    height: 75px;
    min-height: 75px;
    object-fit: contain;
  }
  .AB-HOMEPAGE-REDESIGN .ab-hook-loop-brands__auto-scroller:first-child {
    margin-bottom: 48px;
  }
}
@media screen and (min-width: 1280px) {
  .AB-HOMEPAGE-REDESIGN .ab-hookloop-features__top-items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .AB-HOMEPAGE-REDESIGN .newsletter-subscription form.form.subscribe {
    width: 600px;
  }
}
.AB-HOMEPAGE-REDESIGN .scroll-infinite-rtl {
  white-space: nowrap;
  animation: scroll-right-to-left 15s linear infinite;
}
.AB-HOMEPAGE-REDESIGN .scroll-infinite-ltr {
  white-space: nowrap;
  animation: scroll-left-to-right 15s linear infinite;
}
.AB-HOMEPAGE-REDESIGN .scroll-infinite-rtl,
.AB-HOMEPAGE-REDESIGN .scroll-infinite-ltr {
  will-change: transform;
  backface-visibility: hidden;
}

/* Right to Left Infinite Scroll Animation */
@keyframes scroll-right-to-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
/* Left to Right Infinite Scroll Animation */
@keyframes scroll-left-to-right {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
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
var id = "1754075815885_4714_v1";
var name = "v1";
var testInfo = {
  id: id,
  name: name,
};

// https://www.figma.com/design/JZ7TKElYDSJ9DA3HafAkl2/Hook-and-Loop---UX-Audit---003---Homepage-Elements?node-id=0-1&t=So85TLSfgwSOKm5K-1
// https://www.hookandloop.com/?qa5=true

/* 

Development breakdown:
Hero section: 2 hours 
Customization services: 1 hours
Brands with scroll animation: 3 hours
Testimonials: 3 hours
Start shopping Section: 3 hours
Subscription section: 3 hours
Initial Development: 15 hours

*/

(() => {
  const TEST_CONFIG = {
    client: "Hook & Loop",
    project: "Hook & Loop",
    site_url: "https://www.hookandloop.com/",
    test_name: `Hook and Loop - UX Audit - 003 - Homepage Elements`,
    page_initials: "AB-HOMEPAGE-REDESIGN",
    test_variation: 1,
    test_version: 0.0003,
  };

  const ASSETS = {
    quotation:
      "https://www.hookandloop.com/media/wysiwyg/AB-TEST/Quotation.png",
    duragrip:
      "https://www.hookandloop.com/media/catalog/product/cache/67ee89799642c567a71fc92f3699d937/d/u/duragrip.jpg",
    velcro:
      "https://www.hookandloop.com/media/catalog/product/cache/67ee89799642c567a71fc92f3699d937/v/e/velcro_logo_1.jpg",
  };

  const TAILWIND_STYLES = {
    heading_xl: "ab-heading-xl",
    heading_lg: "ab-heading-lg",
    heading_sm: "text-[20px] font-[500] text-hnl1d",
    paragraph: "leading-6 text-[16px] [text-wrap:pretty]",
    button_primary: "action primary hnl-btn text-white",
    button_primary_sm:
      "action primary bg-hnleb0 px-[8px] py-2 flex mt-[15px] justify-center rounded-[4px] border-[2px] border-hnleb0 text-[12px] font-[600] hover:border-hnleb0 text-white",
    button_secondary:
      "ab-btn-secondary flex  justify-center text-[15px] font-[600] max-w-max uppercase",
    flex_center: "flex items-center justify-center",
  };

  function waitForElement(predicate, callback, timer = 20000, frequency = 150) {
    try {
      if (timer <= 0) {
        throw new Error(
          `Timeout reached while waiting for condition: ${predicate.toString()}`,
        );
      } else if (predicate && predicate()) {
        callback();
      } else {
        setTimeout(() => {
          waitForElement(predicate, callback, timer - frequency, frequency);
        }, frequency);
      }
    } catch (error) {
      console.warn(error);
      return;
    }
  }

  function createHeroSectionLayout() {
    const targetNode = document.querySelector(".custom-converting-panel");
    targetNode.insertAdjacentHTML(
      "beforebegin",
      /* HTML */ `
        <section class="ab-hero-section relative w-full">
          <div
            class="ab-hero-section__container mx-auto flex flex-col items-center text-center"
          >
            <h2 class="text-white ${TAILWIND_STYLES.heading_xl}">
              From full rolls to finished <br class="ab-md-hidden" />
              products, we’re Everything <br class="ab-lg-hidden" />
              in Hook & Loop!<sup class="text-sm ab-sup">TM</sup>
            </h2>
            <div
              class="ab-hero-section__brands flex justify-between items-center"
            >
              <a
                href="https://www.hookandloop.com/brands/duragrip"
                class="ab-hero-section__brands-item overflow-hidden ${TAILWIND_STYLES.flex_center}"
              >
                <img src="${ASSETS.duragrip}" alt="Duragrip" class="" />
              </a>
              <a
                href="https://www.hookandloop.com/brands/velcro"
                class="ab-hero-section__brands-item overflow-hidden ${TAILWIND_STYLES.flex_center}"
              >
                <img src="${ASSETS.velcro}" alt="Velcro" class="" />
              </a>
            </div>
            <div
              class="ab-hero-section__all-products flex flex-col items-center justify-center"
            >
              <div
                class="ab-hero-section__all-products-row flex justify-between items-center"
              >
                <a
                  href="https://www.hookandloop.com/products"
                  class="ab-hero-section__all-products-item overflow-hidden ${TAILWIND_STYLES.flex_center}"
                  >Whole Rolls</a
                >
                <a
                  href="https://www.hookandloop.com/converting"
                  class="ab-hero-section__all-products-item overflow-hidden ${TAILWIND_STYLES.flex_center}"
                  >Cut Pieces</a
                >
              </div>
              <div
                class="ab-hero-section__all-products-row flex justify-between items-center"
              >
                <a
                  href="https://www.hookandloop.com/brands/duragrip/straps"
                  class="ab-hero-section__all-products-item overflow-hidden ${TAILWIND_STYLES.flex_center}"
                  >Straps</a
                >
                <a
                  href="https://www.hookandloop.com/products/specialty"
                  class="ab-hero-section__all-products-item overflow-hidden ${TAILWIND_STYLES.flex_center}"
                  >Specialty Options</a
                >
              </div>
              <div
                class="ab-hero-section__all-products-row flex justify-between items-center"
              >
                <a
                  href="https://www.hookandloop.com/products"
                  class="ab-hero-section__all-products-item ab-hero-section__all-products-item--see-all  overflow-hidden mx-auto ${TAILWIND_STYLES.flex_center} uppercase"
                  >See all Products</a
                >
              </div>
            </div>
          </div>
        </section>
      `,
    );
  }

  function modifyCustomizationServicesLayout() {
    document.querySelector(".custom-converting-panel").className =
      "custom-converting-panel lg:px-[10px] py-5 text-center hidden lg:block";
    document.querySelector(
      ".custom-converting-panel .section-title a",
    ).innerText = "We're More Than Just Products!";

    const pItem = document.querySelector(
      ".custom-converting-panel .section-title p",
    );
    if (pItem) {
      pItem.className = `custom-converting-panel__subtitle ${TAILWIND_STYLES.paragraph}`;
      pItem.innerText =
        "We are a full service Hook & Loop conversion facility. Let us handle the hard work for you.";
    }

    document
      .querySelectorAll(
        ".custom-converting-panel .custom-converting-inner a.action.primary",
      )
      .forEach((item) => {
        item.className = TAILWIND_STYLES.button_primary_sm;
      });

    document.querySelector(
      ".custom-converting-panel .custom-converting-inner > .actions a",
    ).className =
      `ab-customize-services-cta mt-[15px] ${TAILWIND_STYLES.button_secondary}`;
  }

  function createBrandsSectionLayout() {
    const brands_data = [
      {
        image: "/media/brandicons/carnival.jpg",
        image_alt: "Carnival",
        image_title: "Carnival",
      },
      {
        image: "/media/brandicons/adidas.jpg",
        image_alt: "Adidas",
        image_title: "Adidas",
      },
      {
        image: "/media/brandicons/northrop-grumman.jpg",
        image_alt: "Northrop Grumman",
        image_title: "Northrop Grumman",
      },
      {
        image: "/media/brandicons/century-fox.jpg",
        image_alt: "20th Century Fox",
        image_title: "20th Century Fox",
      },
      {
        image: "/media/brandicons/black-decker.jpg",
        image_alt: "Black & Decker",
        image_title: "Black & Decker",
      },
      {
        image: "/media/brandicons/mayo-clinic.jpg",
        image_alt: "Mayo Clinic",
        image_title: "Mayo Clinic",
      },
      {
        image: "/media/brandicons/ikea.jpg",
        image_alt: "Ikea",
        image_title: "Ikea",
      },
      {
        image: "/media/brandicons/harley-davidson.jpg",
        image_alt: "Harley-Davidson Motor Company",
        image_title: "Harley-Davidson Motor Company",
      },
      {
        image: "/media/brandicons/nestle.jpg",
        image_alt: "Nestle",
        image_title: "Nestle",
      },
      {
        image: "/media/wysiwyg/Frito_Lay1.jpg",
        image_alt: "Frito Lay",
        image_title: "Frito Lay",
      },
    ];

    const targetNode = document.querySelector(".hook-loop-brands");
    targetNode.classList.add("hidden");
    targetNode.insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <section class="ab-hook-loop-brands bg-white overflow-hidden">
          <div class="ab-hook-loop-brands__container">
            <div class="section-title">
              <h2 class="mb-12 ${TAILWIND_STYLES.heading_lg}">
                Solving Hook and Loop <br class="ab-md-hidden" />
                Needs Across the World <br class="ab-md-hidden" />
                for 30 Years
              </h2>
            </div>
            <div
              class="ab-hook-loop-brands__auto-scroller-container overflow-hidden"
            >
              ${Array.from({ length: 2 })
                .map(
                  (_, index) => /* HTML */ `
                    <div
                      class="ab-hook-loop-brands__auto-scroller w-full flex justify-start items-center ${index ===
                      0
                        ? "scroll-infinite-rtl"
                        : "scroll-infinite-ltr"}"
                    >
                      ${[...brands_data, ...brands_data]
                        .map(
                          (item) => /* HTML */ `
                            <div
                              class="ab-hook-loop-brand__item ${TAILWIND_STYLES.flex_center}"
                            >
                              <img
                                src="${item.image}"
                                alt="${item.image_alt}"
                                title="${item.image_title}"
                                class="ab-hook-loop-brand__image"
                              />
                            </div>
                          `,
                        )
                        .join("")}
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>
        </section>
      `,
    );
  }

  function createTestimonialsSectionLayout() {
    const service_review_grid_data = [
      {
        column: 1,
        items: [
          {
            name: "Mark R.",
            text: "I make many purchases from different hook and loop suppliers all over the world and hookandloop.com are my favorite people to work with. I have needed some favors in the past and they helped me out. The quality of product is as good as it gets in this industry. Same goes for all the employees there. I am fortunate to live in the same state, so when I place an order, I usually receive the next day. I would be lost without hookandloop.com.",
            className: "",
          },
          {
            name: "Leslie G.",
            text: "Thank you so much for your support this year! Your company has been a pleasure to work with.",
            className: "ab-rotate-neg-2deg",
          },
          {
            name: "Joseph S.",
            text: "I am so grateful you exist! Not everyone needs both sides of the velcro!",
            className: "",
          },
        ],
      },
      {
        column: 2,
        items: [
          {
            name: "Nate B.",
            text: "I had to respond and tell you that I love your emails. This is my first order with your company, and if everything goes well, it won't be my last! But the fun, whimsical email you sent is awesome. I wish more companies sounded like they were having fun.",
            className: "ab-rotate-2deg",
          },
          {
            name: "Craig C.",
            text: "Thanks so much for the fast and easy sample order – it was perfect!",
            className: "",
          },
          {
            name: "Jim P.",
            text: "Your company came to us from a recommendation...now I know why they use you. She said you were great to work with. She was right.",
            className: "ab-rotate-2deg",
          },
        ],
      },
      {
        column: 3,
        items: [
          {
            name: "Joe S.",
            text: "Thank you. This is probably one of the best online service chats I have ever had. You are fast, clear, patient, and an asset to the company. Be proud of yourself. In this day and age, chats are usually very frustrating.",
            className: "",
          },
          {
            name: "Julia P.",
            text: "I'm so HAPPY to find your company AND loop fabric by the yard! I'm making small flannel boards for my class. As a teacher for MANY years, I use the flannel board everyday . . . and the children love it!!! We do games, math, stories and more. THANK YOU for having this fabric . . . I can't wait to get it and start on the boards!",
            className: "ab-rotate-neg-2deg",
          },
          {
            name: "Jim W.",
            text: "Wanted to send a quick note of thanks. You confirm so quickly and take very good care of us. I really appreciate you and your Team.",
            className: "",
          },
        ],
      },
    ];

    const targetNode = document.querySelector(".customer-service.text-center");
    targetNode.className =
      "customer-service ab-customer-service-mobile text-center block lg:hidden";
    targetNode.insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <section class="ab-customer-service text-center hidden lg:block">
          <div class="container">
            <div class="section-title mb-12">
              <h3 class="text-[22px] font-semibold leading-none">
                Top Notch
                <strong
                  ><a
                    data-content-type="customer testimonials"
                    class="text-hnle0 hover:text-hnl1d"
                    href="/customer-feedback"
                    >Customer Service</a
                  ></strong
                >
              </h3>
              <h5 class="font-normal">
                Here's what our customers have to say ...
              </h5>
            </div>
            <div
              class="ab-customer-service__review-grid mx-auto text-gray-700 body-font"
            >
              ${service_review_grid_data
                .map(
                  (col) => /* HTML */ `
                    <div
                      class="ab-customer-service__review-column ${TAILWIND_STYLES.flex_center} flex-col"
                    >
                      ${col.items
                        .map(
                          (item) => /* HTML */ `
                            <div
                              class="ab-customer-service__review-card card w-full card-interactive ${item.className}"
                            >
                              <div class="item">
                                <div class="ban1 text-left">
                                  <h5
                                    class="customer-service-name mb-3.75 ${TAILWIND_STYLES.heading_sm}"
                                  >
                                    ${item.name}
                                  </h5>
                                  <p
                                    class="customer-service-text mb-5 ${TAILWIND_STYLES.paragraph}"
                                  >
                                    ${item.text}
                                  </p>
                                  <div class="customer-service-quotation">
                                    <img
                                      src="${ASSETS.quotation}"
                                      alt="Quotation"
                                      class=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          `,
                        )
                        .join("")}
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>
        </section>
      `,
    );
  }

  function createFeatureSectionLayout() {
    const features_data = [
      {
        title: "Wholesale, Bulk and Discount Hook and Loop",
        image: "/media/wysiwyg/features-wholesale-bulk.jpg",
        link: "https://www.hookandloop.com/products",
        linkText: "Start Shopping",
      },
      {
        title: "Industrial Strength Straps",
        image: "/media/wysiwyg/features-industrial-strap.jpg",
        link: "https://www.hookandloop.com/straps/order-straps",
        linkText: "View Straps",
      },
      {
        title: "Customizing Your Hook and Loop",
        image: "/media/wysiwyg/features-customizing.jpg",
        link: "https://www.hookandloop.com/converting",
        linkText: "Customize Now",
      },
      {
        title: "Get a Free Expert Review <strong>of Your Product!</strong>",
        image: "/media/wysiwyg/features-free-expert.jpg",
        link: "mailto:info@hookandloop.com",
        linkText: "Email Us Today",
      },
    ];

    const targetNode = document.querySelector(".hookloop-features");
    targetNode.classList.add("hidden");
    targetNode.insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <section class="ab-hookloop-features bg-white">
          <div
            class="ab-hookloop-features__container container flex flex-col gap-6"
          >
            <div class="ab-hookloop-features__top-items gap-6">
              ${features_data
                .map(
                  (item /* HTML */) =>
                    `
                                    <div class="item p-4 border border-hnld7 flex flex-col gap-4">
                                        <div class="flex items-start gap-4">
                                            <div class="img-wrap overflow-hidden">
                                                <img src="${item.image}" width="300" height="300" loading="lazy" alt="" class="min-w-full" />
                                            </div>
                                            <div class="content-wrap flex-1">
                                                <h3 class="mb-3.75 ${TAILWIND_STYLES.heading_sm}">${item.title}</h3>
                                            </div>
                                        </div>
                                        <div class="action-rw w-full">
                                            <a data-content-type="features" class="min-w-full ${TAILWIND_STYLES.button_primary} ${TAILWIND_STYLES.flex_center}" href="${item.link}">${item.linkText}</a>
                                        </div>
                                    </div>    
                                `,
                )
                .join("")}
            </div>
            <div class="ab-hookloop-features__bottom-items">
              <!-- Fifth Item -->
              <div class="item p-4 border border-hnld7 flex flex-col gap-4">
                <div
                  class="${TAILWIND_STYLES.flex_center} flex-col lg:justify-start lg:items-start lg:flex-row"
                >
                  <div
                    class="img-wrap mb-4 w-[213px] h-[213px] rounded-[4px] overflow-hidden"
                  >
                    <img
                      src="/media/wysiwyg/features-fourd-program.jpg"
                      width="300"
                      height="300"
                      loading="lazy"
                      alt=""
                      class="min-w-full"
                    />
                  </div>
                  <div class="content-wrap flex-1">
                    <h3 class="text-[20px] font-[500] text-hnl1d mb-4">
                      Free 4D Program
                    </h3>
                    <p class="${TAILWIND_STYLES.paragraph}">
                      Product Consulting and Development Services for hook and
                      loop fasteners.
                    </p>
                    <ul class="list-disc mb-4 ${TAILWIND_STYLES.paragraph}">
                      <li class="marker:hnl0-link">Manufacturing Consulting</li>
                      <li class="marker:hnl0-link">Custom Product Design</li>
                      <li class="marker:hnl0-link">Production Planning</li>
                      <li class="marker:hnl0-link">Fast Response Times</li>
                    </ul>
                    <div class="action-rw flex flex-col lg:flex-row">
                      <a
                        data-content-type="features"
                        href="https://www.hookandloop.com/product-development"
                        class="action primary hnl-btn ${TAILWIND_STYLES.flex_center}"
                        >Start Now For Free!</a
                      >
                      <div
                        class="or-call leading-[28px] text-[16px] mt-2 lg:mt-0 font-bold lg:ml-2 flex-col lg:flex-row gap-1 ${TAILWIND_STYLES.flex_center}"
                      >
                        <span class="font-medium">Or</span>
                        <span class="inline-flex items-center gap-1">
                          <span class="ml-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              width="18"
                              height="18"
                              role="img"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              ></path>
                              <title>phone</title>
                            </svg>
                          </span>
                          <span class="call"
                            ><a
                              class="text-hnl1d  hover:underline"
                              href="tel:800-940-6934"
                              >Call 800-940-6934</a
                            ></span
                          >
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `,
    );
  }

  function modifyNewsLetterAndPromotionSection() {
    document.querySelector(
      ".newsletter-subscription .section-title h2",
    ).innerHTML =
      "Sign-Up for Special <br class='lg:hidden'/> <strong>Discounts & Offers</strong>";
    document.querySelector(".newsletter-subscription").className =
      "newsletter-subscription text-center text-white flex flex-col items-center bg-[#333]";
    document.querySelector(
      ".newsletter-subscription .section-title p",
    ).className = `font-light ${TAILWIND_STYLES.paragraph}`;
    document.querySelector(
      ".newsletter-subscription form.form.subscribe button",
    ).className =
      `ab-subscribe-cta p-[15px] rounded-r-[3px] font-bold ${TAILWIND_STYLES.button_primary}`;

    document.querySelector(".hook-loop-promotion").className =
      "hook-loop-promotion text-left text-hnl1d";
    document.querySelector(".hook-loop-promotion .container").className =
      "ab-hook-loop-promotion__container";
    document.querySelector(".hook-loop-promotion h2").className =
      "ab-hook-loop-promotion__header mb-6";
    document.querySelector(".hook-loop-promotion p.read-button").className =
      `read-button flex justify-start`;
    document.querySelector(
      ".hook-loop-promotion .action.primary.read-more",
    ).className =
      `ab-promotion-read-more-cta w-full mt-5 mb-6 ${TAILWIND_STYLES.button_secondary}`;
    document.querySelector(".hook-loop-promotion .call-or-email").className =
      "call-or-email bg-white border border-hnld7 p-4 rounded-sm";
    document.querySelector(".hook-loop-promotion .call-or-email p").className =
      "text-[18px] font-medium text-center";
  }

  function createNewsLetterAndPromotionSectionLayout() {
    const targetNode = document.querySelector(".hook-loop-promotion");

    const parElem = document.createElement("section");
    parElem.className = "ab-newsletter-and-promotion";
    targetNode.insertAdjacentElement("afterend", parElem);

    const elem = document.createElement("div");
    elem.className = "ab-newsletter-and-promotion__container w-full";
    elem.appendChild(document.querySelector(".hook-loop-promotion"));
    elem.appendChild(document.querySelector(".newsletter-subscription"));
    parElem.appendChild(elem);
  }

  function init() {
    document.body.classList.add(
      TEST_CONFIG.page_initials,
      `${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}`,
      `${TEST_CONFIG.page_initials}--version:${TEST_CONFIG.test_version}`,
    );

    console.table({ ID: testInfo.id, Variation: testInfo.name });

    console.log(
      `%cTest info`,
      "background: black; border: 2px solid green; color: white; display: block; text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3); text-align: left; font-weight: bold; padding: 10px; margin: 10px; font-family: monospace; white-space: pre;",
    );

    console.table(TEST_CONFIG);

    createHeroSectionLayout();
    modifyCustomizationServicesLayout();
    createBrandsSectionLayout(); /* -> PENDING */
    createTestimonialsSectionLayout();
    createFeatureSectionLayout();
    modifyNewsLetterAndPromotionSection();
    createNewsLetterAndPromotionSectionLayout();
  }

  function hasAllTargetElements() {
    return !!(
      document.querySelector(
        `body.cms-home:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`,
      ) &&
      document.querySelector(".custom-converting-panel") &&
      document.querySelector(".custom-converting-panel") &&
      document.querySelector(".customer-service") &&
      document.querySelector(".hookloop-features") &&
      document.querySelector(".hook-loop-promotion") &&
      document.querySelector(".newsletter-subscription")
    );
  }

  waitForElement(hasAllTargetElements, init);
})();
