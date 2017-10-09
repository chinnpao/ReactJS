var React = require('react');

var GreeterMessage = React.createClass({
	render: function() {
		var name = this.props.name;
		var msg = this.props.message;

		return (
			<div>
				<h1>Welcome {name}!</h1>
				<p>Message: {msg}</p>
			</div>
		);
	}
});

module.exports = GreeterMessage;