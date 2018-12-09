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

	function slideHomeGallery(){

		let $item = $('.home-gallery__img');
		let $prev = $('.home-gallery__prev');
		let $next = $('.home-gallery__next');
		
		$item.first().addClass('current');

		let index = $item.filter('.current').index();
		let $prevImg = $item.eq(index - 1).css('background-image');
		$prev.css('background-image', $prevImg);
		let $nextImg = $item.eq(index + 1).css('background-image');
		$next.css('background-image', $nextImg);
	
		$prev.click(function(){

			let index = $item.filter('.current').index();
	
			if(index === 0){
				index = $item.length;
			}
	
			$item.eq(index - 1).addClass('current').siblings().removeClass('current');

			index = $item.filter('.current').index();
			let $prevImg = $item.eq(index - 1).css('background-image');
			$prev.css('background-image', $prevImg);
			let $nextImg = $item.eq(index + 1).css('background-image');
			$next.css('background-image', $nextImg);

		});

		$next.click(function(){

			let index = $item.filter('.current').index();
	
			if(index === $item.length - 1){
				index = -1;
			}
	
			$item.eq(index + 1).addClass('current').siblings().removeClass('current');

			index = $item.filter('.current').index();
			let $prevImg = $item.eq(index - 1).css('background-image');
			$prev.css('background-image', $prevImg);
			let $nextImg = $item.eq(index + 1).css('background-image');
			$next.css('background-image', $nextImg);
			
		});

	}

	slideHomeGallery();

});
