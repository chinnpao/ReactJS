var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		}
	},
	handleSearch: function(location) {
		var that = this;
		this.setState({
			isLoading: true,
			errMsg: undefined,
			location: undefined,
			temp: undefined
		});

		openWeatherMap.getTemp(location).then(function(temp) {
			that.setState({
				isLoading: false,
				location: location,
				temp: temp
			});
		}, function(e) {
			that.setState({
				isLoading: false,
				errMsg: e.message
			});
		});
	},
	componentDidMount: function() {
		var location = this.props.location.query.location; // Get value location from url
		if (location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = "#/"; // Remove location from url after it show
		}
	},
	componentWillReceiveProps: function(newProps) {
		// Get value location from search in header (remove this will not work for main page GetWeather)
		var location = newProps.location.query.location;
		if (location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = "#/"; // Remove location from url after it show
		}
	},
	render: function() {
		var {isLoading, location, temp, errMsg} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if (temp && location) {
				return <WeatherMessage temp={temp} location={location}/>;
			}
		}

		function renderError() {
			if (typeof errMsg === 'string') {
				return (
					<ErrorModal message={errMsg}/>
				);
			}
		}

		return (
			<div>
				<h2 className="text-center page-title">Get Weather</h2>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;