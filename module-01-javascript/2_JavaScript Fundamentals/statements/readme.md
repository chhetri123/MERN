### Lecture Content: JavaScript Control Flow

#### 2.5. The `switch` Statement

The `switch` statement evaluates an expression and executes code blocks based on matching case values.

```javascript
// Example of switch statement
const fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apple is red.");
    break;
  case "grape":
    console.log("Grape is purple.");
    break;
  default:
    console.log("Unknown fruit.");
}
```

#### 2.6. Statements and Expressions

Statements perform actions, while expressions produce values.

```javascript
// Example of statements and expressions

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
```

#### 2.7. The Conditional (Ternary) Operator

The ternary operator is a shorthand for the `if...else` statement.

```javascript
// Example of the conditional (ternary) operator
const age = 18;
const canVote = age >= 18 ? "Yes, can vote" : "No, too young to vote";
console.log(canVote); // Outputs: Yes, can vote
```

### Example File: `index.js`

```javascript
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
```

### README Tasks for Beginner-Level Students

#### Task 1: Use the `switch` Statement

Create a program that takes a day of the week as input and outputs a message based on the day. Use the `switch` statement.

#### Task 2: Statements and Expressions

Write a program that calculates the area and perimeter of a rectangle. Define the length and width as variables. Use statements and expressions to compute the results.

#### Task 3: The Conditional (Ternary) Operator

Create a program that checks if a number is even or odd. Use the conditional (ternary) operator to print the result.

#### Task 4: Combine Concepts

Create a program that takes a person's age and favorite fruit as input. Use the `switch` statement to provide a comment about the fruit and the conditional (ternary) operator to determine if the person can vote.

# Task Solution

## Task 1: Use the `switch` Statement

Create a program that takes a day of the week as input and outputs a message based on the day. Use the `switch` statement.

Example:

```javascript
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Friday":
    console.log("End of the work week.");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Midweek day.");
}
```

## Task 2: Statements and Expressions

Write a program that calculates the area and perimeter of a rectangle. Define the length and width as variables. Use statements and expressions to compute the results.

Example:

```javascript
const length = 5;
const width = 3;
const area = length * width;
const perimeter = 2 * (length + width);
console.log(`Area: ${area}, Perimeter: ${perimeter}`);
```

## Task 3: The Conditional (Ternary) Operator

Create a program that checks if a number is even or odd. Use the conditional (ternary) operator to print the result.

Example:

```javascript
const number = 4;
const isEven = number % 2 === 0 ? "Even" : "Odd";
console.log(isEven); // Outputs: Even
```

## Task 4: Combine Concepts

Create a program that takes a person's age and favorite fruit as input. Use the `switch` statement to provide a comment about the fruit and the conditional (ternary) operator to determine if the person can vote.

Example:

```javascript
const age = 20;
const fruit = "banana";
const canVote = age >= 18 ? "Yes, can vote" : "No, too young to vote";
console.log(canVote); // Outputs: Yes, can vote

switch (fruit) {
  case "banana":
    console.log("Banana is yellow.");
    break;
  case "apple":
    console.log("Apple is red.");
    break;
  default:
    console.log("Unknown fruit.");
}
```

## Additional Tasks for JavaScript Control Flow

### Task 5: Extended `switch` Statement

Write a program that takes a month (as a string) as input and outputs the number of days in that month. Use the `switch` statement. Consider both common and leap years for February.

Example:

```javascript
const month = "February";
const isLeapYear = true; // Set to false for common year

switch (month) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log("31 days");
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    console.log("30 days");
    break;
  case "February":
    console.log(isLeapYear ? "29 days" : "28 days");
    break;
  default:
    console.log("Invalid month");
}
```

### Task 6: Nested `switch` Statements

Create a program that takes a school grade (1-12) and a subject (Math, Science, History, etc.) as input. Use nested `switch` statements to output the type of assignment due for that subject in that grade.

Example:

```javascript
const grade = 7;
const subject = "Math";

switch (grade) {
  case 1:
  case 2:
  case 3:
    switch (subject) {
      case "Math":
        console.log("Simple addition and subtraction worksheet");
        break;
      case "Science":
        console.log("Basic science facts worksheet");
        break;
      default:
        console.log("Basic assignment");
    }
    break;
  case 7:
  case 8:
  case 9:
    switch (subject) {
      case "Math":
        console.log("Algebra assignment");
        break;
      case "Science":
        console.log("Physics lab report");
        break;
      default:
        console.log("Intermediate assignment");
    }
    break;
  default:
    console.log("Advanced assignment");
}
```

### Task 7: Complex Expressions

Write a program that calculates the Body Mass Index (BMI) given the weight in kilograms and height in meters. Use expressions to calculate the BMI and categorize it.

Example:

```javascript
const weight = 70; // kg
const height = 1.75; // meters
const bmi = weight / (height * height);
let category;

if (bmi < 18.5) {
  category = "Underweight";
} else if (bmi >= 18.5 && bmi < 24.9) {
  category = "Normal weight";
} else if (bmi >= 25 && bmi < 29.9) {
  category = "Overweight";
} else {
  category = "Obese";
}

console.log(`BMI: ${bmi.toFixed(2)}, Category: ${category}`);
```

### Task 8: Complex Conditional (Ternary) Operator

Create a program that calculates the final price of a product after applying a discount. The discount is 10% if the price is above $100, otherwise, it's 5%. Use the ternary operator for the discount calculation.

Example:

```javascript
const price = 120;
const discount = price > 100 ? 0.1 : 0.05;
const finalPrice = price - price * discount;
console.log(
  `Original Price: $${price}, Discount: ${
    discount * 100
  }%, Final Price: $${finalPrice.toFixed(2)}`
);
```

## JavaScript Control Flow Tasks

### Task 9: Multi-Case `switch` Statement

Write a program that takes a weather condition (e.g., 'sunny', 'rainy', 'cloudy') as input and outputs a message suggesting an activity based on the weather. Use the `switch` statement with multiple cases for similar weather conditions.

### Task 10: Multiple Conditions with `switch`

Create a program that takes a traffic light color (red, yellow, green) as input and outputs a driving action (stop, slow down, go). Use the `switch` statement to handle the different colors.

### Task 11: Evaluate Mathematical Expressions

Write a program that takes two numbers and an operator (+, -, \*, /) as input and uses expressions to calculate and display the result. Use the `switch` statement to handle the different operators.

### Task 12: Grade Calculator with Expressions

Create a program that calculates the final grade of a student based on three exam scores. Use expressions to calculate the average and determine the letter grade (A, B, C, D, F) using a `switch` statement.

### Task 13: Nested Conditional (Ternary) Operator

Write a program that determines if a person is eligible for a senior citizen discount. The discount is 15% if the age is 65 or older, otherwise, it’s 5%. Use a nested ternary operator to decide the discount and print the result.

### Task 14: Compound Conditional (Ternary) Operator

Create a program that checks if a number is positive, negative, or zero. Use the ternary operator to print the appropriate message.

### Task 15: Temperature Conversion with Conditional Operator

Write a program that converts a given temperature from Celsius to Fahrenheit or vice versa. Use a conditional (ternary) operator to determine which conversion to perform based on user input.

### Task 16: Complex Conditions with `switch` and Ternary Operator

Create a program that evaluates a student's grade and participation score. Use a `switch` statement for the grade and a ternary operator to check if the participation score is above 75%. Print a message based on both conditions.

## Solutions

```js
// Task 9: Multi-Case `switch` Statement
const weather = "sunny";

switch (weather) {
  case "sunny":
  case "clear":
    console.log("It's a great day for a walk.");
    break;
  case "rainy":
  case "stormy":
    console.log("Better stay inside with a book.");
    break;
  case "cloudy":
  case "overcast":
    console.log("A good day for indoor activities.");
    break;
  default:
    console.log("Check the weather forecast for more details.");
}

// Task 10: Multiple Conditions with `switch`
const trafficLight = "green";

switch (trafficLight) {
  case "red":
    console.log("Stop.");
    break;
  case "yellow":
    console.log("Slow down.");
    break;
  case "green":
    console.log("Go.");
    break;
  default:
    console.log("Invalid traffic light color.");
}

// Task 11: Evaluate Mathematical Expressions
const num1 = 10;
const num2 = 5;
const operator = "+";
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    result = "Invalid operator";
}
console.log(`Result: ${result}`);

// Task 12: Grade Calculator with Expressions
const exam1 = 85;
const exam2 = 90;
const exam3 = 78;
const average = (exam1 + exam2 + exam3) / 3;
let grade;

switch (true) {
  case average >= 90:
    grade = "A";
    break;
  case average >= 80:
    grade = "B";
    break;
  case average >= 70:
    grade = "C";
    break;
  case average >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}
console.log(`Average: ${average.toFixed(2)}, Grade: ${grade}`);

// Task 13: Nested Conditional (Ternary) Operator
const personAge = 70;
const discount = personAge >= 65 ? 0.15 : 0.05;
console.log(`Age: ${personAge}, Discount: ${discount * 100}%`);

// Task 14: Compound Conditional (Ternary) Operator
const numberCheck = -10;
const checkResult =
  numberCheck > 0 ? "Positive" : numberCheck < 0 ? "Negative" : "Zero";
console.log(`Number: ${numberCheck}, Result: ${checkResult}`);

// Task 15: Temperature Conversion with Conditional Operator
const temp = 25;
const convertTo = "F"; // 'F' for Fahrenheit, 'C' for Celsius
const convertedTemp =
  convertTo === "F" ? (temp * 9) / 5 + 32 : ((temp - 32) * 5) / 9;
console.log(
  `Temperature: ${temp}°C, Converted: ${convertedTemp.toFixed(2)}°${convertTo}`
);

// Task 16: Complex Conditions with `switch` and Ternary Operator
const studentGrade = "B";
const participationScore = 80;
const participationStatus =
  participationScore > 75 ? "Good participation" : "Poor participation";

switch (studentGrade) {
  case "A":
    console.log("Excellent performance");
    break;
  case "B":
    console.log("Good performance");
    break;
  case "C":
    console.log("Average performance");
    break;
  case "D":
    console.log("Below average performance");
    break;
  default:
    console.log("Failing performance");
}

console.log(`Participation: ${participationStatus}`);
```
