const express = require('express');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.use(express.static(__dirname + '/'))

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.broadcast.emit('get-canvas');
  socket.on('send-canvas', function (imgUrl) {
    console.log('emit')
    socket.emit('receive-canvas', imgUrl)
  })
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000')
})