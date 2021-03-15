const fs = require('fs')

var text = fs.readFileSync(process.argv[2])
var text_str = text.toString()
var text_arr = text_str.split('\n')
var sum = text_arr.length-1

console.log(sum)