const userSchema = require("../model/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllusers = async (req, res) => {
  const users = await userSchema.find({});
  res.json({ users });
};

const register = async (req, res) => {
  try {
    const { email, username, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({
        msg: "Passwords do not match",
      });
    }
    const user = await userSchema.findOne({
      email: email,
    });

    if (user) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    const hashedPW = await bcrypt.hash(password, 10);

    const userAdd = new userSchema({
      email: email,
      username: username,
      password: hashedPW,
    });

    const newUSER = await userAdd.save();

    res.status(200).json({
      msg: "Registration Completed",
      user: newUSER,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: "Server Error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userSchema
      .findOne({
        email: email,
      })
      .select("+password");
    if (!user) {
      return res.status(400).json({ error: "User Not Found" });
    }
    const isCorrect = await bcrypt.compare(password, user.password);
    if (!isCorrect) {
      return res.status(400).json({
        error: "Incorrect email or password",
      });
    }

    const accessToken = jwt.sign({ id: user._id }, process.env.jwt_secret, {
      issuer: process.env.jwt_issuer,
      expiresIn: process.env.jwt_expiresIn,
    });
    res.status(200).json({
      msg: "Login Succesful",
      accessToken: accessToken,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      msg: "Server Error",
    });
  }
};

module.exports = { register, login, getAllusers };
