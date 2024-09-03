//user admin
//user admin superadmin dispatch editor vendor

export const handleAuth = async (req, res, next) => {
  try {
    req.role = "user";
    next();
  } catch (err) {
    res.json(err);
  }
};

export const handleRole = (roles) => {
  return async (req, res, next) => {
    if (roles.includes(req.role)) return next();
    return res.json({ ok: false, msg: "Unauthorized user" });
  };
};
