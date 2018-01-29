const soln = require('./solution');

test('Returns fulfilled: ', (done)=>{
	let callBack = (data)=>{
		// console.log(data);
		expect(data).toBe('FULFILLED!');
		done();
	};
	soln(callBack);
});
