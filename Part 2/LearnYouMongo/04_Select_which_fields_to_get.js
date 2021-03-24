const mongo = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017/';
const dbName = 'learnyoumongo';
const [ ,, age ] = process.argv;

mongo.connect(dbUrl, { useUnifiedTopology: true }).then((client) => {
    const db = client.db(dbName);
    const parrots = db.collection('parrots');

    parrots.find({ age: { $gt: Number(age) }}, { projection: { _id: 0, name: 1, age: 1 }})
        .toArray()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close().then());
});