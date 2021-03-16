const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const dbName = process.argv[2];

mongo.connect(url, { useUnifiedTopology: true }).then((client) => {
    const db = client.db(dbName);
    const users = db.collection('users');
    const search = { username: 'tinatime' };
    const update = { $set: { age: 40 }};

    users.updateOne(search, update).then()
        .catch(console.error)
        .finally(() => client.close().then())
}).catch(err => { throw err});