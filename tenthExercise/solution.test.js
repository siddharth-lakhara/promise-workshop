const soln = require('./solution');

test('Receives promise: ', (done)=>{
	expect(soln).toBeInstanceOf(Promise);
	done();
});
/*
test('verifying error message: ', (done)=>{
	soln.catch((err)=>{
		expect(err.message).toBe('OH NOES');
	});
	done();
});
*/
