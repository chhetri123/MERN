import mongoose from "mongoose";
import config from "./config.js";

const db = mongoose.connect(config.db_url);

export default db;
