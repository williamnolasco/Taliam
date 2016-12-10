$(".button-collapse").sideNav();

var bajar = document.querySelectorAll('.icon-keyboard_arrow_down-o');
var cover_page_principal_container = document.querySelector('.cover-page-principal-container');

bajar[0].addEventListener('click', function bajando1(){
	//Las siguientes 3 lineas son codigo jQuery
	$('html, body').animate({
		scrollTop : $('.cover-page-remix-container').offset().top
	}, 1000);
});
bajar[1].addEventListener('click', function(){
	$('html, body').animate({
		scrollTop : $('.cover-page-new-songs-container').offset().top
	}, 1000);
});
bajar[2].addEventListener('click', function(){
	$('html, body').animate({
		scrollTop : $('.cover-page-unique-feature-container').offset().top
	}, 1000);
});
bajar[3].addEventListener('click', function(){
	$('html, body').animate({
		scrollTop : $('.cover-page-concierto-container').offset().top
	}, 1000);
});
bajar[4].addEventListener('click', function(){
	$('html, body').animate({
		scrollTop: $('.cover-page-message-final-container').offset().top
	}, 1000);
});
