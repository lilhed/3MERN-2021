const net = require('net')

const server = net.createServer(function(socket){
    const date = new Date()
    date.setMonth(date.getMonth() + 1)
    const month = ('0' + date.getMonth()).slice(-2)
    const day = ('0' + date.getDate()).slice(-2)
    const hours = ('0' + date.getHours()).slice(-2)
    const minutes = ('0' + date.getMinutes()).slice(-2)
    const data = `${date.getFullYear()}-${month}-${day} ${hours}:${minutes}`
    console.log(socket.write(data))
    socket.end('\n')
})
server.listen(process.argv[2])
