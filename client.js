
var io = require('socket.io-client');
var config = require('./config/client');
console.log(config);
var socket = io(config.server);
socket.on('connect', function(){
	socket.emit('login',{appid:1,id:1,name:"hao-Mint"});
	socket.emit('msg',{from:1,to:2,msg:'show id'});
	});
