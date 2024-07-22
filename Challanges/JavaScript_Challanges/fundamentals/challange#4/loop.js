// Task 1: Print Multiples of a Number
console.log("Task 1: Print Multiples of a Number");
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

console.log(""); // New line for separation

// Task 2: Sum of Array Elements
console.log("Task 2: Sum of Array Elements");
const numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

console.log(""); // New line for separation

// Task 3: Reverse a String
console.log("Task 3: Reverse a String");
const str = "JavaScript";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}
console.log(reversedStr);

console.log(""); // New line for separation

// Task 4: Factorial Calculation
console.log("Task 4: Factorial Calculation");
const num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(factorial);

console.log(""); // New line for separation

// Task 5: Multiplication Table
console.log("Task 5: Multiplication Table");
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    process.stdout.write((i * j).toString().padStart(4));
  }
  console.log();
}

console.log(""); // New line for separation

// Task 6: Print Odd Numbers Using `while` Loop
console.log("Task 6: Print Odd Numbers Using `while` Loop");
let number = 1;
while (number <= 20) {
  if (number % 2 !== 0) {
    console.log(number);
  }
  number++;
}

console.log(""); // New line for separation

// Task 7: Count Down Using `while` Loop
console.log("Task 7: Count Down Using `while` Loop");
let count = 10;
while (count > 0) {
  console.log(count);
  count--;
}

console.log(""); // New line for separation

// Task 8: FizzBuzz Problem
console.log("Task 8: FizzBuzz Problem");
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log(""); // New line for separation

// Task 9: Nested Loop Pattern
console.log("Task 9: Nested Loop Pattern");
for (let i = 1; i <= 4; i++) {
  let pattern = "";
  for (let j = 0; j < i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}

console.log(""); // New line for separation

// Task 10: Find Largest Element in a 2D Array
console.log("Task 10: Find Largest Element in a 2D Array");
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let largest = matrix[0][0];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] > largest) {
      largest = matrix[i][j];
    }
  }
}
console.log(largest);
