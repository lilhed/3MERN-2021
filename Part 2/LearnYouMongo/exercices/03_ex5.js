const mongo = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017/';
const dbName = 'learnyoumongo';
const [ ,, age ] = process.argv;
const firstName = process.argv[2]
const lastName = process.argv[3]

mongo.connect(dbUrl, { useUnifiedTopology: true }).then((client) => {
    const db = client.db(dbName);
    const users = db.collection('docs');
    const newUser = { 'firstName': firstName, 'lastName': lastName };

    users.insertOne(newUser).then(result => {
        console.log(JSON.stringify(newUser));
        client.close().then();
    }).catch(err => {
        console.error(err);
        client.close().then();
    });
}).catch(err => { throw err});