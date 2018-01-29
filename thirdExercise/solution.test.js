const soln = require('./solution');

test('Returns rejected promise: ',  (done) => {
	let callback = (msg)=>{
		expect(msg).toBe('REJECTED!');
		done();
	};
	soln(callback);
});
