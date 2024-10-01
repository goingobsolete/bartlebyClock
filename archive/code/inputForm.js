let input;
let autocomplete;

function setup() {
	noCanvas();
	
	// Create an input element
	input = createInput();
	input.attribute('placeholder', 'Enter a city');
	input.position(20, 20);
	
	// Initialize Google Maps Autocomplete
	initAutocomplete();
}

function initAutocomplete() {
	// Load the Google Maps API script
	let script = createElement('script');
	script.attribute('src', 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=onLoad');
	script.attribute('async', '');
	script.attribute('defer', '');
	script.onerror = function() {
		console.error('Failed to load the Google Maps API script.');
	};
	document.body.appendChild(script.elt);
}

function onLoad() {
	if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
		console.error('Google Maps API failed to load.');
		return;
	}

	// Initialize the autocomplete object
	autocomplete = new google.maps.places.Autocomplete(input.elt, {
		types: ['(cities)']
	});
	
	// Add a listener to handle the place selection
	autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
	let place = autocomplete.getPlace();
	if (!place.geometry) {
		console.log("No details available for input: '" + place.name + "'");
		return;
	}
	
	console.log('Selected city:', place.name);
}