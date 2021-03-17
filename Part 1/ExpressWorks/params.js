const express = require('express')
const crypto = require('crypto')
const app = express()

app.put('/message/:id', function(req, res){
    const id = req.params.id

    res.end(crypto
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')
    )
})

app.listen(process.argv[2])
