let fs = require('fs')
let path = require('path')

module.exports = function (folder, format, callback) {
    fs.readdir(folder, function(err, files) {
        if (err)
            return callback(err)

        files = files.filter(function(file) {
            return path.extname(file) === '.' + format
        })
        callback(null, files)
    })
}