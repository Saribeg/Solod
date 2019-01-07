function reserveBtn(isAction) {
    $('#reserve-date').datepicker();
    $('#reserve-date-action').datepicker();

    $('#reserve-date-white').datepicker();

    function showbtn(event) {
        $('#res-btn').removeClass('display-none');
    }

    $(document.body).on('click', showbtn);
}