let filter = require('./mymodule.js')

let folder = process.argv[2]
let format = process.argv[3]

filter(folder, format, function(err, files) {
    if (err)
        return console.error('There was an error :', err)

    files.forEach(function (file) {
        console.log(file)
    })
})