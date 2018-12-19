function slickSlider() {
    $('.slick-carousel').slick({
        variableHeight: true,
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: '250px',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 980,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }]
    });

}