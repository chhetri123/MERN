import express from "express";
import jwt from "jsonwebtoken";
import { v4 } from "uuid";
import userModel from "./model/user.model.js";
import tokenModel from "./model/token.model.js";
import mongoose from "mongoose";
// import cookieParser from "cookie-parser";

const app = express();

// app.use(cookieParser());
app.use(express.json());

//validate user token
const validateUser = (req, res, next) => {
  try {
    const authToken = req.headers["authorization"];
    if (!authToken) throw new Error("Token not found");
    const accessToken = authToken.split(" ")[1];
    const verifyToken = jwt.verify(accessToken, "abcd");
    if (verifyToken) return next();
    throw new Error("Login required");
  } catch (err) {
    res.json({ msg: "err" });
  }
};

app.post("/", validateUser, async (req, res) => {
  res.json("token validated");
});

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const userFind = await userModel.findOne({ email: email });
    if (!userFind) throw new Error("user not found");
    const accessToken = jwt.sign({ _id: userFind._id }, "abcd", {
      expiresIn: "1m",
      issuer: "np",
    });
    const refreshToken = v4();

    await tokenModel.findOneAndUpdate(
      { user: userFind._id }, //filter
      { $set: { token: refreshToken, user: userFind._id } }, //setter
      { upsert: true } //return value
    );

    // console.log(req.headers.cookie.split("=")[1]);
    // res.cookie("name", refreshToken, { expires: new Date(30), httpOnly: true });
    res.json({ accessToken, refreshToken });
  } catch (err) {
    console.log(err);
    res.json({ msg: "err" });
  }
});

//token hydration logic
app.post("/hydrate-token", async (req, res) => {
  try {
    const refreshToken = req.body.refreshToken;
    const checkTokenExist = await tokenModel.findOne({ token: refreshToken });
    if (!checkTokenExist) throw new Error("Token doesnot exist!");
    const accessToken = jwt.sign({ _id: checkTokenExist.user }, "abcd", {
      expiresIn: "1m",
      issuer: "np",
    });
    const newRefreshToken = v4();
    await tokenModel.findOneAndUpdate(
      { user: checkTokenExist.user },
      { $set: { token: newRefreshToken } }
    );
    res.json({ accessToken, refreshToken: newRefreshToken });
  } catch (err) {
    res.json({ msg: "err" });
  }
});

app.listen(4040, () => {
  console.log("server running at 4040");
});

mongoose
  .connect("mongodb://localhost:27017/refresh-token-db")
  .then(() => {
    console.log("Db connected...");
  })
  .catch((err) => {
    console.log(err);
  });
