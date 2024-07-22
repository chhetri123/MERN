import express from "express";
import config from "./config/config.js";
import db from "./config/db.js";
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
import countryRouter from "./routes/country.routes.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/countries", countryRouter);

db.then(() => {
  console.log("Database connected..");
}).catch((err) => {
  console.log("Error in db");
});
app.listen(config.port, () => {
  console.log(`server running at port ${config.port}`);
});
