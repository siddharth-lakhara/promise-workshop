
function promiseFunction(callback){
	let promise = new Promise((fulfill, reject)=>{
		fulfill('I FIRED');
		reject(new Error('I DID NOT FIRE'));
	});

	promise.then(accept, onReject);

	function onReject(error){
		// console.log(error.message);
		return callback(error.message);
	}

	function accept(msg){
		// console.log(msg);
		return callback(msg);
	}
}

module.exports = promiseFunction;
