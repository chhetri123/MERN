const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllUser = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};
const signup = async (req, res) => {
  try {
    // {username,password,email, conformPassword}
    const { username, password, email, confirmPassword, role } = req.body;
    // conformPassword and pasword ==> are same ?
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    // Check Wheather Email is already Used or Registered or Not
    const user = await User.findOne({
      email: email,
    });
    if (user) {
      return res.status(400).json({ error: "Email is already registered" });
    }
    // if not==> Hash the user Entered Password;
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save all the Details in User Database ( username, password:hashedPasswored, email)
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
      role: role || "user",
    });

    const newUsers = await newUser.save();
    // Res==> You are logged in
    res.status(200).json({
      msg: "Registration successful",
      user: newUsers,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server Error" });
  }
};

const login = async (req, res) => {
  // {email,password}==> req.body
  try {
    const { email, password } = req.body;
    // Check wheather email exist Or not ===> if not DO SignUp
    const user = await User.findOne({
      email: email,
    }).select("+password");
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Database ma save vako hashed password ra req.body ko password compare garne ...
    const isCorrect = await bcrypt.compare(password, user.password);

    // compare garda if yes==> your logged in
    if (!isCorrect) {
      return res.status(400).json({ error: "Incorrect Email or  Password" });
    }

    // After jwt -===> create new Jwt and sent as a response
    const accesstoken = jwt.sign(
      {
        id: user._id,
      },
      process.env.jwt_secret,
      {
        issuer: process.env.jwt_issuer,
        expiresIn: process.env.jwt_expiresIn,
      }
    );

    // if no ==> invalid User name and Password
    res.status(200).json({
      msg: "Login Successful",
      accesstoken: accesstoken,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  signup,
  login,
  getAllUser,
};
