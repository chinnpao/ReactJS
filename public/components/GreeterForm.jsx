var React = require('react');

var GreeterForm = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault();

		var updates = {};
		var name = this.refs.name.value;
		var msg = this.refs.message.value;

		if (name.length > 0) {
			this.refs.name.value = '';
			updates.name = name;
		}
		if (msg.length > 0) {
			this.refs.message.value = '';
			updates.message = msg;
		}

		this.props.onChangeData(updates);
	},
	render: function() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="name"/><br/>
				<textarea ref="message"></textarea><br/>
				<button>Submit</button>
			</form>
		);
	}
});

module.exports = GreeterForm;