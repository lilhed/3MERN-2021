const http = require('http');

const port = process.argv[2];

function convertDate(date) {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
}

function convertUnix(date) {
    return {
        unixtime: date.getTime()
    };
}

const server = http.createServer(function (request, response){
    const parsedUrl = new URL(request.url, 'http://example.com')
    const date = new Date(parsedUrl.searchParams.get('iso'))
    let data;

    if (RegExp(/^\/api\/parsetime/).test(request.url)) {
        data = convertDate(date)
    } else if (RegExp(/^\/api\/unixtime/).test(request.url)) {
        data = convertUnix(date)
    }

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(data));
});

server.listen(port);