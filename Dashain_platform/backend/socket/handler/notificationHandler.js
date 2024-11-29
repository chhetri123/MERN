const Notification = require("./../../models/Notification");

const notificationHandler = (io, socket) => {
  socket.on("send-family-request", async (payload) => {
    const { recipientId, type } = payload;
    console.log(socket.user);

    const notification = new Notification({
      recipient: recipientId,
      sender: socket.user._id,
      type: type,
      eventId: null,
    });

    await notification.save();
    await notification.populate("recipient", "name profilePicture");
    await notification.populate("sender", "name profilePicture");
    io.to(recipientId).emit("new_notification", {
      msg: `${socket.user.name} has send you a family request`,
      notification,
    });
  });
  socket.on("respond-family-request", (payload) => {});
};
module.exports = notificationHandler;
