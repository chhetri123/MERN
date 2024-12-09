## **1. Morgan**

- **Purpose**: Logs HTTP requests for monitoring traffic and debugging.

**Before Using Morgan**:
You won't see structured logs of requests in the console, making debugging harder:

```javascript
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
// No logging; difficult to track the source of issues.
```

**After Using Morgan**:

```javascript
const morgan = require("morgan");

app.use(morgan("tiny")); // Logs method, URL, and response time.
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
```

**Output in Console**:

```
GET / 200 - 6.521 ms
```

This helps monitor traffic patterns and identify suspicious requests.

---

## **2. Rate Limiting (`express-rate-limit`)**

- **Purpose**: Limits repeated requests to APIs from the same IP to prevent brute-force attacks.

**Before Using Rate Limiting**:
Attackers can make unlimited requests:

```javascript
app.post("/login", (req, res) => {
  res.send("Login successful");
});
// No limit on the number of login attempts.
```

**After Using Rate Limiting**:

```javascript
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests
  message: "Too many requests, please try again later.",
});

app.use("/login", limiter); // Applies rate limiting only to the login route.
app.post("/login", (req, res) => {
  res.send("Login successful");
});
```

Now, a user gets blocked after 10 attempts in 15 minutes.

---

## **3. Helmet**

- **Purpose**: Secures HTTP headers to protect against vulnerabilities like XSS, clickjacking, etc.

**Before Using Helmet**:
Headers expose unnecessary information:

```http
X-Powered-By: Express
Content-Security-Policy: None
```

**After Using Helmet**:

```javascript
const helmet = require("helmet");

app.use(helmet());
```

**Secured Headers**:

```http
X-Content-Type-Options: nosniff
Content-Security-Policy: default-src 'self';
```

This protects the app from attacks by setting secure defaults for headers.

---

## **4. Mongo Sanitize (`express-mongo-sanitize`)**

- **Purpose**: Prevents NoSQL injection attacks by removing special characters like `$` and `.` from inputs.

**Before Using Mongo Sanitize**:
An attacker can send:

```json
{ "email": { "$gt": "" } }
```

Which can manipulate MongoDB queries:

```javascript
User.find(req.body.email); // This may fetch unintended results.
```

**After Using Mongo Sanitize**:

```javascript
const mongoSanitize = require("express-mongo-sanitize");

app.use(mongoSanitize());
```

The input is sanitized:

```json
{ "email": "" }
```

This prevents MongoDB query manipulation.

---

## **5. XSS Clean (`xss-clean`)**

- **Purpose**: Prevents Cross-Site Scripting (XSS) by sanitizing user input.

**Before Using XSS Clean**:
An attacker can inject scripts in input fields:

```json
{ "name": "<script>alert('XSS!')</script>" }
```

Which could execute in the browser.

**After Using XSS Clean**:

```javascript
const xss = require("xss-clean");

app.use(xss());
```

The script is sanitized:

```json
{ "name": "&lt;script&gt;alert('XSS!')&lt;/script&gt;" }
```

---

## **6. HPP (`hpp`)**

- **Purpose**: Prevents HTTP parameter pollution by removing duplicate query parameters.

**Before Using HPP**:
A request like this:

```
GET /api?price=100&price=200
```

Might cause the backend to process conflicting parameters.

**After Using HPP**:

```javascript
const hpp = require("hpp");

app.use(hpp());
```

Now, only the first parameter is accepted:

```
GET /api?price=100
```

---

## **7. CORS (`cors`)**

- **Purpose**: Controls cross-origin resource sharing to ensure requests are only accepted from trusted domains.

**Before Using CORS**:
Any domain can send requests, which may allow unwanted access.

**After Using CORS**:

```javascript
const cors = require("cors");

const corsOptions = {
  origin: "https://trusted-domain.com", // Only allow this origin
};
app.use(cors(corsOptions));
```

Now, only requests from `https://trusted-domain.com` are allowed.

---

### **Combining Them All**

Here’s how you might set up an application with all these packages:

```javascript
const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

const app = express();

// Middlewares
app.use(morgan("combined"));
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(cors({ origin: "https://trusted-domain.com" }));

// Rate limiting for API routes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use("/api", limiter);

// Example route
app.get("/", (req, res) => {
  res.send("Secured server!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

This setup secures your application against common vulnerabilities.
