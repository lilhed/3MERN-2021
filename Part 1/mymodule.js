const fs = require('fs')
const path = require('path')

module.exports = function(dir, ext, callback){
    fs.readdir(dir, function(err, list){
        if(err){
            return callback(err, [])
        }
        let array = []
        list.filter(name => path.extname(name).toLowerCase() === `.${ext}`).forEach(file => array.push(file));
        return callback(null, array)
    })
}
