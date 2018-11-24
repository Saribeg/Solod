$(document).ready(function(){

	// Бургер-меню для мобильных устройств
	$(".burger").click(function(){
		$(".burger").toggleClass("burger_toggle");
		$(".mobile-nav-menu__list").slideToggle("slow");
	});

	// Слайдер "Галерея" на главной странице

	function slideHomeGallery(){

		var $item = $('.home-gallery__img');
		var $prev = $('.home-gallery__prev');
		var $next = $('.home-gallery__next');
		
		$item.first().addClass('current');

		var index = $item.filter('.current').index();
		var $prevImg = $item.eq(index - 1).css('background-image');
		$prev.css('background-image', $prevImg);
		var $nextImg = $item.eq(index + 1).css('background-image');
		$next.css('background-image', $nextImg);
	
		$prev.click(function(){

			var index = $item.filter('.current').index();
	
			if(index == 0){
				index = $item.length;
			}
	
			$item.eq(index - 1).addClass('current').siblings().removeClass('current');

			var index = $item.filter('.current').index();
			var $prevImg = $item.eq(index - 1).css('background-image');
			$prev.css('background-image', $prevImg);
			var $nextImg = $item.eq(index + 1).css('background-image');
			$next.css('background-image', $nextImg);

		});

		$next.click(function(){

			var index = $item.filter('.current').index();
	
			if(index == $item.length - 1){
				index = -1;
			}
	
			$item.eq(index + 1).addClass('current').siblings().removeClass('current');

			var index = $item.filter('.current').index();
			var $prevImg = $item.eq(index - 1).css('background-image');
			$prev.css('background-image', $prevImg);
			var $nextImg = $item.eq(index + 1).css('background-image');
			$next.css('background-image', $nextImg);
			
		});

	};

	slideHomeGallery();

});
