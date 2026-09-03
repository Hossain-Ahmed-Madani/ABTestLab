(function () {
    function loadResource(type, url) {
    return new Promise(function (resolve, reject) {
    var element;
    
    
    
            if (type === 'css') {
                element = document.createElement('link');
                element.rel = 'stylesheet';
                element.href = url;
            } else {
                element = document.createElement('script');
                element.src = url;
            }
            element.onload = resolve;
            element.onerror = reject;
            document.head.appendChild(element);
        });
    }
    function initReviewCarousel() {
        var reviewTemplate = document.querySelector('.review-template');
        if (!reviewTemplate) {
            return;
        }
        // Prevent duplicate initialization
        if (document.querySelector('.custom-review-carousel')) {
            return;
        }
        // Create carousel wrapper
        var carousel = document.createElement('div');
        carousel.className = 'custom-review-carousel owl-carousel';
        // Create slides
        var reviews = [
            {
                stars: '★★★★★',
                text: '2,300+ Google Reviews'
            },
            {
                stars: '★★★★★',
                text: 'Trusted by Thousands of Customers'
            },
            {
                stars: '★★★★★',
                text: 'Excellent Customer Service'
            }
        ];
        reviews.forEach(function (review) {
            var slide = document.createElement('div');
            slide.className = 'review-template';
            slide.innerHTML =
                '<span class="stars">' + review.stars + '</span>' +
                '<span class="review-text">' + review.text + '</span>';
            carousel.appendChild(slide);
        });
        // Replace the existing review template with the carousel
        reviewTemplate.parentNode.replaceChild(carousel, reviewTemplate);
        // Add styles
        var style = document.createElement('style');
        style.textContent = `
            .custom-review-carousel {
                width: 100%;
                text-align: center;
            }
            .custom-review-carousel .review-template {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                min-height: 30px;
            }
            .custom-review-carousel .stars {
                color: #f5b400;
                font-size: 18px;
                letter-spacing: 2px;
            }
            .custom-review-carousel .review-text {
                font-size: 14px;
            }
            .custom-review-carousel .owl-stage-outer {
                overflow: hidden;
            }
        `;
        document.head.appendChild(style);
        // Initialize Owl Carousel
        $('.custom-review-carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 8000,
            autoplayHoverPause: false,
            smartSpeed: 500,
            nav: false,
            dots: false,
            mouseDrag: false,
            touchDrag: false
        });
    }
    function start() {
        // jQuery is required by Owl Carousel
        if (typeof jQuery === 'undefined') {
            loadResource(
                'js',
                '<https://code.jquery.com/jquery-3.7.1.min.js'>
            ).then(function () {
                return loadResource(
                    'css',
                    '<https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css'>
                );
            }).then(function () {
                return loadResource(
                    'js',
                    '<https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js'>
                );
            }).then(function () {
                initReviewCarousel();
            }).catch(function (error) {
                console.error('Failed to load Owl Carousel:', error);
            });
            return;
        }
        // Load Owl CSS if needed
        var owlCss = document.querySelector(
            'link[href*="owl.carousel"]'
        );
        var cssPromise = owlCss
            ? Promise.resolve()
            : loadResource(
                'css',
                '<https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css'>
            );
        cssPromise.then(function () {
            // Owl already loaded
            if ($.fn.owlCarousel) {
                initReviewCarousel();
                return;
            }
            // Load Owl JS
            return loadResource(
                'js',
                '<https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js'>
            ).then(function () {
                initReviewCarousel();
            });
        }).catch(function (error) {
            console.error('Failed to initialize Owl Carousel:', error);
        });
    }
    // Wait until DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
    })();