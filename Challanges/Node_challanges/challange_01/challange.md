# Challenge: Extend the Note-Taking CLI Application

## Objective

Your task is to extend the provided Note-Taking CLI application with additional functionality. You need to implement the following features:

### 1. Edit a Note

- **Command**: `edit`
- **Description**: Edit the content of an existing note.
- **Usage**: `node app.js edit <title> <new content>`
- **Details**: If the note with the specified title exists, update its content with the new content provided. If the note does not exist, display an appropriate message.

### 2. Search Notes by Content

- **Command**: `search`
- **Description**: Search for notes containing a specific keyword or phrase.
- **Usage**: `node app.js search <keyword>`
- **Details**: List all notes that contain the specified keyword in their content. Display the titles of the matching notes.

### 3. Tagging Notes

- **Command**: `tag`
- **Description**: Add tags to a note and search notes by tags.
  - **Add Tag**: `node app.js tag add <title> <tag>`
    - **Details**: Add a tag to a specific note. If the note does not exist, display an appropriate message.
  - **Search by Tag**: `node app.js tag search <tag>`
    - **Details**: List all notes that are tagged with the specified tag. Display the titles of the matching notes.

### 4. Display Note Details

- **Command**: `details`
- **Description**: Display the details of a note, including title, content, and tags.
- **Usage**: `node app.js details <title>`
- **Details**: If the note with the specified title exists, display its title, content, and any tags associated with it. If the note does not exist, display an appropriate message.

---

### Challenge Task: Simple Command-Line Quiz App

**Objective:**  
Build a simple command-line quiz app using Node.js that allows users to answer questions interactively. The app will use `EventEmitter` to handle events, `process.argv` to accept command-line arguments, and `readline` to read user input.

### Instructions:

1. **Setup:**

   - Create a new Node.js project.
   - Create a file named `quiz.js`.

2. **Step 1: Using `process.argv`**

   - Modify the script to accept the user's name as a command-line argument.
   - Example: If the user runs the command `node quiz.js John`, the app should greet the user with "Hello, John!".
   - If no name is provided, greet the user with "Hello, Guest!".

3. **Step 2: Creating the Quiz with `readline`**

   - Set up the `readline` module to prompt the user with a series of quiz questions.
   - The quiz should have at least 3 questions.
   - Example Questions:
     - What is the capital of France?
     - What is 2 + 2?
     - What is the color of the sky?
   - Collect the user’s answers.

4. **Step 3: Emitting Events with `EventEmitter`**

   - Use the `EventEmitter` class to handle events in your quiz.
   - Create an event for:
     - When a quiz starts.
     - When each question is answered.
     - When the quiz ends.
   - Log messages to the console for each event.
   - Example:
     - When the quiz starts, log: "The quiz has started!"
     - When a question is answered, log the answer.
     - When the quiz ends, log: "Quiz completed! Thank you for participating."

5. **Step 4: Displaying the Results**

   - After the user answers all the questions, display their total score.
   - You can give 1 point for each correct answer.
   - Example: "You scored 2 out of 3!"

6. **Step 5: Bonus Challenge**
   - Enhance the quiz to accept the number of questions the user wants to answer as a command-line argument.
   - Example: `node quiz.js John 2` should only ask 2 questions from the quiz.
   - If no number is provided, ask all available questions.

### Example Output:

```bash
$ node quiz.js John
Hello, John!
The quiz has started!
Question 1: What is the capital of France?
> Paris
Question 2: What is 2 + 2?
> 4
Question 3: What is the color of the sky?
> Blue
Quiz completed! Thank you for participating.
You scored 3 out of 3!
```
