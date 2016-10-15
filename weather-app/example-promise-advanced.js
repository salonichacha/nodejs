function getLocation(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve('Los Angeles')	
		},1000);
	});
}


function getWeather(location){
		return new Promise(function(resolve,reject){
				resolve('Its 59 in '+location);
		});
}

getLocation().then(function(data){
	return getWeather(data);
}).then(function(currentWeather){
	console.log(currentWeather);
})










// function doWork(shouldfail) {
// 	return new Promise(function(resolve,reject){
// 		setTimeout(function(){
// 				if(typeof shouldfail === 'boolean' && shouldfail === true){
// 					reject('This is failed');
// 				}	

// 				else{
// 					console.log('Done !');
// 					resolve('Perfect');	
// 				}
				
// 		}, 1000);
// 	});
// }

// doWork(true).then(function(message){
// 	console.log('Here'+ message);
// 	return doWork(true);
// }).then (function(message){
// 	console.log(message);
// }).catch(function(error){
// 	console.log(error);
// })