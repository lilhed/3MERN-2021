const fs = require('fs');

const file = fs.readFileSync(process.argv[2]);
const lines = Buffer.from(file).toString().split('\n').length - 1;

console.log(lines);