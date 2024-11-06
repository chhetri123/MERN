const express = require("express");
const eventRoutes = express.Router();
const authValidation = require("./../middleware/authMiddleware");
const {
  createEvent,
  getEvent,
  joinEvent,
} = require("../controllers/eventController.js");

eventRoutes.post("/", authValidation, createEvent);
eventRoutes.get("/", authValidation, getEvent);
eventRoutes.post("/:eventId/join", authValidation, joinEvent);

module.exports = eventRoutes;
