function reserveBtn(isAction) {
    $('#reserve-date').datepicker();
    $('#reserve-date-action').datepicker();

    function showbtn(event) {
        $('#res-btn').removeClass('display-none');
    }

    $(document.body).on('click', showbtn);
}

function slowScroll(id) {
    $(`${id}`).on("click", function (event) {
        console.log(event.target);
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
}

$(document).ready(function () {
    slowScroll('#smoke-btn');
    slowScroll('#smoke-btn-tab');
    slowScroll('#smoke-btn-tmob');
    slowScroll('#res-btn');
    slowScroll('#contacts-btn');
    slowScroll('#contacts-btn-tab');
    slowScroll('#contacts-btn-mob');
});