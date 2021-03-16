const mongo = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017/';
const dbName = 'learnyoumongo';
const [ ,, age ] = process.argv;

mongo.connect(dbUrl, { useUnifiedTopology: true }).then((client) => {
    const db = client.db(dbName);
    const users = db.collection('parrots');

    users.countDocuments({ age: { $gt: Number(age) }})
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close().then());
}).catch(console.error);