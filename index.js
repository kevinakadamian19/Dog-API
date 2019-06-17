'use strict';



function numberOfDogs() {
	const searchUrl = 'https://dog.ceo/api/breeds/image/random';
	const url = SearchUrl + '/' + $('#search-number');
	return url;
}

function getDogImages() {
	fetch('https://dog.ceo/api/breeds/image/random/3')
	.then(response => response.json())
	.then(responseJson => displayDoggos(responseJson))
	.catch(error => alert('Something went wrong. Try again later.'));
}



function displayDoggos(responseJson) {
	console.log(responseJson);
	const generatedDoggo = responseJson.message;
	for (var i = 0; i >= generatedDoggo.length; i++) {
		$('.results').append(`<img src="${generatedDoggo[i]}">`)
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