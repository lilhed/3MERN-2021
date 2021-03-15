const http = require('http');
const bl = require('bl');
const [ ,, url ] = process.argv;

http.get(url, function (res) {
    res.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err);
        }

        let dataString = data.toString();

        console.log(dataString.length);
        console.log(dataString);
    }));
});