document.head.insertAdjacentHTML('beforeend', `<meta name="viewport" content="width=device-width, initial-scale=1">`);

function waitForJqueryGlobal() {
    if (window.jQuery) {
        // TEST CHANGES
        //insert hamburger nav
        if ($('td#LeftColumnCell').length) {
            $('#Top_Wrapper').prepend(`
                <input class="menu-btn" type="checkbox" id="menu-btn" name="menu-btn" /> 
                <label class="menu-icon" for="menu-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                </label>
            `);

            //close menu on click
            document.addEventListener('click', (event) => {
                const menuCheckbox = document.querySelector('#menu-btn');

                // Check if the background overlay was clicked
                if (menuCheckbox.checked && !document.querySelector('#LeftColumnCell').contains(event.target) && !document.querySelector('#Top_Wrapper').contains(event.target)) {
                    menuCheckbox.checked = false; // Uncheck the menu toggle
                }
            });

            //insert cart in header
            $('#Top_Wrapper #leftlogo').after(`
                <div class="header-cart">
                    <a href="https://www.bestmaterials.com/shoppingcart.aspx">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                    </a>
                    <div class="cart-qty"></div>
                </div>
            `);
            setInterval(function () {
                if ($('#LeftColumnNav1_CartList1_lblCount').text()) {
                    if ($('.cart-qty').text() != $('#LeftColumnNav1_CartList1_lblCount').text()) {
                        $('.cart-qty').text($('#LeftColumnNav1_CartList1_lblCount').text());
                    }
                }
                else {
                    $('.cart-qty').addClass('hide');
                }
            }, 250);
        }

        //move buttons from search bar to footer
        if ($('#FooterCell').length) {
            if (!$('#FooterCell .search-buttons').length) {
                $('#FooterCell').prepend(`<div class="search-buttons"></div>`);
                $('#TopBanner_Navigation > a').each(function () {
                    $(this).clone().appendTo('#FooterCell .search-buttons');
                });
            }
        } else {
            $('#TopBanner_Navigation > a').hide();
        }
        
    } else {
        setTimeout(function () { waitForJqueryGlobal(); }, 50);
    }
}
waitForJqueryGlobal();

function waitForJqueryCart() {
    if (window.jQuery && $('img[src="images/buttons/remove.jpg"]').length) {
        //replace "remove" buttons in cart with X icons
        $('img[src="images/buttons/remove.jpg"]').each(function () {
            $(this).replaceWith('<div class="cart-remove"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg></div>');
        });

        //add class for styling of total row
        $('td#jdfonts').closest('tr').addClass('total-row');
        $('td#jdfonts').attr('colspan', '9');

    } else {
        setTimeout(function () { waitForJqueryCart(); }, 50);
    }
}
waitForJqueryCart();