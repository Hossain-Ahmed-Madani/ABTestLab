$(document).ready(function(){
    $('#slickSlider-21478').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
        lazyLoad: 'ondemand',
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});