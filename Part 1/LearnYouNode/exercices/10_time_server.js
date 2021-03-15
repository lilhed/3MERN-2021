const net = require('net');

const port = process.argv[2];

function addZero(nb){
    if (nb < 10){
        return '0'+nb
    }
    return nb
}

function giveDate(){
    const date = new Date();

    const year      = date.getFullYear();
    const month     = addZero(date.getMonth()+1);
    const day       = addZero(date.getDate());
    const hour      = addZero(date.getHours());
    const minute    = addZero(date.getMinutes());

    return `${year}-${month}-${day} ${hour}:${minute}`
}

const server = net.createServer(function (socket){
    socket.end(`${giveDate()}\n`)
});

server.listen(port);