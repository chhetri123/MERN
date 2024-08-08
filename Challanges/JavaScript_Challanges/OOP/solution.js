// Challenge 1: Book Management System
/***********
 *
 *
 * constructor function
 */

function Book(title, author, genre) {
  this.title = title;
  this.author = author;
  this.genre = genre;
}

Book.prototype.describe = function () {
  return `${this.title} by ${this.author} - Genre: ${this.genre}`;
};

// Example usage
let book = new Book("1984", "George Orwell", "Dystopian");
console.log(book.describe()); // Output: 1984 by George Orwell - Genre: Dystopian

// Challenge 2: Vehicle Inventory
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.getAge = function () {
  let currentYear = new Date().getFullYear();
  return currentYear - this.year;
};

// Example usage
let car = new Vehicle("Toyota", "Corolla", 2015);
console.log(car.getAge()); // Output: Age of the car

// Challenge 3: Bank Account Management
function BankAccount(accountNumber, accountHolder, balance) {
  this.accountNumber = accountNumber;
  this.accountHolder = accountHolder;
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  return this.balance;
};

BankAccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    return "Insufficient funds";
  }
  this.balance -= amount;
  return this.balance;
};

// Example usage
let account1 = new BankAccount("123456", "John Doe", 500);
console.log(account1.deposit(200)); // Output: 700
console.log(account1.withdraw(100)); // Output: 600

// Challenge 4: Employee Records
function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;
}

Employee.prototype.getAnnualSalary = function () {
  return this.salary * 12;
};

// Example usage
let employee1 = new Employee("Alice", "Developer", 5000);
console.log(employee1.getAnnualSalary()); // Output: 60000

// Challenge 5: Library System
function Library() {
  this.books = [];
}

Library.prototype.addBook = function (book) {
  this.books.push(book);
};

Library.prototype.removeBook = function (title) {
  this.books = this.books.filter((book) => book.title !== title);
};

Library.prototype.findBook = function (title) {
  return this.books.find((book) => book.title === title);
};

// Example usage
let library = new Library();
library.addBook(new Book("1984", "George Orwell", "Dystopian"));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", "Fiction"));
console.log(library.findBook("1984")); // Output: Book object
library.removeBook("1984");
console.log(library.findBook("1984")); // Output: undefined

// Challenge 6: Task Management
function Task(title, description) {
  this.title = title;
  this.description = description;
  this.status = "Incomplete";
}

Task.prototype.completeTask = function () {
  this.status = "Complete";
};

Task.prototype.isComplete = function () {
  return this.status === "Complete";
};

// Example usage
let task1 = new Task(
  "Finish report",
  "Complete the annual report by end of the week"
);
console.log(task1.isComplete()); // Output: false
task1.completeTask();
console.log(task1.isComplete()); // Output: true

// Challenge 7: Shopping Cart
function ShoppingCart() {
  this.items = [];
}

ShoppingCart.prototype.addItem = function (item, price) {
  this.items.push({ item, price });
};

ShoppingCart.prototype.removeItem = function (item) {
  this.items = this.items.filter((i) => i.item !== item);
};

ShoppingCart.prototype.calculateTotal = function () {
  return this.items.reduce((total, item) => total + item.price, 0);
};

// Example usage
let cart = new ShoppingCart();
cart.addItem("Laptop", 1000);
cart.addItem("Mouse", 50);
console.log(cart.calculateTotal()); // Output: 1050
cart.removeItem("Mouse");
console.log(cart.calculateTotal()); // Output: 1000

// Challenge 8: Movie Database
function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
}

Movie.prototype.getMovieInfo = function () {
  return `${this.title} directed by ${this.director} in ${this.year}`;
};

// Example usage
let movie1 = new Movie("Inception", "Christopher Nolan", 2010);
console.log(movie1.getMovieInfo()); // Output: Inception directed by Christopher Nolan in 2010

// Challenge 9: Student Management
function Student(name, age) {
  this.name = name;
  this.age = age;
  this.grades = [];
}

Student.prototype.addGrade = function (grade) {
  this.grades.push(grade);
};

Student.prototype.getAverageGrade = function () {
  let total = this.grades.reduce((sum, grade) => sum + grade, 0);
  return total / this.grades.length;
};

Student.prototype.getDetails = function () {
  return `Name: ${this.name}, Age: ${
    this.age
  }, Average Grade: ${this.getAverageGrade()}`;
};

// Example usage
let student1 = new Student("John", 20);
student1.addGrade(90);
student1.addGrade(85);
console.log(student1.getDetails()); // Output: Name: John, Age: 20, Average Grade: 87.5

// Challenge 10: Restaurant Menu
function MenuItem(name, category, price) {
  this.name = name;
  this.category = category;
  this.price = price;
}

MenuItem.prototype.getDetails = function () {
  return `${this.name} - ${this.category} - $${this.price}`;
};

// Example usage
let item1 = new MenuItem("Burger", "Main Course", 8.99);
console.log(item1.getDetails()); // Output: Burger - Main Course - $8.99

// Challenge 11: Order Management
function Order(orderNumber, customerName) {
  this.orderNumber = orderNumber;
  this.customerName = customerName;
  this.items = [];
}

Order.prototype.addItem = function (item, price) {
  this.items.push({ item, price });
};

Order.prototype.getTotal = function () {
  return this.items.reduce((total, item) => total + item.price, 0);
};

// Example usage
let order1 = new Order("001", "Alice");
order1.addItem("Pizza", 12);
order1.addItem("Soda", 2);
console.log(order1.getTotal()); // Output: 14

// Challenge 12: Pet Management
function Pet(name, type, age) {
  this.name = name;
  this.type = type;
  this.age = age;
}

Pet.prototype.describe = function () {
  return `${this.name} is a ${this.age}-year-old ${this.type}`;
};

Pet.prototype.celebrateBirthday = function () {
  this.age += 1;
};

// Example usage
let pet1 = new Pet("Buddy", "dog", 3);
console.log(pet1.describe()); // Output: Buddy is a 3-year-old dog
pet1.celebrateBirthday();
console.log(pet1.describe()); // Output: Buddy is a 4-year-old dog

/*******************
 *
 *
 * Classes challange Solution
 *
 *
 */
// Challenge 1: Creating Classes and Instances
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2021);
console.log(car1);
console.log(car2);

// Challenge 2: Adding Methods to Classes
Car.prototype.getCarInfo = function () {
  return `${this.make} ${this.model} (${this.year})`;
};

console.log(car1.getCarInfo());
console.log(car2.getCarInfo());

// Challenge 3: Using Inheritance
class ElectricCar extends Car {
  constructor(make, model, year, batteryCapacity) {
    super(make, model, year);
    this.batteryCapacity = batteryCapacity;
  }
}

const eCar = new ElectricCar("Tesla", "Model S", 2022, "100 kWh");
console.log(eCar);

// Challenge 4: Overriding Methods
ElectricCar.prototype.getCarInfo = function () {
  return `${this.make} ${this.model} (${this.year}), Battery: ${this.batteryCapacity}`;
};

console.log(eCar.getCarInfo());

// Challenge 5: Encapsulation with Constructor Functions
function BankAccount(initialBalance) {
  let balance = initialBalance;

  this.deposit = function (amount) {
    balance += amount;
  };

  this.getBalance = function () {
    return balance;
  };
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500

// Challenge 6: Encapsulation with ES6 Classes
class BankAccountES6 {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const accountES6 = new BankAccountES6(1000);
accountES6.deposit(500);
console.log(accountES6.getBalance()); // 1500

// Challenge 7: Using Getters and Setters
class BankAccountWithAccessors {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  get balance() {
    return this.#balance;
  }

  set balance(newBalance) {
    if (newBalance >= 0) {
      this.#balance = newBalance;
    }
  }
}

const accountWithAccessors = new BankAccountWithAccessors(1000);
console.log(accountWithAccessors.balance); // 1000
accountWithAccessors.balance = 1500;
console.log(accountWithAccessors.balance); // 1500

// Challenge 8: Method Chaining
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    return this;
  }

  removeBook(book) {
    this.books = this.books.filter((b) => b !== book);
    return this;
  }

  getBooks() {
    return this.books;
  }
}

const myLibrary = new Library();
myLibrary.addBook("1984").addBook("Brave New World").removeBook("1984");
console.log(myLibrary.getBooks()); // ["Brave New World"]

// Challenge 9: Static Methods
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static compareAge(person1, person2) {
    return person1.age - person2.age;
  }
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);
console.log(Person.compareAge(person1, person2)); // 5

// Challenge 10: Prototypal Inheritance
const animal = {
  speak: function () {
    console.log("Animal speaking");
  },
};

const dog = Object.create(animal);
dog.speak = function () {
  console.log("Woof! Woof!");
};

animal.speak(); // "Animal speaking"
dog.speak(); // "Woof! Woof!"

// Challenge 11: Object.create
const cat = Object.create(animal);
cat.meow = function () {
  console.log("Meow!");
};

cat.speak(); // "Animal speaking"
cat.meow(); // "Meow!"

// Challenge 12: Inheriting Built-In Objects
Array.prototype.last = function () {
  return this[this.length - 1];
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.last()); // 5

// Challenge 13: Implementing Polymorphism
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}

const myCircle = new Circle(5);
const mySquare = new Square(4);
console.log(myCircle.area()); // 78.53981633974483
console.log(mySquare.area()); // 16

// Challenge 14: Abstract Classes and Methods
class Animal {
  makeSound() {
    throw new Error("Abstract method!");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow!");
  }
}

const myDog = new Dog();
const myCat = new Cat();
myDog.makeSound(); // "Woof!"
myCat.makeSound(); // "Meow!"

// Challenge 15: Aggregation
class Author {
  constructor(name) {
    this.name = name;
  }
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const author1 = new Author("George Orwell");
const book1 = new Book("1984", author1);
console.log(book1);

// Challenge 16: Composition
class Engine {
  constructor(horsepower) {
    this.horsepower = horsepower;
  }
}

class CarWithEngine {
  constructor(make, model, engine) {
    this.make = make;
    this.model = model;
    this.engine = engine;
  }
}

const engine = new Engine(200);
const myCarWithEngine = new CarWithEngine("Toyota", "Camry", engine);
console.log(myCarWithEngine);
