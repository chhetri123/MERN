require("dotenv").config(".env");

const express = require("express");
const app = express();
const connectDb = require("./config/database");
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const { validationResult } = require("express-validator");
const User = require("./models/User");

// Securities packages
const morgan = require("morgan");
const rateLimiter = require("express-rate-limit");
const limiter = rateLimiter({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "To many requests, Try again after 10 minutes",
});
const helmet = require("helmet");
const mongoSanitizer = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:30002", "http://localhost:3000"],
  methods: ["GET", "POST", "PATCH"],
};

// app.use(limiter)

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
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan(":method :url :status  - :response-time ms"));
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

app.use(xss());
app.use(mongoSanitizer());
app.use(hpp());
app.post("/test", limiter, async (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.json({
    data: req.body,
  });
  // const users = await User.find(req.body);
  // res.json({
  //   users,
  // });
  // res.json({
  //   msg: "hello",
  // });
});
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
