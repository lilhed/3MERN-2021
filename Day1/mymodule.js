const fs = require('fs');
const path = require('path');

module.exports = function(directory, extension, callback) {
    extension = "."+extension
    fs.readdir(directory, function (err,files){
        if(err){return callback(err)};

        var filteredList = [];
        files.forEach(function(file){
            if (path.extname(file) == extension)
            filteredList.push(file);
        });
        return callback(null, filteredList); 
    });
}