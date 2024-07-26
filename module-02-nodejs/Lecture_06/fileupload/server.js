import express from "express";
import multer from "multer";
import path from "path";

const imageStorage = multer.diskStorage({
  destination: "public/image",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: imageStorage,
  limits: { fileSize: 1000 * 1000 * 100 },
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

// const uploadMultiple = upload.array("docs")
const uploadSingle = upload.single("doc");

app.post("/upload", uploadSingle, (req, res) => {
  console.log(req.file);
  res.json({ ok: true });
});

app.listen(3030, () => {
  console.log("server running at 3030");
});
