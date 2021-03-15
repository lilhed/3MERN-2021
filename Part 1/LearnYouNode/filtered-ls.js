const fs = require('fs');
const path = require('path');
const [node,file,folderPath,extensionToFilter] =  process.argv;

fs.readdir(folderPath,(err, list) =>{
    if(err){
        return console.log(err);
    }
    list
})