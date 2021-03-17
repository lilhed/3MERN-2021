const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], function (err, files) {
    files.filter(name => path.extname(name).toLowerCase() === `.${process.argv[3]}`).forEach(file => console.log(file));
});
