const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/', function(err, mg){
    if(err){
        throw err
    }

    const db = mg.db('learnyoumongo')

    db.collection('parrots').count({
        age: {
            $gt: parseInt(process.argv[2])
        }
    }, function(err, data){
        if(err){
            throw err
        }

        console.log(data)

        mg.close()
    })
})
