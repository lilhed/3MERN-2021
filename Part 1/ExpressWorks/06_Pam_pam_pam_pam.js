const express = require('express');
const app = express();
const crypto = require('crypto');
const [ ,, port ] = process.argv;

app.put('/message/:id', (request, response) => {
    const id = request.params.id;
    const sha1 = crypto.createHash('sha1')
                        .update(new Date().toDateString() + id)
                        .digest('hex');

    response.end(sha1);
});

app.listen(port);