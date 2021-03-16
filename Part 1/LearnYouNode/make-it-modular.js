const readDir = require('./mymodule');

readDir(process.argv[2], process.argv[3], function (err, list) {
  if (err) return console.log('Error:', err);

  list.map(file => console.log(file))
});