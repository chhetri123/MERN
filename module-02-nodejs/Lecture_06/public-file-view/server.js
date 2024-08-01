import express from "express";
import path from "path";

/*
ONLY WHEN type is module.js
*/
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//

const app = express();

app.use("/api/media", express.static(path.join(__dirname, ".", "abc")));

// console.log(path.join(__dirname,'.',''));

app.listen(3030, () => {
  console.log("server running at 3030");
});
