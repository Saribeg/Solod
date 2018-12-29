let modal = document.getElementById('myModal');
let img = document.querySelectorAll('.photo');
let modalImg = document.getElementById('img01');
let span = document.getElementsByClassName("close")[0];
let arr = [...img];

for(let i = 0; i < arr.length; i++){
	arr[i].onclick = function() {
		modal.style.display = "flex";
		modalImg.src = this.src;
	}
}

span.onclick = function() {
	modal.style.display='none';
}
