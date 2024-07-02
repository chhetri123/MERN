/*----------------------------------------------------------------
 ************ first challange ************
 *
 *
 *
 *----------------------------------------------------------------*/
const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

function fetchUserData(id, callback) {
  setTimeout(() => {
    const user = users.find((user) => user.id === id);
    callback(user);
  }, 2000);
}

fetchUserData(2, (user) => {
  if (user) {
    console.log(`User Found: ${user.name}, Email: ${user.email}`);
  } else {
    console.log("User not found");
  }
});

/*********** second challange ************/
const numbers = [1, 2, 3, 4, 5];

function transformArray(array, transformFn) {
  return array.map(transformFn);
}

// Transformation functions
const double = (num) => num * 2;
const square = (num) => num * num;

// Usage
const doubledNumbers = transformArray(numbers, double);
const squaredNumbers = transformArray(numbers, square);

console.log("Doubled Numbers:", doubledNumbers);
console.log("Squared Numbers:", squaredNumbers);

/*----------------------------------------------------------------
 ************ third challange  solution ************
 *
 *
 *
 *----------------------------------------------------------------*/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentInfo() {
    return `${this.getDetails()}, Student ID: ${this.studentId}`;
  }
}

// Usage
const person = new Person("John Doe", 30);
const student = new Student("Jane Doe", 20, "S12345");

console.log(person.getDetails());
console.log(student.getStudentInfo());
/*----------------------------------------------------------------
 ************ fourth challange solution ************
 *
 *
 *
 *----------------------------------------------------------------*/

class Movie {
  constructor(title, director, rating = 0) {
    this.title = title;
    this.director = director;
    this.rating = rating;
  }

  rate(rating) {
    this.rating = rating;
  }

  getDetails() {
    return `Title: ${this.title}, Director: ${this.director}, Rating: ${this.rating}`;
  }
}

class MovieManager {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
  }

  filterMovies(callback) {
    return this.movies.filter(callback);
  }

  displayMovies() {
    this.movies.forEach((movie) => {
      console.log(movie.getDetails());
    });
  }
}

function filterByRating(minRating) {
  return function (movie) {
    return movie.rating >= minRating;
  };
}

// Create instances of Movie
const movie1 = new Movie("Inception", "Christopher Nolan", 9);
const movie2 = new Movie("Interstellar", "Christopher Nolan", 8);
const movie3 = new Movie("Dunkirk", "Christopher Nolan", 7);

// Create instance of MovieManager
const movieManager = new MovieManager();

// Add movies to the manager
movieManager.addMovie(movie1);
movieManager.addMovie(movie2);
movieManager.addMovie(movie3);

// Display all movies
console.log("All Movies:");
movieManager.displayMovies();

// Filter movies with rating >= 8
const highRatedMovies = movieManager.filterMovies(filterByRating(8));

// Display filtered movies
console.log("\nHigh Rated Movies:");
highRatedMovies.forEach((movie) => console.log(movie.getDetails()));

/*----------------------------------------------------------------
 * Implementations of advance features **********
 *
 *
 *
 *----------------------------------------------------------------*/

class Movie {
  // ... previous methods

  updateDetails(details) {
    this.title = details.title || this.title;
    this.director = details.director || this.director;
    this.rating = details.rating || this.rating;
  }
}
//
class MovieManager {
  // From Previous One

  removeMovie(title) {
    this.movies = this.movies.filter((movie) => movie.title !== title);
  }

  searchMovies(query) {
    return this.movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.director.toLowerCase().includes(query.toLowerCase())
    );
  }

  sortMoviesBy(field, ascending = true) {
    this.movies.sort((a, b) => {
      if (a[field] < b[field]) return ascending ? -1 : 1;
      if (a[field] > b[field]) return ascending ? 1 : -1;
      return 0;
    });
  }

  saveToLocalStorage() {
    localStorage.setItem("movies", JSON.stringify(this.movies));
  }

  loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem("movies"));
    this.movies = data
      ? data.map(
          (movie) => new Movie(movie.title, movie.director, movie.rating)
        )
      : [];
  }

  // dvance Filtering
  filterMoviesBy(criteria) {
    return this.movies.filter((movie) => {
      return (
        (!criteria.director || movie.director === criteria.director) &&
        (!criteria.minRating || movie.rating >= criteria.minRating)
      );
    });
  }

  //Pagination
  getMoviesByPage(page = 1, pageSize = 5) {
    // page=2
    const startIndex = (page - 1) * pageSize;
    return this.movies.slice(startIndex, startIndex + pageSize); // 10, 10+5=15
  }
}

// OverAll intances

// Create instances of Movie
// const movie1 = new Movie('Inception', 'Christopher Nolan', 9);
// const movie2 = new Movie('Interstellar', 'Christopher Nolan', 8);
// const movie3 = new Movie('Dunkirk', 'Christopher Nolan', 7);

// // Create instance of MovieManager
// const movieManager = new MovieManager();

// Load movies from local storage
movieManager.loadFromLocalStorage();

// Add movies to the manager
movieManager.addMovie(movie1);
movieManager.addMovie(movie2);
movieManager.addMovie(movie3);

// Save movies to local storage
movieManager.saveToLocalStorage();

// Display all movies
console.log("All Movies:");
movieManager.displayMovies();

// Search movies
console.log("\nSearch Results:");
const searchResults = movieManager.searchMovies("Interstellar");
searchResults.forEach((movie) => console.log(movie.getDetails()));

// Sort and display movies by rating
movieManager.sortMoviesBy("rating", false);
console.log("\nSorted Movies by Rating:");
movieManager.displayMovies();

// Filter movies with rating >= 8
console.log("\nFiltered Movies:");
const filteredMovies = movieManager.filterMoviesBy({ minRating: 8 });
filteredMovies.forEach((movie) => console.log(movie.getDetails()));

// Display movies by page
console.log("\nMovies on Page 1:");
const page1Movies = movieManager.getMoviesByPage(1, 2);
page1Movies.forEach((movie) => console.log(movie.getDetails()));

/***************
 *
 *  challange 4 solution
 *
 *
 */

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
