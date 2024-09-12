const express=require("express");
const userRoute= express.Router();
const authenticateToken=require("../middleware/userVerify")
const {register,login,getAllusers}= require("../controller/userController");

userRoute.get("/",authenticateToken,getAllusers)

userRoute.post("/register",register);

userRoute.post("/login",login);



module.exports= userRoute;