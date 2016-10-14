var crypto = require('crypto-js');

var Message = [{
		secretMessage:'I hid all chips under the bed',
		secret:'123abc' 		 	
}];

var secretKey = '123abc';

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(Message), secretKey);
console.log('Encrypted Message : '+ encryptedMessage);

var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));
console.log('Decrypted Message : ');
console.log(decryptedMessage);