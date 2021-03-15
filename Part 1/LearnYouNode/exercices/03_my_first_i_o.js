const fs = require('fs');

const filename = process.argv[2];

const file = fs.readFileSync(filename);

const content = file.toString();

const lines = content.split('\n').length - 1;

console.log(lines);