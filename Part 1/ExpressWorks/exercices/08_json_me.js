const express = require('express');
const fs = require('fs');
const app = express();

const port = process.argv[2];
const file = process.argv[3];

app.get('/books', function (request, response){
   fs.readFile(file, function (err, data){
        if (err){
            return console.log(err)
        }
        const books = JSON.parse(data);
        response.json(books);
   });
});

app.listen(port);