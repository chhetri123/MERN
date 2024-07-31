import express from "express";
import { uploadSingle } from "./middleware/upload.middleware.js";
import { fileUpload } from "./controller/upload.controller.js";
import fs from "fs";

const app = express();

app.use(express.json());

app.post("/upload", uploadSingle, fileUpload);
// app.post('/read-me',async(req,res)=>{
//   console.l
// })\

app.post("/read-data", (req, res) => {
  const readStream = fs.createReadStream("me.txt", { highWaterMark: 1 });

  // Set the content type header, adjust it according to your file type
  res.setHeader("Content-Type", "text/plain");

  readStream.on("data", (dataChunk) => {
    readStream.resume();
    res.write(dataChunk);
  });

  readStream.on("end", () => {
    res.end();
  });

  readStream.on("error", (error) => {
    res.status(500).send("Internal Server Error");
  });

  // Pipe the read stream to the response
  // readStream.pipe(res);
});

app.listen(3030, () => {
  console.log("server running at 3030");
});
