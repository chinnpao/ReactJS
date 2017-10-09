var redux = require('redux');
var thunk = require('redux-thunk').default;
var {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index');

export var configure = () => {
	var reducer = redux.combineReducers({
		name: nameReducer,
		hobbies: hobbiesReducer,
		movies: moviesReducer,
		map: mapReducer
	});

	// Use Redux to create store by reducer - store such as middleware
	var store = redux.createStore(reducer, redux.compose(
		redux.applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
}
