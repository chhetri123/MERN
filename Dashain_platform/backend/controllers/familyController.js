const User = require("./../models/User");

const addFamilyMember = async function (req, res) {
  /*

User A requests to add User B as family member:
1. Check if users exist
2. Check if connection already exists
 create bi-directional connection
 similar to user A process

 When adding family member:
IF (user doesn't exist)
   RETURN user_not_found_error
IF (connection already exists)
   RETURN existing_connection_error
IF (self_connection_attempt)
   RETURN invalid_connection_error


  */

  const { userId } = req.body;
  const currentUserId = req.user._id;
  if (userId === currentUserId) {
    return res
      .status(400)
      .json({ message: "Cannot add self as family member" });
  }

  const user = await User.findById(currentUserId);
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  const userToAdd = await User.findById(userId);
  if (!userToAdd) {
    return res.status(400).json({ message: "User to add not found" });
  }

  if (user.familyMembers.includes(userToAdd._id)) {
    return res
      .status(400)
      .json({ message: "User already exist as  family member" });
  }

  user.familyMembers.push(userId);
  await user.save();

  //simlar reciprocal logic for another userId
  if (userToAdd.familyMembers.includes(currentUserId._id)) {
    return res
      .status(400)
      .json({ message: "User already exist as  family member" });
  }
  userToAdd.familyMembers.push(currentUserId);
  await userToAdd.save();

  res.status(200).json({
    message: "User added as family member successfully",
  });
};

const getFamilyMember = async (req, res) => {
  const currentUserId = req.user._id;
  const myInfo = await User.findOne({ _id: currentUserId }).populate(
    "familyMembers",
    "name email profilePicture"
  );
  res.status(200).json({
    data: myInfo,
  });
};
module.exports = {
  addFamilyMember,
  getFamilyMember,
};
