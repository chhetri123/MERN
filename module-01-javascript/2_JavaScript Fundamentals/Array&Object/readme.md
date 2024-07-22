# JavaScript Arrays and Objects

## 2.17. Basic Array Operations (Methods)

### Introduction to Arrays

Arrays are a fundamental data structure in JavaScript used to store multiple values in a single variable. They are ordered collections that can hold items of any type, including numbers, strings, objects, and even other arrays.

### Creating Arrays

**Syntax:**

```javascript
let myArray = []; // An empty array
let numbers = [1, 2, 3, 4, 5]; // An array of numbers
let mixedArray = [1, "two", { name: "Alice" }, [1, 2, 3]]; // An array with mixed types
```

### Basic Array Operations

#### 1. Accessing Elements

Access array elements using their index (zero-based).

```javascript
let colors = ["red", "green", "blue"];
console.log(colors[0]); // 'red'
console.log(colors[1]); // 'green'
```

#### 2. Modifying Elements

Assign new values to specific indices.

```javascript
let numbers = [1, 2, 3];
numbers[1] = 20;
console.log(numbers); // [1, 20, 3]
```

#### 3. Adding Elements

**Using `push()`:** Adds elements to the end of an array.

```javascript
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // ['apple', 'banana', 'orange']
```

**Using `unshift()`:** Adds elements to the beginning of an array.

```javascript
let numbers = [2, 3, 4];
numbers.unshift(1);
console.log(numbers); // [1, 2, 3, 4]
```

#### 4. Removing Elements

**Using `pop()`:** Removes the last element from an array.

```javascript
let letters = ["a", "b", "c"];
letters.pop();
console.log(letters); // ['a', 'b']
```

**Using `shift()`:** Removes the first element from an array.

```javascript
let letters = ["a", "b", "c"];
letters.shift();
console.log(letters); // ['b', 'c']
```

**Using `splice()`:** Removes or replaces elements from a specific index.

```javascript
let numbers = [1, 2, 3, 4];
numbers.splice(1, 2); // Removes 2 elements starting from index 1
console.log(numbers); // [1, 4]
```

## 2.18. Introduction to Objects

### Introduction to Objects

Objects are another fundamental data structure in JavaScript. They are collections of key-value pairs where each key is a string (or symbol) and each value can be any data type.

### Creating Objects

**Syntax:**

```javascript
let person = {
  name: "Alice",
  age: 25,
  isStudent: false,
};
```

### Accessing and Modifying Object Properties

#### 1. Dot Notation

Access or modify properties using dot notation.

```javascript
let person = {
  name: "Alice",
  age: 25,
};

console.log(person.name); // 'Alice'
person.age = 26;
console.log(person.age); // 26
```

#### 2. Bracket Notation

Access or modify properties using bracket notation, especially useful for dynamic property names.

```javascript
let person = {
  name: "Alice",
  age: 25,
};

console.log(person["name"]); // 'Alice'
person["age"] = 26;
console.log(person["age"]); // 26
```

### Adding and Deleting Properties

#### 1. Adding Properties

```javascript
let person = {
  name: "Alice",
};
person.age = 25; // Adding new property
console.log(person); // { name: 'Alice', age: 25 }
```

#### 2. Deleting Properties

```javascript
let person = {
  name: "Alice",
  age: 25,
};
delete person.age; // Deleting property
console.log(person); // { name: 'Alice' }
```

## 2.19. Dot vs. Bracket Notation

### Dot Notation

- **Usage:** When the property name is a valid identifier (does not contain spaces, special characters, etc.).
- **Example:**
  ```javascript
  let car = {
    make: "Toyota",
    model: "Corolla",
  };
  console.log(car.make); // 'Toyota'
  ```

### Bracket Notation

- **Usage:** When the property name is dynamic, contains spaces, or special characters, or is stored in a variable.
- **Example:**

  ```javascript
  let car = {
    "car make": "Toyota",
    "car model": "Corolla",
  };
  console.log(car["car make"]); // 'Toyota'

  let property = "car model";
  console.log(car[property]); // 'Corolla'
  ```

### Comparison

- Dot notation is simpler and cleaner for static property names.
- Bracket notation provides flexibility and is necessary for dynamic property names.
