const fs = require('fs')

fs.readFile(process.argv[2], 'utf8', (err, data) => {
	var text_arr = data.split('\n')
	var sum = text_arr.length-1
	console.log(sum)
});