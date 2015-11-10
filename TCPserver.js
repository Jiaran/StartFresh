/**
 * New node file
 */

var net = require('net');
var server = net.createServer(function(socket) {
	console.log('Connect from:'+socket.remoteAddress);
	socket.end('Nice connect. Byebye!');
}
);

server.listen(7000,'127.0.0.1');
