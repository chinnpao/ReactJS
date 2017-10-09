var redux = require('redux');

console.log('Redux example started.');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// var stateDefault = {
// 	name: 'Anonymous',
// 	hobbies: [],
// 	movies: []
// };

// Subscribe to change
var unsubscribe = store.subscribe(() => {
	var state = store.getState();

	console.log('New state: ', store.getState());

	if (state.map.isFetching) {
		document.getElementById('app').innerHTML = 'Loading...';
	} else if (state.map.url) {
		document.getElementById('app').innerHTML = '<a href="'+ state.map.url +'" target="_blank">View Your Location</a>';
	}
});
// unsubscribe();

console.log('current State: ', store.getState());

store.dispatch(actions.fetchLocation());

// transfer action_type and new state elements to store by using method "dispatch"
store.dispatch(actions.changeName('Chinnpao'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Emily'));

store.dispatch(actions.addMovie('Doctor Strange', 'Sci-Fi'));

store.dispatch(actions.addMovie('Star Wars', 'Action'));

store.dispatch(actions.removeMovie(1));
