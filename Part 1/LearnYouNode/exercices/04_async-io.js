const fs = require('fs')

const filepath = process.argv[2]

fs.readFile(filepath, function callback (err, data) {
    if(err){
        return console.log(err)
    }
    console.log(data.toString().split('\n').length - 1)
})