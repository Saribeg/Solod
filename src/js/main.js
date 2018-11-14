$(document).ready(function(){
	// $(".mobile-nav-menu__list").hide();
	$(".burger").click(function(){
		$(".burger").toggleClass("burger_toggle");
		// $(".mobile-nav-menu__list").css("left", "0");
		$(".mobile-nav-menu__list").slideToggle("slow");
	});

});