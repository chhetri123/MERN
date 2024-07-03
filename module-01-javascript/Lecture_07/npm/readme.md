## Introduction to NPM

### Overview

NPM (Node Package Manager) is a package manager for JavaScript, commonly used to manage dependencies in Node.js projects. It provides a registry of packages, a command-line interface to manage these packages, and tools to manage project configurations.

### Basic NPM Commands

- **Initialize a Project**:

  - `npm init`: Creates a `package.json` file.
  - `npm init -y`: Initializes a project with default settings.

- **Managing Packages**:

  - `npm install package_name`: Installs a package.
  - `npm uninstall package_name`: Uninstalls a package.
  - `npm update package_name`: Updates a package.
  - `npm install`: Installs all dependencies listed in `package.json`.

- **Running Scripts**:
  - `npm run script_name`: Runs a script defined in `package.json`.

### Example Usage

```sh
# Initialize a new Node.js project
npm init -y

# Install a package (e.g., Express)
npm install express

# Uninstall a package
npm uninstall express

# Update a package
npm update express

# Run a script defined in package.json
npm run start
```

## Understanding `package.json` and Libraries

### What is `package.json`?

`package.json` is a crucial file in any Node.js project. It contains metadata about the project and its dependencies. It allows developers to manage the project's dependencies, scripts, version, and more, making it easier to collaborate and maintain the project.

### Key Sections of `package.json`

1. **Basic Information**

   - **name**: The name of the project or package.
   - **version**: The current version of the project, following Semantic Versioning (e.g., `1.0.0`).
   - **description**: A brief description of the project.
   - **main**: The entry point of the application (e.g., `index.js`).

2. **Dependencies**

   - **dependencies**: Lists the packages required for the project to run. These are installed when you run `npm install`.
     ```json
     "dependencies": {
       "express": "^4.17.1"
     }
     ```
   - **devDependencies**: Lists the packages required only for development (e.g., testing, building). These are also installed with `npm install`.
     ```json
     "devDependencies": {
       "parcel-bundler": "^1.12.4"
     }
     ```

3. **Scripts**

   - **scripts**: Defines custom scripts that you can run using `npm run <script-name>`.
     ```json
     "scripts": {
       "start": "node index.js",
       "build": "parcel build index.html"
     }
     ```

4. **Other Fields**
   - **author**: The author of the project.
   - **license**: The license under which the project is released.
   - **repository**: The repository where the project's code is hosted.

### Example of `package.json`

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A simple Node.js project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "build": "parcel build index.html",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "parcel-bundler": "^1.12.4"
  },
  "author": "Lamyam",
  "license": "ISC"
}
```

### What is a Library?

A library in the context of programming is a collection of pre-written code that developers can use to optimize tasks. It helps in:

- Reusing code: Avoid writing common functionality from scratch.
- Reducing errors: Well-tested libraries can reduce bugs.
- Saving time: Quickly add functionality without detailed implementation.

## Bundling With Parcel and NPM Scripts

### Overview of Parcel

Parcel is a web application bundler that offers a zero-configuration setup. It can handle JavaScript, CSS, HTML, and many other types of files, providing features like hot module replacement, code splitting, and minification out of the box.

### Setting Up Parcel

1. **Install Parcel Globally**:

   ```sh
   npm install -g parcel-bundler
   ```

2. **Install Parcel Locally in Your Project**:

   ```sh
   npm install parcel-bundler --save-dev
   ```

### Running Parcel

- **Start Development Server**:

  ```sh
  npm run start
  ```

- **Build for Production**:
  ```sh
  npm run build
  ```

### Explanation

- **`npm run start`**: Runs Parcel in development mode with hot module replacement.
- **`npm run build`**: Bundles the project for production, optimizing and minifying the output.
