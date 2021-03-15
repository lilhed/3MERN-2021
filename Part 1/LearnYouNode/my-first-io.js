const fs = require('fs');

const file = fs.readFileSync(process.argv[2]);

let lines = (Buffer.from(file).toString()).split('\n');
lines = lines.splice(0, lines.length - 1);

console.log(lines.length);