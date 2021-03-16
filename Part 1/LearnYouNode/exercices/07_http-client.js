const http = require('http')
const url = process.argv[2]

http.get(url, function callback (response) {
    response.setEncoding("utf-8")
    response.on('data', function (data) {
        console.log(data)
    })
})