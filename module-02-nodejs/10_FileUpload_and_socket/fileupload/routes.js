import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.use("/public", express.static(path.join(__dirname, ".", "public")));

export default router;
