function mainPageMenu() {

    // Block Main page -> Small menu list

    function showMenuItems () {

        let randomArray = [];
        let randomValue = 0;

        for (let i = 0; i < numberOfShowItems; i++) {
            randomValue = Math.floor(Math.random() * countMenuElements);
            while (randomArray.indexOf(randomValue) > -1) {
                randomValue = Math.floor(Math.random() * countMenuElements);
            }
            randomArray[i] = randomValue;
        }


        $(".main-menu__item").each(function () {
            $(this).removeClass('main-menu__item_active');

        });

        for (let i = 0; i < numberOfShowItems; i++) {
            $('body')
                .find(".main-menu__items > div:eq(" + randomArray[i] + ")")
                .addClass("main-menu__item_active");
            let tmp = $(".main-menu__items > div:eq(" + randomArray[i] + ")");
            let widthMainMenuItem = tmp.outerWidth();
            tmp.attr('style', 'height: ' + widthMainMenuItem + 'px');

        }

    }

    let countMenuElements = $(".main-menu__items > div").length;
    console.log(countMenuElements);
    console.log($('body').outerWidth());
    let numberOfShowItems = 0;

    if ($('.main-menu__items').outerWidth() > 980) {
        numberOfShowItems = 4;

    } else {
        numberOfShowItems = 3;

    }


    showMenuItems();

    setInterval(showMenuItems, 2000);

    $(window).on('resize', function () {

        $(".main-menu__item").each(function () {
            let widthMainMenuItem = $(document).find('.main-menu__item').outerWidth();
            let tmp = $(this);
            tmp.attr('style', 'height:' + widthMainMenuItem + 'px;');

        });

        if ($('.main-menu__items').outerWidth() > 980) {
            numberOfShowItems = 4;
            // showMenuItems();
        } else {
            numberOfShowItems = 3;
            // showMenuItems();
        }


    });
}