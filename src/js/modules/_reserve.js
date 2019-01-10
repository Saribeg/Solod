function reserveBtn(isAction) {
    let dp = {
        closeText: "Закрити",
        prevText: "&#x3C;",
        nextText: "&#x3E;",
        currentText: "Сьогодні",
        monthNames: [ "Січень","Лютий","Березень","Квітень","Травень","Червень",
            "Липень","Серпень","Вересень","Жовтень","Листопад","Грудень" ],
        monthNamesShort: [ "Січ","Лют","Бер","Кві","Тра","Чер",
            "Лип","Сер","Вер","Жов","Лис","Гру" ],
        dayNames: [ "неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота" ],
        dayNamesShort: [ "нед","пнд","вів","срд","чтв","птн","сбт" ],
        dayNamesMin: [ "Нд","Пн","Вт","Ср","Чт","Пт","Сб" ],
        weekHeader: "Тиж",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: "" };
    $('#reserve-date').datepicker(dp);
    $('#reserve-date-action').datepicker(dp);

    $('#reserve-date-white').datepicker(dp);

    function showbtn(event) {
        $('#res-btn').removeClass('display-none');
    }

    $(document.body).on('click', showbtn);
}