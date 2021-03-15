const bl = require('bl')
const http = require("http");

let count = 2;
const displayResponse = (response) => {
    response.setEncoding('utf8');

    response.pipe(bl(function (err, data) {
        console.log(data.toString());
        if(count !== 4){
            count++
            http.get(process.argv[count], displayResponse)
        }
    }))
}

http.get(process.argv[count], displayResponse);
