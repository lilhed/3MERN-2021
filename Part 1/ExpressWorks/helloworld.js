//EXERCICE 1
var express = require('express');
var app = express();
var portNumber = process.argv[2];

app.get('/home', function(req, res) {
    res.end('Hello World!')
});
app.listen(portNumber);