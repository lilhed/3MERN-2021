const express = require('express');
const path = require('path');


// config
const port = process.argv[2];
const app = express();

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');


// api endpoints
app.get('/home', (req, res) => res.render('index', {date: new Date().toDateString()}));


// listener
app.listen(port, () => console.log('Listening on localhost:' + port));