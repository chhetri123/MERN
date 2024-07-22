import jwt from "jsonwebtoken";
import config from "../config/config.js";
import userModel from "../model/user.model.js";

const verifyAccessToken = async (req, res, next) => {
  try {
    const accesstoken = req.headers.authorization?.split(" ")[1];
    if (!accesstoken) return res.json({ msg: "Invalid Token" });

    const verifiedUser = jwt.verify(accesstoken, config.jwt_secret);

    if (!verifiedUser) return res.json({ msg: "Unverified token" });

    const currentUser = await userModel.findOne({ _id: verifiedUser._id });
    if (!currentUser) return res.json({ msg: "User not found" });
    next();
  } catch (err) {
    res.json({ msg: err?.message });
  }
};

export default verifyAccessToken;
