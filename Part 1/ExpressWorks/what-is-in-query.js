const express = require('express')
const app = express()

app.get('/search', function(req, res){
    res.send(JSON.stringify(req.query))
    res.end()
})

app.listen(process.argv[2])
