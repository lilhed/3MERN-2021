const fs = require('fs');

fs.readFile(process.argv[2], function callback(err, file) {
  if (err) throw err;

  let lines = (Buffer.from(file).toString()).split('\n');
  lines = lines.splice(0, lines.length - 1);

  console.log(lines.length);
});