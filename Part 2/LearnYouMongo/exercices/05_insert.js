const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const dbName = 'learnyoumongo';

const firstName = process.argv[2];
const lastName = process.argv[3];

mongo.connect(url, { useUnifiedTopology: true }).then((client) => {
    const db = client.db(dbName);
    db.collection('docs')
        .insertOne({firstName, lastName}, function (err, documents) {
            if (err) return console.log(err);
            console.log(JSON.stringify({firstName, lastName}));
            client.close().then();
        }).catch(err => { throw err});
}).catch(err => { throw err});