/*
	JQuery Gallery
*/

let $img = $('.all-event-photo > img'), //картинки
	$modal = $('.modal'),	// всплывающее окно по нажатию
	$main = $('.modal-content__main'), //картинка в модалке
	$prev = $('.modal-content__item-left'), // пред фото
	$next = $('.modal-content__item-right'), // след фото
	$close = $('.close'),	// крестик
	elemIndex,
	targetImg,
	arr = [];

$('.all-event-photo > img').each(function(i, elem){	//кешируем картинки
	arr[i] = new Image();
	arr[i].src = $(this).attr('src');
});

function replaceItem(src) {		//ф-я замены аттрибута
	$main.fadeOut(225, function() {
       $main.attr('src', src);
	}).fadeIn(225);
}

function getSrc(index){			//ф-я получения аттрибута
	return $img.eq(index).attr('src');
}

$img.click(function(){					//открытие вспл окна
	targetImg = $(this).attr('src');
	elemIndex = $(this).index();		//сохраняем индекс
	$main.attr('src', targetImg);
	$modal.css({"display":"flex"});
});

$close.click(function(){				//закрытие вспл окна
	$modal.hide("scale", {
		origin: ['middle','center']
	}, 300);
});

$next.click(function(){
	if(elemIndex+1 < $img.length) {
		targetImg = getSrc(elemIndex+1); //показываем след
		elemIndex++;				 //обновляем значение
	} else {
		targetImg = getSrc(0);
		elemIndex = 0;
	}
	replaceItem(targetImg);
});

$prev.click(function(){
	if(elemIndex > 0) {
		targetImg = getSrc(elemIndex-1);
		elemIndex--;
	} else {
		targetImg = getSrc($img.length-1);
		elemIndex = $img.length-1;
	}
	replaceItem(targetImg);
});
