var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var name = "Chinnpao";

ReactDOM.render(
	<Greeter name={name} message="This is content page." />,
	document.getElementById('app')
);