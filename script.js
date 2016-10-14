var accounts = [];

function createAccount(account){
	accounts.push(account);
	return account;
}

function getAccount(userName){
	var matchedaccount;

	// accounts.forEach(function(account){
	// 	if(account.userName === userName){
	// 		matchedaccount = account;
	// 	}
	// });

	for(var i = 0 ; i < accounts.length ; i++){
		if(accounts[i].userName === userName)
				matchedaccount = accounts[i];
	}

	return matchedaccount;
}


function deposit(account, amount){
	if(typeof amount === 'number'){
		account.balance += amount;
	}else{
		console.log('Deposit failed. Incorrect value');
	}
}

function withdraw(account, amount){

	if(account.balance -= amount >= 0 && typeof amount === 'number'){
		account.balance -= amount;
		console.log(account.balance);
	}else{
		console.log('Withdrawl failed. Incorrect value');		
	}
}

function getBalance(account){
	return account.balance;
}

var saloniAccount = createAccount({
	userName: 'Saloni',
	balance: 1000
});


var NiravAccount = createAccount({
	userName: 'Nirav',
	balance: 1000
});


var BabuAccount = createAccount({
	userName: 'Babu',
	balance: 0
});

deposit(BabuAccount , 1000);


deposit(saloniAccount,1000);
console.log(getBalance(saloniAccount));

console.log(getAccount('Nirav'))

function createBalanceGetter(account){
	return function(){
		return account.balance;
	}
}

console.log(createBalanceGetter(saloniAccount)());

// function countDownWhile(startingpoint, endingpoint){
// 	while(startingpoint > endingpoint){
// 		console.log('countDownWhile ' + startingpoint);
// 		startingpoint--;
// 	}
// }

// countDownWhile(10,1);

// function countDownFor(startingpoint, endingpoint){
// 	for(;startingpoint >= endingpoint ; startingpoint--){
// 		console.log('for countDownFor '+ startingpoint);
// 	}
// }


// function greetMaker(name){
// 	function greet(){
// 		console.log('Hello closure '+name+'!');
// 	}

// 	return greet;
// }

// countDownFor(10,0);

// greetMaker('Saloni')();


// function createAdder(basenumber){
// 	function numToAdd(another){
// 		console.log(basenumber + another);
// 	}

// 	return numToAdd;
// }

// createAdder(10)(2);


