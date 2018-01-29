
function failedPromise(callback){

	let promise = new Promise(function (fulfill, reject) {
		setTimeout(()=>{
			reject(new Error('REJECTED!'));
		}, 300);
	});

	function onReject (error) {
		return callback(error.message);
	}

	promise.then(null, onReject);

}

module.exports = failedPromise;
