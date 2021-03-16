const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/', function(err, mg){
    if(err){
        throw err
    }

    const db = mg.db('learnyoumongo')

    db.collection('prices').aggregate([
        {
            $match: {
                size: process.argv[2]
            }
        },
        {
            $group: {
                _id: 'avg',
                avg: {
                    $avg: '$price'
                }
            }
        }
    ]).toArray(function(err, results){
        if(err){
            throw err
        }

        console.log(Number(results[0].avg).toFixed(2))

        mg.close()
    })
})
