var config = require('./config/server');

var io = require('socket.io').listen(config.port);

var count = 0;

var clients = [];

io.on('connection', function(socket){
	count++;
  	console.log(socket.id + ' connected , now ' + count + 'user(s) online');
  	// console.log(socket);
  	socket.on('login',function(data){
	console.log(data.id + 'logined');
	clients.push({id:data.id,socket:socket,name:data.name});
	});
	socket.on('msg',function(data){
	 console.log(data);
	 // console.log(clients);
	 client = clients.find(function(ele){
	 	return ele.id === data.to;
	 		});
	 if(client){
	 client.socket.emit('msg',data);
	 console.log(client.name); 
		}
	});

});

io.on('disconnection',function(socket){
	count--;
	console.log(socket.id + 'leaved, now ' + count + 'user(s) online');
});