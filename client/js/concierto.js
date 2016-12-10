$(".button-collapse").sideNav();
var button_send_information = document.querySelector('.button-send-information');
var row_concert_link = document.querySelector('.row-concert-link');
var button_warn = document.querySelector('.button-warn');

button_warn.addEventListener('click', function(){
	row_concert_link.classList.add('block');
});

function modal_send_information(){
	swal({
		title: 'Genial!',
		text: 'Gracias por pasarnos el datazo, ahora podemos divertirnos todos juntos!',
		type: 'success',
		confirmButtonText: 'OK'
	});
}

button_send_information.addEventListener('click', function(){
	modal_send_information();
	row_concert_link.classList.remove('block');
});