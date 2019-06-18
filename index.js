'use strict';


function getDogImages() {
	let search = $('.search-number').val();
	fetch(`https://dog.ceo/api/breeds/image/random/${search}`)
	.then(response => response.json())
	.then(responseJson => displayDoggos(responseJson))
	.catch(error => alert('Something went wrong. Try again later.'));
}

function displayDoggos(responseJson) {
	console.log(responseJson);
	$('.doggo').remove();
	const messages = responseJson.message;
	for (var i = 0; i < messages.length; i++) {
		$('.container').append(`
			<section class="doggo">
				<img src="${messages[i]}">
			</section>`)
	}
	$('.results').removeClass('hidden');
}

function formSubmission() {
	$('form').submit(event => {
		event.preventDefault();
		getDogImages();
	});
}

function renderDoggos() {
	console.log('App is loaded. Waiting for doggos!');
	formSubmission();
}

renderDoggos();