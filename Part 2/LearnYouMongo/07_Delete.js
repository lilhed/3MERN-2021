const mongo = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017/';
const [ ,, dbName, collectionName, id ] = process.argv;

mongo.connect(dbUrl, { useUnifiedTopology: true }).then((client) => {
    const db = client.db(dbName);
    const users = db.collection(collectionName);

    users.deleteOne({ _id: id })
        .then()
        .catch(console.error)
        .finally(() => client.close().then());
}).catch(console.error);