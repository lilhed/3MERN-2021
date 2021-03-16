const express = require('express')
const app = express()

app.put('/message/:id', (req, res) =>  {
    let hash = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + req.id)
        .digest('hex')
    res.end(hash)
})
app.listen(process.argv[2])
