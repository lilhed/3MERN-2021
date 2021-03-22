const express = require('express')
const fs = require('fs');
var object = "";

const app = express()

app.listen(process.argv[2])

fs.readFile(process.argv[3], function (err,data){
    if(err){
        
    }else{
        object = JSON.parse(data.toString())
    };
});

app.get('/books', function(req,res){
    res.json(object);
})