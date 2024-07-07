# NPM (Node Package Manager)

## 4.1. Introduction to npm

npm is the world's largest software registry and the default package manager for Node.js. It consists of three main components:

1. The website (npmjs.com)
2. The Command Line Interface (CLI)
3. The registry

### Key Concepts:

- Packages and modules
- The package.json file
- Global vs local installation

### Example: Installing a package

```bash
npm install lodash
```

This command installs the lodash package in your project.

## 4.2. Managing Dependencies

npm allows you to manage your project's dependencies efficiently.

### Key Concepts:

- Dependencies vs devDependencies
- package-lock.json
- npm scripts

### Example: Installing dependencies and devDependencies

```bash
npm install express --save
npm install jest --save-dev
```

These commands install express as a runtime dependency and jest as a development dependency.

### Example: Using npm scripts

In your package.json:

```json
{
  "scripts": {
    "start": "node server.js",
    "test": "jest"
  }
}
```

Run these scripts with:

```bash
npm run start
npm run test
```

## 4.3. Semantic Versioning

npm uses Semantic Versioning (SemVer) for managing package versions.

### SemVer Format: MAJOR.MINOR.PATCH

- MAJOR: incompatible API changes
- MINOR: add functionality (backwards-compatible)
- PATCH: bug fixes (backwards-compatible)

### Version Ranges:

- Exact: "4.0.0"
- Patch updates: "~4.0.0" or "4.0.x"
- Minor updates: "^4.0.0" or "4.x"
- Any version: "\*" or "x"

### Example: Specifying dependencies in package.json

```json
{
  "dependencies": {
    "express": "^4.17.1",
    "lodash": "~4.17.21"
  }
}
```

## 4.4. Creating and Publishing a Package

You can create and publish your own packages to npm.

### Steps to create and publish a package:

1. Create your package
2. Set up package.json
3. Write your code
4. Test your package
5. Publish to npm

### Example: Creating and publishing a package

1. Create a new directory and initialize:

```bash
mkdir my-awesome-package
cd my-awesome-package
npm init
```

2. Create your main file (e.g., index.js):

```javascript
function sayHello(name) {
  return `Hello, ${name}!`;
}

module.exports = sayHello;
```

3. Test your package locally

4. Publish your package:

```bash
npm login
npm publish
```

### Best Practices for Publishing:

- Choose a unique name
- Include a README.md
- Add a license
- Set up .npmignore
- Use npm version for updating versions

## Hands-on Exercise: Create and Publish a Simple npm Package

1. Create a new directory for your package:

   ```bash
   mkdir npm-exercise
   cd npm-exercise
   ```

2. Initialize a new npm package:

   ```bash
   npm init -y
   ```

3. Open the generated package.json and modify as needed.

4. Create an index.js file with a simple function:

   ```javascript
   function generateGreeting(name) {
     return `Hello, ${name}! Welcome to npm packaging.`;
   }

   module.exports = generateGreeting;
   ```

5. Create a README.md file explaining how to use your package.

6. Test your package locally:

   - Create a test.js file:
     ```javascript
     const generateGreeting = require("./index");
     console.log(generateGreeting("Alice"));
     ```
   - Run `node test.js` to ensure it works.

7. Publish your package:

   ```bash
   npm login
   npm publish
   ```

8. After publishing, try installing and using your package in a new project.

## Challenge: Enhance Your npm Package

1. Add more functions to your package.
