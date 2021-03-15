const http = require('http');
const through2Map = require('through2-map');
const [ ,, port ] = process.argv;

const server = http.createServer((request, response) => {
    if (request.method !== 'POST') return;

    request.pipe(through2Map(chunk => {
        return chunk.toString().toUpperCase();
    })).pipe(response)
});

server.listen(port);