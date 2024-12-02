const { validationResult } = require("express-validator");
const AppError = require("../../utils/AppError");

const validate = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    const errors = error.array().map((obj) => {
      return obj.msg;
    });
    throw new AppError(errors.join(","), 400);
  }
  next();
};

module.exports = validate;
