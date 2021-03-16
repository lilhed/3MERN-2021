const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/', function(err, mg){
    if(err){
        throw err
    }

    const db = mg.db(process.argv[2])

    db.collection('users').update({
        username: 'tinatime'
    }, {
        $set: {
            age: 40
        }
    }, function(err, data){
        if(err){
            throw err
        }

        console.log(data)

        mg.close()
    })
})
