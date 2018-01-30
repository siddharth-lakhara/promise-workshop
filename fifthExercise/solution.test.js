const soln = require('./solution');

// global.console = {log: jest.fn(console.log)};

test('Returned a promise: ', (done)=>{
	let promise = soln();
	expect(promise).toBeInstanceOf(Promise);
	done();
});

test('Promise is getting resolved: ', (done)=>{
	let promise = soln();
	expect(promise).resolves.toBe('PROMISE VALUE');
	done();
});
