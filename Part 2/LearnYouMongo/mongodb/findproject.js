var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

var age = parseInt(process.argv[2]);

mongoClient.connect(url, function(err, db) {
	let database = db.db('learnyoumongo');
	database.collection('parrots')
	.find({ age: { $gt: +age } }, { fields: { name:1, age: 1 ,_id: 0 } })
	.toArray(function(err, documents) {
		if (err) {
			console.log('Error reading')
		}
		console.log(documents);
		db.close();
	});
});