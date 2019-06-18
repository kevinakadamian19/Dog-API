'use strict';


function getDogImages() {
	let search = $('.search-number').val();
	fetch(`https://dog.ceo/api/breeds/image/random/${search}`)
	.then(response => response.json())
	.then(responseJson => displayDoggos(responseJson))
	.catch(error => alert('Something went wrong. Try again later.'));
}

function getSearchValue() {
	let search = $('.search-number').val();
	console.log(search);
	return search;
}

function displayDoggos(responseJson) {
	console.log(responseJson);
	const messages = responseJson.message;
	for (var i = 0; i < messages.length; i++) {
		$('.results').append(`<img src="${messages[i]}">`)
	}
	$('.results').removeClass('hidden');
}

function formSubmission() {
	$('form').submit(event => {
		event.preventDefault();
		getDogImages();
		getSearchValue();
	});
}

function renderDoggos() {
	console.log('App is loaded. Waiting for doggos!');
	formSubmission();
}

renderDoggos();