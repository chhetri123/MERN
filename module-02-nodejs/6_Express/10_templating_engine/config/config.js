const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  secret: process.env.SECRET,
  port: process.env.PORT,
};
