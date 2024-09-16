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
// io.on("connection", function (socket) {
//   // Implement the socket.join and send message
//   console.log(socket.rooms);
//   socket.on("join_room", ({ room_id }) => {
//     socket.join(room_id);
//     console.log(socket.rooms);
//     console.log("User joined room:", room_id);
//   });
//   // send the message to the joined room
//   socket.on("send_message", (msg) => {
//     io.to(msg.room_id).emit("receive_message", msg);
//   });

//   // leave room
//   socket.on("leave_room", ({ room_id }) => {
//     socket.leave(room_id);
//     console.log("User left room:", room_id);
//   });

//   //   // User is typing in a room
//   //   socket.on("user_typing", (room_id) => {

//   socket.on("disconnect", () => {
//     console.log("User disconnected", socket.id);
//   });

//   //   console.log("A user connected", socket.id);
//   //   //
//   //   socket.on("chat_msg", (msg) => {
//   //     const { text, receiverId, senderId } = msg;
//   //     // Send message to receiverId by senderId
//   //     socket.to(receiverId).emit("user_chat", {
//   //       text,
//   //       senderId,
//   //       receiverId,
//   //       timestamp: new Date(),
//   //     });
//   //     // Emit the message to all connected clients except the sender
//   //     // io.emit("chat_msg", msg);
//   //   });
// });
io.on("connection", (socket) => {
  console.log("A user connected: " + socket.id);

  // Send message only to the newly connected client
  socket.emit("welcome", "Welcome to the server, " + socket.id);

  // Broadcast message to all clients except the sender
  socket.broadcast.emit("new user", `User ${socket.id} has joined`);

  // Send message to all clients
  io.emit("everyone", "A message to all connected clients");

  // Join the user to a room and send room-specific messages
  socket.join("room1");
  io.to("room1").emit("roomMessage", `User ${socket.id} joined room1`);

  // Listen for client messages
  socket.on("clientMessage", (msg) => {
    console.log("Message from client:", msg);

    // Respond to the specific client
    socket.emit("response", `Server received: ${msg}`);
  });

  // Handle disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected: " + socket.id);
    io.emit("everyone", `User ${socket.id} has left`);
  });
});
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
