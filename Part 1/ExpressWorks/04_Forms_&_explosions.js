const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const formParser = bodyParser.urlencoded({ extended: false });
const [ ,, port ] = process.argv;

app.post('/form/', formParser, (request, response) => {
    if (request.body) {
        if (request.body.str) {
            response.end(request.body.str.split('').reverse().join(''));
        }
    }
});

app.listen(port);