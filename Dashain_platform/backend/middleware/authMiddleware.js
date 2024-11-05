const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authValidation = async (req, res, next) => {
  // check breare token in auth headwer
  console.log(req.headers["authorization"]);

  const token = req?.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res
        .status(401)
        .json({ message: "User not found with that token" });
    }
    req.user = user;
    //
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
module.exports = authValidation;
