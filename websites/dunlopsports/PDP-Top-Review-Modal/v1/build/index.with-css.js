(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `/**
 * ----------------------------------------
		 *			MODAL
 * ----------------------------------------
 */
html,
body {
  scroll-behavior: smooth;
}

.AB-PDP-TOP-REVIEW__modal {
  opacity: 0;
  display: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  max-width: 100%;
  min-height: max-content;
  height: max-content;
  background: #ffffff;
  z-index: 1;
  padding: 20px;
  position: fixed;
  bottom: 80px;
  left: 10px;
  right: 10px;
  margin: auto;
  z-index: 9999;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.AB-PDP-TOP-REVIEW__modal__top {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
}
.AB-PDP-TOP-REVIEW__modal__review-stars {
  margin-bottom: 10px;
}
.AB-PDP-TOP-REVIEW__modal__close-cta {
  margin: 0;
  margin-left: auto;
  padding: 0;
  cursor: pointer;
  position: relative;
  width: 16px;
  height: 16px;
}
.AB-PDP-TOP-REVIEW__modal__close-cta:after {
  content: "";
  width: 100%;
  height: 2px;
  background-color: rgb(37, 37, 37);
  position: absolute;
  transform: rotate(45deg);
  top: 50%;
}
.AB-PDP-TOP-REVIEW__modal__close-cta:before {
  content: "";
  width: 100%;
  height: 2px;
  background-color: rgb(37, 37, 37);
  position: absolute;
  transform: rotate(-45deg);
  top: 50%;
}
.AB-PDP-TOP-REVIEW__modal__head__progress {
  width: 285px;
  height: 5px;
  background-color: rgb(241, 241, 241);
  border-radius: 6px;
  overflow: hidden;
}
.AB-PDP-TOP-REVIEW__modal__head__progress-value {
  width: 0%;
  transition: width 0.3s ease-in-out;
  height: 100%;
  background-color: rgb(187, 187, 187);
}
.AB-PDP-TOP-REVIEW__modal__review-header {
  font-family: Libre Franklin;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0px;
  color: rgb(0, 0, 0);
  margin-bottom: 10px;
}
.AB-PDP-TOP-REVIEW__modal__review-description {
  font-family: Libre Franklin;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0px;
  color: rgb(37, 37, 37);
  margin-bottom: 10px;
}
.AB-PDP-TOP-REVIEW__modal__review-see-more-cta {
  width: max-content;
  cursor: pointer;
  font-family: Libre Franklin;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  text-decoration: underline;
  text-decoration-style: solid;
  color: rgb(37, 37, 37);
  border: none;
  outline: none;
}
.AB-PDP-TOP-REVIEW__modal__review-see-more-cta:hover,
.AB-PDP-TOP-REVIEW__modal__review-see-more-cta:focus {
  border: none;
  outline: none;
}
.AB-PDP-TOP-REVIEW__modal #pr-review-snippet {
  margin: 0;
  margin-left: -3px;
  height: 20px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-PDP-TOP-REVIEW__modal #pr-review-snippet .pr-star-v4::after {
  color: rgb(0, 0, 0);
  top: -6px;
  font-size: 20px;
}
.AB-PDP-TOP-REVIEW__modal #pr-review-snippet .pr-star-v4:before {
  top: -6px;
  font-size: 20px;
}
.AB-PDP-TOP-REVIEW__modal #pr-review-snippet .pr-star-v4 {
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.AB-PDP-TOP-REVIEW__modal .pr-snippet-read-and-write {
  display: none !important;
}
.AB-PDP-TOP-REVIEW__modal .p-w-r .pr-snippet-rating-decimal {
  border: none;
  outline: none;
  padding: 0;
}
.AB-PDP-TOP-REVIEW__modal
  .p-w-r
  .pr-snippet
  .pr-snippet-stars-png
  .pr-snippet-rating-decimal {
  padding: 0;
  padding-left: 7px;
  font-family: Libre Franklin;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgb(0, 0, 0) !important;
}
@media screen and (min-width: 768px) {
  .AB-PDP-TOP-REVIEW__modal {
    border: 1px solid rgb(81, 81, 81);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 20px;
    width: 450px;
    right: auto;
    left: 41px;
    bottom: 80px;
  }
  .AB-PDP-TOP-REVIEW__modal__top {
    margin-bottom: 10px;
  }
  .AB-PDP-TOP-REVIEW__modal__head__progress {
    width: 331px;
  }
  .AB-PDP-TOP-REVIEW__modal__review-stars {
    margin-bottom: 10px;
  }
  .AB-PDP-TOP-REVIEW__modal__close-cta {
    width: 16px;
    height: 16px;
  }
  .AB-PDP-TOP-REVIEW__modal__review-header {
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0px;
    margin-bottom: 10px;
  }
  .AB-PDP-TOP-REVIEW__modal__review-description {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0px;
    margin-bottom: 10px;
  }
  .AB-PDP-TOP-REVIEW__modal__review-see-more-cta {
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0px;
    text-decoration: underline;
    text-decoration-style: solid;
  }
  .AB-PDP-TOP-REVIEW__modal #pr-review-snippet {
    margin: 0;
    margin-left: -2px;
  }
  .AB-PDP-TOP-REVIEW__modal #pr-review-snippet .pr-star-v4::after {
    top: -6px;
  }
  .AB-PDP-TOP-REVIEW__modal #pr-review-snippet .pr-star-v4:before {
    top: -6px;
  }
  .AB-PDP-TOP-REVIEW__modal
    .p-w-r
    .pr-snippet
    .pr-snippet-stars-png
    .pr-snippet-rating-decimal {
    padding: 0;
    padding-left: 7px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0px;
  }
  .AB-PDP-TOP-REVIEW__modal #pr-review-snippet .pr-star-v4 {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
}

.AB-PDP-TOP-REVIEW--modal-show #launcher {
  display: none;
}
.AB-PDP-TOP-REVIEW--modal-show .AB-PDP-TOP-REVIEW__modal-layout {
  display: flex;
}
.AB-PDP-TOP-REVIEW--modal-show .AB-PDP-TOP-REVIEW__modal-backdrop {
  display: block;
}
.AB-PDP-TOP-REVIEW--modal-show .AB-PDP-TOP-REVIEW__modal {
  opacity: 1;
  display: flex;
  background-color: #fff;
}

.slide-to-top {
  -webkit-animation: slide-to-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-to-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-to-bottom {
  -webkit-animation: slide-to-bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-to-bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/**
  * ----------------------------------------
  * animation slide-bottom
  * ----------------------------------------
  */
@-webkit-keyframes slide-to-top {
  0% {
    opacity: 0;
    -webkit-transform: translateY(200px);
    transform: translateY(200px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slide-to-top {
  0% {
    opacity: 0;
    -webkit-transform: translateY(200px);
    transform: translateY(200px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
/**
  * ----------------------------------------
  * animation slide-top
  * ----------------------------------------
  */
@-webkit-keyframes slide-to-bottom {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(200px);
    transform: translateY(200px);
  }
}
@keyframes slide-to-bottom {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(200px);
    transform: translateY(200px);
  }
}
/**
  * ----------------------------------------
  * animation fade-in
  * ----------------------------------------
  */
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
/**
      * ----------------------------------------
      * animation progress
      * ----------------------------------------
      */
@-webkit-keyframes progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
@keyframes progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
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
Ticket: https://trello.com/c/JeFHZwPS/4541-pdp-top-review-modal-dtm
Test container: https://app.optimizely.com/v2/projects/30347390156/experiments/4655644880404480/pages
Figma: https://www.figma.com/design/sDP3TPgMBmNNr4RZvdx4Kb/Dunlop-Sports-America?node-id=101-189&t=q0FXhNstxiR9NZF2-0
Preview link: https://us.dunlopsports.com/cleveland-golf/clubs/wedges/rtz/rtz-black-satin-wedge/MRTZBKS.html?optimizely_token=4f9123072cf44c1a8a972ebd3d2709841466bf12b523eed9c98ed23f30efb599&optimizely_x=5046240749027328&optimizely_x_audiences=5612293145231360&optimizely_preview_layer_ids=6333187299737600&optimizely_snippet=s3-30347390156&optimizely_embed_editor=false
QA Param : https://us.dunlopsports.com/cleveland-golf/clubs/wedges/rtz/rtz-black-satin-wedge/MRTZBKS.html?qa5=true
*/

(function () {
  const TEST_CONFIG = {
    page_initials: "AB-PDP-TOP-REVIEW",
    test_variation: 1,
    test_version: 0.0004,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const DATA = {
    reviews: [
      {
        url: "/cleveland-golf/clubs/wedges/cbz/cbz-tour-satin-wedge/MCBZTS.html",
        review_header: "Great wedges!",
        review_description:
          "The wedges perform great. They are easy to hit and have a smooth feel about them. I especially like the 50 degree the best. Every time I purchase a new Cleveland wedge I fall in love with it. Don't hesitate to get one!",
      },
      {
        url: "/cleveland-golf/clubs/wedges/rtz/rtz-tour-satin-wedge/MRTZTS.html",
        review_header: "First RTZ",
        review_description:
          "Ordered custom with Nippon shaft to match my ZXi 5's and it feels great ! The wedge is a little softer than my RTX6 wedges but the trajectory and distance is the same. Very happy with my purchase!",
      },
      {
        url: "/cleveland-golf/clubs/wedges/rtz/rtz-black-satin-wedge/MRTZBKS.html",
        review_header: "Cleveland Wedges",
        review_description:
          "I just changed out all of my wedges and couldn't be happier! Great quality, great feel, superior product",
      },
      {
        url: "/cleveland-golf/clubs/wedges/rtz/rtz-tour-rack-(raw)-wedge/MRTZTR.html",
        review_header: "Great wedge!",
        review_description:
          "Excellent all-around playability. Looks great, spin is perfect, and I love the default swing weight. Solid feel, versatile, and the best wedge on the market right now. I also appreciate the tour-issue DG S400 as the default shaft.",
      },
      {
        url: "/cleveland-golf/clubs/wedges/rtx-6-zipcore/rtx-6-zipcore-tour-satin-wedge/MRTX6ZCTS.html",
        review_header: "Great wedge",
        review_description:
          "Cleveland wedges are always solid and this one doesn't disappoint. Feels great and controllable.",
      },
      {
        url: "/srixon/clubs/irons/zxi5-irons/zxi5-irons/MZXI5IRN.html",
        review_header: "Talk About Incredible Feel!",
        review_description:
          "Absolutely Amazing Feel. Custom ordered a ZXi5 set and couldn't be happier. These irons look beautiful and feel incredible. The loft setup is perfect gapping.",
      },
      {
        url: "/srixon/clubs/irons/zxi7-irons/zxi7-irons/MZXI7IRN.html",
        review_header: "Excellent",
        review_description:
          "There is a reason you see this in so many bags on tour. They do everything well. Excellent build quality. Specs were dead on.",
      },
      {
        url: "/srixon/clubs/irons/zxi4-irons/zxi4-irons/MZXI4IRN.html",
        review_header: "Srixon does it again!",
        review_description:
          "The new generation of ZX4 irons has further helped me improve my game. Ball launch is slightly better than my older ZX4, and I am even more confident hitting the longer irons.",
      },
      {
        url: "/srixon/balls/z-star-series/z-star-diamond/z-star-diamond-golf-balls-24-pack/10376310.html",
        review_header: "Optimal combination of distance and spin",
        review_description:
          "Terrific combination of distance and green side spin for my game.",
      },
      {
        url: "/srixon/balls/z-star-series/z-star-diamond/z-star-diamond-golf-balls-24-pack/MZSTARD24PK.html",
        review_header: "My new summer game ball",
        review_description:
          "They are the best spinning balls I have ever had on the greens off of irons and wedges.",
      },
      {
        url: "/xxio/clubs/mens-golf-clubs/xxio-13/xxio-13-driver/MX13D.html",
        review_header: "Longer drives, game changer!",
        review_description:
          "Clearly a game changer. Hitting the ball off the tee with more distance (at least 10–20 yards)...When I hit it flush, the ball explodes off the face of the club and goes a mile. Very happy with my new XXIO 13 driver. Highly recommend.",
      },
      {
        url: "/xxio/balls/xxio-rebound-drive-ii/xxio-rebound-drive-ii-golf-balls/10348035.html",
        review_header: "First hole-in-one",
        review_description:
          "Had my first hole-in-one using an XXIO driver and lime-yellow ball. Both work great!",
      },
      {
        url: "/xxio/balls/xxio-rebound-drive-ii/xxio-rebound-drive-ii-ladies-golf-balls/MXRDL2GB.html",
        review_header: "I would buy this product again and again",
        review_description:
          "I really liked this ball. Better than most balls I have tried.",
      },
      {
        url: "/cleveland-golf/clubs/wedges/rtz-set-builder/rtz-wedge-set-builder/rtz-wedge-set.html",
        review_header: "Awesome green grabbing spin!",
        review_description:
          "3rd set of the Cleveland wedges, love the feel of the KBS Steel, satin. New grooves are perfect for our hard-to-hold Bermuda grass. Would recommend these to anyone needing help stopping the ball on the green.",
      },
      {
        url: "/srixon/clubs/drivers/zxi-driver/zxi-driver/MZXIDRV.html",
        review_header: "Easy to hit and very forgiving",
        review_description:
          "This has been a wonderful addition to the bag. I've found added confidence when teeing up, even in tight fairways. The design and build provide forgiveness throughout my round. I would buy this again.",
      },
    ],
  };

  function waitForElement(predicate, callback, timer = 20000, frequency = 150) {
    if (timer <= 0) {
      return;
    } else if (predicate && predicate()) {
      callback();
    } else {
      setTimeout(
        () => waitForElement(predicate, callback, timer - frequency, frequency),
        frequency,
      );
    }
  }

  function q(s, o) {
    return o ? s.querySelector(o) : document.querySelector(s);
  }

  function isTouchEnabled() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }

  function animate(targetElement, className, interval) {
    if (!targetElement) return;
    if (className.includes(".")) className.replace(".", "");
    targetElement.classList.add(className);
    setTimeout(() => targetElement.classList.remove(className), interval);
  }

  function handleModalView(action = "show") {
    const modalShowClass = `${page_initials}--modal-show`;
    const body = q("body");

    waitForElement(
      () => q(`.${page_initials}__modal`),
      () => {
        const modal = q(`.${page_initials}__modal`);

        if (action === "show" && !body.classList.contains(modalShowClass)) {
          animate(modal, "slide-to-top", 300);
          modal.classList.add("slide-to-top");
          body.classList.add(modalShowClass);
        }

        if (action === "hide") {
          animate(modal, "slide-to-bottom", 300);
          setTimeout(() => body.classList.remove(modalShowClass), 300);
        }
      },
    );
  }

  function updateProgressAndHideModal() {
    waitForElement(
      () => q(`.${page_initials}--modal-show .${page_initials}__modal`),
      () => {
        const targetNode = q(`.${page_initials}__modal__head__progress-value`);
        const modalElement = q(
          `.${page_initials}--modal-show .${page_initials}__modal`,
        );

        if (!targetNode || !modalElement) return;

        const duration = 8000;
        let isPaused = false;
        let remainingTime = duration;
        let transitionTimeout = null;
        let isAnimating = false;

        // Set up CSS for smooth transition
        targetNode.style.transition = `width ${duration}ms linear`;
        targetNode.style.width = "0%";

        // Force reflow to ensure transition starts from 0
        void targetNode.offsetWidth;

        // Pause/Resume handlers
        const pauseAnimation = () => {
          if (!isAnimating || isPaused) return;

          isPaused = true;

          // Get computed style to calculate current progress
          const computedWidth = parseFloat(getComputedStyle(targetNode).width);
          const containerWidth = targetNode.parentElement.clientWidth;
          const progress = computedWidth / containerWidth;

          // Calculate remaining time
          remainingTime = duration * (1 - progress);

          // Pause the transition
          targetNode.style.transition = "none";
          targetNode.style.width = `${progress * 100}%`;

          // Clear any pending timeouts
          if (transitionTimeout) {
            clearTimeout(transitionTimeout);
            transitionTimeout = null;
          }
        };

        const resumeAnimation = () => {
          if (!isPaused) return;

          isPaused = false;

          // Force reflow before starting new transition
          void targetNode.offsetWidth;

          // Start new transition with remaining time
          targetNode.style.transition = `width ${remainingTime}ms linear`;
          targetNode.style.width = "100%";

          // Set timeout to hide modal when transition completes
          transitionTimeout = setTimeout(() => {
            handleModalView("hide");
            cleanup();
          }, remainingTime);
        };

        // Event listeners
        modalElement.addEventListener("mouseenter", pauseAnimation);
        modalElement.addEventListener("mouseleave", resumeAnimation);

        // Mobile touch events
        modalElement.addEventListener("touchstart", (e) => {
          pauseAnimation();
          e.preventDefault();
        });

        modalElement.addEventListener("touchend", (e) => {
          resumeAnimation();
          e.preventDefault();
        });

        // Start animation
        isAnimating = true;
        targetNode.style.width = "100%";

        // Set timeout to hide modal
        transitionTimeout = setTimeout(() => {
          if (!isPaused) {
            handleModalView("hide");
            cleanup();
          }
        }, duration);

        // Cleanup function
        const cleanup = () => {
          isAnimating = false;

          // Remove event listeners
          modalElement.removeEventListener("mouseenter", pauseAnimation);
          modalElement.removeEventListener("mouseleave", resumeAnimation);
          modalElement.removeEventListener("touchstart", pauseAnimation);
          modalElement.removeEventListener("touchend", resumeAnimation);

          // Clear timeout
          if (transitionTimeout) {
            clearTimeout(transitionTimeout);
            transitionTimeout = null;
          }
        };
      },
    );
  }

  function getReviewData() {
    const currentUrl = window.location.href;
    const matchedReview = DATA["reviews"].find(({ url }) =>
      currentUrl.includes(url),
    );

    if (!matchedReview) return null;

    return matchedReview;
  }

  function handleScroll() {
    const reviewsAnchor = q(`#reviews-anchor`);

    // Function to attempt scrolling
    const scrollToReviewsAnchor = (retryCount = 0) => {
      if (!reviewsAnchor) return;

      // Get current position
      const rect = reviewsAnchor.getBoundingClientRect();
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;
      const targetScroll = currentScroll + rect.top - 50; // Offset of 50px from top

      // Scroll to the element with offset
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });

      // Check after scrolling if we reached the correct position
      setTimeout(() => {
        const newRect = reviewsAnchor.getBoundingClientRect();
        const newScroll = window.scrollY || document.documentElement.scrollTop;
        newScroll + newRect.top;

        // If element is not in the expected position (more than 50px off) and we haven't retried too many times
        if (Math.abs(newRect.top - 50) > 50 && retryCount < 3) {
          scrollToReviewsAnchor(retryCount + 1);
        }
      }, 500); // Wait for smooth scroll to complete plus some buffer
    };

    // Start the scroll process
    scrollToReviewsAnchor();
  }

  function createLayout() {
    const { review_header, review_description } = getReviewData();

    const startRatingHTML = q("#pr-review-snippet")
      ? /* HTML */ `<div class="${page_initials}__modal__review-stars">
          ${q("#pr-review-snippet").outerHTML}
        </div>`
      : "";

    q("body").insertAdjacentHTML(
      "afterbegin",
      /* HTML */ `
        <div class="${page_initials}__modal">
          <div class="${page_initials}__modal__top">
            <div class="${page_initials}__modal__head__progress">
              <div
                class="${page_initials}__modal__head__progress-value"
                style="width:0%;"
              ></div>
            </div>
            <div class="${page_initials}__modal__close-cta"></div>
          </div>
          ${startRatingHTML}
          <div class="${page_initials}__modal__review-header">
            ${review_header}
          </div>
          <div class="${page_initials}__modal__review-description">
            ${review_description}
          </div>
          <div class="${page_initials}__modal__review-see-more-cta">
            See More Reviews
          </div>
        </div>
      `,
    );

    const clickEventName = isTouchEnabled() ? "touchend" : "click";
    q(`.${page_initials}__modal__close-cta`).addEventListener(
      clickEventName,
      (e) => handleModalView("hide"),
    );
    q(`.${page_initials}__modal__review-see-more-cta`).addEventListener(
      clickEventName,
      handleScroll,
    );
  }

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    getReviewData();
    createLayout();
    handleModalView("show");
    updateProgressAndHideModal();
  }

  function checkForItems() {
    const hasMatchingReview = !!getReviewData();
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(".pr-rating-stars") &&
      hasMatchingReview
    );
  }

  waitForElement(checkForItems, init);
})();
