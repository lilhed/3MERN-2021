const mongo = require('mongodb').MongoClient;

exports.connection = (callback, dbName) =>{
    const dbUrl = 'mongodb://localhost:27017/';
    return mongo.connect(dbUrl, { useUnifiedTopology: true },(err, client) =>{
        if(err) throw err;
        
        callback(client, client.db(dbName || 'exercice-todo'));
    });
}

