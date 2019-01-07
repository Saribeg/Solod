@@include('modules/_nav-menu.js');
@@include('modules/_slow-scroll.js');
@@include('modules/_reserve.js');
@@include('modules/_mainpage_menu.js');
@@include('modules/_slick-slider.js');
@@include('modules/_map-dark.js');

_navMenu();
slowScroll('#res-btn');
slowScroll('#smoke-btn');
slowScroll('#contacts-btn');
reserveBtn(false);
mainPageMenu();
$(slickSlider());
initMap();