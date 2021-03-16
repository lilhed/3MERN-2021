const express = require('express');
const app = express();
const [ ,, port ] = process.argv;

app.get('/search', (request, response) => {
    //response.send(JSON.stringify(request.query));
    response.send(request.query);
});

app.listen(port);