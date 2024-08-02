**_Challenge 1: Callback Functions_**

Objective: Create a simple asynchronous operation using callback functions.

Description: Implement a function that fetches user data from a simulated database (array of objects) using a callback function to handle the response.

Steps:

- Create an array of user objects with properties: id, name, and email.
- Implement a function fetchUserData(id, callback) that simulates fetching user data by id after a delay (use setTimeout).
  -Use the callback function to handle the fetched data and display the user details.
  ```js
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];
  ```

**_Challenge 2: Higher-Order Functions_**

Objective: Implement a higher-order function to transform data.

Description: Create a higher-order function that takes a function as an argument to transform an array of numbers.

Steps:

- Create an array of numbers.
- Implement a higher-order function transformArray(array, transformFn) that applies the transformFn to each element of the array and returns the transformed array.
- Use the higher-order function with different transformation functions (e.g., doubling the values, squaring the values).

**_Challenge 3: Class Inheritance_**

Objective: Implement class inheritance in a simple scenario.

Description: Create a base class Person and a derived class Student.

Steps:

- Implement a base class Person with properties: name and age.
- Implement a derived class Student that extends Person and adds a new property: studentId.
- Add methods to both classes: getDetails() for Person and getStudentInfo() for Student.
- Create instances of both classes and display their details.

**_Challenge 4: Class Inheritance_**

Challenge: Shape Inheritance
Create a class Shape with the following properties and methods:

- A constructor that takes name as a parameter.
- A method describe that logs a message including the name of the shape.
- Then, create two subclasses Circle and Rectangle that inherit from Shape.

- The Circle class should have an additional property radius and a method area that calculates and returns the area of the circle.
- The Rectangle class should have additional properties width and height and a method area that calculates and returns the area of the rectangle.

**_Final Challenge: Movie Management System_**
Objective:
Create a simple movie management system where you can add movies, rate them, and filter movies based on ratings.

Requirements:

Movie Class:

Create a Movie class with the following properties:

- title (string)
- director (string)
- rating (number, default value should be 0)
  The class should have the following methods:

- rate(rating): Method to update the movie's rating.
- getDetails(): Method to return the movie's details as a string.

MovieManager Class (Inheritance):

- Create a MovieManager class that extends the Movie class.
- This class should have an array to store movies and the following methods:
- addMovie(movie): Method to add a movie to the array.
- filterMovies(callback): Method to filter movies based on a callback function.
- displayMovies(): Method to display all movies' details.

Higher-Order Function:

- Implement a higher-order function filterByRating(rating) that takes a rating as an argument and returns a callback function to be used with filterMovies.
- Callback Functions:
  Use callback functions to filter movies based on ratings and display the filtered movies.

**Additional advance Features**
Search Functionality:

- Add a method to search for movies by title or director.

Sorting Movies:

- Add methods to sort the movies by title, director, or rating in ascending or descending order.

Remove Movie:

- Add a method to remove a movie by title or ID.

Update Movie Details:

- Add a method to update movie details such as title, director, or rating.

Persist Data:

- Use local storage to persist the movie data across page reloads.

Advanced Filtering:

- Add filtering by multiple criteria (e.g., movies by a specific director with a rating above a certain threshold).

Pagination:

- Implement pagination to handle displaying a large number of movies.

  **Challange 5**

1. Create a CLass CarCl that takes 2 parameters and add them to the properties.
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

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
