const express = require('express');
const app = express();
const fs = require('fs');
const [ ,, port, jsonPath ] = process.argv;

app.get('/books', (request, response) => {
    fs.readFile(jsonPath, ((err, data) => {
        if (err) {
            //throw err;
            response.sendStatus(500);
        }

        try {
            const json = JSON.parse(data.toString());
            response.json(json);
        } catch (err) {
            response.sendStatus(500);
        }
    }));
});

app.listen(port);