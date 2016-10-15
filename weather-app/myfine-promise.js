// function doWork(data, callback){
// 		callback('done');
// }

// function doWorkPromise(data){
// 	return new Promise(function(resolve, reject){
// 			setTimeout(function(){
// 					resolve('Everything worked !');
// 			},1000);

// 			// else{
// 			// 	reject({
// 			// 		error: 'Something went wrong'
// 			// 	})
// 			// }
// 	});
// }

// doWorkPromise('some data').then (function(data){
// 		console.log(data);
// })

var request = require('request');

function getWeather(location){
		return new Promise(function(resolve, reject){
			var encodedcomponent = encodeURIComponent(location);

			var url = 'http://api.openweathermap.org/data/2.5/weather?appid=232f9371c967ceef1c26190cb87620c5&q='+ encodedcomponent + '&units=imperial';

					request({
						url : url,
						json: true
						}, function(error, response, body){

							if(error){
								reject('Unable to fetch weather');
							}
							else{
								resolve('It\'s '+body.main.temp+' in ' + body.name);
							}

					});


		});
}

getWeather('San Fransisco').then (function(currentweather){
				console.log(currentweather);	
},function(error){
	console.log(error);
});