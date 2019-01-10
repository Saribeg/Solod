@@include('../modules/_nav-menu.js');
@@include('../modules/_slow-scroll.js');
@@include('../modules/_reserve.js');
@@include('../modules/_map-white.js');
@@include('../modules/_tab-menu.js');

_navMenu();
slowScroll('#res-btn');
slowScroll('#contacts-btn');
reserveBtn(true);
tabMenu();
initWhiteMap();