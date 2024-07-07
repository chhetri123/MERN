const http = require("http");

const middleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const server = http.createServer((req, res) => {
  middleware(req, res, () => {
    if (req.method === "GET" && req.url === "/") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Welcome to the Homepage!");
    } else if (req.method === "GET" && req.url === "/about") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("About Us");
    } else {
      res.statusCode = 404;
      res.end("Not Found");
    }
  });
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
