const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.listen(process.argv[2]);

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req,res){
    res.send(req.body.str.split('').reverse().join(''));
});

