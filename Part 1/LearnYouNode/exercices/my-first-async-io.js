let fs = require('fs')

let filePath = process.argv[2];

function linesCount() {
    fs.readFile(filePath, function doneReading(err, content) {
        let result = content.toString().split('\n').length - 1
        console.log(result)
    })
}

linesCount()
