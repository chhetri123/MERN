const express = require("express");
const eventRoutes = express.Router();
const authValidation = require("./../middleware/authMiddleware");
const {
  createEvent,
  getEvent,
  joinEvent,
  getEventDetails,
} = require("../controllers/eventController.js");
const { getEventMessage } = require("../controllers/messageController.js");

eventRoutes.post("/", authValidation, createEvent);
eventRoutes.get("/", authValidation, getEvent);
eventRoutes.post("/:eventId/join", authValidation, joinEvent);
eventRoutes.get("/:eventId/details", authValidation, getEventDetails);
eventRoutes.get("/:eventId/message", authValidation, getEventMessage);

module.exports = eventRoutes;
