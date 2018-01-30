'use strict';

let first = ()=>{
	return Promise.resolve('Hello');
};

let second = (str)=>{
	return Promise.resolve(str + ' World!');
};

let promise1 = first();

let promise2 = promise1.then((someSecretValue)=>{
	return second(someSecretValue);
});

promise2.then(console.log);

module.exports = promise2;
