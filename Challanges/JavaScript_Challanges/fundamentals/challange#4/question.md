## Coding Challenge #1

Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:

- 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
- 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
- 4.3. Call the function with the 'totals' array

### Task Challenges for Loops

#### Task 1: Print Multiples of a Number

**Challenge:**

1. Write a `for` loop to print all multiples of 3 between 1 and 30 (inclusive).

**Example:**

```javascript
// Print multiples of 3 between 1 and 30
```

#### Task 2: Sum of Array Elements

**Challenge:**

1. Given an array of numbers, use a `for` loop to calculate and print the sum of all the elements.

**Example:**

```javascript
const numbers = [10, 20, 30, 40, 50];
// Calculate and print the sum of elements
```

#### Task 3: Reverse a String

**Challenge:**

1. Write a `for` loop to reverse a string and print the reversed string.

**Example:**

```javascript
const str = "JavaScript";
// Reverse and print the string
```

#### Task 4: Factorial Calculation

**Challenge:**

1. Use a `for` loop to calculate the factorial of a given number (e.g., 5!) and print the result.

**Example:**

```javascript
const num = 5;
// Calculate and print the factorial
```

#### Task 5: Multiplication Table

**Challenge:**

1. Write a nested `for` loop to generate and print a multiplication table for numbers 1 through 5.

**Example:**

```javascript
// Generate and print a multiplication table for numbers 1 through 5
```

#### Task 6: Print Odd Numbers Using `while` Loop

**Challenge:**

1. Use a `while` loop to print all odd numbers between 1 and 20 (inclusive).

**Example:**

```javascript
// Print odd numbers between 1 and 20
```

#### Task 7: Count Down Using `while` Loop

**Challenge:**

1. Write a `while` loop to count down from 10 to 1 and print each number.

**Example:**

```javascript
// Count down from 10 to 1
```

#### Task 8: FizzBuzz Problem

**Challenge:**

1. Write a `for` loop to solve the FizzBuzz problem. Print numbers from 1 to 30, but print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.

**Example:**

```javascript
// Solve the FizzBuzz problem from 1 to 30
```

#### Task 9: Nested Loop Pattern

**Challenge:**

1. Use nested `for` loops to create a pattern like the following:
   ```
   *
   **
   ***
   ****
   ```

**Example:**

```javascript
// Create a pattern using nested loops
```

#### Task 10: Find Largest Element in a 2D Array

**Challenge:**

1. Write a nested `for` loop to find and print the largest element in a 2D array.

**Example:**

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Find and print the largest element
```
