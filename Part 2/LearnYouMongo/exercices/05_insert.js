const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const dbName = 'learnyoumongo';

const firstName = process.argv[2];
const lastName = process.argv[3];
const doc = { firstName: firstName, lastName: lastName };

mongo.connect(url, { useUnifiedTopology: true }).then((client) => {
    const db = client.db(dbName);
    const docs = db.collection('docs');
    docs.insertOne(doc).then(result => {
        console.log(JSON.stringify(doc));
        client.close().then();
    }).catch(err => {
        console.error(err);
        client.close().then();
    });
}).catch(err => { throw err});