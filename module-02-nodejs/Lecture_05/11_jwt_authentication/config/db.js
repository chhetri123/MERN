import config from "./config.js";
import mongoose from "mongoose";

const db = mongoose.connect(config.db_url);

export default db;
