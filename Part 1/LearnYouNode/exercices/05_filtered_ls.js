const fs = require('fs');
const path = require('path')

const dir = process.argv[2];
const ext = '.'+process.argv[3];

fs.readdir(dir, function (err, files) {
    if(err){
        return console.log(err)
    }
    for (let i=0; i < files.length; i++){
        if(path.extname(files[i]) === ext){
            console.log(files[i]);
        }
    }
} );