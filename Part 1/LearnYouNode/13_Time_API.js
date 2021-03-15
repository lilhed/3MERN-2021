const http = require('http');
const [ ,, port ] = process.argv;

function parseIsoDate(isoTime) {
    return new Date(isoTime);
}

function dateToIso(date) {
    return {
        'hour': date.getHours(),
        'minute': date.getMinutes(),
        'second': date.getSeconds()
    }
}

function dateToUnixTime(date) {
    return {'unixtime': date.getTime()};
}



function toJSON(data) {
    return JSON.stringify(data);
}

const server = http.createServer((request, response) => {
    if (request.method === 'GET') {
        const url = new URL(request.url, 'http://timeapi.com');

        let date = parseIsoDate(url.searchParams.get('iso'));
        let time = null;

        switch (url.pathname) {
            case '/api/parsetime':
                time = toJSON(dateToIso(date));
                break;
            case '/api/unixtime':
                time = toJSON(dateToUnixTime(date));
                break;
        }

        if (time != null) {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(time);
        }
    }
});

server.listen(port);