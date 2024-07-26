import express from "express";
import multer from "multer";

const upload = multer({ dest: "public/uploads" });

const app = express();

app.use(express.json());

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.json({ ok: true });
});

app.listen(3030, () => {
  console.log("server running at port 3030");
});
