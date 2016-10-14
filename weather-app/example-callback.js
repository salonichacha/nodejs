var request = require('request');
var weather = require('./weather.js');

var url = 'http://api.openweathermap.org/data/2.5/weather?appid=232f9371c967ceef1c26190cb87620c5&q=LosAngeles&units=imperial';

weather(function(currentWeather){
	console.log(currentWeather);
});



