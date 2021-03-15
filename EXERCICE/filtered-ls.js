const fs = require('fs');
fs.readdir(process.argv[2],(err, files) => {
    files.forEach(file => {
        console.log(file);
    })
})
