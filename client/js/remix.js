$(document).ready(function() {
	$(".button-collapse").sideNav();

	// ...> Para mostrar le modal de que tu mensaje fue enviado 
	function modal_send_information(){
		swal({
			title: 'Genial!',
			text: 'Gracias a ti, estamos llevando la música electrónica a todo Latinoamérica',
			type: 'success',
			confirmButtonText: 'Ok'
		});
	}

	var row_remix_data = document.querySelector('.row-remix-data');
	var button_recommend_remix = document.querySelector('.button-recommend-remix');
	var button_send_information = document.querySelector('.button-send-information');

	button_recommend_remix.addEventListener('click', function(){
		row_remix_data.classList.add('display-block');
	});

	button_send_information.addEventListener('click', function(){
		modal_send_information();
		row_remix_data.classList.remove('display-block');
	});
	// ...... <

	var remix = document.querySelectorAll('#remix');
	var icons_play_pause = document.querySelectorAll('.icons-play-pause');

	var playList = [0,0,0,0,0,0];

	function verify_completion_remix(lugar){
		var verify_remix = setInterval(function(){
			if( remix[lugar].ended ){
				remix[lugar].pause();
				if(lugar === (playList.length - 1)){
					lugar = 0;
					remix[lugar].play();
					console.log('voy a reproducir la primera cancion');
					console.log(lugar);
					playList[playList.length - 1] = 0;
					playList[lugar] = 1;
				}else{
					remix[lugar+1].play();
					playList[playList.length - 1] = 0;
					console.log('Estoy reproduciendo cualqueir cancion menos la prime');
					playList[lugar] = 0;
					playList[lugar+1] = 1;
				}
				clearInterval(verify_remix);
				console.log('Ya termino' + ' remix ' + lugar);
				console.log(playList);
				updateStatus(lugar);
			}else{
				console.log('Todavia no termina' + ' remix ' + lugar);
				console.log(playList);
			}
		}, 1000);
	}

	function updateStatus(){
		console.log(playList);
		for(var i = 0; i < playList.length; i++) {
			if (playList[i] === 0) {
				remix[i].pause();
				icons_play_pause[i].classList.remove('icon-pause');
				icons_play_pause[i].classList.add('icon-play');
				console.log('Esta cancion esta en pausa');

			}else if (playList[i] === 1){
				remix[i].play();
				icons_play_pause[i].classList.remove('icon-play');
				icons_play_pause[i].classList.add('icon-pause');
				console.log('Esta cancion esta en play');
				verify_completion_remix(i);
			}
		}
	}

	function updateValues(position){
		for(var i = 0; i < playList.length; i++) {
			if (i === position) {
				playList[i] = 1;
			} else {
				playList[i] = 0;
			}
		}
	}

	function updateValuesPause(){
		for(var i = 0; i < playList.length; i++) {
			playList[i] = 0;
		}
	}

	function play(posicion) {
		return function() {
			if (playList[posicion] === 0) {
				playList[posicion] = 1;
				updateValues(posicion);
				updateStatus();
			}else if(playList[posicion] === 1){
				playList[posicion] = 0;
				updateValuesPause();
				updateStatus();
				verify_completion_remix(posicion);
			}
		};
	}

	for (var a = 0; a < playList.length; a++) {
		icons_play_pause[a].addEventListener('click', play(a));
	}


	var icon_like_dislike = document.querySelectorAll('.icon-like-dislike');

	function stateLikeDislike(position){
		for(var c = 0; c < playList.length*2; c++){
			if(position === c*2){
				icon_like_dislike[position+1].classList.remove('like-dislike-selected');
			}else{
				icon_like_dislike[position-1].classList.remove('like-dislike-selected');
			}
		}
	}

	function vote(position){
		return function(){
			icon_like_dislike[position].classList.toggle('like-dislike-selected');
			console.log(position);   
			stateLikeDislike(position);
		};
	}

	for(var b = 0; b < playList.length*2; b++){
		icon_like_dislike[b].addEventListener('click', vote(b));
	}

});