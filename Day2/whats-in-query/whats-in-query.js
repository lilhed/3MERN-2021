const express = require('express')


const app = express()

app.listen(process.argv[2])

app.get('/search', function(req,res){
    var query = req.query;
    res.send(query);
})