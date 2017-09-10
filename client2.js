var io = require('socket.io-client');
var config = require('./config/client');
console.log(config);
var socket = io(config.server);
socket.on('connect', function(){
	socket.emit('login', config.client);
	// socket.emit('msg',{from:2,to:1,msg:'show id'});
	socket.on('msg',function(data){
		console.log(data);


	});
});