
function asynchPromise() {
	//let retValue = '';
	let promise = new Promise((resolve, reject)=>{
		resolve('PROMISE VALUE');

	});

	// promise.then((msg)=>{
	// 	//  retValue += msg;
	// 	console.log(msg);
	// });

	// retValue += 'MAIN PROGRAM\n';
	// console.log('MAIN PROGRAM');
	// return callback(retValue);
	return promise;
}

module.exports = asynchPromise;
