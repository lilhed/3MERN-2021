const fs = require('fs');
const file_path = process.argv[2];

fs.readFile(file_path, function (err, buffer) {
    if (err) {
        console.log(`Error: ${err}`);
        return;
    }

    const newLinesCount = buffer.toString().split('\n').length - 1;
    console.log(newLinesCount);
});