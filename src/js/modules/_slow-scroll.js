function slowScroll(id) {
    $(id.toString()).on("click", function (event) {
        console.log('click');
        event.preventDefault();

        if($('.burger_toggle').length > 0) {
            $('.tablet-nav-menu__burger').removeClass('burger_toggle');
            $(".mobile-nav-menu__burger").removeClass("burger_toggle");
            $('.tablet-nav-menu__list').removeClass('tablet-nav-menu__list_show');
            $('.mobile-nav-menu__list').hide();
        }

        let scrollTo = $(this).attr('href'),
            top = $(scrollTo).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
}