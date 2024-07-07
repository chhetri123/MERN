const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Please provide a name");
} else {
  console.log(`Hello, ${args[0]}!`);
}

// Readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
