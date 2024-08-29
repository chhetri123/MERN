const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // For serving static files

// Custom middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
app.use(logger);

// 1. New route that accepts query parameters
app.get("/query", (req, res) => {
  res.json(req.query);
});

// 2. Custom middleware for API key check
const apiKeyCheck = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey === "your-secret-api-key") {
    next();
  } else {
    res.status(401).json({ error: "Invalid API Key" });
  }
};

// 3. Route that serves a static HTML file
app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 4. Route that returns data in JSON format
app.get("/api/data", apiKeyCheck, (req, res) => {
  const data = {
    message: "This is JSON data",
    timestamp: new Date().toISOString(),
  };
  res.json(data);
});

// 5. Implement basic form validation in the /submit route
app.post("/submit", (req, res) => {
  const { name, email } = req.body;

  if (!name || name.length < 2) {
    return res
      .status(400)
      .json({ error: "Name must be at least 2 characters long" });
  }

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  res.json({ message: "Form submitted successfully", name, email });
});

// Existing routes...

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
