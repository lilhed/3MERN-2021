const mongo = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017/';
const dbName = 'learnyoumongo';
const [ ,, size ] = process.argv;

mongo.connect(dbUrl, { useUnifiedTopology: true }).then((client) => {
    const db = client.db(dbName);
    const users = db.collection('prices');

    const pipeline = [
        { $match: { size: size }},
        { $group: {
                _id: null,
                average: { $avg: '$price' }
            }
        }
    ];

    users.aggregate(pipeline)
        .toArray()
        .then(result => {
            console.log(result[0].average.toFixed(2));
        })
        .catch(console.error)
        .finally(() => client.close().then());
}).catch(console.error);