var express = require('express');
var fs      = require('fs');
var app = express();

var portNumber = process.argv[2];
var fileName   = process.argv[3];

app.get('/books', function(req, res) {
  fs.readFile(fileName, function(err, data) {
    if (err) return err;
    var books = JSON.parse(data);
    res.json(books);
  });
});

app.listen(portNumber);