# HTML & CSS Course - Lecture 1

## 1.1. What is HTML?

HTML (HyperText Markup Language) is the standard language for creating web pages and web applications. It describes the structure of a web page using markup. HTML elements are the building blocks of HTML pages. They are represented by tags such as `<h1>`, `<p>`, `<div>`, etc.

### Key Points:

- HTML stands for HyperText Markup Language.
- It is used to create the structure of web pages.
- HTML elements are represented by tags.
- Example of an HTML element:
  ```html
  <h1>This is a heading</h1>
  <p>This is a paragraph</p>
  ```

## 1.2. What is CSS?

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how HTML elements should be displayed on screen, paper, or in other media.

### Key Points:

- CSS stands for Cascading Style Sheets.
- It is used to control the layout of web pages.
- CSS can be applied directly in HTML using the `style` attribute, within a `<style>` element in the HTML head, or in an external stylesheet.
- Example of CSS:

  ```css
  body {
    font-family: Arial, sans-serif;
  }

  h1 {
    color: blue;
  }
  ```

## 1.3. History and Background

### HTML:

- Developed by Tim Berners-Lee in 1991.
- HTML 2.0 was the first standard version, released in 1995.
- HTML5 is the latest version, introduced in 2014.

### CSS:

- CSS1 was released in 1996 by the W3C.
- CSS2 followed in 1998, introducing more capabilities.
- CSS3 is the current standard, split into modules for easier adoption.

## 1.4. Tools and Setup

To start creating HTML and CSS files, you need the following tools:

- **Text Editor:** VS Code, Sublime Text, Atom, etc.
- **Web Browser:** Chrome, Firefox, Safari, etc.

### Setting Up Visual Studio Code (VS Code)

### Installation

---

1. Download and install [VS Code](https://code.visualstudio.com/).
2. Open VS Code and install the following extensions:
   - **Live Server:** For live preview of your HTML/CSS files.
   - **Prettier:** For code formatting.
   - **HTML CSS Support:** For autocompletion and IntelliSense.

### Initial Extensions

Install the following extensions to enhance your development experience:

1. **Live Server**:

   - Description: Launch a local development server with live reload feature.
   - Extension Marketplace: [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

2. **Prettier - Code formatter**:

   - Description: Code formatter for JavaScript, TypeScript, CSS, and more.
   - Extension Marketplace: [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

3. **Bracket Pair Colorizer**:

   - Description: Colorizes matching brackets in your code for better readability.
   - Extension Marketplace: [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)

4. **Auto Rename Tag**:
   - Description: Automatically rename tags in your code to their respective waypoints

## 1.5. Creating Your First HTML Page

Let's create a simple HTML page.

### Steps:

1. Open VS Code and create a new file named `index.html`.
2. Add the following code to your `index.html` file:

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>My First HTML Page</title>
       <style>
         body {
           font-family: Arial, sans-serif;
           background-color: #f4f4f4;
           color: #333;
           text-align: center;
           padding: 50px;
         }
         h1 {
           color: #0066cc;
         }
       </style>
     </head>
     <body>
       <h1>Hello, World!</h1>
       <p>This is my first HTML page.</p>
     </body>
   </html>
   ```

3. Save the file.
4. Right-click on the `index.html` file and select "Open with Live Server" to view your page in the browser.

---

### Basic Navigation

- **Ctrl + P (Cmd + P on Mac)**: Quick Open, navigate files by typing their name.
- **Ctrl + Tab (Cmd + Tab on Mac)**: Switch between open editor files.
- **Ctrl + \` (Backtick)**: Toggle integrated terminal.

### Editing

- **Ctrl + X (Cmd + X on Mac)**: Cut line.
- **Ctrl + C (Cmd + C on Mac)**: Copy line.
- **Ctrl + V (Cmd + V on Mac)**: Paste.
- **Ctrl + Z (Cmd + Z on Mac)**: Undo.
- **Ctrl + Shift + Z (Cmd + Shift + Z on Mac)**: Redo.
- **Ctrl + D (Cmd + D on Mac)**: Select word (repeat to select next occurrence).
- **Ctrl + Shift + L (Cmd + Shift + L on Mac)**: Select all occurrences of current selection.

### Code Navigation

- **Ctrl + / (Cmd + / on Mac)**: Toggle line comment.
- **Alt + Up/Down (Option + Up/Down on Mac)**: Move line up or down.
- \*\*Ctrl + Shift + \*\*: Jump to matching bracket.

### Search and Replace

- **Ctrl + F (Cmd + F on Mac)**: Find.
- **Ctrl + H (Cmd + H on Mac)**: Replace.
- **Ctrl + Shift + F (Cmd + Option + F on Mac)**: Search across files.

### Integrated Terminal

- **Ctrl + \` (Backtick)**: Toggle terminal.

### File Management

- **Ctrl + N (Cmd + N on Mac)**: New file.
- **Ctrl + S (Cmd + S on Mac)**: Save file.
- **Ctrl + Shift + S (Cmd + Shift + S on Mac)**: Save As.

These shortcuts cover basic navigation, editing, searching, terminal access, file management for beginners getting comfortable with VS Code.
