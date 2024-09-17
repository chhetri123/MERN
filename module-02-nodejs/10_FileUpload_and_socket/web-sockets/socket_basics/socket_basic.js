const express = require("express");
const { Server } = require("socket.io");

const http = require("http");
const app = express();

// create socket server
const server = http.createServer(app);
const io = new Server(server);

const socketMiddleware = (socket, next) => {
  const token = socket.handshake.headers.authorization;
  if (!token) {
    socket.error = {
      message: "Token not provided",
      status: 401,
    };
    return next();
  }

  next();
};

io.use(socketMiddleware);

///
io.on("connection", function (socket) {
  if (socket.error) {
    socket.emit("error", socket.error);
    socket.disconnect(true);
  }
  console.log("New client connected");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
