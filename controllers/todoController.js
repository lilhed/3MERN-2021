const database = require ('../databse/db')

module.exports = {
    create: (datas, callback) => {
        return database.connection((client,db) => {
            const collection = db.collection('todos');

            const entity = datas;
            collection.insertOne(entity,(err, data) =>{
                if (err){
                    return callback(err)
                }

                return callback(null,data);
            })
        });
    },
    read: (callback) => {
        return database.connection((client, db) => {
            const collection = db.collection('todos');

            const results = collection.find();

            results.toArray((err, docs) => {
                if(err){
                    return callback(err)
                }

                return callback(null, docs);
            });
        })
    }
};