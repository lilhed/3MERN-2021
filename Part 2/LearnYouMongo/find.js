const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/', function(err, db){
    if(err){
        throw err
    }

    const dbo = db.db('learnyoumongo')

    dbo.collection('parrots').find({
        age: {
            $gt: parseInt(process.argv[2])
        }
    }).toArray(function(err, result){
        if(err){
            throw err
        }

        console.log(result)

        db.close()
    })
})
