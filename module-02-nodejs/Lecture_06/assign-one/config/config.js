import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  jwt_secret: process.env.JWT_SECRET,
  jwt_issuer: process.env.JWT_ISSUER,
  jwt_expiry: process.env.JWT_EXPIRY,
};

export default config;
