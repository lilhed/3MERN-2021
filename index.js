const express = require('express');
const app = express();
const port = 3000

const TodoController = require('./controllers/todoController');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.route('/')
    .post(function(req, res) {
        const todo = req.body
        console.log(todo)
        if(!todo){
            return res.status(400).send('invalid data format')
        }

        return TodoController
            .create(todo, (err,created) => {
                if (err){
                    return res.status(err.code || 500).send(err);
                }
                return res.status(200).send(created);
            });
    })
    .get(function(req, res) {
        return TodoController.read((err,data) => {
            if (err){
                return res.status(err.code || 500).send(err);
            }
            if(!data || !data.length){
                return res.status(204).end();
            }
            return res.status(200).send(data);
        });
    })
    .put(function(req, res) {
        var id = req.params.id
        res.end('put')
    })
    .delete(function(req, res) {
        const id = req.body.id
        return TodoController.delete((err,data) => {
            if (err){
                return res.status(err.code || 500).send(err);
            }
            if(!data || !data.length){
                return res.status(204).end();
            }
            return res.status(200).send(data);
        });
    })

app.route('/list/:id')
    .post(function(req, res) {
        var id = req.params.id
        res.end('ID:'+id)
    })
    .get(function(req, res) {
        var id = req.params.id
        res.end(id+1)
    })
    .put(function(req, res) {
        var id = req.params.id
        res.end('put')
    })
    .delete(function(req, res) {
        var id = req.params.id
        res.end('delete')
    })

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

