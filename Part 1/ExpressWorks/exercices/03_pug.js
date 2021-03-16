const express = require('express');
const path = require('path');
const app = express();

const port = process.argv[2];
const pugTemplate = process.argv[3];

app.set('view engine', 'pug');

app.set('views', pugTemplate||path.join(__dirname, 'templates'));

app.get('/home', function (request, response){
    response.render('index', {date: new Date().toDateString()});
});

app.listen(port);