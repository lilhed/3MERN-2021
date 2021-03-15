const fs = require('fs');

fs.readdir(process.argv[2], function callback(err, list) {
  if (err) throw err;

  list.map(file => file.slice(file.lastIndexOf('.'), file.length) == '.'+process.argv[3] && console.log(file));
});