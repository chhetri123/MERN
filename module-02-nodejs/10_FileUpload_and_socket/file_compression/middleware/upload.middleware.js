import path from "path";
import multer from "multer";

const imageStorage = multer.diskStorage({
  destination: "public/image",
  filename: (req, file, cb) => {
    console.log(Date.now() + path.extname(file.originalname));
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
export const uploadSingle = upload.single("doc");
