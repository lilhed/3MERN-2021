const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'

const argument = parseInt(process.argv[2])

mongo.connect(url, function(err, client) {
    let database = client.db('learnyoumongo');

    let parrots = database.collection('parrots')
    parrots.find({ age: { $gt: argument } })
        .toArray(function (err, documents) {
            if (err) throw err
            console.log(documents)
            client.close()
        })
})