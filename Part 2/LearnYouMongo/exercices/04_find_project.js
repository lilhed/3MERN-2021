const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const dbName = 'learnyoumongo';

const targetAge = +process.argv[2];

mongo.connect(url, { useUnifiedTopology: true }).then((client) => {
    const db = client.db(dbName);
    db.collection('parrots')
        .find({
            age: {$gt: targetAge}
            }, { projection:{
            name: 1
            , age: 1
            , _id: 0
            }
        })
        .toArray(function (err, documents) {
            if (err) throw err;
            console.log(documents);
            client.close().then();
        });
}).catch(err => { throw err});