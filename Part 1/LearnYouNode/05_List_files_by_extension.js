const fs = require('fs');
const path = require('path');
const [ dirPath, ext ] = process.argv.slice(2);

fs.readdir(dirPath, function (err, files) {
    if (err) {
        console.log(`Error: ${err}`);
        return;
    }

    files.filter(name => path.extname(name).toLowerCase() === `.${ext}`).forEach(console.log);
});