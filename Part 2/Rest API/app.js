const config = require('./config.js');
const express = require('express');
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const mongoose = require('mongoose');
const todo = require('./todo.js');

const app = express();
mongoose.connect(config.db.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(console.error);

/*****************************************************
 * GET
 *****************************************************/

app.get('/get/todo/:id?', async (request, response) => {
    const id = request.params.id;
    let query = id ? todo.get(id) : todo.getAll();

    query.then(t => {
        if (t) {
            response.status(200).end(JSON.stringify(t));
        } else {
            response.status(204).end();
        }
    }).catch(err => {
        response.status(500).end();
        console.error(err);
    });
});

/*****************************************************
 * ADD
 *****************************************************/

app.post('/add/todo/', urlEncodedParser, (request, response) => {
    const params = request.body;

    todo.add(params.title, params.description, params.priority, params.done, params.creation, params.deadline)
        .then(result => {
            if (result) {
                response.status(200).end(JSON.stringify(result));
            } else {
                response.status(404).end();
            }
        }).catch(err => {
            response.status(500).end();
            console.error(err);
        });
});

/*****************************************************
 * UPDATE
 *****************************************************/

/* TODO: Ask for JSON instead of multiples properties */
app.put('/update/todo/', urlEncodedParser, (request, response) => {
    const params = request.body;
    const properties = {
        'title': params.title,
        'description': params.description,
        'priority': params.priority,
        'done': params.done,
        'creation': params.creation,
        'deadline': params.deadline
    }

    todo.update(params.id, properties)
        .then(result => {
            if (result) {
                response.status(200).end(JSON.stringify(result));
            } else {
                response.status(404).end();
            }
        }).catch(err => {
            response.status(500).end();
            console.error(err);
        });
});

/*****************************************************
 * DELETE
 *****************************************************/

app.delete('/delete/todo/', urlEncodedParser, (request, response) => {
    const id = request.body.id;

    todo.delete(id)
        .then(result => {
            if (result) {
                response.status(200).end(JSON.stringify(result));
            } else {
                response.status(404).end();
            }
        }).catch(err => {
        response.status(500).end();
        console.error(err);
    });
});

/*
app.route('/todo/:id')
    .get((request, response) => {
        const id = request.params.id;

        response.end(todo.get(id));
    })
    .post((request, response) => {
        const id = request.params.id;

        response.end(todo.add(id));
    })
    .update((request, response) => {
        const id = request.params.id;

        response.end(todo.update(id));
    })
    .delete((request, response) => {
        const id = request.params.id;

        response.end(todo.delete(id));
    })*/

app.listen(config.app.port);