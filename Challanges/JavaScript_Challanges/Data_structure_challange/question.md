# Advanced JavaScript Features - Tasks

Now, let's create a task file to practice these concepts:

# Modern JavaScript Features - Tasks

1. **Array Destructuring**
   Create an array of your favorite books (at least 5). Use array destructuring to assign the first three books to variables. Then, use the rest pattern to assign the remaining books to a new array.

2. **Object Destructuring**
   Create an object representing a car with properties for make, model, year, and color. Use object destructuring to extract these properties into variables. Also, add a default value for a 'price' property that doesn't exist in the original object.

3. **Spread Operator**
   Create two arrays of numbers. Use the spread operator to create a new array that combines both arrays. Then, use the spread operator to create a copy of this new array and add two more numbers to it.

4. **Rest Parameters**
   Write a function that calculates the average of any number of arguments passed to it. Use the rest parameter syntax to gather all arguments into an array.

5. **Short Circuiting**
   Write a function that takes a user object as an argument. Use the && operator to check if the user has a 'name' property and it's not an empty string. If true, return the name; otherwise, return 'Anonymous'.

6. **Nullish Coalescing**
   Create a function that takes a product object as an argument. Use the nullish coalescing operator to set default values for the 'discount' and 'stock' properties if they are null or undefined.

7. **For-of Loop**
   Create an array of objects, each representing a person with 'name' and 'age' properties. Use a for-of loop to iterate over the array and log a message for each person, like "Name is X years old".

8. **Combined Challenge**
   Create a function that takes an object as its first argument and any number of additional arguments. The object should have an 'operation' property that's either 'add' or 'multiply'. Use object destructuring to extract the operation, array destructuring with rest to gather the additional arguments, and a for-of loop to perform the specified operation on all the numbers. Return the result.

9. **Enhanced Object Literals**
   Create an object representing a book using enhanced object literal syntax. Include properties for title, author, and a method to display book info. Use computed property names to add a property whose name is stored in a variable.

10. **Optional Chaining**
    Create a nested object structure representing a company with departments and employees. Write a function that safely accesses and returns an employee's email, using optional chaining to handle cases where the department or employee might not exist.

11. **Looping Objects**
    Create an object representing a student's grades in different subjects. Use Object.entries() to calculate and log the student's average grade.

12. **Sets**
    Given an array of numbers with some duplicates, use a Set to remove the duplicates. Then, use the spread operator to convert the Set back to an array and log it.

13. **Maps: Fundamentals**
    Create a Map to store information about different countries (name as key, capital as value). Implement functions to add a new country, get a country's capital, and check if a country exists in the Map.

14. **Maps: Iteration**
    Using the Map from the previous task, write a function that returns an array of all countries whose names start with a given letter. Use Map iteration methods to accomplish this.

15. **Working With Strings**
    Write a function that takes a sentence as input and returns an object containing:

- The number of words in the sentence
- The longest word in the sentence
- The sentence with the first letter of each word capitalized

16. **Combined Challenge**
    Create a function that takes a string of text as input. The function should:

- Use a Set to find all unique words in the text
- Use a Map to count the occurrences of each word
- Return an array of objects, each containing a word and its count, sorted by count in descending order
  Use string methods, Sets, Maps, and array methods to accomplish this task.
