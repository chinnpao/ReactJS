var redux = require('redux');

console.log('Redux todo started.');

var stateDefault = {
	searchText: '',
	showCompleted: false,
	todos: []
};

var reducer = (state = stateDefault, action) => {
	switch(action.type){
		case 'UPDATE_SEARCH_TEXT':
			return {
				...state,
				searchText: action.searchText,
				showCompleted: action.showCompleted,
				todos: action.todos
			};
		default:
			return state;
	}
};

var store = redux.createStore(reducer);

console.log('current State: ', store.getState());

store.dispatch({
	type: 'UPDATE_SEARCH_TEXT',
	searchText: 'Testing',
	showCompleted: true,
	todos: ['1', '2', '3']
});

console.log('SearchTextUpdated: ', store.getState());
