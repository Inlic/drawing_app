//Express and Sockets

let express = require('express');
let app = require('express')();
let http = require('http').createServer(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/'))


http.listen(8080, () => {
  console.log('listening on *:8080');
});