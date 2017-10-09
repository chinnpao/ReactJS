var React = require('react');
var {Link} = require('react-router')

var Examples = (props) => {
	return (
		<div>
			<h2 className="text-center page-title">Examples</h2>
			<p>Here are a few example locations to try out:</p>
			<ol>
				<li>
					<Link to="/?location=Phnom Penh">Phnom Penh</Link>
				</li>
				<li>
					<Link to="/?location=Siem Reap">Siem Reap</Link>
				</li>
			</ol>
		</div>
	);
};

module.exports = Examples;