(() => {
    const TEST_CONFIG = {
        page_initials: "AB-HOMEPAGE-REDESIGN",
        test_variation: 1,
        test_version: 0.0006,
    };

    const ASSETS = {
        quotation: "https://www.hookandloop.com/media/wysiwyg/AB-TEST/Quotation.png",
        duragrip: "https://www.hookandloop.com/media/catalog/product/cache/67ee89799642c567a71fc92f3699d937/d/u/duragrip.jpg",
        velcro: "https://www.hookandloop.com/media/catalog/product/cache/67ee89799642c567a71fc92f3699d937/v/e/velcro_logo_1.jpg",
    };

    const TAILWIND_STYLES = {
        heading_xl: "ab-heading-xl",
        heading_lg: "ab-heading-lg",
        heading_sm: "text-[20px] font-[500] text-hnl1d",
        paragraph: "leading-6 text-[16px] [text-wrap:pretty]",
        button_primary: "action primary hnl-btn text-white",
        button_primary_sm:
            "action primary bg-hnleb0 px-[8px] py-2 flex mt-[15px] justify-center rounded-[4px] border-[2px] border-hnleb0 text-[12px] font-[600] hover:border-hnleb0 text-white",
        button_secondary: "ab-btn-secondary flex  justify-center text-[15px] font-[600] max-w-max uppercase",
        flex_center: "flex items-center justify-center",
    };

    const DATA = {
        customization_services: [
            {
                contentType: "customization services",
                href: "https://www.hookandloop.com/straps/specialty",
                imageSrc: "/media/wysiwyg/IMG_2665.jpg",
                imageWidth: "230",
                imageHeight: "230",
                imageAlt: "Custom made velcro straps",
                buttonText: "Custom Straps",
                buttonHref: "https://www.hookandloop.com/straps/specialty",
            },
            {
                contentType: "customization services",
                href: "https://www.hookandloop.com/converting/strip-cutting",
                imageSrc: "/media/wysiwyg/cc-cutting.jpg",
                imageWidth: "230",
                imageHeight: "230",
                imageAlt: "Free velcro cut to length service",
                buttonText: "Cutting",
                buttonHref: "https://www.hookandloop.com/converting/strip-cutting",
            },
            {
                contentType: "customization services",
                href: "https://www.hookandloop.com/converting/die-cutting",
                imageSrc: "/media/wysiwyg/IMG_5041_1.jpg",
                imageWidth: "230",
                imageHeight: "230",
                imageAlt: "Custom velcro die cutting",
                buttonText: "Die Cutting",
                buttonHref: "https://www.hookandloop.com/converting/die-cutting",
            },
            {
                contentType: "customization services",
                href: "https://www.hookandloop.com/converting/sewing",
                imageSrc: "/media/wysiwyg/cc-sewing.jpg",
                imageWidth: "230",
                imageHeight: "230",
                imageAlt: "Sewn velcro straps with webbing",
                buttonText: "Sewing",
                buttonHref: "https://www.hookandloop.com/converting/sewing",
            },
            {
                contentType: "customization services",
                href: "https://www.hookandloop.com/converting/logo-imprinting",
                imageSrc: "/media/wysiwyg/cc-imprinting.jpg",
                imageWidth: "230",
                imageHeight: "230",
                imageAlt: "Logo imprinted velcro straps",
                buttonText: "Logo Imprinting",
                buttonHref: "https://www.hookandloop.com/converting/logo-imprinting",
            },
            {
                contentType: "customization services",
                href: "https://www.hookandloop.com/converting/packaging",
                imageSrc: "/media/wysiwyg/cc-packaging.jpg",
                imageWidth: "230",
                imageHeight: "230",
                imageAlt: "Cleanly packaged velcro",
                buttonText: "Packaging",
                buttonHref: "https://www.hookandloop.com/converting/packaging",
            },
            {
                contentType: "customization services",
                href: "https://www.hookandloop.com/converting/welding",
                imageSrc: "/media/wysiwyg/cc-welding.jpg",
                imageWidth: "230",
                imageHeight: "230",
                imageAlt: "Ultrasonic welding velcro straps",
                buttonText: "Welding",
                buttonHref: "https://www.hookandloop.com/converting/welding",
            },
            {
                contentType: "customization services",
                href: "https://www.hookandloop.com/converting/grommeting",
                imageSrc: "/media/wysiwyg/cc-grommeting.jpg",
                imageWidth: "230",
                imageHeight: "230",
                imageAlt: "Grommets installed in customized velcro straps",
                buttonText: "Grommeting",
                buttonHref: "https://www.hookandloop.com/converting/grommeting",
            },
        ],
    };

    class CustomizationFluidSlider {
        constructor(sliderElement) {
            this.slider = sliderElement;
            this.slides = Array.from(sliderElement.querySelectorAll(".my-slide-item"));
            this.isDragging = false;
            this.startPos = 0;
            this.currentTranslate = 0;
            this.prevTranslate = 0;
            this.animationID = 0;
            this.currentIndex = 0;
            this.velocity = 0;
            this.lastTime = 0;
            this.lastPos = 0;
            this.deceleration = 0.0005; // Slower deceleration
            this.initialTranslate = 0;
            this.dragSensitivity = 0.6; // Reduced sensitivity

            // Bind methods
            this.prevSlide = this.prevSlide.bind(this);
            this.nextSlide = this.nextSlide.bind(this);
            this.touchStart = this.touchStart.bind(this);
            this.touchMove = this.touchMove.bind(this);
            this.touchEnd = this.touchEnd.bind(this);
            this.handleResize = this.handleResize.bind(this);
            this.animationLoop = this.animationLoop.bind(this);

            this.init();
        }

        init() {
            this.addPrevNextEventListener();
            this.setSlideWidths();
            this.addEventListeners();
            this.updateSliderPosition();
            this.updateButtonStates();
            this.animationLoop();
        }

        addPrevNextEventListener() {
            this.prevBtn = document.querySelector(".custom-converting-panel--mobile .slider-nav .slider-prev");
            this.nextBtn = document.querySelector(".custom-converting-panel--mobile .slider-nav .slider-next");

            this.prevBtn.removeEventListener("click", this.prevSlide);
            this.nextBtn.removeEventListener("click", this.nextSlide);

            this.prevBtn.addEventListener("click", this.prevSlide);
            this.nextBtn.addEventListener("click", this.nextSlide);
        }

        setSlideWidths() {
            const slideCount = this.getSlidesPerView();
            const sliderWidth = this.slider.clientWidth;
            const slideWidth = sliderWidth / slideCount;

            this.slides.forEach((slide) => {
                slide.style.flex = `0 0 ${slideWidth}px`;
            });
        }

        getSlidesPerView() {
            if (window.innerWidth < 768) return 2;
            if (window.innerWidth < 1024) return 4;
            return this.slides.length;
        }

        addEventListeners() {
            this.slider.removeEventListener("mousedown", this.touchStart);
            this.slider.removeEventListener("mousemove", this.touchMove);
            this.slider.removeEventListener("mouseup", this.touchEnd);
            this.slider.removeEventListener("mouseleave", this.touchEnd);
            this.slider.removeEventListener("touchstart", this.touchStart);
            this.slider.removeEventListener("touchmove", this.touchMove);
            this.slider.removeEventListener("touchend", this.touchEnd);

            this.slider.addEventListener("mousedown", this.touchStart);
            this.slider.addEventListener("mousemove", this.touchMove);
            this.slider.addEventListener("mouseup", this.touchEnd);
            this.slider.addEventListener("mouseleave", this.touchEnd);

            this.slider.addEventListener("touchstart", this.touchStart);
            this.slider.addEventListener("touchmove", this.touchMove);
            this.slider.addEventListener("touchend", this.touchEnd);

            this.slider.addEventListener(
                "touchmove",
                (e) => {
                    if (this.isDragging) e.preventDefault();
                },
                { passive: false }
            );

            window.addEventListener("resize", this.handleResize);
        }

        touchStart(e) {
            if (window.innerWidth >= 1024) return;

            this.isDragging = true;
            this.velocity = 0;

            const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
            this.startPos = clientX;
            this.lastTime = performance.now();
            this.lastPos = clientX;
            this.initialTranslate = this.currentTranslate;

            this.slider.style.cursor = "grabbing";
            this.slider.style.transition = "none";

            if (e.type !== "touchstart") e.preventDefault();
        }

        touchMove(e) {
            if (!this.isDragging || window.innerWidth >= 1024) return;

            const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
            const currentTime = performance.now();
            const deltaTime = Math.max(1, currentTime - this.lastTime);

            const deltaPos = clientX - this.lastPos;
            const instantVelocity = deltaPos / deltaTime;

            // Smoother velocity calculation with lower sensitivity
            this.velocity = this.velocity * 0.8 + instantVelocity * 0.2 * this.dragSensitivity;

            const dragDistance = (clientX - this.startPos) * this.dragSensitivity;
            this.currentTranslate = this.initialTranslate + dragDistance;

            this.applyBoundaries();

            this.lastTime = currentTime;
            this.lastPos = clientX;

            this.setSliderPosition();
        }

        applyBoundaries() {
            const maxTranslate = 0;
            const minTranslate = -(this.slides.length - this.getSlidesPerView()) * this.slides[0].clientWidth;

            if (this.currentTranslate > maxTranslate) {
                const overshoot = (this.currentTranslate - maxTranslate) * 0.2; // Reduced elasticity
                this.currentTranslate = maxTranslate + overshoot;
            } else if (this.currentTranslate < minTranslate) {
                const overshoot = (minTranslate - this.currentTranslate) * 0.2; // Reduced elasticity
                this.currentTranslate = minTranslate - overshoot;
            }
        }

        touchEnd() {
            if (window.innerWidth >= 1024) return;

            this.isDragging = false;
            this.slider.style.cursor = "grab";

            // Use distance-based snapping instead of velocity for more control
            const slideWidth = this.slides[0].clientWidth;
            const dragDistance = this.currentTranslate - this.initialTranslate;
            const dragThreshold = slideWidth * 0.15; // 15% of slide width to trigger change

            if (Math.abs(dragDistance) > dragThreshold) {
                const direction = dragDistance > 0 ? -1 : 1;
                const targetIndex = this.currentIndex + direction;
                this.goToSlide(targetIndex);
            } else {
                // If drag was too small, return to current position
                this.goToSlide(this.currentIndex);
            }
        }

        animationLoop() {
            if (!this.isDragging && Math.abs(this.velocity) > 0.01) {
                // Slower deceleration for smoother stopping
                this.velocity *= 1 - this.deceleration;
                this.currentTranslate += this.velocity * 16;

                this.applyBoundaries();

                if (Math.abs(this.velocity) < 0.05) {
                    // Lower threshold for snapping
                    this.snapToNearestSlide();
                }

                this.setSliderPosition();
            }

            requestAnimationFrame(this.animationLoop);
        }

        snapToNearestSlide() {
            const slideWidth = this.slides[0].clientWidth;
            const currentPosition = -this.currentTranslate / slideWidth;
            const maxSlide = this.slides.length - this.getSlidesPerView();

            // Use proper rounding to nearest slide
            let targetSlide;
            if (currentPosition % 1 > 0.6) {
                targetSlide = Math.ceil(currentPosition);
            } else if (currentPosition % 1 < 0.4) {
                targetSlide = Math.floor(currentPosition);
            } else {
                targetSlide = Math.round(currentPosition);
            }

            targetSlide = Math.max(0, Math.min(targetSlide, maxSlide));
            this.goToSlide(targetSlide);
            this.velocity = 0;
        }

        setSliderPosition() {
            this.slider.scrollLeft = -this.currentTranslate;
        }

        updateSliderPosition() {
            this.currentTranslate = -this.slider.scrollLeft;
            this.prevTranslate = this.currentTranslate;
        }

        nextSlide() {
            const maxIndex = this.slides.length - this.getSlidesPerView();
            if (this.currentIndex < maxIndex) {
                this.goToSlide(this.currentIndex + 1);
            }
        }

        prevSlide() {
            if (this.currentIndex > 0) {
                this.goToSlide(this.currentIndex - 1);
            }
        }

        goToSlide(index) {
            const slideWidth = this.slides[0].clientWidth;
            this.currentTranslate = -(index * slideWidth);
            this.prevTranslate = this.currentTranslate;
            this.currentIndex = index;
            this.velocity = 0;

            this.slider.style.transition = "scroll-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
            this.setSliderPosition();

            this.updateButtonStates();

            setTimeout(() => {
                this.slider.style.transition = "";
            }, 400);
        }

        updateButtonStates() {
            if (!this.prevBtn || !this.nextBtn) return;

            const maxIndex = this.slides.length - this.getSlidesPerView();
            this.prevBtn.disabled = this.currentIndex <= 0;
            this.nextBtn.disabled = this.currentIndex >= maxIndex;
            this.prevBtn.style.opacity = this.currentIndex <= 0 ? "0.5" : "1";
            this.nextBtn.style.opacity = this.currentIndex >= maxIndex ? "0.5" : "1";
        }

        handleResize() {
            if (window.innerWidth >= 1024) {
                this.destroy();
            } else {
                this.setSlideWidths();
                this.goToSlide(this.currentIndex);
                this.updateButtonStates();
            }
        }

        destroy() {
            this.slides.forEach((slide) => {
                slide.style.flex = "";
            });
            this.slider.style.cursor = "";

            if (this.prevBtn && this.nextBtn) {
                this.prevBtn.removeEventListener("click", this.prevSlide);
                this.nextBtn.removeEventListener("click", this.nextSlide);
            }
        }
    }
    function waitForElement(predicate, callback, timer = 20000, frequency = 150) {
        if (timer <= 0) {
            console.warn(`Timeout reached while waiting for condition: ${predicate.toString()}`);
        } else if (predicate && predicate()) {
            callback();
        } else {
            setTimeout(() => {
                waitForElement(predicate, callback, timer - frequency, frequency);
            }, frequency);
        }
    }

    function fireGA4Event(eventName, eventLabel = "") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: eventName,
            link_text: eventLabel,
        });
    }

    function createHeroSectionLayout() {
        const targetNode = document.querySelector(".custom-converting-panel");
        targetNode.insertAdjacentHTML(
            "beforebegin",
            /* HTML */ `
                <section class="ab-hero-section relative w-full">
                    <div class="ab-hero-section__container mx-auto flex flex-col items-center text-center">
                        <h2 class="text-white ${TAILWIND_STYLES.heading_xl}">
                            From full rolls to finished <br class="ab-md-hidden" />
                            products, we’re Everything <br class="ab-lg-hidden" />
                            in Hook & Loop!<sup class="text-sm ab-sup">TM</sup>
                        </h2>
                        <div class="ab-hero-section__brands flex justify-between items-center">
                            <a href="https://www.hookandloop.com/brands/duragrip" class="ab-hero-section__brands-item overflow-hidden ${TAILWIND_STYLES.flex_center}">
                                <img src="${ASSETS.duragrip}" alt="Duragrip" class="" />
                            </a>
                            <a href="https://www.hookandloop.com/brands/velcro" class="ab-hero-section__brands-item overflow-hidden ${TAILWIND_STYLES.flex_center}">
                                <img src="${ASSETS.velcro}" alt="Velcro" class="" />
                            </a>
                        </div>
                        <div class="ab-hero-section__all-products flex flex-col items-center justify-center">
                            <div class="ab-hero-section__all-products-row flex justify-between items-center">
                                <a href="https://www.hookandloop.com/products" class="ab-hero-section__all-products-item overflow-hidden ${TAILWIND_STYLES.flex_center}">Whole Rolls</a>
                                <a href="https://www.hookandloop.com/converting" class="ab-hero-section__all-products-item overflow-hidden ${TAILWIND_STYLES.flex_center}">Cut Pieces</a>
                            </div>
                            <div class="ab-hero-section__all-products-row flex justify-between items-center">
                                <a href="https://www.hookandloop.com/brands/duragrip/straps" class="ab-hero-section__all-products-item overflow-hidden ${TAILWIND_STYLES.flex_center}"
                                    >Straps</a
                                >
                                <a href="https://www.hookandloop.com/products/specialty" class="ab-hero-section__all-products-item overflow-hidden ${TAILWIND_STYLES.flex_center}"
                                    >Specialty Options</a
                                >
                            </div>
                            <div class="ab-hero-section__all-products-row flex justify-between items-center">
                                <a
                                    href="https://www.hookandloop.com/products"
                                    class="ab-hero-section__all-products-item ab-hero-section__all-products-item--see-all  overflow-hidden mx-auto ${TAILWIND_STYLES.flex_center} uppercase"
                                    >See all Products</a
                                >
                            </div>
                        </div>
                    </div>
                </section>
            `
        );
    }

    function initCustomizationServicesSlider() {
        waitForElement(
            () => document.querySelector(".custom-converting-panel--mobile .my-slider"),
            () => {
                const sliderElement = document.querySelector(".custom-converting-panel--mobile .my-slider");
                sliderElement._sliderInstance = new CustomizationFluidSlider(sliderElement);
            }
        );
    }

    function createMobileCustomizationServicesInnerLayout() {
        const targetNode = document.querySelector(".custom-converting-panel .custom-converting-inner");
        targetNode.insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="custom-converting-inner custom-converting-panel--mobile relative block lg:hidden">
                    <ul class="list-none text-center my-slider">
                        ${DATA.customization_services
                            .map(
                                (item) => /* HTML */ `
                                    <li class="my-slide-item">
                                        <a data-content-type="${item.contentType}" href="${item.href}">
                                            <div class="img-wrap overflow-hidden rounded-[4px]">
                                                <img
                                                    class="rounded-[4px] hover:transform hover:scale-[1.2] transition-all duration-300 ease-in-out"
                                                    src="${item.imageSrc}"
                                                    loading="lazy"
                                                    width="${item.imageWidth}"
                                                    height="${item.imageHeight}"
                                                    alt="${item.imageAlt}"
                                                />
                                            </div>
                                        </a>
                                        <div class="actions">
                                            <a
                                                data-content-type="${item.contentType}"
                                                class="action primary bg-hnleb0 px-[8px] py-2 flex mt-[15px] justify-center rounded-[4px] border-[2px] border-hnleb0 text-[12px] font-[600] hover:border-hnleb0 text-white"
                                                href="${item.buttonHref}"
                                                >${item.buttonText}</a
                                            >
                                        </div>
                                    </li>
                                `
                            )
                            .join("")}
                    </ul>
                    <div class="slider-nav">
                        <button class="slider-btn slider-prev" aria-label="Previous slide" disabled="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                class="w-5 h-5"
                                width="25"
                                height="25"
                                role="img"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
                                <title>chevron-left</title>
                            </svg></button
                        ><button class="slider-btn slider-next" aria-label="Next slide">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                class="w-5 h-5"
                                width="25"
                                height="25"
                                role="img"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
                                <title>chevron-right</title>
                            </svg>
                        </button>
                    </div>
                    <div class="actions flex justify-center">
                        <a
                            data-content-type="customization services"
                            class="ab-customize-services-cta mt-[15px] ab-btn-secondary flex  justify-center text-[15px] font-[600] max-w-max uppercase"
                            href="https://www.hookandloop.com/converting"
                            >See all customization services</a
                        >
                    </div>
                </div>
            `
        );
    }

    function modifyCustomizationServicesLayout() {
        document.querySelector(".custom-converting-panel").className = "custom-converting-panel lg:px-[10px] py-5 text-center"; /*  hidden lg:block */
        document.querySelector(".custom-converting-panel .section-title a").innerText = "We're More Than Just Products!";

        const pItem = document.querySelector(".custom-converting-panel .section-title p");
        if (pItem) {
            pItem.className = `custom-converting-panel__subtitle ${TAILWIND_STYLES.paragraph}`;
            pItem.innerText = "We are a full service Hook & Loop conversion facility. Let us handle the hard work for you.";
        }

        document.querySelector(".custom-converting-panel .custom-converting-inner").classList.add("custom-converting-panel--desktop", "hidden", "lg:block");

        document.querySelectorAll(".custom-converting-panel .custom-converting-inner a.action.primary").forEach((item) => {
            item.className = TAILWIND_STYLES.button_primary_sm;
        });

        document.querySelector(".custom-converting-panel .custom-converting-inner > .actions a").className = `ab-customize-services-cta mt-[15px] ${TAILWIND_STYLES.button_secondary}`;
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
                        <div class="ab-hook-loop-brands__auto-scroller-container overflow-hidden">
                            ${Array.from({ length: 1 })
                                .map(
                                    (_, index) => /* HTML */ `
                                        <div
                                            class="ab-hook-loop-brands__auto-scroller w-full flex justify-start items-center ${index === 0
                                                ? "scroll-infinite-rtl"
                                                : "scroll-infinite-ltr"}"
                                        >
                                            ${[...brands_data, ...brands_data]
                                                .map(
                                                    (item) => /* HTML */ `
                                                        <div class="ab-hook-loop-brand__item ${TAILWIND_STYLES.flex_center}">
                                                            <img src="${item.image}" alt="${item.image_alt}" title="${item.image_title}" class="ab-hook-loop-brand__image" />
                                                        </div>
                                                    `
                                                )
                                                .join("")}
                                        </div>
                                    `
                                )
                                .join("")}
                        </div>
                    </div>
                </section>
            `
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
        targetNode.className = "customer-service ab-customer-service-mobile text-center block lg:hidden";
        targetNode.insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <section class="ab-customer-service text-center hidden lg:block">
                    <div class="container">
                        <div class="section-title mb-12">
                            <h3 class="text-[22px] font-semibold leading-none">
                                Top Notch
                                <strong><a data-content-type="customer testimonials" class="text-hnle0 hover:text-hnl1d" href="/customer-feedback">Customer Service</a></strong>
                            </h3>
                            <h5 class="font-normal">Here's what our customers have to say ...</h5>
                        </div>
                        <div class="ab-customer-service__review-grid mx-auto text-gray-700 body-font">
                            ${service_review_grid_data
                                .map(
                                    (col) => /* HTML */ `
                                        <div class="ab-customer-service__review-column ${TAILWIND_STYLES.flex_center} flex-col">
                                            ${col.items
                                                .map(
                                                    (item) => /* HTML */ `
                                                        <div class="ab-customer-service__review-card card w-full card-interactive ${item.className}">
                                                            <div class="item">
                                                                <div class="ban1 text-left">
                                                                    <h5 class="customer-service-name mb-3.75 ${TAILWIND_STYLES.heading_sm}">${item.name}</h5>
                                                                    <p class="customer-service-text mb-5 ${TAILWIND_STYLES.paragraph}">${item.text}</p>
                                                                    <div class="customer-service-quotation">
                                                                        <img src="${ASSETS.quotation}" alt="Quotation" class="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    `
                                                )
                                                .join("")}
                                        </div>
                                    `
                                )
                                .join("")}
                        </div>
                    </div>
                </section>
            `
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
                    <div class="ab-hookloop-features__container container flex flex-col gap-6">
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
                                `
                                )
                                .join("")}
                        </div>
                        <div class="ab-hookloop-features__bottom-items">
                            <!-- Fifth Item -->
                            <div class="item p-4 border border-hnld7 flex flex-col gap-4">
                                <div class="${TAILWIND_STYLES.flex_center} flex-col lg:justify-start lg:items-start lg:flex-row">
                                    <div class="img-wrap mb-4 w-[213px] h-[213px] rounded-[4px] overflow-hidden">
                                        <img src="/media/wysiwyg/features-fourd-program.jpg" width="300" height="300" loading="lazy" alt="" class="min-w-full" />
                                    </div>
                                    <div class="content-wrap flex-1">
                                        <h3 class="text-[20px] font-[500] text-hnl1d mb-4">Free 4D Program</h3>
                                        <p class="${TAILWIND_STYLES.paragraph}">Product Consulting and Development Services for hook and loop fasteners.</p>
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
                                            <div class="or-call leading-[28px] text-[16px] mt-2 lg:mt-0 font-bold lg:ml-2 flex-col lg:flex-row gap-1 ${TAILWIND_STYLES.flex_center}">
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
                                                    <span class="call"><a class="text-hnl1d  hover:underline" href="tel:800-940-6934">Call 800-940-6934</a></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `
        );
    }

    function modifyNewsLetterAndPromotionSection() {
        document.querySelector(".newsletter-subscription .section-title h2").innerHTML = "Sign-Up for Special <br class='lg:hidden'/> <strong>Discounts & Offers</strong>";
        document.querySelector(".newsletter-subscription").className = "newsletter-subscription text-center text-white flex flex-col items-center bg-[#333]";
        document.querySelector(".newsletter-subscription .section-title p").className = `font-light ${TAILWIND_STYLES.paragraph}`;
        document.querySelector(".newsletter-subscription form.form.subscribe button").className =
            `ab-subscribe-cta p-[15px] rounded-r-[3px] font-bold ${TAILWIND_STYLES.button_primary}`;

        document.querySelector(".hook-loop-promotion").className = "hook-loop-promotion text-left text-hnl1d";
        document.querySelector(".hook-loop-promotion .container").className = "ab-hook-loop-promotion__container";
        document.querySelector(".hook-loop-promotion h2").className = "ab-hook-loop-promotion__header mb-6";
        document.querySelector(".hook-loop-promotion p.read-button").className = `read-button flex justify-start`;
        document.querySelector(".hook-loop-promotion .action.primary.read-more").className = `ab-promotion-read-more-cta w-full mt-5 mb-6 ${TAILWIND_STYLES.button_secondary}`;
        document.querySelector(".hook-loop-promotion .call-or-email").className = "call-or-email bg-white border border-hnld7 p-4 rounded-sm";
        document.querySelector(".hook-loop-promotion .call-or-email p").className = "text-[18px] font-medium text-center";
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

    function clickEvent() {
        waitForElement(
            () => document.querySelector(".ab-hero-section"),
            () => {
                // GA4 Event
                document.querySelectorAll(".ab-hero-section__brands-item").forEach((item) => {
                    item.addEventListener("click", (e) => {
                        const label = e.target.closest("img").getAttribute("alt");
                        fireGA4Event("homepage_brands_click", label);
                    });
                });

                // GA4 Event
                document.querySelectorAll(".ab-hero-section__all-products-item").forEach((item) => {
                    item.addEventListener("click", (e) => {
                        const label = e.target.closest("a").innerText;
                        fireGA4Event("homepage_products_click", label);
                    });
                });
            }
        );
    }

    function init() {
        document.body.classList.add(
            TEST_CONFIG.page_initials,
            `${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}`,
            `${TEST_CONFIG.page_initials}--version:${TEST_CONFIG.test_version}`
        );

        createHeroSectionLayout();
        modifyCustomizationServicesLayout();
        createMobileCustomizationServicesInnerLayout();
        createBrandsSectionLayout();
        createTestimonialsSectionLayout();
        createFeatureSectionLayout();
        modifyNewsLetterAndPromotionSection();
        createNewsLetterAndPromotionSectionLayout();
        initCustomizationServicesSlider();
        clickEvent();
    }

    function hasAllTargetElements() {
        return !!(
            document.querySelector(`body.cms-home:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`) &&
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
