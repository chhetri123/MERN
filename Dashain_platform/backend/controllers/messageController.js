const Message = require("../models/Message");
const Event = require("../models/Event");

const getEventMessage = async (req, res) => {
  const { eventId } = req.params;
  const currentUserId = req.user._id;

  // event ko message get garta authenticated user should include in the event participants
  const event = await Event.findById(eventId);
  if (!event) {
    return res.status(404).json({
      msg: "Event not found",
    });
  }
  if (!event.participants.includes(currentUserId)) {
    return res.status(400).json({
      msg: "You are not authorized to view messages ",
    });
  }
  const eventMessages = await Message.find({
    eventId,
  })
    .populate("sender", "name email profilePicture")
    .sort("createdAt");
  res.json({ eventMessages });
};

module.exports = { getEventMessage };
