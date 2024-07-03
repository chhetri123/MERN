### JavaScript Assignment: Working with ES6 Modules

#### Objective:

This assignment aims to help you understand how to import and export functions, classes, and variables across multiple JavaScript files using ES6 modules.

#### Instructions:

1. Create a new directory for your project.
2. Inside the directory, create the following files:
   - `mathOperations.js`
   - `stringOperations.js`
   - `app.js`
   - `index.html`
3. Implement the functionality as described below.

---

### 1. `mathOperations.js`

Create a module that exports the following functions:

- `add(a, b)` - Returns the sum of `a` and `b`.
- `subtract(a, b)` - Returns the difference between `a` and `b`.
- `multiply(a, b)` - Returns the product of `a` and `b`.
- `divide(a, b)` - Returns the quotient of `a` divided by `b`.

### 2. `stringOperations.js`

Create a module that exports the following functions:

- `concatenate(str1, str2)` - Returns the concatenation of `str1` and `str2`.
- `toUpperCase(str)` - Converts the string `str` to uppercase.
- `toLowerCase(str)` - Converts the string `str` to lowercase.
- `reverseString(str)` - Returns the reverse of the string `str`.

### 3. `app.js`

Create a main script file that imports the functions from `mathOperations.js` and `stringOperations.js`, and then uses these functions to perform various operations. Log the results to the console.
