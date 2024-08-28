import jwt from "jsonwebtoken";
import config from "../config/config.js";
import userModel from "../model/user.model.js";

export const verifyAccessToken = async (req, res, next) => {
  try {
    const accesstoken = req.headers.authorization?.split(" ")[1];
    if (!accesstoken) return res.json({ msg: "Invalid Token" });

    const verifiedUser = jwt.verify(accesstoken, config.jwt_secret);

    if (!verifiedUser) return res.json({ msg: "Unverified token" });

    const currentUser = await userModel.findOne({ _id: verifiedUser._id });

    if (!currentUser) return res.json({ msg: "User not found" });
    req.user = currentUser;
    next();
  } catch (err) {
    res.json({ msg: err?.message });
  }
};

// // middleware for authorization
// export const restrictUser = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res.json({ msg: "Unauthorized user" });
//     }
//     next();
//   };
// };
