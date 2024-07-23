const config = require("../config/config");
const verificationMiddleware = (req, res, next) => {
  const secret = req.query.secret;
  if (secret === config.secret) return next();
  res.json({ msg: "Unauthorized user" });
};
const verificationMiddlewarePatch = (req, res, next) => {
  const paramsid = req.params.id;
  const sanitizeId = parseInt(paramsid);
  if (typeof sanitizeId === "number" && !!sanitizeId) return next();
  res.json({ msg: "params is required" });
};

module.exports = { verificationMiddleware, verificationMiddlewarePatch };
