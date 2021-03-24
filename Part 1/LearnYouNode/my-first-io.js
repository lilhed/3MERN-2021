const fs = require('fs');

const Content = fs.readFileSync(process.argv[2]).toString();
const lines = Content.split('\n').length - 1;

console.log(lines);