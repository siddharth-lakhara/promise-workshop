const soln = require('./solution');

test('Returns Dr MANHATTAN: ', (done)=>{
	soln.then((arg)=>{
		expect(arg).toBe('DR. MANHATTAN');
		done();
	});
});
