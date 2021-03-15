const fs = require('fs');

const readDir = (files, extension, callback) => {

  fs.readdir(files, function (err, list) {
    if (err) return callback(err);

    let result = [];
    list.map(file => file.slice(file.lastIndexOf('.'), file.length) == '.'+extension && result.push(file));

    callback(null, result);
  });

}

module.exports = readDir;