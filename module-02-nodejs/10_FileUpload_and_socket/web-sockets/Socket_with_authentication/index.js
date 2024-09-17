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
const Message = require("../Basic_Socket/model/messageModel");

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

  socket.on("send_message", async (msg) => {
    if (!msg.text) {
      return errorHandler({
        msg: "Message text is required",
        statusCode: 400,
      });
    }
    // const room = Room.findById(msg.roomId);
    // if (!room) {
    //   return socket.emit("error", "Room not found");
    // }
    const newMessage = new Message({
      text: msg.text,
      senderId: socket.user._id,
    });
    await newMessage.save();

    io.except(socket.id).emit("receive_message", newMessage);
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
