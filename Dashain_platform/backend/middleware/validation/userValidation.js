const { body } = require("express-validator");

const userRegistrationVal = () => {
  // email, password, name, confirmPassword,
  return [
    body("name")
      .notEmpty()
      .withMessage("Provide your name")
      .isLength({
        min: 3,
        max: 20,
      })
      .withMessage("Provide your name in between 3 and 20 characters"),
    body("email")
      .notEmpty()
      .withMessage("Provide your email")
      .isEmail()
      .withMessage("Provide vaild email address")
      .trim(),
    body("password")
      .notEmpty()
      .withMessage("Provide your password")
      .isLength({
        min: 8,
        max: 16,
      })
      .withMessage("Provide password in between 8 and 16 characters"),
    //   .isStrongPassword()
    //   .withMessage(
    //     "Password must include Captial letters and numbers and symbols"
    //   ),

    body("confirmPassword")
      .notEmpty()
      .withMessage("Provide confirm password")
      .custom((value, { req }) => {
        return value.trim() === req.body.password.trim();
      })
      .withMessage("Passwords must be same "),
  ];
};
const userLoginVal = () => {};
const userDetailEditVal = {};

const eventCreateVal = {};
const eventUpdateVal = {};

module.exports = {
  userRegistrationVal,
  userLoginVal,
};
