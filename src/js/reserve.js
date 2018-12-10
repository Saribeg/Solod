//reserve-btn
let formmain = $('#reserve-main-click');
let form = $('#reserve-click');
let time = {
    hours: new Date().getHours() < 10 ? `0${new Date().getHours() + 2}` : `${new Date().getHours() + 2}`,
    minutes: new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes(),
};

$('#reserve-time')[0].defaultValue = `${time.hours}:${time.minutes}`;
$('#reserve-date')[0].valueAsDate = new Date();
$('#reserve-time-action')[0].defaultValue = `${time.hours}:${time.minutes}`;
$('#reserve-date-action')[0].valueAsDate = new Date();

function hideReserveBtn (event) {
    if (event.target.tagName === 'INPUT'){
        $('#res-btn').addClass('display-none');
    }
    event.stopPropagation();
}

formmain.on('click', hideReserveBtn);
form.on('click', hideReserveBtn);

function showbtn(event){
    $('#res-btn').removeClass('display-none');
}
$(document.body).on('click', showbtn);