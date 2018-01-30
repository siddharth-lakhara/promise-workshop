function attachTitle(arg){
	return 'DR. '+arg;
}

let promise = Promise.resolve('MANHATTAN');

let retPromise = promise.then(attachTitle).then((arg)=>{
	console.log(arg);
	return arg;
});

module.exports = retPromise;
