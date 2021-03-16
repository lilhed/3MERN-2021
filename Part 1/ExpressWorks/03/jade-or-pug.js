var express = require('express');
var path    = require('path');
var app = express();

var portNumber = process.argv[2];
var jadeTemplate = process.argv[3];

app.set('view engine', 'jade');

app.set('views', jadeTemplate||path.join(__dirname, 'templates'));

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()});
});

app.listen(portNumber);