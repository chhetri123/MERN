// 2.5. The switch Statement
const fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("Banana is yellow.");
    break;
  case "apple":
    console.log("Apple is red.");
    break;
  case "grape":
    console.log("Grape is purple.");
    break;
  default:
    console.log("Unknown fruit.");
}

// 2.6. Statements and Expressions
// Statements
let x = 5; // Declaration statement
x = x + 1; // Assignment statement
if (x > 5) {
  // Conditional statement
  console.log("x is greater than 5");
}

// Expressions
let y = x + 2; // y is assigned the result of the expression x + 2
let z = y * 3; // z is assigned the result of the expression y * 3
console.log(`y: ${y}, z: ${z}`); // Outputs: y: 7, z: 21

// 2.7. The Conditional (Ternary) Operator
const age = 18;
const canVote = age >= 18 ? "Yes, can vote" : "No, too young to vote";
console.log(canVote); // Outputs: Yes, can vote
