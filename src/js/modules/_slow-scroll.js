function slowScroll(id) {
    $(id).on("click", function (event) {
        console.log('click');
        event.preventDefault();
        let scrollTo = $(this).attr('href'),
            top = $(scrollTo).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
}