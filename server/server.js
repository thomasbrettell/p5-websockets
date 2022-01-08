const express = require('express');
const { Server } = require('socket.io');

const app = express();
const server = app.listen(3000, () => {
  console.log('Server running on port 3000');
});

app.use(express.static('../client'));

const io = new Server(server);

io.on('connection', (socket) => {
  console.log(`New connection: ${socket.id}`);

  socket.on('mouse', (data) => {
    console.log(data)
    socket.broadcast.emit('mouse', data);
  });
});
