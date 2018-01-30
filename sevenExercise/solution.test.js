const soln = require('./solution');

test('Returns a promise object: ', (done)=>{
	expect(soln).toBeInstanceOf(Promise);
	done();
});

test('Resolves promise with \'Hello World\'', (done)=>{
	global.console.log = jest.fn();
	soln.then((str)=>{
		expect(str).toMatch('Hello World!');
		done();
	});
});
