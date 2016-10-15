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
	
		// weather(argv.l, function(currentWeather){
		// 	console.log(currentWeather)
		// })
		weather(argv.l).then(function(currentWeather){
			console.log(currentWeather);
		}).catch(function(error){
			console.log(error);
		})

} else{

		location().then(function(loc){
			return weather(loc.city);
		}).then (function(currentWeather){
			console.log(currentWeather);
		}).catch(function(error){
			console.log(error);
		})
}