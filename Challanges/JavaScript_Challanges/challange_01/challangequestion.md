# Challenges: Currying and Partial Application in JavaScript

## Currying Challenges

### Challenge 1: Create a Curried Function

**Task:** Create a curried function that adds three numbers.

1. Create a function called `curriedAdd` that takes three arguments (one at a time) and returns their sum.
2. Use the `curriedAdd` function to create a new function that adds 5 to the sum of two other numbers.

_Hint:_ Remember to transform the function to take one argument at a time.

### Challenge 2: Apply Currying to a String Manipulation Function

**Task:** Create a curried function that concatenates three strings.

1. Create a function called `curriedConcat` that takes three string arguments (one at a time) and returns the concatenated string.
2. Use the `curriedConcat` function to create a new function that concatenates "Hello" with two other strings.

_Hint:_ Each function call should return a new function until all arguments are provided.

## Partial Application Challenges

### Challenge 1: Partially Apply a Math Function

**Task:** Create a partially applied function that multiplies three numbers.

1. Create a function called `multiply` that takes three arguments and returns their product.
2. Use partial application to create a new function that multiplies a given number by 2 and 3.

_Hint:_ Use a helper function to partially apply the arguments.

### Challenge 2: Partially Apply a Function to Calculate Discount

**Task:** Create a partially applied function to calculate the price after discount.

1. Create a function called `calculateDiscount` that takes three arguments: price, discount percentage, and tax rate.
2. Use partial application to create a new function that calculates the final price with a fixed discount of 10% and a tax rate of 5%.

_Hint:_ Pre-fill the discount percentage and tax rate arguments.
