const express = require('express')
const path = require('path')

const app = express()

app.listen(process.argv[2])

app.put('/message/:id', function(req,res){
    var id = req.params.id;
    var hashDateId = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')

    res.send(hashDateId);
});