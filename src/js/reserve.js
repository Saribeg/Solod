//reserve-btn
let formmain = $('#reserve-main-click');
let form = $('#reserve-click');

$('#reserve-date')[0].valueAsDate = new Date();

function hideReserveBtn (event) {
    if (event.target.tagName === 'INPUT'){
        $('#res-btn').addClass('display-none');
    }
    event.stopPropagation();
}

formmain.on('click', hideReserveBtn);
form.on('click', hideReserveBtn);

function showbtn(){
    $('#res-btn').removeClass('display-none');
}
$(document.body).on('click', showbtn);