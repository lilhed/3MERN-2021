const express = require('express');
const bodyparser = require('body-parser')
const app = express();

const port = process.argv[2];

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function (request,response){
    const strReversed = request.body.str.split('').reverse().join('');
    response.send(strReversed);
});

app.listen(port);