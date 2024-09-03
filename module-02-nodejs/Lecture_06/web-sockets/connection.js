import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import loginRouter from "./login.js";
import db from "./db.js";
import jwt from "jsonwebtoken";
import userModel from "./model/user.model.js";

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(loginRouter);

const io = new Server(httpServer, { cors: "http://localhost:5173" });

//middleware ( jwt verify ) => _id:'' => userModel.find => req.user = user

//routes ('/user',middleware',(req,res) => console.lg(req.user))

//on ( listen garne )
// socket.on("event_name", (anything) => {
//     console.log(anything);
//   });

//emit ( pathaune )
//   socket.emit("event_name", "data-here");

//broadcast and emit and listen
/*
io.on("connection", (socket) => {
    socket.on("current-message", (msg) => {
      socket.broadcast.emit("forwaded-message", msg);
    });
});
*/
// middleware(req,res,next);
// app.get("/", controller);
// middleware
// controller
//middleware

//middleware
io.use(async (socket, next) => {
  try {
    const userToken = socket.handshake.headers.authorization; //jwt //verify // _id // user // pass
    if (!userToken) throw new Error("invalid user");
    const validateToken = jwt.verify(userToken, "abcd");
    const findUser = await userModel.findOne({ _id: validateToken._id });
    socket.data = findUser;
    next();
  } catch (err) {
    console.group(err);
  }
});

//group
const users = [];

//logical part
io.on("connection", (socket) => {
  users.push(socket.data);
  socket.join(socket.data._id);
  socket.emit(
    "joined",
    `${socket.data.fullname} has joined ROOM:${socket.data._id} successfully`
  );
  console.log(`${socket.data.fullname} is online`);
  // console.log(socket.data);
  // console.log("user-information", socket.id);
  // socket.on("joinRoom", (roomID) => {
  //   socket.join(parseInt(roomID));
  //   console.log(socket.rooms, socket.id);
  // });

  socket.on("online-users", () => {
    socket.emit("online-users-list", users);
  });

  socket.on("msg", (payload) => {
    socket.to(payload.room).emit("msg", payload.msg);
  });

  socket.on("disconnect", () => {
    socket.leave(socket.data._id);
    socket.broadcast.emit("joined", `you have left ${socket.data._id}`);
    const currentUsersIndex = users.findIndex(
      (user) => user._id == socket.data._id
    );
    users.splice(currentUsersIndex, 1);
    console.log(`${socket.data.fullname} is offline`);
  });

  //create room and join
  // socket.on("joinRoom", (roomId) => {
  //   socket.join(roomId);
  //   socket.emit("joined", `successfully joined room ${roomId}`);
  //   console.log(socket.id);
  //   io.on('something',payload => {
  //     socket.emit() //malai matrai
  //     socket.broadcast.emit()
  //     socket.to()
  //       socket.to("nmfEe-HdOkTtHTitAAAF").emit('something-msg',payload)
  //   })
  // });
  //send custom message
  // socket.on("msg", (payload) => {
  // const { room, msg } = payload;
  // console.log(room, msg, socket.rooms);
  // socket.to(room).emit("msg", msg);
  // io.in(room.toString()).emit("msg", msg);
  // });
});

//sending message to ourself socket.emit
//sending message to everyone except me socket.broardcast.emit
//sending message to everyone including me io.emit
//joining room => socket.join(room_id)
//send private message to room => socket.to(room_id).emit

db.then(() => {
  console.log("connected to database");
}).catch((err) => {
  console.log(err);
});

httpServer.listen(4040, () => {
  console.log("Server running at port 4040");
});
