const http = require('http');
const [ ,, url ] = process.argv;

http.get(url, function (res) {
    res.setEncoding('utf-8');

    res.on('data', function (data) {
        if (data) {
            console.log(data);
        }
    });

    res.on('error', function (error) {
        if (error) {
            console.log(error);
        }
    });

    res.on('end', function (end) {
        if (end) {
            console.log(end);
        }
    });
});