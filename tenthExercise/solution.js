
let alwaysThrows = ()=>{
	throw 'OH NOES';
};

let iterate = (number)=>{
	console.log(number);
	return number+1;
};

let arg = 1;
let promiseFunction = (fn)=>{
	return Promise.resolve(fn(arg));
};

let returnPromise = promiseFunction(iterate).then(iterate).
	then(iterate).
	then(iterate).
	then(iterate).
	then(alwaysThrows).
	then(iterate).
	then(iterate).
	then(iterate).
	then(iterate).
	then(null, console.log);

module.exports = returnPromise;
