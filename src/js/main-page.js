@@include('modules/_nav-menu.js');
@@include('modules/_slow-scroll.js');
@@include('modules/_reserve.js');
@@include('modules/_mainpage_menu.js');
@@include('modules/_slick-slider.js');
@@include('modules/_map-dark.js');

function anchorMain(btnId, href) {
    $(`${btnId.toString()}`)[0].href = href;
}

_navMenu();
slowScroll('#res-btn');
slowScroll('#main-ev-btn');
slowScroll('#smoke-btn');
slowScroll('#smoke-btn-tab');
slowScroll('#smoke-btn-mob');
slowScroll('#contacts-btn');
slowScroll('#contacts-btn-tab');
slowScroll('#contacts-btn-mob');
anchorMain('#smoke-btn', '#smoke');
anchorMain('#smoke-btn-tab', '#smoke');
anchorMain('#smoke-btn-mob', '#smoke');
reserveBtn(false);
mainPageMenu();
$(slickSlider());
initMap();