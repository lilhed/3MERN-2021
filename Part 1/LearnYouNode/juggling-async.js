const bl = require('bl');
const http = require('http');
const [_node, _path, ...urls] = process.argv;

let count = 0;
let lines = [];

const httpGet = (url, i) => {

  http.get(url, function callback(response) {

    response.pipe(bl(function(err, data) {
      if (err) throw err;
      lines[i] = Buffer.from(data).toString();

      count === 2 && lines.map(line => console.log(line));
      return count++;
    }));

  });

}

urls.map((url, i) => httpGet(url, i));