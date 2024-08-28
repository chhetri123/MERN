const fs = require("fs");
const path = require("path");

const notesDir = path.join(__dirname, "notes");

// Ensure the notes directory exists
if (!fs.existsSync(notesDir)) {
  fs.mkdirSync(notesDir);
}

function addNote(title, content) {
  const fileName = path.join(notesDir, `${title}.txt`);
  fs.writeFileSync(fileName, content);
  console.log(`Note "${title}" has been added.`);
}

function listNotes() {
  const notes = fs.readdirSync(notesDir);
  if (notes.length === 0) {
    console.log("No notes found.");
  } else {
    console.log("Notes:");
    notes.forEach((note) => {
      console.log(`- ${path.parse(note).name}`);
    });
  }
}

function readNote(title) {
  const fileName = path.join(notesDir, `${title}.txt`);
  try {
    const content = fs.readFileSync(fileName, "utf8");
    console.log(`Title: ${title}\n\n${content}`);
  } catch (error) {
    console.log(`Note "${title}" not found.`);
  }
}

function deleteNote(title) {
  const fileName = path.join(notesDir, `${title}.txt`);
  try {
    fs.unlinkSync(fileName);
    console.log(`Note "${title}" has been deleted.`);
  } catch (error) {
    console.log(`Note "${title}" not found.`);
  }
}

const [, , command, ...args] = process.argv;

switch (command) {
  case "add":
    if (args.length < 2) {
      console.log("Usage: node app.js add <title> <content>");
    } else {
      const [title, ...contentArr] = args;
      const content = contentArr.join(" ");
      addNote(title, content);
    }
    break;
  case "list":
    listNotes();
    break;
  case "read":
    if (args.length === 0) {
      console.log("Usage: node app.js read <title>");
    } else {
      readNote(args[0]);
    }
    break;
  case "delete":
    if (args.length === 0) {
      console.log("Usage: node app.js delete <title>");
    } else {
      deleteNote(args[0]);
    }
    break;
  default:
    console.log(`
Usage:
  node app.js add <title> <content>
  node app.js list
  node app.js read <title>
  node app.js delete <title>
        `);
}

//  EventEmitter Solution
// Step 1: Import required modules
const readline = require("readline");
const EventEmitter = require("events");

// Step 2: Create an instance of EventEmitter
const quizEmitter = new EventEmitter();

// Step 3: Handle command-line arguments using process.argv
const userName = process.argv[2] || "Guest";
console.log(`Hello, ${userName}!`);

// Step 4: Set up readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Step 5: Define quiz questions and answers
const questions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is the color of the sky?", answer: "Blue" },
];

let currentQuestionIndex = 0;
let score = 0;

// Step 6: Emit quiz start event
quizEmitter.emit("quizStart");

quizEmitter.on("quizStart", () => {
  console.log("The quiz has started!");
  askQuestion();
});

// Step 7: Function to ask questions
function askQuestion() {
  if (currentQuestionIndex < questions.length) {
    rl.question(
      questions[currentQuestionIndex].question + " ",
      (userAnswer) => {
        // Emit question answered event
        quizEmitter.emit("questionAnswered", userAnswer);
      }
    );
  } else {
    // Emit quiz end event
    quizEmitter.emit("quizEnd");
  }
}

// Step 8: Handle the 'questionAnswered' event
quizEmitter.on("questionAnswered", (userAnswer) => {
  if (
    userAnswer.trim().toLowerCase() ===
    questions[currentQuestionIndex].answer.toLowerCase()
  ) {
    score++;
  }
  currentQuestionIndex++;
  askQuestion();
});

// Step 9: Handle the 'quizEnd' event
quizEmitter.on("quizEnd", () => {
  console.log("Quiz completed! Thank you for participating.");
  console.log(`You scored ${score} out of ${questions.length}!`);
  rl.close();
});
