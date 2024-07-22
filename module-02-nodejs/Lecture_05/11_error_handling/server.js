import express from "express";
const app = express();

app.use(express.json());

const list = []; //accept only list of string;
// ( / )
app.post("/", (req, res) => {
  try {
    const currentItem = req.body.num;
    if (typeof currentItem !== "number") {
      const err = new Error("Only numbers are accepted");
      err.statusCode = 400;
      throw err;
    }

    if (currentItem > 10 && currentItem < 20) {
      return res.json({
        msg: "this is /",
      });
    }
    const err = new Error("Number should be greater than 10 and lessthan 20");
    err.statusCode = 400;
    throw err;
  } catch (err) {
    res.status(err.statusCode || 500).json({ err: err.message });
  }
});
// ( /home )
app.get("/home", (req, res) => {
  res.json({
    msg: "this is home",
  });
});
// ( /about )
app.get("/about", (req, res) => {
  res.json({
    msg: "this is about",
  });
});

app.use("*", (req, res) => {
  res.status(404).json("404 page not found");
});

app.listen(4040, () => {
  console.log("server running");
});

//.then(res => data).catch(err => {})
