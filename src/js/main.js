$(document).ready(function(){

	// Бургер-меню для мобильных устройств
	$(".mobile-nav-menu__burger").click(function(){
		$(".mobile-nav-menu__burger").toggleClass("burger_toggle");
		$(".mobile-nav-menu__list").slideToggle("slow");
	});

	// Бургер-меню для tablet устройств
	$(".tablet-nav-menu__burger").click(function(){
		$(".tablet-nav-menu__burger").toggleClass("burger_toggle");
		$(".tablet-nav-menu__list").toggleClass("tablet-nav-menu__list_show");
	});

	//Контроль активного пункта меню
	$(".nav-list li a").click(function(){
		$(".nav-list li a").each(function(){
			$(".nav-list li a").toggleClass("active");
		})
	});

	//При больших разрешениях (>1440px) смещаем меню так, чтобы был в котейнере не смотря на position: fixed

	function windowSize(){
    if ($(window).width() >= '1440'){
			$(".nav-menu").css("margin-left", "calc((100% - 1440px)/2)");
    } else {
			$(".nav-menu").css("margin-left", "0");
		}
	}

	$(window).on('load resize', windowSize);


	// Слайдер "Галерея" на главной странице

    $(function() {
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

    });

});
