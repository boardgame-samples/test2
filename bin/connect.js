const server = require('./www')

const { Server } = require('socket.io');

const connect = new Server(server);
connect.on("connection", (socket)=>{
;      socket.on("post", (msg)=>{
 //      connect.emit("post", '');
       
       });
 //      connect.emit("post",'')
});
console.log(connect)
module.exports = connect