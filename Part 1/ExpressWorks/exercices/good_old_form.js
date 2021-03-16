const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
    let reverse = req.body.str.split('').reverse().join('')
    res.send(reverse)
})

app.listen(process.argv[2])