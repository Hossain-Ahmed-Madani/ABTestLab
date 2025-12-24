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
.AB-PDP-TOP-REVIEW {
  scroll-behavior: smooth;
}
.AB-PDP-TOP-REVIEW__modal {
  opacity: 0;
  display: none;
  box-shadow: 7px 5px 8px 0px rgba(0, 0, 0, 0.35);
  border: 1px solid rgb(81, 81, 81);
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  max-width: 100%;
  min-height: max-content;
  height: max-content;
  background: #ffffff;
  z-index: 1;
  padding: 24px 21px 35px 22px;
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
  margin-bottom: 12px;
}
.AB-PDP-TOP-REVIEW__modal__review-stars {
  margin-bottom: 16px;
}
.AB-PDP-TOP-REVIEW__modal__close-cta {
  margin: 0;
  padding: 0;
  cursor: pointer;
  position: relative;
  width: 23px;
  height: 23px;
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
  flex-grow: 1;
  margin-right: 70px;
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
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0px;
  color: rgb(0, 0, 0);
  margin-bottom: 16px;
}
.AB-PDP-TOP-REVIEW__modal__review-description {
  font-family: Libre Franklin;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0px;
  color: rgb(37, 37, 37);
  margin-bottom: 16px;
}
.AB-PDP-TOP-REVIEW__modal__review-see-more-cta {
  width: max-content;
  cursor: pointer;
  font-family: Libre Franklin;
  font-weight: 700;
  font-size: 16px;
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
  margin-left: -3px;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-PDP-TOP-REVIEW__modal #pr-review-snippet .pr-star-v4::after {
  color: rgb(0, 0, 0);
  top: -8px;
}
.AB-PDP-TOP-REVIEW__modal #pr-review-snippet .pr-star-v4:before {
  top: -8px;
}
.AB-PDP-TOP-REVIEW__modal #pr-review-snippet .pr-star-v4 {
  width: 21px;
  height: 21px;
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
  padding-left: 12px;
  font-family: Libre Franklin;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgb(0, 0, 0) !important;
}
@media screen and (min-width: 768px) {
  .AB-PDP-TOP-REVIEW__modal {
    border: 1px solid rgb(81, 81, 81);
    box-shadow: 8.31px 5.93px 9.49px 0px rgba(0, 0, 0, 0.35);
    padding: 28px 27px 39px 26px;
    width: 600px;
    right: auto;
    left: 41px;
    bottom: 80px;
  }
  .AB-PDP-TOP-REVIEW__modal__top {
    margin-bottom: 14px;
  }
  .AB-PDP-TOP-REVIEW__modal__review-stars {
    margin-bottom: 19px;
  }
  .AB-PDP-TOP-REVIEW__modal__close-cta {
    width: 28px;
    height: 28px;
  }
  .AB-PDP-TOP-REVIEW__modal__review-header {
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0px;
    margin-bottom: 19px;
  }
  .AB-PDP-TOP-REVIEW__modal__review-description {
    font-weight: 500;
    font-size: 20px;
    line-height: 33.22px;
    letter-spacing: 0px;
    margin-bottom: 19px;
  }
  .AB-PDP-TOP-REVIEW__modal__review-see-more-cta {
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0px;
    text-decoration: underline;
    text-decoration-style: solid;
  }
  .AB-PDP-TOP-REVIEW__modal #pr-review-snippet {
    height: 25px;
    margin: 0;
    margin-left: -5px;
  }
  .AB-PDP-TOP-REVIEW__modal #pr-review-snippet .pr-star-v4::after {
    top: -7px;
  }
  .AB-PDP-TOP-REVIEW__modal #pr-review-snippet .pr-star-v4:before {
    top: -7px;
  }
  .AB-PDP-TOP-REVIEW__modal
    .p-w-r
    .pr-snippet
    .pr-snippet-stars-png
    .pr-snippet-rating-decimal {
    padding: 0;
    padding-left: 14px;
    font-weight: 500;
    font-size: 16px;
    line-height: 28.48px;
    letter-spacing: 0px;
  }
  .AB-PDP-TOP-REVIEW__modal #pr-review-snippet .pr-star-v4 {
    width: 25px;
    height: 25px;
    margin-right: 0px;
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

*/

(async () => {
  const TEST_CONFIG = {
    client: "ROI Revolutions",
    project: "Dunlopsports",
    host: "https://us.dunlopsports.com",
    test_name: "PDP - Top Review Modal [DTM]",
    page_initials: "AB-PDP-TOP-REVIEW",
    test_variation: 1,
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const DATA = {
    reviews: [
      {
        url: "/cleveland-golf/clubs/wedges/cbz/cbz-tour-satin-wedge/MCBZTS.html",
        review_header: "Great wedges!",
        review_description:
          "The wedges perform great. They are easy to hit and have a smooth feel about them. I especially like the 50 degree the best. Every time I purchase a new Cleveland wedge I fall in love with it. Don't hesitate to get one!",
        reviewer_name: "bjacobs79",
      },
      {
        url: "/cleveland-golf/clubs/wedges/rtz/rtz-tour-satin-wedge/MRTZTS.html",
        review_header: "First RTZ",
        review_description:
          "Ordered custom with Nippon shaft to match my ZXi 5's and it feels great ! The wedge is a little softer than my RTX6 wedges but the trajectory and distance is the same. Very happy with my purchase!",
        reviewer_name: "WEJJS",
      },
      {
        url: "/cleveland-golf/clubs/wedges/rtz/rtz-black-satin-wedge/MRTZBKS.html",
        review_header: "Amazing feel and spin",
        review_description:
          "I've played a number of wedges and always come back to Vokey or Cleveland. With a recent upgrade of some old wedges and redo in the bag, I was hitting these more consistently with better feel and spin than any others out there at my independent fitting. Love them and can't wait to get out next spring with these.",
        reviewer_name: "Tyler",
      },
      {
        url: "/cleveland-golf/clubs/wedges/rtz/rtz-tour-rack-(raw)-wedge/MRTZTR.html",
        review_header: "Great wedge!",
        review_description:
          "Excellent all-around playability. Looks great, spin is perfect, and I love the default swing weight. Solid feel, versatile, and the best wedge on the market right now. I also appreciate the tour-issue DG S400 as the default shaft.",
        reviewer_name: "J",
      },
      {
        url: "/cleveland-golf/clubs/wedges/rtx-6-zipcore/rtx-6-zipcore-tour-satin-wedge/MRTX6ZCTS.html",
        review_header: "Solid wedge with great feel",
        review_description:
          "This wedge feels great right out of the box. Excellent feel, plenty of spin, and consistent performance on chips and pitches. It also feels great with a full swing. Definitely a quality upgrade for the short game.",
        reviewer_name: "David",
      },
      {
        url: "/srixon/clubs/irons/zxi5-irons/zxi5-irons/MZXI5IRN.html",
        review_header: "Incredible irons for a wide range of handicaps",
        review_description:
          "The Srixon ZXi5 irons are easily the best set of irons I've owned. They are incredibly consistent, very forgiving for their category, and beautiful to look down on. It's amazing how much technology they've packed into these irons, all while keeping them sleek in appearance. The feel is wonderful, and there is enough feedback to know exactly where you hit the ball on the face to make adjustments. I will be playing these for years to come.",
        reviewer_name: "NJ",
      },
      {
        url: "/srixon/clubs/irons/zxi7-irons/zxi7-irons/MZXI7IRN.html",
        review_header: "ZXi7 are great. Definitely recommend them",
        review_description:
          "I replaced my 4-year-old ZX7 iron set with the new ZXi7. The new clubs are fantastic. I did not think they could improve on the ZX7, but they found a way to do it. They feel softer than my old set and are definitely straighter and a bit more forgiving. I would say handicaps as high as 15–18 can easily play these fantastic-looking clubs.",
        reviewer_name: "TM",
      },
      {
        url: "/srixon/clubs/irons/zxi4-irons/zxi4-irons/MZXI4IRN.html",
        review_header: "Srixon does it again!",
        review_description:
          "The new generation of ZX4 irons has further helped me improve my game. Ball launch is slightly better than my older ZX4, and I am even more confident hitting the longer irons.",
        reviewer_name: "Dreaming72",
      },
      {
        url: "/srixon/balls/z-star-series/z-star-diamond/z-star-diamond-golf-balls-24-pack/10376310.html",
        review_header: "An amazing golf ball",
        review_description:
          "This ball is fast and it spins! It launches in a great window with all clubs. It also produces low spin with the driver and plenty of spin with irons and wedges. It does everything I want it to do and more. I'll be playing this ball for a while!",
        reviewer_name: "Burt",
      },
      {
        url: "/srixon/balls/z-star-series/z-star-diamond/z-star-diamond-golf-balls-24-pack/MZSTARD24PK.html",
        review_header: "My new summer game ball",
        review_description:
          "They are the best spinning balls I have ever had on the greens off of irons and wedges.",
        reviewer_name: "JT",
      },
      {
        url: "/xxio/clubs/mens-golf-clubs/xxio-13/xxio-13-driver/MX13D.html",
        review_header: "Longer drives, game changer!",
        review_description:
          "Clearly a game changer. Hitting the ball off the tee with more distance (at least 10–20 yards). Misses still produce a long drive. When I hit it flush, the ball explodes off the face of the club and goes a mile. Very happy with my new XXIO 13 driver. Highly recommend.",
        reviewer_name: "Len",
      },
      {
        url: "/xxio/balls/xxio-rebound-drive-ii/xxio-rebound-drive-ii-golf-balls/10348035.html",
        review_header: "First hole-in-one",
        review_description:
          "Had my first hole-in-one using an XXIO driver and lime-yellow ball. Both work great!",
        reviewer_name: "Randy",
      },
      {
        url: "/xxio/balls/xxio-rebound-drive-ii/xxio-rebound-drive-ii-ladies-golf-balls/MXRDL2GB.html",
        review_header: "I would buy this product again and again",
        review_description:
          "I really liked this ball. Better than most balls I have tried.",
        reviewer_name: "LIVY",
      },
      {
        url: "/cleveland-golf/clubs/wedges/rtz-set-builder/rtz-wedge-set-builder/rtz-wedge-set.html",
        review_header: "Awesome green grabbing spin!",
        review_description:
          "3rd set of the Cleveland wedges, love the feel of the KBS Steel, satin. New grooves are perfect for our hard-to-hold Bermuda grass. Would recommend these to anyone needing help stopping the ball on the green.",
        reviewer_name: "Pmoney",
      },
      {
        url: "/srixon/clubs/drivers/zxi-driver/zxi-driver/MZXIDRV.html",
        review_header: "Easy to hit and very forgiving",
        review_description:
          "This has been a wonderful addition to the bag. I've found added confidence when teeing up, even in tight fairways. The design and build provide forgiveness throughout my round. I would buy this again.",
        reviewer_name: "Blake",
      },
    ],
  };

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

  async function handleModalView(action = "show") {
    const modalShowClass = `${page_initials}--modal-show`;
    const body = q("body");

    await waitForElementAsync(() => q(`.${page_initials}__modal`));

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
  }

  async function updateProgressAndHideModal() {
    await waitForElementAsync(() =>
      q(`.${page_initials}--modal-show .${page_initials}__modal`),
    );

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
  }

  function getReviewData() {
    const currentUrl = window.location.href;
    const matchedReview = DATA["reviews"].find(({ url }) =>
      currentUrl.includes(url),
    );

    return matchedReview ?? null;
  }

  function createLayout() {
    const { review_header, review_description } = getReviewData();

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
          <div class="${page_initials}__modal__review-stars">
            ${q("#pr-review-snippet").outerHTML}
          </div>
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
      (e) =>
        q("#reviews-anchor").scrollIntoView({
          behavior: "smooth",
          block: "start",
        }),
    );
  }

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);
    getReviewData();
    createLayout();
    handleModalView("show");
    updateProgressAndHideModal();
  }

  function checkForItems() {
    const hasMatchingReview = !!getReviewData();
    return !!(
      q(
        `body:not(.${page_initials}):not(${page_initials}--v${test_variation})`,
      ) &&
      q(".pr-rating-stars") &&
      hasMatchingReview
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
