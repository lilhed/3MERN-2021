const fs = require('fs')

module.exports = function(dir, ext, callback){
    fs.readdir(dir, function(err, list){
        if(err){
            return callback(err, [])
        }
        let array = []
        for(i = 0; i < list.length; i++){
            const item = list[i]
            const split = item.split('.')
            if(split[1] && split[1] == ext){
                array.push(item)
            }
        }
        return callback(null, array)
    })
}
