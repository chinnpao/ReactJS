var axios = require("axios");

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=add65b19e99e2370e9abc874f2d2fb5a&units=imperial';

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		return axios.get(requestUrl).then(function(res) {
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function(res) {
			var errMsg = (res == "Error: Request failed with status code 404") ? "City not found" : res.data.message;
			throw new Error(errMsg);
		});
	}
}