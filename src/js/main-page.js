@@include('modules/_nav-menu.js');
@@include('modules/_reserve.js');
@@include('modules/_mainpage_menu.js');
@@include('modules/_slick-slider.js');
@@include('modules/_googlemap.js');

_navMenu();
reserveBtn(false);
mainPageMenu();
$(slickSlider());
initMap();