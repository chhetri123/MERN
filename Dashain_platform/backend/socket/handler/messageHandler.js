const Event = require("../../models/Event");
const Message = require("../../models/Message");

function messsageHandler(io, socket) {
  socket.on("send-message", async (payload) => {
    const { eventId, content } = payload;
    const event = await Event.findById(eventId);
    if (!event) {
      return console.error("Event not found");
    }
    if (!event.participants.includes(socket.user._id)) {
      return console.error("you are not a participant of this event");
    }

    const message = new Message({
      eventId: eventId,
      content: content,
      sender: socket.user._id,
    });

    await message.save();
    await message.populate("sender", "name profilePicture");

    io.to(eventId).emit("new-message", {
      message,
    });
  });
}

module.exports = messsageHandler;
