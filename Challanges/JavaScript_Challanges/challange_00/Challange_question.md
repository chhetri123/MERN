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