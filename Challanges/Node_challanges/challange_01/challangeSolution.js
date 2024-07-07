#!/usr/bin/env node

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
