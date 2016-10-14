
setTimeout(function(){
	console.log('1');
}, 2000);

console.log('2');

console.log('Challange : ');

function printIntwoSeconds(message){
	setTimeout(function(){
			console.log(message);
	}, 2000);
}


printIntwoSeconds('Hello Async');