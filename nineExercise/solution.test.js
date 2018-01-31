const soln = require('./solution');

test('Expect a promise object: ', (done)=>{
	expect(soln('{\'name\':\'Siddharth\',}')).toBeInstanceOf(Promise);
	done();
});

test('Verify rejected promise: ', (done)=>{
	soln().then(null, (err)=>{
		expect(err).toBe('Unexpected token u in JSON at position 0');
		done();
	});

});
