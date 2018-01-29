const soln = require('./solution.js');

test('Returns fulfilled promise: ', (done)=>{
	let callback = (retValue)=>{
		//console.log(retValue);
		expect(retValue).toBe('I FIRED');
		done();
	};
	soln(callback);
});
