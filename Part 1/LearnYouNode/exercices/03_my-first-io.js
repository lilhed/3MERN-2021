const fs = require('fs')

const filepath = process.argv[2]
const file = fs.readFileSync(filepath);
const content = file.toString()

const newlines = content.split('\n').length - 1

console.log(newlines)
