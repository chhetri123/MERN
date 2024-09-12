const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const verifyToken = async (req, res, next) => {
  try {
    // Extract Bearer token from req header
    const token = req.headers?.authorization?.split(" ")[1];

    // if token not present ... Invalid USer ( token Not Found)
    if (!token) {
      return res.status(401).json({ message: "You are Not Logged In" });
    }
    // if Token Present
    // ==>  decode the token Using Jwt.verify
    const verifyToken = jwt.verify(token, process.env.jwt_secret);
    console.log(verifyToken);
    if (!verifyToken) {
      return res.status(401).json({ message: "Invalid token " });
    }
    // ==> Extract Id from Jwt Playload
    const userId = verifyToken.id;
    // Very Id ==> check the Id in the Database

    const user = await User.findOne({
      _id: userId,
    });

    // if user not Found ==> Invalid Token
    if (!user) {
      res.status(401).json({ message: "user not found with that token" });
    }

    // If user found ==> Then next()
    req.user = user;
    //
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      return next();
    }
    res.json({ message: "You dont Have Permission to this route" });
  };
};

module.exports = { verifyToken, restrictTo };
