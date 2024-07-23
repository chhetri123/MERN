const {
  getCountries,
  postCountries,
  patchCountries,
  deleteCountries,
} = require("../controller/country.controller");
const {
  verificationMiddleware,
  verificationMiddlewarePatch,
} = require("../middlewares/verify.middleware");

const express = require("express");
const router = express.Router();

// const path = require("path");
//
// console.log(path.join(__dirname, "controller"));

//leave this to public
router.get("/", getCountries);
//make these endpoints private
router.post("/add", verificationMiddleware, postCountries);
router.patch(
  "/edit/:id",
  verificationMiddleware,
  verificationMiddlewarePatch,
  patchCountries
);
router.delete(
  "/remove/:id",
  verificationMiddleware,
  verificationMiddlewarePatch,
  deleteCountries
);

module.exports = router;
