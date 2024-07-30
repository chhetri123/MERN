# Advanced JavaScript Array Methods and DOM Manipulation

## Table of Contents

1. [Simple Array Methods](#simple-array-methods)
2. [Looping Arrays: forEach](#looping-arrays-foreach)
3. [forEach With Maps and Sets](#foreach-with-maps-and-sets)
4. [Creating DOM Elements](#creating-dom-elements)
5. [Data Transformations: map, filter, reduce](#data-transformations-map-filter-reduce)
6. [The map Method](#the-map-method)
7. [The filter Method](#the-filter-method)
8. [The reduce Method](#the-reduce-method)
9. [The Magic of Chaining Methods](#the-magic-of-chaining-methods)
10. [The find Method](#the-find-method)
11. [The findIndex Method](#the-findindex-method)
12. [some and every](#some-and-every)
13. [flat and flatMap](#flat-and-flatmap)
14. [Sorting Arrays](#sorting-arrays)
15. [More Ways of Creating and Filling Arrays](#more-ways-of-creating-and-filling-arrays)

## 1. Simple Array Methods

### push()

Adds one or more elements to the end of an array and returns the new length of the array.

```javascript
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // ['apple', 'banana', 'orange']
```

### pop()

Removes the last element from an array and returns that element.

```javascript
let fruits = ["apple", "banana", "orange"];
let removedFruit = fruits.pop();
console.log(removedFruit); // 'orange'
console.log(fruits); // ['apple', 'banana']
```

### shift()

Removes the first element from an array and returns that element.

```javascript
let fruits = ["apple", "banana"];
let removedFruit = fruits.shift();
console.log(removedFruit); // 'apple'
console.log(fruits); // ['banana']
```

### unshift()

Adds one or more elements to the beginning of an array and returns the new length of the array.

```javascript
let fruits = ["banana"];
fruits.unshift("apple");
console.log(fruits); // ['apple', 'banana']
```

### splice()

Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

```javascript
let fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1, "grape");
console.log(fruits); // ['apple', 'grape', 'orange']
```

### slice()

Returns a shallow copy of a portion of an array into a new array object.

```javascript
let fruits = ["apple", "banana", "orange"];
let citrus = fruits.slice(1, 2);
console.log(citrus); // ['banana']
```

### concat()

Merges two or more arrays into one.

```javascript
let fruits = ["apple", "banana"];
let moreFruits = ["orange", "grape"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ['apple', 'banana', 'orange', 'grape']
```

## 2. Looping Arrays: forEach

The `forEach()` method executes a provided function once for each array element.

### Example

```javascript
let fruits = ["apple", "banana", "orange"];
fruits.forEach(function (fruit) {
  console.log(fruit);
});
// Output:
// apple
// banana
// orange
```

## 3. forEach With Maps and Sets

### Using forEach with Map

```javascript
let myMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// key1: value1
// key2: value2
```

### Using forEach with Set

```javascript
let mySet = new Set([1, 2, 3]);
mySet.forEach((value) => {
  console.log(value);
});
// Output:
// 1
// 2
// 3
```

## 4. Creating DOM Elements

### Example

```javascript
let newDiv = document.createElement("div");
newDiv.textContent = "Hello, World!";
document.body.appendChild(newDiv);
```

## 5. Data Transformations: map, filter, reduce

### map()

Creates a new array populated with the results of calling a provided function on every element in the calling array.

### Example

```javascript
let numbers = [1, 2, 3];
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]
```

### filter()

Creates a new array with all elements that pass the test implemented by the provided function.

### Example

```javascript
let numbers = [1, 2, 3, 4];
let evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]
```

### reduce()

Executes a reducer function on each element of the array, resulting in a single output value.

### Example

```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

## 6. The map Method

The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

### Example

```javascript
let numbers = [1, 2, 3];
let squares = numbers.map((num) => num * num);
console.log(squares); // [1, 4, 9]
```

## 7. The filter Method

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

### Example

```javascript
let numbers = [1, 2, 3, 4, 5];
let oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log(oddNumbers); // [1, 3, 5]
```

## 8. The reduce Method

The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value.

### Example

```javascript
let numbers = [1, 2, 3, 4];
let product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product); // 24
```

## 9. The Magic of Chaining Methods

Method chaining allows you to call multiple methods on the same array.

### Example

```javascript
let numbers = [1, 2, 3, 4, 5];
let result = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * num)
  .reduce((acc, num) => acc + num, 0);
console.log(result); // 20
```

## 10. The find Method

The `find()` method returns the value of the first element that passes a test.

### Example

```javascript
let numbers = [1, 2, 3, 4, 5];
let found = numbers.find((num) => num > 3);
console.log(found); // 4
```

## 11. The findIndex Method

The `findIndex()` method returns the index of the first element that passes a test.

### Example

```javascript
let numbers = [1, 2, 3, 4, 5];
let index = numbers.findIndex((num) => num > 3);
console.log(index); // 3
```

## 12. some and every

### some()

The `some()` method tests whether at least one element in the array passes the test.

### Example

```javascript
let numbers = [1, 2, 3, 4, 5];
let hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven); // true
```

### every()

The `every()` method tests whether all elements in the array pass the test.

### Example

```javascript
let numbers = [1, 2, 3, 4, 5];
let allPositive = numbers.every((num) => num > 0);
console.log(allPositive); // true
```

## 13. flat and flatMap

### flat()

The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

### Example

```javascript
let arr = [1, [2, [3, [4, 5]]]];
let flatArr = arr.flat(2);
console.log(flatArr); // [1, 2, 3, [4, 5]]
```

### flatMap()

The `flatMap()` method first maps each element using a mapping function, then flattens the result into a new array.

### Example

```javascript
let arr = [1, 2, 3];
let flatMappedArr = arr.flatMap((num) => [num, num * 2]);
console.log(flatMappedArr); // [1, 2, 2, 4, 3, 6]
```

## 14. Sorting Arrays

### sort()

The `sort()` method sorts the elements of an array in place and returns the sorted array.

### Example

```javascript
let numbers = [5, 3, 8, 1];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 3, 5, 8]
```

## 15. More Ways of Creating and Filling Arrays

### Array.from()

Creates a new, shallow-copied Array instance from an array-like or iterable object.

### Example

```javascript
let str = "hello";
let arr = Array.from(str);
console.log(arr); // ['h', 'e', 'l', 'l', 'o']
```

### Array.of()

Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

### Example

```javascript
let arr = Array.of(1, 2, 3);
console.log(arr); // [1, 2, 3]
```

### fill()

Fills all the elements of an array from a start index to an end index with a static value.

### Example

```javascript
let arr = [1, 2, 3, 4];
arr.fill(0, 1, 3);
console.log(arr); // [1, 0, 0, 4]
```

### Example

```javascript
let arr = new Array(5).fill("x");
console.log(arr); // ['x', 'x', 'x', 'x', 'x']
```

### Tasks: Data Transformations and Array Methods

### Beginner asks: Data Transformations and Array Methods

1. **Task 1: Extract and Transform**

   - Given an array of objects, extract the ages and create a new array of double the ages using `map`.

   ```javascript
   let people = [
     { name: "John", age: 25 },
     { name: "Jane", age: 30 },
     { name: "Mary", age: 22 },
   ];
   // Your code here
   ```

2. **Task 2: Filter and Map**

   - Use `filter` to get all people older than 25 and then use `map` to get their names.

   ```javascript
   let people = [
     { name: "John", age: 25 },
     { name: "Jane", age: 30 },
     { name: "Mary", age: 22 },
   ];
   // Your code here
   ```

3. **Task 3: Sum of Prices**

   - Calculate the total price of all items using `reduce`.

   ```javascript
   let items = [
     { name: "apple", price: 1.2 },
     { name: "banana", price: 0.8 },
     { name: "orange", price: 1.5 },
   ];
   // Your code here
   ```

4. **Task 4: Chaining Methods**

   - First, filter out the people younger than 25, then map to get their ages, and finally sum up the ages using `reduce`.

   ```javascript
   let people = [
     { name: "John", age: 25 },
     { name: "Jane", age: 30 },
     { name: "Mary", age: 22 },
     { name: "Tom", age: 27 },
   ];
   // Your code here
   ```

5. **Task 5: Find and Update**

   - Use `find` to locate the person named 'Jane' and update her age to 32.

   ```javascript
   let people = [
     { name: "John", age: 25 },
     { name: "Jane", age: 30 },
     { name: "Mary", age: 22 },
   ];
   // Your code here
   ```

6. **Task 6: Index and Remove**

   - Use `findIndex` to find the index of 'Mary' and remove her from the array using `splice`.

   ```javascript
   let people = [
     { name: "John", age: 25 },
     { name: "Jane", age: 30 },
     { name: "Mary", age: 22 },
   ];
   // Your code here
   ```

7. **Task 7: Nested Array Flatten**

   - Use `flat` to flatten a nested array to a single level.

   ```javascript
   let nestedArray = [1, [2, [3, [4, 5]]]];
   // Your code here
   ```

8. **Task 8: Map and Flatten**

   - Use `flatMap` to map and flatten an array of words to an array of letters.

   ```javascript
   let words = ["hello", "world"];
   // Your code here
   ```

9. **Task 9: Sort by Age**

   - Sort an array of objects by age in ascending order.

   ```javascript
   let people = [
     { name: "John", age: 25 },
     { name: "Jane", age: 30 },
     { name: "Mary", age: 22 },
   ];
   // Your code here
   ```

10. **Task 10: Sort Strings**

    - Sort an array of strings in alphabetical order.

    ```javascript
    let fruits = ["banana", "apple", "orange"];
    // Your code here
    ```

11. **Task 11: Custom Fill**

    - Create an array of length 5 and fill it with the value 'x' from the second to the fourth position.

    ```javascript
    // Your code here
    ```

12. **Task 12: Copy and Modify**

    - Use `Array.from` to create a copy of an array and modify each element by adding 1.

    ```javascript
    let numbers = [1, 2, 3, 4, 5];
    // Your code here
    ```

13. **Task 13: Creating an Array from Arguments**

    - Use `Array.of` to create an array from a series of arguments.

    ```javascript
    // Your code here
    ```

14. **Task 14: Create DOM Elements from Array**

    - Create a list of DOM elements from an array of strings and append them to the body.

    ```javascript
    let items = ["Item 1", "Item 2", "Item 3"];
    // Your code here
    ```

15. **Task 15: Filter and Create DOM Elements**

    - Filter an array of numbers to keep only the even ones and create a list of DOM elements for each even number.

    ```javascript
    let numbers = [1, 2, 3, 4, 5];
    // Your code here
    ```

16. **Task 16: Chain Map, Filter, and Reduce**

    - Use `map` to square the numbers, `filter` to keep only numbers greater than 10, and `reduce` to sum them up.

    ```javascript
    let numbers = [1, 2, 3, 4, 5];
    // Your code here
    ```

17. **Task 17: Group by Age**

    - Group an array of objects by age using `reduce`.

    ```javascript
    let people = [
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Mary", age: 25 },
    ];
    // Your code here
    ```

18. **Task 18: Find and Update Nested Object**

    - Use `find` to locate an object within a nested array structure and update its property.

    ```javascript
    let data = [
      { id: 1, info: { name: "John", age: 25 } },
      { id: 2, info: { name: "Jane", age: 30 } },
    ];
    // Your code here
    ```

19. **Task 19: Filter Unique Values**

    - Use `filter` and `indexOf` to create an array of unique values.

    ```javascript
    let numbers = [1, 2, 2, 3, 4, 4, 5];
    // Your code here
    ```

20. **Task 20: Sum Nested Array Values**

    - Use `flat` and `reduce` to sum all values in a nested array.

    ```javascript
    let nestedArray = [1, [2, 3], [4, [5, 6]]];
    // Your code here
    ```

21. **Task 21: Remove Duplicates Using Set**

    - Use a `Set` and `Array.from` to remove duplicate values from an array.

    ```javascript
    let numbers = [1, 2, 2, 3, 4, 4, 5];
    // Your code here
    ```

22. **Task 22: Count Occurrences**

    - Use `reduce` to count the number of occurrences of each element in an array.

    ```javascript
    let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
    // Your code here
    ```

23. **Task 23: Calculate Average Age**

    - Use `reduce` to calculate the average age of people in an array of objects.

    ```javascript
    let people = [
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Mary", age: 22 },
    ];
    // Your code here
    ```

24. **Task 24: Flatten Deeply Nested Array**

    - Use recursion to flatten a deeply nested array.

    ```javascript
    let nestedArray = [1, [2, [3, [4, 5]]]];
    // Your code here
    ```

25. **Task 25: Custom Sort Function**
    - Write a custom sort function to sort an array of objects by a specific property.
    ```javascript
    let people = [
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Mary", age: 22 },
    ];
    // Your code here
    ```
