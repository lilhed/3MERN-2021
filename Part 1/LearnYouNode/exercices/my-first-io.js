let fs = require('fs')

let filePath = process.argv[2];

let content = fs.readFileSync(filePath);

let result = content.toString().split('\n').length - 1

console.log(result)