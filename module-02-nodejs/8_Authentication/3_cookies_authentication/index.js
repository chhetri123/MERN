const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

app.get("/", function (req, res) {
  res.cookie(
    "myname",
    JSON.stringify({
      id: 1,
      name: "Sushank Dont Sleep",
      number: 1,
    }),
    {
      expires: new Date(Date.now() + 3600000),
      // 1 hour
      path: "/",
      httpOnly: true,
      secure: false, // set true in production
    }
  );

  res.json({
    msg: "cookie set",
  });
});
app.get("/dashboard", function (req, res) {
  if (!req.cookies.myname) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  res.send("<h1> Hi  welcome to Dashboard</h1>");
});

app.get("/getcookie", function (req, res) {
  let data = JSON.parse(req.cookies.myname);
  data.number++;
  res.cookie("myname", JSON.stringify(data), {
    expires: new Date(Date.now() + 3600000),
    // 1 hour
    path: "/",
    httpOnly: true,
    secure: false, // set true in production
  });
  res.send(`<h1> Hi ${data.name}!</h1>
    <p> ${data.number}</p>
    
        `);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
