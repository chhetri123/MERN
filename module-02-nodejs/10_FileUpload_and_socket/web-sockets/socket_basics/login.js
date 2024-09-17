import userModel from "./model/user.model.js";
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const loginRouter = express.Router();

loginRouter.post("/register", async (req, res) => {
  try {
    const hasnedPassword = bcrypt.hashSync(req.body.password, 10);
    const user = await userModel.create({
      ...req.body,
      password: hasnedPassword,
    });
    res.json(user);
  } catch (err) {
    res.json({ err: err?.message || "wrong!!!" });
  }
});

loginRouter.post("/login", async (req, res) => {
  try {
    const user = await userModel
      .findOne({ email: req.body.email })
      .select("+password");

    if (!user) throw new Error("user not found");
    const comparePassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!comparePassword) throw new Error("password not matched !");
    const token = jwt.sign({ _id: user._id }, "abcd", { expiresIn: "1y" });
    res.json({
      msg: "registration completed!",
      token,
    });
  } catch (err) {
    res.json({ err: err.message || "wrong !!" });
  }
});

export default loginRouter;
