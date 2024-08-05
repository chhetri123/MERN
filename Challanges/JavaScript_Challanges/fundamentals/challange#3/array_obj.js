// index.js
// Coding Challange #1
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

//  Coding Challenge #2

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}

// Task 1: Create and Access Arrays
console.log("Task 1: Create and Access Arrays");
let favoriteFoods = ["Pizza", "Sushi", "Burger", "Pasta", "Salad"];
console.log("First food:", favoriteFoods[0]); // 'Pizza'
console.log("Last food:", favoriteFoods[favoriteFoods.length - 1]); // 'Salad'

console.log(""); // New line for separation

// Task 2: Modify Array Elements
console.log("Task 2: Modify Array Elements");
let numbers = [1, 2, 3, 4, 5];
numbers[1] = 10; // Change the second element
numbers.push(6); // Add 6 to the end of the array
console.log(numbers); // [1, 10, 3, 4, 5, 6]

console.log(""); // New line for separation

// Task 3: Add and Remove Array Elements
console.log("Task 3: Add and Remove Array Elements");
let colors = ["Red", "Green", "Blue"];
colors.unshift("Yellow"); // Add 'Yellow' to the beginning
colors.pop(); // Remove the last color
console.log(colors); // ['Yellow', 'Red', 'Green']

console.log(""); // New line for separation

// Task 4: Find and Replace in Arrays
console.log("Task 4: Find and Replace in Arrays");
let students = ["John", "Jane", "Alice", "Bob"];
students[1] = "Jack"; // Replace the second student
console.log(students); // ['John', 'Jack', 'Alice', 'Bob']

console.log(""); // New line for separation

// Task 5: Create and Access Objects
console.log("Task 5: Create and Access Objects");
let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  yearPublished: 1960,
};
console.log("Title:", book.title); // 'To Kill a Mockingbird'
console.log("Author:", book.author); // 'Harper Lee'

console.log(""); // New line for separation

// Task 6: Modify Object Properties
console.log("Task 6: Modify Object Properties");
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};
car.year = 2021; // Change the year
car.color = "Red"; // Add a new property
console.log(car); // { make: 'Toyota', model: 'Camry', year: 2021, color: 'Red' }

console.log(""); // New line for separation

// Task 7: Dynamic Property Access
console.log("Task 7: Dynamic Property Access");
let person = {
  name: "Alice",
  age: 30,
  occupation: "Engineer",
};
console.log("Occupation:", person["occupation"]); // 'Engineer'
let property = "age";
console.log("Age:", person[property]); // 30

console.log(""); // New line for separation

// Task 8: Nested Objects
console.log("Task 8: Nested Objects");
let library = {
  name: "City Library",
  books: [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
  ],
};
console.log("First book title:", library.books[0].title); // '1984'

console.log(""); // New line for separation

// Task 9: Adding and Deleting Object Properties
console.log("Task 9: Adding and Deleting Object Properties");
let employee = {
  id: 123,
  name: "Bob",
  department: "Sales",
};
employee.position = "Manager"; // Add a new property
delete employee.department; // Delete the department property
console.log(employee); // { id: 123, name: 'Bob', position: 'Manager' }

console.log(""); // New line for separation

// Task 10: Array of Objects
console.log("Task 10: Array of Objects");
let products = [
  { name: "Laptop", price: 999, inStock: true },
  { name: "Phone", price: 599, inStock: false },
  { name: "Tablet", price: 399, inStock: true },
];
products.forEach((product) => {
  console.log(`Name: ${product.name}, Price: ${product.price}`);
});

// Task 11: Array Manipulation with splice()
console.log("Task 1: Array Manipulation with splice()");
let grades = [75, 85, 90, 95];
grades.splice(1, 1, 80); // Insert 80 at index 1 and remove 90
console.log(grades); // [75, 80, 95]

console.log(""); // New line for separation

// Task 12: Array Concatenation
console.log("Task 2: Array Concatenation");
let firstHalf = [1, 2, 3];
let secondHalf = [4, 5, 6];
let fullArray = firstHalf.concat(secondHalf);
console.log(fullArray); // [1, 2, 3, 4, 5, 6]

console.log(""); // New line for separation

// Task 13: Object Property Checking
console.log("Task 3: Object Property Checking");
let device = {
  brand: "Samsung",
  model: "Galaxy S21",
  year: 2021,
};
let hasModel = "model" in device;
console.log("Has 'model' property:", hasModel); // true

console.log(""); // New line for separation

// Task 14: Merge Two Objects
console.log("Task 4: Merge Two Objects");
let person = {
  name: "Alice",
  age: 30,
};
let address = {
  city: "New York",
  country: "USA",
};
let profile = Object.assign({}, person, address);
console.log(profile); // { name: 'Alice', age: 30, city: 'New York', country: 'USA' }

console.log(""); // New line for separation

// Task 15: Object Property Renaming
console.log("Task 5: Object Property Renaming");
let student = {
  firstName: "John",
  lastName: "Doe",
};
student.first_name = student.firstName; // Rename firstName to first_name
delete student.firstName;
student.last_name = student.lastName; // Rename lastName to last_name
delete student.lastName;
console.log(student); // { first_name: 'John', last_name: 'Doe' }

console.log(""); // New line for separation

// Task 16: Nested Array Access
console.log("Task 6: Nested Array Access");
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Element at [1][2]:", matrix[1][2]); // 6

console.log(""); // New line for separation

// Task 17: Object Deep Copy
console.log("Task 7: Object Deep Copy");
let original = {
  name: "Bob",
  details: {
    age: 40,
    city: "Los Angeles",
  },
};
let copy = JSON.parse(JSON.stringify(original));
copy.details.age = 45;
console.log("Original:", original); // { name: 'Bob', details: { age: 40, city: 'Los Angeles' } }
console.log("Copy:", copy); // { name: 'Bob', details: { age: 45, city: 'Los Angeles' } }

console.log(""); // New line for separation

// Task 18: Array Index Finding
console.log("Task 8: Array Index Finding");
let animals = ["cat", "dog", "bird"];
let index = animals.indexOf("dog");
console.log("Index of 'dog':", index); // 1

console.log(""); // New line for separation

// Task 19: Object Property Descriptors
console.log("Task 9: Object Property Descriptors");
let settings = {
  theme: "dark",
  notifications: true,
};
let descriptor = Object.getOwnPropertyDescriptor(settings, "theme");
console.log("Descriptor of 'theme':", descriptor);

console.log(""); // New line for separation

// Task 20: Array Flattening
console.log("Task 10: Array Flattening");
let nestedArray = [
  1,
  [
    2,
    [
      3,

      4,
    ],
    5,
  ],
  6,
];
let flatArray = nestedArray.flat(2); // Flatten up to 2 levels deep
console.log(flatArray); // [1, 2, 3, 4, 5, 6]
