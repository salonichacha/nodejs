var request = require('request');

var url = 'http://api.openweathermap.org/data/2.5/weather?appid=232f9371c967ceef1c26190cb87620c5&q=LosAngeles&units=imperial';
request({
	url : url,
	json: true
}, function(error, response, body){

		if(error){
			console.log('Unable to fetch weather');
		}
		else{
			console.log(JSON.stringify(body, null, 4));
			console.log('It\'s '+body.main.temp+' in ' + body.name);
		}

})



