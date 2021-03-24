const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (error, contents) => {
    if(error) {
        console.error(error);
        return;
    }

    const lines = contents.split('\n').length - 1;
    console.log(lines);
});