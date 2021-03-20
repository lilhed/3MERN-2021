const fs = require('fs');

const buf = fs.readFileSync(process.argv[2]);
const str = buf.toString();
const strArray = str.split('\n');
console.log(strArray.length - 1);