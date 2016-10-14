var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs')
			.option({
					location:{
						demand: false,
						alias: 'l',
						description: 'Your location goes here',
						type: 'string'	
					} 

			})
		.help('help')
		.argv;


if(typeof argv.l === 'string' && argv.l.length > 0){
	
		weather(argv.l, function(currentWeather){
			console.log(currentWeather)
		})
} else{
		console.log('No location');
		location(function(location){

			if(location){
					weather(location.city, function(currentWeather){
					console.log(currentWeather);
					})
				}
			else{
				console.log('Unable to find location');
			}
		});
}