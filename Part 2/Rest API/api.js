const mongoClient = require('mongodb').MongoClient
const express = require('express')
const app = express()

const DB_URL = 'mongodb://localhost:27017/';
let mongodb = null;

mongoClient.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true},
    function (err, db) {
        if (err) {
            throw err
        }
        mongodb = db.db('api_crud')
        mongodb.dropDatabase().then()
    })

app.get('/TODO', function (req, res) {
    mongodb.collection('TODO').find({}).toArray(
        function (err, result) {
            if (err) {
                throw err
            }
            res.send(result)
        }
    );
})

app.get('/LIST', function (req, res) {
    mongodb.collection('LIST').find({}).toArray(
        function (err, result) {
            if (err) {
                throw err
            }
            res.send(result)
        }
    );
})

app.post('/TODO', function (req, res) {
    mongodb.collection('TODO').insertOne({
        "Title": "Premier Titre",
        "Description": "Première description",
        "Priority": 2
    }).then(r => res.send(JSON.stringify(r)))
})

app.post('/LIST', function (req, res) {
    mongodb.collection('LIST').insertOne({
        "Title": "Premier Titre",
        "Description": "Première description"
    }).then(r => res.send(JSON.stringify(r)))
})

app.put('/TODO', function (req, res) {
    mongodb.collection('TODO').update({
        Title: "Premier Titre"
    }, {
        $set: {
            Description: 'Nouvelle Description'
        }
    }, function (err, data) {
        if (err) {
            throw err
        }
        res.send(data)
    })
})

app.put('/LIST', function (req, res) {
    res.send()
})

app.delete('/TODO/:id', function (req, res) {
    mongodb.collection('TODO').deleteOne({
        "_id": req.params.id
    }, function (err, result) {
        if (err) {
            throw err
        }
        res.send(result);
    })
})

app.delete('/LIST/:title', function (req, res) {
    mongodb.collection('LIST').deleteOne({
        Title: req.params.title
    }, function (err, result) {
        if (err) {
            throw err
        }
        res.send(result);
    })
})

app.listen(3000)
