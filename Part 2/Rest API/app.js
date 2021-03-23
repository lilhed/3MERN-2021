const config = require('./config.js');
const express = require('express');
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const cors = require('cors');
const mongoose = require('mongoose');
const todo = require('./todo.js');
const list = require('./list.js');

const app = express();
mongoose.connect(config.db.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(console.error);

app.use(cors());

/*****************************************************
 * GET
 *****************************************************/

app.get('/get/list/:id?', async (request, response) => {
    const id = request.params.id;
    let query = id ? list.get(id) : list.getAll();

    query.then(result => sendResponse(response, result))
        .catch(err => catchErr(response, err));
});

app.get('/get/todo/:id?', async (request, response) => {
    const id = request.params.id;
    let query = id ? todo.get(id) : todo.getAll();

    query.then(result => sendResponse(response, result))
        .catch(err => catchErr(response, err));
});

/*****************************************************
 * ADD
 *****************************************************/

app.post('/add/list/', urlEncodedParser, (request, response) => {
    const params = request.body;

    list.add(params.title, params.description)
        .then(result => sendResponse(response, result))
        .catch(err => catchErr(response, err));
});

app.post('/add/todo/', urlEncodedParser, (request, response) => {
    const params = request.body;
    const properties = {
        'list': params.list,
        'title': params.title,
        'description': params.description,
        'priority': params.priority,
        'done': params.done,
        'creation': params.creation,
        'deadline': params.deadline
    }

    todo.add(properties)
        .then(result => sendResponse(response, result))
        .catch(err => catchErr(response, err));
});

/*****************************************************
 * UPDATE
 *****************************************************/

/* TODO: Ask for JSON instead of multiples properties */
app.put('/update/list/', urlEncodedParser, (request, response) => {
    const params = request.body;
    const properties = {
        'title': params.title,
        'description': params.description
    }

    list.update(params.id, properties)
        .then(result => sendResponse(response, result))
        .catch(err => catchErr(response, err));
});

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
        .then(result => sendResponse(response, result))
        .catch(err => catchErr(response, err));
});

/*****************************************************
 * DELETE
 *****************************************************/

app.delete('/delete/list/', urlEncodedParser, (request, response) => {
    const id = request.body.id;

    list.delete(id)
        .then(result => sendResponse(response, result))
        .catch(err => catchErr(response, err));
});

app.delete('/delete/todo/', urlEncodedParser, (request, response) => {
    const id = request.body.id;

    todo.delete(id)
        .then(result => sendResponse(response, result))
        .catch(err => catchErr(response, err));
});

/*****************************************************
 * Functions
 *****************************************************/

function sendResponse(res, result) {
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': false,
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
    });

    if (result) {
        if (result instanceof Array) {
            if (result.length > 0) {
                res.status(200).json(result).end();
            } else {
                res.status(204).end();
            }
        } else {
            res.status(200).json(result).end();
        }
    } else {
        res.status(204).end();
    }
}

function catchErr(res, err) {
    res.status(500).end();
    console.error(err);
}

/*****************************************************
 * Miscellaneous
 *****************************************************/

app.listen(config.app.port, () => { console.log(`Listening on port ${config.app.port}`) });