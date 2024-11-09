const socketIO = require("socket.io");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Event = require("../models/Event");
const messsageHandler = require("./messageHandler/messageHandler");

const socketConnect = (server) => {
  const io = socketIO(server);

  io.use(async (socket, next) => {
    const token = socket.handshake["headers"].token;
    if (!token) {
      return next(new Error("No token provided"));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return next(new Error("User not found"));
    }
    socket.user = user;
    next();
  });

  io.on("connection", (socket) => {
    socket.on("join-event", async (data) => {
      const event = await Event.findById(data.eventId);
      if (!event.participants.includes(socket.user._id)) {
        return socket.emit("error", "You are not a participant of this event");
      }
      socket.join(data.eventId);
      console.log(`User ${socket.user.name} joined event ${data.eventId}`);
    });

    messsageHandler(io, socket);
  });
};

module.exports = socketConnect;
