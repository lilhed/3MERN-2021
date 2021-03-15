const http = require('http')

const server = http.createServer(function(req, res){
    const url = new URL(req.url, 'http://localhost:' + process.argv[2])
    const iso = url.searchParams.get('iso')
    const date = new Date(iso)

    if(url.pathname === '/api/parsetime'){
        res.write(JSON.stringify({
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
        }))
        res.end()
    }else if(url.pathname === '/api/unixtime'){
        res.write(JSON.stringify({
            'unixtime': date.getTime()
        }))
        res.end()
    }

    res.writeHead(200, {'Content-Type': 'application/json'})
})

server.listen(process.argv[2])
