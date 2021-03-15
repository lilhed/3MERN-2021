let fs = require('fs')
let path = require('path')

let folder = process.argv[2]
let format = "." + process.argv[3]

function filesCount() {
    fs.readdir(folder, function doneReading(err, files) {
        files.forEach(function doneReading(file) {
            if (path.extname(file) === format) {
                console.log(file)
            }
        })
    })
}

filesCount()

