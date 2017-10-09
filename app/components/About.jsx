var React = require('react');

var About = (props) => {
	return (
		<div>
		  <h2 className="text-center page-title">About</h2>
		  <p>This is a weather application build on React. I have learn to build thist for education purpose.</p>
		  <p>Here are some of tools I used:</p>
		  <ul>
		  	<li>
		  		<a href="https://facebook.github.io/react">React</a> - This was the Javascript Framework used.
		  	</li>
		  	<li>
		  		<a href="https://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
		  	</li>
		  </ul>
		</div>
	);
};

module.exports = About;