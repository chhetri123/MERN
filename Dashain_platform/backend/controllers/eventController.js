const Event = require("../models/Event");
const User = require("../models/User");
const createEvent = async (req, res) => {
  const { title, description, date } = req.body;
  const currentUserId = req.user._id;
  const newEvent = new Event({
    title,
    description,
    date,
    creator: currentUserId,
    participants: [currentUserId],
  });

  await newEvent.save();
  res.status(201).json({
    msg: "Event is Created Successfully",
    data: newEvent,
  });
};
const getEvent = async (req, res) => {
  const currentUserId = req.user._id;
  const myEvents = await Event.find({
    creator: currentUserId,
  });
  if (myEvents.length === 0) {
    return res.status(404).json({ msg: "No events found" });
  }
  res.status(200).json({
    data: myEvents,
  });
};

const joinEvent = async (req, res) => {
  const eventId = req.params.eventId;
  const userId = req.user._id;

  const isEventExist = await Event.findById(eventId);
  //   console.log(isEventExist);
  if (!isEventExist) {
    return res.status(404).json({ msg: "Event not found" });
  }
  if (isEventExist.participants.includes(userId)) {
    return res.status(400).json({ msg: "User is already a participant" });
  }
  // Event exist or not

  const creatorInfo = await User.findOne({
    _id: isEventExist.creator,
  });
  console.log(userId);
  console.log(creatorInfo.familyMembers);
  console.log(creatorInfo.familyMembers.includes(userId));
  if (!creatorInfo.familyMembers.includes(userId)) {
    return res
      .status(403)
      .json({ msg: "You are not a family member of event creator" });
  }
  isEventExist.participants.push(userId);
  await isEventExist.save();
  res.status(200).json({ msg: "User joined the event successfully" });

  //If user already exist in the event
  //if user is family member of event creator
  //event ko participant ma add garne
};
module.exports = { createEvent, getEvent, joinEvent };
