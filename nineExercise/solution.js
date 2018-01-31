
//let invalidJSON = process.argv[2];

let parsePromise = (invalidJSON)=>{
	try{
		JSON.parse(invalidJSON);
		return Promise.resolve('Done');
	}
	catch(e){
		return Promise.reject(e.message);
	}
};

parsePromise().then(null, console.log);

module.exports = parsePromise;
