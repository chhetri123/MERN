import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer);

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

//middleware
io.use((socket, next) => {
  try {
    const userToken = socket.handshake.headers.authorization; //jwt //verify // _id // user // pass
    if (!userToken) throw new Error("invalid user");
    socket.data = userToken;
    next();
  } catch (err) {
    console.group(err);
  }
});
//
io.on("connection", (socket) => {
  socket.join(socket.data);
  socket.emit("joined", `room ${socket.data} joined successfully`);
  // console.log(socket.data);
  // console.log("user-information", socket.id);
  // socket.on("joinRoom", (roomID) => {
  //   socket.join(parseInt(roomID));
  //   console.log(socket.rooms, socket.id);
  // });

  socket.on("leaveRoom", (roomID) => {
    socket.leave(parseInt(roomID));
    socket.emit("joined", `you have left ${roomID}`);
  });

  socket.on("msg", (payload) => {
    socket.to(payload.room).emit("msg", payload.msg);
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

httpServer.listen(4040, () => {
  console.log("Server running at port 4040");
});
