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
  const currentUser = await User.findById(req.user._id);
  if (!currentUser) {
    return res.status(404).json({ message: "User not found" });
  }

  // 2. (User is the creator OR Creator is in user's family members)
  const events = await Event.find({
    participants: req.user._id, // User must be a participant
    $or: [
      { creator: req.user._id }, // User is creator
      { creator: { $in: currentUser.familyMembers } }, // Creator is in user's family
    ],
  })
    .sort("date")
    .populate("creator", "name email profilePicture")
    .populate("participants", "name email profilePicture");

  res.json(events);
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

const getEventDetails = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const currentUserId = req.user._id;

    /// Event exist or not
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ msg: "Event not found" });
    }
    const isParticipant = event.participants.includes(currentUserId);
    if (!isParticipant) {
      return res
        .status(403)
        .json({ msg: "You are not authorized to view event" });
    }

    const isCreator = event.creator.toString() === currentUserId.toString();
    const isJoined = isParticipant;

    await event.populate("creator", "name email profilePicture");
    await event.populate("participants", "name email profilePicture");
    res.status(200).json({
      event,
      isCreator,
      isJoined,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
};

module.exports = { createEvent, getEvent, joinEvent, getEventDetails };
