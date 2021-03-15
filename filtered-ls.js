const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (error, files) => {
    if(error) {
        console.error(error);
        return;
    }

    const filteredFiles = files.filter((file) => {
        return path.extname(file) === '.' + process.argv[3];
    });

    filteredFiles.forEach((file) => {
        console.log(file);
    });
});