const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set("view engine", "ejs");

const products = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 15 },
  { id: 3, name: "Product C", price: 20 },
];

app.get("/", (req, res) => {
  res.render("index", { products });
});

app.post("/add-to-cart", (req, res) => {
  const { id } = req.body;
  let cart = req.cookies.cart || [];

  const productIndex = cart.findIndex((item) => item.id == id);
  if (productIndex !== -1) {
    cart[productIndex].quantity += 1;
  } else {
    cart.push({ id: parseInt(id), quantity: 1 });
  }

  res.cookie("cart", cart, { maxAge: 7 * 24 * 60 * 60 * 1000 });
  res.redirect("/cart");
});

app.get("/cart", (req, res) => {
  let cart = req.cookies.cart || [];
  cart = cart.map((item) => {
    const product = products.find((p) => p.id === item.id);
    return { ...product, quantity: item.quantity };
  });

  res.render("cart", { cart });
});

app.post("/update-cart", (req, res) => {
  const { id, quantity } = req.body;
  let cart = req.cookies.cart || [];

  const productIndex = cart.findIndex((item) => item.id == id);
  if (productIndex !== -1) {
    if (quantity == 0) {
      cart.splice(productIndex, 1);
    } else {
      cart[productIndex].quantity = parseInt(quantity);
    }
  }

  res.cookie("cart", cart, { maxAge: 7 * 24 * 60 * 60 * 1000 });
  res.redirect("/cart");
});

app.get("/clear-cart", (req, res) => {
  res.clearCookie("cart");
  res.redirect("/cart");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
