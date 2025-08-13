(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.MS53_1:not(.MS53_1--v0) #product-us-vs-them h2:not(.ab-sub-heading),
.MS53_1:not(.MS53_1--v0) #us-vs-them-banner {
  display: none;
}
.MS53_1:not(.MS53_1--v0) #product-us-vs-them .width.w-l > img {
  display: none;
}
.MS53_1:not(.MS53_1--v0) #product-us-vs-them,
.MS53_1:not(.MS53_1--v0) #product-us-vs-them.light-purp,
.MS53_1:not(.MS53_1--v0) .cereal-bars-template #product-us-vs-them {
  padding-top: 24px !important;
  padding-bottom: 58px !important;
}
.MS53_1:not(.MS53_1--v0) #product-us-vs-them .width.w-l {
  max-width: 100%;
  width: 100%;
}
.MS53_1:not(.MS53_1--v0) #product-us-vs-them .width.w-l:before {
  content: "";
  background: url('data:image/svg+xml,<svg width="737" height="82" viewBox="0 0 737 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.2002 2.12598V48.3945C66.2002 58.4386 63.0811 66.5668 57.5088 72.1807C51.9377 77.7933 43.813 80.995 33.6055 80.9951C23.3973 80.9951 15.2698 77.7977 9.69629 72.1875C4.1218 66.5762 1 58.4486 1 48.3945V2.12598L17.2256 2.13574V48.4043C17.2256 53.8027 18.6043 58.3402 21.4023 61.541C24.2177 64.7616 28.3593 66.502 33.6055 66.502C38.8519 66.5019 42.9983 64.7586 45.8184 61.5361C48.6211 58.3332 50.0049 53.7936 50.0049 48.3945V2.12598H66.2002ZM296.23 1C303.661 1.00001 310.001 2.67613 315.026 5.89844C319.836 8.98261 323.496 13.5184 325.76 19.4863L312.743 26.9932C311.31 22.9123 309.345 19.8297 306.679 17.7314C303.751 15.4274 300.096 14.3977 295.669 14.3975H295.667C292.266 14.3875 289.347 15.2155 287.247 16.6807C285.132 18.1565 283.845 20.2926 283.845 22.7793C283.845 26.1404 285.702 28.5867 288.783 30.3857C291.817 32.1567 296.147 33.3771 301.408 34.3516V34.3525C311.445 36.2293 318.436 38.5592 322.919 42.1514C327.317 45.6753 329.409 50.5061 329.409 57.7373C329.409 64.421 326.486 70.1975 321.127 74.3281C315.748 78.4735 307.864 80.9951 297.94 80.9951H297.926C290.516 81.1002 283.198 79.3783 276.617 75.9863L275.982 75.6523C269.713 72.2444 264.934 66.5618 261.602 58.4805L275.155 49.9482C276.914 55.3658 279.81 59.5478 283.619 62.4248C287.72 65.5225 292.81 67.0547 298.514 67.0547C302.707 67.0547 306.312 66.3299 308.906 64.8945C311.535 63.4404 313.183 61.2088 313.183 58.3105C313.183 56.8368 312.945 55.4691 312.297 54.2275C311.646 52.9799 310.621 51.9378 309.175 51.0518C306.336 49.3128 301.737 48.0994 294.674 47.0732L294.671 47.0723C286.347 45.8904 279.577 43.3453 274.904 39.3291C270.267 35.3432 267.618 29.8456 267.618 22.5479C267.618 10.8916 278.451 0.999999 296.23 1ZM669.023 2.14648L685.931 68.123H687.868L704.774 2.14648H736V79.8584H719.774V10.7109L717.807 10.459L699.774 79.8584H673.993L655.962 10.459L653.994 10.7109V79.8584H637.768V2.14648H669.023ZM623.014 2.14648V16.6602H579.622V32.8906H619.604V47.4043H579.622V65.3652H624.15V79.8584H563.396V2.14648H623.014ZM493.29 2.14648V34.6006H530.596V2.14648H546.821V79.8584H530.596V49.1143H493.29V79.8584H477.064V2.14648H493.29ZM465.278 2.14648V16.6504H437.939V79.8584H421.713V16.6504H394.385V2.14648H465.278ZM357.301 63.6357V79.8584H341.085V63.6357H357.301ZM195.407 2.13672L217.956 67.1768L218.901 69.9023L219.846 67.1768L242.395 2.13672H260.063L231.371 79.8584H206.342L177.737 2.13672H195.407ZM83.1367 22.5459C83.1181 10.8916 93.9498 0.999999 111.729 1C119.155 1.00007 125.495 2.67352 130.521 5.89453C135.333 8.97766 138.995 13.5138 141.259 19.4863L128.241 26.9941C126.804 22.9129 124.839 19.83 122.174 17.7314C119.248 15.4274 115.595 14.3978 111.168 14.3975H111.166C107.765 14.3874 104.837 15.215 102.728 16.6787C100.604 18.1526 99.3027 20.2889 99.3027 22.7793C99.3028 26.1404 101.16 28.5866 104.24 30.3857C107.083 32.0462 111.064 33.2234 115.883 34.167L116.857 34.3525C126.92 36.2243 133.909 38.5548 138.386 42.1475C142.777 45.6718 144.857 50.5044 144.857 57.7373C144.857 64.4211 141.934 70.1975 136.576 74.3281C131.199 78.4734 123.317 80.9951 113.398 80.9951H113.384C105.731 81.1065 98.1762 79.2652 91.4336 75.6445H91.4346C85.1647 72.2471 80.3929 66.565 77.0508 58.4805L90.6729 49.9355C92.4271 55.3588 95.32 59.545 99.1299 62.4238C103.231 65.523 108.323 67.0547 114.032 67.0547C118.226 67.0547 121.831 66.33 124.426 64.8945C127.054 63.4404 128.702 61.2087 128.702 58.3105C128.702 56.8367 128.464 55.4679 127.815 54.2256C127.164 52.9774 126.14 51.9345 124.692 51.0479C121.852 49.3075 117.251 48.0944 110.183 47.0732L110.18 47.0723C101.861 45.8904 95.0936 43.3453 90.4219 39.3291C85.7855 35.3432 83.1367 29.8456 83.1367 22.5479V22.5459Z" fill="%233F0791" stroke="%233F0791" stroke-width="2"/></svg>');
  width: calc(100% - 30px);
  height: 48px;
  overflow: hidden;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 23px;
}
.MS53_1:not(.MS53_1--v0) #product-us-vs-them h2.ab-sub-heading {
  font-family: Mabry Pro;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  text-wrap: pretty;
  max-width: 100%;
  margin-bottom: 28px;
}
.MS53_1:not(.MS53_1--v0) #product-us-vs-them p {
  display: none;
}
.MS53_1:not(.MS53_1--v0) #product-us-vs-them .width.w-l:after {
  content: "Information as of December 2022.";
  font-family: Mabry Pro;
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.7px;
  text-align: center;
  text-wrap: pretty;
  vertical-align: middle;
  text-transform: uppercase;
  color: rgb(63, 7, 145);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 27px;
}
.MS53_1:not(.MS53_1--v0) .ab-nutrition-table-container.ab-flickity-added {
  margin-bottom: 48px;
}
.MS53_1:not(.MS53_1--v0) .ab-nutrition-table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: max-content;
}
.MS53_1:not(.MS53_1--v0) .ab-nutrition-table {
  display: flex;
  flex-wrap: nowrap;
  position: relative;
}
.MS53_1:not(.MS53_1--v0) .ab-nutrition-table > .ab-nutrition-table-column {
  width: 99px;
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table
  > .ab-nutrition-table-column-group
  .ab-nutrition-table-column {
  width: 99px;
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table
  > .ab-nutrition-table-column--magic-spoon {
  width: 144px;
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column-group.flickity-enabled
  .flickity-viewport {
  width: 100%;
}
.MS53_1:not(.MS53_1--v0) .ab-nutrition-table-column-group.flickity-enabled {
  position: static;
}
.MS53_1:not(.MS53_1--v0) .ab-nutrition-table-column-group .flickity-page-dots {
  left: 0;
  right: 0;
  bottom: -34px;
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column-group
  .flickity-page-dots
  .dot {
  width: 15px;
  height: 15px;
  background: rgb(255, 255, 255);
  border: 2px solid rgb(63, 7, 145);
  opacity: 1;
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column-group
  .flickity-page-dots
  .dot.dot.is-selected {
  background: rgb(63, 7, 145);
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column:not(.ab-nutrition-table-column--magic-spoon)
  .ab-nutrition-table-cell:not(:first-child) {
  border-bottom: 2px solid rgb(63, 7, 145);
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table
  > .ab-nutrition-table-column:not(:first-child):not(
    .ab-nutrition-table-column--magic-spoon
  )
  .ab-nutrition-table-cell:not(:first-child),
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column-group
  .ab-nutrition-table-cell:not(:first-child) {
  border-right: 2px solid rgb(63, 7, 145);
}
.MS53_1:not(.MS53_1--v0) .ab-nutrition-table-cell:nth-child(2) {
  border-top: 2px solid rgb(63, 7, 145);
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column:first-child
  .ab-nutrition-table-cell:not(:first-child) {
  border-left: 2px solid rgb(63, 7, 145);
  background: rgb(255, 255, 255);
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column:first-child
  .ab-nutrition-table-cell:nth-child(2) {
  border-top-left-radius: 15px;
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column:first-child
  .ab-nutrition-table-cell:last-child {
  border-bottom-left-radius: 15px;
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column:last-child
  .ab-nutrition-table-cell:nth-child(2) {
  border-top-right-radius: 15px;
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column:last-child
  .ab-nutrition-table-cell:last-child {
  border-bottom-right-radius: 15px;
}
.MS53_1:not(.MS53_1--v0) .ab-nutrition-table-cell {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  height: 70px;
  font-family: Arial;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  text-wrap: pretty;
  color: rgb(63, 7, 145);
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-cell:not(:first-child):not(:nth-child(2)) {
  height: 88px;
}
.MS53_1:not(.MS53_1--v0) .ab-nutrition-table-cell svg.check-circle-svg {
  width: 30px;
  height: 30px;
  object-fit: contain;
}
.MS53_1:not(.MS53_1--v0) .ab-nutrition-table-cell svg.delete-circle-svg {
  width: 21px;
  height: 21px;
  object-fit: contain;
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table
  > .ab-nutrition-table-column:first-child
  > .ab-nutrition-table-cell {
  text-align: left;
  justify-content: flex-start;
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column
  .ab-nutrition-table-cell:first-child {
  height: 110px;
  font-weight: 700;
  line-height: 20px;
  align-items: center;
}
.MS53_1:not(.MS53_1--v0) .ab-nutrition-table-column-group {
  display: flex;
  width: 99px;
}
.MS53_1:not(.MS53_1--v0) .ab-nutrition-table-column-group.flickity-enabled {
  display: block;
  overflow: visible;
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column-group
  > .ab-nutrition-table-column {
  min-width: 99px;
  max-width: 99px;
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column-group
  .ab-nutrition-table-column:first-child
  .ab-nutrition-table-cell {
  background: none;
  border-radius: 0;
  border-left: 0;
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column-group.flickity-enabled
  .ab-nutrition-table-column
  > .ab-nutrition-table-cell:nth-child(2) {
  border-top-right-radius: 15px;
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column-group.flickity-enabled
  .ab-nutrition-table-column
  > .ab-nutrition-table-cell:last-child {
  border-bottom-right-radius: 15px;
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column-group
  > .ab-nutrition-table-column:last-child
  > .ab-nutrition-table-cell:nth-child(2) {
  border-top-right-radius: 15px;
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column-group
  > .ab-nutrition-table-column:last-child
  > .ab-nutrition-table-cell:last-child {
  border-bottom-right-radius: 15px;
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column.ab-nutrition-table-column--magic-spoon {
  background: linear-gradient(180deg, #7815df 0%, #c408b5 100%);
  overflow: hidden;
  border-radius: 15px;
  border: 2px solid rgb(63, 7, 145);
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column.ab-nutrition-table-column--magic-spoon
  .ab-nutrition-table-cell:not(:first-chid):not(:last-child) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column.ab-nutrition-table-column--magic-spoon
  .ab-nutrition-table-cell {
  border: 0;
  color: rgb(255, 255, 255);
}
.MS53_1:not(.MS53_1--v0)
  .ab-nutrition-table-column.ab-nutrition-table-column--magic-spoon
  .ab-nutrition-table-cell:not(:first-child):not(:last-child) {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}
.MS53_1:not(.MS53_1--v0) .ab-nutrition-table-cell--magic-spoon {
  min-height: max-content;
}
.MS53_1:not(.MS53_1--v0) .ab-nutrition-table-cell--magic-spoon svg {
  height: 48;
}
.MS53_1:not(.MS53_1--v0) .ab-nutrition-table-column--magic-spoon:after {
  content: "";
  height: 10px;
  display: block;
}
@media screen and (min-width: 1024px) {
  .MS53_1:not(.MS53_1--v0) .ab-nutrition-table-container.ab-flickity-added {
    margin-bottom: 65px;
  }
  .MS53_1:not(.MS53_1--v0) #product-us-vs-them,
  .MS53_1:not(.MS53_1--v0) #product-us-vs-them.light-purp,
  .MS53_1:not(.MS53_1--v0) .cereal-bars-template #product-us-vs-them {
    padding-top: 100px !important;
    padding-bottom: 56px !important;
  }
  .MS53_1:not(.MS53_1--v0) #product-us-vs-them .width.w-l:before {
    height: 82px;
    width: 100%;
    margin-bottom: 22px;
  }
  .MS53_1:not(.MS53_1--v0) #product-us-vs-them h2.ab-sub-heading {
    font-weight: 400;
    font-size: 36px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
    text-wrap: pretty;
    margin-bottom: 45px;
  }
  .MS53_1:not(.MS53_1--v0) #product-us-vs-them .width.w-l:after {
    font-family: Mabry Pro;
    font-weight: 700;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 1.7px;
    margin-top: 33px;
  }
  .MS53_1:not(.MS53_1--v0) .ab-nutrition-table > .ab-nutrition-table-column {
    min-width: 200px;
    max-width: 200px;
  }
  .MS53_1:not(.MS53_1--v0)
    .ab-nutrition-table
    > .ab-nutrition-table-column:nth-child(1) {
    min-width: 201px;
    max-width: 201px;
  }
  .MS53_1:not(.MS53_1--v0)
    .ab-nutrition-table
    > .ab-nutrition-table-column--magic-spoon {
    min-width: 200px;
    max-width: 200px;
  }
  .MS53_1:not(.MS53_1--v0)
    .ab-nutrition-table-column
    .ab-nutrition-table-cell:first-child {
    height: 80px;
    margin-top: 0;
    margin-bottom: 0;
    align-items: center;
  }
  .MS53_1:not(.MS53_1--v0) .ab-nutrition-table-cell--magic-spoon {
    padding-top: 25px;
  }
  .MS53_1:not(.MS53_1--v0) .ab-nutrition-table-cell {
    height: 100px;
    font-family: Mabry Pro;
    font-size: 18px;
    font-weight: 500;
    color: rgb(63, 7, 145);
  }
  .MS53_1:not(.MS53_1--v0)
    .ab-nutrition-table-cell:not(:first-child):not(:nth-child(2)) {
    height: 100px;
  }
  .MS53_1:not(.MS53_1--v0)
    .ab-nutrition-table
    > .ab-nutrition-table-column:first-child
    .ab-nutrition-table-cell:not(:first-child) {
    padding-left: 28px;
  }
  .MS53_1:not(.MS53_1--v0)
    .ab-nutrition-table-column-group:not(.flickity-enabled) {
    display: flex;
    width: 100%;
  }
  .MS53_1:not(.MS53_1--v0) .ab-nutrition-table-column-group.flickity-enabled {
    min-width: 200px;
    width: 200px;
    max-width: 200px;
  }
  .MS53_1:not(.MS53_1--v0)
    .ab-nutrition-table-column-group
    .ab-nutrition-table-column {
    min-width: 200px;
    max-width: 200px;
  }
  .MS53_1:not(.MS53_1--v0)
    .ab-nutrition-table-column-group.ab-nutrition-table-column-group--sm
    .ab-nutrition-table-column {
    min-width: auto;
    max-width: auto;
  }
  .MS53_1:not(.MS53_1--v0)
    .ab-nutrition-table-column.ab-nutrition-table-column--magic-spoon {
    margin-top: -4px;
    margin-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .MS53_1:not(.MS53_1--v0) .ab-nutrition-table-column--magic-spoon:after {
    display: none;
  }
  .MS53_1:not(.MS53_1--v0)
    .ab-nutrition-table-column-group
    .flickity-page-dots {
    bottom: -43px;
  }
}
@media screen and (min-width: 1200px) {
  .MS53_1:not(.MS53_1--v0)
    .ab-nutrition-table-column-group.ab-nutrition-table-column-group--sm
    .ab-nutrition-table-column {
    min-width: 130px;
    max-width: 130px;
  }
}
@media screen and (min-width: 1366) {
  .MS53_1:not(.MS53_1--v0)
    .ab-nutrition-table-column-group.ab-nutrition-table-column-group--sm
    .ab-nutrition-table-column {
    min-width: 140px;
    max-width: 140px;
  }
}
@media screen and (min-width: 1440px) {
  .MS53_1:not(.MS53_1--v0)
    .ab-nutrition-table-column-group.ab-nutrition-table-column-group--sm
    .ab-nutrition-table-column {
    min-width: 160px;
    max-width: 160px;
  }
}
@media screen and (min-width: 1536px) {
  .MS53_1:not(.MS53_1--v0)
    .ab-nutrition-table-column-group.ab-nutrition-table-column-group--sm
    .ab-nutrition-table-column {
    min-width: 180px;
    max-width: 180px;
  }
}
@media screen and (min-width: 1650px) {
  .MS53_1:not(.MS53_1--v0)
    .ab-nutrition-table-column-group.ab-nutrition-table-column-group--sm
    .ab-nutrition-table-column {
    min-width: 200px;
    max-width: 200px;
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
/* 
Figma -> https://www.figma.com/design/iWkyd0BAsc6ONU9WqGIC7H/MS53---PRODUCT--Optimize-Comparison-Chart-Design?node-id=294-2&t=sXCK7Xh2WbTgnLf1-1
Test container -> https://app.convert.com/accounts/10042082/projects/10042535/experiences/1004163226/summary
*/

(function MS53_1_TEST() {
  // ========= TEST START =========

  const TEST_CONFIG = {
    client: "Acadia",
    project: "Magicspoon",
    site_url: "https://magicspoon.com/",
    test_name: `MS53.1: [PRODUCT] Optimize Comparison Chart Design - (2) SET UP TEST`,
    page_initials: "MS53_1",
    test_variation: 1 /* 0, 1, 2 */,
    test_version: 0.00001,
  };

  const MS53_1_COMPARISON_CHART_ARR = [
    // '========= GRANOLA ========='
    {
      title: "Honey Almond Granola",
      url: "https://magicspoon.com/products/honey-almond-4-granola",
      table: {
        "Magic Spoon": {
          Protein: "13g",
          Sugars: "2g",
          Fiber: "7g",
          Calories: "130.0",
          "Keto Friendly": "Yes",
          "No Added Sugar": "Yes",
        },
        Others: {
          Protein: "3g",
          Sugars: "9g",
          Fiber: "1g",
          Calories: "160.0",
          "Keto Friendly": "No",
          "No Added Sugar": "No",
        },
      },
    },
    {
      title: "Dark Chocolate Granola",
      url: "https://magicspoon.com/products/dark-chocolate-almond-4-bags-of-granola",
      table: {
        "Magic Spoon": {
          Protein: "13g",
          Sugars: "2g",
          Fiber: "7g",
          Calories: "130.0",
          "Keto Friendly": "Yes",
          "No Added Sugar": "Yes",
        },
        Others: {
          Protein: "3g",
          Sugars: "9g",
          Fiber: "1g",
          Calories: "160.0",
          "Keto Friendly": "No",
          "No Added Sugar": "No",
        },
      },
    },
    {
      title: "Mixed Berry Granola",
      url: "https://magicspoon.com/products/mixed-berry-4-granola",
      table: {
        "Magic Spoon": {
          Protein: "13g",
          Sugars: "2g",
          Fiber: "7g",
          Calories: "130.0",
          "Keto Friendly": "Yes",
          "No Added Sugar": "Yes",
        },
        Others: {
          Protein: "3g",
          Sugars: "9g",
          Fiber: "1g",
          Calories: "160.0",
          "Keto Friendly": "No",
          "No Added Sugar": "No",
        },
      },
    },
    {
      title: "Peanut Butter Granola",
      url: "https://magicspoon.com/products/peanut-butter-4-granola",
      table: {
        "Magic Spoon": {
          Protein: "13g",
          Sugars: "2g",
          Fiber: "7g",
          Calories: "130.0",
          "Keto Friendly": "Yes",
          "No Added Sugar": "Yes",
        },
        Others: {
          Protein: "3g",
          Sugars: "9g",
          Fiber: "1g",
          Calories: "160.0",
          "Keto Friendly": "No",
          "No Added Sugar": "No",
        },
      },
    },
    {
      title: "Granola Variety 4 Pack",
      url: "https://magicspoon.com/products/variety-4-4-bags-of-granola",
      table: {
        "Magic Spoon": {
          Protein: "13g",
          Sugars: "2g",
          Fiber: "7g",
          Calories: "130.0",
          "Keto Friendly": "Yes",
          "No Added Sugar": "Yes",
        },
        Others: {
          Protein: "3g",
          Sugars: "9g",
          Fiber: "1g",
          Calories: "160.0",
          "Keto Friendly": "No",
          "No Added Sugar": "No",
        },
      },
    },
    {
      title: "Granola Variety 6 Pack",
      url: "https://magicspoon.com/products/variety-6-6-bags-of-granola",
      table: {
        "Magic Spoon": {
          Protein: "13g",
          Sugars: "2g",
          Fiber: "7g",
          Calories: "130.0",
          "Keto Friendly": "Yes",
          "No Added Sugar": "Yes",
        },
        Others: {
          Protein: "3g",
          Sugars: "9g",
          Fiber: "1g",
          Calories: "160.0",
          "Keto Friendly": "No",
          "No Added Sugar": "No",
        },
      },
    },
    {
      title: "Granola Variety 6 Pack",
      url: "https://magicspoon.com/products/granola-variety-6",
      table: {
        "Magic Spoon": {
          Protein: "13g",
          Sugars: "2g",
          Fiber: "7g",
          Calories: "130.0",
          "Keto Friendly": "Yes",
          "No Added Sugar": "Yes",
        },
        Others: {
          Protein: "3g",
          Sugars: "9g",
          Fiber: "1g",
          Calories: "160.0",
          "Keto Friendly": "No",
          "No Added Sugar": "No",
        },
      },
    },
    {
      title: "Granola Variety 6 Pack",
      url: "https://magicspoon.com/products/custom-mixed-bundle-6-box",
      table: {
        "Magic Spoon": {
          Protein: "13g",
          Sugars: "2g",
          Fiber: "7g",
          Calories: "130.0",
          "Keto Friendly": "Yes",
          "No Added Sugar": "Yes",
        },
        Others: {
          Protein: "3g",
          Sugars: "9g",
          Fiber: "1g",
          Calories: "160.0",
          "Keto Friendly": "No",
          "No Added Sugar": "No",
        },
      },
    },

    // ========= 'CEREAL' =========

    {
      title: "Peaches & Cream + French Toast",
      url: "https://magicspoon.com/products/peaches-and-cream-french-toast",
      table: {
        "Magic Spoon": {
          Protein: "12 - 13g",
          "Net Carbs": "4-5g",
          Sugar: "0g",
          "Serving Size": "37-38g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Peaches Cheerios": {
          Protein: "2g",
          "Net Carbs": "20g",
          Sugar: "8g",
          "Serving Size": "28g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
        "French Toast": {
          Protein: "2g",
          "Net Carbs": "20g",
          Sugar: "8g",
          "Serving Size": "28g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Fruity",
      url: "https://magicspoon.com/products/fruity-keto-cereal-case",
      table: {
        "Magic Spoon": {
          Protein: "13g",
          "Net Carbs": "4g",
          Sugar: "0g",
          "Serving Size": "38g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Fruit Loops": {
          Protein: "2g",
          "Net Carbs": "32g",
          Sugar: "12g",
          "Serving Size": "39g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Cocoa",
      url: "https://magicspoon.com/products/cocoa-cereal-case",
      table: {
        "Magic Spoon": {
          Protein: "13g",
          "Net Carbs": "4g",
          Sugar: "0g",
          "Serving Size": "37g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Cocoa Puffs": {
          Protein: "1g",
          "Net Carbs": "22g",
          Sugar: "9g",
          "Serving Size": "27g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Peanut Butter",
      url: "https://magicspoon.com/products/peanut-butter-1-case-4-boxes",
      table: {
        "Magic Spoon": {
          Protein: "14g",
          "Net Carbs": "4g",
          Sugar: "0g",
          "Serving Size": "36g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Reese's Puffs": {
          Protein: "2g",
          "Net Carbs": "21g",
          Sugar: "9g",
          "Serving Size": "29g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Frosted",
      url: "https://magicspoon.com/products/frosted-cereal-case",
      table: {
        "Magic Spoon": {
          Protein: "13g",
          "Net Carbs": "4g",
          Sugar: "0g",
          "Serving Size": "37g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Frosted Flakes": {
          Protein: "2g",
          "Net Carbs": "32g",
          Sugar: "12g",
          "Serving Size": "37g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Maple Waffle",
      url: "https://magicspoon.com/products/maple-waffle-1-case-4-boxes",
      table: {
        "Magic Spoon": {
          Protein: "12g",
          "Net Carbs": "4g",
          Sugar: "0g",
          "Serving Size": "38g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Waffle Crisp": {
          Protein: "2g",
          "Net Carbs": "33g",
          Sugar: "15g",
          "Serving Size": "40g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Cinnamon Toast",
      url: "https://magicspoon.com/products/healthy-cinnamon-cereal-case",
      table: {
        "Magic Spoon": {
          Protein: "12g",
          "Net Carbs": "4g",
          Sugar: "0g",
          "Serving Size": "37g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Cinnamon Toast Crunch": {
          Protein: "2g",
          "Net Carbs": "31g",
          Sugar: "12g",
          "Serving Size": "41g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Blueberry Muffin",
      url: "https://magicspoon.com/products/blueberry-cereal-case",
      table: {
        "Magic Spoon": {
          Protein: "13g",
          "Net Carbs": "5g",
          Sugar: "0g",
          "Serving Size": "38g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Boo Berry": {
          Protein: "2g",
          "Net Carbs": "33g",
          Sugar: "11g",
          "Serving Size": "41g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Honey Nut",
      url: "https://magicspoon.com/products/honey-nut-4-boxes",
      table: {
        "Magic Spoon": {
          Protein: "13g",
          "Net Carbs": "4g",
          Sugar: "1g",
          "Serving Size": "37g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Honey Nut Cheerios": {
          Protein: "3g",
          "Net Carbs": "27g",
          Sugar: "12g",
          "Serving Size": "37g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Chocolate Chip Cookie",
      url: "https://magicspoon.com/products/chocolate-chip-cookie-4-boxes-1",
      table: {
        "Magic Spoon": {
          Protein: "13g",
          "Net Carbs": "4-5g",
          Sugar: "0g",
          "Serving Size": "38g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Cookie Crisp": {
          Protein: "2g",
          "Net Carbs": "29g",
          Sugar: "12g",
          "Serving Size": "36g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Birthday Cake",
      url: "https://magicspoon.com/products/birthday-cake-4-boxes",
      table: {
        "Magic Spoon": {
          Protein: "13g",
          "Net Carbs": "4g",
          Sugar: "0g",
          "Serving Size": "39g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Birthday Cake Cookie Crisp": {
          Protein: "1g",
          "Net Carbs": "21g",
          Sugar: "9g",
          "Serving Size": "26g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "S'mores",
      url: "https://magicspoon.com/products/smores-cereal-case",
      table: {
        "Magic Spoon": {
          Protein: "14g",
          "Net Carbs": "5g",
          Sugar: "0g",
          "Serving Size": "38g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        Smorz: {
          Protein: "2g",
          "Net Carbs": "24g",
          Sugar: "13g",
          "Serving Size": "30g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Variety 6",
      url: "https://magicspoon.com/products/variety-1-case-6-boxes-1",
      table: {
        "Magic Spoon": {
          Protein: "12-14g",
          "Net Carbs": "4-5g",
          Sugar: "0g",
          "Serving Size": "36-38g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Fruit Loops": {
          Protein: "2g",
          "Net Carbs": "32g",
          Sugar: "12g",
          "Serving Size": "39g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
        "Reese's Puffs": {
          Protein: "2g",
          "Net Carbs": "21g",
          Sugar: "9g",
          "Serving Size": "29g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
        "Frosted Flakes": {
          Protein: "2g",
          "Net Carbs": "32g",
          Sugar: "12g",
          "Serving Size": "37g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
        "Cocoa Puffs": {
          Protein: "1g",
          "Net Carbs": "22g",
          Sugar: "9g",
          "Serving Size": "27g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
        "Cinnamon Toast Crunch": {
          Protein: "2g",
          "Net Carbs": "31g",
          Sugar: "12g",
          "Serving Size": "41g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
        "Boo Berry": {
          Protein: "2g",
          "Net Carbs": "33g",
          Sugar: "11g",
          "Serving Size": "41g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Variety 4",
      url: "https://magicspoon.com/products/variety-pack-cereal-case",
      table: {
        "Magic Spoon": {
          Protein: "12-14g",
          "Net Carbs": "4-5g",
          Sugar: "0g",
          "Serving Size": "36-38g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Fruit Loops": {
          Protein: "2g",
          "Net Carbs": "32g",
          Sugar: "12g",
          "Serving Size": "39g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
        "Reese's Puffs": {
          Protein: "2g",
          "Net Carbs": "21g",
          Sugar: "9g",
          "Serving Size": "29g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
        "Frosted Flakes": {
          Protein: "2g",
          "Net Carbs": "32g",
          Sugar: "12g",
          "Serving Size": "37g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },

    // '========= TREATS ========='

    {
      title: "Marshmallow",
      url: "https://magicspoon.com/products/double-chocolate-pack-16-cereal-treats-4-boxes",
      table: {
        "Magic Spoon": {
          Protein: "12g",
          "Net Carbs": "2g",
          Sugar: "1g",
          "Serving Size": "40g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Rice Krispie Treat": {
          Protein: "1g",
          "Net Carbs": "17g",
          Sugar: "8g",
          "Serving Size": "22g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Marshmallow",
      url: "https://magicspoon.com/products/marshmallow-16-cereal-treats-1",
      table: {
        "Magic Spoon": {
          Protein: "12g",
          "Net Carbs": "2g",
          Sugar: "1g",
          "Serving Size": "40g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Rice Krispie Treat": {
          Protein: "1g",
          "Net Carbs": "17g",
          Sugar: "8g",
          "Serving Size": "22g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Birthday Cake",
      url: "https://magicspoon.com/products/birthday-cake-16-cereal-treats-4-boxes",
      table: {
        "Magic Spoon": {
          Protein: "12g",
          "Net Carbs": "2g",
          Sugar: "1g",
          "Serving Size": "40g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Rice Krispie Treat": {
          Protein: "1g",
          "Net Carbs": "17g",
          Sugar: "8g",
          "Serving Size": "22g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },

    {
      title: "Strawberry Milkshake",
      url: "https://magicspoon.com/products/strawberry-milkshake-16-cereal-treats-4-boxes",
      table: {
        "Magic Spoon": {
          Protein: "12g",
          "Net Carbs": "3g",
          Sugar: "1g",
          "Serving Size": "40g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Rice Krispie Treat": {
          Protein: "1g",
          "Net Carbs": "17g",
          Sugar: "8g",
          "Serving Size": "22g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Chocolate PB",
      url: "https://magicspoon.com/products/chocolatey-pb-16-cereal-treats",
      table: {
        "Magic Spoon": {
          Protein: "12g",
          "Net Carbs": "2g",
          Sugar: "1g",
          "Serving Size": "40g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Rice Krispie Treat": {
          Protein: "1g",
          "Net Carbs": "17g",
          Sugar: "8g",
          "Serving Size": "22g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Double Chocolate",
      url: "https://magicspoon.com/products/double-chocolate-pack-16-cereal-treats-4-boxes",
      table: {
        "Magic Spoon": {
          Protein: "12g",
          "Net Carbs": "2g",
          Sugar: "1g",
          "Serving Size": "40g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Rice Krispie Treat": {
          Protein: "1g",
          "Net Carbs": "17g",
          Sugar: "8g",
          "Serving Size": "22g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Blueberry Muffin",
      url: "https://magicspoon.com/products/blueberry-pack-16-cereal-treats-4-boxes",
      table: {
        "Magic Spoon": {
          Protein: "12g",
          "Net Carbs": "2g",
          Sugar: "1g",
          "Serving Size": "40g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Rice Krispie Treat": {
          Protein: "1g",
          "Net Carbs": "17g",
          Sugar: "8g",
          "Serving Size": "22g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Salted Caramel",
      url: "https://magicspoon.com/products/salted-caramel-4-pack",
      table: {
        "Magic Spoon": {
          Protein: "11g",
          "Net Carbs": "2g",
          Sugar: "1g",
          "Serving Size": "40g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Rice Krispie Treat": {
          Protein: "1g",
          "Net Carbs": "17g",
          Sugar: "8g",
          "Serving Size": "22g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "S'Mores",
      url: "https://magicspoon.com/products/smores-4-pack",
      table: {
        "Magic Spoon": {
          Protein: "11g",
          "Net Carbs": "3g",
          Sugar: "2g",
          "Serving Size": "40g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Rice Krispie Treat": {
          Protein: "1g",
          "Net Carbs": "17g",
          Sugar: "8g",
          "Serving Size": "22g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Variety 6 Pack Treats",
      url: "https://magicspoon.com/products/sweet-n-salty-variety-pack",
      table: {
        "Magic Spoon": {
          Protein: "11g",
          "Net Carbs": "2-3g",
          Sugar: "1-2g",
          "Serving Size": "40g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Rice Krispie Treat": {
          Protein: "1g",
          "Net Carbs": "17g",
          Sugar: "8g",
          "Serving Size": "22g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
    {
      title: "Variety 4 Pack Treats",
      url: "https://magicspoon.com/products/treats-variety-4-16-cereal-treats-4-boxes",
      table: {
        "Magic Spoon": {
          Protein: "11g",
          "Net Carbs": "2-3g",
          Sugar: "1-2g",
          "Serving Size": "40g",
          "Grain Free": "Yes",
          "Gluten Free": "Yes",
        },
        "Rice Krispie Treat": {
          Protein: "1g",
          "Net Carbs": "17g",
          Sugar: "8g",
          "Serving Size": "22g",
          "Grain Free": "No",
          "Gluten Free": "No",
        },
      },
    },
  ];

  const MS53_1_ASSETS = {
    magicSpoonSvg: /* HTML */ `
      <?xml version="1.0" encoding="UTF-8"?>
      <svg fill="none" viewBox="0 0 108 48" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m25.378 0.43256-5.1902 21.851h4.2869l1.0561-4.6814h7.3996l1.0561 4.6814h4.2869l-5.1901-21.851h-7.7053zm1.0213 13.256 2.5499-11.163h0.5628l2.5152 11.163h-5.6279zm-16.348-13.256h7.7191v21.893h-3.8005v-19.835h-0.6948l-0.7712 16.66c-0.0446 0.9285-0.4432 1.8043-1.1132 2.4459s-1.56 0.9999-2.4859 1.0006c-0.92632 1e-3 -1.8174-0.3567-2.4877-0.9987-0.67036-0.6419-1.0684-1.5187-1.1113-2.4478l-0.80596-16.654h-0.6948v19.828h-3.8075v-21.893h7.7748l0.85461 18.956h0.56278l0.8616-18.956zm81.361 22.326c-2.4112 0.0132-4.7636-0.7477-6.7138-2.1717s-3.3962-3.4365-4.127-5.7439-0.7081-4.7889 0.0647-7.0825c0.7727-2.2936 2.2552-4.2791 4.2311-5.667 1.3838-0.98411 2.9702-1.6434 4.6418-1.9292 1.6717-0.28579 3.3859-0.19075 5.0161 0.27809 1.6302 0.46884 3.1346 1.2995 4.4021 2.4306 1.2673 1.1311 2.2653 2.5337 2.9213 4.1042l-3.7037 1.5767c-0.5039-1.2003-1.3102-2.2482-2.3395-3.0409-1.0294-0.79265-2.2464-1.3027-3.5315-1.4801-1.3072-0.14811-2.63 0.06009-3.8294 0.60272s-2.2311 1.3996-2.9866 2.481c-0.7579 1.118-1.204 2.4192-1.2919 3.7687-0.088 1.3495 0.1853 2.6981 0.7916 3.9057 0.5962 1.1629 1.4893 2.1459 2.588 2.8483 1.0988 0.7024 2.3637 1.0991 3.6652 1.1494 1.4789 0.0162 2.9293-0.4096 4.1665-1.2233 1.2372-0.8138 2.2054-1.9787 2.7815-3.3465l3.7028 1.5768c-0.884 2.0483-2.343 3.7941-4.1985 5.0242-1.8555 1.2302-4.0274 1.8916-6.2508 1.9037v0.0348zm-74.809 18.188v0.3768c0.0178 0.9582-0.1669 1.9093-0.542 2.7907-0.3574 0.8088-0.8946 1.5248-1.5702 2.093-0.73 0.6114-1.5763 1.0671-2.4874 1.3395-1.0669 0.3266-2.178 0.4843-3.2933 0.4675-1.2857 0.0238-2.5655-0.1817-3.7797-0.607-1.016-0.3599-1.9427-0.9358-2.7166-1.6884-0.72177-0.7199-1.283-1.5855-1.6467-2.5395-0.38524-1.0108-0.57849-2.0852-0.56973-3.1675v-0.9418h4.0993v0.7465c-0.02899 0.5727 0.05626 1.1454 0.25074 1.6845s0.49428 1.0338 0.88178 1.455c0.75964 0.7814 1.9362 1.1721 3.5296 1.1721 0.99396 0.0824 1.9834-0.2057 2.7792-0.8093 0.2816-0.2367 0.5083-0.5322 0.6643-0.866s0.2376-0.6978 0.239-1.0666c0.0016-0.346-0.0621-0.6893-0.1876-1.0116-0.1391-0.3424-0.3641-0.6429-0.6532-0.8721-0.3851-0.2975-0.8141-0.5328-1.2714-0.6976-0.66518-0.2409-1.3514-0.4185-2.0497-0.5303-1.0208-0.158-2.0287-0.3912-3.0154-0.6977-0.85007-0.2718-1.652-0.6768-2.3762-1.2-0.66335-0.4897-1.2015-1.1305-1.5702-1.8697-0.39555-0.8753-0.58571-1.83-0.55584-2.7907v-0.1884c-0.007896-0.8583 0.17736-1.7073 0.54194-2.4837 0.36128-0.7615 0.88-1.437 1.5216-1.9814 0.69518-0.587 1.4976-1.0325 2.3623-1.3116 0.99823-0.3245 2.0427-0.4825 3.0918-0.4675 1.1624-0.0201 2.3193 0.1641 3.4184 0.5442 0.9248 0.3215 1.7755 0.827 2.5013 1.4861 0.658 0.5982 1.1774 1.3341 1.5216 2.1558 0.3406 0.8102 0.5155 1.681 0.5141 2.5604v1.1233h-4.1132v-0.7535c-3e-4 -0.4298-0.0901-0.8547-0.2636-1.2476s-0.4268-0.745-0.7438-1.0338c-0.7842-0.6844-1.8046-1.0326-2.8417-0.9698-0.86407-0.0468-1.7212 0.1775-2.4526 0.6419-0.28469 0.1874-0.51706 0.4447-0.67512 0.7475-0.15805 0.3027-0.23657 0.641-0.22811 0.9827-0.0068 0.3494 0.06692 0.6956 0.21538 1.0117 0.17543 0.3354 0.43997 0.6156 0.76428 0.8093 0.44665 0.2767 0.92796 0.4925 1.4313 0.6418 0.73893 0.2227 1.4907 0.3997 2.2512 0.5303 1.8866 0.2553 3.6813 0.9743 5.2249 2.093 0.6141 0.534 1.0963 1.2039 1.4085 1.957 0.3123 0.7531 0.4462 1.5687 0.391 2.3825zm16.529-13.256c-0.5869-0.6203-1.297-1.1099-2.0844-1.4372-0.9271-0.3824-1.9231-0.5677-2.9251-0.5442h-8.7683v21.858h4.1062v-8.2395h4.683c1.0039 0.0225 2.0011-0.1702 2.9251-0.5651 0.7688-0.3322 1.4604-0.8213 2.031-1.4363 0.5705-0.6149 1.0075-1.3422 1.2832-2.1358 0.275-0.7652 0.4161-1.5725 0.4168-2.386v-0.7117c-9e-4 -0.7931-0.142-1.5797-0.4168-2.3232-0.2769-0.7667-0.7019-1.4709-1.2507-2.0721v-7e-3zm-2.4457 5.0093c0.0109 0.3629-0.0561 0.7239-0.1963 1.0586-0.1403 0.3346-0.3506 0.6351-0.6166 0.8809-0.5948 0.5239-1.3709 0.792-2.1608 0.7466h-4.2591v-5.7349h4.2799c0.7825-0.037 1.5489 0.2304 2.14 0.7465 0.261 0.2472 0.4666 0.5475 0.6032 0.8807s0.2009 0.6917 0.1889 1.0518l0.0208 0.3698zm66.548-6.9767h3.8009v18.077c0 1.0899-0.432 2.1351-1.199 2.9057-0.7674 0.7707-1.8083 1.2036-2.8937 1.2036-0.959-7e-4 -1.8874-0.3389-2.6237-0.9559-0.7363-0.6169-1.2338-1.4736-1.4061-2.4208l-3.0224-16.744h-0.5697v19.772h-3.8006v-21.837h7.8235l3.4184 18.928h0.4655v-18.935l0.0069 7e-3zm-18.801-3.4326h-14.91v-3.9419h5.4056v-13.953h-5.4056v-3.9628h14.91v3.9349h-5.4055v13.953h5.4055v3.9698zm-17.884-0.2093h-3.474v-6.8023h-7.8581v-3.8861h11.339v10.681l-7e-3 7e-3zm-11.499 0.6209c-2.7792-0.1046-5.8919-1.8767-7.7539-4.186-0.9878-1.2253-1.7109-2.6435-2.1235-4.1645-0.4125-1.5209-0.5054-3.1115-0.2728-4.6705 0.2327-1.559 0.7857-3.0524 1.6241-4.3852 0.8383-1.3328 1.9436-2.4759 3.2457-3.3566 1.3888-0.94053 2.9681-1.56 4.624-1.8137 1.656-0.25374 3.3474-0.13544 4.9524 0.34637 1.6049 0.48181 3.0835 1.3151 4.329 2.4399 1.2456 1.1248 2.2271 2.513 2.8739 4.0646l-3.7102 1.5767c-0.5077-1.2149-1.3243-2.2745-2.3681-3.0728s-2.2781-1.3073-3.5794-1.476c-1.3239-0.1344-2.6592 0.09595-3.8625 0.66631-1.2034 0.57035-2.2292 1.4592-2.9673 2.5709-0.7331 1.1317-1.1534 2.4387-1.2181 3.7871-0.0647 1.3485 0.2286 2.69 0.8498 3.8873 0.6137 1.1662 1.5281 2.1454 2.6478 2.8351 1.1196 0.6898 2.4032 1.0648 3.7166 1.0858 1.422-0.0205 2.8054-0.468 3.9718-1.2849 1.1665-0.817 2.0627-1.9659 2.5732-3.2988l0.4794 0.0488c0.5419 3.0419-1.1742 8.6582-8.0319 8.3931v0.0069zm-1.0561 25.298c-2.2371 0-4.4241-0.6661-6.2842-1.9142-1.8601-1.248-3.3099-3.0219-4.1661-5.0974-0.8561-2.0754-1.0801-4.3591-0.6436-6.5624 0.4364-2.2033 1.5137-4.2271 3.0956-5.8156 1.5819-1.5884 3.5974-2.6702 5.7916-3.1084 2.1942-0.4383 4.4685-0.2134 6.5354 0.6463s3.8334 2.3155 5.0763 4.1833c1.2429 1.8679 1.9063 4.0638 1.9063 6.3103-0.0036 3.0112-1.1965 5.898-3.317 8.0273s-4.9955 3.3271-7.9943 3.3308zm0-18.76c-1.4614-0.0166-2.8948 0.4034-4.118 1.2067-1.2232 0.8032-2.181 1.9534-2.7518 3.3044-0.5707 1.3511-0.7287 2.842-0.4537 4.2834 0.2749 1.4414 0.9704 2.7681 1.9979 3.8118 1.0276 1.0436 2.3409 1.757 3.7731 2.0494 1.4323 0.2925 2.9187 0.1509 4.2706-0.4068 1.3519-0.5578 2.5082-1.5064 3.322-2.7255 0.8137-1.219 1.2483-2.6534 1.2484-4.121 0.0092-1.9516-0.7531-3.8271-2.1195-5.2149-1.3665-1.3878-3.2255-2.1745-5.169-2.1875zm24.144 18.76c-2.2371 0-4.424-0.6661-6.2842-1.9142-1.8601-1.248-3.3099-3.0219-4.166-5.0974-0.8562-2.0754-1.0802-4.3591-0.6437-6.5624 0.4364-2.2033 1.5137-4.2271 3.0956-5.8156 1.5819-1.5884 3.5974-2.6702 5.7916-3.1084 2.1942-0.4383 4.4685-0.2134 6.5354 0.6463s3.8334 2.3155 5.0763 4.1833c1.2429 1.8679 1.9063 4.0638 1.9063 6.3103-0.0036 3.0112-1.1965 5.898-3.317 8.0273s-4.9955 3.3271-7.9943 3.3308zm0-18.677c-1.4415 0-2.8506 0.4292-4.0492 1.2334-1.1986 0.8041-2.1327 1.9472-2.6844 3.2845-0.5516 1.3373-0.696 2.8088-0.4147 4.2285 0.2812 1.4196 0.9753 2.7237 1.9946 3.7472s2.318 1.7206 3.7318 2.0029c1.4139 0.2824 2.8793 0.1375 4.2111-0.4164 1.3318-0.554 2.4701-1.492 3.2709-2.6955 0.8009-1.2036 1.2284-2.6186 1.2284-4.066 0.0018-0.9626-0.1853-1.9162-0.5507-2.8061s-0.9018-1.6988-1.5787-2.3805c-0.6769-0.6816-1.4809-1.2226-2.3662-1.592-0.8852-0.3694-1.8342-0.5601-2.7929-0.561v0.021zm32.266-29.1c0.353-0.003734 0.702 0.063192 1.028 0.19686 0.327 0.13366 0.623 0.33138 0.872 0.58154 0.249 0.25017 0.446 0.54777 0.579 0.87534s0.2 0.67853 0.196 1.0323c0 0.35273-0.069 0.70201-0.203 1.0279-0.135 0.32589-0.332 0.62199-0.58 0.87142-0.248 0.24942-0.543 0.44727-0.868 0.58226-0.324 0.13499-0.672 0.20446-1.024 0.20446-0.351 0-0.699-0.06947-1.023-0.20446-0.325-0.13499-0.62-0.33284-0.868-0.58226-0.248-0.24943-0.446-0.54553-0.58-0.87142s-0.204-0.67517-0.204-1.0279c-3e-3 -0.35378 0.063-0.70474 0.196-1.0323 0.134-0.32757 0.331-0.62517 0.58-0.87534 0.249-0.25017 0.545-0.44788 0.871-0.58154 0.327-0.13366 0.676-0.20059 1.028-0.19686zm0 0.62791c-0.268-0.001867-0.534 0.049964-0.782 0.15247-0.249 0.1025-0.474 0.25363-0.664 0.44457-0.189 0.19093-0.339 0.41785-0.44 0.66751s-0.152 0.51706-0.149 0.78661c0 0.54215 0.214 1.0621 0.596 1.4455s0.9 0.59872 1.439 0.59872c0.54 0 1.058-0.21536 1.44-0.59872s0.596-0.90331 0.596-1.4455c3e-3 -0.26955-0.048-0.53695-0.149-0.78661s-0.251-0.47658-0.44-0.66751c-0.19-0.19094-0.415-0.34207-0.664-0.44457-0.248-0.10251-0.514-0.15434-0.783-0.15247zm-1.083 0.57907h1.34c0.598 0 0.945 0.3279 0.945 0.79534 6e-3 0.172-0.046 0.34087-0.149 0.479-0.102 0.13813-0.248 0.23736-0.413 0.28147 0.142 0.04976 0.265 0.14476 0.349 0.27063s0.125 0.27577 0.116 0.42704c0 0.32791 0 0.46745 0.153 0.6v0.06977h-0.695c-0.106-0.21588-0.148-0.45852-0.118-0.69767 0-0.37675-0.167-0.51628-0.493-0.51628h-0.424v1.186h-0.632v-2.8953h0.021zm1.264 1.193c0.243 0 0.396-0.11861 0.396-0.34186 0-0.22326-0.153-0.30698-0.396-0.30698h-0.632v0.64186l0.632 0.00698z"
          fill="#fff"
        />
      </svg>
    `,

    checkCircleSvg: /* HTML */ `
      <svg
        class="check-circle-svg"
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.4999 31.5897C26.1571 31.5897 31.5892 26.1576 31.5892 16.5004C31.5892 6.84328 26.1571 1.41113 16.4999 1.41113C6.84279 1.41113 1.41064 6.84328 1.41064 16.5004C1.41064 26.1576 6.84279 31.5897 16.4999 31.5897Z"
          fill="white"
        />
        <path
          d="M16.4999 31.5897C26.1571 31.5897 31.5892 26.1576 31.5892 16.5004C31.5892 6.84328 26.1571 1.41113 16.4999 1.41113C6.84279 1.41113 1.41064 6.84328 1.41064 16.5004C1.41064 26.1576 6.84279 31.5897 16.4999 31.5897Z"
          stroke="#3F0791"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.6963 17.9517L14.9171 22.3044C16.9032 16.5991 18.5573 14.0955 22.3034 10.6973"
          stroke="#3F0791"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `,

    deleteCircleSvg: /* HTML */ `
      <svg
        class="delete-circle-svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_63_593)">
          <path
            d="M12.5001 23.1784C19.3344 23.1784 23.1787 19.3341 23.1787 12.4999C23.1787 5.66558 19.3344 1.82129 12.5001 1.82129C5.66582 1.82129 1.82153 5.66558 1.82153 12.4999C1.82153 19.3341 5.66582 23.1784 12.5001 23.1784Z"
            fill="#BFEFFF"
          />
          <path
            d="M12.5001 23.1784C19.3344 23.1784 23.1787 19.3341 23.1787 12.4999C23.1787 5.66558 19.3344 1.82129 12.5001 1.82129C5.66582 1.82129 1.82153 5.66558 1.82153 12.4999C1.82153 19.3341 5.66582 23.1784 12.5001 23.1784Z"
            stroke="#3F0791"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.6595 8.3418L8.34253 16.6588"
            stroke="#3F0791"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.6595 16.6588L8.34253 8.3418"
            stroke="#3F0791"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_63_593">
            <rect width="25" height="25" fill="white" />
          </clipPath>
        </defs>
      </svg>
    `,
  };

  function fireGA4Event(eventName, eventLabel = "") {
    console.log(`MS53_1: Firing GA4 Event: ${eventName} - ${eventLabel}`);

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

  function isElementVisibleInViewport(el) {
    let top = el.getBoundingClientRect().top;
    let right = el.getBoundingClientRect().right;
    let bottom = el.getBoundingClientRect().bottom;
    let left = el.getBoundingClientRect().left;
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;

    return (
      ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
      ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    );
  }

  function scrollHandler(e) {
    const targetNode = document.querySelector(
      "#product-us-vs-them",
    ).previousElementSibling;
    const isElementVisible = isElementVisibleInViewport(targetNode);
    if (isElementVisible) {
      fireGA4Event(
        "MS53_1_View",
        "Ingredients section (area above us vs them)",
      );
      window.removeEventListener("scroll", scrollHandler);
    }
  }

  function handleIngredientsSectionViewGoal() {
    const targetNode = document.querySelector(
      "#product-us-vs-them",
    ).previousElementSibling;
    const isElementVisible = isElementVisibleInViewport(targetNode);

    if (isElementVisible) {
      fireGA4Event(
        "MS53_1_View",
        "Ingredients section (area above us vs them)",
      );
    } else {
      window.addEventListener("scroll", scrollHandler);
    }
  }

  function waitForElement(predicate, callback, timer = 10000, frequency = 100) {
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

  function getTableData() {
    const matched_data = MS53_1_COMPARISON_CHART_ARR.find((item) =>
      window.location.href.includes(item.url),
    );

    if (!matched_data) {
      console.log("MS53_1: NO MATCHING DATA");
      return;
    }

    const table_data = matched_data.table;
    const columns = Object.keys(table_data);
    const rows = Object.keys(table_data[columns[0]]);

    console.log(
      "MS53_1: MATCHED DATA: ",
      matched_data,
      "\n\nMS53_1: TABLE DATA: ",
      table_data,
      "\n\nMS53_1: COLUMNS: ",
      columns,
      "\n\nMS53_1: ROWS: ",
      rows,
    );

    return { table_data, rows, columns };
  }

  function initializeFlickity() {
    waitForElement(
      () =>
        !!(
          document.querySelector(".ab-nutrition-table-column-group") &&
          window.$ &&
          typeof window.$ === "function" &&
          window.$.fn.flickity &&
          typeof window.$.fn.flickity === "function"
        ),
      () => {
        const targetNode = window.$(".ab-nutrition-table-column-group");
        targetNode.flickity({
          // Optional: Add Flickity options here
          cellAlign: "left",
          contain: true,
          prevNextButtons: false,
          pageDots: true,
          on: {
            ready: function () {
              targetNode
                .closest(".ab-nutrition-table-container")
                .addClass("ab-flickity-added");
            },
          },
        });
      },
    );
  }

  function getCellContent(cellValue) {
    let content = cellValue;

    if (!isNaN(+cellValue)) {
      content = +cellValue;
    } else if (cellValue.includes("Yes")) {
      content = MS53_1_ASSETS["checkCircleSvg"];
    } else if (cellValue.includes("No")) {
      content = MS53_1_ASSETS["deleteCircleSvg"];
    }

    return content;
  }

  function createLayout() {
    const { table_data, rows, columns } = getTableData();

    document.querySelector("#product-us-vs-them .width.w-l").insertAdjacentHTML(
      "afterbegin",
      /* HTML */ `
        <h2 class="ab-sub-heading">How do we stack up to the “classics”?</h2>
        <div class="ab-nutrition-table-container">
          <div class="ab-nutrition-table">
            <div class="ab-nutrition-table-column">
              <div class="ab-nutrition-table-cell"></div>
              ${rows
                .map(
                  (row) => /* HTML */ `
                    <div class="ab-nutrition-table-cell">${row}</div>
                  `,
                )
                .join("")}
            </div>
            <div
              class="ab-nutrition-table-column ab-nutrition-table-column--magic-spoon"
            >
              <div
                class="ab-nutrition-table-cell ab-nutrition-table-cell--magic-spoon"
              >
                ${MS53_1_ASSETS["magicSpoonSvg"]}
              </div>
              ${rows
                .map(
                  (row) => /* HTML */ `
                    <div class="ab-nutrition-table-cell">
                      ${getCellContent(table_data[columns[0]][row])}
                    </div>
                  `,
                )
                .join("")}
            </div>
            <div
              class="ab-nutrition-table-column-group ${columns.length > 4 &&
              window.innerWidth >= 1024
                ? "ab-nutrition-table-column-group--sm"
                : ""}"
            >
              ${columns
                .slice(1)
                .map(
                  (column) => /* HTML */ `
                    <div class="ab-nutrition-table-column">
                      <div class="ab-nutrition-table-cell">${column}</div>
                      ${rows
                        .map(
                          (row) => /* HTML */ `
                            <div class="ab-nutrition-table-cell">
                              ${getCellContent(table_data[column][row])}
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
        </div>
      `,
    );

    if (columns.length >= 3 && window.innerWidth < 1024) initializeFlickity();
  }

  function init() {
    console.table(TEST_CONFIG);

    document.body.classList.add(
      TEST_CONFIG.page_initials,
      `${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}`,
    );

    {
      createLayout();
    }

    handleIngredientsSectionViewGoal();
  }

  function hasAllTargetElements() {
    return !!(
      MS53_1_COMPARISON_CHART_ARR.some((item) =>
        window.location.href.includes(item.url),
      ) &&
      document.querySelector(
        `html#product-single body:not(.${TEST_CONFIG.page_initials})`,
      ) &&
      document.querySelector(`#product-us-vs-them .width.w-l`) &&
      document.querySelector(`#product-review`)
    );
  }

  waitForElement(hasAllTargetElements, init);
})();
