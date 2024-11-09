require("dotenv").config(".env");

const express = require("express");
const app = express();
const connectDb = require("./config/database");
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT || 3000;

// socket connection
const socketConnet = require("./socket/socketConnect");
socketConnet(server);

// Routes
const userRoute = require("./routes/userRoutes");
const familyRoute = require("./routes/familyRoutes");
const eventRoute = require("./routes/eventRoutes");
const photoRoutes = require("./routes/photoRoutes");
//
app.use(express.json());
app.use("/uploads", express.static("uploads"));

//

app.get("/", (req, res) => {
  res.send("Hello, Me!");
});

//
app.use("/api/user", userRoute);
app.use("/api/family", familyRoute);
app.use("/api/event", eventRoute);
app.use("/api/photo", photoRoutes);

connectDb();
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
