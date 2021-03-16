const express = require('express');
const app = express();
const [ ,, port, pagePath ] = process.argv;

app.set('view engine', 'pug');
app.set('views', pagePath);

app.get('/home/', (request, response) => {
    response.render('index', { date: new Date().toDateString() });
});

app.listen(port);