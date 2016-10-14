var request = require('request');

module.exports = function(location,callback){

	var encodedcomponent = encodeURIComponent(location);

	var url = 'http://api.openweathermap.org/data/2.5/weather?appid=232f9371c967ceef1c26190cb87620c5&q='+ encodedcomponent + '&units=imperial';

		request({
		url : url,
		json: true
		}, function(error, response, body){

			if(error){
				callback('Unable to fetch weather');
			}
			else{
				callback('It\'s '+body.main.temp+' in ' + body.name);
			}

	});
}