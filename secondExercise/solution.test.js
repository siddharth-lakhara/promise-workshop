const soln = require('./solution');

test('Returns fulfilled: ', ()=>{
	let callBack = (data)=>{
		expect(data).toBe('FULFILLED');
	};
	soln(callBack);
});
