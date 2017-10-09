var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
	return (action.type === 'SET_SEARCH_TEXT') ? action.searchText : state; 
};

export var showCompletedReducer = (state = false, action) => {
	return (action.type === 'TOGGLE_SHOW_COMPLETED') ? !state : state;
};

export var todosReducer = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [
				...state,
				action.todo
			];
		case 'UPDATE_TODO':
			return state.map((todo) => {
				if (todo.id === action.id) {
					return {
						...todo,
						...action.updates
					};
				} else {
					return todo;
				}
			});
		case 'ADD_TODOS':
			return [
				...state,
				...action.todos
			];
		case 'LOGOUT':
			return [];
		default:
			return state;
	};
};

export var authReducer = (state = {}, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				uid: action.uid
			};
		case 'LOGOUT':
			return {};
		default:
			return false;
	}
}
