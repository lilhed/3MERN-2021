const express = require('express');
const app = express();

const port = process.argv[2];

app.put('/message/:id', function (request, response){
    const ID = request.params.id;
    const result = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + ID)
        .digest('hex')

    response.send(result);
});

app.listen(port);