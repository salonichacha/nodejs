var argv = require('yargs')
		.command('hello','Greets the user', function(yargs) {
			yargs.options({
				name : {
					demand: true,
					alias: 'n',
					description: 'Your first name goes here' 
				},

				lastname : {
					demand: true,
					alias: 'l',
					description: 'Your last name goes here' 
				}
			}).help('help');		
		})
		.help('help')
		.argv;

var command = argv._[0];

if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined'){
	console.log('Hello ' +argv.name +' '+argv.lastname+ ' !');
} else if(command  === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname === 'undefined'){
	console.log('Hello ' +argv.name +' !');	
}
else{
	console.log('Hello World!');
}

var animal = '{"name" : "Saloni"}';

var animalObject = JSON.parse(animal);
animalObject.age = 24 ;
console.log(JSON.stringify(animalObject));
