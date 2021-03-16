const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const dbName = process.argv[2];
const collection = process.argv[3];
const id = process.argv[4];

mongo.connect(url, { useUnifiedTopology: true }).then((client) => {
    const db = client.db(dbName);
    const col = db.collection(collection);

    col.deleteOne({ _id: id }).then()
        .catch(console.error)
        .finally(() => client.close().then())
}).catch(err => { throw err});