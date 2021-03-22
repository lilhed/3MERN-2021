const express = require('express')
const Mongo = require('mongodb')
const MongoClient = Mongo.MongoClient

const app = express()

const url = 'mongodb://localhost:27018/'
let db

MongoClient.connect(url, function(err, mg){
    if(err){
        throw err
    }

    db = mg.db('todo')
})

app.use(express.urlencoded());
app.use(express.json());

app.delete('/lists/:id', function(req, res){
    db.collection('list').remove({
        _id: new Mongo.ObjectID(req.params.id)
    }, function(err, data){
        if(err){
            throw err
        }

        res.json({'success': Boolean(data.result.ok)})
        res.end()
    })
})

app.put('/lists/:id', function(req, res){
    db.collection('list').update({
        _id: new Mongo.ObjectID(req.params.id)
    }, {
        $set: req.body
    }, function(err, data){
        if(err){
            throw err
        }

        res.json({'success': Boolean(data.result.nModified)})
        res.end()
    })
})

app.post('/lists', function(req, res){
    db.collection('list').insertOne(req.body, function(err, data){
        if(err){
            throw err
        }

        res.json({'success': Boolean(data.insertedCount)})
        res.end()
    })
})

app.get('/lists/:id', function(req, res){
    db.collection('list').find({
        _id: new Mongo.ObjectID(req.params.id)
    }).toArray(function(err, data){
        if(err){
            throw err
        }

        res.json(data)
        res.end()
    })
})

app.get('/lists', function(req, res){
    db.collection('list').find().toArray(function(err, data){
        if(err){
            throw err
        }

        data.forEach(function(e){
            console.log(e._id.toHexString())
        })

        res.json(data)
        res.end()
    })
})

app.listen(8000)

// mongod --port 27018 --dbpath=./data
