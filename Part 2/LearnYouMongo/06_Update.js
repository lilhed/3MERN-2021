const mongo = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017/';
const [ ,, dbName ] = process.argv;

mongo.connect(dbUrl, { useUnifiedTopology: true }).then((client) => {
    const db = client.db(dbName);
    const users = db.collection('users');

    const filter = { username: 'tinatime' };
    const update = { $set: { age: 40 }};

    users.updateOne(filter, update)
        .then()
        .catch()
        .finally(() => client.close().then());
}).catch(console.error);