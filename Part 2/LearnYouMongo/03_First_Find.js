const mongo = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017/';
const dbName = 'learnyoumongo';
const [ ,, age ] = process.argv;

mongo.connect(dbUrl, { useUnifiedTopology: true }).then((client) => {
    const db = client.db(dbName);
    const parrots = db.collection('parrots');

    parrots.find({ age: { $gt: Number(age) }}).toArray().then(docs => {
        console.log(docs);
        client.close().then();
    }).catch(console.error);
}).catch(err => { throw err});