import express from "express";
const app = express();

import postRouter from "./routes/post.route.js";

app.use("/post", postRouter);

app.listen(5050, () => {
  console.log("server running at port 5050");
});
