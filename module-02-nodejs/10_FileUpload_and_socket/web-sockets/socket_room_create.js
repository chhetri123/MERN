const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

app.get("/", function (req, res) {
  res.json({
    message: "Welcome to the Socket.IO Chat App",
  });
});
io.on("connection", function (socket) {
  console.log("A user connected: " + socket.id);
  socket.join("room1");

  console.log(socket.rooms);

  socket.on("join_room", (msg) => {
    const { room_id } = msg;
    socket.join(room_id);
    socket.broadcast
      .to(room_id)
      .emit("new user", `User ${socket.id} has joined`);
    socket.emit("join_msg", `You joined the room ${room_id}`);
  });

  socket.on("send_message", (msg) => {
    io.to(msg.room_id).except(socket.id).emit("receive_message", msg);
  });
});
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
