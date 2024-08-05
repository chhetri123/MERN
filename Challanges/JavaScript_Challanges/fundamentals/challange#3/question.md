## Coding challange #1

Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

## Coding Challenge #2

/_
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height \*\* 2 = mass / (height _ height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

### Task Challenges: Arrays and Objects

#### Task 1: Create and Access Arrays

**Challenge:**

1. Create an array named `favoriteFoods` that contains at least 5 different food items.
2. Access and log the first and last items from the `favoriteFoods` array.

**Example:**

```javascript
let favoriteFoods = ["Pizza", "Sushi", "Burger", "Pasta", "Salad"];
// Access and log the first and last items
```

#### Task 2: Modify Array Elements

**Challenge:**

1. Create an array named `numbers` containing the numbers 1 through 5.
2. Change the second element to 10 and add the number 6 to the end of the array.
3. Log the modified array.

**Example:**

```javascript
let numbers = [1, 2, 3, 4, 5];
// Modify the array
```

#### Task 3: Add and Remove Array Elements

**Challenge:**

1. Create an array named `colors` with three color names.
2. Add a new color to the beginning of the array and remove the last color from the array.
3. Log the final array.

**Example:**

```javascript
let colors = ["Red", "Green", "Blue"];
// Add and remove colors
```

#### Task 4: Find and Replace in Arrays

**Challenge:**

1. Create an array named `students` with the names of 4 students.
2. Replace the name of the second student with a new name.
3. Log the updated array.

**Example:**

```javascript
let students = ["John", "Jane", "Alice", "Bob"];
// Replace the second student
```

#### Task 5: Create and Access Objects

**Challenge:**

1. Create an object named `book` with properties `title`, `author`, and `yearPublished`.
2. Log the `title` and `author` properties of the `book` object.

**Example:**

```javascript
let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  yearPublished: 1960,
};
// Log title and author
```

#### Task 6: Modify Object Properties

**Challenge:**

1. Create an object named `car` with properties `make`, `model`, and `year`.
2. Change the `year` property to a new year.
3. Add a new property `color` to the object.
4. Log the updated `car` object.

**Example:**

```javascript
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};
// Modify and add properties
```

#### Task 7: Dynamic Property Access

**Challenge:**

1. Create an object named `person` with properties `name`, `age`, and `occupation`.
2. Use bracket notation to access and log the `occupation` property.
3. Store the property name in a variable and use that variable to log the `age` property.

**Example:**

```javascript
let person = {
  name: "Alice",
  age: 30,
  occupation: "Engineer",
};
// Access properties using bracket notation
```

#### Task 8: Nested Objects

**Challenge:**

1. Create an object named `library` with properties `name` and `books`.
2. The `books` property should be an array of objects, each representing a book with `title` and `author`.
3. Log the title of the first book in the `books` array.

**Example:**

```javascript
let library = {
  name: "City Library",
  books: [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
  ],
};
// Log the title of the first book
```

#### Task 9: Adding and Deleting Object Properties

**Challenge:**

1. Create an object named `employee` with properties `id`, `name`, and `department`.
2. Add a new property `position` to the object.
3. Delete the `department` property.
4. Log the final `employee` object.

**Example:**

```javascript
let employee = {
  id: 123,
  name: "Bob",
  department: "Sales",
};
// Add and delete properties
```

#### Task 10: Array of Objects

**Challenge:**

1. Create an array named `products` with at least three objects. Each object should represent a product with `name`, `price`, and `inStock` properties.
2. Log the name and price of each product.

**Example:**

```javascript
let products = [
  { name: "Laptop", price: 999, inStock: true },
  { name: "Phone", price: 599, inStock: false },
  { name: "Tablet", price: 399, inStock: true },
];
// Log name and price of each product
```

Certainly! Here are 10 additional questions to increase the difficulty, focusing on arrays and objects without using array iteration methods:

### Advanced Task Challenges: Arrays and Objects

#### Task 11: Array Manipulation with `splice()`

**Challenge:**

1. Create an array named `grades` with the values `[75, 85, 90, 95]`.
2. Use `splice()` to insert the grade `80` at the second position and remove the grade `90`.
3. Log the final array.

**Example:**

```javascript
let grades = [75, 85, 90, 95];
// Use splice to modify the array
```

#### Task 12: Array Concatenation

**Challenge:**

1. Create two arrays named `firstHalf` and `secondHalf` with the values `[1, 2, 3]` and `[4, 5, 6]`, respectively.
2. Concatenate these two arrays into a new array named `fullArray`.
3. Log the `fullArray`.

**Example:**

```javascript
let firstHalf = [1, 2, 3];
let secondHalf = [4, 5, 6];
// Concatenate the arrays
```

#### Task 13: Object Property Checking

**Challenge:**

1. Create an object named `device` with properties `brand`, `model`, and `year`.
2. Check if the `device` object has the property `model`.
3. Log a message indicating whether the property exists or not.

**Example:**

```javascript
let device = {
  brand: "Samsung",
  model: "Galaxy S21",
  year: 2021,
};
// Check if the device object has the 'model' property
```

#### Task 14: Merge Two Objects

**Challenge:**

1. Create two objects: `person` with properties `name` and `age`, and `address` with properties `city` and `country`.
2. Merge these two objects into a new object named `profile`.
3. Log the `profile` object.

**Example:**

```javascript
let person = {
  name: "Alice",
  age: 30,
};
let address = {
  city: "New York",
  country: "USA",
};
// Merge the objects
```

#### Task 15: Object Property Renaming

**Challenge:**

1. Create an object named `student` with properties `firstName` and `lastName`.
2. Rename `firstName` to `first_name` and `lastName` to `last_name`.
3. Log the updated `student` object.

**Example:**

```javascript
let student = {
  firstName: "John",
  lastName: "Doe",
};
// Rename the properties
```

#### Task 16: Nested Array Access

**Challenge:**

1. Create a 2D array named `matrix` with the following structure:
   ```javascript
   [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9],
   ];
   ```
2. Access and log the element at position `[1][2]` (second row, third column).

**Example:**

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Access and log the element at position [1][2]
```

#### Task 17: Object Deep Copy

**Challenge:**

1. Create an object `original` with nested properties:
   ```javascript
   let original = {
     name: "Bob",
     details: {
       age: 40,
       city: "Los Angeles",
     },
   };
   ```
2. Create a deep copy of `original` named `copy` and modify the `age` in `copy` to `45`.
3. Log both `original` and `copy` to ensure the original object is not modified.

**Example:**

```javascript
let original = {
  name: "Bob",
  details: {
    age: 40,
    city: "Los Angeles",
  },
};
// Deep copy and modify
```

#### Task 18: Array Index Finding

**Challenge:**

1. Create an array named `animals` with the values `['cat', 'dog', 'bird']`.
2. Find the index of the element `'dog'` and log the index.

**Example:**

```javascript
let animals = ["cat", "dog", "bird"];
// Find and log the index of 'dog'
```

#### Task 19: Object Property Descriptors

**Challenge:**

1. Create an object `settings` with properties `theme` and `notifications`.
2. Use `Object.getOwnPropertyDescriptor()` to get the descriptor of the `theme` property.
3. Log the descriptor to understand its attributes.

**Example:**

```javascript
let settings = {
  theme: "dark",
  notifications: true,
};
// Get and log the descriptor of the 'theme' property
```

#### Task 20: Array Flattening

**Challenge:**

1. Create a nested array named `nestedArray` with the following structure:
   ```javascript
   [1, [2, [3, 4], 5], 6];
   ```
2. Flatten this array to a single level array named `flatArray`.
3. Log the `flatArray`.

**Example:**

```javascript
let nestedArray = [1, [2, [3, 4], 5], 6];
// Flatten the array
```
