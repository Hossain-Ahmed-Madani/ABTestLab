/* 
    Figma: https://www.figma.com/design/r2kIVxrX2bkhta3IoxcG8i/H---L---A-B-test-idea---Added-to-cart-messaging-vs.-mini-cart-slide-out.?node-id=4060-3077&t=ix25ZW6SqnFUFMRQ-0
    Test container: 
    Preview: 


    urls: 
    https://www.hookandloop.com/brands/duragrip/sew-on/1-2-duragrip-brand-sew-on-loop-white
    https://www.hookandloop.com/brands/velcro/sew-on/4-velcro-brand-sew-on-hook-loop-black
    https://www.hookandloop.com/brands/velcro/sew-on/4-velcro-brand-sew-on-hook-loop-black
    // cookie: recently_viewed_products

*/

(async () => {
    const TEST_CONFIG = {
        client: "Hook & Loop",
        project: "Hook & Loop",
        site_url: "https://www.hookandloop.com",
        test_name: "H & L - A/B test idea - Added to cart messaging vs. mini cart slide-out.",
        page_initials: "AB-MINI-CART",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        truck_svg: /* HTML */ `
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.166 14.9997V4.99967C12.166 4.55765 11.9904 4.13372 11.6779 3.82116C11.3653 3.5086 10.9414 3.33301 10.4993 3.33301H3.83268C3.39065 3.33301 2.96673 3.5086 2.65417 3.82116C2.34161 4.13372 2.16602 4.55765 2.16602 4.99967V14.1663C2.16602 14.3874 2.25381 14.5993 2.41009 14.7556C2.56637 14.9119 2.77834 14.9997 2.99935 14.9997H4.66602"
                    stroke="#1D1D1D"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path d="M13 15H8" stroke="#1D1D1D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M16.3327 15.0003H17.9993C18.2204 15.0003 18.4323 14.9125 18.5886 14.7562C18.7449 14.6 18.8327 14.388 18.8327 14.167V11.1253C18.8323 10.9362 18.7677 10.7528 18.6493 10.6053L15.7493 6.98033C15.6714 6.88273 15.5725 6.80389 15.46 6.74966C15.3475 6.69542 15.2242 6.66717 15.0993 6.66699H12.166"
                    stroke="#1D1D1D"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M14.6667 16.6668C15.5871 16.6668 16.3333 15.9206 16.3333 15.0002C16.3333 14.0797 15.5871 13.3335 14.6667 13.3335C13.7462 13.3335 13 14.0797 13 15.0002C13 15.9206 13.7462 16.6668 14.6667 16.6668Z"
                    stroke="#1D1D1D"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M6.33268 16.6663C7.25316 16.6663 7.99935 15.9201 7.99935 14.9997C7.99935 14.0792 7.25316 13.333 6.33268 13.333C5.41221 13.333 4.66602 14.0792 4.66602 14.9997C4.66602 15.9201 5.41221 16.6663 6.33268 16.6663Z"
                    stroke="#1D1D1D"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        `,
        check_circle_svg: /* HTML */ `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.41667 7.75L6.97222 9.30556L10.0833 6.19444M14.75 7.75C14.75 11.616 11.616 14.75 7.75 14.75C3.88401 14.75 0.75 11.616 0.75 7.75C0.75 3.88401 3.88401 0.75 7.75 0.75C11.616 0.75 14.75 3.88401 14.75 7.75Z"
                    stroke="#158A03"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        `,
        minus_svg: /* HTML */ `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 10H6" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        `,
        plus_svg: /* HTML */ `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6V10M10 10V14M10 10H14M10 10L6 10" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        `,
        slider_prev_svg: /* HTML */ `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5" width="25" height="25" role="img">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
                <title>chevron-left</title>
            </svg>
        `,
        slider_next_svg: /* HTML */ ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="25" height="25" role="img">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
            <title>chevron-right</title>
        </svg>`,
    };

    const STATE = {
        added_products: [],
        carousel_instances: [],
    };

    const PRODUCT_DATA = {
        pairs_well_with: [
            //
        ],
        recently_viewed: [
            //
        ],
        most_purchased: [
            {
                id: "6959",
                name: 'Tempo 60" Display Laminated Loop Fabric',
                url: "https:\/\/www.hookandloop.com\/brands\/duragrip\/wide-loop\/tempo-60-display-laminated-loop-fabric",
                sku: "DG-TEMPO",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/t\/e\/tempo3_2.jpg",
                price: "$45.45",
            },
            {
                id: "6863",
                name: "VELCRO\u00ae Brand Adhesive Backed Hook and Loop Fasteners",
                url: "https:\/\/www.hookandloop.com\/brands\/velcro\/peel-and-stick",
                sku: "VADHESIVE-161885",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/p\/s\/ps_rolls-velcro_black_acrylic_release_liner_2.jpg",
                price: "$33.75-$202.00",
            },
            {
                id: "6753",
                name: "DuraGrip Brand Display Loop",
                url: "https:\/\/www.hookandloop.com\/brands\/duragrip\/wide-loop\/display-loop",
                sku: "DWL-170783REGAL63",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/w\/i\/wide_loop-electric_blue_regal_detail_2.jpg",
                price: "$49.15",
            },
            {
                id: "6751",
                name: "DuraGrip Brand Wide Loop",
                url: "https:\/\/www.hookandloop.com\/brands\/duragrip\/wide-loop\/duragrip-brand-wide-loop",
                sku: "DWL-170783REGAL60",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/c\/o\/coyote_brown_wide_loop2.jpg",
                price: "$38.07",
            },
            {
                id: "6747",
                name: "VELCRO\u00ae Brand ONE-WRAP\u00ae Fastener",
                url: "https:\/\/www.hookandloop.com\/brands\/velcro\/double-sided-cable-ties",
                sku: "VOWF-170",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/o\/n\/one-wrap-black_7_1.jpg",
                price: "$27.50-$193.25",
            },
            {
                id: "6307",
                name: "VELCRO\u00ae Brand ONE-WRAP\u00ae Cable Ties",
                url: "https:\/\/www.hookandloop.com\/brands\/velcro\/cable-ties",
                sku: "VOWF-1707",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/b\/l\/black_cable_ties_4_1_1.jpg",
                price: "$0.50-$2.47",
            },
            {
                id: "6299",
                name: "DuraGrip\u00ae Brand Polypropylene Webbing",
                url: "https:\/\/www.hookandloop.com\/brands\/duragrip\/webbing",
                sku: "DW-DG20RDWEBB",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/r\/e\/red_7_1_.jpg",
                price: "$25.00-$118.00",
            },
            {
                id: "6298",
                name: "VELCRO\u00ae Brand Wide Sheets and Loop",
                url: "https:\/\/www.hookandloop.com\/brands\/velcro\/wide-loop",
                sku: "VW-195872",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/r\/o\/rolls-wideloop_reshoot_1.jpg",
                price: "$14.55-$37.25",
            },
            {
                id: "6288",
                name: "DuraGrip\u00ae Brand Adhesive Backed Hook and Loop Fasteners",
                url: "https:\/\/www.hookandloop.com\/brands\/duragrip\/peel-and-stick",
                sku: "Adhesive-DG-Brand-peel-and-stick",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/p\/s\/ps_rolls-duragrip_white_rubber_liner_1.jpg",
                price: "$14.75-$146.75",
            },
            {
                id: "6286",
                name: "DuraGrip\u00ae Brand Hook and Loop Coins",
                url: "https:\/\/www.hookandloop.com\/brands\/duragrip\/coins",
                sku: "DC-DGC78WHL",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/r\/o\/rolls-duragrip_dgc34blh_1.png",
                price: "$33.75-$67.50",
            },
            {
                id: "6285",
                name: "VELCRO\u00ae Brand VELCOIN\u00ae Hook and Loop Fasteners",
                url: "https:\/\/www.hookandloop.com\/brands\/velcro\/coins",
                sku: "VVC-192342",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/r\/o\/rolls-velcro_dots_192245_angled_1.png",
                price: "$60.00-$117.50",
            },
            {
                id: "6284",
                name: "VELCRO\u00ae Brand Sew On Hook and Loop Fasteners",
                url: "https:\/\/www.hookandloop.com\/brands\/velcro\/sew-on",
                sku: "VSEWON-181214",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/r\/o\/rolls-velcro_190431.jpg",
                price: "$18.00-$271.75",
            },
            {
                id: "6361",
                name: "DuraGrip Brand Medical Channel Loop Fasteners",
                url: "https:\/\/www.hookandloop.com\/brands\/duragrip\/duragrip-brand-medical-channel-loop-fasteners",
                sku: "DG10BLCL-CON",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/d\/g\/dg10channel_copy.png",
                price: "$42.50-$106.25",
            },
            {
                id: "6360",
                name: "DuraGrip Brand Adhesive Backed Fire Retardant Hook and Loop",
                url: "https:\/\/www.hookandloop.com\/brands\/duragrip\/specialty\/sew-on-fire-retardant-hook-and-loop",
                sku: "DFR-DG10BLHFRA",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/p\/s\/ps_rolls-duragrip_black_rubber_shear_1.jpg",
                price: "$50.88-$126.23",
            },
            {
                id: "6341",
                name: "DuraGrip Brand Back to Back Hook and Loop",
                url: "https:\/\/www.hookandloop.com\/brands\/duragrip\/specialty\/back-to-back-hook-and-loop",
                sku: "CON-DLTL-DG10BLL",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/r\/o\/rolls-hook_to_hook_detail_macro_1.jpg",
                price: "$46.75-$93.75",
            },
            {
                id: "6310",
                name: "DuraGrip Brand Low-Profile Hook",
                url: "https:\/\/www.hookandloop.com\/brands\/duragrip\/specialty\/duragrip-brand-low-profile-hook",
                sku: "DG-LOW-PROFILE",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/d\/g\/dg10h3_copy_3.png",
                price: "$17.50-$102.00",
            },
            {
                id: "6309",
                name: "DuraGrip Brand Total Hook Fastener",
                url: "https:\/\/www.hookandloop.com\/brands\/duragrip\/specialty\/duragrip-brand-total-hook-fastener",
                sku: "DTH-DG15BLTH",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/r\/o\/rolls-total_hook_detail_1_1_.jpg",
                price: "$23.75-$57.50",
            },
            {
                id: "6308",
                name: "DuraGrip Brand Rings",
                url: "https:\/\/www.hookandloop.com\/brands\/duragrip\/ring",
                sku: "DGRLHE2",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/2\/_\/2_inch_black_ring_pair_bn401-0200.jpg",
                price: "$70.00",
            },
            {
                id: "6303",
                name: "DuraGrip Brand Stretch Loop",
                url: "https:\/\/www.hookandloop.com\/brands\/duragrip\/stretch-loop",
                sku: "DSTR-DG58BLS",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/s\/t\/stretch_loop_1_.jpg",
                price: "$70.00-$189.20",
            },
            {
                id: "6293",
                name: "DuraGrip\u00ae Brand Electrically Conductive Hook and Loop",
                url: "https:\/\/www.hookandloop.com\/brands\/duragrip\/specialty\/electrically-conductive-hook-and-loop",
                sku: "DEC-DG20ELCL",
                image: "https:\/\/www.hookandloop.com\/media\/catalog\/product\/cache\/74c1057f7991b4edb2bc7bdaa94de933\/d\/g\/dgelcl_2.jpg",
                price: "$54.12-$87.57",
            },
        ],
    };

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

            this.container.remove();

            console.log("Carousel destroyed!");
        }
    }

    async function waitForElementAsync(predicate, timeout = 20000, frequency = 150) {
        const startTime = Date.now();

        return new Promise((resolve, reject) => {
            // Check immediately first
            if (typeof predicate === "function" && predicate()) {
                return resolve(true);
            }

            const interval = setInterval(() => {
                const elapsed = Date.now() - startTime;

                if (elapsed >= timeout) {
                    clearInterval(interval);
                    return reject(new Error(`Timeout of ${timeout}ms reached while waiting for condition: ${predicate.toString()}`));
                }

                if (typeof predicate === "function" && predicate()) {
                    clearInterval(interval);
                    return resolve(true);
                }
            }, frequency);
        });
    }

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

    function getCookie(key) {
        try {
            if (!key || typeof key !== "string") ;

            // Encode the key to handle special characters
            const encodedKey = encodeURIComponent(key);
            const cookies = `; ${document.cookie}`;

            // Find the cookie value
            const parts = cookies.split(`; ${encodedKey}=`);

            if (parts.length === 2) {
                const value = parts.pop().split(";").shift();
                return value ? decodeURIComponent(value) : null;
            }

            return null;
        } catch (error) {
            console.error(`Error reading cookie "${key}":`, error);
            return null;
        }
    }

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function getSideCartProductData(productElement) {
        const productId = productElement.getAttribute("data-item-id");
        const measurementUnit = +productElement.getAttribute("data-measurement-unit");
        const sku = productElement.getAttribute("data-sku");
        const url = productElement.getAttribute("data-url");

        return {
            productId,
            sku,
            measurementUnit,
            url,
        };
    }

    async function fetchAndParseURLApi(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const html = await response.text();
            const dom = new DOMParser().parseFromString(html, "text/html");
            return dom;
        } catch (error) {
            console.error("Analysis failed:", error);
            return null;
        }
    }

    async function getPairsWellProductApi(dom) {
        try {
            if (!dom) {
                console.warn("No DOM provided to getPairsWellProduct");
                return {};
            }

            // Find the cross-sell form with pattern initPDPCrossSellSectionXXX()
            const crossSellForm = q(dom, 'form[x-data^="initPDPCrossSellSection"]');

            if (!crossSellForm) {
                return {};
            }

            // Extract product ID from x-data attribute
            const xDataAttr = crossSellForm.getAttribute("x-data");
            const productIdMatch = xDataAttr.match(/initPDPCrossSellSection(\d+)\(\)/);
            const productId = productIdMatch ? productIdMatch[1] : "";

            // Extract product details
            const nameElement = crossSellForm.querySelector(".cls-product-name a");
            const priceElement = crossSellForm.querySelector(".cls-product-price");
            const imageElement = crossSellForm.querySelector("img");
            const linkElement = crossSellForm.querySelector(".cls-product-name a");

            // Extract SKU from product data or other elements if available
            const skuInput = crossSellForm.querySelector('input[name="sku"]');
            const sku = skuInput ? skuInput.value : "";

            const productData = {
                id: productId,
                name: nameElement ? nameElement.textContent.trim() : "",
                url: linkElement ? linkElement.getAttribute("href") : "",
                sku: sku,
                image: imageElement ? imageElement.getAttribute("src") : "",
                price: priceElement ? priceElement.textContent.trim() : "",
            };

            return productData;
        } catch (error) {
            return {};
        }
    }

    async function updatePairsWellWithProductsApi() {
        if (STATE["added_products"].length === 0) {
            PRODUCT_DATA["pairs_well_with"] = [];
            return false;
        }

        const urls = STATE["added_products"].map((item) => item.url);

        const productList = await Promise.all(
            urls.map(async (url) => {
                const dom = await fetchAndParseURLApi(url);
                return getPairsWellProductApi(dom);
            })
        ).then((results) => results.filter((product) => product && Object.keys(product).length > 0));

        if (!productList || (productList && productList.length === 0)) return false;

        PRODUCT_DATA["pairs_well_with"] = productList;

        return true;
    }

    async function updateRecentlyViewedProductsApi() {
        await waitForElementAsync(() => document.cookie);
        const res = getCookie("recently_viewed_products");
        const productList = JSON.parse(res);

        if (!productList || (productList && productList.length === 0)) return false;

        PRODUCT_DATA["recently_viewed"] = productList;

        return true;
    }

    async function productQuantityUpdateRequestApi({ productId, sku, measurementUnit, quantity }) {
        const formData = new FormData();
        const formKey = window.hyva.getFormKey();
        const uenc = window.hyva.getUenc();

        formData.append("form_key", formKey);
        formData.append(`cart[${productId}][qty]`, (measurementUnit * quantity).toString());
        formData.append("sku", sku);
        formData.append("uenc", uenc);

        const response = await fetch("https://www.hookandloop.com/checkout/cart/updatePost/", {
            headers: {
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9",
                priority: "u=1, i",
                "sec-ch-ua": '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"Windows"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
            },
            referrer: "https://www.hookandloop.com/checkout/cart",
            body: formData,
            method: "POST",
            mode: "cors",
            credentials: "include",
        });

        return response;
    }

    async function getSliderDataApi() {
        const { pairs_well_with, recently_viewed, most_purchased } = PRODUCT_DATA;
        const added_products = STATE["added_products"];

        const carousel_data = [];

        if (pairs_well_with.length > 0) {
            const tmp = pairs_well_with.filter((item) => !added_products.some(({ productId }) => productId === item.id));
            carousel_data.push(...tmp);
        }

        if (carousel_data.length < 15 && recently_viewed.length > 0) {
            const tmp = recently_viewed.filter((item) => !added_products.some(({ productId }) => productId === item.id));
            carousel_data.push(...tmp);
        }

        if (carousel_data.length < 15 && most_purchased.length > 0) {
            const tmp = most_purchased.filter((item) => !added_products.some(({ productId }) => productId === item.id)).slice(0, 15 - carousel_data.length);
            carousel_data.push(...tmp);
        }

        return carousel_data;
    }

    const debouncedUpdateQuantity = debounce(async ({ productId, sku, measurementUnit, quantity }) => {
        const loaderElements = qq("#cart-drawer .z-50.fixed.inset-0.grid.place-items-center.bg-white\\/70.text-slate-800");
        loaderElements?.forEach((loaderElement) => loaderElement.classList.add("ab-show-loader"));

        const response = await productQuantityUpdateRequestApi({ productId, sku, measurementUnit, quantity });
        window.dispatchEvent(new CustomEvent("reload-customer-section-data"));
        loaderElements?.forEach((loaderElement) => loaderElement.classList.remove("ab-show-loader"));

        return response;
    }, 500);

    function checkInputValidity(input) {
        const min = input.getAttribute("min") || 0;
        const max = input.getAttribute("max") || 1000000000;
        const value = +input.value;

        const isValid = value >= min && value <= max && Number.isInteger(value);

        const className = "ab-warning-border";
        if (isValid) {
            input.classList.remove(className);
        } else {
            input.classList.add(className);
        }

        return isValid;
    }

    async function handleProductSideCartQuantityUpdate(e) {
        const currentTarget = e.currentTarget;
        const productQuantityInput = q(currentTarget, "input.ab-product-quantity");
        const productElement = e.target.closest(".flex.items-start.p-3.space-x-4.transition.duration-150.ease-in-out.rounded-lg.hover\\:bg-gray-100 ");
        const productQuantityElement = q(productElement, "span[x-html='item.qty']");
        const isValid = checkInputValidity(productQuantityInput);

        if (!e.target.closest(".ab-product-quantity-update-action")) return;

        let quantity = +productQuantityInput.value;

        if (e.target.closest(".ab-product-quantity-update-action__minus") && quantity > 0) {
            quantity--;
        }
        if (e.target.closest(".ab-product-quantity-update-action__plus")) {
            quantity++;
        }

        productQuantityInput.value = quantity;
        productQuantityElement.innerText = quantity;

        if (!isValid) return;

        if (quantity === 0) {
            const productRemoveButton = q(productElement, " button[type=button][aria-label='Close minicart'].text-black.transition-colors.hover\\:text-hnleb0 ");
            productRemoveButton?.click();
        } else {
            const { productId, sku, measurementUnit } = getSideCartProductData(productElement);
            debouncedUpdateQuantity({ productId, sku, measurementUnit, quantity });
        }
    }

    async function handleProductSideCartQuantityOnChange(e) {
        const currentTarget = e.currentTarget;
        const productElement = e.target.closest(".flex.items-start.p-3.space-x-4.transition.duration-150.ease-in-out.rounded-lg.hover\\:bg-gray-100");
        const productQuantityElement = q(productElement, "span[x-html='item.qty']");
        const quantity = +currentTarget.value;
        productQuantityElement.innerText = quantity;

        const isValid = checkInputValidity(currentTarget);

        if (!isValid) return;

        const { productId, sku, measurementUnit } = getSideCartProductData(productElement);
        debouncedUpdateQuantity({ productId, sku, measurementUnit, quantity });
    }

    function getProgressLayout() {
        return /* HTML */ `
            <div class="ab-subtotal-progress-container">
                <div class="ab-subtotal-progress-heading ab-subtotal-progress-heading__unlock-shipping">
                    <div class="ab-subtotal-progress-heading__icon">${ASSETS.truck_svg}</div>
                    <div class="ab-subtotal-progress-heading__text">Almost there! Unlock Free Shipping at $200!</div>
                </div>
                <div class="ab-subtotal-progress-heading ab-subtotal-progress-heading__free-shipping">
                    <div class="ab-subtotal-progress-heading__icon">${ASSETS.check_circle_svg}</div>
                    <div class="ab-subtotal-progress-heading__text">You’ve Earned Free Shipping!</div>
                </div>
                <div class="ab-subtotal-progress-bar">
                    <div class="ab-subtotal-progress-bar__progress"></div>
                </div>
                <div class="ab-subtotal-progress-prices">
                    <span class="ab-added-subtotal"></span>
                    <span>&nbsp;of&nbsp;</span>
                    <span>$200</span>
                </div>
            </div>
        `;
    }

    function getProductNewQuantityElement() {
        const div = document.createElement("div");
        div.className = "ab-product-quantity-container";
        div.innerHTML = /* HTML */ `
            <button type="button" class="ab-product-quantity-update-action ab-product-quantity-update-action__minus">${ASSETS.minus_svg}</button>
            <input
                name="qty"
                form="product_addtocart_form"
                type="number"
                pattern="[0-9]{0,10}"
                inputmode="numeric"
                min="0"
                max="1000000000"
                value="1"
                class="ab-product-quantity text-center   [appearance:textfield] [&amp;::-webkit-outer-spin-button]:appearance-none [&amp;::-webkit-inner-spin-button]:appearance-none"
            />
            <button type="button" class="ab-product-quantity-update-action ab-product-quantity-update-action__plus">${ASSETS.plus_svg}</button>
        `;

        div.addEventListener("click", handleProductSideCartQuantityUpdate);
        q(div, "input.ab-product-quantity").addEventListener("change", handleProductSideCartQuantityOnChange);

        return div;
    }

    async function createCarouselElement() {
        const carousel_data = await getSliderDataApi();

        const div = document.createElement("div");
        div.className = "ab-related-products ab-related-products--carousel";
        div.innerHTML = /* HTML */ `
            <div class="ab-related-products__card-container">
                ${carousel_data
                    .map(
                        ({ id, name, url, sku, image, price }) => /* HTML */ `
                            <div class="ab-related-product ab-related-product__card">
                                <a href="${url}" class="ab-related-product__img">
                                    <img src="${image}" alt="${name}" />
                                </a>
                                <a href="${url}" class="ab-related-product__title">${name}</a>
                                <div class="ab-related-product__price">${price}</div>
                            </div>
                        `
                    )
                    .join("")}
            </div>

            <button class="ab-carousel-btn ab-carousel-btn--prev disabled" aria-label="Previous products">${ASSETS.slider_prev_svg}</button>
            <button class="ab-carousel-btn ab-carousel-btn--next disabled" aria-label="Next products">${ASSETS.slider_next_svg}</button>
        `;

        return div;
    }

    async function insertAndInitializeCarousel(position, targetNode) {
        const carouselContainer = await createCarouselElement();
        targetNode.insertAdjacentElement(position, carouselContainer);
        const carousel = new ProductCarousel(carouselContainer);
        STATE["carousel_instances"].push(carousel);

        return carousel;
    }

    function destroyCarouselInstances() {
        STATE["carousel_instances"]?.forEach((carousel) => carousel.destroy());
        STATE["carousel_instances"] = [];
    }

    async function addOrUpdateRelatedProductCarousel(sideCart) {
        destroyCarouselInstances();
        const relatedProductContainerElement = q(sideCart, ".ab-related-products-container");
        if (!relatedProductContainerElement) return;
        insertAndInitializeCarousel("beforeend", relatedProductContainerElement);
    }

    function getRelatedProductsElement() {
        const div = document.createElement("div");

        div.className = "ab-related-products-container"; /* add when carousel initialized:  ab-related-products-carousel-initialized */
        div.innerHTML = /* HTML */ `
            <p class="ab-related-products-heading text-lg font-medium leading-7 text-gray-900">
                <strong>Pairs Well With</strong>
            </p>
            <div class="ab-related-products-skeleton-loader">
                ${Array.from({ length: 3 })
                    .map(
                        () => /* HTML */ `
                            <div class="ab-related-products-skeleton-loader__card">
                                <div class="ab-related-products-skeleton-loader__img"></div>
                                <div class="ab-related-products-skeleton-loader__title ab-related-products-skeleton-loader__title--first"></div>
                                <div class="ab-related-products-skeleton-loader__title ab-related-products-skeleton-loader__title--second"></div>
                                <div class="ab-related-products-skeleton-loader__price"></div>
                            </div>
                        `
                    )
                    .join("")}
            </div>
        `;

        return div;
    }

    function updateProgressSection(sideCart) {
        const subTotalSelector = "span[x-html='cart\\.subtotal'] .price";

        if (!q(sideCart, subTotalSelector)) return;

        const subTotalTxt = q(sideCart, subTotalSelector)?.innerText;
        const subTotal = +subTotalTxt.replace("$", "").replace(",", "");

        const subTotalProgressContainer = q(sideCart, ".ab-subtotal-progress-container");
        const abAddedSubtotal = q(sideCart, ".ab-added-subtotal");
        const abProgressBar = q(sideCart, ".ab-subtotal-progress-bar__progress");

        if (abAddedSubtotal.innerText === subTotalTxt) return;

        if (subTotal >= 200) {
            subTotalProgressContainer.classList.add("ab-subtotal-progress-container__free-shipping");
        } else {
            subTotalProgressContainer.classList.remove("ab-subtotal-progress-container__free-shipping");
        }

        abAddedSubtotal.innerText = subTotalTxt;
        const calculatedPercentage = (subTotal / 200) * 100;

        abProgressBar.style.width = `${calculatedPercentage >= 100 ? 100 : calculatedPercentage}%`;
    }

    function updateProductElements(sideCart) {
        const productList = qq(sideCart, ".flex.items-start.p-3.space-x-4.transition.duration-150.ease-in-out.rounded-lg.hover\\:bg-gray-100");
        productList.forEach((productElement) => {
            const priceElement = q(productElement, '.w-3\\/4.space-y-2 > p > span[x-html*="$"]');
            const productSkuElement = q(productElement, 'p.text-sm span[x-html="item\\.product_sku"]');
            const productQuantityElement = q(productElement, 'span[x-html="item.qty"]');
            const productOptionsElements = qq(productElement, "div[x-show='showOption(option)']");

            // Relocate Price Element
            if (priceElement && productSkuElement) {
                const productSkuParentElement = productSkuElement.parentNode;
                productSkuParentElement.classList.add("ab-product-sku-price-container");

                const priceParentElement = priceElement.parentNode;
                priceParentElement.classList.add("ab-price-container");

                productSkuParentElement.appendChild(priceParentElement);
            }

            // Create product quantity input
            if (!q(productElement, ".ab-product-quantity-container")) {
                const div = getProductNewQuantityElement();
                productQuantityElement.parentNode.insertAdjacentElement("afterend", div);
            }

            // Create Options Container & Append Options
            if (!q(productElement, ".ab-product-options-container") && productOptionsElements.length > 0) {
                const div = document.createElement("div");
                div.className = "ab-product-options-container";
                productOptionsElements.forEach((optionElement) => div.appendChild(optionElement));
                productQuantityElement.parentNode.insertAdjacentElement("afterend", div);
            }

            // Update Product Quantity New elements
            const productQuantityInput = q(productElement, ".ab-product-quantity");
            if (productQuantityInput && +productQuantityInput.value !== +productQuantityElement.innerText) {
                productQuantityInput.value = +productQuantityElement.innerText;
            }
        });
    }

    function insertElementsInStickySection(sideCart) {
        const checkoutButtonSelector = " a[href='https://www.hookandloop.com/checkout/']";
        const checkoutButton = q(sideCart, checkoutButtonSelector);

        if (!checkoutButton) return;

        // Add Continue Shopping
        if (!q(sideCart, ".ab-continue-shopping-btn")) {
            const button = document.createElement("button");
            button.className = "ab-continue-shopping-btn";
            button.innerText = "Continue Shopping";
            const sideCartCloseBtn = q(sideCart, "button.absolute.top-0.right-2.p-4.mt-2.text-black.transition-colors[aria-label='Close minicart']");
            button.addEventListener("click", (e) => sideCartCloseBtn.click());
            checkoutButton.insertAdjacentElement("beforebegin", button);
        }

        // Add Progress Bar
        if (!q(sideCart, ".ab-subtotal-progress-container")) {
            const htmlLayout = getProgressLayout();
            checkoutButton.parentNode.insertAdjacentHTML("beforebegin", htmlLayout);
        }
    }

    function getCurrentlyAddedProducts(sideCart) {
        const current_added_products = qq(sideCart, ".flex.items-start.p-3.space-x-4.transition.duration-150.ease-in-out.rounded-lg.hover\\:bg-gray-100")?.reduce(
            (acc, productElement) => {
                const { productId, sku, measurementUnit, url } = getSideCartProductData(productElement);
                acc.push({ productId, sku, measurementUnit, url });
                return acc;
            },
            []
        );

        return current_added_products;
    }

    function updateSideCartState(sideCart) {
        let sideCartStateUpdated = false;

        const previousData = STATE["added_products"];
        const currentData = getCurrentlyAddedProducts(sideCart);

        if (previousData.length !== currentData.length) {
            STATE["added_products"] = currentData;
            sideCartStateUpdated = true;
        }

        return sideCartStateUpdated;
    }

    async function updateProductContainer(sideCart) {
        const productLocatorItemSelector = "template[x-for='item in cartItems']";
        const productContainer = q(sideCart, productLocatorItemSelector)?.parentNode;
        const sideCartStateUpdated = updateSideCartState(sideCart);

        if (!productContainer) return;

        let sectionContainer = q(sideCart, ".ab-product-section-container") || null;

        // Create Wrapper Section
        if (!sectionContainer) {
            sectionContainer = document.createElement("div");
            sectionContainer.className = "ab-product-section-container";
            productContainer.insertAdjacentElement("afterend", sectionContainer);
        }

        // Insert Product Items
        if (!q(sectionContainer, ".relative.grid.gap-6.sm\\:gap-8.px-1.py-3.sm\\:px-3.bg-white.border-b.border-container.overflow-y-auto.overscroll-y-contain")) {
            sectionContainer.insertAdjacentElement("afterbegin", productContainer);
        }

        // Create, Insert Related Product Section
        if (!q(sectionContainer, ".ab-related-products-container")) {
            const relatedProductContainerElement = getRelatedProductsElement();
            sectionContainer.insertAdjacentElement("beforeend", relatedProductContainerElement);
        }

        //  Update Data Destroy & Add Slider
        if (sideCartStateUpdated) {
            await updatePairsWellWithProductsApi();
            // State change in the carousel affects only one instance / #cart-drawer; other instances remain unchanged, causing the side card to stay outdated.
            qq("#cart-drawer").forEach((cSideCart) => addOrUpdateRelatedProductCarousel(cSideCart));
        }
    }

    function removeItemsOnCartEmpty(sideCart) {
        const productLocatorItemSelector = "template[x-for='item in cartItems']";
        const productContainer = q(sideCart, productLocatorItemSelector)?.parentNode;

        if (productContainer) return;

        destroyCarouselInstances();

        qq(".ab-product-section-container, ab-subtotal-progress-container, .ab-continue-shopping-btn").forEach((elem) => elem.remove());
    }

    async function updateSideCartLayout() {
        qq("#cart-drawer").forEach((sideCart) => {
            
            // Remove Items when side cart is empty
            removeItemsOnCartEmpty(sideCart);

            // Put all added products in a container & add slider
            updateProductContainer(sideCart);

            // Insert Layouts in sticky section
            insertElementsInStickySection(sideCart);

            // Update Progress Bar
            updateProgressSection(sideCart);

            // Update Product Items
            updateProductElements(sideCart);

            console.log("mutation completed all side cart elements updated...");
        });
    }

    function mutationObserverFunction() {
        const targetNode = q("#cart-drawer");
        const debouncedUpdate = debounce(updateSideCartLayout, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    function checkPDPAddToCartFormValidity() {
        if (q(" button#custom_strap_atc") && q(" button#custom_strap_atc:not(disabled)")) return true;
        const form = q("form#product_addtocart_form");
        const input = q(".product-info-main input[name='qty']");
        const isValid = checkInputValidity(input) && qq(form, `span.font-bold[x-text^="pdpAttrValidationerrors"]:not(:empty)`).length === 0;

        return isValid;
    }

    async function handlePDPAddToCart() {
        const selector = "button[type='submit'][form='product_addtocart_form'], button#custom_strap_atc";
        await waitForElementAsync(() => qq(selector).length > 0);

        qq(selector).forEach((elem) =>
            elem.addEventListener("click", async (e) => {
                /* delaying 150ms */
                let timer = 0;
                await waitForElementAsync(() => timer++ >= 1);

                const isValid = checkPDPAddToCartFormValidity();

                if (!isValid) return;

                await waitForElementAsync(() => !q("body .loader"));

                q("button#menu-cart-icon")?.click();
            })
        );
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        updateRecentlyViewedProductsApi();
        handlePDPAddToCart();
        mutationObserverFunction();
    }

    function requiredItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && q("button#menu-cart-icon") && q("#cart-drawer") && document.cookie);
    }

    try {
        await waitForElementAsync(requiredItems);
        init();
    } catch (error) {
        console.warn(error);
    }
})();
