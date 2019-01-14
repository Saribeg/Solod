@@include('modules/_nav-menu.js');
@@include('modules/_slow-scroll.js');
@@include('modules/_reserve.js');
@@include('modules/_tab-menu.js');
@@include('modules/_map-dark.js');

$('#my-tabs').jtabs({
    storage: 'localstorage'
});


_navMenu();
slowScroll('#res-btn');
slowScroll('#contacts-btn');
slowScroll('#contacts-btn-tab');
slowScroll('#contacts-btn-mob');
reserveBtn(true);
tabs();
initMap();