import express from "express";
import multer from "multer";
import path from "path";
import sharp from "sharp";
import fs from "fs";

const imageStorage = multer.diskStorage({
  destination: "public/image",
  filename: (req, file, cb) => {
    console.log(Date.now() + path.extname(file.originalname));
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: imageStorage,
  limits: { fileSize: 1000 * 1000 * 10 },
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

app.post("/upload", uploadSingle, async (req, res) => {
  const compressedImage = await sharp(req.file.path)
    .resize(200, 200)
    .toBuffer();
  sharp(compressedImage).toFile(
    `compressed-${req.file.originalname}`,
    (err, info) => {
      if (!err) fs.unlinkSync(req.file.path);
      console.log(info);
    }
  );
  res.json({ ok: true });
});

app.listen(3030, () => {
  console.log("server running at 3030");
});
