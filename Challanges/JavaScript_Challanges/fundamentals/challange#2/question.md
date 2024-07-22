## Task Challanges

### Challenge Tasks: Functions in JavaScript

Below are some basic challenge tasks to help solidify your understanding of functions in JavaScript. These tasks cover function declarations, expressions, arrow functions, and functions calling other functions.

#### Task 1: Function Declarations

**Challenge:**
Create a function declaration named `square` that takes one parameter, `num`, and returns the square of that number. Call the function with a few different numbers and log the results.

**Example:**

```javascript
// Your function declaration here

console.log(square(2)); // 4
console.log(square(5)); // 25
console.log(square(10)); // 100
```

#### Task 2: Function Expressions

**Challenge:**
Create a function expression named `cube` that takes one parameter, `num`, and returns the cube of that number. Call the function with a few different numbers and log the results.

**Example:**

```javascript
// Your function expression here

console.log(cube(2)); // 8
console.log(cube(3)); // 27
console.log(cube(4)); // 64
```

#### Task 3: Arrow Functions

**Challenge:**
Create an arrow function named `power` that takes two parameters, `base` and `exponent`, and returns the result of raising the base to the power of the exponent. Call the function with a few different sets of arguments and log the results.

**Example:**

```javascript
// Your arrow function here

console.log(power(2, 3)); // 8
console.log(power(5, 2)); // 25
console.log(power(7, 3)); // 343
```

#### Task 4: Functions Calling Other Functions

**Challenge:**
Create two functions:

1. `double` that takes a number and returns double its value.
2. `triple` that takes a number and returns triple its value.

Then, create a function named `applyOperation` that takes a number and a function as parameters, and returns the result of applying the given function to the number.

**Example:**

```javascript
// Your functions here

console.log(applyOperation(5, double)); // 10
console.log(applyOperation(5, triple)); // 15
console.log(applyOperation(10, double)); // 20
console.log(applyOperation(10, triple)); // 30
```

#### Task 5: Function Review

**Challenge:**
Create a function named `calculateRectangleArea` that takes the width and height of a rectangle and returns the area. Then, create a function named `formatResult` that takes a value and a unit (string) and returns a formatted string. Use these functions together to log the area of a rectangle with a formatted result.

**Example:**

```javascript
// Your functions here

const width = 5;
const height = 10;
const area = calculateRectangleArea(width, height);
const formattedArea = formatResult(area, "square meters");

console.log(formattedArea); // 50 square meters
```

#### Task 6: Basic Function Declaration

**Challenge:**
Create a function declaration named `divide` that takes two parameters and returns their quotient. Call the function with different sets of numbers and log the results.

**Example:**

```javascript
// Your function declaration here

console.log(divide(10, 2)); // 5
console.log(divide(20, 4)); // 5
console.log(divide(30, 5)); // 6
```

#### Task 7: Function Expression with Anonymous Function

**Challenge:**
Create a function expression that calculates the modulus of two numbers. Use an anonymous function for this task and call it with different pairs of numbers.

**Example:**

```javascript
// Your function expression here

console.log(modulus(10, 3)); // 1
console.log(modulus(20, 7)); // 6
console.log(modulus(30, 4)); // 2
```

#### Task 8: Arrow Function for Squaring Numbers

**Challenge:**
Create an arrow function named `square` that takes one parameter and returns the square of that number. Call the function with various numbers and log the results.

**Example:**

```javascript
// Your arrow function here

console.log(square(2)); // 4
console.log(square(5)); // 25
console.log(square(10)); // 100
```

#### Task 9: Functions Returning Other Functions

**Challenge:**
Create a function named `createAdder` that takes one parameter `base` and returns a new function. This returned function should add `base` to any number passed to it. Test this returned function with different `base` values.

**Example:**

```javascript
// Your function that returns another function here

const add10 = createAdder(10);
console.log(add10(5)); // 15
console.log(add10(20)); // 30

const add25 = createAdder(25);
console.log(add25(10)); // 35
console.log(add25(15)); // 40
```

#### Task 10: Function with Default Parameters

**Challenge:**
Create a function named `describePerson` that takes two parameters: `name` and `age`. Set `age` to default to `unknown` if not provided. Call the function with both parameters and with only the `name` parameter.

**Example:**

```javascript
// Your function with default parameters here

console.log(describePerson("Alice", 30)); // Alice is 30 years old.
console.log(describePerson("Bob")); // Bob is unknown years old.
```

#### Task 11: Function Expression with Named Function

**Challenge:**
Create a function expression named `findMax` that takes an array of numbers and returns the maximum number in the array. Use a named function expression for this task.

**Example:**

```javascript
// Your named function expression here

console.log(findMax([1, 2, 3, 4, 5])); // 5
console.log(findMax([10, 20, 30, 40])); // 40
console.log(findMax([5, 15, 25, 35])); // 35
```

#### Task 12: Arrow Function with Multiple Statements

**Challenge:**
Create an arrow function named `calculateCircleArea` that takes one parameter `radius` and returns the area of a circle with that radius. The formula for area is `π * radius^2`. Use multiple statements within the arrow function to compute the result.

**Example:**

```javascript
// Your arrow function with multiple statements here

console.log(calculateCircleArea(3)); // 28.274333882308138
console.log(calculateCircleArea(5)); // 78.53981633974483
```

#### Task 13: Functions Calling Other Functions

**Challenge:**
Create two functions: `double` that doubles a number, and `triple` that triples a number. Then, create a function named `applyFunctions` that takes a number and an array of functions. It should apply each function in the array to the number sequentially and return the final result.

**Example:**

```javascript
// Your functions and higher-order function here

console.log(applyFunctions(2, [double, triple])); // 12
console.log(applyFunctions(4, [triple, double])); // 24
```

#### Task 14: Functions with Variable Arguments

**Challenge:**
Create a function named `concatenateStrings` that takes any number of string arguments and returns a single concatenated string. Use the rest parameter syntax (`...strings`) to handle multiple arguments.

**Example:**

```javascript
// Your function with variable arguments here

console.log(concatenateStrings("Hello", "World")); // Hello World
console.log(concatenateStrings("JavaScript", "is", "fun")); // JavaScript is fun
console.log(concatenateStrings("Concatenate", "these", "strings")); // Concatenate these strings
```

#### Task 15: Recursive Function

**Challenge:**
Create a recursive function named `countdown` that takes a number and logs all numbers from that number down to 1. For example, `countdown(5)` should log `5, 4, 3, 2, 1`.

**Example:**

```javascript
// Your recursive function here

countdown(5); // 5, 4, 3, 2, 1
countdown(3); // 3, 2, 1
```
