# JavaScript Fundamentals

This lecture covers the fundamental concepts of JavaScript, including basic operators, boolean logic, logical operators, and a coding challenge to test your understanding.

## Concepts Covered

- Basic arithmetic operations
- Data types (String, Number, Boolean, Null, BigInt, Undefined, Array, Object)

- let and const
- Basic operators
- Comparison operators
- Logical operators
- Increment and decrement
- Exponentiation and modulus

## Basic Operators

Operators are used to perform operations on variables and values. JavaScript includes several types of operators:

### Arithmetic Operators

Arithmetic operators are used to perform basic mathematical operations:

- `+` : Addition
- `-` : Subtraction
- `*` : Multiplication
- `/` : Division
- `%` : Modulus (Remainder)
- `**` : Exponentiation

Example:

```javascript
let x = 10;
let y = 5;

console.log(x + y); // 15
console.log(x - y); // 5
console.log(x * y); // 50
console.log(x / y); // 2
console.log(x % y); // 0
console.log(x ** y); // 100000
```

### Assignment Operators

Assignment operators assign values to variables:

- `=` : Assign
- `+=` : Add and assign
- `-=` : Subtract and assign
- `*=` : Multiply and assign
- `/=` : Divide and assign
- `%=` : Modulus and assign

Example:

```javascript
let a = 10;
a += 5; // a = a + 5
console.log(a); // 15
a -= 3; // a = a - 3
console.log(a); // 12
```

### Comparison Operators

Comparison operators compare two values and return a boolean result:

- `==` : Equal to
- `===` : Strict equal to
- `!=` : Not equal to
- `!==` : Strict not equal to
- `>` : Greater than
- `<` : Less than
- `>=` : Greater than or equal to
- `<=` : Less than or equal to

Example:

```javascript
console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(10 != "10"); // false
console.log(10 !== "10"); // true
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 5); // false
```

## Boolean Logic

Boolean logic deals with `true` and `false` values. It is the foundation of decision-making in programming.

### Boolean Values

Boolean values can either be `true` or `false`.

Example:

```javascript
let isTrue = true;
let isFalse = false;

console.log(isTrue); // true
console.log(isFalse); // false
```

### Boolean Expressions

Boolean expressions evaluate to either `true` or `false`.

Example:

```javascript
let age = 20;
let isAdult = age >= 18;

console.log(isAdult); // true
```

## Logical Operators

Logical operators are used to combine multiple boolean expressions:

- `&&` : Logical AND
- `||` : Logical OR
- `!` : Logical NOT

### Logical AND (`&&`)

Returns `true` if both operands are `true`.

Example:

```javascript
let a = true;
let b = false;

console.log(a && b); // false
console.log(a && true); // true
```

### Logical OR (`||`)

Returns `true` if at least one operand is `true`.

Example:

```javascript
let a = true;
let b = false;

console.log(a || b); // true
console.log(b || false); // false
```

### Logical NOT (`!`)

Inverts the boolean value.

Example:

```javascript
let a = true;

console.log(!a); // false
console.log(!false); // true
```

# JavaScript Fundamentals Challenge

## Instructions:

1. Create two variables:

   - `tempCelsius`: Assign it a temperature value in Celsius
   - `humidity`: Assign it a percentage value for humidity

2. Use basic operators to:

   - Convert `tempCelsius` to Fahrenheit (Formula: (C \* 9/5) + 32)
   - Calculate the average of the Celsius and Fahrenheit temperatures

3. Use boolean logic to determine:

   - If the temperature is freezing (0°C or below)
   - If the temperature is boiling (100°C or above)
   - If the humidity is high (60% or above)

4. Use logical operators to create the following boolean variables:

   - `isComfortable`: true if temperature is between 20°C and 25°C (inclusive) AND humidity is below 60%
   - `needsCAC`: true if temperature is above 25°C OR humidity is 80% or above

5. Print all your results to the console

## Example Implementation:

```javascript
// Step 1: Create variables
let tempCelsius = 22;
let humidity = 55;

// Step 2: Basic operators
let tempFahrenheit = (tempCelsius * 9) / 5 + 32;
let avgTemp = (tempCelsius + tempFahrenheit) / 2;

// Step 3: Boolean logic
let isFreezing = tempCelsius <= 0;
let isBoiling = tempCelsius >= 100;
let isHumid = humidity >= 60;

// Step 4: Logical operators
let isComfortable = tempCelsius >= 20 && tempCelsius <= 25 && humidity < 60;
let needsCAC = tempCelsius > 25 || humidity >= 80;

// Step 5: Print results
console.log("Temperature in Celsius:", tempCelsius);
console.log("Temperature in Fahrenheit:", tempFahrenheit);
console.log("Average temperature:", avgTemp);
console.log("Is it freezing?", isFreezing);
console.log("Is it boiling?", isBoiling);
console.log("Is it humid?", isHumid);
console.log("Is it comfortable?", isComfortable);
console.log("Does it need cooling and conditioning?", needsCAC);
```

# JavaScript Fundamentals Challenge: Student Performance Analyzer

## Instructions:

1. Create variables for a student's performance:

   - `mathScore`: A number between 0 and 100
   - `scienceScore`: A number between 0 and 100
   - `englishScore`: A number between 0 and 100
   - `attendancePercentage`: A number between 0 and 100

2. Use basic operators to:

   - Calculate the average score of the three subjects
   - Calculate the highest and lowest scores

3. Use boolean logic to determine:

   - If the student scored perfectly in any subject
   - If the student failed any subject (score below 60)

4. Use logical operators to create the following boolean variables:

   - `isOutstanding`: true if average score is 90 or above AND attendance is 98% or above
   - `needsImprovement`: true if any subject score is below 70 OR attendance is below 80%

5. Create number variables that act as "flags" for grade ranges:

   - `gradeA`: 1 if average score is 90 or above, 0 otherwise
   - `gradeB`: 1 if average score is 80-89, 0 otherwise
   - `gradeC`: 1 if average score is 70-79, 0 otherwise
   - `gradeD`: 1 if average score is 60-69, 0 otherwise
   - `gradeF`: 1 if average score is below 60, 0 otherwise

6. Print all your results to the console

## Example Implementation:

```javascript
// Step 1: Create variables
let mathScore = 85;
let scienceScore = 92;
let englishScore = 78;
let attendancePercentage = 96;

// Step 2: Basic operators
let averageScore = (mathScore + scienceScore + englishScore) / 3;
let highestScore = Math.max(mathScore, scienceScore, englishScore);
let lowestScore = Math.min(mathScore, scienceScore, englishScore);

// Step 3: Boolean logic
let hasPerfectScore =
  mathScore === 100 || scienceScore === 100 || englishScore === 100;
let hasFailedSubject = mathScore < 60 || scienceScore < 60 || englishScore < 60;

// Step 4: Logical operators
let isOutstanding = averageScore >= 90 && attendancePercentage >= 98;
let needsImprovement =
  mathScore < 70 ||
  scienceScore < 70 ||
  englishScore < 70 ||
  attendancePercentage < 80;

// Step 5: Grade flags
let gradeA = Number(averageScore >= 90);
let gradeB = Number(averageScore >= 80 && averageScore < 90);
let gradeC = Number(averageScore >= 70 && averageScore < 80);
let gradeD = Number(averageScore >= 60 && averageScore < 70);
let gradeF = Number(averageScore < 60);

// Step 6: Print results
console.log("Average Score:", averageScore.toFixed(2));
console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Has Perfect Score in Any Subject:", hasPerfectScore);
console.log("Has Failed Any Subject:", hasFailedSubject);
console.log("Is Outstanding:", isOutstanding);
console.log("Needs Improvement:", needsImprovement);
console.log("Grade A:", gradeA);
console.log("Grade B:", gradeB);
console.log("Grade C:", gradeC);
console.log("Grade D:", gradeD);
console.log("Grade F:", gradeF);
```
