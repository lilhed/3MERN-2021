const net = require('net');
const strftime = require('strftime');
const strftimeFR = strftime.localize('fr_FR');
const ports = process.argv.slice(2);

ports.forEach(port => {
    const server = net.createServer(socket => {
        const date = getDate();

        socket.end(`${date.date}\n`);
    });

    server.listen(port);
});

function getDate() {
    return { format: 'YYYY-MM-DD hh:mm', date: strftimeFR('%Y-%m-%d %H:%M').toString() };
}