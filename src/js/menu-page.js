@@include('modules/_nav-menu.js');
@@include('modules/_slow-scroll.js');
@@include('modules/_reserve.js');
@@include('modules/_tab-menu.js');
@@include('modules/_map-dark.js');

_navMenu();
slowScroll('#res-btn');
slowScroll('#contacts-btn');
slowScroll('#contacts-btn-tab');
slowScroll('#contacts-btn-mob');
reserveBtn(true);
tabMenu();
initMap();