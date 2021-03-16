const fs = require('fs')
// const buf = fs.readFileSync('my-first-io.txt')
const buf = fs.readFileSync(process.argv[2])
const str = buf.toString()

console.log(str.split('\n').length - 1)
