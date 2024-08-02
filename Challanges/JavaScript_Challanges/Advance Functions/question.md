# Advance Functions

1. **Default Parameters:**

   - **Task:** Create a function `calculateTotal` that takes two parameters: `price` and `taxRate`. Set `taxRate` to a default value of 0.1. Calculate the total price including tax.
   - **Example:**
     ```javascript
     function calculateTotal(price, taxRate = 0.1) {
       // Your code here
     }
     console.log(calculateTotal(100)); // Expected output: 110
     console.log(calculateTotal(100, 0.2)); // Expected output: 120
     ```

2. **Default Parameters:**

   - **Task:** Write a function `describePerson` that takes `name`, `age`, and `city` as parameters. Set default values for `age` to 25 and `city` to "Unknown". Print a message introducing the person.
   - **Example:**
     ```javascript
     function describePerson(name, age = 25, city = "Unknown") {
       // Your code here
     }
     describePerson("Alice"); // Expected output: "Alice is 25 years old and lives in Unknown."
     describePerson("Bob", 30, "New York"); // Expected output: "Bob is 30 years old and lives in New York."
     ```

3. **Value vs. Reference:**

   - **Task:** Demonstrate how changing a value passed by reference affects the original object, but not the primitive value. Create a function `updateProfile` that modifies an object's property but does not change the primitive value.
   - **Example:**

     ```javascript
     let a = 10;
     let profile = { name: "Alice" };

     function updateProfile(obj, value) {
       // Your code here
     }

     updateProfile(profile, a);
     console.log(a); // Expected output: 10
     console.log(profile.name); // Expected output: "Updated Name"
     ```

4. **Value vs. Reference:**

   - **Task:** Create a function `increment` that takes a number and increments it by 1. Show how this does not affect the original number outside the function. Also, create a function `updateSettings` that changes a setting within an object.
   - **Example:**

     ```javascript
     let num = 5;
     let settings = { theme: "light" };

     function increment(number) {
       // Your code here
     }

     function updateSettings(obj) {
       // Your code here
     }

     increment(num);
     updateSettings(settings);

     console.log(num); // Expected output: 5
     console.log(settings.theme); // Expected output: "dark"
     ```

5. **First-Class Functions:**

   - **Task:** Create a function `logMessage` that accepts a function as a parameter and logs the result of calling that function.
   - **Example:**

     ```javascript
     function logMessage(func) {
       // Your code here
     }

     function getMessage() {
       return "Hello, World!";
     }

     logMessage(getMessage); // Expected output: "Hello, World!"
     ```

6. **Higher-Order Functions:**

   - **Task:** Write a function `applyOperation` that accepts an array of numbers and a function as parameters. Apply the function to each element in the array and return the new array.
   - **Example:**

     ```javascript
     function applyOperation(arr, operation) {
       // Your code here
     }

     function square(num) {
       return num * num;
     }

     console.log(applyOperation([1, 2, 3], square)); // Expected output: [1, 4, 9]
     ```

7. **Higher-Order Functions:**

   - **Task:** Implement a higher-order function `filterNumbers` that takes an array of numbers and a predicate function. Return a new array with numbers that satisfy the predicate.
   - **Example:**

     ```javascript
     function filterNumbers(arr, predicate) {
       // Your code here
     }

     function isEven(num) {
       return num % 2 === 0;
     }

     console.log(filterNumbers([1, 2, 3, 4], isEven)); // Expected output: [2, 4]
     ```

8. **Callback Functions:**

   - **Task:** Create a function `processData` that simulates processing some data and accepts a callback function to be executed after processing is complete.
   - **Example:**

     ```javascript
     function processData(callback) {
       // Your code here
     }

     function onComplete() {
       console.log("Processing complete.");
     }

     processData(onComplete); // Expected output: "Processing complete."
     ```

9. **Callback Functions:**

   - **Task:** Write a function `asyncTask` that simulates an asynchronous task and accepts a callback function to be executed after a delay. Log the result of the callback.
   - **Example:**

     ```javascript
     function asyncTask(callback) {
       // Your code here
     }

     function afterDelay() {
       console.log("Task completed.");
     }

     asyncTask(afterDelay); // Expected output (after a delay): "Task completed."
     ```

10. **Functions Returning Functions:**

    - **Task:** Develop a function `createGreeting` that takes a `greeting` message and returns a new function. This returned function should take a `name` and return a full greeting message.
    - **Example:**

      ```javascript
      function createGreeting(greeting) {
        // Your code here
      }

      const greetHello = createGreeting("Hello");
      console.log(greetHello("Alice")); // Expected output: "Hello, Alice!"
      ```

11. **Functions Returning Functions:**

    - **Task:** Implement a function `createAdder` that takes a number `x` and returns a new function. This new function should add `x` to its argument.
    - **Example:**

      ```javascript
      function createAdder(x) {
        // Your code here
      }

      const addFive = createAdder(5);
      console.log(addFive(10)); // Expected output: 15
      ```

12. **Functions Returning Functions:**

    - **Task:** Write a function `createCounter` that returns an object with two methods: `increment` and `getCount`. The `increment` method increases the count, and the `getCount` method returns the current count.
    - **Example:**

      ```javascript
      function createCounter() {
        // Your code here
      }

      const counter = createCounter();
      counter.increment();
      console.log(counter.getCount()); // Expected output: 1
      ```

13. **Default Parameters & Callback Functions:**

    - **Task:** Create a function `fetchUserData` that accepts an ID and a callback function. If no callback is provided, use a default callback that logs a message indicating that no callback was provided.
    - **Example:**

      ```javascript
      function fetchUserData(
        id,
        callback = () => console.log("No callback provided")
      ) {
        // Your code here
      }

      fetchUserData(1); // Expected output: "No callback provided"
      fetchUserData(2, (data) => console.log(data)); // Expected output: "Fetched user data"
      ```

14. **Higher-Order Functions & Callback Functions:**

    - **Task:** Write a function `processArray` that accepts an array and two functions: one to transform each element and another to filter the elements. Return the transformed and filtered array.
    - **Example:**

      ```javascript
      function processArray(arr, transform, filter) {
        // Your code here
      }

      function double(num) {
        return num * 2;
      }

      function isPositive(num) {
        return num > 0;
      }

      console.log(processArray([1, -2, 3, -4], double, isPositive)); // Expected output: [2, 6]
      ```

15. **Functions Accepting Callback Functions:**

    - **Task:** Create a function `performOperation` that takes a number and a callback function. The callback function should perform an operation on the number and return the result.
    - **Example:**

      ```javascript
      function performOperation(num, operation) {
        // Your code here
      }

      function square(n) {
        return n * n;
      }

      console.log(performOperation(5, square)); // Expected output: 25
      ```

16. **Functions Returning Functions:**

    - **Task:** Develop a function `createPower` that takes an exponent and returns a function. This function should take a base number and return the base number raised to the given exponent.
    - **Example:**

      ```javascript
      function createPower(exponent) {
        // Your code here
      }

      const square = createPower(2);
      console.log(square(4)); // Expected output: 16
      ```

17. **First-Class Functions:**

    - **Task:** Implement a function `compose` that takes two functions as arguments and returns a new function. This new function should be the composition of the two functions, applying the second function to the result of the first function.
    - **Example:**

      ```javascript
      function compose(f, g) {
        // Your code here
      }

      function addTwo(x) {
        return x + 2;
      }

      function
      ```

multiplyByThree(x) {
return x \* 3;
}

      const addThenMultiply = compose(multiplyByThree, addTwo);
      console.log(addThenMultiply(5)); // Expected output: 21
      ```

18. **Default Parameters & Functions Returning Functions:**

    - **Task:** Write a function `generateDiscount` that takes a discount percentage and returns a function that calculates the final price after applying the discount to a given amount.
    - **Example:**

      ```javascript
      function generateDiscount(discount) {
        // Your code here
      }

      const applyTenPercent = generateDiscount(0.1);
      console.log(applyTenPercent(100)); // Expected output: 90
      ```

19. **Callback Functions & Functions Accepting Callback Functions:**

    - **Task:** Create a function `processItems` that accepts an array of items and a callback function. The callback should perform some operation on each item in the array and return a new array with the results.
    - **Example:**

      ```javascript
      function processItems(items, callback) {
        // Your code here
      }

      function capitalize(item) {
        return item.toUpperCase();
      }

      console.log(processItems(["apple", "banana", "cherry"], capitalize)); // Expected output: ["APPLE", "BANANA", "CHERRY"]
      ```

20. **Value vs. Reference & Higher-Order Functions:**

    - **Task:** Develop a function `updateValues` that accepts an object and a function to modify the object's properties. Show how passing different functions can result in different modifications to the object.
    - **Example:**

      ```javascript
      let settings = { theme: "light", notifications: true };

      function updateValues(obj, updater) {
        // Your code here
      }

      function disableNotifications(obj) {
        obj.notifications = false;
      }

      updateValues(settings, disableNotifications);
      console.log(settings.notifications); // Expected output: false
      ```
