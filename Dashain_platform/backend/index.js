require("dotenv").config(".env");

const express = require("express");
const app = express();
const connectDb = require("./config/database");
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const { query, body, validationResult } = require("express-validator");

// socket connection
const socketConnet = require("./socket/socketConnect");
socketConnet(server);

// Routes
const userRoute = require("./routes/userRoutes");
const familyRoute = require("./routes/familyRoutes");
const eventRoute = require("./routes/eventRoutes");
const photoRoutes = require("./routes/photoRoutes");
const AppError = require("./utils/AppError");

const errorHandler = require("./middleware/errorMiddleware");
//
app.use(express.json());
app.use("/uploads", express.static("uploads"));

//

app.get(
  "/test-error",
  // query("test").notEmpty(),
  (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({
        status: 4,
      });
      // const error = new AppError(result.array()[0].msg, 400);
      // return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(result);
    res.json({
      msg: req.query,
    });

    // const error = new Error("Developement Error", 500);
    // throw error;
  }
);

//
app.use("/api/user", userRoute);
app.use("/api/family", familyRoute);
app.use("/api/event", eventRoute);
app.use("/api/photo", photoRoutes);

app.use(errorHandler);
connectDb();
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
