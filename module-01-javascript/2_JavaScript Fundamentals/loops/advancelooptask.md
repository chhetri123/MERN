## Looping Tasks - README

### `forEach` Loop Tasks

1. **Task 1:** Use the `forEach` loop to log each element of the array `['apple', 'banana', 'cherry']` to the console.

2. **Task 2:** Use the `forEach` loop to log each element and its index from the array `['cat', 'dog', 'bird']` to the console in the format `Index: x, Element: y`.

3. **Task 3:** Use the `forEach` loop to log the square of each number from the array `[1, 2, 3, 4, 5]` to the console.

4. **Task 4:** Use the `forEach` loop to log each property and value from the object `{ name: 'Alice', age: 25, job: 'developer' }` to the console in the format `Property: x, Value: y`.

5. **Task 5:** Use the `forEach` loop to calculate and log the total sum of the numbers in the array `[10, 20, 30, 40, 50]`.

### `for...of` Loop Tasks

6. **Task 6:** Use the `for...of` loop to log each character of the string `'hello'` to the console.

7. **Task 7:** Use the `for...of` loop to log each number from the array `[100, 200, 300]` to the console.

8. **Task 8:** Use the `for...of` loop to create a new array containing the lengths of each word in the array `['apple', 'banana', 'cherry']` and log the new array to the console.

9. **Task 9:** Use the `for...of` loop to concatenate all words in the array `['hello', 'world', 'JavaScript']` into a single string and log the result to the console.

10. **Task 10:** Use the `for...of` loop to log each word from the array `['this', 'is', 'a', 'test']` in uppercase to the console.

---

### Solutions - `index.js`

```js
// Task 1
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => console.log(fruit));

// Task 2
const animals = ["cat", "dog", "bird"];
animals.forEach((animal, index) =>
  console.log(`Index: ${index}, Element: ${animal}`)
);

// Task 3
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => console.log(number * number));

// Task 4
const person = { name: "Alice", age: 25, job: "developer" };
Object.entries(person).forEach(([key, value]) =>
  console.log(`Property: ${key}, Value: ${value}`)
);

// Task 5
const nums = [10, 20, 30, 40, 50];
let sum = 0;
nums.forEach((num) => (sum += num));
console.log(sum);

// Task 6
const greeting = "hello";
for (const char of greeting) {
  console.log(char);
}

// Task 7
const nums2 = [100, 200, 300];
for (const num of nums2) {
  console.log(num);
}

// Task 8
const words = ["apple", "banana", "cherry"];
const lengths = [];
for (const word of words) {
  lengths.push(word.length);
}
console.log(lengths);

// Task 9
const phrases = ["hello", "world", "JavaScript"];
let concatenatedString = "";
for (const phrase of phrases) {
  concatenatedString += phrase + " ";
}
console.log(concatenatedString.trim());

// Task 10
const testWords = ["this", "is", "a", "test"];
for (const word of testWords) {
  console.log(word.toUpperCase());
}
```
