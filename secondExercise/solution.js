'use strict';

function promiseFunction (callback){
	let promise = new Promise(function (fulfill, reject) {
		setTimeout(()=>{
			fulfill('FULFILLED!');
		}, 300);
	});

	promise.then((msg)=>{
		return callback(msg);
	});

}

module.exports = promiseFunction;
