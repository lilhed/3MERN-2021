const express = require('express');
const app = express();
const [ ,, port ] = process.argv;

app.get('/home/', (request, response) => {
    response.end('Bonjour, monde !');
});

app.listen(port);