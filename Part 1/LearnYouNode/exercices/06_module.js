const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback){
    ext = '.'+ext
    fs.readdir(dir, function (err, files) {
        if(err){
            return callback(err)
        }

        let filesFiltered = []
        for (let i=0; i < files.length; i++){
            if(path.extname(files[i]) === ext){
                filesFiltered.push(files[i])
            }
        }
        return callback(null, filesFiltered)
    } );
}