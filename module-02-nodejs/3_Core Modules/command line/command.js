const readline = require("readline");
const argvs = process.argv.slice(2);
console.log(argvs);
if (argvs.length === 0) {
  console.log("Please provide a name");
} else {
  console.log(`Hello, ${argvs[0]}!`);
}

// Input from terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name) => {
  console.log(`Hello, ${name}!`);

  rl.question("How old are you? ", (age) => {
    console.log(`You are ${age} years old.`);

    rl.question("What is your favorite programming language? ", (language) => {
      console.log(`Your favorite programming language is ${language}.`);
      rl.close();
    });
  });
});

// Args Manupulation and Task
const args = process.argv.slice(2);

if (args.length < 6) {
  console.log(
    "Usage: node yourScript.js --name <name> --age <age> --language <language>"
  );
  process.exit(1);
}

let name = "";
let age = "";
let language = "";

for (let i = 0; i < args.length; i += 2) {
  const flag = args[i];
  const value = args[i + 1];
  switch (flag) {
    case "--name":
      name = value;
      break;
    case "--age":
      age = value;
      break;
    case "--language":
      language = value;
      break;
    default:
      console.log(`Unknown flag: ${flag}`);
      console.log(
        "Usage: node yourScript.js --name <name> --age <age> --language <language>"
      );
      process.exit(1);
  }
}

if (!name) {
  console.log("Error: Name is required");
  process.exit(1);
}

if (!age || isNaN(age) || parseInt(age) <= 0) {
  console.log("Error: Age must be a positive integer");
  process.exit(1);
}

if (!language) {
  console.log("Error: Language is required");
  process.exit(1);
}

console.log(`Hello, ${name}!`);
console.log(`You are ${age} years old.`);
console.log(`Your favorite programming language is ${language}.`);
