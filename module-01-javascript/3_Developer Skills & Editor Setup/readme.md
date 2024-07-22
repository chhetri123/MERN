# Developer Skills & Editor Setup

## 3.1. Setting up Prettier and VS Code

### Overview

Prettier is a code formatter that helps ensure a consistent coding style. Visual Studio Code (VS Code) is a popular code editor with extensive features and extensions.

### Setting Up Prettier

1. **Install Prettier Extension**:

   - Open VS Code.
   - Go to the Extensions view by clicking the Extensions icon in the Activity Bar on the side of the window.
   - Search for "Prettier - Code formatter" and install it.

2. **Configure Prettier**:

   - Create a `.prettierrc` file in the root of your project directory with the following content:
     ```json
     {
       "semi": true,
       "trailingComma": "es5",
       "singleQuote": true,
       "printWidth": 80
     }
     ```

3. **Enable Format on Save**:
   - Open VS Code settings by pressing `Ctrl+,` (Windows/Linux) or `Cmd+,` (Mac).
   - Search for "Format On Save" and enable it.

### Setting Up VS Code

1. **Install VS Code**:

   - Download and install VS Code from [the official website](https://code.visualstudio.com/).

2. **Install Essential Extensions**:

   - **Live Server**: Provides a live preview of your web applications.
   - **ESLint**: Lints JavaScript code to identify and fix problems.
   - **Prettier**: For code formatting.

3. **Configure User Settings**:
   - Open VS Code settings (`Ctrl+,` or `Cmd+,`).
   - Customize settings such as font size, theme, and keybindings according to your preferences.

## 3.2. Installing Node.js and Setting Up a Dev Environment

### Installing Node.js

1. **Download Node.js**:

   - Visit [the official Node.js website](https://nodejs.org/).
   - Download and install the LTS (Long-Term Support) version.

2. **Verify Installation**:
   - Open a terminal or command prompt.
   - Run `node -v` to check the Node.js version.
   - Run `npm -v` to check the npm (Node Package Manager) version.

### Setting Up a Development Environment

1. **Initialize a Project**:

   - Navigate to your project directory in the terminal.
   - Run `npm init` to create a `package.json` file.
   - Follow the prompts to set up your project.

2. **Install Dependencies**:

   - Use `npm install <package-name>` to install required libraries and frameworks.

3. **Create a Basic File Structure**:
   - Create directories for `src` (source code) and `tests` (test cases).
   - Create an `index.js` file in the `src` directory as your main entry point.

## 3.3. Learning How to Code

### Overview

Learning to code involves mastering programming fundamentals, problem-solving skills, and understanding various technologies.

### Steps to Learn Coding

1. **Start with Basics**:

   - Learn the syntax and core concepts of the programming language you’re interested in (e.g., JavaScript, Python).

2. **Practice Regularly**:

   - Solve coding problems on platforms like LeetCode, HackerRank, or CodeSignal.
   - Build small projects to apply your knowledge.

3. **Understand Algorithms and Data Structures**:

   - Study common algorithms (sorting, searching) and data structures (arrays, linked lists, trees).

4. **Learn by Building Projects**:

   - Work on personal or open-source projects to gain practical experience.

5. **Join Coding Communities**:
   - Participate in forums, coding groups, and meetups to collaborate and learn from others.

## 3.4. How to Think Like a Developer: Become a Problem Solver

### Overview

Effective problem-solving involves breaking down complex problems into manageable pieces and applying logical reasoning.

### Problem-Solving Techniques

1. **Understand the Problem**:

   - Read the problem statement carefully.
   - Identify the inputs, outputs, and requirements.

2. **Break Down the Problem**:

   - Decompose the problem into smaller sub-problems.
   - Solve each sub-problem individually.

3. **Design a Solution**:

   - Plan your approach using pseudocode or flowcharts.
   - Choose appropriate algorithms and data structures.

4. **Implement the Solution**:

   - Write the code based on your design.
   - Test your solution with various inputs.

5. **Review and Optimize**:
   - Refactor your code for readability and performance.
   - Optimize algorithms to improve efficiency.

## 3.5. Using Google, StackOverflow, and MDN

### Overview

Knowing how to effectively use online resources is crucial for finding solutions and learning new concepts.

### Using Google

1. **Search Effectively**:

   - Use specific keywords related to your problem.
   - Include error messages or code snippets in your search queries.

2. **Evaluate Sources**:
   - Check the credibility of the sources.
   - Prefer official documentation and trusted forums.

### Using StackOverflow

1. **Search for Existing Solutions**:

   - Look for questions similar to yours before posting a new question.

2. **Ask Clear Questions**:

   - Provide a detailed description of your issue.
   - Include relevant code snippets and error messages.

3. **Engage with the Community**:
   - Upvote helpful answers.
   - Contribute by answering questions and sharing knowledge.

### Using MDN (Mozilla Developer Network)

1. **Access Documentation**:

   - Visit [MDN Web Docs](https://developer.mozilla.org/) for comprehensive documentation on web technologies.

2. **Explore Tutorials and Guides**:
   - Use MDN’s tutorials and guides to understand various web development topics.

## 3.6. Debugging (Fixing Errors)

### Overview

Debugging involves identifying, analyzing, and fixing errors in your code.

### Debugging Techniques

1. **Read Error Messages**:

   - Analyze the error messages and stack traces to identify the issue.

2. **Use Console Logging**:

   - Insert `console.log()` statements to check variable values and execution flow.

3. **Simplify and Isolate**:

   - Simplify the code to isolate the problematic part.
   - Test smaller pieces of code to find the error.

4. **Check for Common Mistakes**:
   - Verify syntax, variable names, and function calls.
   - Ensure you’re following best practices.

## 3.7. Debugging with the Console and Breakpoints

### Debugging with the Console

1. **Using Console Logs**:

   - Insert `console.log()` statements to print variable values and program flow.

2. **Inspect Variables**:
   - Use `console.log()` to display the values of variables at different points in your code.

### Debugging with Breakpoints

1. **Set Breakpoints**:

   - In VS Code, open the file you want to debug.
   - Click on the gutter next to the line number to set a breakpoint.

2. **Start Debugging**:

   - Open the Debug panel (`Ctrl+Shift+D` or `Cmd+Shift+D`).
   - Click the green play button to start debugging.

3. **Inspect Execution**:

   - Use the Debug panel to step through code, inspect variable values, and evaluate expressions.

4. **Modify Code on the Fly**:
   - Make changes to your code while debugging and see the effects immediately.
