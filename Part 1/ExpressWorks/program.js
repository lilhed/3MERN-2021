const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser')
const public = path.join(__dirname, 'public');

const MyController = require('./src/controllers/routes.controller');
const MyMiddleware = require('./src/middlewares/routes.middleware');

app.use(bodyparser.urlencoded({extended: false}))
app.use(express.static(public))
app.set('view engine', 'html');
app.use(require('stylus').middleware(public))

app.listen(process.argv[2], () => console.log(`App listening on *:${process.argv[2]}`));


// Home page
app.get('/home', (req, res, next) => {
    return res.render(
        'index', 
        {
            date: new Date().toDateString()
        }
    );
});

// GET Form
app.get('/form', (req, res, next) => {
    return res.render('form');
});

// POST Form
app.post('/form', (req, res, next) => {
    const reversed = req.body.str.split('').reverse().join('');
    return res.send(reversed);
});

// MIDDLEWARE : CRYPTO PARAM
app.param('NAME', (req, res, next, id) => {
    req.NAME = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex');
    next();
});

// PUT message in param
app.put('/message/:NAME', (req, res, next) => {
    console.log(req.NAME);
    return res.send(req.NAME);
});

// GET Search
app.get('/search', [
    MyController.RequestToJSON
]);

// GET Books
app.get('/books', [
    MyController.ReadFile
]);