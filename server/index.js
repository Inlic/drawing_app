//Express and Sockets

let express = require('express');
let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/'))


//User Troubleshooting
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('init', { data: 'hello world' });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


http.listen(8080, () => {
  console.log('listening on *:8080');
});