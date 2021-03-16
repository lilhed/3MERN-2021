const express = require('express');
const app = express();

const port = process.argv[2];

app.get('/search', function (request, response){
    const result = request.query;
    response.send(result);
});

app.listen(port);