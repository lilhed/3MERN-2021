const MongoClient = require('mongodb').MongoClient;

exports.connection = (callback, dbName) => {
  const URL = `mongodb://localhost:27017`;
  return MongoClient.connect(URL, { useUnifiedTopology: true },(err, client) => {
    if (err) throw err;

    callback(client, client.db(dbName || 'exercice-todo'));
  });
}