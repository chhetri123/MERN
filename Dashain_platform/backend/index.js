require("dotenv").config(".env");

const express = require("express");
const app = express();
const connectDb = require("./config/database");
const port = process.env.PORT || 3000;

// Routes
const userRoute = require("./routes/userRoutes");
const familyRoute = require("./routes/familyRoutes");
const eventRoute = require("./routes/eventRoutes");
//
app.use(express.json());

//
app.get("/", (req, res) => {
  res.send("Hello, Me!");
});

//
app.use("/api/user", userRoute);
app.use("/api/family", familyRoute);
app.use("/api/event", eventRoute);

connectDb();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
