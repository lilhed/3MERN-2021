const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const dbName = 'learnyoumongo';

const targetAge = +process.argv[2];

mongo.connect(url, { useUnifiedTopology: true }).then((client) => {
    const db = client.db(dbName);
    const col = db.collection('parrots');

    col.countDocuments({ age: { $gt: Number(targetAge) }})
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close().then())
}).catch(err => { throw err});