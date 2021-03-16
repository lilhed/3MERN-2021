const fs = require('fs');

fs.readFile(process.argv[2], function callback(err, file) {
  if (err) throw err;

  const lines = Buffer.from(file).toString().split('\n').length - 1;

  console.log(lines);
});