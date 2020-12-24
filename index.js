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
  socket.on('draw-circle', function (drawObject) {
    socket.broadcast.emit('draw-circle', drawObject)
  })
  socket.on('draw-line', function (drawObject) {
    socket.broadcast.emit('draw-line', drawObject)
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000')
})