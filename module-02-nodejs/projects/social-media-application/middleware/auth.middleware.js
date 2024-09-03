import userModel from "../model/user.model.js";
import jwt from "jsonwebtoken";

export const authenticateUser = async (req, res, next) => {
  try {
    //header ( token )
    // header => authorization => ["Bearer","token"]
    const token = req.headers.authorization.split(" ")[1];
    const verifyToken = jwt.verify(token, "");
    if (!verifyToken) throw new Error("User not verified");
    // {
    //     _id:"",
    //     isseu:"some"
    //     iat:jdgklsjf
    //     expt:jfalkjkfda
    // }
    // {payload,issuer,iat,exp}
    const currentUser = await userModel.findOne({ _id: verifyToken._id });
    if (!currentUser) throw new Error("User not found !!");
    req.user = currentUser;
    next();
  } catch (err) {
    res.json({ msg: err?.message || "Error" });
  }
};
