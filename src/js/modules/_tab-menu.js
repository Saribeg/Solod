// function tabMenu() {
//     let widthDoc = $('body').outerWidth();
//     let countMenu = $('.tab-menu__item').length;
//     let lenghtMenu = countMenu * 189;
//     let moveDiffDesc = 0;
//     let moveDiffMobile = 0;
//     let moveCountMobile = 0;
//     let countClick = 0;
//
//     let widthTable = 0;
//
//     function moveLeftDesc() {
//         moveDiffDesc++;
//         $(".tab-menu__list").animate({left: (189 * moveDiffDesc) + "px"}, 500);
//         $('#tab-menu__btn_right_draw').fadeIn();
//         if (moveDiffDesc == 0) {
//             $('#tab-menu__btn_left_draw').fadeOut();
//             $('.tab-menu__list_wrapper').attr('style', 'left: 0px; width:' + (widthTable - 190) + 'px;');
//         } else {
//             $('.tab-menu__list_wrapper').attr('style', 'left: 189px; width:' + (widthTable - 380) + 'px;');
//         }
//
//
//     }
//
//     function moveRightDesc() {
//
//         moveDiffDesc--;
//         $('.tab-menu__list_wrapper').attr('style', 'left: 189px; width:' + (widthTable - 380) + 'px;');
//         $(".tab-menu__list").animate({left: (189 * moveDiffDesc) + "px"}, 500);
//         $('#tab-menu__btn_left_draw').show();
//         if ((lenghtMenu - widthTable + 189 * (moveDiffDesc + 1)) < 0) {
//             $('#tab-menu__btn_right_draw').hide();
//             $('.tab-menu__list_wrapper').attr('style', 'left: 189px; width:' + (widthTable - 190) + 'px;');
//         }
//
//     }
//
//     function moveLeftMobile() {
//         if (moveCountMobile > 0) {
//             moveDiffMobile++;
//             moveCountMobile--;
//             $(".tab-menu__list").animate({left: (189 * moveDiffMobile) + "px"}, 500);
//             $(".tab-menu__list li").removeClass("tab-menu__item_active");
//             $(".tab-menu__table .tab-menu__menu").removeClass("tab-menu__menu_active");
//             $(".tab-menu__list li:eq(" + moveCountMobile + ")").addClass("tab-menu__item_active");
//             $(".tab-menu__table .tab-menu__menu:eq(" + moveCountMobile + ")").addClass("tab-menu__menu_active");
//         }
//     }
//
//
//     function moveRightMobile() {
//         if (moveCountMobile < countMenu - 1) {
//             moveDiffMobile--;
//             moveCountMobile++;
//
//             $(".tab-menu__list").animate({left: (189 * moveDiffMobile) + "px"}, 500);
//             $(".tab-menu__list li").removeClass("tab-menu__item_active");
//             $(".tab-menu__table .tab-menu__menu").removeClass("tab-menu__menu_active");
//             $(".tab-menu__list li:eq(" + moveCountMobile + ")").addClass("tab-menu__item_active");
//             $(".tab-menu__table .tab-menu__menu:eq(" + moveCountMobile + ")").addClass("tab-menu__menu_active");
//         }
//     }
//
//
//     function runDesctop() {
//
//         widthTable = $('.tab-menu__table').outerWidth();
//
//         $('.tab-menu__arrow_right_draw').attr('style', 'width:189px;');
//         $('.tab-menu__arrow_left_draw').attr('style', 'width: 189px;');
//
//         $('.tab-menu__tabs').attr('style', 'width:' + (widthTable) + 'px;');
//
//         $('#tab-menu__btn_left_draw').hide();
//
//         if (lenghtMenu < widthTable) {
//             $('#tab-menu__btn_right_draw').hide();
//             $('.tab-menu__list_wrapper').attr('style', 'width:' + (widthTable) + 'px;');
//
//         } else {
//
//             $('#tab-menu__btn_right_draw').show();
//             $('.tab-menu__list_wrapper').attr('style', 'width:' + (widthTable - 190) + 'px;');
//
//         }
//         let heightMenu = $('.tab-menu__menu.tab-menu__menu_active').height;
//
//         $('.tab-menu__table').attr('style', 'height:' + (heightMenu + 100) + 'px;');
//         $(".tab-menu__list li").each(function (i) {
//
//             $(".tab-menu__list li:eq(" + i + ") a").click(function () {
//                 $(".tab-menu__list li").removeClass("tab-menu__item_active");
//                 $(".tab-menu__table .tab-menu__menu").removeClass("tab-menu__menu_active");
//                 // console.log(i);
//                 $(".tab-menu__list li:eq(" + i + ")").addClass("tab-menu__item_active");
//                 $(".tab-menu__table .tab-menu__menu:eq(" + i + ")").addClass("tab-menu__menu_active");
//
//             });
//         });
//
//     }
//
//     function runMobile() {
//         moveDiffMobile = 0;
//         moveCountMobile = 0;
//         let widthTable = $('.tab-menu__table').outerWidth();
//         let widthItem = (widthTable - 185) / 2;
//         $('.tab-menu__tabs').attr('style', 'width:' + (widthTable) + 'px;');
//         $('.tab-menu__arrow_left_draw').attr('style', 'width:' + (widthItem) + 'px;');
//         $('.tab-menu__list_wrapper').attr('style', 'width: 185px;');
//         $('.tab-menu__arrow_right_draw').attr('style', 'width:' + (widthItem) + 'px;');
//         $('.tab-menu__item').attr('style', 'width: 185px;');
//         let heightMenu = $('.tab-menu__menu.tab-menu__menu_active').height();
//         $('.tab-menu__table').attr('style', 'max-height:' + (heightMenu + 100) + 'px;');
//
//     }
//
//
//     if (widthDoc > 480) {
//         runDesctop();
//     } else {
//         runMobile();
//     }
//
//
//     $(window).on('resize', function () {
//         widthDoc = $('body').outerWidth();
//         moveDiffDesc = 0;
//         moveDiffMobile = 0;
//         moveCountMobile = 0;
//         $(".tab-menu__list").attr('style', 'left: 0px;');
//         if (widthDoc > 480) {
//             runDesctop();
//         } else {
//             runMobile();
//         }
//     });
//
//
//     $('#tab-menu__btn_left_draw').click(function () {
//         if (widthDoc > 480) {
//             moveLeftDesc();
//
//         } else {
//             moveLeftMobile();
//         }
//     });
//
//
//     $('#tab-menu__btn_right_draw').click(function () {
//         if (widthDoc > 480) {
//             moveRightDesc();
//         } else {
//             moveRightMobile();
//         }
//     })
//
//
//     $(".tab-menu__menu").on("swipeleft", function () {
//         if (widthDoc > 480) {
//         } else {
//             moveRightMobile();
//         }
//     });
//
//
//     $(".tab-menu__menu").on("swiperight", function () {
//         if (widthDoc > 480) {
//         } else {
//             moveLeftMobile();
//         }
//     });
//
// }

/**********************************************************/
/**********************************************************/

/**
 * @license
 * htemplates.com
 * MIT license
 */

(function ($) {
	'use strict';
	/**
	 * save to storage
	 * @param {Object} options
	 * @param {string} tabName
	 */
	
	var saveToStorage = function saveToStorage(options, tabName) {
		switch (options.storage) {
			case 'cookies':
			{
				var cValue = encodeURI(tabName),
					exdate = new Date();
				
				if (options.cookiesExp === -1) {
					document.cookie = options.storageName + '=' + cValue + ';path=/;';
				} else {
					exdate.setDate(exdate.getDate() + options.cookiesExp);
					document.cookie = options.storageName + '=' + cValue + ';path=/; expires=' + exdate.toUTCString();
				}
				
				break;
			}
			
			case 'localstorage':
			{
				localStorage.setItem(options.storageName, tabName);
				break;
			}
		}
	};
	/**
	 * get data from storage
	 * @param {Object} options
	 * @return {string} tabName
	 */
	
	
	var getFromStorage = function getFromStorage(options) {
		var tabName = '';
		
		switch (options.storage) {
			case 'cookies':
			{
				var cookies = document.cookie.split(';');
				
				for (var i = 0; i < cookies.length; i++) {
					var x = cookies[i].substr(0, cookies[i].indexOf('='));
					var y = cookies[i].substr(cookies[i].indexOf('=') + 1);
					x = x.replace(/^\s+|\s+$/g, '');
					
					if (x === options.storageName) {
						tabName = decodeURI(y);
					}
				}
				
				break;
			}
			
			case 'localstorage':
			{
				tabName = localStorage.getItem(options.storageName);
				break;
			}
		}
		
		return tabName;
	};
	/**
	 * open tab
	 * @param {Object} context
	 * @param {jQueryObject} $li
	 */
	
	
	var openTab = function openTab(context, $li) {
		var tabName, $tab, name;
		name = $li.attr('data-name');
		
		if (name) {
			context.$liList.removeClass('jtabs-current');
			context.$liListIphone.removeClass('jtabs-current');
			
			for (var i = 0; i < context.$tabs.length; i++) {
				$tab = context.$tabs.eq(i);
				tabName = $tab.attr('data-name');
				
				if (name === tabName) {
					$tab.show();
					context.$liList.filter('[data-name="' + tabName + '"]').addClass('jtabs-current');
					context.$liListIphone.filter('[data-name="' + tabName + '"]').addClass('jtabs-current');
				} else {
					$tab.hide();
				}
			} //save selected tab to the storage
			
			
			saveToStorage(context.options, name); //callback
			
			if ($.isFunction(context.options.callback)) {
				context.options.callback(name);
			} //deel links
			
			
			if (context.options.deepLinks) {
				replaceHash(context, name);
			}
		} else {
			context.$liList.removeClass('jtabs-current');
		}
		
		$('.jtabs-iphone-menu-title')[0].innerHTML = $('.jtabs-current')[0].innerText;
	};
	/**
	 * init events
	 * @param {Object} context
	 * @param {jQueryElement} $box
	 */
	
	
	var initEvents = function initEvents(context, $box) {
		context.$liList.on('click', function () {
			openTab(context, $(this));
		});
		context.$liListIphone.on('click', function () {
			openTab(context, $(this));
		});
		$box.find('.jtabs-iphone-menu').on('click', function () {
			context.$ulIphone.toggleClass('jtabs-show');
			context.$ulIphone.css({
				top: $box.find('.jtabs-iphone-menu-title').outerHeight(true)
			});
		});
	};
	/**
	 * restore data from storage
	 * @param {Object} context
	 * @param {Object} options - user options
	 */
	
	
	var restore = function restore(context, options) {
		var savedTabName = getFromStorage(options);
		
		if ($.trim(savedTabName)) {
			openTab(context, context.$liList.filter('[data-name=' + savedTabName + ']'));
		} else {
			openTab(context, context.$liList.eq(0));
		}
	};
	/**
	 * replace hash in url
	 * @param {string} hash - new hash
	 */
	
	
	var replaceHash = function replaceHash(context, hash) {
		var link;
		
		if (context.options.anchorHistory) {
			window.location.hash = hash;
		} else {
			link = window.location.href;
			
			if (link.indexOf('#') !== -1) {
				link = link.replace(/#.*/, '');
			}
			
			if (hash) {
				window.location.replace(link + '#' + hash);
			} else {
				window.location.replace(link + '#');
			}
		}
	};
	/**
	 * jump to tab by anchor in query string (if 'anchor' option is true)
	 * @param {Object} context
	 */
	
	
	var initDeepLinks = function initDeepLinks(context) {
		var hash = window.location.hash,
			$liList; //get hash
		
		hash = $.trim(hash.replace('#', ''));
		
		if (hash) {
			//find the li
			$liList = context.$liList.filter('[data-name="' + hash + '"]').eq(0);
			
			if ($liList.length > 0) {
				//open the tab
				openTab(context, $liList);
			}
		} else {
			//open first tab
			openTab(context, context.$liList.eq(0));
		}
	};
	/**
	 * init iphone
	 * @param {Object} context
	 * @param {jQueryObject} $tabsNav
	 */
	
	
	var initIphone = function initIphone(context, $tabsNav, currentActive) {
		context.$tabsNav.prepend('<div class="jtabs-iphone-menu"><div class="jtabs-iphone-menu-title">' + currentActive + '</div><ul class="jtabs-iphone-menu-ul">' + context.$ul.html() + '</ul></div>');
		context.$ulIphone = context.$tabsNav.find('.jtabs-iphone-menu-ul');
		context.$liListIphone = context.$ulIphone.children('li');
	};
	/**
	 * jtabs contructor
	 * @param {Object} context
	 * @param {Object} options
	 * @param {jQueryObject} $box - root element
	 */
	
	
	var init = function init(context, options, $box) {
		//navigation
		context.$tabsNav = $box.children('.jtabs-nav');
		context.$ul = context.$tabsNav.children('ul');
		context.$liList = context.$ul.children('li'); //tabs content
		
		context.$tabs = $box.children('.jtabs-content').children('.jtab'); //init iphone
		
		initIphone(context, context.$tabsNav, $('.jtabs-current').length ? $('.jtabs-current')[0].innerHTML : $('.tab-head-text')[0].innerHTML); //init events
		
		initEvents(context, $box);
		
		if (context.options.storage) {
			//restore saved plugin state from storage
			restore(context, options);
		} else {
			//init deep links
			if (context.options.deepLinks) {
				initDeepLinks(context);
			} else {
				//open first tab
				openTab(context, context.$liList.eq(0));
			}
		}
	};
	/**
	 * jQuery Tabs Plugin
	 */
	
	
	$.fn.jtabs = function (options) {
		return this.each(function () {
			var context = {
				$tabsNav: null,
				$tabs: null,
				$ul: null,
				$ulIphone: null,
				$liList: null,
				$liListIphone: null
			};
			context.options = $.extend({
				callback: null,
				//storage options
				storage: '',
				//cookies, localstorage
				storageName: 'jtabs',
				cookiesExp: -1,
				//in days
				//deep link options
				deepLinks: false
			}, options); //init tabs
			
			init(context, context.options, $(this)); //return api object
			
			$(this).data('jtabs', context);
		});
	};
})(jQuery);