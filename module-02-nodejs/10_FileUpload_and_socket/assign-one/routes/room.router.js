import express from "express";
import {
  addRoom,
  listRoom,
  deleteRoom,
} from "../controller/room.controller.js";
const roomRouter = express.Router();

roomRouter.get("/list", listRoom);
roomRouter.post("/create", addRoom);
roomRouter.delete("/delete/:id", deleteRoom);

export default roomRouter;
