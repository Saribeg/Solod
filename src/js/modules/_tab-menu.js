function tabMenu() {
    let widthDoc = $('body').outerWidth();
    let countMenu = $('.tab-menu__item').length;
    let lenghtMenu = countMenu * 189;
    let moveDiffDesc = 0;
    let moveDiffMobile = 0;
    let moveCountMobile = 0;
    let countClick = 0;

    let widthTable = 0;

    function moveLeftDesc() {
        moveDiffDesc++;
        $(".tab-menu__list").animate({left: (189 * moveDiffDesc) + "px"}, 500);
        $('#tab-menu__btn_right_draw').fadeIn();
        if (moveDiffDesc == 0) {
            $('#tab-menu__btn_left_draw').fadeOut();
            $('.tab-menu__list_wrapper').attr('style', 'left: 0px; width:' + (widthTable - 190) + 'px;');
        } else {
            $('.tab-menu__list_wrapper').attr('style', 'left: 189px; width:' + (widthTable - 380) + 'px;');
        }


    }

    function moveRightDesc() {

        moveDiffDesc--;
        $('.tab-menu__list_wrapper').attr('style', 'left: 189px; width:' + (widthTable - 380) + 'px;');
        $(".tab-menu__list").animate({left: (189 * moveDiffDesc) + "px"}, 500);
        $('#tab-menu__btn_left_draw').show();
        if ((lenghtMenu - widthTable + 189 * (moveDiffDesc + 1)) < 0) {
            $('#tab-menu__btn_right_draw').hide();
            $('.tab-menu__list_wrapper').attr('style', 'left: 189px; width:' + (widthTable - 190) + 'px;');
        }

    }

    function moveLeftMobile() {
        if (moveCountMobile > 0) {
            moveDiffMobile++;
            moveCountMobile--;
            $(".tab-menu__list").animate({left: (189 * moveDiffMobile) + "px"}, 500);
            $(".tab-menu__list li").removeClass("tab-menu__item_active");
            $(".tab-menu__table .tab-menu__menu").removeClass("tab-menu__menu_active");
            $(".tab-menu__list li:eq(" + moveCountMobile + ")").addClass("tab-menu__item_active");
            $(".tab-menu__table .tab-menu__menu:eq(" + moveCountMobile + ")").addClass("tab-menu__menu_active");
        }
    }


    function moveRightMobile() {
        if (moveCountMobile < countMenu - 1) {
            moveDiffMobile--;
            moveCountMobile++;

            $(".tab-menu__list").animate({left: (189 * moveDiffMobile) + "px"}, 500);
            $(".tab-menu__list li").removeClass("tab-menu__item_active");
            $(".tab-menu__table .tab-menu__menu").removeClass("tab-menu__menu_active");
            $(".tab-menu__list li:eq(" + moveCountMobile + ")").addClass("tab-menu__item_active");
            $(".tab-menu__table .tab-menu__menu:eq(" + moveCountMobile + ")").addClass("tab-menu__menu_active");
        }
    }


    function runDesctop() {

        widthTable = $('.tab-menu__table').outerWidth();

        $('.tab-menu__arrow_right_draw').attr('style', 'width:189px;');
        $('.tab-menu__arrow_left_draw').attr('style', 'width: 189px;');

        $('.tab-menu__tabs').attr('style', 'width:' + (widthTable) + 'px;');

        $('#tab-menu__btn_left_draw').hide();

        if (lenghtMenu < widthTable) {
            $('#tab-menu__btn_right_draw').hide();
            $('.tab-menu__list_wrapper').attr('style', 'width:' + (widthTable) + 'px;');

        } else {

            $('#tab-menu__btn_right_draw').show();
            $('.tab-menu__list_wrapper').attr('style', 'width:' + (widthTable - 190) + 'px;');

        }
        let heightMenu = $('.tab-menu__menu.tab-menu__menu_active').height;

        $('.tab-menu__table').attr('style', 'height:' + (heightMenu + 100) + 'px;');
        $(".tab-menu__list li").each(function (i) {

            $(".tab-menu__list li:eq(" + i + ") a").click(function () {
                $(".tab-menu__list li").removeClass("tab-menu__item_active");
                $(".tab-menu__table .tab-menu__menu").removeClass("tab-menu__menu_active");
                // console.log(i);
                $(".tab-menu__list li:eq(" + i + ")").addClass("tab-menu__item_active");
                $(".tab-menu__table .tab-menu__menu:eq(" + i + ")").addClass("tab-menu__menu_active");

            });
        });

    }

    function runMobile() {
        moveDiffMobile = 0;
        moveCountMobile = 0;
        let widthTable = $('.tab-menu__table').outerWidth();
        let widthItem = (widthTable - 185) / 2;
        $('.tab-menu__tabs').attr('style', 'width:' + (widthTable) + 'px;');
        $('.tab-menu__arrow_left_draw').attr('style', 'width:' + (widthItem) + 'px;');
        $('.tab-menu__list_wrapper').attr('style', 'width: 185px;');
        $('.tab-menu__arrow_right_draw').attr('style', 'width:' + (widthItem) + 'px;');
        $('.tab-menu__item').attr('style', 'width: 185px;');
        let heightMenu = $('.tab-menu__menu.tab-menu__menu_active').height;
        $('.tab-menu__table').attr('style', 'max-height:' + (heightMenu + 100) + 'px;');

    }


    if (widthDoc > 480) {
        runDesctop();
    } else {
        runMobile();
    }


    $(window).on('resize', function () {
        widthDoc = $('body').outerWidth();
        moveDiffDesc = 0;
        moveDiffMobile = 0;
        moveCountMobile = 0;
        $(".tab-menu__list").attr('style', 'left: 0px;');
        if (widthDoc > 480) {
            runDesctop();
        } else {
            runMobile();
        }
    });


    $('#tab-menu__btn_left_draw').click(function () {
        if (widthDoc > 480) {
            moveLeftDesc();

        } else {
            moveLeftMobile();
        }
    });


    $('#tab-menu__btn_right_draw').click(function () {
        if (widthDoc > 480) {
            moveRightDesc();
        } else {
            moveRightMobile();
        }
    })


    $(".tab-menu__menu").on("swipeleft", function () {
        if (widthDoc > 480) {
        } else {
            moveRightMobile();
        }
    });


    $(".tab-menu__menu").on("swiperight", function () {
        if (widthDoc > 480) {
        } else {
            moveLeftMobile();
        }
    });

}