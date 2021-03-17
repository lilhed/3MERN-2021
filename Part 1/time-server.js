const net = require('net')
const server = net.createServer(function (socket) {
    socket.end()
})
server.listen(8000)
