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
  try {
    const { userId: familyMemberId } = req.body;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.familyMembers.includes(familyMemberId)) {
      return res.status(400).json({ message: "Family member already added" });
    }

    user.familyMembers.push(familyMemberId);
    await user.save();

    // Add reciprocal relationship
    const familyMember = await User.findById(familyMemberId);
    if (familyMember && !familyMember.familyMembers.includes(user._id)) {
      familyMember.familyMembers.push(user._id);
      await familyMember.save();
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
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
