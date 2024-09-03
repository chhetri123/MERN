import express from "express";

const app = express();
app.use(express.json());

const list = [];

app.post("/add-list", (req, res) => {
  const val = req.body.country;
  list.push(val);
  res.json(val);
});
app.get("/", (req, res) => {
  res.json(list);
});

app.listen(8080, () => {
  console.log("server running at port 8080");
});
