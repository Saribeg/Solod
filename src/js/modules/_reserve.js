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


$(function() {
	$("#contact").submit(function(e) {
		
		let data = {
			name: $("#form_name").val(),
			message: `
   		 Бронь столика на сайте solod.bar
   		 Телефон: ${$('#form_phone').val()}
   		 Дата: ${$('#reserve-date').val()}
   		 Время: ${$('#reserve-time').val()}
   		 `
		};
		$.ajax({
			type: "POST",
			url: "assets/js/email.php",
			data: {...data},
			success: function(){
				alert(`Столик на имя ${$("#form_name").val()} , ${$('#reserve-date').val()} в ${$('#reserve-time').val()} - успешно забронирован`);
			}
		});
		
		return false;
	});
});