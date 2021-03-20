const fs = require('fs')
const path = require('path');

const dirpath = process.argv[2]
const extension = process.argv[3]

fs.readdir(dirpath, function callback (err, list) {
    if(err){
        return console.log(err)
    }
    for (let i = 0; i < list.length - 1; i++) {
        if(path.extname(list[i]) === "." + extension) {
            console.log(list[i])
        }
    }
})