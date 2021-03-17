const express = require('express')
const path = require("path");
const app = express()

app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')

app.get('/home', function (req, res) {
    res.render('index', {date: new Date().toDateString()})
})

app.listen(process.argv[2])
