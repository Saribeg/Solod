function _navMenu(){
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

	$(".nav-list li a").click(function(){
		$(".nav-list li a").each(function(){
			$(".nav-list li a").toggleClass("active");
		});
		$(".mobile-nav-menu__list").slideToggle("slow");
	});

	function windowSize(){
    if ($(window).width() >= '1440'){
			$(".nav-menu").css("margin-left", "calc((100% - 1440px)/2)");
    } else {
			$(".nav-menu").css("margin-left", "0");
		}
	}

	$(window).on('load resize', windowSize);
}
