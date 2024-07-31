import sharp from "sharp";
import fs from "fs";

export const fileUpload = async (req, res) => {
  const imageInfo = await sharp(req.file.path).metadata();
  const compressedImage = await sharp(req.file.path).toBuffer();
  sharp(compressedImage)
    .toFormat(imageInfo.format)
    .toFile(`public/image/compressed-${req.file.filename}`, (err, _) => {
      if (!err) fs.unlinkSync(req.file.path);
    });
  res.json({ path: req.file.path });
};
