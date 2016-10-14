function doWork(){
		throw new Error ('Unable to do work');
}



try{
		doWork();	
}

catch(e){
	console.log('Something was not correct' + e.message);	
} finally {
	console.log('this is executed for sure');
}

console.log('try catch ends');