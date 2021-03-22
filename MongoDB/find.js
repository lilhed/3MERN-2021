const mongo = require('mongodb').MongoClient
const dbUrl = 'mongodb://localhost:27017/learnyoumongo'
var age = parseInt(process.argv[2], 10)

mongo.connect(dbUrl, function(err, client){
    const db = client.db('learnyoumongo');

    const parrots_collection = db.collection('parrots');

    parrots_collection
        .find()
        .toArray()
        .then((err, documents) => {
            if (err) throw err;

            console.log(documents);
    })
})