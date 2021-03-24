const http = require('http');
const fs = require('fs');
const [ ,, port, filePath ] = process.argv;

const server = http.createServer(function (request, response) {
    const stream = fs.createReadStream(filePath);

    stream.on('open', () => stream.pipe(response));
    stream.on('error', err => response.end(err));
});

server.listen(port);