import express from "express";
import multer from "multer";
import path, { dirname } from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imageStorage = multer.diskStorage({
  destination: "public/image",
  filename: (req, file, cb) => {
    console.log(Date.now() + path.extname(file.originalname));
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: imageStorage,
  limits: { fileSize: 1000 * 1000 * 0.5 },
  fileFilter: (req, file, cb) => {
    const supportedFormat = [
      "image/jpg",
      "image/png",
      "image/gif",
      "image/jpeg",
      "image/svg",
      "video/mp4",
    ];
    if (!supportedFormat.includes(file.mimetype))
      return cb("File format is not supported", false);

    cb(null, true);
  },
});

const app = express();

app.use(express.json());

const uploadSingle = upload.single("doc");

app.post("/upload", uploadSingle, (req, res) => {
  console.log(req.file);
  res.json({ ok: true });
});

app.get("/media", express.static(path.join(__dirname, "..", "..", "public")));

app.listen(3030, () => {
  console.log("server running at 3030");
});
