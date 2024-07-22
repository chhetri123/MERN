import express from "express";
import {
  getProduct,
  editProduct,
  deleteProduct,
  registerProduct,
} from "../controller/product.controller.js";

const productRouter = express.Router();

productRouter
  .get("/", getProduct)
  .post("/register", registerProduct)
  .patch("/edit/:id", editProduct)
  .delete("/delete/:id", deleteProduct);

export default productRouter;
