require("dotenv").config(".env");
const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = new Server(server);
const db_url = process.env.db_url;
const { socketTokenVerification } = require("./middleware/verifyToken");
//
app.use(express.json());

// routes
const userRoute = require("./routes/userRoutes");
// Models
const Message = require("./model/messageModel");
const Room = require("./model/roomModel");

// Api endpoints
app.use("/api/auth", userRoute);

// Socket connetions
io.use(socketTokenVerification);

io.on("connection", (socket) => {
  console.log(`${socket.user.username}is connected`);

  function errorHandler(err) {
    socket.emit("error", {
      message: err.msg || " Internal Error",
      status: err.statusCode || 500,
    });
  }
  socket.on("join_room", async ({ roomId }) => {
    const rooms = await Room.findOne({
      roomId: roomId,
    });
    if (!rooms) {
      const newRoom = new Room({
        roomId: roomId,
        membersId: [socket.user._id],
      });
      await newRoom.save();
      socket.join(newRoom.roomId);
      socket.emit("join_room_success", "Room created successfully");
      return;
    }

    // if room exists
    if (!rooms.membersId.includes(socket.user._id)) {
      rooms.membersId.push(socket.user._id);
      await rooms.save();
    }

    socket.join(rooms.roomId);
    socket.broadcast
      .to(rooms.roomId)
      .emit("user_added", `${socket.user.username} has joined the room`);

    socket.emit("join_room_success", "You joined the room");

    //
  });
  socket.on("send_message", async ({ text, roomId }) => {
    if (!text) {
      return errorHandler({
        msg: "Message text is required",
        statusCode: 400,
      });
    }

    const room = await Room.findOne({
      roomId: roomId,
    });
    if (!room) {
      return errorHandler({
        msg: "Room not found",
        statusCode: 404,
      });
    }
    if (!room.membersId.includes(socket.user._id)) {
      return errorHandler({
        msg: "You are not a member of this room",
      });
    }
    const newMessage = new Message({
      text: text,
      senderId: socket.user._id,
      roomID: room._id,
    });
    await newMessage.save();
    console.log(socket.rooms);
    console.log(roomId);
    io.to(String(roomId)).except(socket.id).emit("receive_message", {
      text: text,
      username: socket.user.username,
      createdAt: newMessage.createdAt,
    });
  });
});

// Connect to MongoDB
mongoose
  .connect(db_url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit(1);
  });

server.listen(process.env.port, () => {
  console.log("Server is running on port 3000");
});
