import express from "express";
import config from "./config/config.js";
import db from "./config/db.js";
import authRouter from "./routes/auth.router.js";
import roomRouter from "./routes/room.router.js";
import { Server } from "socket.io";
import { createServer } from "http";
import jwt from "jsonwebtoken";
import userModel from "./model/user.model.js";
import roomModel from "./model/room.model.js";
import messageModel from "./model/messge.model.js";
import userRouter from "./routes/user.routes.js";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer);
app.use(express.json());
app.use("/room", roomRouter);
app.use("/auth", authRouter);
app.use("/user", userRouter);

db.then(() => {
  console.log("Database connected");
}).catch((err) => {
  console.log(err);
});

io.use(async (socket, next) => {
  try {
    const token = socket.handshake.headers.authorization;
    const verifyToken = jwt.verify(token, config.jwt_secret);

    //user find
    const currentUser = await userModel.findOne({ _id: verifyToken._id });
    if (!currentUser) throw new Error("user not found");
    socket.data.user = currentUser;
    next();
  } catch (err) {
    console.log(err);
  }
});

io.on("connection", (socket) => {
  try {
    //room join
    socket.on("join-room", async (roomId) => {
      // roomId:roomId => roomId ( if key and value are same then you can simply use value itself )

      const checkRoomExist = await roomModel.findOne({ roomId });
      if (!checkRoomExist) return socket.emit("join", "Room not found");

      const roomName = `${checkRoomExist.name}-${checkRoomExist.roomId}`;
      socket.join(roomName);
      io.to(roomName).emit("join", `${socket.data.user.name} has joined !!`);
    });

    //room leave
    socket.on("leave-room", async (roomId) => {
      socket.leave(roomId);
      socket.emit("join", `You left room ${roomId}`);
    });

    //chat message
    socket.on("msg", async (payload) => {
      const checkExistingRoom = await roomModel.findOne({
        roomId: payload.room,
      });
      if (!checkExistingRoom) return;
      const roomName = `${checkExistingRoom.name}-${checkExistingRoom.roomId}`;
      const savedMsg = await messageModel.create({
        sender: socket.data.user._id,
        messageType: payload.messageType,
        message: payload.message,
        media: payload.media,
        room: checkExistingRoom._id,
      });
      await savedMsg.populate("sender room");
      io.to(roomName).emit("msg", savedMsg);
    });

    //message
    console.log("user connected");
  } catch (err) {
    console.log(err);
  }
});

//
process.on("unhandledRejection", (e) => {
  //email server ( 'server' )
  console.log(e);
});
// io.on("disconnect", (socket) => {
//   console.log(socket);
// });

httpServer.listen(config.port, () => {
  console.log(`server running at port ${config.port}`);
});
