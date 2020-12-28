const express = require('express');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.use(express.static(__dirname + '/'))

let userNum = 0;
let newUsers = [];

io.on('connection', (socket) => {
  newUsers.push(socket);
  console.log('a user connected');
  userNum++

  if (userNum > 1) {
    socket.broadcast.emit('get-canvas');
    socket.on('send-canvas', function (imgUrl) {
      for (let i = 0; i < newUsers.length; i++) {
        let thisSocket = newUsers[i]
        thisSocket.emit('receive-canvas', imgUrl)
      }
      newUsers = [];
    });
  }
  socket.on('disconnect', () => {
    console.log('user disconnected');
    userNum--
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