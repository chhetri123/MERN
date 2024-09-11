### Understanding JWT (JSON Web Token)

JWT (JSON Web Token) is a popular way to securely transfer data between two parties (like a client and a server). It is commonly used for **authentication**.

Think of JWT as a **digital ID card**. Once a user is authenticated, the server gives them this ID card (the token), which they can use to prove their identity when accessing protected resources.

---

### What is JWT?

- **JWT** is a token format that is **signed** (and optionally encrypted) to ensure that the information it contains is secure.
- A JWT token contains information about the user (like their ID or email) and is used to **verify** who they are during future requests.

### Structure of JWT

A JWT consists of three parts, separated by dots (`.`):

1. **Header**: Contains metadata about the type of token and the algorithm used for signing.
2. **Payload**: Contains the actual data (called **claims**), like user information (e.g., `userId`, `username`).
3. **Signature**: Ensures the token hasn’t been tampered with.

**Example of a JWT**:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1hbmlzaCIsInVzZXJJZCI6MTIzfQ.LDVPpbYPxANvLdGrRm-jPhO-mUwVlfVIBSPFvMC_vHg
```

---

### How JWT Works (Simple Example)

1. **User Logs In**:

   - The user provides their username and password.
   - The server verifies the credentials. If they are correct, it creates a JWT token with the user’s information (e.g., `userId`).

2. **JWT is Sent to the Client**:

   - The server sends the JWT back to the user.
   - The user stores this token (usually in **localStorage** or **cookies**).

3. **Client Sends JWT with Every Request**:

   - When the user tries to access a protected route, the client (browser) sends the JWT in the request header (usually under `Authorization`).

4. **Server Verifies JWT**:
   - The server checks if the JWT is valid and signed correctly.
   - If valid, the server allows access to the protected resource.

---

### JWT Parameters Explained:

1. **Header**:

   - Contains two pieces of information:
     - **alg**: The algorithm used to sign the token (e.g., `HS256` for HMAC SHA256).
     - **typ**: Type of token, usually "JWT".

   **Example**:

   ```json
   {
     "alg": "HS256",
     "typ": "JWT"
   }
   ```

2. **Payload**:

   - Contains the **claims** (data about the user or other information).
   - There are two types of claims:
     - **Registered Claims**: Predefined claims like `iss` (issuer), `exp` (expiration time), `sub` (subject), etc.
     - **Custom Claims**: Any additional information you want to include (e.g., `userId`, `username`).

   **Example Payload**:

   ```json
   {
     "userId": "123",
     "username": "Manish",
     "exp": 1672527600 // Expiration time in Unix timestamp
   }
   ```

3. **Signature**:
   - Used to verify the token hasn’t been altered.
   - The signature is generated using:
     - The **header** + **payload** + a **secret key**.
   - When the server receives the token, it re-generates the signature with the same secret key to check if the token is valid.

---

### JWT Example in Node.js

Let’s create a basic authentication example using JWT in **Node.js**.

#### 1. Install Dependencies:

```bash
npm install express jsonwebtoken
```

#### 2. Simple Example Code:

```javascript
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = "mySecretKey"; // Secret key for signing tokens

// Dummy user data (In a real app, you'd fetch this from a database)
const users = [{ id: 1, username: "manish", password: "password123" }];

// Login route to generate JWT
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) return res.status(401).send("Invalid credentials");

  // Create the JWT token with user info (payload)
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

// Protected route that requires JWT
app.get("/dashboard", (req, res) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(403).send("Token required");

  try {
    // Verify the token
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ message: `Welcome ${decoded.username} to your dashboard!` });
  } catch (err) {
    res.status(401).send("Invalid token");
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

#### How It Works:

1. **Login**:

   - When the user logs in, the server checks the credentials.
   - If they are correct, a JWT is created using the user’s `id` and `username` as payload, and a secret key is used to sign the token.
   - The token is sent back to the user.

2. **Accessing a Protected Route**:
   - When the user wants to access a protected route like `/dashboard`, they need to send the JWT in the `Authorization` header.
   - The server verifies the token using the same secret key and allows access if the token is valid.

#### Example of a JWT:

The JWT token might look something like this after the user logs in:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1hbmlzaCIsInVzZXJJZCI6MSwiaWF0IjoxNjA2MzQxMzcyLCJleHAiOjE2MDYzNDUzNzJ9.RVEVrGtsMeEn-RqUpT5aQwvH-uCg3rB7TfqHRrtFbkg
```

---

### Key Concepts of JWT:

- **Stateless**: The server doesn't need to store session data for each user. Instead, it can simply verify the token with each request.
- **Self-contained**: All the user information is inside the token itself.
- **Expiration**: Tokens typically have an expiration time (`exp`), after which they are no longer valid.

---

### Summary:

- JWT is a secure way to transmit information, especially for authentication.
- It is commonly used in web applications for stateless authentication.
- The token contains three parts: header, payload, and signature.
- You can use JWT to manage login sessions without storing user data on the server.

In simple terms, JWT acts like a digital ID card that users can use to prove their identity after logging in.

# What is a Refresh Token?

A **refresh token** is a long-lived token used to get a **new access token** once the current access token expires. While access tokens are short-lived for security reasons, refresh tokens can be used to keep users logged in without needing them to re-authenticate every time the access token expires.

### Why Do We Need a Refresh Token?

1. **Short-lived Access Tokens for Security**:

   - Access tokens typically have a short lifespan (e.g., 15 minutes or 1 hour) to minimize the security risk if a token is compromised.
   - However, if the user has to log in every time their access token expires, it would be inconvenient.

2. **Security**:

   - Refresh tokens are stored more securely and are only sent when requesting a new access token.
   - Access tokens are more vulnerable since they are sent with every request. Therefore, keeping them short-lived reduces the risk.

3. **User Convenience**:
   - Refresh tokens allow for **silent re-authentication**. When an access token expires, the application can use the refresh token to get a new one without requiring the user to log in again.

### When Do We Use a Refresh Token?

1. **Login Sessions**:

   - After the user logs in, the server issues an **access token** and a **refresh token**. The access token is used for authentication in the short term, while the refresh token is used when the access token expires.

2. **Token Expiry**:

   - When the client (e.g., a browser or mobile app) receives a "token expired" response, it sends the refresh token to the server to request a new access token.

3. **Persistent Logins**:
   - When users want to stay logged in for an extended period, refresh tokens are used in combination with access tokens to handle long sessions securely.

---

### How Do Refresh Tokens Work?

1. **User Logs In**:

   - The server issues two tokens:
     - An **access token** (short lifespan, e.g., 15 minutes)
     - A **refresh token** (long lifespan, e.g., 7 days or more)

2. **Accessing Protected Resources**:

   - The client uses the access token to access protected resources.
   - When the access token is valid, everything works fine.

3. **Token Expiration**:

   - If the access token expires, the client cannot access protected routes anymore. Instead of logging the user out or asking them to log in again, the client sends the refresh token to the server.

4. **Token Refresh**:
   - The server verifies the refresh token. If valid, it generates a new access token and sends it back to the client.
   - The user can now continue accessing protected resources with the new access token.

---

### Implementing Refresh Token in Node.js (with JWT)

Here's how you can implement refresh tokens in **Node.js** using JWT.

#### 1. Install Dependencies:

```bash
npm install express jsonwebtoken
```

#### 2. Example Code:

```javascript
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = "access_secret"; // Secret key for access token
const REFRESH_SECRET = "refresh_secret"; // Secret key for refresh token

// In-memory store for refresh tokens (In a real-world scenario, use a database)
let refreshTokens = [];

// Dummy user data (In a real app, you'd fetch this from a database)
const users = [{ id: 1, username: "manish", password: "password123" }];

// Function to generate access tokens
function generateAccessToken(user) {
  return jwt.sign({ userId: user.id, username: user.username }, SECRET_KEY, {
    expiresIn: "15m",
  });
}

// Function to generate refresh tokens
function generateRefreshToken(user) {
  const refreshToken = jwt.sign(
    { userId: user.id, username: user.username },
    REFRESH_SECRET,
    { expiresIn: "7d" }
  );
  refreshTokens.push(refreshToken); // Store the refresh token in-memory (or database)
  return refreshToken;
}

// Login route to issue access and refresh tokens
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) return res.status(401).send("Invalid credentials");

  // Create access and refresh tokens
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  res.json({ accessToken, refreshToken });
});

// Protected route that requires a valid access token
app.get("/dashboard", (req, res) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(403).send("Access token required");

  try {
    // Verify the access token
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ message: `Welcome ${decoded.username} to your dashboard!` });
  } catch (err) {
    res.status(401).send("Invalid or expired access token");
  }
});

// Route to refresh the access token using a refresh token
app.post("/refresh", (req, res) => {
  const { token } = req.body;

  if (!token) return res.status(403).send("Refresh token required");

  // Check if the refresh token is valid and exists
  if (!refreshTokens.includes(token))
    return res.status(403).send("Invalid refresh token");

  try {
    // Verify the refresh token
    const decoded = jwt.verify(token, REFRESH_SECRET);

    // Generate a new access token
    const accessToken = generateAccessToken({
      id: decoded.userId,
      username: decoded.username,
    });

    res.json({ accessToken });
  } catch (err) {
    res.status(403).send("Invalid refresh token");
  }
});

// Route to log out (removes the refresh token)
app.post("/logout", (req, res) => {
  const { token } = req.body;
  refreshTokens = refreshTokens.filter((t) => t !== token); // Remove refresh token from the store
  res.send("Logged out successfully");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

---

### How It Works:

1. **Login**:

   - When the user logs in, the server generates both an **access token** (valid for 15 minutes) and a **refresh token** (valid for 7 days).
   - The client stores both tokens.

2. **Accessing Protected Routes**:

   - The client uses the access token to access protected routes.
   - If the access token is valid, everything works fine. Otherwise, the client will get an "expired token" response.

3. **Refreshing the Token**:

   - When the access token expires, the client sends the refresh token to the `/refresh` endpoint.
   - The server verifies the refresh token. If valid, it generates a new access token and sends it back to the client.

4. **Logging Out**:
   - When the user logs out, the server removes the refresh token from the store, preventing further access.

---

### Key Concepts:

- **Access Token**: A short-lived token used to access protected resources.
- **Refresh Token**: A long-lived token used to get a new access token when the old one expires.
- **Expiration**: Access tokens have a short expiration time (e.g., 15 minutes), while refresh tokens have a longer lifespan (e.g., 7 days).
- **Security**: Access tokens are used frequently and are more likely to be exposed. Refresh tokens are stored securely and used only when necessary (i.e., to refresh the access token).

---

### Summary:

- **Refresh tokens** are used to get new access tokens without requiring the user to log in again.
- They are long-lived compared to access tokens and are used only when the access token expires.
- In **Node.js**, you can implement refresh tokens by issuing both access and refresh tokens during login and verifying them during token refresh requests.
