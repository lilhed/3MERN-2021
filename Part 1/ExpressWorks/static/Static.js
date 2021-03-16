var express = require('express');
var path    = require('path');
var app = express();

var portNumber = process.argv[2];
var staticSite = process.argv[3];

app.use(express.static(staticSite||path.join(__dirname, 'public')));

app.listen(portNumber);