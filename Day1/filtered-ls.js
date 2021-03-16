const fs = require('fs');
const path = require('path');
var extension = "."+process.argv[3];

fs.readdir(process.argv[2], function(err, files){
    if(err){}
    else{
        files.forEach(file =>{
            if (path.extname(file) == extension)
                console.log(file);
        });
    }
})