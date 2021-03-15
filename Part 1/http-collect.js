const bl = require('bl')
const http = require("http");

const displayResponse = (response) => {
    response.setEncoding('utf8');

    response.pipe(bl(function (err, data) {
        console.log(data.toString().length);
        console.log(data.toString());
    }))
}

http.get(process.argv[2], displayResponse)
