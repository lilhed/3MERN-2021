const bl = require('bl');
const http = require('http');

http.get(process.argv[2], function callback(response) {
  response.pipe(bl(function(err, data) {
    if (err) throw err;
    console.log(data.toString().length);
    console.log(data.toString());
  }));
});