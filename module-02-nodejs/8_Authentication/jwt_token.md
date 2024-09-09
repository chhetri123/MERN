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
