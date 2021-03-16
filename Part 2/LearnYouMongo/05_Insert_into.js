const mongo = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017/';
const dbName = 'learnyoumongo';
const [ ,, firstName, lastName ] = process.argv;

mongo.connect(dbUrl, { useUnifiedTopology: true }).then((client) => {
    const db = client.db(dbName);
    const users = db.collection('docs');
    const newUser = { 'firstName': firstName, 'lastName': lastName };

    users.insertOne(newUser).then(() => {
        console.log(JSON.stringify(newUser));
        client.close().then();
    }).catch(err => {
        console.error(err);
        client.close().then();
    });
}).catch(console.error);