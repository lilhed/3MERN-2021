var express = require('express');
var bodyparser = require('body-parser');
var app = express();

var portNumber = process.argv[2];

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
    var str = req.body.str;
    var strReversed = str.split('').reverse().join('');
    res.send(strReversed);
});

app.listen(portNumber);