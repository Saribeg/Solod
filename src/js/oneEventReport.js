@@include('modules/_nav-menu.js');
@@include('modules/_slow-scroll.js');
@@include('modules/_reserve.js');
@@include('modules/_map-dark.js');
@@include('modules/_photoSlider.js');

_navMenu();
slowScroll('#res-btn');
slowScroll('#contacts-btn');
reserveBtn(true);
initMap();
