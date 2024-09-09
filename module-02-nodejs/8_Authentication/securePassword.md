### Understanding Encryption, Decryption, and Hashing

#### 1. **Encryption and Decryption**

Encryption is the process of converting readable data (plaintext) into an unreadable format (ciphertext) so that only authorized people can access it. **Decryption** is the reverse process of converting the ciphertext back into the original readable data.

Think of encryption like locking a message in a box, and only the person with the correct key (the decryption key) can unlock the box and read the message.

### Simple Example: Encrypting and Decrypting a Message

Let’s say you want to send a secret message: "HELLO". Using encryption, you can scramble the letters so no one can read it except the person with the key.

Here’s a simple **Caesar Cipher** example, where each letter in the message is shifted by 3 positions in the alphabet:

- **Original message**: HELLO
- **Encrypted message**: KHOOR

#### How Caesar Cipher Works:

- Each letter in "HELLO" is shifted by 3 positions.
- `H -> K, E -> H, L -> O, L -> O, O -> R`.

When the receiver gets the encrypted message ("KHOOR"), they can **decrypt** it by shifting the letters back by 3 positions to get the original message ("HELLO").

#### Caesar Cipher Code Example in JavaScript:

```javascript
// Encryption function
function encrypt(text, shift) {
  return text
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + shift))
    .join("");
}

// Decryption function
function decrypt(text, shift) {
  return text
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) - shift))
    .join("");
}

const message = "HELLO";
const encryptedMessage = encrypt(message, 3);
console.log("Encrypted:", encryptedMessage); // Outputs: "KHOOR"

const decryptedMessage = decrypt(encryptedMessage, 3);
console.log("Decrypted:", decryptedMessage); // Outputs: "HELLO"
```

#### Explanation:

- The **encrypt** function shifts each character in the string by a certain number (`shift`).
- The **decrypt** function reverses this process by shifting each character back by the same number.

---

### 2. **Hashing** (One-Way Process)

**Hashing** is a process that converts data (like a password) into a fixed-length string of characters, which is usually a hash code. Unlike encryption, **hashing is irreversible**. Once data is hashed, you cannot retrieve the original data.

Hashing is mainly used for securely storing passwords.

### Simple Example: Hashing a Password

Let’s say you have a password "mypassword". Instead of storing this password directly in the database (which would be insecure), you use a **hashing algorithm** to convert it into a hash:

- **Original Password**: "mypassword"
- **Hashed Password**: "34819d7beeabb9260a5c854bc85b3e44" (Using MD5 hashing algorithm)

Now, instead of storing "mypassword" in the database, you store "34819d7beeabb9260a5c854bc85b3e44".

When you log in, the system hashes the entered password and compares it to the stored hash. If they match, the password is correct.

#### Why Use Hashing?

- Even if someone steals the database, they won’t know the original passwords, because all they have are the hashes.
- Hashing is a one-way process, so it’s impossible to reverse a hash to get the original password.

#### Hashing Example in JavaScript Using bcrypt:

```javascript
const bcrypt = require("bcrypt");

async function hashPassword(password) {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(password, saltRounds);
  console.log("Hashed Password:", hashed);
  return hashed;
}

async function verifyPassword(password, hashedPassword) {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  console.log("Passwords match:", isMatch);
  return isMatch;
}

const password = "mypassword";

// Hash the password
hashPassword(password).then((hashedPassword) => {
  // Verify the password
  verifyPassword("mypassword", hashedPassword);
});
```

#### Explanation:

- **bcrypt.hash(password, saltRounds)** hashes the password and adds a random salt for extra security. Salt ensures that even if two users have the same password, their hashes will be different.
- **bcrypt.compare(password, hashedPassword)** compares the entered password with the stored hash. If they match, the function returns `true`, meaning the password is correct.

---

### Differences Between Encryption and Hashing:

| **Aspect**            | **Encryption**                          | **Hashing**                                         |
| --------------------- | --------------------------------------- | --------------------------------------------------- |
| **Purpose**           | Used for secure communication (two-way) | Used for secure storage of sensitive data (one-way) |
| **Reversible?**       | Yes (Can decrypt to original data)      | No (Cannot reverse to original data)                |
| **Usage**             | Encrypting data, emails, files          | Password storage, file integrity checks             |
| **Common Algorithms** | AES, RSA, Blowfish                      | MD5, SHA-256, bcrypt                                |

---

### Conclusion:

- **Encryption** is used to convert data into a secret format and can be decrypted back to its original form. It's like locking and unlocking information.
- **Hashing** is a one-way function that scrambles data (like passwords) into a fixed-length value, and you can't reverse it. Hashing is used to securely store sensitive data like passwords.
