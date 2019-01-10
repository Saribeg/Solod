function slowScroll(id) {
    $(id.toString()).on("click", function (event) {
        console.log('click');
        event.preventDefault();
        $('.tablet-nav-menu__list').hide();
        $('.tablet-nav-menu__burger').toggleClass('burger_toggle');
        $('.mobile-nav-menu__list').fadeOut();
        $(".mobile-nav-menu__burger").toggleClass("burger_toggle");
        let scrollTo = $(this).attr('href'),
            top = $(scrollTo).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
}