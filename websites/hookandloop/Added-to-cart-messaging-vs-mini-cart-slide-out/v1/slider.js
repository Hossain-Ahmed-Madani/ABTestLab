function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function q(s, o) {
    return o ? s.querySelector(o) : document.querySelector(s);
}

function qq(s, o) {
    return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
}

class ProductCarousel {
    constructor(container) {
        this.container = container;
        if (!this.container) {
            console.error("Carousel container not found");
            return;
        }

        this.cardContainer = q(this.container, ".ab-related-products__card-container");
        this.cards = qq(this.container, ".ab-related-product__card");
        this.prevBtn = q(this.container, ".ab-carousel-btn--prev");
        this.nextBtn = q(this.container, ".ab-carousel-btn--next");
        this.gap = 12; // 12px gap between items

        if (!this.cardContainer || !this.prevBtn || !this.nextBtn) {
            console.error("Required carousel elements not found");
            return;
        }

        this.init();
    }

    init() {
        this.addCarouselStyles();
        this.attachEventListeners();
        this.updateNavigation();

        // Handle window resize
        this.resizeHandler = debounce(() => {
            this.updateNavigation();
        }, 250);
        window.addEventListener("resize", this.resizeHandler);
    }

    addCarouselStyles() {
        // Add necessary classes to elements
        this.cardContainer.classList.add("ab-carousel-scroll");
        this.container.classList.add("ab-carousel-wrapper");
    }

    // attachEventListeners() {
    //     this.prevBtn.addEventListener("click", () => this.slidePrev());
    //     this.nextBtn.addEventListener("click", () => this.slideNext());

    //     // Touch support for mobile swipe
    //     let startX = 0;
    //     let scrollLeft = 0;
    //     let isDragging = false;

    //     this.cardContainer.addEventListener("touchstart", (e) => {
    //         startX = e.touches[0].pageX;
    //         scrollLeft = this.cardContainer.scrollLeft;
    //         isDragging = true;
    //     });

    //     this.cardContainer.addEventListener("touchmove", (e) => {
    //         if (!isDragging) return;
    //         const x = e.touches[0].pageX;
    //         const walk = startX - x;
    //         this.cardContainer.scrollLeft = scrollLeft + walk;
    //     });

    //     this.cardContainer.addEventListener("touchend", () => {
    //         isDragging = false;
    //         this.updateNavigation();
    //     });

    //     // Update navigation on scroll
    //     this.updateNavigationDebounced = debounce(() => {
    //         this.updateNavigation();
    //     }, 100);

    //     this.cardContainer.addEventListener("scroll", this.updateNavigationDebounced);
    // }

    attachEventListeners() {
        this.prevBtn.addEventListener("click", () => this.slidePrev());
        this.nextBtn.addEventListener("click", () => this.slideNext());

        // Touch and mouse support for dragging
        let startX = 0;
        let scrollLeft = 0;
        let isDragging = false;

        // Touch Events
        this.cardContainer.addEventListener("touchstart", (e) => {
            startX = e.touches[0].pageX;
            scrollLeft = this.cardContainer.scrollLeft;
            isDragging = true;
        });

        this.cardContainer.addEventListener("touchmove", (e) => {
            if (!isDragging) return;
            const x = e.touches[0].pageX;
            const walk = startX - x;
            this.cardContainer.scrollLeft = scrollLeft + walk;
        });

        this.cardContainer.addEventListener("touchend", () => {
            isDragging = false;
            this.updateNavigation();
        });

        // Mouse Events
        this.cardContainer.addEventListener("mousedown", (e) => {
            e.preventDefault(); // Prevent unwanted selections
            startX = e.pageX;
            scrollLeft = this.cardContainer.scrollLeft;
            isDragging = true;
            this.cardContainer.classList.add("dragging");
        });

        this.cardContainer.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            const x = e.pageX;
            const walk = startX - x;
            this.cardContainer.scrollLeft = scrollLeft + walk;
        });

        this.cardContainer.addEventListener("mouseup", () => {
            isDragging = false;
            this.cardContainer.classList.remove("dragging");
            this.updateNavigation();
        });

        this.cardContainer.addEventListener("mouseleave", () => {
            if (isDragging) {
                isDragging = false;
                this.cardContainer.classList.remove("dragging");
                this.updateNavigation();
            }
        });

        // Update navigation on scroll (debounced)
        this.updateNavigationDebounced = debounce(() => {
            this.updateNavigation();
        }, 100);

        this.cardContainer.addEventListener("scroll", this.updateNavigationDebounced);
    }

    getVisibleItems() {
        // Mobile: 2.25 items, Desktop: 2.5 items (breakpoint at 768px)
        const isMobile = window.innerWidth < 768;
        return isMobile ? 2.25 : 2.5;
    }

    getCardWidth() {
        if (this.cards.length === 0) return 0;
        const visibleItems = this.getVisibleItems();
        const containerWidth = this.cardContainer.offsetWidth;
        const totalGap = this.gap * (visibleItems - 1);
        return (containerWidth - totalGap) / visibleItems;
    }

    updateCardWidths() {
        const cardWidth = this.getCardWidth();
        this.cards.forEach((card) => {
            card.style.width = `${cardWidth}px`;
        });
    }

    slidePrev() {
        const cardWidth = this.getCardWidth();
        const scrollAmount = cardWidth + this.gap;
        this.cardContainer.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
        });
    }

    slideNext() {
        const cardWidth = this.getCardWidth();
        const scrollAmount = cardWidth + this.gap;
        this.cardContainer.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });
    }

    updateNavigation() {
        this.updateCardWidths();

        const scrollLeft = this.cardContainer.scrollLeft;
        const maxScroll = this.cardContainer.scrollWidth - this.cardContainer.clientWidth;

        // Show/hide prev button
        if (scrollLeft <= 1) {
            this.prevBtn.classList.add("disabled");
        } else {
            this.prevBtn.classList.remove("disabled");
        }

        // Show/hide next button
        if (scrollLeft >= maxScroll - 1) {
            this.nextBtn.classList.add("disabled");
        } else {
            this.nextBtn.classList.remove("disabled");
        }
    }

    destroy() {
        // Remove event listeners
        window.removeEventListener("resize", this.resizeHandler);
        this.cardContainer.removeEventListener("scroll", this.updateNavigationDebounced);

        // Remove classes
        this.cardContainer.classList.remove("ab-carousel-scroll");
        this.container.classList.remove("ab-carousel-wrapper");

        // Reset card widths
        this.cards.forEach((card) => {
            card.style.width = "";
        });

        console.log("Carousel destroyed");
    }
}

// Usage:
// const carousel = new ProductCarousel('.ab-related-products--carousel');
// To destroy: carousel.destroy();

qq(".ab-related-products--carousel").forEach((elem) => {
    const carousel = new ProductCarousel(elem);
});

// Usage:
// const carousel = new ProductCarousel('.ab-related-products--carousel');
// To destroy: carousel.destroy();
