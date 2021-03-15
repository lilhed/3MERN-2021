const fs = require('fs');
const file_path = process.argv[2];

const file = fs.readFileSync(file_path);
const newLinesCount = file.toString().split('\n').length - 1;

console.log(newLinesCount);