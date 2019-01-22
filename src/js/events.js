@@include('modules/_nav-menu.js');
@@include('modules/_slow-scroll.js');
@@include('modules/_reserve.js');
@@include('modules/_map-dark.js');

_navMenu();
slowScroll('#res-btn');
slowScroll('#ev-res-btn');
slowScroll('#smoke-btn');
slowScroll('#smoke-btn-tab');
slowScroll('#smoke-btn-mob');
slowScroll('#contacts-btn');
slowScroll('#contacts-btn-tab');
slowScroll('#contacts-btn-mob');
reserveBtn(true);
initMap();