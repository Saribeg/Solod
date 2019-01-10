@@include('../modules/_nav-menu.js');
@@include('../modules/_reserve.js');
@@include('../modules/_slow-scroll.js');
@@include('../modules/_mainpage_menu.js');
@@include('../modules/_slick-slider.js');
@@include('../modules/_map-white.js');

_navMenu();
slowScroll('#res-btn');
slowScroll('#contacts-btn');
slowScroll('#contacts-btn-tab');
slowScroll('#contacts-btn-mob');
reserveBtn(false);
mainPageMenu();
$(slickSlider());
initWhiteMap();