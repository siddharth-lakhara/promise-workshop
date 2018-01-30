const soln = require('./solution');

test('Returns instance of promise: ', (done)=>{
	expect(soln).toBeInstanceOf(Promise);
	done();
});

test('promise returns secret value: ', (done)=>{
	soln.catch((err)=>{
		expect(err.message).toBe('SECRET VALUE');
		done();
	});
});
