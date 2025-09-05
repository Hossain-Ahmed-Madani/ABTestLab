(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-PMO23
  .ab-storyblok-modal
  > .wrapper-outer
  > .wrapper-inner
  > .wrapper-body {
  gap: 0;
}
.AB-PMO23
  .ab-storyblok-modal
  .storyblok-text-blocks
  .wrapper-frames
  .wrapper-frame:nth-child(3):last-child {
  grid-column: span 1;
}
.AB-PMO23 .ab-wrapper-body .wrapper-heading {
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 30px;
  line-height: normal;
  letter-spacing: 0px;
  text-transform: capitalize;
  color: #00053e;
}
.AB-PMO23 .ab-modal-tab-item {
  width: 135px;
  height: 35px;
  background: #fff;
  border: 1px solid #0067c3;
  border-radius: 10px;
  cursor: pointer;
  font-family: Nunito Sans;
  font-weight: 600;
  font-style: SemiBold;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  text-transform: capitalize;
  color: #0067c3;
}
.AB-PMO23 .ab-modal-tab-item:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.AB-PMO23 .ab-modal-tab-item:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.AB-PMO23 .ab-wrapper-body--quantity-active .ab-modal-tab-item--quantity,
.AB-PMO23 .ab-wrapper-body--water-type-active .ab-modal-tab-item--type {
  background: #0067c3;
  color: #fdffff;
}
.AB-PMO23 .ab-wrapper-body--quantity-active .ab-water-type-wrapper-block,
.AB-PMO23 .ab-wrapper-body--water-type-active .ab-quantity-wrapper-block {
  display: none !important;
}
.AB-PMO23 .ab-wrapper-body--quantity-active .ab-wrapper-heading--water-types,
.AB-PMO23 .ab-wrapper-body--water-type-active .ab-wrapper-heading--quantity {
  display: none !important;
}
.AB-PMO23 .ab-water-type-wrapper-block .wrapper-frames {
  gap: 30px;
}
.AB-PMO23 .ab-water-type-wrapper-block .wrapper-frame:not(:last-child) {
  padding-bottom: 30px;
}
.AB-PMO23 .ab-water-type-wrapper-block .wrapper-frame:not(:last-child) {
  border-bottom: 1px solid rgba(0, 5, 62, 0.1490196078);
}
.AB-PMO23 .ab-water-type-wrapper-block .ab-wrapper-image-container {
  margin-right: 21px;
}
.AB-PMO23 .ab-water-type-wrapper-block .ab-wrapper-image svg {
  width: 40px;
  height: 40px;
}
.AB-PMO23 .ab-water-type-wrapper-block .ab-heading-2 {
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 20px;
  line-height: normal;
  letter-spacing: 0px;
  text-transform: capitalize;
  color: #00053e;
  margin-bottom: 15px;
  text-align: left;
}
.AB-PMO23 .ab-water-type-wrapper-block .wrapper-description {
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #00053e;
  margin-bottom: 0;
  text-align: left;
}
.AB-PMO23 .ab-quantity-wrapper-block {
  margin-bottom: 30px;
}
.AB-PMO23 .ab-quantity-wrapper-sub-text {
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
}
.AB-PMO23 .ab-quantity-wrapper-block .wrapper-frames {
  gap: 20px;
}
.AB-PMO23 .ab-quantity-wrapper-block .wrapper-frame {
  padding: 20px;
  background: #f2f5f7;
  border-radius: 15px;
  position: relative;
}
.AB-PMO23 .ab-quantity-wrapper-block .ab-wrapper-image {
  margin-right: 11px;
}
.AB-PMO23 .ab-quantity-wrapper-block .ab-wrapper-image img {
  width: 100px;
  min-width: 100px;
  height: 102px;
  min-height: 102px;
  object-fit: contain;
}
.AB-PMO23 .ab-quantity-wrapper-block .ab-heading-wrapper-inner {
  background: #00053e;
  padding: 3.5px 9px;
  border-radius: 500px;
  width: 115px;
  margin-bottom: 15px;
}
.AB-PMO23 .ab-quantity-wrapper-block .ab-heading-2 {
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
}
.AB-PMO23 .ab-quantity-wrapper-block .wrapper-description {
  font-family: Nunito Sans;
  font-weight: 400;
  font-style: Regular;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #00053e;
}
.AB-PMO23 .ab-quantity-wrapper-block .wrapper-description span {
  color: #0067c3;
}
.AB-PMO23 .ab-freq-txt {
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  color: rgba(0, 5, 62, 0.6980392157);
  margin-bottom: 9px;
}
.AB-PMO23 .ab-helpline-txt {
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #00053e;
}
.AB-PMO23 .ab-helpline-txt a {
  font-weight: 700;
  font-size: 16px;
  text-decoration: underline;
  color: #0067c3;
}
@media screen and (min-width: 768px) {
  .AB-PMO23 .ab-wrapper-body .wrapper-heading {
    font-size: 36px;
    line-height: 42px;
  }
  .AB-PMO23 .ab-wrapper-body .wrapper-heading br {
    display: none;
  }
  .AB-PMO23 .ab-water-type-wrapper-block .ab-wrapper-image svg {
    width: 60px;
    height: 60px;
  }
  .AB-PMO23 .ab-water-type-wrapper-block .ab-heading-2 {
    font-size: 24px;
    line-height: normal;
  }
  .AB-PMO23 .ab-water-type-wrapper-block .wrapper-description {
    font-size: 14px;
    line-height: 22px;
  }
  .AB-PMO23 .ab-quantity-wrapper-block .wrapper-frame {
    padding: 30px 25px 23px;
  }
  .AB-PMO23 .ab-quantity-wrapper-block .ab-wrapper-image img {
    width: 160px;
    min-width: 160px;
    height: 163px;
    min-height: 163px;
    object-fit: contain;
  }
  .AB-PMO23 .ab-quantity-wrapper-block .ab-heading-wrapper-inner {
    padding: 6px 19px;
    width: 135px;
  }
  .AB-PMO23 .ab-quantity-wrapper-block .wrapper-description {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
  }
  .AB-PMO23 .ab-quantity-wrapper-block .wrapper-description span {
    color: #0067c3;
  }
  .AB-PMO23 .ab-freq-txt {
    font-size: 12px;
    line-height: 100%;
    margin-bottom: 15px;
  }
  .AB-PMO23 .ab-helpline-txt {
    font-size: 16px;
    line-height: 22px;
  }
}
@media screen and (min-width: 1025.5px) {
  .AB-PMO23 .ab-storyblok-modal > .wrapper-outer > .wrapper-inner {
    min-width: 1160px;
  }
  .AB-PMO23 .ab-water-type-wrapper-block .wrapper-frames {
    gap: 40px;
  }
  .AB-PMO23 .ab-water-type-wrapper-block .wrapper-frame {
    border: 0px;
    background: #f2f5f7;
    border-radius: 15px;
    padding: 30px;
    padding-bottom: 43px;
  }
  .AB-PMO23 .ab-water-type-wrapper-block .wrapper-frame:not(:last-child) {
    border: 0px;
  }
  .AB-PMO23 .ab-water-type-wrapper-block .ab-wrapper-image-container {
    margin-right: 0;
    margin-bottom: 33px;
  }
  .AB-PMO23 .ab-water-type-wrapper-block .ab-heading-2 {
    text-align: center;
    margin-bottom: 25px;
  }
  .AB-PMO23 .ab-water-type-wrapper-block .wrapper-description {
    text-align: center;
    margin-bottom: 0;
  }
  .AB-PMO23 .ab-quantity-wrapper-block {
    margin-bottom: 50px;
  }
  .AB-PMO23 .ab-quantity-wrapper-sub-text {
    font-size: 14px;
    line-height: 22px;
  }
  .AB-PMO23 .ab-quantity-wrapper-block .wrapper-frames {
    gap: 40px;
    width: max-content;
    margin: auto;
  }
  .AB-PMO23 .ab-quantity-wrapper-block .wrapper-frame {
    max-width: 250px;
  }
  .AB-PMO23 .ab-quantity-wrapper-block .ab-wrapper-image {
    margin-right: 0;
    margin-bottom: 20px;
  }
  .AB-PMO23 .ab-quantity-wrapper-block .ab-heading-wrapper-inner {
    margin-bottom: 0;
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    margin: auto;
  }
}

.AB-PMO23--v1 .ab-storyblok-modal > .wrapper-outer > .wrapper-inner {
  padding: 30px 25px 38px;
  height: max-content;
}
.AB-PMO23--v1 .ab-wrapper-body .ab-wrapper-heading--water-types {
  margin-bottom: 40px;
}
.AB-PMO23--v1 .ab-modal-tabs-wrapper,
.AB-PMO23--v1 .ab-wrapper-bottom {
  display: none !important;
}
@media screen and (min-width: 768px) {
  .AB-PMO23--v1 .ab-wrapper-body .ab-wrapper-heading--water-types {
    margin-bottom: 50px;
  }
}
@media screen and (min-width: 1025px) {
  .AB-PMO23--v1 .ab-storyblok-modal > .wrapper-outer > .wrapper-inner {
    padding: 50px 55px;
  }
}

.AB-PMO23--v2 .ab-storyblok-modal > .wrapper-outer > .wrapper-inner {
  padding: 30px 25px 38px;
  height: max-content;
}
.AB-PMO23--v2 .ab-wrapper-body .ab-wrapper-heading--quantity {
  margin-bottom: 30px;
}
.AB-PMO23--v2 .ab-modal-tabs-wrapper {
  display: none !important;
}
.AB-PMO23--v2 .ab-quantity-wrapper-sub-text {
  margin-bottom: 30px;
}
@media screen and (min-width: 1025px) {
  .AB-PMO23--v2 .ab-storyblok-modal > .wrapper-outer > .wrapper-inner {
    padding: 50px 55px;
  }
  .AB-PMO23--v2 .ab-quantity-wrapper-sub-text {
    margin-bottom: 60px;
  }
}

.AB-PMO23--v3 .ab-storyblok-modal > .wrapper-outer > .wrapper-inner {
  padding: 13px 25px 20px;
}
.AB-PMO23--v3 .ab-wrapper-body .ab-wrapper-heading--water-types {
  margin-bottom: 16px;
}
.AB-PMO23--v3 .ab-wrapper-body .ab-wrapper-heading--quantity {
  margin-bottom: 16px;
}
.AB-PMO23--v3 .ab-water-type-wrapper-block {
  margin-top: 30px;
  margin-bottom: 53px;
}
.AB-PMO23--v3 .ab-quantity-wrapper-block {
  margin-top: 30px;
  margin-bottom: 30px;
}
.AB-PMO23--v3 .ab-quantity-wrapper-sub-text {
  margin-bottom: 30px;
}
@media screen and (min-width: 768px) {
  .AB-PMO23--v3 .ab-wrapper-body .ab-wrapper-heading--water-types {
    margin-bottom: 26px;
  }
  .AB-PMO23--v3 .ab-wrapper-body .ab-wrapper-heading--quantity {
    margin-bottom: 26px;
  }
  .AB-PMO23--v3 .ab-water-type-wrapper-block {
    margin-bottom: 24px;
  }
}
@media screen and (min-width: 1025.5px) {
  .AB-PMO23--v3 .ab-storyblok-modal > .wrapper-outer > .wrapper-inner {
    padding: 50px 55px;
  }
  .AB-PMO23--v3 .ab-quantity-wrapper-block {
    margin-top: 22px;
    margin-bottom: 20px;
  }
  .AB-PMO23--v3 .ab-quantity-wrapper-sub-text {
    margin-bottom: 30px;
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
// https://marketer.monetate.net/control/a-899aac64/p/water.com/experience/2035976#c2556648:what
// https://www.figma.com/design/J6bgxIkQ0Xu2A4s1xA19VL/Learn-More?node-id=0-1&p=f&t=t49Fr6Y6VkrGrMfT-0

(() => {
  const TEST_CONFIG = {
    client: "Acadia",
    project: "Water",
    site_url: "https://www.water.com/",
    test_name:
      "PMO23: [Start-water-delivery] Optimize “Learn More” Copy & Modal Design-(2) SET UP TEST",
    page_initials: "AB-PMO23",
    test_variation: 1 /* 0 -> control, 1, 2, 3 */,
    test_version: 0.0001,
  };

  const ASSETS = {
    purified_svg: /* HTML */ `<svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_15_124)">
        <path
          d="M29.8538 59.0722C45.9907 59.0722 59.0723 45.9906 59.0723 29.8537C59.0723 13.7167 45.9907 0.635132 29.8538 0.635132C13.7168 0.635132 0.635254 13.7167 0.635254 29.8537C0.635254 45.9906 13.7168 59.0722 29.8538 59.0722Z"
          stroke="#0067C3"
          stroke-width="1.736"
        />
        <path
          d="M36.0703 31.8585C36.1459 31.7902 36.2154 31.7288 36.2788 31.6741C36.3422 31.7293 36.4118 31.7907 36.4874 31.8585C36.9977 32.3189 37.4793 32.81 37.9296 33.3293C39.0439 34.6098 40.3032 36.4361 40.9479 38.6532C41.643 41.0349 41.1988 42.8854 40.26 44.1322C39.3118 45.3922 37.8118 46.0961 36.2788 46.0961C34.7459 46.0961 33.2496 45.3922 32.302 44.1322C31.3654 42.8861 30.9213 41.0341 31.6105 38.6517C32.2544 36.4361 33.5137 34.6105 34.6281 33.3293C35.0781 32.8101 35.5595 32.3189 36.0696 31.8585H36.0703ZM23.2171 31.8585C23.2927 31.7902 23.3622 31.7288 23.4257 31.6741L23.6342 31.8585C24.1442 32.3189 24.6256 32.8101 25.0757 33.3293C26.19 34.6098 27.4493 36.4361 28.0939 38.6532C28.7891 41.0349 28.3457 42.8854 27.4069 44.1322C26.4578 45.3922 24.9586 46.0961 23.4257 46.0961C21.8927 46.0961 20.3964 45.3922 19.4488 44.1322C18.5115 42.8861 18.0681 41.0341 18.7566 38.6517C19.4013 36.4361 20.6605 34.6105 21.7749 33.3293C22.2249 32.8101 22.7071 32.3189 23.2171 31.8585ZM29.1732 13.71C29.2488 13.6417 29.3183 13.5802 29.3818 13.5256C29.4452 13.5802 29.5149 13.6417 29.591 13.71C29.9642 14.0458 30.4778 14.5427 31.0325 15.1807C32.1469 16.4619 33.4061 18.2883 34.0508 20.5046C34.7459 22.8863 34.3018 24.7376 33.363 25.9837C32.4147 27.2437 30.9154 27.9476 29.3825 27.9476C27.8496 27.9476 26.3532 27.2444 25.4057 25.9837C24.4683 24.7376 24.0249 22.8863 24.7135 20.5039C25.3574 18.2876 26.6174 16.4619 27.731 15.1807C28.181 14.6615 28.6632 14.1704 29.1732 13.71ZM43.3727 13.71L43.5813 13.5256C43.6447 13.5802 43.7144 13.6417 43.7905 13.71C44.3006 14.1704 44.782 14.6615 45.232 15.1807C46.3464 16.4619 47.6057 18.2883 48.2503 20.5046C48.9454 22.8863 48.502 24.7376 47.5632 25.9837C46.6142 27.2437 45.1149 27.9476 43.582 27.9476C42.0491 27.9476 40.5527 27.2444 39.6052 25.9837C38.6678 24.7376 38.2244 22.8863 38.913 20.5039C39.5576 18.2876 40.8169 16.4619 41.9313 15.1807C42.3813 14.6615 42.8627 14.1704 43.3727 13.71ZM15.7369 13.71C15.8125 13.6417 15.882 13.5802 15.9454 13.5256C16.0088 13.5802 16.0783 13.6417 16.1539 13.71C16.5271 14.0458 17.0408 14.5427 17.5961 15.1807C18.7105 16.4619 19.9698 18.2883 20.6144 20.5046C21.3096 22.8863 20.8654 24.7376 19.9266 25.9837C18.9776 27.2437 17.4783 27.9476 15.9454 27.9476C14.4125 27.9476 12.9161 27.2444 11.9686 25.9837C11.032 24.7376 10.5878 22.8863 11.2771 20.5039C11.921 18.2876 13.1803 16.4619 14.2947 15.1807C14.7447 14.6615 15.2268 14.1704 15.7369 13.71Z"
          stroke="#0067C3"
          stroke-width="1.736"
        />
      </g>
      <defs>
        <clipPath id="clip0_15_124">
          <rect width="60" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg> `,

    spring_svg: /* HTML */ `<svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_21)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.8554 58.4363C45.4511 58.4363 58.0937 45.6388 58.0937 29.8537C58.0937 14.0685 45.4504 1.27024 29.8554 1.27024C14.2605 1.27024 1.61639 14.0678 1.61639 29.8537C1.61639 45.6395 14.2598 58.4363 29.8554 58.4363ZM29.8554 59.7066C46.1443 59.7066 59.3494 46.3412 59.3494 29.8529C59.3494 13.3668 46.1436 0 29.8554 0C13.5672 0 0.36145 13.3661 0.36145 29.8537C0.36145 46.3412 13.5665 59.7066 29.8554 59.7066Z"
          fill="#0067C3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.3039 27.8305C17.5807 32.5244 18.5161 38.4037 22.1075 41.7205C25.9467 45.2642 32.147 45.5985 36.4793 42.4961C40.4588 39.6461 41.7802 34.2812 39.9723 29.3649C39.8436 29.0137 39.6988 28.6656 39.5378 28.3207C39.2982 27.8087 39.0278 27.3119 38.7282 26.8332C37.9981 25.6661 37.2087 24.5385 36.4186 23.411C36.0108 22.8278 35.6017 22.2446 35.2019 21.6556C33.8357 19.6471 32.4752 17.6356 31.0822 15.5773L30.6434 14.929L30.5284 14.76L29.7694 13.6383L29.768 13.6361L29.7665 13.6339V13.6361C29.5135 14.0117 29.2605 14.3861 29.0075 14.7593L28.941 14.8559C28.234 15.8949 27.5226 16.9251 26.8149 17.9524C24.8067 20.8639 22.8195 23.7454 20.9812 26.7168C20.753 27.0866 20.5272 27.4578 20.3039 27.8305ZM22.8773 27.8934C23.4817 28.1927 24.0802 28.4276 24.6824 28.6449C25.0337 28.3229 25.2347 27.911 25.4371 27.4954L25.4877 27.3915C25.693 26.9715 25.9142 26.5551 26.3067 26.231L26.3075 26.2303C26.512 26.7571 26.7802 27.0659 27.0846 27.2283C27.7135 27.5634 28.4949 27.2737 29.1759 26.9905C29.8431 26.7124 30.0867 26.0817 30.3419 25.4246C30.366 25.3603 30.3911 25.2959 30.4171 25.2315C30.5892 24.7961 30.7843 24.3622 31.127 24.0242L31.8549 25.1188L31.9345 25.2381L33.36 27.3856C33.6704 27.852 33.9839 28.3242 34.3005 28.8022C34.3742 28.6303 34.4205 28.462 34.4559 28.2981C34.4752 28.2083 34.4928 28.1198 34.5087 28.0324C34.5405 27.8583 34.5716 27.6915 34.6243 27.5349C34.6605 27.4281 34.7053 27.3256 34.7689 27.2283C34.8007 27.1776 34.8381 27.1283 34.881 27.0805L38.3602 29.1007C38.3916 29.0749 38.4226 29.0481 38.4535 29.0203L38.4701 29.0063C38.5328 28.9527 38.5954 28.8983 38.6581 28.8432L38.5807 28.7115C38.2952 28.2218 38.0026 27.7364 37.7031 27.2554C36.6448 25.552 35.5135 23.8961 34.3655 22.2381L33.7894 21.4068C32.6978 19.8337 31.6005 18.2517 30.5451 16.6193C30.2968 16.2353 30.0518 15.8491 29.8099 15.461L29.6451 15.7024L29.0364 16.5981L26.5807 20.2076C25.2072 22.2271 23.8504 24.221 22.4892 26.2244L21.7764 27.2707C22.1311 27.4995 22.4988 27.7079 22.8773 27.8934ZM38.9545 30.2568L38.5026 30.6468L37.7364 30.2027L35.6884 29.0137L35.5814 28.9515C35.5453 29.0685 35.5026 29.1893 35.4513 29.3078L34.5369 31.4364L33.2588 29.5098L31.2593 26.4988C30.999 27.0681 30.5537 27.7888 29.6545 28.1642L29.6422 28.1693C29.1759 28.3632 28.3496 28.7071 27.5002 28.6398C27.1259 28.613 26.7622 28.5023 26.4354 28.3156C26.2453 28.6939 25.9655 29.1827 25.5246 29.5859L24.968 30.0959L24.261 29.8405C23.34 29.5083 22.3713 29.1161 21.3665 28.5066C18.9564 32.6964 19.8246 37.8915 22.9525 40.781C26.3429 43.9098 31.8889 44.2273 35.7549 41.4585C39.0781 39.0783 40.3525 34.5732 38.9545 30.2568Z"
          fill="#0067C3"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_21">
          <rect width="60" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg> `,

    alkaline_svg: /* HTML */ `<svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_24)">
        <path
          d="M29.8554 59.0722C45.7979 59.0722 58.7219 45.9906 58.7219 29.8537C58.7219 13.7167 45.7979 0.635132 29.8554 0.635132C13.9129 0.635132 0.988892 13.7167 0.988892 29.8537C0.988892 45.9906 13.9129 59.0722 29.8554 59.0722Z"
          stroke="#0067C3"
          stroke-width="1.736"
        />
        <path
          d="M29.0602 16.4685C29.4 16.1627 29.6819 15.9234 29.8872 15.7544C30.0925 15.9234 30.3752 16.1627 30.7149 16.4685C31.7336 17.3883 32.6965 18.3693 33.5985 19.4063C35.82 21.9585 38.3501 25.6149 39.6491 30.0739C41.0588 34.901 40.1747 38.7329 38.2019 41.3495C36.2176 43.9815 33.086 45.4471 29.8872 45.4471C26.6891 45.4471 23.5641 43.9815 21.5834 41.3495C19.6128 38.7329 18.7287 34.901 20.1267 30.0739C21.4251 25.6149 23.9544 21.9578 26.1766 19.4063C27.0786 18.3693 28.0416 17.3883 29.0602 16.4685Z"
          stroke="#0067C3"
          stroke-width="1.736"
        />
        <path
          d="M37.805 29.6459L37.0872 32.1907L36.3687 29.6459C36.183 28.9886 35.8349 28.39 35.3573 27.9066C34.8798 27.4232 34.2884 27.0709 33.639 26.8829L31.1234 26.1549L33.6383 25.4283C34.2878 25.2403 34.8792 24.8879 35.3568 24.4043C35.8344 23.9208 36.1824 23.3221 36.3679 22.6646L37.0872 20.119L37.805 22.6639C37.9907 23.3212 38.3388 23.9198 38.8163 24.4032C39.2939 24.8866 39.8853 25.2389 40.5347 25.4268L43.0503 26.1549L40.5354 26.8822C39.886 27.0701 39.2947 27.4224 38.8171 27.9058C38.3395 28.3892 37.9914 28.9878 37.8058 29.6451L37.805 29.6459ZM45.266 23.2178L45.0376 24.1427L44.8084 23.2178C44.6771 22.6873 44.4061 22.2028 44.0241 21.816C43.6422 21.4291 43.1638 21.1545 42.6397 21.0212L41.7246 20.79L42.6397 20.558C43.164 20.4256 43.6428 20.1513 44.0248 19.7645C44.4069 19.3776 44.6777 18.8929 44.8084 18.3622L45.0376 17.4366L45.266 18.3622C45.3975 18.8927 45.6688 19.3772 46.051 19.7639C46.4332 20.1506 46.9119 20.4251 47.4361 20.558L48.3499 20.79L47.4361 21.0212C46.9115 21.1535 46.4323 21.4278 46.05 21.8148C45.6677 22.2018 45.3967 22.6868 45.266 23.2178ZM44.0602 33.8151L43.7125 34.8732L43.3641 33.8151C43.2665 33.5188 43.1021 33.2496 42.8839 33.0287C42.6657 32.8079 42.3997 32.6415 42.107 32.5427L41.0624 32.1907L42.107 31.838C42.3998 31.7394 42.666 31.573 42.8843 31.3521C43.1026 31.1313 43.2671 30.862 43.3648 30.5656L43.7118 29.5083L44.0602 30.5656C44.1578 30.8621 44.3223 31.1316 44.5406 31.3525C44.7589 31.5735 45.0251 31.74 45.318 31.8388L46.3626 32.19L45.3173 32.5427C45.0245 32.6415 44.7585 32.8081 44.5403 33.0291C44.3221 33.25 44.1577 33.5187 44.0602 33.8151Z"
          fill="#E8F6FD"
          stroke="#0067C3"
          stroke-width="1.736"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_24">
          <rect width="60" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg> `,

    distilled_svg: /* HTML */ `<svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_28)">
        <path
          d="M29.8554 59.0722C45.7979 59.0722 58.7219 45.9906 58.7219 29.8537C58.7219 13.7167 45.7979 0.635132 29.8554 0.635132C13.9129 0.635132 0.988892 13.7167 0.988892 29.8537C0.988892 45.9906 13.9129 59.0722 29.8554 59.0722Z"
          stroke="#0067C3"
          stroke-width="1.736"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30.681 15.2444V15.2495C31.5544 16.5108 32.4262 17.7733 33.2964 19.0368C35.192 21.7942 37.0998 24.543 39.0195 27.2832C40.419 29.2741 41.4441 31.41 41.7022 33.8568C41.9935 36.6241 41.4484 39.1266 39.8682 41.4446C39.5111 41.9645 39.1194 42.4591 38.6957 42.9249C38.6668 42.5166 38.6472 42.1346 38.6284 41.771C38.6164 41.531 38.6034 41.2973 38.5894 41.07C38.5651 40.612 38.5195 40.1554 38.4528 39.7017C37.8658 35.9151 36.1504 32.6963 33.8263 29.7051C32.3545 27.8093 30.9998 25.8176 29.6458 23.8258C29.0399 22.9309 28.4283 22.0399 27.8111 21.1529C27.3152 20.4432 27.4749 19.8483 27.968 19.1824C28.6034 18.3263 29.199 17.441 29.8308 16.5015L29.9219 16.3661C30.1648 16.0046 30.4154 15.6339 30.6737 15.2539L30.681 15.2444ZM28.5542 20.1219L30.7229 17.1951C30.7229 17.1951 37.5904 27.0732 38.6747 28.9024C39.759 30.7317 40.1205 31.4634 40.4819 33.6585C40.8434 35.8537 40.4819 38.0488 39.759 39.5122C39.0361 35.4878 36.1446 30.7317 34.6988 28.9024C33.253 27.0732 28.5542 20.1219 28.5542 20.1219ZM31.8578 46.2176L31.6909 46.2593L30.5805 46.5351C30.6133 46.0863 30.6301 45.6461 30.6311 45.2144C30.6405 38.4146 26.7723 33.7383 22.9106 29.0693C22.459 28.5254 22.0106 27.9795 21.5653 27.4317C22.2542 26.438 22.9171 25.4824 23.5793 24.5297L24.24 23.5771L25.0113 22.4656C25.2663 22.8437 25.5169 23.2193 25.7631 23.5924L26.1145 24.1244C26.9154 25.3383 27.6961 26.5207 28.5354 27.6585C29.1643 28.5117 29.8323 29.3378 30.5002 30.1632C31.333 31.1927 32.1658 32.2215 32.9227 33.3051C35.1383 36.4734 36.0542 40.0507 35.7889 43.9471C35.7347 44.7439 35.5048 45.3007 34.7104 45.5027C33.7974 45.7361 32.8807 45.9637 31.8578 46.2176ZM31.8839 44.9034C32.7774 44.6817 33.5913 44.479 34.4046 44.2712C34.4283 44.2651 34.4517 44.2578 34.4747 44.2493C34.4816 44.2293 34.4876 44.209 34.4928 44.1885C34.5101 44.1161 34.5268 44.0115 34.5376 43.86C34.7841 40.2358 33.9376 36.9534 31.899 34.039C31.2448 33.1024 30.5255 32.201 29.7766 31.2732L29.5301 30.968C28.8643 30.1456 28.1776 29.2968 27.5306 28.418M31.8839 44.9034C31.774 37.7751 27.6651 32.8207 23.88 28.2585L23.1434 27.3688L24.6058 25.2615L24.9904 24.7076L25.0496 24.7976C25.86 26.0246 26.6704 27.2532 27.5292 28.4173"
          fill="#0067C3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28.5701 44.1856C28.1559 38.8954 25.1219 35.1878 22.0713 31.4568C21.8785 31.2227 21.6865 30.9876 21.4951 30.7515C21.2069 30.3983 20.9214 30.0434 20.6385 29.6868C20.4053 30.0966 20.2012 30.5149 20.0262 30.9417C17.4209 37.2827 21.1612 45.221 27.4351 46.3954C27.8453 46.472 28.266 46.5188 28.6973 46.5359H28.6995L28.698 46.508L28.6973 46.489C28.6828 46.2159 28.6696 45.9502 28.6575 45.6922L28.6359 45.262C28.6185 44.8961 28.5983 44.5398 28.5701 44.1856ZM27.3701 45.0841C27.3556 44.8163 27.3404 44.5544 27.3195 44.2888V44.2873C26.9378 39.4266 24.1893 36.0556 21.1315 32.3063C21.0703 32.2302 21.0084 32.1541 20.9457 32.078C20.0804 34.7078 20.3689 37.6054 21.524 40.0398C22.7342 42.5876 24.8233 44.4973 27.3701 45.0841Z"
          fill="#0067C3"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_28">
          <rect width="60" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg> `,

    one_two_people_img: "https://sb.monetate.net/img/1/1576/5822037.png",
    three_five_people_img: "https://sb.monetate.net/img/1/1576/5822036.png",
    five_plus_people_img: "https://sb.monetate.net/img/1/1576/5822035.png",
  };

  const DATA = {
    learn_more_txt: [
      "What's the Difference?",
      "How Much Water Do I Need?",
      "Water Guide?",
    ],
    water_types: [
      {
        icon: ASSETS.purified_svg,
        title: "Purified",
        desc: "Enjoy the crisp, clean taste of purified water. Purified water is filtered to remove impurities like chemicals and other contaminants for pure refreshment.",
      },
      {
        icon: ASSETS.spring_svg,
        title: "Spring",
        desc: "Crisp, pure, and refreshing. Spring water comes from an underground formation and is collected at its source and bottled for your enjoyment.",
      },
      {
        icon: ASSETS.alkaline_svg,
        title: "Alkaline",
        desc: "Primo Water Plus is a purified water enhanced with minerals for a smooth taste and a pH level of 9.5 at the time of bottling.",
      },
      {
        icon: ASSETS.distilled_svg,
        title: "Distilled",
        desc: "Sparkletts distilled water is boiled to remove all impurities, reducing water to its purest form, H20.",
      },
    ],
    quantity: [
      {
        imgSrc: ASSETS.one_two_people_img,
        title: "For 1-2 people",
        desc: "We recommend <span>two 5 gallon</span> water bottles delivered every 2 weeks*",
      },
      {
        imgSrc: ASSETS.three_five_people_img,
        title: "For 3-5 people",
        desc: "We recommend <span>four 5 gallon</span> water bottles delivered every 2 weeks*.",
      },
      {
        imgSrc: ASSETS.five_plus_people_img,
        title: "FOR 5+ people",
        desc: "We recommend <span>six 5 gallon</span> water bottles delivered every 2 weeks*.",
      },
    ],
  };

  function waitForElement(predicate, callback, timer = 20000, frequency = 100) {
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
      console.error(error);
      return;
    }
  }

  function fireGA4Event(eventName, eventLabel = "") {
    console.log(`Firing GA4 Event: ${eventName} - ${eventLabel}`);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "GA4event",
      "ga4-event-name": "cro_event",
      "ga4-event-p1-name": "event_category",
      "ga4-event-p1-value": eventName,
      "ga4-event-p2-name": "event_label",
      "ga4-event-p2-value": eventLabel,
    });
  }

  function createQuantityLayout() {
    return /* HTML */ `
      <div
        class="ab-quantity-wrapper-block wrapper-block storyblok-text-blocks icon-no-border"
      >
        <p class="ab-quantity-wrapper-sub-text">
          See our recommended bottle quantity below. Edit, skip or cancel your
          recurring orders in your account anytime.
        </p>
        <div
          class="wrapper-frames grid grid-cols-1 landscape:grid-cols-3 lg:grid-cols-3 justify-items-center"
        >
          ${DATA.quantity
            .map(
              (item, index) => /* HTML */ `
                <!-- ITEM ${index + 1} -->
                <div
                  class="wrapper-frame w-full max-w-172 storyblok-text-blocks-frame"
                >
                  <div
                    class="wrapper-inner h-full flex lg:flex-col self-center"
                  >
                    <div
                      class="ab-wrapper-image-container flex justify-start items-center lg:justify-center"
                    >
                      <div
                        class="ab-wrapper-image flex justify-start lg:items-center lg:justify-center"
                      >
                        <img src="${item.imgSrc}" />
                      </div>
                    </div>
                    <div
                      class="wrapper-headline flex flex-col justify-center items-start"
                    >
                      <div class="wrapper-headline-text mr-auto lg:mx-auto">
                        <div class="wrapper-element storyblok-heading">
                          <div class="ab-heading-wrapper-inner wrapper-inner">
                            <div
                              role="heading"
                              class="ab-heading-2 text-left lg:text-center"
                            >
                              <span> ${item.title}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="wrapper-description paragraph-lg list-ticks text-left lg:text-center"
                      >
                        <p>${item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function createWaterTypeLayout() {
    return /* HTML */ `
      <div
        class="ab-water-type-wrapper-block wrapper-block storyblok-text-blocks icon-no-border"
      >
        <div
          class="wrapper-frames grid grid-cols-1 landscape:grid-cols-4 lg:grid-cols-4 justify-items-center"
        >
          ${DATA.water_types
            .map(
              (item, index) => /* HTML */ `
                <!-- ITEM ${index + 1} -->
                <div
                  class="wrapper-frame w-full max-w-172 storyblok-text-blocks-frame"
                >
                  <div
                    class="wrapper-inner h-full flex lg:flex-col self-center"
                  >
                    <div
                      class="ab-wrapper-image-container flex justify-start items-start lg:items-center lg:justify-center"
                    >
                      <div
                        class="ab-wrapper-image flex justify-start items-start lg:items-center lg:justify-center"
                      >
                        ${item.icon}
                      </div>
                    </div>
                    <div class="wrapper-headline">
                      <div class="wrapper-headline-text flex flex-col">
                        <div class="wrapper-element storyblok-heading">
                          <div class="wrapper-inner">
                            <div
                              role="heading"
                              class="ab-heading-2 text-left lg:text-center"
                            >
                              <span> ${item.title}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="wrapper-description paragraph-lg list-ticks text-left lg:text-center"
                      >
                        <p>${item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function createLayout() {
    const btn = document.querySelector(
      "a.text-primo-river[data-modal-v2-trigger]",
    );
    if (btn) {
      btn.innerText = DATA.learn_more_txt[TEST_CONFIG.test_variation - 1];
    }

    // const parent = document.querySelector(".storyblok-text-blocks").parentNode;
    const parent = document.querySelector("#water-types .wrapper-body");
    if (parent) {
      parent.closest(".storyblok-modal").classList.add("ab-storyblok-modal");
      const activeClass = "ab-wrapper-body--water-type-active";
      parent.classList.add("ab-wrapper-body", activeClass);

      parent.innerHTML = /* HTML */ `
        <div class="wrapper-text flex flex-col">
          <div
            class="ab-wrapper-heading ab-wrapper-heading--water-types wrapper-heading text-center"
          >
            Water Types
          </div>
          <div
            class="ab-wrapper-heading ab-wrapper-heading--quantity wrapper-heading text-center"
          >
            ${"Water Guide"}
          </div>
        </div>
        <div class="ab-modal-tabs-wrapper flex justify-center items-center">
          <div
            class="ab-modal-tab-item ab-modal-tab-item--quantity flex justify-center items-center"
          >
            Quantity
          </div>
          <div
            class="ab-modal-tab-item ab-modal-tab-item--type flex justify-center items-center"
          >
            Type
          </div>
        </div>
        ${createQuantityLayout()} ${createWaterTypeLayout()}
        <div
          class="ab-wrapper-bottom flex flex-col justify-center items-center"
        >
          <p class="ab-freq-txt">*Based on a two week delivery frequency.</p>
          <h5 class="ab-helpline-txt">
            Have Questions? Call <a href="tel:">800-201-6218</a>
          </h5>
        </div>
      `;
    }
  }

  function clickEvents() {
    const actionList = [
      {
        selector: "a.text-primo-river[data-modal-v2-trigger]",
        callback: (e) => fireGA4Event("PMO23_Learn_More", e.target.innerText),
      },
      {
        selector: ".ab-modal-tab-item",
        callback: (e) => {
          // const parent = document.querySelector(".storyblok-text-blocks").parentNode;
          const parent = document.querySelector("#water-types .wrapper-body");
          const targetNode = e.target;

          if (parent && targetNode) {
            parent.classList.remove(
              "ab-wrapper-body--quantity-active",
              "ab-wrapper-body--water-type-active",
            );
            fireGA4Event("PMO23_Pills", targetNode.innerText);

            if (targetNode.classList.contains("ab-modal-tab-item--quantity")) {
              parent.classList.add("ab-wrapper-body--quantity-active");
            } else if (
              targetNode.classList.contains("ab-modal-tab-item--type")
            ) {
              parent.classList.add("ab-wrapper-body--water-type-active");
            }
          }
        },
      },
    ];

    actionList.forEach((actionItem) =>
      waitForElement(
        () => document.querySelectorAll(actionItem.selector).length >= 1,
        () => {
          const targetNodes = document.querySelectorAll(actionItem.selector);
          targetNodes.forEach((item) =>
            item.addEventListener("click", actionItem.callback),
          );
        },
      ),
    );
  }

  function modalViewGoal() {
    new MutationObserver((mutationsList, observer) => {
      if (
        document.querySelector("#water-types").getAttribute("aria-hidden") ===
        "false"
      ) {
        fireGA4Event("PMO23_Modal View", "Water Guide Modal View");
        observer.disconnect();
      }
    }).observe(document.querySelector("#water-types"), { attributes: true });
  }

  function init() {
    console.log(TEST_CONFIG);

    document.body.classList.add(
      TEST_CONFIG.page_initials,
      `${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}`,
      `${TEST_CONFIG.page_initials}--version-${TEST_CONFIG.test_version}`,
    );

    createLayout();
    clickEvents();
    modalViewGoal();
  }

  function hasAllTargetElements() {
    return !!(
      window.location.href.includes("start-water-delivery") &&
      document.querySelector(
        `body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`,
      ) &&
      document.querySelector("a.text-primo-river[data-modal-v2-trigger]") &&
      document.querySelector(".storyblok-text-blocks") &&
      document.querySelector("#water-types")
    );
  }

  waitForElement(hasAllTargetElements, init);
})();
