const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

const register = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });

  if (user) {
    throw new AppError("User Already Exist !!", 208);
  }
  user = new User({
    name,
    email,
    password,
  });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);

  await user.save();
  res.satus(201).json({
    status: "success",
    message: "User registered successfully",
  });
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);

  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new AppError("Invalid credentials", 401);
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
});

const editUserDetails = async (req, res) => {
  try {
    const { name } = req.body;
    const file = req.files;

    const userId = req.user._id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (name) user.name = name;
    if (file) {
      user.profilePicture = `/uploads/${req.file.filename}`;
    }
    await user.save();
    res.status(200).json({ message: "User details updated sucessfully", user });
  } catch (error) {
    res.status(500).json({ message: "Sever error", error: error.message });
  }
};

module.exports = {
  register,
  login,
  editUserDetails,
};
