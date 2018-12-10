//reserve-btn
let formmain = document.getElementById('reserve-main-click');
let form = document.getElementById('reserve-click');

$('#reserve-date')[0].valueAsDate = new Date();

function hideReserveBtn (event) {
    if (event.target.tagName === 'INPUT'){
        document.getElementById('res-btn').classList.add('display-none');
    }
    event.stopPropagation();
}

formmain.addEventListener('click', hideReserveBtn);
form.addEventListener('click', hideReserveBtn);

function showbtn(){
    document.getElementById('res-btn').classList.remove('display-none');
}
document.body.addEventListener('click', showbtn, false);