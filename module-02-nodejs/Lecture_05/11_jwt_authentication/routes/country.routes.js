import express from "express";
import {
  getCountry,
  postCountry,
  editCountry,
  deleteCountry,
} from "../controller/country.controller.js";
import verifyAccessToken from "../middleware/auth.middleware.js";

const countryRouter = express.Router();

countryRouter
  .get("/", getCountry)
  .post("/add", verifyAccessToken, postCountry)
  .patch("/edit/:id", verifyAccessToken, editCountry)
  .delete("/delete/:id", verifyAccessToken, deleteCountry);

export default countryRouter;
