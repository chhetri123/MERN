import express from "express";
import { handleAuth, handleRole } from "./middleware.js";

const app = express();

app.get("/", handleAuth, handleRole(["admin", "user"]), async (req, res) => {
  res.json({
    ok: true,
    msg: "Hello",
  });
});

app.listen(4040, () => {
  console.log("server running at port 4040");
});
