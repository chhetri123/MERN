import userModel from "../model/user.model.js";
import bcyrptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //find user
    // findOne => object return
    // find => list ( array) return
    const findUser = await userModel.findOne({ email }).select("+password");
    if (!findUser) throw new Error("User not found");
    const checkPassword = bcyrptjs.compareSync(password, findUser.password);
    if (!checkPassword) throw new Error("Invalid password");

    //jwt token
    const authToken = jwt.sign({ _id: findUser._id }, config.jwt_secret, {
      issuer: config.jwt_issuer,
      expiresIn: config.jwt_expiry,
    });

    res.json({
      token: authToken,
      msg: "User loggedin successfully",
    });
  } catch (err) {
    res.json({ err: err?.message || "something went while loggin in" });
  }
};

//user registration
export const register = async (req, res) => {
  try {
    const checkUserExist = await userModel.findOne({ email: req.body.email });
    if (checkUserExist) throw new Error("user exist!");
    const hashPassword = bcyrptjs.hashSync(req.body.password, 10);
    const list = await userModel.create({
      ...req.body,
      password: hashPassword,
    });
    res.json({
      message: "User registered successfully",
    });
  } catch (err) {
    res.json({ err: err?.message || "something went while registering in" });
  }
};
