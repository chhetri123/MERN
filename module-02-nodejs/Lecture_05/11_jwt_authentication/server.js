import express from "express";
import config from "./config/config.js";
import db from "./config/db.js";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
import countryRouter from "./routes/country.routes.js";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  if (req.url.startsWith("/api/countries")) {
    req.io = io;
  }
  next();
});

app.get("/hello", function (req, res) {
  io.emit("countryChange", {
    action: "add",
    country: {
      id: 1,
      name: "USA",
      capital: "Washington D.C.",
      population: 331002651,
    },
  });
  res.send("Hello World!");
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/countries", countryRouter);

db.then(() => {
  console.log("Database connected..");
}).catch((err) => {
  console.log("Error in db");
});
server.listen(config.port, () => {
  console.log(`server running at port ${config.port}`);
});
